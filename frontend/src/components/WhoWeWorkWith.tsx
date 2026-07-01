import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Building2, Globe2, Rocket } from "lucide-react";

const clients = [
  {
    icon: <Building2 className="w-5 h-5 md:w-6 md:h-6" />,
    title: "₹50–500 Cr businesses",
    position: "top-right",
    delay: 0.1,
  },
  {
    icon: <Globe2 className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Exporters, manufacturers, trading companies",
    position: "mid-right",
    delay: 0.3,
  },
  {
    icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Promoter-led growth businesses",
    position: "bottom-right",
    delay: 0.5,
  },
];

const WhoWeWorkWith = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Connection Lines Path Data
  // This is a simplified representation of the branching paths
  // In a real responsive layout, these coordinates might need careful tuning
  const paths = [
    "M 100 250 C 200 250, 300 100, 450 100", // to top card
    "M 100 250 C 250 250, 350 250, 450 250", // to mid card
    "M 100 250 C 200 250, 300 400, 450 400", // to bottom card
  ];

  return (
    <section 
      ref={containerRef}
      className="relative py-24 md:py-32 lg:py-48 bg-gradient-to-b from-[#f8f9fb] to-[#f0f4fa] overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-16 lg:gap-24">
          
          {/* Left Side: Heading */}
          <div className="w-full lg:w-[40%] flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-start gap-4 mb-8"
            >
              <div className="w-px h-24 bg-gradient-to-b from-primary/80 to-transparent self-stretch" />
              <div>
                <p className="text-black font-bold font-body text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4">
                  Chapter V — Partner Profile
                </p>
                <h2 className="serif-headline text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.9] tracking-tighter text-black">
                  Who We <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2463ff] via-[#7c3aed] to-[#db2777] italic font-light inline-block mt-2">Work With.</span>
                </h2>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-black/50 text-base md:text-lg max-w-sm leading-relaxed font-medium pl-5"
            >
              Partnering with established enterprises and visionaries ready for Institutional capital excellence.
            </motion.p>
          </div>

          {/* Right Side: Cards & SVG Connections */}
          <div className="relative w-full lg:w-[60%] h-[500px] md:h-[600px] flex items-center justify-center lg:justify-end">
            
            {/* Connection Lines (Desktop Only for precision) */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
              viewBox="0 0 600 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.6" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {paths.map((d, i) => (
                <g key={i}>
                  {/* Subtle Background Path */}
                  <motion.path
                    d={d}
                    stroke="rgba(0,0,0,0.03)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1.5, delay: i * 0.2, ease: "easeInOut" }}
                  />
                  {/* Animated Foreground Path */}
                  <motion.path
                    d={d}
                    stroke="url(#lineGradient)"
                    strokeWidth="1.5"
                    strokeDasharray="10 20"
                    initial={{ pathLength: 0, opacity: 0.2 }}
                    animate={isInView ? { 
                      pathLength: [0, 1],
                      opacity: hoveredCard === i ? 1 : 0.4,
                      strokeWidth: hoveredCard === i ? 2.5 : 1.5
                    } : {}}
                    transition={{ 
                      pathLength: { duration: 2, delay: i * 0.2 },
                      opacity: { duration: 0.3 },
                      strokeWidth: { duration: 0.3 }
                    }}
                    style={{ filter: hoveredCard === i ? "url(#glow)" : "none" }}
                  />
                  {/* Moving Gradient Dash Effect */}
                  <motion.path
                    d={d}
                    stroke="white"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                    strokeDasharray="4 40"
                    animate={{ strokeDashoffset: [-50, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                </g>
              ))}
            </svg>

            {/* Cards */}
            <div className="relative w-full h-full">
              {clients.map((client, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, x: 20 }}
                  animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.6 + i * 0.15,
                    ease: [0.21, 0.45, 0.32, 0.9]
                  }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`absolute group cursor-default
                    ${i === 0 ? "top-[5%] right-[5%] md:right-[15%]" : ""}
                    ${i === 1 ? "top-[40%] right-[-2%] md:right-[0%]" : ""}
                    ${i === 2 ? "top-[75%] right-[10%] md:right-[20%]" : ""}
                    w-[280px] md:w-[320px] lg:w-[360px]
                  `}
                >
                  <div className="relative p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/40 bg-white/40 backdrop-blur-2xl shadow-[0_15px_35px_-15px_rgba(0,0,0,0.08)] group-hover:shadow-[0_25px_50px_-20px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden">
                    {/* Background Subtle Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative z-10 flex items-center gap-5">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-inner flex items-center justify-center text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                        {client.icon}
                      </div>
                      <h4 className="text-base md:text-[17px] font-sans font-semibold text-[#1a1b1e] leading-snug tracking-tight group-hover:text-primary transition-all duration-300">
                        {client.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
