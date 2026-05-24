"use client";
import { cn } from "@/lib/utils";

type TornCardProps = {
  children: React.ReactNode;
  torn?: "bottom" | "top" | "none";
  variant?: "paper" | "warm" | "alt" | "kraft";
  rotate?: number;
  graphPaper?: boolean;
  shadow?: "card" | "pin" | "none";
  className?: string;
};

const variantBg = {
  paper: "bg-paper",
  warm:  "bg-paper-warm",
  alt:   "bg-paper-alt",
  kraft: "bg-paper-kraft",
};

const shadowStyles = {
  card: "shadow-card",
  pin:  "shadow-pin",
  none: "",
};

export function TornCard({
  children,
  torn = "bottom",
  variant = "paper",
  rotate = 0,
  graphPaper = false,
  shadow = "card",
  className,
}: TornCardProps) {
  return (
    <div
      className={cn(
        "relative",
        variantBg[variant],
        shadowStyles[shadow],
        torn === "bottom" && "torn-b-1",
        torn === "top"    && "torn-top-1",
        graphPaper        && "graph-paper",
        className
      )}
      style={rotate !== 0 ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      {children}
    </div>
  );
}
