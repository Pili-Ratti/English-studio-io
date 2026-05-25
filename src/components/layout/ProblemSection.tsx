"use client";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export function ProblemSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const p = t.problems;
  const s = t.solution;

  return (
    <>
      {/* ── PROBLEMS ── */}
      <section id="how-it-works" className="bg-gray-50 py-24 px-6">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold italic text-gray-900 mb-3" style={{ fontSize: "clamp(32px, 5vw, 48px)" }}>
              {p.h2}
            </h2>
            <p className="text-[18px] text-gray-500 max-w-[560px] mx-auto">{p.sub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.cards.map((card, i) => {
              const PIcon = ProblemIcons[i];
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-full bg-green-50 border border-green-100 text-green-600 flex items-center justify-center mb-4">
                    <PIcon className="w-5 h-5" />
                  </div>
                  <span className="block text-[11px] font-bold tracking-[0.1em] uppercase text-gray-400 mb-2">
                    {card.label}
                  </span>
                  <h3 className="text-[17px] font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-[14px] text-gray-500 leading-[1.65]">{card.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold italic text-gray-900 mb-3" style={{ fontSize: "clamp(32px, 5vw, 48px)" }}>
              {s.h2}
            </h2>
            <p className="text-[18px] text-gray-500 max-w-[520px] mx-auto">{s.sub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {s.cards.slice(0, 4).map((card, i) => {
              const SIcon = SolutionIcons[i];
              return (
                <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-full bg-green-50 border border-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                    <SIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-[14px] text-gray-500 leading-[1.65]">{card.copy}</p>
                    {"badge" in card && card.badge && (
                      <span className="inline-block mt-3 text-[12px] font-bold text-green-700 bg-green-50 border border-green-100 px-3 py-1 rounded-full">
                        {(card as { badge?: string }).badge}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Wide card */}
            <div className="md:col-span-2 bg-gray-50 rounded-2xl p-8 border border-gray-100 flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full bg-green-50 border border-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                <SparklesIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-gray-900 mb-2">{s.cards[4].title}</h3>
                <p className="text-[14px] text-gray-500 leading-[1.65] max-w-[720px]">{s.cards[4].copy}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ── Problem icons ────────────────────────────

const ProblemIcons: React.FC<{ className?: string }>[] = [
  ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  ),
];

// ── Solution icons ───────────────────────────

const SolutionIcons: React.FC<{ className?: string }>[] = [
  ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
  ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
    </svg>
  ),
];

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.9 5.5L19 10l-5.1 1.5L12 17l-1.9-5.5L5 10l5.1-1.5L12 3z" />
      <path d="M5 3l.9 2.5L8 6.5 5.9 7.5 5 10l-.9-2.5L2 6.5l2.1-1L5 3z" />
    </svg>
  );
}
