import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, Target, Network, Handshake, CheckCircle2 } from "lucide-react";
import Magnetic from "@/components/Magnetic";

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

      <main className="pt-48 pb-32">
        <section className="max-w-[1440px] mx-auto px-8 md:px-12 relative z-10">
          {/* Header Section */}
          <div className="mb-32">
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
              <h1 className="serif-headline text-7xl md:text-8xl text-black font-bold leading-none tracking-tighter mb-10">
                Institutional <br/>
                <span className="blue-gradient-text italic font-light">Precision.</span>
              </h1>
              <div className="h-px w-32 bg-primary/40 mb-10"></div>
              <p className="text-xl md:text-2xl text-black/60 leading-relaxed font-medium">
                We work across three layers of capital, depending on where the business is and what it needs.
              </p>
            </motion.div>
          </div>

          {/* Solutions Cards */}
          <div className="space-y-32 mb-48">
            {capitalLayers.map((layer, index) => (
              <motion.div
                key={layer.num}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                  <div className="lg:col-span-1">
                    <span className="font-headline text-7xl text-black/5 font-bold tabular-nums">
                      {layer.num}
                    </span>
                  </div>
                  
                  <div className="lg:col-span-6">
                    <div className="flex items-center gap-4 mb-8">
                       <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                          {layer.icon}
                       </div>
                       <h2 className="font-headline text-4xl md:text-5xl text-black font-bold leading-tight">
                         {layer.title}
                       </h2>
                    </div>
                    
                    <div className="space-y-8 pl-1">
                      <p className="text-xl text-black/80 font-medium leading-relaxed italic border-l-2 border-primary/20 pl-8">
                        {layer.intro}
                      </p>
                      <p className="text-lg text-black/60 leading-relaxed">
                        {layer.detail}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="bg-white/40 backdrop-blur-xl border border-black/5 p-10 rounded-[2.5rem] shadow-xl group-hover:shadow-primary/5 transition-all duration-700">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8 ml-1">Key Parameters</h4>
                      <ul className="space-y-6">
                        {layer.points.map((point) => (
                          <li key={point} className="flex items-center gap-4 group/item">
                            <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover/item:bg-primary transition-colors">
                               <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover/item:bg-white transition-colors" />
                            </div>
                            <span className="text-black/70 font-bold tracking-tight text-lg group-hover/item:text-primary transition-colors">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-12 pt-10 border-t border-black/5">
                         <div className="flex items-center justify-between group/more cursor-pointer">
                            <span className="text-xs font-bold uppercase tracking-widest text-black/40 group-hover/more:text-primary transition-colors">Strategic Deployment</span>
                            <ArrowUpRight size={20} className="text-black/20 group-hover/more:text-primary transition-transform group-hover/more:translate-x-1 group-hover/more:-translate-y-1" />
                         </div>
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
            className="bg-[#1a1b1e] text-white rounded-[4rem] p-12 md:p-24 shadow-2xl overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[20vw] h-[20vw] bg-white/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-20">
              <div className="lg:col-span-5">
                <span className="inline-block text-primary font-bold tracking-[0.3em] text-[10px] uppercase mb-8 px-4 py-2 border border-primary/30 rounded-full">
                  Delivery Model
                </span>
                <h2 className="font-headline text-5xl md:text-7xl text-white font-bold tracking-tighter leading-none mb-8">How Engagement <br/> <span className="text-primary italic font-light">Works.</span></h2>
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
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover/link:border-primary group-hover/link:bg-primary transition-all duration-500">
                          <CheckCircle2 size={20} className="text-primary group-hover/link:text-white" />
                        </div>
                        {index !== engagementItems.length - 1 && (
                          <div className="w-px h-12 bg-white/10 mt-4 group-hover/link:bg-primary/40 transition-colors" />
                        )}
                      </div>
                      <div className="pt-2">
                        <p className="text-xl md:text-2xl font-headline text-white/80 group-hover/link:text-white leading-relaxed font-bold transition-colors">
                          {item}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  
                  <div className="pt-12">
                    <Magnetic>
                       <a className="inline-flex items-center gap-6 bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all duration-500 shadow-xl group" href="/contact">
                         <span>Initiate Consultation</span>
                         <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
