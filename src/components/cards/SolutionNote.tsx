"use client";
import { cn } from "@/lib/utils";
import { GoldStar } from "@/components/ui/GoldStar";
import { useReveal } from "@/lib/useReveal";

type SolutionNoteProps = {
  title: string;
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function SolutionNote({ title, children, delay = 0, className }: SolutionNoteProps) {
  const ref = useReveal(0.1);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "group flex gap-4 items-start bg-paper p-5 shadow-pin",
        "opacity-0 -translate-x-7 transition-all duration-[600ms] ease-out",
        "data-[revealed=true]:opacity-100 data-[revealed=true]:translate-x-0",
        "hover:translate-x-1.5 hover:shadow-card",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <GoldStar size={22} spin className="mt-1" />
      <div>
        <h3 className="font-display font-bold text-[16px] text-teal mb-1">{title}</h3>
        <p className="text-[14px] leading-[1.65] text-ink">{children}</p>
      </div>
    </div>
  );
}
