"use client";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Paperclip } from "@/components/ui/Paperclip";
import { GoldStar } from "@/components/ui/GoldStar";

export type PricingTier = "conversation" | "full-english" | "enterprise";

export type PricingBundle = {
  individual?: { per_class: string; per_month: string; save_note?: string };
  group?: { per_person_class: string; per_month: string; note?: string };
  fixed?: { label: string; sub: string; xs?: string };
};

export type PricingCardProps = {
  tier: PricingTier;
  badge: string;
  name: string;
  tagline: string;
  description: string;
  includes: string[];
  bestFor: string;
  pricing: PricingBundle;
  priceMode?: "individual" | "group";
  featured?: boolean;
  rotate?: number;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

const tierStyles: Record<PricingTier, { bg: string; cta: string; headColor: string }> = {
  "conversation": {
    bg:        "bg-paper",
    cta:       "bg-crimson text-white hover:-translate-y-0.5 active:translate-y-0",
    headColor: "text-teal",
  },
  "full-english": {
    bg:        "bg-paper-warm border-2 border-teal",
    cta:       "bg-teal text-white hover:-translate-y-0.5 active:translate-y-0",
    headColor: "text-teal",
  },
  "enterprise": {
    bg:        "bg-[#E0D5BD]",
    cta:       "bg-transparent text-teal border-2 border-teal hover:bg-teal hover:text-white",
    headColor: "text-navy",
  },
};

export function PricingCard({
  tier,
  badge,
  name,
  tagline,
  description,
  includes,
  bestFor,
  pricing,
  priceMode = "individual",
  featured = false,
  rotate = 0,
  ctaLabel = "Book your free trial →",
  ctaHref = "#",
  className,
}: PricingCardProps) {
  const s = tierStyles[tier];

  return (
    <div
      className={cn(
        "group relative px-8 pb-9 shadow-card transition-all duration-300",
        s.bg,
        featured ? "pt-16" : "pt-11",
        "hover:-translate-y-2 hover:shadow-card-hover hover:z-10",
        featured && "animate-pulse-border",
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Top decoration */}
      {featured ? (
        <>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 rotate-[3deg] border-2 border-crimson bg-paper-alt px-4 py-1 font-display font-black text-[12px] text-crimson whitespace-nowrap shadow-pin">
            MOST POPULAR ★
          </div>
          <GoldStar size={22} className="absolute top-4 left-4" />
          <GoldStar size={22} className="absolute top-4 right-4" />
          {/* binder clip */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2" aria-hidden="true">
            <svg width="34" height="30" viewBox="0 0 44 40" fill="none">
              <rect x="6" y="13" width="32" height="22" rx="2" fill="#888" stroke="#666" strokeWidth="1"/>
              <path d="M6 24 L0 9 L9 7 L13 24" fill="#999" stroke="#666" strokeWidth="0.8"/>
              <path d="M38 24 L44 9 L35 7 L31 24" fill="#999" stroke="#666" strokeWidth="0.8"/>
              <rect x="8" y="15" width="28" height="4" rx="1" fill="#aaa"/>
            </svg>
          </div>
        </>
      ) : (
        <Paperclip className="absolute -top-3.5 left-5" size={tier === "enterprise" ? 26 : 26} color={tier === "enterprise" ? "#1B3A6B" : undefined} />
      )}

      {/* Compass (non-featured only) */}
      {tier !== "full-english" && (
        <div className="absolute top-3.5 right-3.5 opacity-45" aria-hidden="true">
          <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="16" stroke={tier === "enterprise" ? "#1B3A6B" : "#2B5EA7"} strokeWidth="1.2"/>
            <circle cx="20" cy="20" r="3" stroke={tier === "enterprise" ? "#1B3A6B" : "#2B5EA7"} strokeWidth="1"/>
            <polygon points="20,6 22,17 20,16 18,17" fill={tier === "enterprise" ? "#1B3A6B" : "#2B5EA7"}/>
            <polygon points="20,34 22,23 20,24 18,23" fill={tier === "enterprise" ? "#1B3A6B" : "#2B5EA7"} opacity="0.35"/>
            <polygon points="6,20 17,18 16,20 17,22" fill={tier === "enterprise" ? "#1B3A6B" : "#2B5EA7"} opacity="0.35"/>
            <polygon points="34,20 23,18 24,20 23,22" fill={tier === "enterprise" ? "#1B3A6B" : "#2B5EA7"} opacity="0.35"/>
            <text x="20" y="9" textAnchor="middle" fontSize="5" fontFamily="sans-serif" fill={tier === "enterprise" ? "#1B3A6B" : "#2B5EA7"} fontWeight="bold">N</text>
          </svg>
        </div>
      )}

      <Badge variant={tier === "enterprise" ? "navy" : tier === "full-english" ? "teal" : "crimson"} rotate={tier === "full-english" ? -1.5 : 2} className="mb-3.5">
        {badge}
      </Badge>

      <div className={cn("font-display font-black text-[32px] leading-none mb-1.5", s.headColor, featured && "text-[34px]")}>
        {name}
      </div>

      <div className="font-handwrite text-[17px] italic text-ink mb-3.5">{tagline}</div>

      <p className="text-[13.5px] leading-[1.65] text-ink mb-4 pb-4 border-b border-dashed border-black/20">
        {description}
      </p>

      <ul className="mb-4 space-y-1">
        {includes.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-[13px] text-ink">
            <span className="text-teal font-bold flex-shrink-0 mt-0.5">✓</span>
            {item}
          </li>
        ))}
      </ul>

      <p className="font-mono text-[10.5px] tracking-[0.07em] uppercase text-ink-muted mb-5 leading-[1.55]">
        {bestFor}
      </p>

      {/* Pricing */}
      <div className="mb-5">
        {pricing.fixed ? (
          <>
            <div className={cn("font-display font-black text-[28px]", s.headColor)}>{pricing.fixed.label}</div>
            {pricing.fixed.sub && <div className="text-[12.5px] text-ink-muted mt-1">{pricing.fixed.sub}</div>}
            {pricing.fixed.xs  && <div className="font-mono text-[11px] text-ink-muted mt-1">{pricing.fixed.xs}</div>}
          </>
        ) : priceMode === "individual" && pricing.individual ? (
          <>
            <div className={cn("font-display font-black text-[22px] leading-snug", s.headColor)}>
              {pricing.individual.per_class} &nbsp;·&nbsp; {pricing.individual.per_month}
            </div>
            {pricing.individual.save_note && (
              <div className="font-handwrite text-[15px] text-ink mt-1">{pricing.individual.save_note}</div>
            )}
          </>
        ) : pricing.group ? (
          <>
            <div className={cn("font-display font-black text-[22px] leading-snug", s.headColor)}>
              {pricing.group.per_person_class} &nbsp;·&nbsp; {pricing.group.per_month}
            </div>
            {pricing.group.note && (
              <div className="text-[12.5px] text-ink-muted mt-1">{pricing.group.note}</div>
            )}
          </>
        ) : null}
      </div>

      <a
        href={ctaHref}
        className={cn(
          "block w-full text-center py-3 px-5 font-display font-bold text-[15px] rounded-[6px] shadow-stamp transition-all duration-200",
          s.cta
        )}
      >
        {ctaLabel}
      </a>

      {tier === "enterprise" && (
        <p className="font-handwrite text-[14px] text-ink-muted text-center mt-2">No commitment. Just a conversation.</p>
      )}
    </div>
  );
}
