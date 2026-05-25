"use client";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export function Footer() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang].footer;
  const pricing = translations[lang].pricing;

  return (
    <footer className="bg-gray-900 text-white/60 pt-16 pb-8 px-6">
      <div className="max-w-[1140px] mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10 mb-8">

          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 no-underline mb-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #22C55E, #16A34A)" }}
              >
                <HouseIcon />
              </div>
              <span className="text-[18px] font-bold text-white">The Fluency House</span>
            </a>
            <p className="text-[14px] leading-[1.7] max-w-[240px]">{t.tagline}</p>
          </div>

          {/* Classes */}
          <div>
            <h4 className="text-[13px] font-extrabold text-white/40 tracking-[0.08em] uppercase mb-4">{t.classes}</h4>
            <div className="space-y-2">
              {pricing.plans.map((plan, i) => (
                <a key={i} href="#pricing" className="block text-[14px] text-white/60 hover:text-white transition-colors no-underline font-semibold">
                  {plan.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[13px] font-extrabold text-white/40 tracking-[0.08em] uppercase mb-4">{t.about}</h4>
            <div className="space-y-2">
              <a href="#how-it-works" className="block text-[14px] text-white/60 hover:text-white transition-colors no-underline font-semibold">{t.links.how}</a>
              <a href="#faq" className="block text-[14px] text-white/60 hover:text-white transition-colors no-underline font-semibold">{t.links.faq}</a>
            </div>
          </div>

          <div>
            <h4 className="text-[13px] font-extrabold text-white/40 tracking-[0.08em] uppercase mb-4">{t.contact}</h4>
            <div className="space-y-2">
              <a href="mailto:hola@thefluencyhouse.com" className="block text-[14px] text-white/60 hover:text-white transition-colors no-underline font-semibold">hola@thefluencyhouse.com</a>
              <a href="#" className="block text-[14px] text-white/60 hover:text-white transition-colors no-underline font-semibold">WhatsApp</a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-[13px] font-semibold">
            © {new Date().getFullYear()} {t.copyright}
          </p>
          <div className="flex bg-white/[0.06] rounded-full p-[3px] gap-0.5">
            {(["ES", "EN"] as const).map((l) => {
              const langKey = l.toLowerCase() as "en" | "es";
              return (
                <button
                  key={l}
                  onClick={() => setLang(langKey)}
                  aria-pressed={lang === langKey}
                  className={`text-[13px] font-bold px-3.5 py-[5px] rounded-full border-0 cursor-pointer transition-all duration-150 ${
                    lang === langKey ? "bg-white/15 text-white" : "text-white/40 bg-transparent"
                  }`}
                >
                  {l}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </footer>
  );
}

function HouseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  );
}
