"use client";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "crimson" | "teal" | "gold" | "navy" | "clip";
  rotate?: number;
  className?: string;
};

const variantStyles = {
  crimson: "bg-crimson text-white",
  teal:    "bg-teal text-white",
  gold:    "bg-gold text-ink",
  navy:    "bg-navy text-white",
  clip:    "bg-clip text-white",
};

export function Badge({
  children,
  variant = "crimson",
  rotate = 2,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block font-mono text-[11px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-[4px]",
        variantStyles[variant],
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}
