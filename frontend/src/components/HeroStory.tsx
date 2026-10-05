import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";
import Magnetic from "./Magnetic";

const wordsLine1 = ["Run", "your", "business"];
const wordsLine2 = ["from", "one", "connected", "operating", "system."];

const HeroStory = () => {
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
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      {/* Background Image with Parallax & Darkening Overlay */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY, scale: bgScale }}>
        <img
          src={heroImage}
          alt="Whiz-Unik Building"
          className="w-full h-[120%] object-cover opacity-[0.16]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
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
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-12 w-full py-16"
        style={{ opacity, y: textY, scale: textScale }}
      >
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-primary font-body text-[11px] md:text-xs tracking-[0.4em] uppercase mb-8 flex items-center gap-3"
        >
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block w-2.5 h-2.5 rounded-full bg-primary/80 shadow-[0_0_12px_rgba(47,99,255,0.6)]"
          />
          WhizUnik Command • Business Operating System
        </motion.p>

        <h1 className="serif-headline text-5xl md:text-7xl lg:text-[5.2rem] xl:text-[6.2rem] font-bold leading-[0.98] tracking-tighter mb-8 max-w-5xl text-black">
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
                custom={i + 3}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className={`inline-block ${word === "connected" || word === "operating" ? "italic font-light text-primary tracking-tight" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="text-black/75 text-base sm:text-lg md:text-xl max-w-3xl mb-8 leading-relaxed font-normal"
        >
          WhizUnik Command connects sales, procurement, inventory, finance and warehouse workflows so every team knows what to do next — while management sees the business as it moves.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
          className="inline-block px-4 py-2 rounded-full bg-primary/5 border border-primary/15 text-primary/90 text-xs sm:text-sm font-medium mb-10"
        >
          Built for growing businesses that have outgrown spreadsheets, disconnected systems and manual follow-ups.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
          className="flex flex-wrap gap-5 items-center"
        >
          <Magnetic>
            <a
              href="/contact"
              className="relative overflow-hidden bg-primary text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:shadow-[0_12px_32px_rgba(47,99,255,0.45)] hover:brightness-105 active:scale-[0.98] transition-all duration-300 flex items-center gap-4 shadow-xl shadow-primary/25 group"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              <span className="relative z-10">Request a Walkthrough</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href="#how-it-works"
              className="bg-white text-black/80 border border-black/10 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-black/5 active:scale-[0.98] transition-all duration-300 flex items-center gap-3 shadow-sm"
            >
              <span>Explore Command</span>
            </a>
          </Magnetic>
        </motion.div>

        {/* Live Ecosystem Pulse Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
          className="mt-12 sm:mt-16 max-w-4xl p-4 sm:p-5 rounded-3xl bg-neutral-50/90 border border-black/10 backdrop-blur-md shadow-sm"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-black/5 text-xs">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="font-bold text-black uppercase tracking-wider text-[11px]">
                One Connected Operating Flow
              </span>
            </div>
            <span className="text-black/50 text-[11px] font-medium">
              6 Workspaces • Zero Disconnects • Real-Time Handoffs
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {[
              { name: "Sales", desc: "Order Logged" },
              { name: "Procurement", desc: "PO Linked" },
              { name: "Checker", desc: "Policy Locked" },
              { name: "Finance", desc: "Actuals Realized" },
              { name: "Warehouse", desc: "GRN Verified" },
              { name: "Management", desc: "Executive View" },
            ].map((node) => (
              <motion.div
                key={node.name}
                whileHover={{ y: -2, scale: 1.02 }}
                className="p-2.5 rounded-xl bg-white border border-black/5 text-center shadow-2xs hover:border-primary/40 hover:shadow-xs transition-all"
              >
                <p className="font-bold text-black text-xs">{node.name}</p>
                <p className="text-[10px] text-primary font-medium mt-0.5">{node.desc}</p>
              </motion.div>
            ))}
          </div>
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
