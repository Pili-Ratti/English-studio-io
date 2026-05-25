"use client";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import BorderGlow from "@/components/ui/BorderGlow";

type PriceMode = "individual" | "group";

const planMeta = [
  { id: "conversation", badgeColor: "text-gray-600 bg-gray-100", featured: false },
  { id: "full-english",  badgeColor: "text-green-700 bg-green-50 border border-green-100", featured: true },
  { id: "enterprise",   badgeColor: "text-gray-600 bg-gray-100", featured: false },
] as const;

export function PricingSection() {
  const [mode, setMode] = useState<PriceMode>("individual");
  const { lang } = useLanguage();
  const t = translations[lang].pricing;

  return (
    <section id="pricing" className="bg-gray-50 py-24 px-6">
      <div className="max-w-[1140px] mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold italic text-gray-900 mb-3" style={{ fontSize: "clamp(32px, 5vw, 48px)" }}>
            {t.h2}
          </h2>
          <p className="text-[18px] text-gray-500">{t.sub}</p>
        </div>

        {/* Toggle */}
        <div className="flex flex-col items-center gap-3 mb-12">
          <div className="flex bg-white border border-gray-200 rounded-full p-1 gap-0.5 shadow-sm" role="group" aria-label="Pricing type">
            {(["individual", "group"] as PriceMode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                aria-pressed={mode === m}
                className={`text-[14px] font-bold px-6 py-2.5 rounded-full border-0 transition-all duration-150 cursor-pointer ${
                  mode === m ? "bg-gray-900 text-white" : "text-gray-500 bg-transparent"
                }`}
              >
                {m === "individual" ? t.toggleInd : t.toggleGrp}
              </button>
            ))}
          </div>
          <p className="text-[13px] text-gray-400 font-semibold">{t.toggleNote}</p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
          {t.plans.map((plan, i) => (
            <PlanCard key={planMeta[i].id} plan={plan} meta={planMeta[i]} mode={mode} mostPopular={t.mostPopular} noCommit={t.noCommit} />
          ))}
        </div>

      </div>
    </section>
  );
}

interface PlanData {
  badge: string;
  name: string;
  tagline: string;
  desc: string;
  includes: readonly string[];
  bestFor: string;
  cta: string;
  priceInd?: string;
  priceSaveInd?: string;
  priceGrp?: string;
  noteGrp?: string;
  priceCustom?: string;
  priceCustomSub?: string;
  priceCustomXs?: string;
}

type PlanMetaItem = typeof planMeta[number];

const glowColors: Record<string, string[]> = {
  "conversation": ["#9ca3af", "#d1d5db", "#6b7280"],
  "full-english":  ["#22C55E", "#4ADE80", "#16A34A"],
  "enterprise":    ["#6b7280", "#4b5563", "#9ca3af"],
};

const glowColorStr: Record<string, string> = {
  "conversation": "220 10 60",
  "full-english":  "142 71 45",
  "enterprise":    "220 9 46",
};

function PlanCard({
  plan,
  meta,
  mode,
  mostPopular,
  noCommit,
}: {
  plan: PlanData;
  meta: PlanMetaItem;
  mode: PriceMode;
  mostPopular: string;
  noCommit: string;
}) {
  const isEnterprise = meta.id === "enterprise";

  return (
    <BorderGlow
      backgroundColor="#ffffff"
      borderRadius={16}
      colors={glowColors[meta.id]}
      glowColor={glowColorStr[meta.id]}
      glowIntensity={meta.featured ? 1.0 : 0.7}
      fillOpacity={meta.featured ? 0.25 : 0.15}
      className={`relative hover:-translate-y-1 transition-transform duration-200 ${meta.featured ? "ring-2 ring-green-400 ring-offset-2" : ""}`}
    >

      <div className="p-8">
      {/* Popular badge */}
      {meta.featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[12px] font-extrabold tracking-[0.06em] uppercase px-5 py-1.5 rounded-full whitespace-nowrap">
          {mostPopular}
        </div>
      )}

      {/* Tier badge */}
      <span className={`inline-block text-[12px] font-bold px-3 py-1 rounded-full mb-4 ${meta.badgeColor}`}>
        {plan.badge}
      </span>

      <div className="text-[26px] font-extrabold text-gray-900 mb-1">{plan.name}</div>
      <div className="text-[14px] text-gray-400 italic mb-4 leading-[1.4]">{plan.tagline}</div>

      <p className="text-[14px] text-gray-600 leading-[1.65] mb-5 pb-5 border-b border-gray-100">
        {plan.desc}
      </p>

      <ul className="mb-5 space-y-2.5">
        {plan.includes.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[13.5px] text-gray-700">
            <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>

      <p className="text-[12px] font-semibold text-gray-400 mb-5 leading-[1.55]">
        {plan.bestFor}
      </p>

      {/* Price */}
      <div className="mb-6">
        {isEnterprise && "priceCustom" in plan ? (
          <>
            <div className="text-[28px] font-extrabold text-gray-900">{plan.priceCustom}</div>
            {"priceCustomSub" in plan && <div className="text-[13px] text-gray-400 mt-1">{plan.priceCustomSub}</div>}
            {"priceCustomXs" in plan && <div className="text-[12px] text-gray-400 mt-1">{plan.priceCustomXs}</div>}
          </>
        ) : mode === "individual" && "priceInd" in plan ? (
          <>
            <div className={`text-[21px] font-extrabold leading-snug ${meta.featured ? "text-green-600" : "text-gray-900"}`}>
              {plan.priceInd}
            </div>
            {"priceSaveInd" in plan && (
              <div className="text-[13px] text-green-600 font-semibold mt-1">{plan.priceSaveInd}</div>
            )}
          </>
        ) : "priceGrp" in plan ? (
          <>
            <div className={`text-[21px] font-extrabold leading-snug ${meta.featured ? "text-green-600" : "text-gray-900"}`}>
              {plan.priceGrp}
            </div>
            {"noteGrp" in plan && (
              <div className="text-[13px] text-gray-400 mt-1">{plan.noteGrp}</div>
            )}
          </>
        ) : null}
      </div>

      {/* CTA */}
      <a
        href="#"
        className={`block w-full text-center py-3.5 px-5 rounded-full font-bold text-[15px] transition-all duration-150 no-underline ${
          meta.featured
            ? "bg-green-500 text-white hover:bg-green-600"
            : isEnterprise
            ? "bg-gray-900 text-white hover:bg-gray-800"
            : "bg-white text-gray-900 border border-gray-200 hover:border-gray-400"
        }`}
      >
        {plan.cta}
      </a>

      {isEnterprise && (
        <p className="text-[13px] text-gray-400 text-center mt-2.5">{noCommit}</p>
      )}
      </div>
    </BorderGlow>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
