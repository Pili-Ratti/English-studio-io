import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllNeighborhoodParams, getNeighborhood } from "@/lib/geo";
import { getAllPosts } from "@/lib/mdx";
import { BOOKING_URL } from "@/lib/constants";

interface Props {
  params: Promise<{ ciudad: string; barrio: string }>;
}

export async function generateStaticParams() {
  return getAllNeighborhoodParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ciudad, barrio } = await params;
  const { city, neighborhood } = getNeighborhood(ciudad, barrio);
  if (!city || !neighborhood) return {};

  const url = `https://thefluencyhouse.com/clases/${ciudad}/${barrio}`;
  const title = `Clases de inglés online en ${neighborhood.name} | The Fluency House`;
  const description = `Clases de inglés personalizadas para estudiantes de ${neighborhood.name}, ${city.name}. Online, en vivo, adaptadas a tu nivel y tus objetivos. Primera clase gratis.`;

  return {
    title,
    description,
    keywords: [
      `clases de inglés ${neighborhood.name}`,
      `inglés online ${neighborhood.name}`,
      `clases de inglés ${neighborhood.name} ${city.name}`,
      `profesor de inglés ${neighborhood.name}`,
      `inglés personalizado ${city.name}`,
      "primera clase gratis",
    ],
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "The Fluency House", locale: "es_AR", type: "website" },
  };
}

const FAQ: { q: (n: string) => string; a: (n: string) => string }[] = [
  {
    q: (n: string) => `¿Hace falta ir a algún lugar en ${n}?`,
    a: () => "No. Las clases son 100% online vía Google Meet o Zoom. Conectate desde tu casa, tu trabajo o donde estés — con una conexión decente a internet es suficiente.",
  },
  {
    q: () => "¿Necesito un nivel mínimo para empezar?",
    a: () => "No. La primera clase sirve justamente para evaluar tu nivel y entender qué necesitás. Hay un camino para cada nivel — desde principiante absoluto hasta avanzado.",
  },
  {
    q: () => "¿Qué horarios tienen las clases?",
    a: () => "Los horarios son completamente flexibles y se acuerdan según tu disponibilidad. Hay opciones de mañana, tarde y noche para adaptarse a distintas rutinas laborales.",
  },
  {
    q: () => "¿Hay que comprar libros o materiales?",
    a: () => "No. Todos los materiales se incluyen y son 100% personalizados. Cada clase tiene una presentación construida desde cero — sin libros de texto ni PDFs genéricos.",
  },
  {
    q: (n: string) => `¿Es la misma clase para todos los estudiantes de ${n}?`,
    a: () => "No. Cada clase se arma desde cero según el nivel, los objetivos y los intereses de cada estudiante. Dos personas en el mismo barrio pueden tener clases completamente diferentes.",
  },
];

export default async function NeighborhoodPage({ params }: Props) {
  const { ciudad, barrio } = await params;
  const { city, neighborhood } = getNeighborhood(ciudad, barrio);
  if (!city || !neighborhood) notFound();

  const recentPosts = getAllPosts().slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "The Fluency House",
    url: `https://thefluencyhouse.com/clases/${ciudad}/${barrio}`,
    description: `Clases de inglés online para estudiantes de ${neighborhood.name}, ${city.name}.`,
    inLanguage: ["es-AR", "en"],
    serviceType: "English Language Instruction",
    areaServed: [
      { "@type": "City", name: neighborhood.name },
      { "@type": "City", name: city.name },
      { "@type": "AdministrativeArea", name: city.province },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q(neighborhood.name),
      acceptedAnswer: { "@type": "Answer", text: item.a(neighborhood.name) },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main>
        {/* Breadcrumb */}
        <nav className="bg-gray-50 border-b border-gray-100 px-5 py-3 text-[13px] text-gray-400">
          <div className="max-w-[860px] mx-auto flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-gray-700 transition-colors">Argentina</Link>
            <span>/</span>
            <Link href={`/clases/${ciudad}`} className="hover:text-gray-700 transition-colors">{city.name}</Link>
            <span>/</span>
            <span className="text-gray-700 font-semibold">{neighborhood.name}</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-white pt-14 pb-14 px-5">
          <div className="max-w-[860px] mx-auto">
            <span className="inline-block text-[13px] font-bold px-3 py-1.5 rounded-full bg-green-100 text-green-700 border border-green-200 mb-5">
              ✨ Primera clase gratis — siempre
            </span>
            <h1 className="font-display font-bold italic text-gray-900 leading-tight mb-4"
              style={{ fontSize: "clamp(28px, 5vw, 52px)" }}>
              Clases de inglés online en {neighborhood.name}
            </h1>
            <p className="text-[18px] text-gray-500 max-w-[640px] leading-relaxed mb-8">
              {neighborhood.localFlavor} Las clases son 100% online, en vivo, y se arman desde cero según lo que necesitás — sin libros genéricos ni materiales reciclados.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-bold text-[15px] bg-green-500 text-white px-8 py-3.5 rounded-full hover:bg-green-600 transition-colors no-underline">
                Reservar clase gratis →
              </a>
              <Link href={`/clases/${ciudad}`}
                className="inline-flex items-center justify-center font-bold text-[15px] text-gray-700 border border-gray-300 px-8 py-3.5 rounded-full hover:border-gray-500 transition-colors no-underline">
                Ver todas las zonas de {city.name}
              </Link>
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

        {/* Para qué usás el inglés */}
        <section className="bg-white py-14 px-5">
          <div className="max-w-[860px] mx-auto">
            <h2 className="text-[24px] font-bold text-gray-900 mb-2">
              ¿Para qué necesitás inglés en {neighborhood.name}?
            </h2>
            <p className="text-[15px] text-gray-500 mb-8">
              Las clases se adaptan a tus objetivos específicos. Estos son los más frecuentes entre estudiantes de la zona:
            </p>
            <ul className="flex flex-col gap-3">
              {neighborhood.useCases.map((uc) => (
                <li key={uc} className="flex items-start gap-3 bg-gray-50 rounded-2xl px-5 py-4 border border-gray-100">
                  <span className="text-green-500 font-bold text-[16px] mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-[15px] text-gray-700 font-medium">{uc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="bg-gray-50 py-14 px-5">
          <div className="max-w-[860px] mx-auto">
            <h2 className="text-[24px] font-bold text-gray-900 mb-8">¿Cómo empezar desde {neighborhood.name}?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Reservá la clase gratis", body: "Elegís un horario que te sirva. No hay compromiso ni tarjeta de crédito." },
                { step: "2", title: "La clase de diagnóstico", body: "En 60 minutos entendemos tu nivel, tus objetivos y qué tipo de clases te van mejor." },
                { step: "3", title: "Clases a tu medida", body: "Arrancamos con un plan diseñado para vos — cada semana una clase construida desde cero." },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-2xl p-6 border border-gray-200">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white text-[14px] font-extrabold flex items-center justify-center mb-4">{item.step}</div>
                  <div className="text-[15px] font-bold text-gray-900 mb-1">{item.title}</div>
                  <div className="text-[14px] text-gray-500 leading-relaxed">{item.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qué incluyen */}
        <section className="bg-white py-14 px-5">
          <div className="max-w-[860px] mx-auto">
            <h2 className="text-[24px] font-bold text-gray-900 mb-8">¿Qué incluyen las clases?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: "🎯", title: "Clases 100% a tu medida", body: "Cada sesión se arma desde cero según tu nivel, tus objetivos y lo que necesitás hablar esa semana." },
                { icon: "💬", title: "Conversación real desde el día 1", body: "No hay ejercicios de repetición. Practicás hablando, con correcciones naturales que no interrumpen el flujo." },
                { icon: "📱", title: "Online vía Google Meet o Zoom", body: "Sin traslados, sin horarios fijos de presencialidad. Conectate desde donde estés en {neighborhood}." .replace("{neighborhood}", neighborhood.name) },
                { icon: "📝", title: "Feedback inmediato y escrito", body: "Correcciones durante la clase y un resumen escrito después de cada sesión con lo que trabajamos y los próximos pasos." },
                { icon: "📚", title: "Materiales 100% personalizados", body: "Sin libros de texto. Sin PDFs genéricos. Cada clase tiene una presentación construida específicamente para vos." },
                { icon: "💬", title: "WhatsApp entre clases", body: "Para preguntas rápidas, dudas de vocabulario o cualquier cosa que surja durante la semana." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100">
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

        {/* FAQ */}
        <section className="bg-gray-50 py-14 px-5">
          <div className="max-w-[860px] mx-auto">
            <h2 className="text-[24px] font-bold text-gray-900 mb-8">Preguntas frecuentes</h2>
            <div className="flex flex-col gap-4">
              {FAQ.map((item) => (
                <div key={item.q(neighborhood.name)} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <div className="text-[15px] font-bold text-gray-900 mb-2">{item.q(neighborhood.name)}</div>
                  <div className="text-[14px] text-gray-500 leading-relaxed">{item.a(neighborhood.name)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Institutos en la zona — map + comparison */}
        <section className="bg-white py-14 px-5">
          <div className="max-w-[860px] mx-auto">
            <h2 className="text-[24px] font-bold text-gray-900 mb-2">
              Institutos de inglés en {neighborhood.name}, {city.name}
            </h2>
            <p className="text-[15px] text-gray-500 mb-6">
              Si estás buscando clases de inglés en {neighborhood.name}, estas son algunas de las opciones presenciales disponibles en la zona:
            </p>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 mb-8" style={{ height: 380 }}>
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(`instituto de inglés ${neighborhood.name} ${city.name} Argentina`)}&output=embed&hl=es`}
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Institutos de inglés en ${neighborhood.name}, ${city.name}`}
              />
            </div>

            {/* Known city institutes */}
            <div className="mb-8">
              <p className="text-[14px] font-semibold text-gray-500 mb-3 uppercase tracking-wide">Institutos conocidos en {city.name}</p>
              <div className="flex flex-wrap gap-2">
                {city.institutes.map((inst) => (
                  <span key={inst} className="text-[13px] font-medium text-gray-700 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">
                    {inst}
                  </span>
                ))}
              </div>
            </div>

            {/* Online vs presencial comparison */}
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <h3 className="text-[18px] font-bold text-gray-900 mb-2">
                ¿Preferís estudiar inglés sin salir de {neighborhood.name}?
              </h3>
              <p className="text-[14px] text-gray-500 mb-6">
                Los institutos presenciales en {neighborhood.name} tienen horarios fijos y grupos grandes. The Fluency House ofrece una alternativa completamente online, personalizada y con la primera clase gratis.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl p-5 border border-gray-200">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-4">Instituto presencial</div>
                  {[
                    "Horarios fijos, sin flexibilidad",
                    "Grupos de 8 a 15 alumnos",
                    "El mismo material para todos",
                    "Tenés que trasladarte",
                    "Ritmo del grupo, no el tuyo",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[13px] text-gray-500 mb-2">
                      <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">✗</span>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-xl p-5 border border-green-200">
                  <div className="text-[11px] font-bold text-green-600 uppercase tracking-wide mb-4">The Fluency House</div>
                  {[
                    "Horarios 100% flexibles",
                    "Clases 1 a 1, solo vos y Pilar",
                    "Contenido personalizado cada semana",
                    "Online desde {neighborhood} o donde estés".replace("{neighborhood}", neighborhood.name),
                    "Primera clase siempre gratis",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[13px] text-gray-700 mb-2">
                      <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

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
              <p className="text-[14px] text-gray-500 mb-8">Artículos del blog de The Fluency House — consejos prácticos para hablar mejor.</p>
              <div className="flex flex-col gap-4">
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
            <h2 className="text-[26px] font-bold text-gray-900 mb-3">
              Empezá con una clase gratis desde {neighborhood.name}
            </h2>
            <p className="text-[15px] text-gray-500 mb-8 max-w-[460px] mx-auto">
              Sin compromiso. La primera clase es gratuita y está diseñada para entender exactamente dónde estás y qué necesitás.
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
