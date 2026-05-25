const problems = [
  {
    icon: BookIcon,
    label: "Page 47, Exercise 3. Again.",
    title: "The student book trap",
    copy: "Your teacher opens the student book, reads the dialogue out loud, asks you to repeat it, and calls it a lesson. You've memorized that Janet and Tom are going to the supermarket — but you still freeze ordering coffee in real life.",
  },
  {
    icon: UsersIcon,
    label: "Tailored to no one.",
    title: "One size fits nobody",
    copy: "Same worksheet for every student. Whether you're 22 studying medicine or 38 prepping for a job interview, you get the exact same material. Nobody asks what you actually need.",
  },
  {
    icon: SpeechSlashIcon,
    label: "Nobody talks like that.",
    title: "Formal English ≠ real English",
    copy: "You study for months and then a native speaker says \"wanna grab a bite?\" and you freeze. Because you learned the formal written version of a living language. Real English moves fast — the book doesn't keep up.",
  },
  {
    icon: DocumentIcon,
    label: "A PDF from 2011 is not a lesson.",
    title: "Zero engagement",
    copy: "No visuals. No context. No personality. Just a printed sheet with fill-in-the-blanks and clipart of a telephone. Learning is supposed to feel engaging — not like a chore you keep postponing.",
  },
  {
    icon: ClockIcon,
    label: "Week 12 and you're still stuck.",
    title: "No visible progress",
    copy: "Classes happen. Nothing connects. There's no thread, no visible growth, no sense of direction. You finish a lesson and couldn't tell someone what you actually learned.",
  },
  {
    icon: UserIcon,
    label: "Generic English for generic people.",
    title: "Nothing sticks because nothing is yours",
    copy: "The teacher doesn't know if you're into football, finance, or film. And it shows. The examples are irrelevant, the vocabulary is forgettable, and nothing sticks because nothing is yours.",
  },
];

const solutions = [
  {
    icon: BriefcaseIcon,
    iconColor: "bg-purple-100 text-purple-700",
    badge: "5 years business experience",
    title: "Real-world English, not classroom English.",
    copy: "Five years working for a US company means being in the actual meetings, writing the actual emails, sitting in the actual video calls. That's where the classes come from — not from a teacher's edition textbook.",
  },
  {
    icon: PencilIcon,
    iconColor: "bg-purple-100 text-purple-700",
    badge: "Custom presentation every class",
    title: "Every class built from scratch for you.",
    copy: "No recycled worksheets. No photocopied pages. Every class is a custom presentation designed around your level, your goals, and what you're actually into. Football? Tech? Medicine? True crime? We go there.",
  },
  {
    icon: ChatBubbleIcon,
    iconColor: "bg-purple-100 text-purple-700",
    title: "The English that actually comes up.",
    copy: "Idioms, phrasal verbs, register shifts, current slang — the unwritten rules of how English sounds between native speakers. Not the formal, stiff version. The living version. The one that gets you taken seriously in a meeting.",
  },
  {
    icon: ArrowsIcon,
    iconColor: "bg-purple-100 text-purple-700",
    title: "Two paths, one goal: you move forward.",
    copy: "Pure conversational flow or a full structured program that covers grammar, listening, speaking, and writing — either way, you leave every class feeling like something actually happened.",
  },
];

export function ProblemSection() {
  return (
    <>
      {/* ── WAVE: white → purple-50 ── */}
      <div style={{ background: "#fff" }} aria-hidden="true">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" height="60" width="100%">
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="#FAF5FF" />
        </svg>
      </div>

      {/* ── PROBLEMS ── */}
      <section id="how-it-works" className="bg-[#FAF5FF] py-24 px-6">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-extrabold text-gray-900 mb-3" style={{ fontSize: "clamp(32px, 5vw, 48px)" }}>
              Sound familiar?
            </h2>
            <p className="text-[18px] text-gray-500 max-w-[520px] mx-auto">
              Most online English learning has the same problems. You&apos;re not the problem — the method is.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-14 h-14 rounded-[10px] bg-green-100 text-green-700 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="block text-[11px] font-bold tracking-[0.1em] uppercase text-gray-400 mb-2">
                    {p.label}
                  </span>
                  <h3 className="text-[17px] font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-[14px] text-gray-500 leading-[1.65]">{p.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WAVE: purple-50 → white ── */}
      <div style={{ background: "#FAF5FF" }} aria-hidden="true">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" height="60" width="100%">
          <path d="M0,20 C360,60 720,0 1080,40 C1260,60 1350,30 1440,20 L1440,60 L0,60 Z" fill="#fff" />
        </svg>
      </div>

      {/* ── SOLUTION ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-extrabold text-gray-900 mb-3" style={{ fontSize: "clamp(32px, 5vw, 48px)" }}>
              Here&apos;s why it&apos;s different.
            </h2>
            <p className="text-[18px] text-gray-500 max-w-[520px] mx-auto">
              The Fluency House is built on one idea: real English, taught by a real person who&apos;s lived it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {solutions.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex gap-5 items-start">
                  <div className={`w-[52px] h-[52px] rounded-[10px] flex items-center justify-center flex-shrink-0 ${s.iconColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-[14px] text-gray-500 leading-[1.65]">{s.copy}</p>
                    {s.badge && (
                      <span className="inline-block mt-3 text-[12px] font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                        {s.badge}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Wide card */}
            <div className="md:col-span-2 bg-gray-50 rounded-2xl p-8 border border-gray-100 flex gap-5 items-start">
              <div className="w-[52px] h-[52px] rounded-[10px] bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0">
                <SparklesIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-gray-900 mb-2">It&apos;s supposed to be fun. Genuinely.</h3>
                <p className="text-[14px] text-gray-500 leading-[1.65] max-w-[720px]">
                  No grades. No judgment on your accent. No pressure. Classes feel like an engaging conversation with someone who happens to be a language expert — and who genuinely wants to see you get there. You&apos;re not a student number here. You&apos;re a person with goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ── Icons ──────────────────────────────────────

function BookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function SpeechSlashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <line x1="9" y1="10" x2="9" y2="10" strokeWidth="3" />
    </svg>
  );
}

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function PencilIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

function ChatBubbleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function ArrowsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.9 5.5L19 10l-5.1 1.5L12 17l-1.9-5.5L5 10l5.1-1.5L12 3z" />
      <path d="M5 3l.9 2.5L8 6.5 5.9 7.5 5 10l-.9-2.5L2 6.5l2.1-1L5 3z" />
      <path d="M19 17l.9 2.5 2.1 1-2.1 1L19 24l-.9-2.5L16 20.5l2.1-1L19 17z" />
    </svg>
  );
}
