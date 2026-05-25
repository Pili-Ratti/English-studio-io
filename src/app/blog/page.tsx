import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog de inglés | The Fluency House",
  description:
    "Consejos, guías y recursos para aprender inglés de verdad. Para argentinos que quieren hablar, no solo estudiar.",
  alternates: { canonical: "https://thefluencyhouse.com/blog" },
  openGraph: {
    title: "Blog de inglés | The Fluency House",
    description: "Consejos, guías y recursos para aprender inglés de verdad.",
    url: "https://thefluencyhouse.com/blog",
    siteName: "The Fluency House",
    locale: "es_AR",
    type: "website",
  },
};

const CATEGORIES: { slug: string; label: string }[] = [
  { slug: "todos", label: "Todos" },
  { slug: "vocabulario", label: "Vocabulario" },
  { slug: "trabajo", label: "Trabajo" },
  { slug: "exámenes", label: "Exámenes" },
];

interface Props {
  searchParams: Promise<{ categoria?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const { categoria } = await searchParams;
  const activeCategory = categoria && categoria !== "todos" ? categoria : null;

  const allPosts = getAllPosts();
  const posts = activeCategory
    ? allPosts.filter((p) => p.category === activeCategory)
    : allPosts;

  return (
    <main className="max-w-[860px] mx-auto px-5 py-20">
      <h1
        className="font-display font-bold italic text-gray-900 mb-3"
        style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
      >
        Blog de inglés
      </h1>
      <p className="text-[18px] text-gray-500 mb-10 max-w-[560px]">
        Consejos prácticos, guías y recursos para hablar inglés de verdad — no solo estudiar.
      </p>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-12">
        {CATEGORIES.map((cat) => {
          const isActive =
            cat.slug === "todos" ? !activeCategory : activeCategory === cat.slug;
          const href =
            cat.slug === "todos" ? "/blog" : `/blog?categoria=${cat.slug}`;
          return (
            <Link
              key={cat.slug}
              href={href}
              className={`text-[13px] font-bold px-4 py-2 rounded-full border transition-colors no-underline ${
                isActive
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-white text-gray-600 border-gray-200 hover:border-green-400 hover:text-green-700"
              }`}
            >
              {cat.label}
            </Link>
          );
        })}
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-400 text-[16px]">No hay artículos en esta categoría todavía.</p>
      ) : (
        <div className="flex flex-col gap-10">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-100 pb-10">
              <div className="flex items-center gap-3 mb-2">
                <time className="text-[13px] font-semibold text-gray-400 uppercase tracking-wide">
                  {new Date(post.date).toLocaleDateString("es-AR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                {post.category && (
                  <Link
                    href={`/blog?categoria=${post.category}`}
                    className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 no-underline hover:bg-green-100 transition-colors capitalize"
                  >
                    {post.category}
                  </Link>
                )}
              </div>
              <h2 className="text-[22px] font-bold text-gray-900 mt-1 mb-2 leading-snug">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-green-600 transition-colors no-underline"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-[16px] text-gray-500 leading-relaxed mb-4">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-[14px] font-bold text-green-600 hover:text-green-700 no-underline"
              >
                Leer más →
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
