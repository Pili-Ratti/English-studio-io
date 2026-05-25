export function Footer() {
  return (
    <footer className="bg-gray-900 text-white/70 pt-16 pb-8 px-6">
      <div className="max-w-[1140px] mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10 mb-8">

          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 no-underline mb-3">
              <div
                className="w-8 h-8 rounded-[10px] flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #22C55E, #7C3AED)" }}
              >
                <HouseIcon />
              </div>
              <span className="text-[18px] font-bold text-white">The Fluency House</span>
            </a>
            <p className="text-[14px] leading-[1.7] max-w-[240px]">
              Real English, taught by a real person who&apos;s lived it. Personalized classes for every level.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[14px] font-extrabold text-white tracking-[0.06em] uppercase mb-4">Classes</h4>
            <div className="space-y-2">
              <a href="#pricing" className="block text-[14px] text-white/65 hover:text-white transition-colors no-underline font-semibold">Conversation</a>
              <a href="#pricing" className="block text-[14px] text-white/65 hover:text-white transition-colors no-underline font-semibold">Full English</a>
              <a href="#pricing" className="block text-[14px] text-white/65 hover:text-white transition-colors no-underline font-semibold">Enterprise</a>
            </div>
          </div>

          <div>
            <h4 className="text-[14px] font-extrabold text-white tracking-[0.06em] uppercase mb-4">About</h4>
            <div className="space-y-2">
              <a href="#how-it-works" className="block text-[14px] text-white/65 hover:text-white transition-colors no-underline font-semibold">How it works</a>
              <a href="#faq" className="block text-[14px] text-white/65 hover:text-white transition-colors no-underline font-semibold">FAQ</a>
            </div>
          </div>

          <div>
            <h4 className="text-[14px] font-extrabold text-white tracking-[0.06em] uppercase mb-4">Contact</h4>
            <div className="space-y-2">
              <a href="mailto:pilar@thefluencyhouse.com" className="block text-[14px] text-white/65 hover:text-white transition-colors no-underline font-semibold">pilar@thefluencyhouse.com</a>
              <a href="#" className="block text-[14px] text-white/65 hover:text-white transition-colors no-underline font-semibold">WhatsApp</a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-[13px] font-semibold">
            © {new Date().getFullYear()} The Fluency House · Pilar Ratti
          </p>
          <div className="flex bg-white/[0.06] border border-white/10 rounded-full p-[3px] gap-0.5">
            <button className="text-[13px] font-bold px-3.5 py-[5px] rounded-full text-white/50 bg-transparent border-0 cursor-pointer">ES</button>
            <button className="text-[13px] font-bold px-3.5 py-[5px] rounded-full bg-white/15 text-white border-0 cursor-pointer">EN</button>
          </div>
        </div>

      </div>
    </footer>
  );
}

function HouseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  );
}
