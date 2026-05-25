"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import Waves from "@/components/ui/Waves";
import ShinyText from "@/components/ui/ShinyText";
import { BOOKING_URL } from "@/lib/constants";

const GOALS = {
  es: [
    "quiero prepararme para una entrevista laboral 💼",
    "quiero poder leer libros enteros en inglés 📚",
    "quiero presentar en reuniones internacionales 🎯",
    "quiero aprender vocabulario técnico para devs 💻",
    "quiero hablar con fluidez en mi trabajo remoto 🌍",
  ],
  en: [
    "I want to nail my remote job interview 💼",
    "I want to read a full book in English 📚",
    "I want to present in business meetings 🎯",
    "I want to learn vocabulary for developers 💻",
    "I want to speak fluently at my remote job 🌍",
  ],
};

const topicPills = [
  { label: "Business English", color: "bg-orange-100 text-orange-700 border-orange-200" },
  { label: "Job interviews",   color: "bg-blue-100 text-blue-700 border-blue-200" },
  { label: "Real slang",       color: "bg-lime-100 text-lime-700 border-lime-200" },
  { label: "Phrasal verbs",    color: "bg-purple-100 text-purple-700 border-purple-200" },
  { label: "IELTS prep",       color: "bg-rose-100 text-rose-700 border-rose-200" },
  { label: "Conversación",     color: "bg-green-100 text-green-700 border-green-200" },
];

const marqueeDots = ["bg-green-400", "bg-lime-400", "bg-emerald-400"];

export function HeroSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const h = t.hero;

  const goals = GOALS[lang];
  const [displayText, setDisplayText] = useState("");
  const [goalIdx, setGoalIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");

  useEffect(() => {
    const goal = goals[goalIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (displayText.length < goal.length) {
        timeout = setTimeout(() => setDisplayText(goal.slice(0, displayText.length + 1)), 45);
      } else {
        timeout = setTimeout(() => setPhase("pause"), 2000);
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("deleting"), 400);
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 18);
      } else {
        setGoalIdx((i) => (i + 1) % goals.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, phase, goalIdx, goals]);

  return (
    <>
      {/* ── HERO ── */}
      <section id="hero" className="bg-white pt-14 pb-14 md:pt-20 md:pb-20 px-5 md:px-6 relative overflow-hidden">
        {/* Animated wave background */}
        <Waves
          lineColor="rgba(34, 197, 94, 0.18)"
          backgroundColor="transparent"
          waveSpeedX={0.018}
          waveSpeedY={0.006}
          waveAmpX={40}
          waveAmpY={20}
          xGap={18}
          yGap={44}
          friction={0.93}
          tension={0.004}
          maxCursorMove={80}
        />

        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: text ── */}
          <div className="relative z-10">

            {/* Topic pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {topicPills.map((pill, i) => (
                <span key={i} className={`text-[12px] font-bold px-3 py-1.5 rounded-full border ${pill.color}`}>
                  {pill.label}
                </span>
              ))}
            </div>

            <h1 className="font-display font-bold italic leading-[1.08] text-gray-900 mb-5"
              style={{ fontSize: "clamp(40px, 6vw, 68px)" }}>
              {h.h1a}{" "}
              <ShinyText
                text={h.h1b}
                color="#16A34A"
                shineColor="#86efac"
                speed={3}
                delay={1}
                spread={100}
                className="font-display font-bold italic"
              />
            </h1>

            <p className="text-[18px] text-gray-500 max-w-[480px] mb-8 leading-[1.7]">
              {h.sub}
            </p>

            <div className="flex gap-3 flex-wrap mb-8">
              <a href={BOOKING_URL}
                className="inline-flex items-center justify-center font-bold text-[15px] md:text-[16px] bg-green-500 text-white px-6 md:px-8 py-3.5 rounded-full hover:bg-green-600 transition-colors duration-150 no-underline">
                {h.cta1}
              </a>
              <a href="#how-it-works"
                className="inline-flex items-center justify-center font-bold text-[15px] md:text-[16px] text-gray-700 border border-gray-300 px-6 md:px-8 py-3.5 rounded-full hover:border-gray-500 hover:text-gray-900 transition-colors duration-150 no-underline">
                {h.cta2}
              </a>
            </div>

            {/* Social proof row */}
            <div className="flex flex-wrap gap-6">
              <div>
                <div className="text-[22px] font-extrabold text-gray-900 leading-none">5+</div>
                <div className="text-[12px] font-semibold text-gray-400 mt-0.5">{lang === "es" ? "años de experiencia" : "years experience"}</div>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <div className="text-[22px] font-extrabold text-gray-900 leading-none">100%</div>
                <div className="text-[12px] font-semibold text-gray-400 mt-0.5">{lang === "es" ? "personalizado" : "personalized"}</div>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <div className="text-[22px] font-extrabold text-green-600 leading-none">{lang === "es" ? "Gratis" : "Free"}</div>
                <div className="text-[12px] font-semibold text-gray-400 mt-0.5">{lang === "es" ? "primera clase" : "first class"}</div>
              </div>
            </div>
          </div>

          {/* ── Right: chat mockup ── */}
          <div className="relative z-10">

            {/* Chat window — macOS app style */}
            <div className="max-w-[400px] mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200/80" style={{ background: "#fff" }}>

              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100" style={{ background: "#f5f5f5" }}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 text-center text-[12px] font-semibold text-gray-400 tracking-wide">
                  {h.chat.name}
                </div>
              </div>

              {/* Contact header */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-white">
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[15px]"
                    style={{ background: "linear-gradient(135deg, #22C55E, #16A34A)" }}>
                    P
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white block" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-gray-900">Pilar · The Fluency House</div>
                  <div className="text-[11px] font-semibold text-green-500">{h.chat.status}</div>
                </div>
                <div className="ml-auto">
                  <VideoCallIcon />
                </div>
              </div>

              {/* Messages */}
              <div className="flex flex-col gap-2 px-4 py-4" style={{ background: "#f0f2f5", minHeight: 260 }}>

                {/* Pilar asks */}
                <div className="flex items-end gap-2 self-start max-w-[82%]">
                  <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold mb-0.5"
                    style={{ background: "linear-gradient(135deg, #22C55E, #16A34A)" }}>P</div>
                  <div className="bg-white text-gray-800 text-[13px] leading-[1.5] px-3.5 py-2.5 rounded-2xl rounded-bl-sm shadow-sm font-medium">
                    {lang === "es" ? "¿Cuál es tu objetivo con el inglés?" : "What's your goal with English?"}
                  </div>
                </div>

                {/* Student types — animated typewriter */}
                <div className="self-end max-w-[88%]">
                  <div className="text-white text-[13px] leading-[1.5] px-3.5 py-2.5 rounded-2xl rounded-br-sm font-medium min-h-[36px] flex items-center"
                    style={{ background: "#22C55E" }}>
                    {displayText}
                    <span className="inline-block w-[2px] h-[14px] bg-white/80 ml-0.5 animate-pulse rounded-full" />
                  </div>
                </div>

                {/* Pilar replies */}
                <div className="flex items-end gap-2 self-start max-w-[82%]">
                  <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold mb-0.5"
                    style={{ background: "linear-gradient(135deg, #22C55E, #16A34A)" }}>P</div>
                  <div className="bg-white text-gray-800 text-[13px] leading-[1.5] px-3.5 py-2.5 rounded-2xl rounded-bl-sm shadow-sm font-medium">
                    {lang === "es" ? "Perfecto — lo trabajamos juntos 🙌" : "Perfect — we'll work on that together 🙌"}
                  </div>
                </div>

                {/* Pilar typing */}
                <div className="flex items-end gap-2 self-start">
                  <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold"
                    style={{ background: "linear-gradient(135deg, #22C55E, #16A34A)" }}>P</div>
                  <div className="bg-white px-3.5 py-3 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-1">
                    <div className="w-[6px] h-[6px] rounded-full bg-gray-400 animate-typing-1" />
                    <div className="w-[6px] h-[6px] rounded-full bg-gray-400 animate-typing-2" />
                    <div className="w-[6px] h-[6px] rounded-full bg-gray-400 animate-typing-3" />
                  </div>
                </div>

              </div>

              {/* Input bar */}
              <div className="flex items-center gap-2 px-3 py-3 bg-white border-t border-gray-100">
                <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-[12px] text-gray-400 font-medium">
                  {lang === "es" ? "Escribí un mensaje..." : "Type a message..."}
                </div>
                <button className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white"
                  style={{ background: "#22C55E" }}>
                  <SendIcon />
                </button>
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

function PencilIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
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
      <polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}

function VideoCallIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}
