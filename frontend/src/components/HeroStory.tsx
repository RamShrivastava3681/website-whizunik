import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";
import Magnetic from "./Magnetic";

const wordsLine1 = ["Structured", "Capital"];
const wordsLine2 = ["Advisory", "for", "Growing", "Businesses."];

const HeroStory = () => {
  const [capitalMetric, setCapitalMetric] = useState(0);
  const hasStartedCounter = useRef(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothYProgress = useSpring(scrollYProgress, springConfig);

  const bgY = useTransform(smoothYProgress, [0, 1], ["0%", "40%"]);
  const bgScale = useTransform(smoothYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(smoothYProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(smoothYProgress, [0, 0.4], [0, -100]);
  const textScale = useTransform(smoothYProgress, [0, 0.4], [1, 0.95]);

  useEffect(() => {
    let rafId = 0;
    const startCounter = () => {
      if (hasStartedCounter.current) return;
      hasStartedCounter.current = true;
      const duration = 3000;
      const targetValue = 300;
      const easeOutExpo = (t: number) => 1 - Math.pow(2, -10 * t);
      const start = performance.now();
      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = progress === 1 ? 1 : easeOutExpo(progress);
        setCapitalMetric(Math.round(targetValue * eased));
        if (progress < 1) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };

    const preloaderDone = (window as any).__whizunikPreloaderDone;
    if (preloaderDone) {
      setTimeout(startCounter, 400); // Slight delay for smoother feel
    } else {
      window.addEventListener("whizunik:preloader-done", startCounter);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("whizunik:preloader-done", startCounter);
    };
  }, []);

  const wordVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: (i: number) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.5 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1] as any,
      },
    }),
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background Image with Parallax & Darkening Overlay */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY, scale: bgScale }}>
        <img
          src={heroImage}
          alt="Whiz-Unik Building"
          className="w-full h-[120%] object-cover opacity-[0.22]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white" />
      </motion.div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[15%] -right-[5%] w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-15%] -left-[5%] w-[45vw] h-[45vw] bg-[#2f63ff]/5 rounded-full blur-[120px]"
        />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-12 w-full"
        style={{ opacity, y: textY, scale: textScale }}
      >
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-primary font-body text-[10px] md:text-xs tracking-[0.5em] uppercase mb-12 flex items-center gap-4"
        >
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block w-2.5 h-2.5 rounded-full bg-primary/80 shadow-[0_0_12px_rgba(47,99,255,0.6)]"
          />
          Whiz-Unik Capital Advisory
        </motion.p>

        <h1 className="serif-headline text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[0.95] tracking-tighter mb-10 max-w-5xl">
          <div className="flex flex-wrap gap-x-[0.25em] overflow-hidden py-1">
            {wordsLine1.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-[0.25em] overflow-hidden py-1">
            {wordsLine2.map((word, i) => (
              <motion.span
                key={i}
                custom={i + 2}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className={`inline-block ${word === "Advisory" || word === "Growing" ? "italic font-light text-primary/85 tracking-tight" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
          className="text-black/60 text-base sm:text-lg md:text-xl max-w-xl mb-14 leading-relaxed font-medium"
        >
          We work in the space between bank debt and institutional equity, where traditional financing stops being adequate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
          className="flex flex-wrap gap-8 items-center"
        >
          <Magnetic>
            <button className="bg-primary text-white px-8 sm:px-12 py-5 sm:py-6 rounded-full text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase hover:shadow-2xl hover:shadow-primary/40 active:scale-[0.98] transition-all duration-500 flex items-center gap-5 shadow-2xl shadow-primary/20 group overflow-hidden relative">
              <span className="relative z-10 transition-colors duration-500">Discuss Your Capital Structure</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10" />
            </button>
          </Magnetic>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.4, duration: 1 }}
            className="flex items-center gap-5 bg-white/60 backdrop-blur-xl p-4 sm:p-5 rounded-3xl border border-black/[0.03] shadow-lg shadow-black/[0.02]"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
              <TrendingUp size={22} />
            </div>
            <div>
              <p className="text-[24px] text-black font-bold tracking-tighter leading-none mb-1">
                ${capitalMetric}M+
              </p>
              <p className="text-[10px] font-bold text-black/30 uppercase tracking-[0.15em]">
                Delivered
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: useTransform(smoothYProgress, [0, 0.1], [1, 0]) }}
        className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-black/30 font-body text-[9px] md:text-[10px] tracking-[0.4em] uppercase">
          Begin the Journey
        </span>
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-px h-8 md:h-12 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroStory;
