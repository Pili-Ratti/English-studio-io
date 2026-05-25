"use client";
import { useLanguage } from "@/lib/LanguageContext";

const row1 = [
  { quote: "Por fin entiendo los phrasal verbs en contexto.", name: "Valeria", location: "Buenos Aires", color: "bg-orange-400 text-white" },
  { quote: "My speaking improved so fast. Couldn't believe it.", name: "Camila", location: "Santiago", color: "bg-blue-400 text-white" },
  { quote: "Mejoré mi inglés laboral en 3 meses.", name: "Marcos", location: "CABA", color: "bg-lime-400 text-gray-900" },
  { quote: "The best investment I made for my career.", name: "Sofía", location: "Montevideo", color: "bg-purple-400 text-white" },
  { quote: "Nunca pensé que aprender inglés fuera tan divertido.", name: "Lucas", location: "Córdoba", color: "bg-rose-400 text-white" },
  { quote: "Las clases son totalmente distintas a lo que conocía.", name: "Tomás", location: "Rosario", color: "bg-amber-400 text-gray-900" },
];

const row2 = [
  { quote: "Ya no me da vergüenza hablar en reuniones en inglés.", name: "Agustina", location: "CABA", color: "bg-lime-400 text-gray-900" },
  { quote: "Super personalized — she knows exactly what you need.", name: "Diego", location: "Medellín", color: "bg-orange-400 text-white" },
  { quote: "Me preparó para una entrevista en una empresa internacional.", name: "Pablo", location: "Buenos Aires", color: "bg-blue-300 text-gray-900" },
  { quote: "Perfect for business English. Changed how I write emails.", name: "Florencia", location: "BA", color: "bg-purple-300 text-gray-900" },
  { quote: "Cada clase se siente como una conversación real.", name: "Sebastián", location: "Córdoba", color: "bg-rose-300 text-gray-900" },
  { quote: "100% recommended. Actually life-changing.", name: "Romina", location: "Montevideo", color: "bg-green-400 text-gray-900" },
];

export function SocialProofSection() {
  const { lang } = useLanguage();

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="text-center mb-12 px-6">
        <h2 className="font-display font-bold italic text-gray-900" style={{ fontSize: "clamp(28px, 4vw, 42px)" }}>
          {lang === "es" ? "Lo que dicen los estudiantes." : "What students say."}
        </h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] mb-4">
        {[...row1, ...row1].map((item, i) => (
          <BubbleCard key={i} item={item} />
        ))}
      </div>

      {/* Row 2 — scrolls right */}
      <div className="flex w-max animate-marquee-r hover:[animation-play-state:paused]">
        {[...row2, ...row2].map((item, i) => (
          <BubbleCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
}

function BubbleCard({ item }: { item: typeof row1[number] }) {
  return (
    <div className={`mx-3 flex-shrink-0 w-[280px] rounded-2xl px-6 py-5 ${item.color}`}>
      <p className="text-[15px] font-bold leading-[1.5] mb-3">&ldquo;{item.quote}&rdquo;</p>
      <p className="text-[13px] font-semibold opacity-80">{item.name} · {item.location}</p>
    </div>
  );
}
