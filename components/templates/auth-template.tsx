import { AuthPromoSection } from "@/components/organisms/auth-promo-section";
import React from "react";

export default function AuthTemplate({
  children,

  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="min-h-full flex" {...props}>
      <div className="flex-1 lg:flex-1 flex items-center justify-center p-4 lg:p-8 bg-gray-50">
        {children}
      </div>
      <AuthPromoSection className="hidden lg:flex lg:flex-1" />
    </div>
  );
}
