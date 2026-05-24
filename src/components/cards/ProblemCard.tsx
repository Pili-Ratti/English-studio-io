"use client";
import { cn } from "@/lib/utils";
import { Paperclip } from "@/components/ui/Paperclip";
import { useReveal } from "@/lib/useReveal";

type ProblemCardProps = {
  stamp: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  rotate?: number;
  className?: string;
};

export function ProblemCard({
  stamp,
  children,
  icon,
  rotate = 0,
  className,
}: ProblemCardProps) {
  const ref = useReveal(0.08);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "group relative bg-paper-alt p-7 shadow-pin",
        "opacity-0 translate-y-7 transition-all duration-500 ease-out",
        "data-[revealed=true]:opacity-100 data-[revealed=true]:translate-y-0",
        "hover:!rotate-0 hover:-translate-y-2 hover:scale-[1.015] hover:shadow-card-hover hover:z-10",
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <Paperclip className="absolute -top-3 right-4" />
      <span className="block font-mono text-[10.5px] font-bold tracking-[0.1em] uppercase text-teal mb-3">
        {stamp}
      </span>
      {icon && <div className="float-right ml-3 mb-2">{icon}</div>}
      <p className="text-[14px] leading-[1.65] text-ink">{children}</p>
    </div>
  );
}
