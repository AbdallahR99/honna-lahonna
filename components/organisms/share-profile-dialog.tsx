"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Share } from "lucide-react";
interface Props {
  path?: "services";
  slug?: string; // Optional slug prop
  [key: string]: any; // Allow additional props if needed
}
export function ShareDialog({
  path = "services",
  slug,
}: Props): React.ReactNode {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          {" "}
          <Share /> {"مشاركة"}
        </Button>
      </DialogTrigger>
      <DialogContent
        dir="rtl"
        className="sm:max-w-md text-start flex-col-reverse dir-rtl"
      >
        <DialogHeader className="dir-rtl text-start">
          <DialogTitle className="dir-rtl text-center">
            {"مشاركة الرابط"}
          </DialogTitle>
          <DialogDescription className="text-center">
            {"شارك رابط صفحتك"}
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              {"الرابط"}
            </Label>
            <Input
              id="link"
              className="bg-white text-center"
              defaultValue={`${window.location.origin}/${path}${
                slug ? `/${slug}` : ""
              }`}
              readOnly
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              {"إغلاق"}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
