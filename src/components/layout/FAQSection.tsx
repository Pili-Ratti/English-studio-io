"use client";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = translations[lang].faq;

  return (
    <section id="faq" className="bg-white py-24 px-6">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display font-bold italic text-gray-900 mb-3" style={{ fontSize: "clamp(32px, 5vw, 48px)" }}>
            {t.h2}
          </h2>
        </div>

        <div className="max-w-[720px] mx-auto">
          {t.items.map((faq, i) => (
            <div key={i} className="border-b border-gray-100">
              <button
                className="w-full flex justify-between items-center py-5 bg-transparent border-0 text-left cursor-pointer gap-4 group"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-[17px] font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-150">
                  {faq.q}
                </span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                  open === i ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-400"
                }`}>
                  <svg
                    width="14" height="14" viewBox="0 0 14 14" fill="none"
                    className={`transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  >
                    <path d="M2 5L7 10L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? "240px" : "0px" }}
              >
                <div className="bg-gray-50 rounded-[12px] px-5 py-4 mb-4 text-[15px] text-gray-600 leading-[1.7]">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
