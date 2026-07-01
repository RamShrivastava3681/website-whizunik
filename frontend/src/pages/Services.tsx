import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Target, Network, Handshake, CheckCircle2 } from "lucide-react";
import Magnetic from "@/components/Magnetic";
import { Link } from "react-router-dom";

const capitalLayers = [
  {
    num: "01",
    icon: <Target size={24} className="text-primary" />,
    title: "Working Capital & Liquidity",
    intro:
      "We help businesses unlock liquidity from their existing operations by structuring working capital solutions aligned to their cash conversion cycles.",
    detail:
      "This typically involves receivable monetisation, supply chain financing, and cross-border structures designed around how the business actually operates — rather than forcing it into standard banking formats.",
    points: [
      "Receivable monetisation",
      "Supply chain and trade finance structures",
      "Cash flow cycle optimisation",
      "Cross-border financing frameworks",
    ],
  },
  {
    num: "02",
    icon: <Network size={24} className="text-primary" />,
    title: "Structured Growth Capital",
    intro:
      "We work with businesses looking to expand but constrained by traditional debt structures, designing capital solutions that balance growth with flexibility.",
    detail:
      "This includes structured debt, hybrid capital, and performance-linked structures that allow businesses to scale without being restricted by rigid repayment or collateral frameworks.",
    points: [
      "Growth and expansion funding",
      "Structured debt and hybrid capital",
      "Performance-linked structures",
      "Capital aligned to operating cycles",
    ],
  },
  {
    num: "03",
    icon: <Handshake size={24} className="text-primary" />,
    title: "Capital Strategy & Market Readiness",
    intro:
      "For businesses approaching the next stage of growth, we work on longer-term capital planning and balance sheet structuring.",
    detail:
      "The focus is on preparing companies for institutional capital — whether through private investors, structured credit, or eventual capital market access — by ensuring that both financials and structure are aligned for scale.",
    points: [
      "Balance sheet structuring",
      "Capital allocation strategy",
      "Investor readiness",
      "Pre-IPO positioning",
    ],
  },
];

const engagementItems = [
  "Advisory-led approach focused on structuring",
  "Execution support through a curated network of capital partners",
  "Combination of fixed advisory and success-based engagement",
];

const Services = () => {
  return (
    <div className="bg-background text-foreground relative overflow-x-hidden selection:bg-primary/20 transition-colors duration-500">
      <Header />
      
      {/* Background Decorative Flow */}
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

      <main className="pt-28 md:pt-40 pb-16 md:pb-28">
        <section className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12 relative z-10">
          {/* Header Section */}
          <div className="mb-14 md:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl"
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-primary font-bold tracking-[0.3em] text-[10px] uppercase mb-8 shadow-sm">
                Frameworks & Solutions
              </span>
              <h1 className="serif-headline text-4xl sm:text-5xl md:text-7xl text-black font-bold leading-none tracking-tighter mb-8 md:mb-10">
                Institutional <br/>
                <span className="blue-gradient-text italic font-light">Precision.</span>
              </h1>
              <div className="h-px w-32 bg-primary/40 mb-10"></div>
              <p className="text-base sm:text-lg md:text-xl text-black/60 leading-relaxed font-medium">
                We work in the space where traditional financing stops being adequate.
              </p>
            </motion.div>
          </div>

          {/* Solutions Cards */}
          <div className="space-y-14 md:space-y-24 lg:space-y-32 mb-16 md:mb-48">
            {capitalLayers.map((layer, index) => (
              <motion.div
                key={layer.num}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
                  <div className="lg:col-span-1">
                    <span className="font-headline text-5xl md:text-6xl text-black/5 font-bold tabular-nums">
                      {layer.num}
                    </span>
                  </div>
                  
                  <div className="lg:col-span-6">
                    <div className="flex items-center gap-4 mb-8">
                       <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                          {layer.icon}
                       </div>
                       <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-black font-bold leading-tight">
                         {layer.title}
                       </h2>
                    </div>
                    
                    <div className="space-y-5 md:space-y-8 pl-1">
                      <p className="text-base sm:text-lg md:text-lg text-black/80 font-medium leading-relaxed italic border-l-2 border-primary/20 pl-5 md:pl-8">
                        {layer.intro}
                      </p>
                      <p className="text-base md:text-lg text-black/60 leading-relaxed">
                        {layer.detail}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="bg-white/40 backdrop-blur-xl border border-black/5 p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[2.5rem] shadow-xl group-hover:shadow-primary/5 transition-all duration-700">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8 ml-1">Key Parameters</h4>
                      <ul className="space-y-6">
                        {layer.points.map((point) => (
                          <li key={point} className="flex items-center gap-4 group/item">
                            <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover/item:bg-primary transition-colors">
                               <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover/item:bg-white transition-colors" />
                            </div>
                            <span className="text-black/70 font-bold tracking-tight text-base md:text-lg group-hover/item:text-primary transition-colors">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-12 pt-10 border-t border-black/5">
                         <Link to="/insights" className="flex items-center justify-between group/more cursor-pointer" aria-label="Go to Insights">
                            <span className="text-xs font-bold uppercase tracking-widest text-black/40 group-hover/more:text-primary transition-colors">Strategic Deployment</span>
                            <ArrowUpRight size={20} className="text-black/20 group-hover/more:text-primary transition-transform group-hover/more:translate-x-1 group-hover/more:-translate-y-1" />
                         </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Delivery Model & Engagement */}
          <motion.section 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[2rem] md:rounded-[3.2rem] p-6 sm:p-8 md:p-16 lg:p-20 shadow-[0_30px_80px_-35px_rgba(0,0,0,0.45)] overflow-hidden relative border border-black/10 bg-white/90 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,hsl(var(--primary)/0.15)_0%,rgba(255,255,255,0.85)_45%,rgba(255,255,255,0.96)_100%)] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[42vw] h-[42vw] bg-primary/10 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute bottom-[-18%] left-[-12%] w-[24vw] h-[24vw] bg-primary/10 rounded-full blur-[90px] pointer-events-none" />
            <motion.div
              animate={{ scale: [1, 1.15, 1], rotate: [0, 30, 0], x: [0, 30, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[20%] -right-[8%] w-[420px] h-[420px] bg-primary/10 rounded-full blur-[110px] pointer-events-none"
            />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 lg:gap-16">
              <div className="lg:col-span-5">
                <span className="inline-block text-primary font-bold tracking-[0.25em] text-[10px] uppercase mb-7 px-4 py-2 border border-primary/30 rounded-full bg-white/70 backdrop-blur-sm">
                  Delivery Model
                </span>
                <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-black font-bold tracking-tighter leading-none mb-7">How Engagement <br/> <span className="blue-gradient-text italic font-light">Works.</span></h2>

                <p className="text-black/60 text-base md:text-lg leading-relaxed font-medium italic max-w-xl">
                  Our approach is grounded in understanding how businesses actually operate, then shaping execution pathways aligned with cash flow realities and long-term capital outcomes.
                </p>
              </div>
              
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="space-y-8">
                  {engagementItems.map((item, index) => (
                    <motion.div 
                      key={item} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-start gap-8 group/link"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center border border-primary/20 group-hover/link:border-primary group-hover/link:bg-primary transition-all duration-500">
                          <CheckCircle2 size={20} className="text-primary group-hover/link:text-white" />
                        </div>
                        {index !== engagementItems.length - 1 && (
                          <div className="w-px h-12 bg-black/10 mt-4 group-hover/link:bg-primary/40 transition-colors" />
                        )}
                      </div>
                      <div className="pt-2">
                        <p className="text-lg md:text-xl font-headline text-black/80 group-hover/link:text-black leading-relaxed font-bold transition-colors">
                          {item}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  
                  <div className="pt-12">
                    <Magnetic>
                       <a className="inline-flex items-center gap-4 bg-primary text-white px-10 md:px-12 py-5 rounded-full font-bold uppercase tracking-[0.18em] text-[10px] hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-[0_18px_40px_-18px_hsl(var(--primary)/0.8)] group border border-primary/70" href="/contact">
                         <span>Initiate Consultation</span>
                         <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                       </a>
                    </Magnetic>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
