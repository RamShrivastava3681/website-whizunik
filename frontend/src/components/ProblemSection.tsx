import { motion } from "framer-motion";

const cardData = [
  {
    title: "Volatile Cash Cycles",
    note: "Fixed repayment structures fail when cash flows fluctuate.",
    type: "wave" as const,
  },
  {
    title: "Irregular Growth Curves",
    note: "Conventional financing expects linear progress.",
    type: "curve" as const,
  },
  {
    title: "Trapped Working Capital",
    note: "Receivables and inventory cycles delay liquidity.",
    type: "locked" as const,
  },
];

const WaveVisual = () => (
  <svg viewBox="0 0 280 120" className="w-full h-14 md:h-16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="waveLine" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#2563FF" />
      </linearGradient>
    </defs>
    <motion.path
      d="M10 70 C 40 30, 70 92, 100 62 C 130 34, 160 86, 190 56 C 220 28, 245 62, 270 40"
      stroke="url(#waveLine)"
      strokeWidth="2.6"
      strokeLinecap="round"
      initial={{ pathLength: 0.35, opacity: 0.7 }}
      animate={{ pathLength: [0.32, 0.95, 0.32], opacity: [0.55, 1, 0.55] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      className="drop-shadow-[0_0_12px_rgba(37,99,255,0.8)]"
    />
  </svg>
);

const CurveVisual = () => (
  <svg viewBox="0 0 280 120" className="w-full h-14 md:h-16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="growthLine" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#93C5FD" />
        <stop offset="100%" stopColor="#2563FF" />
      </linearGradient>
    </defs>
    <motion.path
      d="M12 96 C 38 98, 54 82, 76 78 C 102 74, 118 90, 140 68 C 162 46, 180 60, 205 44 C 226 30, 246 34, 268 18"
      stroke="url(#growthLine)"
      strokeWidth="2.6"
      strokeLinecap="round"
      initial={{ pathLength: 0.45, opacity: 0.75 }}
      animate={{ pathLength: [0.42, 1, 0.42], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      className="drop-shadow-[0_0_12px_rgba(37,99,255,0.75)]"
    />
    <motion.circle
      cx="268"
      cy="18"
      r="3.5"
      fill="#2563FF"
      initial={{ scale: 0.9, opacity: 0.7 }}
      animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
      className="drop-shadow-[0_0_10px_rgba(37,99,255,0.95)]"
    />
  </svg>
);

const LockedCapitalVisual = () => (
  <div className="relative h-14 md:h-16 w-full flex items-center justify-center">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      className="absolute w-12 h-12 rounded-full border border-[#2563FF]/60"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute w-8 h-8 rounded-full border border-[#60A5FA]/50"
    />
    <div className="relative w-8 h-8 rounded-full bg-[#1E40AF] border border-[#60A5FA]/70 shadow-[0_0_24px_rgba(37,99,255,0.55)] flex items-center justify-center text-white font-bold text-[10px]">
      $
      <div className="absolute -top-2 w-4 h-2.5 border-2 border-[#93C5FD] border-b-0 rounded-t-md" />
    </div>
  </div>
);

const CardVisual = ({ type }: { type: (typeof cardData)[number]["type"] }) => {
  if (type === "wave") return <WaveVisual />;
  if (type === "curve") return <CurveVisual />;
  return <LockedCapitalVisual />;
};

const ProblemSection = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-16 lg:py-18 bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_15%,hsl(var(--primary)/0.14)_0%,rgba(255,255,255,0.92)_42%,rgba(255,255,255,1)_100%)] pointer-events-none" />
      <div className="absolute top-[-8%] right-[-8%] w-[30rem] h-[30rem] rounded-full bg-primary/10 blur-[95px] pointer-events-none" />
      <div className="absolute bottom-[-24%] left-[-12%] w-[24rem] h-[24rem] rounded-full bg-primary/10 blur-[85px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.92fr] gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="text-primary font-body text-[10px] md:text-xs uppercase tracking-[0.35em] font-bold mb-6">
              Chapter I — The Problem
            </p>

            <h2 className="serif-headline text-black text-[22px] sm:text-[32px] md:text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tight mb-8">
              <span className="block whitespace-nowrap">Capital inefficiency is the</span>
              <span className="block whitespace-nowrap">
                <span className="blue-gradient-text italic font-light">silent killer</span> of growth.
              </span>
            </h2>

            <div className="space-y-2.5 md:space-y-3.5 mb-6 md:mb-8">
              {[
                "Most businesses don't struggle to access capital.",
                "They struggle to access capital that fits how they operate.",
              ].map((line, index) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + index * 0.1, duration: 0.55 }}
                  className="text-black/65 text-sm md:text-base leading-relaxed"
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-primary text-base md:text-xl font-semibold tracking-tight"
            >
              We work in that gap.
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="absolute -inset-6 bg-primary/10 blur-3xl pointer-events-none" />
            <div className="relative space-y-4 md:space-y-5">
              {cardData.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 38, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -8, scale: 1.015 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: index * 0.18, ease: "easeOut" }}
                  animate={{ y: [0, -4, 0] }}
                  className={`group relative w-[92%] md:w-[88%] rounded-[1.6rem] p-4 md:p-5 border border-primary/20 bg-white/70 backdrop-blur-xl shadow-[0_18px_45px_-26px_hsl(var(--primary)/0.35)] hover:shadow-[0_26px_60px_-24px_hsl(var(--primary)/0.45)] transition-all duration-500 ${
                    index % 2 === 0 ? "mr-auto" : "ml-auto"
                  } ${index === 1 ? "md:translate-x-2" : ""}`}
                  style={{ animationDelay: `${index * 0.3}s`, animationDuration: `${5 + index}s` }}
                >
                  <div className="absolute inset-0 rounded-[1.6rem] bg-[linear-gradient(120deg,hsl(var(--primary)/0.12)_0%,rgba(255,255,255,0.05)_48%,hsl(var(--primary)/0.08)_100%)] opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <p className="text-black text-lg md:text-xl font-semibold tracking-tight">{card.title}</p>
                    <p className="text-black/60 text-xs md:text-sm mt-1.5 leading-relaxed max-w-[30ch]">{card.note}</p>
                    <div className="mt-3 rounded-xl border border-primary/20 bg-white/85 p-2 md:p-2.5 max-w-[14.5rem]">
                      <CardVisual type={card.type} />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
