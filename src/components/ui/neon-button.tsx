import * as React from "react";
import { cn } from "@/lib/utils";

interface NeonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "lg" | "sm";
}

const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "relative overflow-hidden rounded-full font-medium transition-all duration-300",
          "before:absolute before:inset-0 before:z-0 before:h-full before:w-full before:transition-all before:duration-300",
          "hover:scale-[1.02] hover:before:opacity-100 active:scale-[0.98]",
          {
            "bg-gradient-to-r from-[#4AE290] to-[#3BCD7F] text-[#003333]":
              variant === "default",
            "border-2 border-[#4AE290] bg-transparent text-[#4AE290]":
              variant === "outline",
            "h-12 px-6 text-base": size === "default",
            "h-14 px-8 text-lg": size === "lg",
            "h-9 px-4 text-sm": size === "sm",
          },
          "before:animate-pulse before:bg-[#4AE290] before:opacity-0 before:blur-xl",
          "shadow-[0_0_15px_rgba(74,226,144,0.5)] hover:shadow-[0_0_25px_rgba(74,226,144,0.7)]",
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{props.children}</span>
      </button>
    );
  }
);
NeonButton.displayName = "NeonButton";

export { NeonButton };
