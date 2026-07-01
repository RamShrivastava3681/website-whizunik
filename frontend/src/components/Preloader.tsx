import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling
    if ((window as any).lenis) (window as any).lenis.stop();
    
    const timer = setTimeout(() => {
      (window as Window & { __whizunikPreloaderDone?: boolean }).__whizunikPreloaderDone = true;
      window.dispatchEvent(new Event("whizunik:preloader-done"));
      setLoading(false);
      
      // Unlock scrolling after exit animation starts
      if ((window as any).lenis) (window as any).lenis.start();
    }, 2500);
    
    return () => {
      clearTimeout(timer);
      if ((window as any).lenis) (window as any).lenis.start();
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[99999] overflow-hidden bg-[radial-gradient(circle_at_top,_#f6f7ff_0%,_#e8eefc_45%,_#d6e2f6_100%)] flex flex-col items-center justify-center"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(55,95,215,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(55,95,215,0.08)_1px,transparent_1px)] bg-[size:38px_38px] opacity-35" />

          <motion.div
            className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-[#4a78ff]/20 blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, 18, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -bottom-24 -right-12 h-80 w-80 rounded-full bg-[#00a7b5]/20 blur-3xl"
            animate={{ x: [0, -24, 0], y: [0, -16, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="pointer-events-none absolute h-[520px] w-[520px] rounded-full border border-[#3b67f3]/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#2f63ff] shadow-[0_0_18px_rgba(47,99,255,0.95)]" />
            <div className="absolute bottom-10 left-10 h-2 w-2 rounded-full bg-[#00adc1] shadow-[0_0_14px_rgba(0,173,193,0.9)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative rounded-2xl border border-white/70 bg-white/55 px-8 py-8 text-center shadow-[0_24px_70px_-30px_rgba(25,54,130,0.45)] backdrop-blur-md md:px-14 md:py-12"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(120deg,rgba(255,255,255,0.22),rgba(255,255,255,0.05))]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#2f63ff]/60 to-transparent" />
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative text-[#102249] text-3xl md:text-5xl font-bold tracking-[-0.03em] font-headline [text-shadow:0_8px_26px_rgba(20,58,130,0.18)]"
            >
              <span className="bg-gradient-to-b from-[#2460ff] via-[#1a56ff] to-[#0f43d8] bg-clip-text text-transparent [text-shadow:0_0_24px_rgba(34,92,255,0.45)]">
                Whiz-Unik
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative mt-3 text-[#1f355f]/85 text-sm md:text-base tracking-[0.16em] uppercase"
            >
              Founded in 2023
            </motion.p>

            <motion.div
              className="absolute -bottom-1 left-1/2 h-[2px] w-28 -translate-x-1/2 rounded-full bg-[#3f66d4]/70"
              animate={{ width: [112, 172, 112], opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
