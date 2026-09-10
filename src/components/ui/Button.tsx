"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "emergency" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-full cursor-pointer",
          variant === "primary" && "bg-medical-red text-white hover:bg-medical-red-dark shadow-lg hover:shadow-xl",
          variant === "secondary" && "bg-deep-navy text-white hover:bg-deep-navy/90",
          variant === "emergency" && "bg-medical-red text-white hover:bg-medical-red-dark emergency-pulse glow-red",
          variant === "outline" && "border-2 border-medical-red text-medical-red hover:bg-medical-red hover:text-white",
          variant === "ghost" && "bg-transparent text-medical-red hover:bg-medical-red/10",
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-base",
          size === "lg" && "px-8 py-4 text-lg",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
