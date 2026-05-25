"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Do I need a certain level to start?",
    a: "No. There's a path for every level — complete beginner to near-native. The free trial class is designed to understand exactly where you are and what you need before anything else.",
  },
  {
    q: "Are classes online or in person?",
    a: "All online via Google Meet or Zoom. That means you can join from Buenos Aires, Madrid, or wherever you are. All you need is a decent internet connection.",
  },
  {
    q: "How long are the classes?",
    a: "Conversation classes are 60 minutes. Full English classes are 90 minutes. Enterprise sessions are flexible depending on your team's needs.",
  },
  {
    q: "What's the difference between Conversation and Full English?",
    a: "Conversation is for students who already have a foundation and want to develop real fluency. Full English is a structured program covering grammar, vocabulary, listening, speaking, and writing week by week.",
  },
  {
    q: "Can I switch plans?",
    a: "Anytime. If you start with Conversation and want more structure, or vice versa, just let me know and we adjust. No penalties, no friction.",
  },
  {
    q: "What if I need to reschedule a class?",
    a: "Life happens. Just give me 24 hours notice and we'll find another slot. Classes are meant to fit your schedule, not the other way around.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-24 px-6">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display font-black italic text-gray-900 mb-3" style={{ fontSize: "clamp(32px, 5vw, 48px)" }}>
            Got questions?
          </h2>
        </div>

        <div className="max-w-[720px] mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200">
              <button
                className="w-full flex justify-between items-center py-5 bg-transparent border-0 text-left cursor-pointer gap-4 group"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-[17px] font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-150">
                  {faq.q}
                </span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                  open === i ? "bg-purple-100" : "bg-gray-100"
                }`}>
                  <svg
                    width="14" height="14" viewBox="0 0 14 14" fill="none"
                    className={`transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  >
                    <path d="M2 5L7 10L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? "240px" : "0px" }}
              >
                <div className="bg-purple-50 rounded-[12px] px-5 py-4 mb-4 text-[15px] text-gray-700 leading-[1.7]">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
