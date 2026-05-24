import { Badge } from "@/components/ui/Badge";
import { ProblemCard } from "@/components/cards/ProblemCard";
import { SolutionNote } from "@/components/cards/SolutionNote";
import { TornCard } from "@/components/cards/TornCard";

const problems = [
  {
    stamp: "PAGE 47, EXERCISE 3. AGAIN.",
    rotate: -1.5,
    copy: "Your teacher opens the student book, reads the dialogue out loud, asks you to repeat it, and calls it a lesson. You've memorized that Janet and Tom are going to the supermarket — but you still freeze when trying to order coffee in real life.",
  },
  {
    stamp: "TAILORED TO NO ONE.",
    rotate: 1.2,
    copy: "Same worksheet for every student. Whether you're 22 and studying medicine or 38 and prepping for a job interview, you get the exact same material. Nobody asks what you actually need.",
  },
  {
    stamp: "NOBODY TALKS LIKE THAT.",
    rotate: 2,
    copy: "You study for months and then a native speaker says \"wanna grab a bite?\" and you freeze. Because you learned the formal written version of a living language. Real English moves fast — the book doesn't keep up.",
  },
  {
    stamp: "A PDF FROM 2011 IS NOT A LESSON.",
    rotate: -1,
    copy: "No visuals. No context. No personality. Just a printed sheet with fill-in-the-blanks and clipart of a telephone. Learning is supposed to feel engaging — not like a chore you keep postponing.",
  },
  {
    stamp: "WEEK 12 AND YOU'RE STILL STUCK.",
    rotate: 1.8,
    copy: "Classes happen. Nothing connects. There's no thread, no visible growth, no sense of direction. You finish a lesson and couldn't tell someone what you actually learned.",
  },
  {
    stamp: "GENERIC ENGLISH FOR GENERIC PEOPLE.",
    rotate: -2,
    copy: "The teacher doesn't know if you're into football, finance, or film. And it shows. The examples are irrelevant, the vocabulary is forgettable, and nothing sticks because nothing is yours.",
  },
];

const solutions = [
  {
    title: "Real-world English, not classroom English.",
    copy: "Five years working for a US company means being in the meetings, writing the emails, and sitting in the video calls where everything happens in English. Not reading about it in a textbook — actually living it. That's where your classes come from.",
  },
  {
    title: "Every class is built from scratch for you.",
    copy: "No recycled worksheets. No photocopied pages passed off as a lesson plan. Every class starts with a custom presentation designed around your level, your goals, and what you're actually interested in. Football? Tech? Medicine? True crime? We go there.",
  },
  {
    title: "The English that actually comes up.",
    copy: "Idioms, phrasal verbs, register shifts, current slang — the unwritten rules of how English sounds between native speakers. Not the formal, stiff version. The living version. The one that gets you taken seriously in a meeting or comfortable on a call.",
  },
  {
    title: "Two paths, one destination: you move forward.",
    copy: "Pure conversational flow or a full structured program — either way, you leave every class feeling like something actually happened. Not like you sat through something.",
  },
  {
    title: "It's supposed to be fun.",
    copy: "No grades. No judgment on your accent. Classes feel like an engaging conversation with someone who happens to be a language expert — and who genuinely wants to see you get there.",
  },
];

export function ProblemSection() {
  return (
    <section className="relative bg-board corkboard-texture py-28 px-6">
      <div className="max-w-[1100px] mx-auto">

        {/* Hero card */}
        <TornCard torn="bottom" graphPaper rotate={-1} className="px-14 py-12 mb-0 animate-[heroIn_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)_both]">
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
            <svg width="44" height="40" viewBox="0 0 44 40" fill="none">
              <rect x="6" y="13" width="32" height="22" rx="2" fill="#888" stroke="#666" strokeWidth="1"/>
              <path d="M6 24 L0 9 L9 7 L13 24" fill="#999" stroke="#666" strokeWidth="0.8"/>
              <path d="M38 24 L44 9 L35 7 L31 24" fill="#999" stroke="#666" strokeWidth="0.8"/>
              <rect x="8" y="15" width="28" height="4" rx="1" fill="#aaa"/>
            </svg>
          </div>
          <Badge variant="crimson" rotate={2} className="mb-5">THE REAL TALK</Badge>
          <h1 className="font-display font-black text-[52px] leading-[1.05] text-ink mb-3">
            Most English classes are stuck in 2003.
          </h1>
          <p className="text-[16px] text-ink-muted">You&apos;ve probably been there. Let&apos;s name it.</p>
        </TornCard>

        {/* Problem cards grid */}
        <div className="grid grid-cols-2 gap-6 py-8 pb-16 max-md:grid-cols-1">
          {problems.map((p, i) => (
            <ProblemCard key={i} stamp={p.stamp} rotate={p.rotate}>
              {p.copy}
            </ProblemCard>
          ))}
        </div>

        {/* Torn divider */}
        <div className="torn-divider bg-paper-warm h-14" aria-hidden="true" />

        {/* Solution block */}
        <div className="bg-paper-warm px-14 py-16 pb-24 relative overflow-hidden max-md:px-6">
          <Badge variant="teal" rotate={1.5} className="mb-6">THIS IS DIFFERENT</Badge>
          <h2 className="font-display font-black text-[40px] text-teal mb-2">Here&apos;s where it changes.</h2>
          <p className="text-[18px] text-ink mb-10">
            5 years in the real business world. Every class built from scratch. English you&apos;ll actually use.
          </p>

          <div className="flex flex-col gap-4">
            {solutions.map((s, i) => (
              <SolutionNote key={i} title={s.title} delay={i * 90}>
                {s.copy}
              </SolutionNote>
            ))}
          </div>

          {/* Decorative car */}
          <div className="absolute bottom-0 right-0 opacity-20 pointer-events-none animate-float-car" aria-hidden="true">
            <svg width="300" height="130" viewBox="0 0 300 130" fill="none">
              <path d="M8 88 L28 88 L38 55 L85 38 L140 34 L185 37 L215 54 L248 57 L268 62 L278 72 L283 88" stroke="#1A4A45" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="68" cy="88" r="24" stroke="#1A4A45" strokeWidth="2.5" fill="none"/>
              <circle cx="68" cy="88" r="11" stroke="#1A4A45" strokeWidth="1.5" fill="none"/>
              <circle cx="220" cy="88" r="24" stroke="#1A4A45" strokeWidth="2.5" fill="none"/>
              <circle cx="220" cy="88" r="11" stroke="#1A4A45" strokeWidth="1.5" fill="none"/>
              <path d="M88 55 L106 40 L165 36 L188 55" stroke="#1A4A45" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M96 53 L108 42 L138 40 L138 54" stroke="#1A4A45" strokeWidth="1.5" fill="none"/>
              <path d="M140 40 L165 38 L180 54 L140 54" stroke="#1A4A45" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
