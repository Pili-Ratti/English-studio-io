"use client";
import { useState } from "react";

type PriceMode = "individual" | "group";

const plans = [
  {
    id: "conversation",
    badge: "Conversation",
    badgeColor: "text-pink-700 bg-pink-100",
    name: "Conversation",
    tagline: '"For people who already know English — they just need to start living in it."',
    desc: "Weekly sessions built around real topics. No grammar drills — just fluency work. You talk, you get natural feedback in real time, and you stop overthinking every sentence.",
    includes: [
      "Weekly 60-min conversation session",
      "Topic chosen around your interests each week",
      "Vocabulary in context, not lists",
      "Natural feedback on fluency",
      "Curated content between classes",
      "WhatsApp access for quick questions",
    ],
    bestFor: "Best for: B1–C1 students who freeze when they have to speak.",
    priceInd: "$35 / class · $120 / month",
    priceSaveInd: "Save $20 with the monthly plan",
    priceGrp: "$20 / person / class · $70 / month",
    noteGrp: "Groups of 2–4. Split the cost.",
    cta: "Book your free trial →",
    featured: false,
  },
  {
    id: "full-english",
    badge: "Full English",
    badgeColor: "text-green-700 bg-green-100",
    name: "Full English",
    tagline: '"Grammar, speaking, listening, writing — all of it, built around you."',
    desc: "Structured classes that cover all four skills. Every class is a custom-built presentation. Grammar with real examples, listening work, writing feedback, speaking practice every session. There's a thread — every class connects to the next.",
    includes: [
      "Weekly 90-min structured class",
      "Custom-built presentation every session",
      "Grammar + vocabulary + listening + speaking + writing",
      "Written feedback after every class",
      "Personal progress tracker updated monthly",
      "Homework tailored to your weak points",
      "WhatsApp access during the week",
    ],
    bestFor: "Best for: Students building from scratch or filling gaps. IELTS, job interviews, professional advancement.",
    priceInd: "$45 / class · $160 / month",
    priceSaveInd: "Save $20 with the monthly plan",
    priceGrp: "$28 / person / class · $95 / month",
    noteGrp: "Individual written feedback for all participants.",
    cta: "Book your free trial →",
    featured: true,
  },
  {
    id: "enterprise",
    badge: "Enterprise",
    badgeColor: "text-purple-700 bg-purple-100",
    name: "Enterprise",
    tagline: '"English for your team. Built around your industry."',
    desc: "A fully custom English program for companies. Whether your team needs to communicate with international clients, prep for presentations, or write better emails — built from scratch around your business and your people.",
    includes: [
      "Free initial needs assessment",
      "Fully custom curriculum",
      "Group sessions, flexible scheduling",
      "Business English: emails, meetings, negotiations",
      "Individual progress reports per employee",
      "Dedicated WhatsApp channel for the team",
      "Monthly program review",
    ],
    bestFor: "Best for: Companies with international clients, remote teams working in English, employees preparing for cross-border roles.",
    priceCustom: "Custom quote",
    priceCustomSub: "Based on team size and session frequency.",
    priceCustomXs: "Response within 24 hours.",
    cta: "Get a free quote →",
    featured: false,
  },
] as const;

export function PricingSection() {
  const [mode, setMode] = useState<PriceMode>("individual");

  return (
    <>
      {/* ── WAVE: white → pink-50 ── */}
      <div style={{ background: "#fff" }} aria-hidden="true">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" height="60" width="100%">
          <path d="M0,40 C480,0 960,60 1440,20 L1440,60 L0,60 Z" fill="#FDF2F8" />
        </svg>
      </div>

      <section id="pricing" className="bg-[#FDF2F8] py-24 px-6">
        <div className="max-w-[1140px] mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display font-black italic text-gray-900 mb-3" style={{ fontSize: "clamp(32px, 5vw, 48px)" }}>
              Pick your plan.
            </h2>
            <p className="text-[18px] text-gray-500">
              All plans include a free trial class. No commitment until you&apos;re sure.
            </p>
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
                  {m === "individual" ? "Individual" : "Group (2–4)"}
                </button>
              ))}
            </div>
            <p className="text-[13px] text-gray-500 font-semibold">Enterprise pricing is fixed.</p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} mode={mode} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

function PlanCard({ plan, mode }: { plan: typeof plans[number]; mode: PriceMode }) {
  const isEnterprise = plan.id === "enterprise";

  return (
    <div className={`relative bg-white rounded-2xl p-8 border-2 shadow-sm hover:shadow-lg transition-all duration-200 ${
      plan.featured ? "border-green-400 shadow-[0_0_0_4px_rgba(74,222,128,0.15)]" : "border-gray-200"
    }`}>

      {/* Popular badge */}
      {plan.featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-green-400 text-gray-900 text-[12px] font-extrabold tracking-[0.06em] uppercase px-5 py-1.5 rounded-full border-2 border-green-600 whitespace-nowrap">
          Most popular
        </div>
      )}

      {/* Tier badge */}
      <span className={`inline-block text-[12px] font-bold px-3 py-1 rounded-full mb-4 ${plan.badgeColor}`}>
        {plan.badge}
      </span>

      <div className="text-[28px] font-extrabold text-gray-900 mb-1">{plan.name}</div>
      <div className="text-[14px] text-gray-500 italic mb-4 leading-[1.4]">{plan.tagline}</div>

      <p className="text-[14px] text-gray-600 leading-[1.65] mb-5 pb-5 border-b border-gray-100">
        {plan.desc}
      </p>

      <ul className="mb-5 space-y-2">
        {plan.includes.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-[13.5px] text-gray-700">
            <span className="w-[18px] h-[18px] rounded-full bg-green-100 text-green-700 flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5">
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>

      <p className="text-[12px] font-bold tracking-[0.05em] uppercase text-gray-400 mb-5 leading-[1.55]">
        {plan.bestFor}
      </p>

      {/* Price */}
      <div className="mb-6">
        {isEnterprise ? (
          <>
            <div className="text-[28px] font-extrabold text-purple-700">{"priceCustom" in plan ? plan.priceCustom : ""}</div>
            {"priceCustomSub" in plan && <div className="text-[13px] text-gray-500 mt-1">{plan.priceCustomSub}</div>}
            {"priceCustomXs" in plan && <div className="text-[12px] text-gray-400 mt-1">{plan.priceCustomXs}</div>}
          </>
        ) : mode === "individual" && "priceInd" in plan ? (
          <>
            <div className={`text-[21px] font-extrabold leading-snug ${plan.featured ? "text-green-700" : "text-gray-900"}`}>
              {plan.priceInd}
            </div>
            {"priceSaveInd" in plan && (
              <div className="text-[13px] text-green-700 font-semibold mt-1">{plan.priceSaveInd}</div>
            )}
          </>
        ) : "priceGrp" in plan ? (
          <>
            <div className={`text-[21px] font-extrabold leading-snug ${plan.featured ? "text-green-700" : "text-gray-900"}`}>
              {plan.priceGrp}
            </div>
            {"noteGrp" in plan && (
              <div className="text-[13px] text-gray-500 mt-1">{plan.noteGrp}</div>
            )}
          </>
        ) : null}
      </div>

      {/* CTA */}
      <a
        href="#"
        className={`block w-full text-center py-3.5 px-5 rounded-[10px] font-bold text-[15px] transition-all duration-150 no-underline ${
          plan.featured
            ? "bg-green-400 text-gray-900 border-2 border-green-600 border-b-[4px] shadow-[0_2px_0_#16A34A] hover:-translate-y-px hover:shadow-[0_4px_0_#16A34A] active:translate-y-0.5"
            : isEnterprise
            ? "bg-purple-600 text-white hover:bg-purple-700"
            : "bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-900"
        }`}
      >
        {plan.cta}
      </a>

      {isEnterprise && (
        <p className="text-[13px] text-gray-400 text-center mt-2.5">No commitment. Just a conversation.</p>
      )}
    </div>
  );
}
