"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { BOOKING_URL } from "@/lib/constants";

// ─── Types ───────────────────────────────────────────────────────────────────

type Option   = { label: string; value: string; points: number };
type Question = { id: number; section: string; q: string; options: Option[] };
type Answers  = Record<number, { value: string; points: number }>;

// ─── Questions ───────────────────────────────────────────────────────────────

const QUESTIONS: Question[] = [
  // ── Section 1: Tu historia (4) ─────────────────────────────
  {
    id: 1, section: "Tu historia",
    q: "¿Cuántos años hace que aprendés inglés?",
    options: [
      { label: "Menos de 1 año",   value: "a", points: 0 },
      { label: "1 a 3 años",       value: "b", points: 1 },
      { label: "3 a 7 años",       value: "c", points: 2 },
      { label: "Más de 7 años",    value: "d", points: 3 },
      { label: "Toda mi vida",     value: "e", points: 4 },
    ],
  },
  {
    id: 2, section: "Tu historia",
    q: "¿Viviste, estudiaste o trabajaste en el exterior?",
    options: [
      { label: "Sí, más de un año",          value: "long",  points: 4 },
      { label: "Sí, menos de un año",        value: "short", points: 2 },
      { label: "No, pero planeo hacerlo",    value: "plan",  points: 1 },
      { label: "No",                         value: "no",    points: 0 },
    ],
  },
  {
    id: 3, section: "Tu historia",
    q: "¿Ves series o películas en inglés?",
    options: [
      { label: "Sí, sin subtítulos",              value: "nosub",  points: 4 },
      { label: "Sí, con subtítulos en inglés",    value: "ensub",  points: 3 },
      { label: "Sí, con subtítulos en español",   value: "essub",  points: 1 },
      { label: "No",                              value: "no",     points: 0 },
    ],
  },
  {
    id: 4, section: "Tu historia",
    q: "¿Leés contenido en inglés? (artículos, libros, redes)",
    options: [
      { label: "Regularmente",   value: "reg",       points: 3 },
      { label: "A veces",        value: "sometimes", points: 2 },
      { label: "Raramente",      value: "rare",      points: 1 },
      { label: "Casi nunca",     value: "never",     points: 0 },
    ],
  },

  // ── Section 2: Cómo estás hoy (7) ─────────────────────────
  {
    id: 5, section: "Cómo estás hoy",
    q: "¿Con qué frecuencia usás inglés en tu vida actual?",
    options: [
      { label: "Todos los días (trabajo o estudio)",  value: "daily",  points: 4 },
      { label: "Varias veces a la semana",            value: "weekly", points: 3 },
      { label: "Ocasionalmente",                      value: "occ",    points: 1 },
      { label: "Casi nunca",                          value: "never",  points: 0 },
    ],
  },
  {
    id: 6, section: "Cómo estás hoy",
    q: "Si alguien te habla rápido en inglés, ¿qué pasa?",
    options: [
      { label: "Lo entiendo sin problema",   value: "fine",  points: 4 },
      { label: "Entiendo la mayoría",        value: "most",  points: 3 },
      { label: "Pierdo el hilo a mitad",     value: "half",  points: 1 },
      { label: "Me pierdo casi todo",        value: "lost",  points: 0 },
    ],
  },
  {
    id: 7, section: "Cómo estás hoy",
    q: "¿Podés sostener una conversación de 5 minutos en inglés?",
    options: [
      { label: "Sí, sin esfuerzo",               value: "easy",  points: 4 },
      { label: "Sí, aunque me trabo a veces",    value: "some",  points: 3 },
      { label: "Con bastante dificultad",        value: "hard",  points: 1 },
      { label: "No",                             value: "no",    points: 0 },
    ],
  },
  {
    id: 8, section: "Cómo estás hoy",
    q: "Escribir un email profesional en inglés te parece...",
    options: [
      { label: "Fácil",                    value: "easy",  points: 4 },
      { label: "Algo difícil",             value: "some",  points: 2 },
      { label: "Bastante difícil",         value: "hard",  points: 1 },
      { label: "Lo evito directamente",   value: "avoid", points: 0 },
    ],
  },
  {
    id: 9, section: "Cómo estás hoy",
    q: "Hablar en inglés frente a otras personas te genera...",
    options: [
      { label: "Nada, me siento cómodo",  value: "comfort",  points: 4 },
      { label: "Un poco de nervios",      value: "nerves",   points: 2 },
      { label: "Bastante ansiedad",       value: "anxiety",  points: 1 },
      { label: "Lo evito a toda costa",   value: "avoid",    points: 0 },
    ],
  },
  {
    id: 10, section: "Cómo estás hoy",
    q: "¿Con qué frecuencia cometés errores de gramática que te frenan?",
    options: [
      { label: "Raramente",  value: "rare",   points: 4 },
      { label: "A veces",    value: "some",   points: 2 },
      { label: "Seguido",    value: "often",  points: 1 },
      { label: "Siempre",    value: "always", points: 0 },
    ],
  },
  {
    id: 11, section: "Cómo estás hoy",
    q: "¿Cómo describirías tu vocabulario en inglés?",
    options: [
      { label: "Rico y variado",          value: "rich",  points: 4 },
      { label: "Funcional pero limitado", value: "func",  points: 2 },
      { label: "Básico",                  value: "basic", points: 1 },
      { label: "Muy limitado",            value: "low",   points: 0 },
    ],
  },

  // ── Section 3: Qué querés lograr (5) ──────────────────────
  {
    id: 12, section: "Qué querés lograr",
    q: "¿Por qué querés mejorar tu inglés?",
    options: [
      { label: "Avanzar en mi carrera o conseguir un mejor trabajo",         value: "career",  points: 0 },
      { label: "Comunicarme mejor en mi trabajo remoto o internacional",      value: "remote",  points: 0 },
      { label: "Estudiar en el exterior",                                     value: "study",   points: 0 },
      { label: "Hablar con más fluidez y confianza",                         value: "fluency", points: 0 },
      { label: "Prepararme para un examen (IELTS, TOEFL)",                   value: "exam",    points: 0 },
    ],
  },
  {
    id: 13, section: "Qué querés lograr",
    q: "¿Tenés alguna fecha límite? (entrevista, examen, presentación)",
    options: [
      { label: "Sí, en el próximo mes",          value: "urgent",  points: 0 },
      { label: "En 3 a 6 meses",                value: "semi",    points: 0 },
      { label: "No, pero quiero empezar pronto", value: "soon",    points: 0 },
      { label: "Solo estoy explorando",          value: "explore", points: 0 },
    ],
  },
  {
    id: 14, section: "Qué querés lograr",
    q: "¿En qué área querés mejorar más?",
    options: [
      { label: "Hablar con confianza",    value: "speaking",  points: 0 },
      { label: "Entender a los nativos",  value: "listening", points: 0 },
      { label: "Escritura profesional",   value: "writing",   points: 0 },
      { label: "Gramática y estructura",  value: "grammar",   points: 0 },
      { label: "Vocabulario específico",  value: "vocab",     points: 0 },
    ],
  },
  {
    id: 15, section: "Qué querés lograr",
    q: "¿Cuál de estos te describe mejor?",
    options: [
      { label: "Entiendo bien pero me trabo cuando hablo",   value: "passive",      points: 0 },
      { label: "Puedo hablar pero cometo muchos errores",    value: "errors",       points: 0 },
      { label: "Me falta vocabulario para lo que quiero decir", value: "vocab-gap", points: 0 },
      { label: "Necesito sonar más profesional en inglés",   value: "professional", points: 0 },
    ],
  },
  {
    id: 16, section: "Qué querés lograr",
    q: "¿Cuánto tiempo podés dedicarle por semana?",
    options: [
      { label: "Menos de 1 hora",  value: "min", points: 0 },
      { label: "1 a 2 horas",      value: "mod", points: 0 },
      { label: "2 a 4 horas",      value: "com", points: 0 },
      { label: "4 horas o más",    value: "int", points: 0 },
    ],
  },

  // ── Section 4: Cómo sos vos (3) ────────────────────────────
  {
    id: 17, section: "Cómo sos vos",
    q: "¿Cómo preferís aprender?",
    options: [
      { label: "Con estructura y método claro",       value: "structured",   points: 0 },
      { label: "A través de conversación natural",    value: "conversation", points: 0 },
      { label: "Mezcla de los dos",                  value: "mixed",        points: 0 },
    ],
  },
  {
    id: 18, section: "Cómo sos vos",
    q: "¿Qué temas te interesan más?",
    options: [
      { label: "Negocios y trabajo",                       value: "biz",     points: 0 },
      { label: "Tecnología y ciencia",                     value: "tech",    points: 0 },
      { label: "Cultura y viajes",                         value: "culture", points: 0 },
      { label: "Entretenimiento (series, música, deportes)", value: "ent",   points: 0 },
      { label: "De todo un poco",                          value: "all",     points: 0 },
    ],
  },
  {
    id: 19, section: "Cómo sos vos",
    q: "¿Qué te frenó antes de arrancar con el inglés?",
    options: [
      { label: "El precio",                          value: "price", points: 0 },
      { label: "El tiempo",                          value: "time",  points: 0 },
      { label: "Miedo a equivocarme en clase",       value: "fear",  points: 0 },
      { label: "No sabía por dónde empezar",         value: "lost",  points: 0 },
      { label: "Nada, estoy listo",                  value: "ready", points: 0 },
    ],
  },
];

const TOTAL = QUESTIONS.length; // 19

// ─── Scoring ─────────────────────────────────────────────────────────────────

function getResult(answers: Answers) {
  const levelScore = Object.entries(answers)
    .filter(([id]) => Number(id) <= 11)
    .reduce((sum, [, a]) => sum + a.points, 0);

  // Q1-Q11 max ≈ 43 pts
  const level =
    levelScore >= 33 ? "C1+" :
    levelScore >= 23 ? "B2"  :
    levelScore >= 13 ? "B1"  : "A2";

  const goal    = answers[12]?.value;
  const area    = answers[14]?.value;
  const profile = answers[15]?.value;
  const style   = answers[17]?.value;

  const isBusiness    = ["career", "remote"].includes(goal) || profile === "professional" || area === "writing";
  const needsStructure = style === "structured" || ["errors", "vocab-gap"].includes(profile) || levelScore < 13;

  const service: "empresarial" | "fullEnglish" | "conversacion" =
    isBusiness     ? "empresarial" :
    needsStructure ? "fullEnglish" : "conversacion";

  return { level, service, levelScore };
}

// ─── Result content ───────────────────────────────────────────────────────────

const RESULTS = {
  empresarial: {
    emoji: "💼",
    badge: "Plan Empresarial",
    title: "Tu inglés tiene que abrirte puertas.",
    body: "Tus respuestas apuntan a un objetivo claro: usar el inglés para crecer profesionalmente. El plan Empresarial cubre exactamente eso — comunicación en reuniones, emails, presentaciones y negociaciones. Sin material genérico, sin relleno.",
    badgeBg: "bg-blue-100 text-blue-700",
  },
  fullEnglish: {
    emoji: "🏗️",
    badge: "Plan Full English",
    title: "Tenés la base. Es momento de construir.",
    body: "Necesitás un programa estructurado que se sienta tuyo. Full English cubre gramática, vocabulario, listening y speaking en clases de 90 minutos — con material preparado para vos cada semana, no un libro de texto del 2003.",
    badgeBg: "bg-green-100 text-green-700",
  },
  conversacion: {
    emoji: "🗣️",
    badge: "Plan Conversación",
    title: "Ya sabés inglés. Ahora aprendé a fluir.",
    body: "Tenés un nivel sólido pero querés que el inglés salga solo — sin pensar, sin trabarte. El plan Conversación es exactamente para eso: 60 minutos, 100% hablando, con temas que te interesan a vos.",
    badgeBg: "bg-emerald-100 text-emerald-700",
  },
};

const LEVEL_DESC: Record<string, string> = {
  "A2":  "Entendés y producís frases en situaciones cotidianas conocidas.",
  "B1":  "Te comunicás en situaciones habituales — laborales y sociales.",
  "B2":  "Te desenvolvés con fluidez en la mayoría de las situaciones.",
  "C1+": "Dominás el idioma con naturalidad y precisión.",
};

// ─── Page component ───────────────────────────────────────────────────────────

export default function EvaluacionPage() {
  const [step, setStep]         = useState(0);
  const [answers, setAnswers]   = useState<Answers>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [email, setEmail]       = useState("");

  const question = QUESTIONS[Math.min(step, TOTAL - 1)];
  const progress  = Math.min((step / TOTAL) * 100, 100);

  const handleSelect = useCallback(
    (value: string, points: number, id: number) => {
      if (selected) return;
      setSelected(value);
      setTimeout(() => {
        setAnswers(prev => ({ ...prev, [id]: { value, points } }));
        setStep(s => s + 1);
        setSelected(null);
      }, 380);
    },
    [selected],
  );

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStep(20);
  };

  const result = step >= 20 ? getResult(answers) : null;

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ── Thin progress bar ── */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-gray-100 z-50">
        <div
          className="h-full bg-green-500 transition-all duration-500 ease-out"
          style={{ width: `${step >= 20 ? 100 : progress}%` }}
        />
      </div>

      {/* ── Header ── */}
      <header className="pt-7 pb-2 px-5 flex items-center justify-between max-w-[600px] mx-auto w-full">
        <Link href="/" className="flex items-center gap-2 no-underline group">
          <div className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #22C55E, #16A34A)" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
          </div>
          <span className="font-bold text-[14px] text-gray-900 group-hover:text-green-600 transition-colors">
            The Fluency House
          </span>
        </Link>
        {step < TOTAL && (
          <span className="text-[13px] font-semibold text-gray-400">
            {step + 1} <span className="text-gray-300">/</span> {TOTAL}
          </span>
        )}
      </header>

      {/* ── Main ── */}
      <main className="flex-1 flex flex-col items-center px-5 pt-10 pb-16">
        <div className="w-full max-w-[540px]">

          <AnimatePresence mode="wait">

            {/* ── Question screens ── */}
            {step < TOTAL && (
              <motion.div
                key={`q-${step}`}
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -32 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                {/* Section pill */}
                <div className="inline-flex items-center gap-1.5 bg-green-50 border border-green-100 text-green-700 text-[12px] font-bold px-3 py-1.5 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  {question.section}
                </div>

                {/* Question text */}
                <h2
                  className="font-display font-bold italic text-gray-900 mb-8 leading-tight"
                  style={{ fontSize: "clamp(20px, 4vw, 26px)" }}
                >
                  {question.q}
                </h2>

                {/* Options */}
                <div className="flex flex-col gap-2.5">
                  {question.options.map(opt => {
                    const isSelected = selected === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => handleSelect(opt.value, opt.points, question.id)}
                        className={`w-full text-left px-5 py-4 rounded-2xl border-2 text-[15px] font-semibold transition-all duration-150 cursor-pointer ${
                          isSelected
                            ? "border-green-500 bg-green-50 text-green-800"
                            : selected
                            ? "border-gray-100 bg-white text-gray-300 cursor-default"
                            : "border-gray-200 bg-white text-gray-700 hover:border-green-300 hover:bg-green-50/40"
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* ── Email screen ── */}
            {step === TOTAL && (
              <motion.div
                key="email"
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -32 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="text-center"
              >
                <div className="text-[52px] mb-5">🎉</div>
                <h2 className="font-display font-bold italic text-gray-900 text-[28px] mb-3 leading-tight">
                  ¡Ya casi terminás!
                </h2>
                <p className="text-[16px] text-gray-500 mb-8 max-w-[380px] mx-auto leading-relaxed">
                  Ingresá tu email para ver tu resultado personalizado.
                  Pilar lo va a revisar y se pone en contacto.
                </p>
                <form onSubmit={handleEmail} className="flex flex-col gap-3 max-w-[340px] mx-auto">
                  <input
                    type="email"
                    required
                    placeholder="tu@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl border-2 border-gray-200 text-[15px] font-medium focus:outline-none focus:border-green-400 transition-colors text-center"
                  />
                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white font-bold text-[15px] px-6 py-4 rounded-2xl hover:bg-green-600 transition-colors"
                  >
                    Ver mi resultado →
                  </button>
                </form>
              </motion.div>
            )}

            {/* ── Results screen ── */}
            {step >= 20 && result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {(() => {
                  const r = RESULTS[result.service];
                  return (
                    <>
                      {/* Header */}
                      <div className="text-center mb-8">
                        <div className="text-[56px] mb-4">{r.emoji}</div>
                        <div className="flex items-center justify-center gap-2 flex-wrap mb-5">
                          <span className="text-[12px] font-bold px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                            Nivel {result.level}
                          </span>
                          <span className={`text-[12px] font-bold px-3 py-1.5 rounded-full border ${r.badgeBg}`}>
                            {r.badge}
                          </span>
                        </div>
                        <h2 className="font-display font-bold italic text-gray-900 leading-tight mb-2"
                          style={{ fontSize: "clamp(22px, 4vw, 28px)" }}>
                          {r.title}
                        </h2>
                        <p className="text-[13px] text-gray-400 font-medium">
                          {result.level} — {LEVEL_DESC[result.level]}
                        </p>
                      </div>

                      {/* Description card */}
                      <div className="bg-gray-50 border border-gray-100 rounded-2xl px-6 py-5 mb-6">
                        <p className="text-[15px] text-gray-600 leading-relaxed">{r.body}</p>
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-col gap-3">
                        <a
                          href={BOOKING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-center bg-green-500 text-white font-bold text-[15px] px-6 py-4 rounded-2xl hover:bg-green-600 transition-colors no-underline block"
                        >
                          Reservar mi clase gratis →
                        </a>
                        <Link
                          href="/#pricing"
                          className="w-full text-center border-2 border-gray-200 text-gray-700 font-bold text-[15px] px-6 py-4 rounded-2xl hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline block"
                        >
                          Ver todos los planes
                        </Link>
                      </div>

                      <p className="text-center text-[12px] text-gray-400 mt-5">
                        Le vamos a escribir a <strong>{email}</strong> con más info.
                      </p>
                    </>
                  );
                })()}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
