import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "¿Qué nivel de inglés tenés? | The Fluency House",
  description:
    "Respondé 10 preguntas y descubrí tu nivel de inglés real — y qué plan se adapta mejor a tus objetivos. Gratis, sin registro.",
  keywords: [
    "test de nivel de inglés",
    "evaluación de inglés online",
    "cuál es mi nivel de inglés",
    "quiz inglés Argentina",
    "nivel de inglés gratis",
  ],
  alternates: { canonical: "https://thefluencyhouse.com/evaluacion" },
  openGraph: {
    title: "¿Qué nivel de inglés tenés? | The Fluency House",
    description:
      "Respondé 10 preguntas y descubrí tu nivel de inglés real. Gratis, sin registro.",
    url: "https://thefluencyhouse.com/evaluacion",
    siteName: "The Fluency House",
    locale: "es_AR",
    type: "website",
  },
};

export default function EvaluacionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
