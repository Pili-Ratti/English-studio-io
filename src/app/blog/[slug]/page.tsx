import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { BOOKING_URL } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `https://thefluencyhouse.com/blog/${slug}`;
  return {
    title: `${post.title} | The Fluency House`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "The Fluency House",
      locale: "es_AR",
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Pilar",
      affiliation: "The Fluency House",
      url: "https://thefluencyhouse.com",
    },
    publisher: {
      "@type": "Organization",
      name: "The Fluency House",
      url: "https://thefluencyhouse.com",
    },
    inLanguage: "es-AR",
    url: `https://thefluencyhouse.com/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="max-w-[720px] mx-auto px-5 py-20">
        <div className="mb-10">
          <time className="text-[13px] font-semibold text-gray-400 uppercase tracking-wide">
            {new Date(post.date).toLocaleDateString("es-AR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="font-display font-bold italic text-gray-900 mt-3 leading-tight"
            style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}>
            {post.title}
          </h1>
          <p className="text-[18px] text-gray-500 mt-4 leading-relaxed">{post.description}</p>
        </div>

        <article className="prose prose-lg prose-gray max-w-none
          prose-headings:font-bold prose-headings:text-gray-900
          prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-gray-900
          prose-li:text-gray-600 prose-p:text-gray-600 prose-p:leading-relaxed">
          <MDXRemote source={post.content} />
        </article>

        {/* CTA */}
        <div className="mt-16 bg-green-50 border border-green-100 rounded-3xl p-8 text-center">
          <p className="text-[20px] font-bold text-gray-900 mb-2">¿Querés practicar en clase?</p>
          <p className="text-[15px] text-gray-500 mb-6">
            La primera clase es gratis y está diseñada para entender exactamente qué necesitás.
          </p>
          <a
            href={BOOKING_URL}
            className="inline-flex items-center justify-center font-bold text-[15px] bg-green-500 text-white px-8 py-3.5 rounded-full hover:bg-green-600 transition-colors no-underline"
          >
            Ver los planes →
          </a>
        </div>
      </main>
    </>
  );
}
