import { motion } from "framer-motion";
import { Wallet as WalletIcon, TrendingUp as TrendingIcon, BarChart3 as BarChartIcon, ArrowRight } from "lucide-react";
import Magnetic from "./Magnetic";

const services = [
  {
    icon: <WalletIcon className="w-5 h-5" />,
    title: "Working Capital & Liquidity",
    points: [
      "Receivable monetisation",
      "Trade and supply chain structures",
      "Cash flow optimisation",
    ],
  },
  {
    icon: <TrendingIcon className="w-5 h-5" />,
    title: "Structured Growth Capital",
    points: [
      "Expansion and growth funding",
      "Hybrid and structured solutions",
      "Capital aligned to business cycles",
    ],
  },
  {
    icon: <BarChartIcon className="w-5 h-5" />,
    title: "Capital Strategy & Market Readiness",
    points: [
      "Balance sheet structuring",
      "Institutional readiness",
      "Pre-IPO planning",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-[-10%] w-[35vw] h-[35vw] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col lg:flex-row gap-10 justify-between items-end"
        >
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 bg-primary/10 rounded-full border border-primary/20 text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-4 shadow-sm">
              Strategic Portfolio
            </span>
            <h2 className="serif-headline text-4xl md:text-5xl text-black font-bold tracking-tight leading-tight mb-6">
              Dynamic Capital <br/>
              <span className="blue-gradient-text italic font-light">Frameworks.</span>
            </h2>
            <div className="h-px w-20 bg-primary/30"></div>
          </div>
          <p className="text-black/60 text-base md:text-lg leading-relaxed max-w-xs font-medium italic border-l-2 border-primary/10 pl-5 pb-1">
            We design capital around the business — completely customized to fit your unique trajectory.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-neutral-50 p-8 rounded-[2rem] border border-black/5 shadow-md hover:shadow-[0_25px_50px_-15px_rgba(var(--primary),0.1)] transition-all duration-500 flex flex-col"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm border border-black/5 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                
                <h3 className="serif-headline text-xl text-black mb-5 font-bold leading-tight group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <ul className="space-y-3 text-black/60 text-sm leading-relaxed mb-8 flex-grow">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover/item:bg-primary group-hover/item:scale-125 transition-all duration-300"></div>
                      <span className="group-hover/item:text-black font-medium transition-colors">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-5 border-t border-black/5 mt-auto">
                   <Magnetic>
                      <button className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-primary group/btn transition-all">
                        <span>Strategy Details</span>
                        <ArrowRight size={12} className="group-hover/btn:translate-x-1.5 transition-transform" />
                      </button>
                   </Magnetic>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
