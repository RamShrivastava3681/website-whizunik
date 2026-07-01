import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

type InsightIconKey =
  | "capital-strategy"
  | "working-capital"
  | "cash-flow"
  | "growth-structuring"
  | "execution";

const InsightLogo = ({ icon }: { icon: InsightIconKey }) => {
  if (icon === "capital-strategy") {
    return (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="16" width="4" height="8" rx="1" fill="#1E3A8A" />
        <rect x="9" y="12" width="4" height="12" rx="1" fill="#2563EB" />
        <rect x="16" y="8" width="4" height="16" rx="1" fill="#60A5FA" />
        <circle cx="20" cy="4.5" r="4" fill="#F59E0B" />
        <path d="M20 2.6V6.4" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M18.8 3.8H21.2" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "working-capital") {
    return (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="3" width="16" height="20" rx="2" fill="#0F766E" />
        <rect x="6" y="6" width="10" height="2" rx="1" fill="#99F6E4" />
        <path d="M6 11L7.6 12.6L10.5 9.7" stroke="#CCFBF1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 16L7.6 17.6L10.5 14.7" stroke="#CCFBF1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20.5" cy="18.5" r="3.5" fill="#334155" />
        <path d="M20.5 16.8V20.2" stroke="#E2E8F0" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M18.8 18.5H22.2" stroke="#E2E8F0" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="20.5" cy="9" r="2" fill="#FBBF24" />
        <path d="M20.5 8V10" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "cash-flow") {
    return (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse cx="8" cy="6" rx="4" ry="2" fill="#4F46E5" />
        <path d="M4 6V10C4 11.1 5.8 12 8 12C10.2 12 12 11.1 12 10V6" fill="#6366F1" />
        <ellipse cx="8" cy="10" rx="4" ry="2" fill="#818CF8" />

        <ellipse cx="18" cy="10" rx="4" ry="2" fill="#2563EB" />
        <path d="M14 10V14C14 15.1 15.8 16 18 16C20.2 16 22 15.1 22 14V10" fill="#3B82F6" />
        <ellipse cx="18" cy="14" rx="4" ry="2" fill="#60A5FA" />

        <ellipse cx="13" cy="17" rx="4" ry="2" fill="#0891B2" />
        <path d="M9 17V21C9 22.1 10.8 23 13 23C15.2 23 17 22.1 17 21V17" fill="#06B6D4" />
        <ellipse cx="13" cy="21" rx="4" ry="2" fill="#67E8F9" />

        <circle cx="12" cy="9" r="1" fill="#0EA5E9" />
        <circle cx="14" cy="13" r="1" fill="#0EA5E9" />
        <path d="M12.8 9.7L13.6 12.2" stroke="#38BDF8" strokeWidth="1" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "growth-structuring") {
    return (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="16" width="3" height="8" rx="1" fill="#84CC16" />
        <rect x="7" y="13" width="3" height="11" rx="1" fill="#65A30D" />
        <rect x="12" y="10" width="3" height="14" rx="1" fill="#4D7C0F" />
        <path d="M3 20C6.5 17.5 9.5 15.5 13 12.8C15.5 10.9 17.2 9.4 20.8 6.4" stroke="#22C55E" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M18.6 6.5H21.7V9.6" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="13" cy="13" r="9" stroke="#DC2626" strokeWidth="2" />
      <circle cx="13" cy="13" r="5" stroke="#F97316" strokeWidth="2" />
      <circle cx="13" cy="13" r="2" fill="#FB7185" />
      <path d="M22.5 4.5L14.4 12.6" stroke="#F87171" strokeWidth="2" strokeLinecap="round" />
      <path d="M22.5 4.5L20.1 10.6L16.4 6.9L22.5 4.5Z" fill="#EF4444" />
      <path d="M6 18.5L4.5 20" stroke="#FCA5A5" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M8 20.5L6.5 22" stroke="#FCA5A5" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
};

const moreArticles = [
  {
    category: "Capital Planning",
    title: "The Gap Between Bank Debt and Equity",
    desc: "Exploring the structural space where traditional debt and equity both fall short.",
    icon: "capital-strategy" as InsightIconKey,
    href: "https://drive.google.com/file/d/1MShaU9phDOp78mwg1WUcrXsP5Izuyl7f/view?usp=sharing"
  },
  {
    category: "Working Capital Management",
    title: "When Working Capital Stops Supporting Growth",
    desc: "Why liquidity cycles can shift from growth enabler to operational constraint.",
    icon: "working-capital" as InsightIconKey,
    href: "https://drive.google.com/file/d/1fqmi-Fuhzv13YSzxOI0PVkuQrogePHJv/view?usp=sharing"
  },
  {
    category: "Cash Flow Structure",
    title: "Why Capital Should Follow Cash Flows",
    desc: "Aligning funding structures with real operating cash movement instead of static models.",
    icon: "cash-flow" as InsightIconKey,
    href: "https://drive.google.com/file/d/14O7O2hcPN0MNyDvJrvti3GEkUAGV5jDa/view?usp=sharing"
  },
  

  {
    category: "Growth Framework",
    title: "Structuring Growth Without Diluting Control",
    desc: "Designing expansion capital that protects ownership while enabling scale.",
    icon: "growth-structuring" as InsightIconKey,
    href: "https://drive.google.com/file/d/1fflHBtcpH7FVG2zloh5SBiSKAwb5vWfC/view?usp=sharing"
  },
  {
    category: "Operational Execution",
    title: "Why Most Capital Deals Don’t Close",
    desc: "The practical friction points that derail transactions before completion.",
    icon: "execution" as InsightIconKey,
    href: "https://drive.google.com/file/d/1BwITSXNtygtElLH9CURyk4Xm78kxiP1E/view?usp=sharing"
  },
];

const Insights = () => {
  return (
    <div className="bg-background text-foreground selection:bg-primary/20 transition-colors duration-500">
      <Header />
      
      <main className="pt-24 md:pt-32 pb-14 md:pb-24 max-w-[1280px] mx-auto px-5 sm:px-6 md:px-10">
        {/* Section 1: Hero Title */}
        <section className="mb-12 md:mb-24 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-primary font-bold tracking-[0.2em] text-[10px] uppercase mb-8 shadow-sm">
              Market Intelligence
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.08] tracking-tighter mb-7 md:mb-10 font-headline">
              Insights for the<br />
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="italic font-light text-primary/80"
              >Modern Institution</motion.span>.
            </h1>
            <p className="text-on-surface-variant text-base sm:text-lg md:text-lg leading-relaxed max-w-2xl font-medium border-l-[3px] border-primary/20 pl-5 md:pl-8">
              Curated perspectives on global markets, technological shifts, and the evolving
              landscape of institutional excellence.
            </p>
          </motion.div>
        </section>

        {/* Section 2: More Articles Grid (Premium Cards) */}
        <section className="mb-12 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {moreArticles.map((a, i) => {
              const CardContent = (
                <>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8 group-hover:scale-105 transition-all duration-500">
                    <InsightLogo icon={a.icon} />
                  </div>
                  <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4 block">
                    {a.category}
                  </span>
                  <h3 className="text-2xl md:text-2xl text-foreground/90 font-headline font-bold leading-tight group-hover:text-primary transition-colors duration-300 mb-4 md:mb-5">
                    {a.title}
                  </h3>
                  <p className="text-on-surface-variant font-medium leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {a.desc}
                  </p>
                </>
              );

              return a.href ? (
                <motion.a
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={a.title} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer block p-6 sm:p-7 md:p-9 bg-surface-container-low/20 backdrop-blur-sm rounded-2xl md:rounded-[2rem] border border-white/5 hover:border-primary/40 hover:bg-surface-container-low/40 transition-all duration-500 shadow-lg no-underline"
                >
                  {CardContent}
                </motion.a>
              ) : (
                <motion.div 
                  key={a.title} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer p-6 sm:p-7 md:p-9 bg-surface-container-low/20 backdrop-blur-sm rounded-2xl md:rounded-[2rem] border border-white/5 hover:border-primary/40 hover:bg-surface-container-low/40 transition-all duration-500 shadow-lg"
                >
                  {CardContent}
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Section 5: Newsletter (Premium High-Contrast) */}
        <section className="mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl md:rounded-[3rem] p-7 sm:p-9 md:p-12 lg:p-16 text-center relative overflow-hidden shadow-[0_30px_80px_-35px_rgba(0,0,0,0.45)] border border-black/10 bg-white/90 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_15%,hsl(var(--primary)/0.15)_0%,rgba(255,255,255,0.9)_45%,rgba(255,255,255,0.98)_100%)] pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-block px-5 py-1.5 bg-primary/10 rounded-full text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-6 border border-primary/20 backdrop-blur-md">
                Intelligence Protocol
              </span>

              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-black font-bold tracking-tighter mb-6 md:mb-7 italic">The Intelligence Brief</h2>
              <p className="text-black/70 max-w-2xl mx-auto mb-8 md:mb-10 text-base sm:text-lg md:text-lg font-light font-headline tracking-wide">
                Receive a monthly synthesis of our most impactful insights directly to your inbox.
                No noise, just <span className="text-black font-bold italic">signal</span>.
              </p>

              <div className="flex flex-col md:flex-row max-w-2xl mx-auto gap-4 md:gap-3">
                <input
                  className="bg-white border border-black/10 focus:ring-2 focus:ring-primary/40 text-black w-full rounded-full text-base md:text-base px-7 py-4 placeholder:text-black/35 outline-none transition-all"
                  placeholder="Professional Email Address"
                  type="email"
                />
                <button className="bg-primary text-white px-10 py-4 rounded-full hover:scale-[1.03] active:scale-95 transition-all font-bold text-[10px] tracking-[0.18em] uppercase shadow-[0_18px_40px_-18px_hsl(var(--primary)/0.8)] whitespace-nowrap border border-primary/70">
                  Join Protocol
                </button>
              </div>

              <p className="mt-8 text-black/45 text-xs tracking-widest uppercase font-bold italic">
                Sovereignty over documentation. No unauthorized dissemination.
              </p>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
