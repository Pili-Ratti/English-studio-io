"use client";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export function CTABanner() {
  const { lang } = useLanguage();
  const t = translations[lang].cta;

  return (
    <section className="bg-gray-900 py-24 px-6 text-center relative overflow-hidden">
      {/* Subtle green glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(34,197,94,0.12) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[600px] mx-auto">
        <h2 className="font-display font-bold italic text-white mb-3 leading-[1.1]" style={{ fontSize: "clamp(28px, 5vw, 48px)" }}>
          {t.h2}
        </h2>
        <p className="text-[18px] text-white/70 mb-9">{t.sub}</p>
        <a
          href="#"
          className="inline-flex items-center justify-center font-bold text-[17px] bg-green-500 text-white px-12 py-4 rounded-full hover:bg-green-600 transition-colors duration-150 no-underline"
        >
          {t.btn}
        </a>
        <p className="mt-5 text-[14px] text-white/40 font-semibold">{t.fine}</p>
      </div>
    </section>
  );
}
