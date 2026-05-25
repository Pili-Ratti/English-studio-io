export function CTABanner() {
  return (
    <section
      className="py-24 px-6 text-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #6D28D9 0%, #BE185D 100%)" }}
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-[600px] mx-auto">
        <h2 className="font-extrabold text-white mb-3 leading-[1.15]" style={{ fontSize: "clamp(28px, 5vw, 48px)" }}>
          Your first class is free. Always.
        </h2>
        <p className="text-[18px] text-white/80 mb-9">
          No commitment. No credit card. Just one class to see if it works for you — and it usually does.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center font-bold text-[18px] bg-green-400 text-gray-900 border-2 border-green-600 border-b-[6px] px-11 py-4 rounded-[10px] shadow-[0_2px_0_#16A34A] hover:-translate-y-px hover:shadow-[0_5px_0_#16A34A] active:translate-y-1 active:border-b-2 active:shadow-none transition-all duration-100 no-underline"
        >
          Book your free class →
        </a>
        <p className="mt-4 text-[14px] text-white/60 font-bold">
          Cancel anytime · No student books · Classes in English and Spanish
        </p>
      </div>
    </section>
  );
}
