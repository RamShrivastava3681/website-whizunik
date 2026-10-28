import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Coins, 
  TrendingUp, 
  Scale, 
  CheckCircle2, 
  ShieldCheck, 
  Compass, 
  FileSpreadsheet, 
  Building, 
  Maximize2,
  X,
  Sparkles,
  Layers
} from "lucide-react";
import { Link } from "react-router-dom";
import Magnetic from "@/components/Magnetic";
import { useState } from "react";

// 3 Core Advisory Pillars
const coreCoveredAreas = [
  {
    title: "Working Capital & Liquidity",
    desc: "Optimizing the operating cash cycle across receivables, inventory holding, and payables. Structuring specialized non-dilutive credit facilities and supply-chain financing aligned to physical trade rhythms.",
    tag: "Liquidity Optimization",
    icon: Coins,
  },
  {
    title: "Structured Growth Capital",
    desc: "Structuring bespoke junior debt, mezzanine facilities, and asset-backed capital for capacity expansion, acquisitions, and export fulfillment without giving away excessive promoter equity.",
    tag: "Growth Financing",
    icon: TrendingUp,
  },
  {
    title: "Capital Strategy & Market Readiness",
    desc: "Preparing institutional-grade information memorandums, cash-flow models, covenant structuring, and rigorous due diligence dossiers that instill lender confidence.",
    tag: "Lender Confidence",
    icon: Scale,
  },
];

// 5 Focus Steps
const advisoryProcessSteps = [
  {
    num: "01",
    title: "Understand the business and cash flows",
    desc: "Deep analysis of the commercial model, unit economics, historical working capital cycles, and cash conversion friction points.",
  },
  {
    num: "02",
    title: "Identify capital constraints",
    desc: "Pinpointing where operational growth is choked: supplier payment terms, debtor concentrations, or seasonal inventory spikes.",
  },
  {
    num: "03",
    title: "Design the capital structure",
    desc: "Structuring the optimal balance of debt instruments, security collaterals, repayment waterfalls, and liquidity buffers.",
  },
  {
    num: "04",
    title: "Prepare the business and information",
    desc: "Synthesizing verified operating metrics, compliance verifications, and financial projections for institutional credit review.",
  },
  {
    num: "05",
    title: "Execute a defined mandate",
    desc: "Managing transaction documentation, lender interaction, terms negotiation, and closing to achieve capital deployment.",
  },
];

const Services = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-background text-foreground relative overflow-x-hidden selection:bg-primary/20">
      <Header />
      
      {/* Background Subtle Gradient Blobs */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[-10%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px]" 
        />
      </div>

      <main className="pt-28 md:pt-40 pb-20 md:pb-32">
        <section className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12 relative z-10">
          
          {/* Hero Section */}
          <div className="max-w-4xl mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-primary font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-6 shadow-sm">
                Strategic Capital Advisory
              </span>
              <h1 className="serif-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-black font-bold leading-[1.05] tracking-tight mb-8">
                Strategic Capital Advisory{" "}
                <span className="text-primary italic font-light">through execution.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-black/75 leading-relaxed font-normal max-w-3xl mb-8">
                This practice is dedicated to capital advisory, not product features. We work with established growth businesses to solve capital constraints, structure optimal financing, and execute defined mandates.
              </p>
              <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-black/10 inline-flex flex-wrap items-center gap-3 text-xs font-semibold text-black/80">
                <span className="text-primary font-bold uppercase tracking-wider text-[11px]">Advisory Focus:</span>
                <span>Working Capital</span>
                <span>•</span>
                <span>Structured Growth Debt</span>
                <span>•</span>
                <span>Institutional Due Diligence</span>
              </div>
            </motion.div>
          </div>

          {/* THREE CORE COVERAGE AREAS */}
          <div className="mb-24 md:mb-32">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] block mb-2">
                Mandate Areas
              </span>
              <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold text-black">
                Core Advisory Coverage
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {coreCoveredAreas.map((area, idx) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                    className="p-7 sm:p-8 rounded-3xl bg-neutral-50 border border-black/10 hover:border-primary/40 hover:shadow-lg transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                          <Icon size={24} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-black/5 text-primary">
                          {area.tag}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 group-hover:text-primary transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-black/70 text-xs sm:text-sm leading-relaxed">
                        {area.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* 5-STEP FOCUS METHODOLOGY: UNDERSTAND -> IDENTIFY -> DESIGN -> PREPARE -> EXECUTE */}
          <div className="mb-24 md:mb-32 p-8 sm:p-12 rounded-3xl bg-neutral-50 border border-black/10">
            <div className="max-w-3xl mb-12">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] block mb-2">
                Engagement Methodology
              </span>
              <h3 className="serif-headline text-3xl sm:text-4xl font-bold text-black mb-4">
                Five-Step Advisory Mandate
              </h3>
              <p className="text-black/70 text-sm sm:text-base leading-relaxed">
                We follow a rigorous, proven pathway from commercial diagnosis to institutional closing:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {advisoryProcessSteps.map((step, idx) => (
                <div
                  key={step.num}
                  className="p-5 rounded-2xl bg-white border border-black/10 hover:border-primary/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-primary font-bold text-xs tracking-wider block mb-2">
                      Step {step.num}
                    </span>
                    <h4 className="font-bold text-black text-base tracking-tight mb-2 leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-black/65 text-xs leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SINGLE COMMAND SCREENSHOT (AS REQUIRED BY SIMPLE SCREEN MAP):
              "Use one Management Command Centre screenshot only, near the explanation
               that better operating information supports better capital decisions.
               Do not turn this page into a second product page."
          */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center p-8 sm:p-12 rounded-3xl bg-white border border-black/10 mb-24 md:mb-32 shadow-sm">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-primary text-xs font-bold uppercase tracking-widest block">
                Operating Truth & Capital Decisions
              </span>
              <h3 className="serif-headline text-2xl sm:text-4xl font-bold text-black leading-tight">
                Better operating information supports <span className="text-primary italic font-light">better capital decisions.</span>
              </h3>
              <p className="text-black/75 text-sm sm:text-base leading-relaxed">
                When operational and cash flow data is fragmented across disconnected systems, businesses struggle to present a compelling case to institutional lenders.
              </p>
              <p className="text-black/70 text-xs sm:text-sm leading-relaxed">
                By grounding financial strategy in real operational evidence — verified inventory turns, realistic receivables aging, and firm customer orders — we help clients secure capital on terms that genuinely match their business realities.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact?type=advisory"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-md shadow-primary/20"
                >
                  <span>Discuss a Mandate</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative group rounded-3xl p-3 bg-neutral-100 border border-black/10 shadow-md">
                <div className="flex items-center justify-between px-3 py-2 border-b border-black/5 mb-2 text-xs">
                  <span className="font-bold text-black text-[10px] uppercase tracking-wider">
                    Executive Operating View • Management Command Centre
                  </span>
                  <button
                    onClick={() => setSelectedImage("/assets/hub/dashboard-overview.png")}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-black/10 text-primary text-[10px] font-bold hover:bg-primary hover:text-white transition-colors"
                  >
                    <Maximize2 size={11} />
                    <span>View Screen</span>
                  </button>
                </div>
                <div 
                  onClick={() => setSelectedImage("/assets/hub/dashboard-overview.png")}
                  className="relative rounded-2xl overflow-hidden cursor-pointer border border-black/5 bg-white"
                >
                  <img
                    src="/assets/hub/dashboard-overview.png"
                    alt="Management Command Centre in Whizunik"
                    className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-bold drop-shadow">
                      Single view of operational truth powering institutional capital readiness
                    </span>
                  </div>
                </div>
                <div className="p-2.5 text-center text-[11px] text-black/60 font-medium">
                  Actual platform screen: Executive Command Pulse providing verified transaction data for lenders and investors.
                </div>
              </div>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="p-10 sm:p-14 rounded-3xl bg-neutral-50 border border-primary/25 text-center max-w-3xl mx-auto shadow-sm">
            <h4 className="serif-headline text-2xl sm:text-3xl font-bold mb-4 text-black">
              Explore a structured advisory engagement.
            </h4>
            <p className="text-black/65 text-xs sm:text-sm max-w-lg mx-auto mb-8 font-medium">
              Discuss your capital structure, working capital financing, or institutional lender readiness with our senior advisors.
            </p>
            <Magnetic>
              <Link
                to="/contact?type=advisory"
                className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest hover:brightness-110 shadow-lg shadow-primary/20"
              >
                <span>Initiate Advisory Discussion</span>
                <ArrowRight size={14} />
              </Link>
            </Magnetic>
          </div>

        </section>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full max-h-[90vh] bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <div className="flex items-center justify-between px-6 py-4 bg-black/60 border-b border-white/10 text-white text-xs">
                <span className="font-bold tracking-wide">Management Command Centre Inspection</span>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="overflow-auto max-h-[calc(90vh-60px)] p-2 bg-neutral-950 flex items-center justify-center">
                <img
                  src={selectedImage}
                  alt="Expanded Platform Screen"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Services;
