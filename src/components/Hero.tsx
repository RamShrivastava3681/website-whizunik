import { useState, useEffect } from "react";
import { ArrowRight, Activity, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Magnetic from "./Magnetic";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / 30;
    const y = (clientY - innerHeight / 2) / 30;
    mouseX.set(x);
    mouseY.set(y);
  };

  const springX = useSpring(mouseX, { stiffness: 100, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 25 });

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-white selection:bg-primary/20 pt-16 pb-12"
    >
      {/* Immersive Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.15, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[15%] -right-[5%] w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.25, 1], x: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-15%] -left-[5%] w-[45vw] h-[45vw] bg-primary/5 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center relative z-10">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2.5 px-5 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-primary font-bold tracking-[0.25em] uppercase text-[9px] mb-10 shadow-sm">
              <Activity size={10} className="animate-pulse" />
              Pioneering Advisory
            </span>
            
            <h1 className="serif-headline text-5xl md:text-7xl lg:text-[76px] text-black font-bold leading-[1.0] tracking-tighter mb-8 max-w-4xl">
              Structured Capital <br/>
              <span className="italic font-light text-primary/80 tracking-normal inline-block mt-2">Advisory</span> for Growth
            </h1>

            <div className="h-px w-32 bg-primary/25 mb-8"></div>

            <p className="text-black/60 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-medium">
              We work with founders and management teams to structure working capital,
              growth capital, and long-term capital strategies — aligned to how their
              businesses actually operate and scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 items-center pt-2">
              <Magnetic>
                <button className="bg-primary text-white px-10 py-5 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:brightness-110 active:scale-95 transition-all duration-300 flex items-center gap-4 shadow-xl shadow-primary/25 group">
                  <span>Initiate Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </Magnetic>
              
              <div className="flex items-center gap-4">
                 <div className="flex -space-x-3">
                    {[1,2,3].map(idx => (
                      <div key={idx} className="w-10 h-10 rounded-full border-2 border-white bg-neutral-100 overflow-hidden shadow-md">
                         <div className="w-full h-full bg-gradient-to-br from-primary/15 to-primary/5" />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-black flex items-center justify-center text-[9px] font-bold text-white shadow-md">
                       +40
                    </div>
                 </div>
                 <div className="h-8 w-px bg-black/10 mx-1"></div>
                 <p className="text-black/40 text-[9px] font-bold uppercase tracking-[0.1em]">Institutional Partners</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          style={{ x: springX, y: springY }}
          className="hidden lg:block lg:col-span-5 relative"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/15 rounded-[3.5rem] blur-[60px] -z-10 animate-pulse" />
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ duration: 1.2, delay: 0.3 }}
               className="relative aspect-[4.5/5.5] bg-neutral-100 rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl group-hover:shadow-[0_60px_120px_-30px_rgba(0,0,0,0.18)] transition-shadow duration-700"
            >
              <img
                alt="Institutional Architecture"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src={heroImage}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-primary/5"></div>
            </motion.div>
            
            {/* Floating Intelligence Card */}
            <motion.div 
              style={{ x: useTransform(springX, x => x * -1.2), y: useTransform(springY, y => y * -1.2) }}
              className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-2xl p-7 rounded-[2rem] shadow-xl border border-black/5 max-w-[240px] z-20 group-hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                   <TrendingUp size={16} />
                </div>
                <p className="text-[9px] font-bold text-black/40 uppercase tracking-[0.15em]">Growth Metric</p>
              </div>
              <p className="text-4xl text-black font-bold tracking-tighter mb-1.5">$500M+</p>
              <p className="text-[12px] font-medium text-black/60 leading-relaxed italic pr-2">
                Capital Advised in 2023 for Middle Market Pioneers.
              </p>
            </motion.div>

            {/* Subtle Orbital */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
