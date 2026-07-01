import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

interface StoryTransitionProps {
  chapter: string;
  subtitle: string;
}

const StoryTransition = ({ chapter, subtitle }: StoryTransitionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  const lineWidth = useTransform(smoothProgress, [0.1, 0.4], ["0%", "100%"]);
  const textOpacity = useTransform(smoothProgress, [0.2, 0.4, 0.7, 0.9], [0, 1, 1, 0]);
  const textY = useTransform(smoothProgress, [0.2, 0.4], [40, 0]);

  return (
    <div ref={ref} className="relative py-20 md:py-28 flex items-center justify-center overflow-hidden">
      {/* Horizontal divider line that draws itself */}
      <motion.div
        style={{ width: lineWidth }}
        className="absolute top-1/2 left-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />

      <motion.div style={{ opacity: textOpacity, y: textY }} className="text-center relative z-10">
        <span className="text-black font-bold font-body text-[10px] tracking-[0.5em] uppercase block mb-2">
          {chapter}
        </span>
        <span className="text-primary font-body text-sm italic">
          {subtitle}
        </span>
      </motion.div>
    </div>
  );
};

export default StoryTransition;
