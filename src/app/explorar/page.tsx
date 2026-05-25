import type { Metadata } from "next";
import Link from "next/link";
import { geoCities } from "@/lib/geo";
import { getAllPosts } from "@/lib/mdx";
import { BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Explorar | The Fluency House",
  description:
    "Todo el contenido de The Fluency House: artículos de inglés, clases por ciudad y por barrio en Argentina.",
  alternates: { canonical: "https://thefluencyhouse.com/explorar" },
};

export default function ExplorarPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-[1000px] mx-auto px-5 py-16">

      {/* Header */}
      <div className="mb-14">
        <h1
          className="font-display font-bold italic text-gray-900 mb-3"
          style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
        >
          Explorá todo el contenido
        </h1>
        <p className="text-[17px] text-gray-500 max-w-[560px]">
          Artículos para aprender inglés, páginas por ciudad y por barrio. Todo en un solo lugar.
        </p>
      </div>

      {/* ── BLOG ── */}
      <section className="mb-14">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[20px] font-bold text-gray-900">Blog de inglés</h2>
          <Link href="/blog" className="text-[13px] font-bold text-green-600 hover:text-green-700 no-underline">
            Ver todos →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 hover:border-green-200 hover:bg-green-50 transition-colors no-underline"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  {post.category && (
                    <span className="text-[11px] font-bold text-green-600 uppercase tracking-wide">
                      {post.category}
                    </span>
                  )}
                  <div className="text-[14px] font-semibold text-gray-800 group-hover:text-green-700 transition-colors mt-0.5 leading-snug">
                    {post.title}
                  </div>
                </div>
                <span className="text-green-400 font-bold flex-shrink-0 mt-0.5">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CITIES ── */}
      <section>
        <h2 className="text-[20px] font-bold text-gray-900 mb-5">Clases por ciudad y barrio</h2>
        <div className="flex flex-col gap-8">
          {geoCities.map((city) => (
            <div key={city.slug}>
              {/* City row */}
              <div className="flex items-center justify-between mb-3">
                <Link
                  href={`/clases/${city.slug}`}
                  className="text-[16px] font-bold text-gray-900 hover:text-green-600 transition-colors no-underline"
                >
                  📍 {city.name}
                </Link>
                <Link
                  href={`/clases/${city.slug}`}
                  className="text-[12px] font-bold text-green-600 hover:text-green-700 no-underline"
                >
                  Ver página →
                </Link>
              </div>

              {/* Neighborhood chips */}
              {city.neighborhoods.length > 0 && (
                <div className="flex flex-wrap gap-2 pl-1">
                  {city.neighborhoods.map((n) => (
                    <Link
                      key={n.slug}
                      href={`/clases/${city.slug}/${n.slug}`}
                      className="text-[12px] font-semibold text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full hover:border-green-400 hover:text-green-700 hover:bg-green-50 transition-colors no-underline"
                    >
                      {n.name}
                    </Link>
                  ))}
                </div>
              )}

              <div className="border-b border-gray-100 mt-6" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-14 bg-green-50 border border-green-100 rounded-2xl p-8 text-center">
        <p className="text-[18px] font-bold text-gray-900 mb-2">¿No encontraste tu zona?</p>
        <p className="text-[14px] text-gray-500 mb-6">
          Las clases son 100% online — podés tomarlas desde cualquier lugar de Argentina. La primera siempre es gratis.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center font-bold text-[15px] bg-green-500 text-white px-8 py-3.5 rounded-full hover:bg-green-600 transition-colors no-underline"
        >
          Reservar clase gratis →
        </a>
      </div>
    </main>
  );
}
