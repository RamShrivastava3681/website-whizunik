import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[110] h-[2px] origin-left bg-gradient-to-r from-primary via-[#3B82F6] to-[#60A5FA]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
