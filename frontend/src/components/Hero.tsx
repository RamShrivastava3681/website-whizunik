import { useState, useEffect, useRef } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Magnetic from "./Magnetic";

const Hero = () => {
  const [capitalMetric, setCapitalMetric] = useState(0);
  const hasStartedCounter = useRef(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    let rafId = 0;

    const startCounter = () => {
      if (hasStartedCounter.current) return;
      hasStartedCounter.current = true;

      const duration = 2600;
      const targetValue = 300;
      const easeOutExpo = (t: number) => 1 - Math.pow(2, -10 * t);
      const start = performance.now();

      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = progress === 1 ? 1 : easeOutExpo(progress);
        setCapitalMetric(Math.round(targetValue * eased));

        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        }
      };

      rafId = requestAnimationFrame(tick);
    };

    const preloaderDone = (window as Window & { __whizunikPreloaderDone?: boolean }).__whizunikPreloaderDone;
    if (preloaderDone) {
      startCounter();
    } else {
      window.addEventListener("whizunik:preloader-done", startCounter);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("whizunik:preloader-done", startCounter);
    };
  }, []);

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
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden bg-white selection:bg-primary/20 pt-20 md:pt-16 pb-12"
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

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 lg:gap-20 items-center relative z-10">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="serif-headline text-4xl sm:text-5xl md:text-6xl text-black font-bold leading-[1.05] tracking-tighter mb-6 md:mb-8 max-w-4xl">
              Structured Capital <br />
              <span className="italic font-light text-primary/80 tracking-normal inline-block mt-2">Advisory</span> for Growing Businesses
            </h1>

            <div className="h-px w-32 bg-primary/25 mb-8"></div>

            <p className="text-black/60 text-base sm:text-lg md:text-xl max-w-xl mb-10 md:mb-12 leading-relaxed font-medium">
              We work in the space between bank debt and institutional equity, where traditional financing stops being adequate.
            </p>

            <div className="flex items-start sm:items-center pt-2">
              <Magnetic>
                <button className="bg-primary text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-[10px] sm:text-xs font-bold tracking-[0.18em] sm:tracking-[0.2em] uppercase hover:brightness-110 active:scale-95 transition-all duration-300 flex items-center gap-3 sm:gap-4 shadow-xl shadow-primary/25 group">
                  <span>Discuss Your Capital Structure</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </Magnetic>
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
              <p className="text-4xl text-black font-bold tracking-tighter mb-1.5">${capitalMetric}M+</p>
              <p className="text-[12px] font-medium text-black/60 leading-relaxed italic pr-2">
                in Structured Capital Solutions Delivered
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
