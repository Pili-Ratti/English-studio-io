import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-ZQ5N6G5R4J";

export const metadata: Metadata = {
  metadataBase: new URL("https://thefluencyhouse.com"),
  title: "The Fluency House | Clases de inglés personalizadas online",
  description:
    "Clases de inglés personalizadas para cada estudiante. Sin libros de texto genéricos — cada clase construida para vos, tu nivel y tus objetivos. Primera clase gratis. Online vía Zoom o Google Meet.",
  keywords: [
    "clases de inglés online",
    "inglés personalizado Argentina",
    "profesor de inglés Buenos Aires",
    "inglés conversacional",
    "inglés de negocios",
    "aprender inglés online",
    "English classes online Argentina",
    "personalized English lessons",
    "clases de inglés particulares",
    "inglés para trabajo",
  ],
  authors: [{ name: "The Fluency House" }],
  openGraph: {
    title: "The Fluency House | Clases de inglés personalizadas online",
    description:
      "Clases de inglés reales, construidas para vos. Sin libros genéricos. Primera clase gratis. Online desde cualquier lugar.",
    type: "website",
    url: "https://thefluencyhouse.com",
    siteName: "The Fluency House",
    locale: "es_AR",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Fluency House | Clases de inglés personalizadas online",
    description:
      "Clases de inglés reales, construidas para vos. Primera clase gratis.",
  },
  alternates: {
    canonical: "https://thefluencyhouse.com",
    languages: {
      "es-AR": "https://thefluencyhouse.com",
      "en-US": "https://thefluencyhouse.com",
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://thefluencyhouse.com/#organization",
      name: "The Fluency House",
      url: "https://thefluencyhouse.com",
      description:
        "Clases de inglés online personalizadas para estudiantes de Argentina y Latinoamérica. Cada clase construida desde cero según los objetivos e intereses de cada alumno. 5 años de experiencia en inglés de negocios real.",
      inLanguage: ["es-AR", "en"],
      serviceType: "English Language Instruction",
      areaServed: [
        { "@type": "Country", name: "Argentina" },
        { "@type": "Country", name: "Uruguay" },
        { "@type": "Country", name: "Chile" },
        { "@type": "Country", name: "Colombia" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Clases de inglés",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Conversación",
            description:
              "Sesión semanal de conversación de 60 minutos. Feedback en tiempo real, vocabulario en contexto, contenido adaptado a tus intereses.",
            price: "30",
            priceCurrency: "USD",
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "180",
              priceCurrency: "USD",
              billingDuration: "P1M",
            },
          },
          {
            "@type": "Offer",
            name: "Full English",
            description:
              "Clase estructurada semanal de 90 minutos. Cubre gramática, vocabulario, listening, speaking y escritura con presentación personalizada en cada sesión.",
            price: "30",
            priceCurrency: "USD",
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "180",
              priceCurrency: "USD",
              billingDuration: "P1M",
            },
          },
          {
            "@type": "Offer",
            name: "Empresarial",
            description:
              "Programa de inglés completamente personalizado para empresas. Cubre comunicación internacional, presentaciones, emails y negociaciones.",
            priceSpecification: {
              "@type": "PriceSpecification",
              description: "Cotización a medida según tamaño del equipo y frecuencia",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://thefluencyhouse.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Necesito un nivel específico para empezar las clases de inglés?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Hay un camino para cada nivel — desde principiante absoluto hasta casi nativo. La clase de prueba gratis está diseñada para entender exactamente dónde estás y qué necesitás antes de cualquier otra cosa.",
          },
        },
        {
          "@type": "Question",
          name: "¿Las clases son online o presenciales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Todas online vía Google Meet o Zoom. Podés sumarte desde Buenos Aires, Madrid o donde estés. Solo necesitás una conexión decente a internet.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuestan las clases de inglés?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Las clases individuales cuestan USD 30 por hora (USD 180 por mes). Las clases grupales cuestan USD 20 por persona por hora (USD 120 por mes). El precio es el mismo para Conversación y Full English. La primera clase es siempre gratis.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuál es la diferencia entre el plan Conversación y Full English?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Conversación es para estudiantes que ya tienen una base y quieren desarrollar fluencia real (60 min). Full English es un programa estructurado que cubre gramática, vocabulario, listening, speaking y escritura semana a semana (90 min).",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a certain level to start English classes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. There's a path for every level — complete beginner to near-native. The free trial class is designed to understand exactly where you are and what you need before anything else.",
          },
        },
        {
          "@type": "Question",
          name: "How much do the English classes cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Individual classes cost $30 per hour ($180 per month). Group classes cost $20 per person per hour ($120 per month). The price is the same for Conversation and Full English. The first class is always free.",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://thefluencyhouse.com/#website",
      url: "https://thefluencyhouse.com",
      name: "The Fluency House",
      inLanguage: ["es-AR", "en"],
      potentialAction: {
        "@type": "SearchAction",
        target: "https://thefluencyhouse.com",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
      </body>
    </html>
  );
}
