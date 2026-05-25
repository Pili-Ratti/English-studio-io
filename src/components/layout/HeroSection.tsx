"use client";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export function HeroSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const h = t.hero;

  return (
    <>
      {/* ── HERO ── */}
      <section id="hero" className="bg-white pt-20 pb-20 px-6 relative overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)" }}
        />

        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: text ── */}
          <div className="relative z-10">
            <span className="inline-block text-[13px] font-bold text-green-700 bg-green-50 border border-green-200 px-4 py-1.5 rounded-full mb-6">
              {h.badge}
            </span>

            <h1 className="font-display font-bold italic leading-[1.08] text-gray-900 mb-5"
              style={{ fontSize: "clamp(40px, 6vw, 68px)" }}>
              {h.h1a}{" "}
              <em
                style={{
                  background: "linear-gradient(135deg, #16A34A, #15803D)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontStyle: "italic",
                }}
              >
                {h.h1b}
              </em>
            </h1>

            <p className="text-[18px] text-gray-500 max-w-[480px] mb-8 leading-[1.7]">
              {h.sub}
            </p>

            <div className="flex gap-3 flex-wrap mb-8">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center font-bold text-[16px] bg-green-500 text-white px-8 py-3.5 rounded-full hover:bg-green-600 transition-colors duration-150 no-underline"
              >
                {h.cta1}
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center font-bold text-[16px] text-gray-700 border border-gray-300 px-8 py-3.5 rounded-full hover:border-gray-500 hover:text-gray-900 transition-colors duration-150 no-underline"
              >
                {h.cta2}
              </a>
            </div>

            <p className="text-[14px] font-semibold text-gray-400">{h.proof}</p>
          </div>

          {/* ── Right: chat mockup ── */}
          <div className="relative z-10 order-first lg:order-none">
            {/* Floating context pills — desktop only */}
            <div className="hidden md:flex absolute -top-4 right-5 bg-white rounded-2xl px-3.5 py-2.5 text-[13px] font-bold text-gray-700 border border-gray-200 shadow-md items-center gap-2 animate-float">
              <PencilIcon className="text-green-600 w-3.5 h-3.5" />
              {h.floating.custom}
            </div>
            <div className="hidden md:flex absolute bottom-10 -left-5 bg-white rounded-2xl px-3.5 py-2.5 text-[13px] font-bold text-gray-700 border border-gray-200 shadow-md items-center gap-2 animate-float-2">
              <ChatIcon className="text-green-600 w-3.5 h-3.5" />
              {h.floating.conversation}
            </div>
            <div className="hidden md:flex absolute top-1/2 -right-6 -translate-y-1/2 bg-white rounded-2xl px-3.5 py-2.5 text-[13px] font-bold text-gray-700 border border-gray-200 shadow-md items-center gap-2 animate-float-3">
              <GiftIcon className="text-green-600 w-3.5 h-3.5" />
              {h.floating.trial}
            </div>

            {/* Chat window */}
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 shadow-xl max-w-[420px] mx-auto">
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-gray-200">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-white text-[14px] font-bold"
                  style={{ background: "linear-gradient(135deg, #22C55E, #16A34A)" }}
                >
                  P
                </div>
                <div>
                  <div className="text-[14px] font-extrabold text-gray-900">{h.chat.name}</div>
                  <div className="text-[12px] font-bold text-green-600 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse-dot" />
                    {h.chat.status}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="bg-gray-900 text-white text-[14px] font-semibold leading-[1.5] px-3.5 py-2.5 rounded-2xl rounded-br-sm max-w-[85%] self-start">
                  {h.chat.b1}
                </div>
                <div className="bg-green-100 text-green-800 text-[14px] font-semibold leading-[1.5] px-3.5 py-2.5 rounded-2xl rounded-bl-sm max-w-[85%] self-end">
                  {h.chat.b2}
                </div>
                <div className="bg-white border border-gray-200 text-gray-700 text-[14px] font-semibold leading-[1.5] px-3.5 py-2.5 rounded-2xl rounded-br-sm max-w-[85%] self-start">
                  {h.chat.b3a}<strong>&ldquo;whodunit&rdquo;</strong>{h.chat.b3b}
                </div>
                <div className="bg-green-100 text-green-800 text-[14px] font-semibold leading-[1.5] px-3.5 py-2.5 rounded-2xl rounded-bl-sm max-w-[85%] self-end">
                  {h.chat.b4}
                </div>
                <div className="bg-gray-900 text-white text-[14px] font-semibold leading-[1.5] px-3.5 py-2.5 rounded-2xl rounded-br-sm max-w-[85%] self-start">
                  {h.chat.b5}
                </div>
                <div className="flex items-center gap-1 px-3.5 py-2.5 bg-gray-100 rounded-2xl w-fit self-start">
                  <div className="w-[7px] h-[7px] rounded-full bg-gray-400 animate-typing-1" />
                  <div className="w-[7px] h-[7px] rounded-full bg-gray-400 animate-typing-2" />
                  <div className="w-[7px] h-[7px] rounded-full bg-gray-400 animate-typing-3" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="bg-gray-900 overflow-hidden py-3.5" aria-hidden="true">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...t.marquee, ...t.marquee].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 px-7 text-[14px] font-bold text-white/80 whitespace-nowrap">
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${marqueeDots[i % 3]}`} />
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const marqueeDots = ["bg-green-400", "bg-green-300", "bg-green-500"];

function PencilIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function GiftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}
