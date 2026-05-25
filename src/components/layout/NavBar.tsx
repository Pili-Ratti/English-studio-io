"use client";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export function NavBar() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang].nav;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-[1140px] mx-auto px-6 h-[68px] flex items-center gap-6">

        <a href="#" className="flex items-center gap-2 font-bold text-[18px] text-gray-900 flex-shrink-0 no-underline">
          <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #22C55E, #16A34A)" }}>
            <HouseIcon />
          </div>
          <span>The Fluency House</span>
        </a>

        <div className="hidden md:flex gap-1 items-center ml-auto">
          <a href="#how-it-works" className="text-[15px] font-semibold text-gray-500 px-3.5 py-2 rounded-full hover:text-gray-900 hover:bg-gray-50 transition-colors no-underline">
            {t.how}
          </a>
          <a href="#pricing" className="text-[15px] font-semibold text-gray-500 px-3.5 py-2 rounded-full hover:text-gray-900 hover:bg-gray-50 transition-colors no-underline">
            {t.plans}
          </a>
          <a href="#faq" className="text-[15px] font-semibold text-gray-500 px-3.5 py-2 rounded-full hover:text-gray-900 hover:bg-gray-50 transition-colors no-underline">
            {t.faq}
          </a>
        </div>

        <div className="flex bg-gray-100 rounded-full p-[3px] gap-0.5 ml-4">
          {(["ES", "EN"] as const).map((l) => {
            const langKey = l.toLowerCase() as "en" | "es";
            return (
              <button
                key={l}
                onClick={() => setLang(langKey)}
                aria-pressed={lang === langKey}
                className={`text-[13px] font-bold px-3.5 py-[5px] rounded-full transition-all duration-150 cursor-pointer border-0 ${
                  lang === langKey ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 bg-transparent"
                }`}
              >
                {l}
              </button>
            );
          })}
        </div>

        <a
          href="#pricing"
          className="hidden md:inline-flex items-center justify-center font-bold text-[14px] bg-green-500 text-white px-5 py-2.5 rounded-full hover:bg-green-600 transition-colors duration-150 no-underline whitespace-nowrap"
        >
          {t.cta}
        </a>

      </div>
    </nav>
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
