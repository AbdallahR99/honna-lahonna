"use server";
import { PrismaClient } from "@/lib/generated/prisma";
import { actionClient } from "@/lib/safe-action";
import { createSsrClient } from "@/lib/supabase/server";
import { acceptAnySchema, completeFormSchema } from "@/lib/validations";
import { returnValidationErrors } from "next-safe-action";

export const registerProviderClientAction = actionClient
  .inputSchema(acceptAnySchema)
  .action(async ({ parsedInput: data }) => {
    const prisma = new PrismaClient();
    const supabase = await createSsrClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (!user || error) {
      return returnValidationErrors(acceptAnySchema, {
        _errors: [
          "User not authenticated. Please log in to register as a service provider.",
        ],
      });
    }
    // debugger;
    delete data?.logo_image_file;
    delete data?.id_card_front_image_file;
    delete data?.id_card_back_image_file;
    delete data?.video_url_file;
    delete data?.certificates_images_files;
    delete data?.document_list_files;

    let userPublicData = await prisma.users.findUnique({
      where: {
        user_id: user.id,
      },
    });
    if (!userPublicData) {
      userPublicData = await prisma.users.create({
        data: {
          user_id: user.id,
          email: user.email || "",
          phone: user.phone || "",
          first_name: user.user_metadata?.first_name || "",
          last_name: user.user_metadata?.last_name || "",
          created_by: user.id,
        },
      });
    }
    const results = await prisma.service_providers.create({
      data: {
        ...data,
        user_id: userPublicData.id,
        created_by: user.id,
      },
    });
    console.log("Service Provider Created:", results);
    if (results) {
      await supabase.auth.updateUser({
        data: {
          is_service_provider: true,
          service_provider_id: results.id,
        },
      });
    }

    return JSON.parse(JSON.stringify(results));
  });
