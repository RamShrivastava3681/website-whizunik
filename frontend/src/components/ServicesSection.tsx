import { motion, useScroll, useTransform } from "framer-motion";
import { Wallet as WalletIcon, TrendingUp as TrendingIcon, BarChart3 as BarChartIcon, ArrowRight } from "lucide-react";
import Magnetic from "./Magnetic";
import { Link } from "react-router-dom";
import { useRef } from "react";

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
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bloomY = useTransform(scrollYProgress, [0, 1], [80, -60]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white relative overflow-hidden">
      <motion.div
        style={{ y: bloomY }}
        className="absolute -top-24 -left-20 w-[34rem] h-[34rem] bg-primary/10 rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 80]) }}
        className="absolute bottom-[-25%] right-[-10%] w-[32rem] h-[32rem] bg-primary/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 relative z-10">
        <div
          className="mb-12 md:mb-16 flex flex-col lg:flex-row gap-6 md:gap-10 justify-between items-start lg:items-end"
        >
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-primary font-body text-[10px] md:text-xs uppercase tracking-[0.35em] font-bold mb-6"
            >
              Chapter III — The Solution
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="serif-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-bold tracking-tight leading-tight mb-8"
            >
              Capital, <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="blue-gradient-text italic font-light inline-block"
              >
                Structured with Precision.
              </motion.span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="h-px w-20 bg-primary/35 origin-left"
            ></motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-black/60 text-sm sm:text-base md:text-lg leading-relaxed max-w-sm font-medium italic border-l-2 border-primary/15 pl-4 md:pl-5 pb-1"
          >
            We design capital around the business — completely customized to fit your unique trajectory.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 36, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -12, scale: 1.04, rotateX: 2.5, rotateY: -2.5 }}
              transition={{ delay: index * 0.16, duration: 0.62, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ transformPerspective: 1000 }}
              className="group relative p-8 rounded-[2rem] border border-primary/20 bg-white/70 backdrop-blur-xl shadow-[0_20px_52px_-28px_hsl(var(--primary)/0.28)] hover:shadow-[0_32px_70px_-26px_hsl(var(--primary)/0.4)] transition-all duration-500 flex flex-col"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(125deg,hsl(var(--primary)/0.12)_0%,rgba(255,255,255,0.45)_42%,hsl(var(--primary)/0.08)_100%)] opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col h-full">
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2.4 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 shadow-[0_0_20px_hsl(var(--primary)/0.25)] border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500"
                >
                  {service.icon}
                </motion.div>

                <h3 className="serif-headline text-xl text-black mb-5 font-bold leading-tight group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <div className="h-px w-0 bg-primary/60 mb-5 group-hover:w-16 transition-all duration-500" />

                <ul className="space-y-3 text-black/60 text-sm leading-relaxed mb-8 flex-grow">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover/item:bg-primary group-hover/item:scale-125 transition-all duration-300"></div>
                      <span className="group-hover/item:text-black font-medium transition-colors">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-5 border-t border-primary/15 mt-auto">
                  <Magnetic>
                    <Link to="/services" className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-primary group/btn transition-all opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 duration-300">
                      <span>Explore Strategy</span>
                      <ArrowRight size={12} className="group-hover/btn:translate-x-1.5 transition-transform" />
                    </Link>
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
