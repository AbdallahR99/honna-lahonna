// components/atoms/form-error.tsx
import React from "react";

interface FormErrorProps {
  message?: string;
  className?: string;
}

export function FormError({ message, className = "" }: FormErrorProps) {
  if (!message) return null;

  return <p className={`text-sm text-destructive ${className}`}>{message}</p>;
}
