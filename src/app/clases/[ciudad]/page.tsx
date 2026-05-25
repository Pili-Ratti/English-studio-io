import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { geoCities, getGeoCity } from "@/lib/geo";
import { getAllPosts } from "@/lib/mdx";
import { BOOKING_URL } from "@/lib/constants";

interface Props {
  params: Promise<{ ciudad: string }>;
}

export async function generateStaticParams() {
  return geoCities.map((c) => ({ ciudad: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ciudad } = await params;
  const city = getGeoCity(ciudad);
  if (!city) return {};

  const url = `https://thefluencyhouse.com/clases/${ciudad}`;
  return {
    title: `${city.keyword} | The Fluency House`,
    description: city.description,
    keywords: [
      city.keyword,
      `inglés online ${city.name}`,
      `profesor de inglés ${city.name}`,
      `clases de inglés particulares ${city.name}`,
      "inglés personalizado Argentina",
      "primera clase gratis",
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `${city.keyword} | The Fluency House`,
      description: city.description,
      url,
      siteName: "The Fluency House",
      locale: "es_AR",
      type: "website",
    },
  };
}

const CITY_FAQ: { q: (c: string) => string; a: (c: string) => string }[] = [
  {
    q: (c: string) => `¿Las clases de inglés online realmente funcionan en ${c}?`,
    a: () => "Sí. El formato online permite clases completamente personalizadas sin perder tiempo en traslados. La metodología conversacional funciona igual — o mejor — que en persona, porque elimina la presión del ambiente formal.",
  },
  {
    q: () => "¿Necesito un nivel mínimo para empezar?",
    a: () => "No. La primera clase diagnóstica evalúa tu nivel real y define qué tipo de clases te van mejor. Hay un camino para cada nivel, desde principiante hasta avanzado.",
  },
  {
    q: () => "¿Cuánto cuestan las clases?",
    a: () => "Las clases de Conversación cuestan USD 35 por clase o USD 120 por mes. Las clases Full English cuestan USD 45 por clase o USD 160 por mes. La primera clase siempre es gratis.",
  },
  {
    q: () => "¿En qué horarios se pueden tomar las clases?",
    a: () => "Los horarios son completamente flexibles y se acuerdan según tu disponibilidad. Hay opciones de mañana, tarde y noche para adaptarse a distintas rutinas.",
  },
  {
    q: (c: string) => `¿Hay clases presenciales en ${c}?`,
    a: (c: string) => `Las clases son 100% online vía Google Meet o Zoom. Esta modalidad permite trabajar con estudiantes de toda ${c} y de cualquier otro lugar sin restricciones de horario ni ubicación.`,
  },
];

export default async function CityPage({ params }: Props) {
  const { ciudad } = await params;
  const city = getGeoCity(ciudad);
  if (!city) notFound();

  const recentPosts = getAllPosts().slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "The Fluency House",
    url: `https://thefluencyhouse.com/clases/${ciudad}`,
    description: city.description,
    inLanguage: ["es-AR", "en"],
    serviceType: "English Language Instruction",
    areaServed: [
      { "@type": "City", name: city.name },
      { "@type": "AdministrativeArea", name: city.province },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CITY_FAQ.map((item) => ({
      "@type": "Question",
      name: item.q(city.name),
      acceptedAnswer: { "@type": "Answer", text: item.a(city.name) },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main>
        {/* Breadcrumb */}
        <nav className="bg-gray-50 border-b border-gray-100 px-5 py-3 text-[13px] text-gray-400">
          <div className="max-w-[860px] mx-auto flex items-center gap-2">
            <Link href="/" className="hover:text-gray-700 transition-colors">Argentina</Link>
            <span>/</span>
            <span className="text-gray-700 font-semibold">{city.name}</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-white pt-14 pb-14 px-5">
          <div className="max-w-[860px] mx-auto">
            <span className="inline-block text-[13px] font-bold px-3 py-1.5 rounded-full bg-green-100 text-green-700 border border-green-200 mb-5">
              ✨ Primera clase gratis — siempre
            </span>
            <h1 className="font-display font-bold italic text-gray-900 leading-tight mb-4"
              style={{ fontSize: "clamp(32px, 5.5vw, 56px)" }}>
              {city.keyword}
            </h1>
            <p className="text-[18px] text-gray-500 max-w-[620px] leading-relaxed mb-8">
              {city.intro}
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-bold text-[15px] bg-green-500 text-white px-8 py-3.5 rounded-full hover:bg-green-600 transition-colors no-underline">
                Reservar clase gratis →
              </a>
              <a href="/#faq"
                className="inline-flex items-center justify-center font-bold text-[15px] text-gray-700 border border-gray-300 px-8 py-3.5 rounded-full hover:border-gray-500 transition-colors no-underline">
                Preguntas frecuentes
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gray-50 py-10 px-5 border-y border-gray-100">
          <div className="max-w-[860px] mx-auto flex flex-wrap gap-10">
            {[
              { value: "5+", label: "años de experiencia" },
              { value: "100%", label: "personalizado" },
              { value: "Gratis", label: "primera clase", green: true },
              { value: "Online", label: "Google Meet o Zoom" },
            ].map((s) => (
              <div key={s.label}>
                <div className={`text-[28px] font-extrabold leading-none ${s.green ? "text-green-600" : "text-gray-900"}`}>{s.value}</div>
                <div className="text-[12px] font-semibold text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="bg-white py-14 px-5">
          <div className="max-w-[860px] mx-auto">
            <h2 className="text-[24px] font-bold text-gray-900 mb-8">¿Cómo empezar desde {city.name}?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Reservá la clase gratis", body: "Elegís un horario que te sirva. Sin compromiso ni tarjeta de crédito." },
                { step: "2", title: "La clase de diagnóstico", body: "En 60 minutos evaluamos tu nivel, tus objetivos y qué tipo de clases te van mejor." },
                { step: "3", title: "Clases a tu medida", body: "Arrancamos con un plan diseñado para vos — cada semana una clase construida desde cero." },
              ].map((item) => (
                <div key={item.step} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white text-[14px] font-extrabold flex items-center justify-center mb-4">{item.step}</div>
                  <div className="text-[15px] font-bold text-gray-900 mb-1">{item.title}</div>
                  <div className="text-[14px] text-gray-500 leading-relaxed">{item.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qué incluyen */}
        <section className="bg-gray-50 py-14 px-5">
          <div className="max-w-[860px] mx-auto">
            <h2 className="text-[24px] font-bold text-gray-900 mb-8">¿Qué incluyen las clases de inglés?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: "🎯", title: "Clases 100% a tu medida", body: "Cada sesión se arma desde cero según tu nivel, tus objetivos y lo que necesitás hablar esa semana." },
                { icon: "💬", title: "Conversación real desde el día 1", body: "No hay ejercicios de repetición. Practicás hablando, con correcciones naturales que no interrumpen el flujo." },
                { icon: "📱", title: "Online vía Google Meet o Zoom", body: `Sin traslados, sin horarios fijos de presencialidad. Conectate desde cualquier barrio de ${city.name}.` },
                { icon: "📝", title: "Feedback escrito después de cada clase", body: "Un resumen con lo que trabajamos, los errores más frecuentes y qué focalizamos la próxima semana." },
                { icon: "📚", title: "Materiales 100% personalizados", body: "Sin libros de texto. Cada clase tiene una presentación construida específicamente para vos." },
                { icon: "💬", title: "WhatsApp entre clases", body: "Para preguntas rápidas, dudas de vocabulario o cualquier cosa que surja durante la semana." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-white rounded-2xl p-5 border border-gray-100">
                  <div className="text-[24px] flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-[14px] font-bold text-gray-900 mb-1">{item.title}</div>
                    <div className="text-[13px] text-gray-500 leading-relaxed">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Neighborhood grid */}
        {city.neighborhoods.length > 0 && (
          <section className="bg-white py-14 px-5">
            <div className="max-w-[860px] mx-auto">
              <h2 className="text-[22px] font-bold text-gray-900 mb-2">
                Clases de inglés por barrio en {city.name}
              </h2>
              <p className="text-[14px] text-gray-500 mb-6">
                Encontrá información específica para tu zona — las clases son online pero el contenido está pensado para el contexto de cada barrio.
              </p>
              <div className="flex flex-wrap gap-2">
                {city.neighborhoods.map((n) => (
                  <Link key={n.slug} href={`/clases/${ciudad}/${n.slug}`}
                    className="text-[13px] font-semibold text-gray-700 bg-gray-50 border border-gray-200 px-4 py-2 rounded-full hover:border-green-400 hover:text-green-700 hover:bg-green-50 transition-colors no-underline">
                    {n.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="bg-gray-50 py-14 px-5">
          <div className="max-w-[860px] mx-auto">
            <h2 className="text-[24px] font-bold text-gray-900 mb-8">Preguntas frecuentes sobre las clases en {city.name}</h2>
            <div className="flex flex-col gap-4">
              {CITY_FAQ.map((item) => (
                <div key={item.q(city.name)} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <div className="text-[15px] font-bold text-gray-900 mb-2">{item.q(city.name)}</div>
                  <div className="text-[14px] text-gray-500 leading-relaxed">{item.a(city.name)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Institutos de inglés en la ciudad */}
        <section className="bg-white py-14 px-5">
          <div className="max-w-[860px] mx-auto">
            <h2 className="text-[24px] font-bold text-gray-900 mb-2">
              Institutos de inglés en {city.name}
            </h2>
            <p className="text-[15px] text-gray-500 mb-6">
              {city.name} tiene varias opciones de institutos de inglés presenciales. Estas son algunas de las más conocidas:
            </p>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 mb-8" style={{ height: 380 }}>
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(`instituto de inglés ${city.name} Argentina`)}&output=embed&hl=es`}
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Institutos de inglés en ${city.name}`}
              />
            </div>

            {/* Institute chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {city.institutes.map((inst) => (
                <span key={inst} className="text-[13px] font-medium text-gray-700 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">
                  {inst}
                </span>
              ))}
            </div>

            {/* Positioning */}
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <h3 className="text-[18px] font-bold text-gray-900 mb-2">
                ¿Querés inglés sin el formato del instituto?
              </h3>
              <p className="text-[14px] text-gray-500 mb-5">
                The Fluency House es la alternativa online a los institutos de inglés de {city.name}: clases 1 a 1, contenido 100% personalizado, horarios flexibles y la primera clase siempre gratis.
              </p>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-bold text-[15px] bg-green-500 text-white px-7 py-3.5 rounded-full hover:bg-green-600 transition-colors no-underline">
                Reservar clase gratis →
              </a>
            </div>
          </div>
        </section>

        {/* Blog posts */}
        {recentPosts.length > 0 && (
          <section className="bg-white py-14 px-5">
            <div className="max-w-[860px] mx-auto">
              <h2 className="text-[22px] font-bold text-gray-900 mb-2">Recursos para mejorar tu inglés</h2>
              <p className="text-[14px] text-gray-500 mb-6">Artículos del blog de The Fluency House — consejos prácticos para hablar mejor.</p>
              <div className="flex flex-col gap-3">
                {recentPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}
                    className="flex items-center justify-between gap-4 bg-gray-50 rounded-2xl px-5 py-4 border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-colors no-underline group">
                    <span className="text-[14px] font-semibold text-gray-800 group-hover:text-green-700 transition-colors">{post.title}</span>
                    <span className="text-green-500 font-bold text-[14px] flex-shrink-0">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-green-50 py-14 px-5">
          <div className="max-w-[860px] mx-auto text-center">
            <h2 className="text-[26px] font-bold text-gray-900 mb-3">Empezá con una clase gratis en {city.name}</h2>
            <p className="text-[15px] text-gray-500 mb-8 max-w-[480px] mx-auto">
              Sin compromiso. La primera clase está diseñada para entender exactamente dónde estás y qué necesitás.
            </p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-bold text-[16px] bg-green-500 text-white px-10 py-4 rounded-full hover:bg-green-600 transition-colors no-underline">
              Reservar clase gratis →
            </a>
            <p className="mt-4 text-[13px] text-gray-400">Sin tarjeta de crédito · Cancelá cuando quieras</p>
          </div>
        </section>
      </main>
    </>
  );
}
