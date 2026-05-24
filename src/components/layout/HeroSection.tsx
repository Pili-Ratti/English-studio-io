"use client";
import { Badge } from "@/components/ui/Badge";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#C4B478" }}>

      {/* ── Locker grid texture ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{
        backgroundImage: `
          repeating-linear-gradient(90deg, transparent, transparent 119px, rgba(0,0,0,0.09) 119px, rgba(0,0,0,0.09) 123px),
          repeating-linear-gradient(0deg, transparent, transparent 239px, rgba(0,0,0,0.05) 239px, rgba(0,0,0,0.05) 243px)
        `,
      }} />

      {/* Locker handle dots on the left */}
      <div className="absolute left-[121px] top-[120px] w-4 h-8 rounded-full bg-black/15 pointer-events-none" aria-hidden="true" />
      <div className="absolute left-[121px] top-[360px] w-4 h-8 rounded-full bg-black/15 pointer-events-none" aria-hidden="true" />
      <div className="absolute left-[121px] top-[600px] w-4 h-8 rounded-full bg-black/15 pointer-events-none" aria-hidden="true" />
      <div className="absolute right-[121px] top-[120px] w-4 h-8 rounded-full bg-black/15 pointer-events-none" aria-hidden="true" />
      <div className="absolute right-[121px] top-[360px] w-4 h-8 rounded-full bg-black/15 pointer-events-none" aria-hidden="true" />

      {/* ── Globe top-right (halftone effect) ── */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none opacity-60" aria-hidden="true"
        style={{
          background: "radial-gradient(circle at 35% 35%, #2B5EA7 0%, #1B3A6B 60%, #0d1f3c 100%)",
          boxShadow: "inset -12px -12px 24px rgba(0,0,0,0.3)",
          backgroundImage: `radial-gradient(circle at 35% 35%, #2B5EA7 0%, #1B3A6B 60%, #0d1f3c 100%), repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,80,160,0.15) 3px, rgba(0,80,160,0.15) 4px)`,
        }}
      />

      {/* ── Compass top-right area ── */}
      <div className="absolute top-24 right-56 opacity-70 pointer-events-none" aria-hidden="true">
        <svg width="72" height="72" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="36" stroke="#1B3A6B" strokeWidth="2"/>
          <circle cx="40" cy="40" r="30" stroke="#1B3A6B" strokeWidth="1" strokeDasharray="2 3"/>
          <circle cx="40" cy="40" r="5" stroke="#1B3A6B" strokeWidth="1.5"/>
          <polygon points="40,10 43,34 40,32 37,34" fill="#1B3A6B"/>
          <polygon points="40,70 43,46 40,48 37,46" fill="#1B3A6B" opacity="0.35"/>
          <polygon points="10,40 34,37 32,40 34,43" fill="#1B3A6B" opacity="0.35"/>
          <polygon points="70,40 46,37 48,40 46,43" fill="#1B3A6B" opacity="0.35"/>
          <text x="40" y="16" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1B3A6B" fontWeight="bold">N</text>
          <text x="40" y="69" textAnchor="middle" fontSize="7" fontFamily="sans-serif" fill="#1B3A6B" opacity="0.5">S</text>
        </svg>
      </div>

      {/* ── Paper boat + water (top-center-right) ── */}
      <div className="absolute top-16 right-[280px] opacity-85 pointer-events-none" aria-hidden="true">
        <svg width="120" height="80" viewBox="0 0 140 90" fill="none">
          {/* Water waves */}
          <path d="M10 70 Q25 60 40 70 Q55 80 70 70 Q85 60 100 70 Q115 80 130 70" stroke="#4A9EBF" strokeWidth="2" fill="none" opacity="0.6"/>
          <path d="M0 78 Q20 68 40 78 Q60 88 80 78 Q100 68 120 78 Q130 83 140 78" stroke="#4A9EBF" strokeWidth="1.5" fill="none" opacity="0.4"/>
          {/* Boat */}
          <path d="M35 60 L70 20 L105 60 Z" fill="#2A2A2A" stroke="#1A1A1A" strokeWidth="1"/>
          <path d="M35 60 Q70 68 105 60 L110 70 Q70 80 30 70 Z" fill="#1A1A1A"/>
        </svg>
      </div>

      {/* ── Brushstroke top-left ── */}
      <div className="absolute top-6 left-[140px] pointer-events-none opacity-60" aria-hidden="true">
        <svg width="180" height="28" viewBox="0 0 200 30" fill="none">
          <path d="M0 22 Q40 8 80 18 Q120 28 160 14 Q180 8 200 18" stroke="#1A1A1A" strokeWidth="12" strokeLinecap="round" fill="none"/>
        </svg>
      </div>

      {/* ── Binder clip at top ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20" aria-hidden="true">
        <svg width="56" height="48" viewBox="0 0 56 48" fill="none">
          <rect x="8" y="16" width="40" height="26" rx="2" fill="#9A9A9A" stroke="#777" strokeWidth="1"/>
          <path d="M8 28 L0 10 L11 8 L16 28" fill="#AFAFAF" stroke="#888" strokeWidth="0.8"/>
          <path d="M48 28 L56 10 L45 8 L40 28" fill="#AFAFAF" stroke="#888" strokeWidth="0.8"/>
          <rect x="10" y="18" width="36" height="5" rx="1" fill="#C0C0C0"/>
        </svg>
      </div>

      {/* ── Vintage car SVG (bottom-center, large) ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-[60%] opacity-35 pointer-events-none" aria-hidden="true">
        <svg width="520" height="220" viewBox="0 0 300 130" fill="none">
          <path d="M8 88 L28 88 L38 55 L85 38 L140 34 L185 37 L215 54 L248 57 L268 62 L278 72 L283 88" stroke="#3A2A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="68" cy="88" r="24" stroke="#3A2A1A" strokeWidth="2.5" fill="none"/>
          <circle cx="68" cy="88" r="11" stroke="#3A2A1A" strokeWidth="1.5" fill="rgba(100,80,50,0.2)"/>
          <circle cx="220" cy="88" r="24" stroke="#3A2A1A" strokeWidth="2.5" fill="none"/>
          <circle cx="220" cy="88" r="11" stroke="#3A2A1A" strokeWidth="1.5" fill="rgba(100,80,50,0.2)"/>
          <path d="M88 55 L106 40 L165 36 L188 55" stroke="#3A2A1A" strokeWidth="2" fill="rgba(180,160,120,0.3)" strokeLinecap="round"/>
          <path d="M96 53 L108 42 L138 40 L138 54" stroke="#3A2A1A" strokeWidth="1.5" fill="rgba(180,220,255,0.2)"/>
          <path d="M140 40 L165 38 L180 54 L140 54" stroke="#3A2A1A" strokeWidth="1.5" fill="rgba(180,220,255,0.2)"/>
          <line x1="140" y1="40" x2="140" y2="86" stroke="#3A2A1A" strokeWidth="1.5"/>
        </svg>
      </div>

      {/* ── Handwritten text scraps floating ── */}
      <div className="absolute bottom-28 right-8 rotate-[-8deg] pointer-events-none opacity-70" aria-hidden="true">
        <div className="font-handwrite text-[22px] text-ink/60 leading-tight">
          <div>believe that</div>
          <div>you decide</div>
          <div className="text-[18px]">your chosen</div>
          <div className="text-[16px] opacity-70">become</div>
        </div>
      </div>

      {/* ── Old map scrap ── */}
      <div className="absolute bottom-20 right-[220px] w-48 h-48 opacity-35 pointer-events-none rotate-[4deg]" aria-hidden="true">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" fill="#D4C5A0"/>
          <path d="M10 20 Q30 15 50 25 Q70 35 90 20" stroke="#8B7355" strokeWidth="0.8" fill="none"/>
          <path d="M5 40 Q25 35 45 45 Q65 55 95 40" stroke="#8B7355" strokeWidth="0.8" fill="none"/>
          <path d="M10 60 Q35 52 55 62 Q75 72 90 58" stroke="#8B7355" strokeWidth="0.8" fill="none"/>
          <path d="M20 80 Q45 72 65 80 Q80 86 95 75" stroke="#8B7355" strokeWidth="0.8" fill="none"/>
          <path d="M30 5 Q28 30 35 55 Q40 75 32 95" stroke="#8B7355" strokeWidth="0.8" fill="none"/>
          <path d="M60 5 Q55 25 58 50 Q62 70 57 95" stroke="#8B7355" strokeWidth="0.8" fill="none"/>
          <text x="12" y="48" fontSize="6" fill="#6B5A3A" fontFamily="serif" opacity="0.8">GROSSER</text>
          <text x="18" y="58" fontSize="5" fill="#6B5A3A" fontFamily="serif" opacity="0.6">OZEAN</text>
        </svg>
      </div>

      {/* ── Gold star ── */}
      <div className="absolute right-36 bottom-48 pointer-events-none" aria-hidden="true">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="#D4A017" opacity="0.9">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
      </div>

      {/* ── Typewriter scrap ── */}
      <div className="absolute top-28 left-[155px] rotate-[-2deg] pointer-events-none opacity-60" aria-hidden="true">
        <div className="bg-paper-warm px-3 py-1.5 font-mono text-[11px] text-ink/70 shadow-sm">
          buzzing with life
        </div>
      </div>

      {/* ── Main torn paper hero card ── */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 flex items-center min-h-screen py-20">
        <div
          className="relative max-w-[620px]"
          style={{
            background: "linear-gradient(160deg, #F5F0E8 60%, #E8D5B8 100%)",
            clipPath: `polygon(
              0% 3%, 1.5% 0%, 3% 2.5%, 5% 0.5%, 7% 3%, 9% 0%, 11% 2%, 13% 0.5%, 15% 2.5%, 17% 0%, 19% 3%, 21% 0.5%,
              100% 0%, 100% 97%, 98% 100%, 96% 97.5%, 94% 100%, 92% 97%, 90% 100%, 88% 97.5%, 86% 100%, 84% 97%,
              82% 100%, 80% 97.5%, 78% 100%, 76% 97%, 74% 100%, 72% 97.5%, 70% 100%, 68% 97%, 66% 100%,
              64% 97.5%, 62% 100%, 60% 97%, 58% 100%, 56% 97.5%, 54% 100%, 52% 97%, 50% 100%, 48% 97.5%,
              46% 100%, 44% 97%, 42% 100%, 40% 97.5%, 38% 100%, 36% 97%, 34% 100%, 32% 97.5%, 30% 100%,
              28% 97%, 26% 100%, 24% 97.5%, 22% 100%, 20% 97%, 18% 100%, 16% 97.5%, 14% 100%,
              12% 97%, 10% 100%, 8% 97.5%, 6% 100%, 4% 97%, 2% 100%, 0% 97%
            )`,
            padding: "48px 56px 80px",
            boxShadow: "4px 8px 32px rgba(0,0,0,0.22), 0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Badge variant="crimson" rotate={-1} className="mb-6">The Fluency House</Badge>

          <h1
            className="font-display font-black leading-[0.95] mb-5 text-crimson"
            style={{ fontSize: "clamp(48px, 7vw, 86px)" }}
          >
            English that actually lives in the real world.
          </h1>

          <p className="font-body text-[17px] leading-[1.7] text-ink mb-8" style={{ maxWidth: "480px" }}>
            Personalized classes built around your life, your interests, and the English you'll actually use — not a student book from 2003.
          </p>

          <div className="flex gap-3 flex-wrap">
            <a
              href="#pricing"
              className="inline-block bg-crimson text-white font-display font-bold text-[16px] px-8 py-4 shadow-stamp hover:-translate-y-0.5 hover:shadow-card transition-all duration-200"
            >
              Book your free trial →
            </a>
            <a
              href="#how-it-works"
              className="inline-block bg-transparent text-ink font-display font-bold text-[16px] px-8 py-4 border-2 border-ink/30 hover:border-ink transition-all duration-200"
            >
              See how it works
            </a>
          </div>

          <p className="font-handwrite text-[15px] text-ink-muted mt-4">
            — Pilar Ratti · 5 years of real-world business English
          </p>
        </div>
      </div>

    </section>
  );
}
