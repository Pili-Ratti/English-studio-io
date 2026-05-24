"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { TornCard } from "@/components/cards/TornCard";
import { PricingCard, type PricingBundle } from "@/components/cards/PricingCard";
import { Paperclip } from "@/components/ui/Paperclip";

type PriceMode = "individual" | "group";

const conversationPricing: PricingBundle = {
  individual: { per_class: "$35 / class", per_month: "$120 / month", save_note: "Save $20 with the monthly plan" },
  group:      { per_person_class: "$20 / person / class", per_month: "$70 / month", note: "Groups of 2–4. Schedule together, split the cost." },
};

const fullEnglishPricing: PricingBundle = {
  individual: { per_class: "$45 / class", per_month: "$160 / month", save_note: "Save $20 with the monthly plan" },
  group:      { per_person_class: "$28 / person / class", per_month: "$95 / month", note: "All participants receive individual written feedback." },
};

const enterprisePricing: PricingBundle = {
  fixed: {
    label: "Custom quote",
    sub:   "Based on team size and session frequency.",
    xs:    "Starting from a flat monthly rate · Response within 24 hours",
  },
};

const trustItems = [
  "Free trial class · no strings attached",
  "Cancel or pause anytime",
  "Custom class plan from day one",
  "Online via Google Meet or Zoom",
];

export function PricingSection() {
  const [priceMode, setPriceMode] = useState<PriceMode>("individual");

  return (
    <section className="bg-[#C4A84A] py-28 px-6 relative">

      {/* Title card */}
      <TornCard torn="bottom" variant="paper" rotate={-0.5} shadow="card" className="max-w-[820px] mx-auto mb-12 text-center px-14 py-12 relative max-md:px-6">
        <Paperclip className="absolute -top-3 left-6" />
        <Badge variant="crimson" rotate={-1.5} className="mb-5">PICK YOUR PLAN</Badge>
        <h2 className="font-display font-black text-[48px] leading-[1.1] text-ink mb-3 max-md:text-[30px]">
          Built around you. Not around a syllabus.
        </h2>
        <p className="text-[18px] text-ink">All plans include a free trial class. No commitment until you&apos;re sure.</p>
      </TornCard>

      {/* Individual / Group toggle */}
      <div className="flex flex-col items-center gap-3 mb-12">
        <div className="flex bg-paper rounded-[32px] p-1 gap-1 shadow-card" role="group" aria-label="Pricing type">
          {(["individual", "group"] as PriceMode[]).map((mode) => (
            <button
              key={mode}
              onClick={() => setPriceMode(mode)}
              aria-pressed={priceMode === mode}
              className={`font-mono text-[13px] font-bold tracking-[0.08em] uppercase px-7 py-2.5 rounded-[24px] border-2 transition-all duration-200 cursor-pointer ${
                priceMode === mode
                  ? "bg-crimson text-white border-crimson"
                  : "bg-transparent text-ink border-dashed border-ink/30 hover:border-ink/60"
              }`}
            >
              {mode === "individual" ? "Individual" : "Group (2–4)"}
            </button>
          ))}
        </div>
        <p className="font-mono text-[12px] text-ink opacity-65">Enterprise pricing is fixed — no toggle needed.</p>
      </div>

      {/* Pricing grid */}
      <div className="grid grid-cols-3 gap-7 max-w-[1100px] mx-auto mb-16 items-start max-xl:grid-cols-2 max-md:grid-cols-1">
        <PricingCard
          tier="conversation"
          badge="CONVERSATION"
          name="Conversation"
          tagline='"For people who already know English — they just need to start living in it."'
          description="Weekly sessions built around real topics. No grammar drills — just fluency work. You talk, you get natural feedback in real time, and you stop overthinking every sentence."
          includes={[
            "Weekly 60-min conversation session",
            "Topic chosen around your interests each week",
            "Vocabulary in context (not lists — real usage)",
            "Natural feedback on fluency, not just errors",
            "Curated content between classes (articles, podcasts, reels)",
            "WhatsApp access for quick questions",
          ]}
          bestFor="BEST FOR: B1–C1 students who freeze when they actually have to speak. Professionals who need English in calls and meetings."
          pricing={conversationPricing}
          priceMode={priceMode}
          rotate={-1}
          ctaLabel="Book your free trial →"
        />

        <PricingCard
          tier="full-english"
          badge="FULL ENGLISH"
          name="Full English"
          tagline='"Grammar, speaking, listening, writing — all of it, built around you."'
          description="Structured, cohesive classes that cover all four skills. Every class is a custom-built presentation. Grammar explained with real examples, listening work, writing feedback, and speaking practice every session. There's a thread — every class connects to the next."
          includes={[
            "Weekly 90-min structured class",
            "Custom-built presentation for every session",
            "Grammar + vocabulary + listening + speaking + writing",
            "Written feedback after every class",
            "Personal progress tracker updated monthly",
            "Homework tailored to your specific weak points",
            "WhatsApp access for follow-up questions during the week",
          ]}
          bestFor="BEST FOR: Students building from scratch or filling gaps. People preparing for IELTS, job interviews, or professional advancement."
          pricing={fullEnglishPricing}
          priceMode={priceMode}
          featured
          rotate={0}
          ctaLabel="Book your free trial →"
        />

        <PricingCard
          tier="enterprise"
          badge="ENTERPRISE"
          name="Enterprise"
          tagline='"English for your team. Built around your industry."'
          description="A fully custom English program for companies. Whether your team needs to communicate with international clients, prep for presentations, or write better emails — this is built from scratch around your business, your industry, and your people."
          includes={[
            "Free initial needs assessment",
            "Fully custom curriculum by industry and team goals",
            "Group sessions with flexible scheduling",
            "Business English: emails, meetings, presentations, negotiations",
            "Individual progress reports per employee",
            "Dedicated WhatsApp channel for the team",
            "Monthly program review and adjustments",
          ]}
          bestFor="BEST FOR: Companies with international clients. Remote teams working in English. Employees preparing for promotions or cross-border roles."
          pricing={enterprisePricing}
          rotate={1}
          ctaLabel="Get a free quote →"
        />
      </div>

      {/* Trust marquee */}
      <div className="max-w-[920px] mx-auto mb-16 overflow-hidden relative">
        <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-[#C4A84A] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-[#C4A84A] to-transparent z-10 pointer-events-none" />
        <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
          {[...trustItems, ...trustItems].map((item, i) => (
            <div
              key={i}
              className="bg-paper px-5 py-2.5 pb-3.5 font-mono text-[10.5px] tracking-[0.06em] uppercase text-ink whitespace-nowrap shadow-pin text-center leading-[1.4]"
              style={{ transform: `rotate(${[-1.5, 1, -0.8, 1.3][i % 4]}deg)` }}
              aria-hidden={i >= trustItems.length}
              role={i < trustItems.length ? "listitem" : undefined}
            >
              <span className="block w-3 h-3 rounded-full border-2 border-[#bbb] mx-auto mb-2" />
              {item}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
