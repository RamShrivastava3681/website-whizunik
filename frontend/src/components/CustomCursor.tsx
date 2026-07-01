import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { IndianRupee, TrendingUp } from "lucide-react";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Precise dot position
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  // Spring for the trailing circle
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const trailX = useSpring(mousePos.x, springConfig);
  const trailY = useSpring(mousePos.y, springConfig);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updatePointerMode = () => {
      const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
      const noHover = window.matchMedia("(hover: none)").matches;
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(hasCoarsePointer || noHover || hasTouch);
    };

    updatePointerMode();
    window.addEventListener("resize", updatePointerMode);

    return () => {
      window.removeEventListener("resize", updatePointerMode);
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);
    const handleClickDown = () => setIsClicking(true);
    const handleClickUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleClickDown);
    window.addEventListener("mouseup", handleClickUp);

    const updateInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, .hover-target"
      );
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    updateInteractiveElements();
    
    // Observer for dynamic elements
    const observer = new MutationObserver(updateInteractiveElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleClickDown);
      window.removeEventListener("mouseup", handleClickUp);
      observer.disconnect();
    };
  }, [isVisible, isTouchDevice]);

  useEffect(() => {
    trailX.set(mousePos.x);
    trailY.set(mousePos.y);
  }, [mousePos, trailX, trailY]);

  if (typeof window === "undefined" || isTouchDevice || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Capital Glyph Core */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 rounded-full bg-primary text-white shadow-xl shadow-primary/40 flex items-center justify-center"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.9 : isHovered ? 1.12 : 1,
        }}
      >
        {isHovered ? <TrendingUp size={15} /> : <IndianRupee size={15} />}
      </motion.div>

      {/* Market Ring */}
      <motion.div
        className="fixed top-0 left-0 w-14 h-14 border rounded-full"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.55 : 1,
          backgroundColor: isHovered ? "rgba(59, 62, 234, 0.08)" : "transparent",
          borderColor: isHovered ? "rgba(59, 62, 234, 0.55)" : "rgba(59, 62, 234, 0.25)",
        }}
      />

      {/* Candlestick Accent */}
      <motion.div
        className="fixed top-0 left-0 h-7 w-[2px] rounded-full bg-primary/70"
        style={{
          x: trailX,
          y: trailY,
          translateX: "16px",
          translateY: "-22px",
        }}
        animate={{ scaleY: isHovered ? 1.25 : 1, opacity: isHovered ? 1 : 0.7 }}
      />
      <motion.div
        className="fixed top-0 left-0 h-5 w-[2px] rounded-full bg-primary/50"
        style={{
          x: trailX,
          y: trailY,
          translateX: "23px",
          translateY: "-17px",
        }}
        animate={{ scaleY: isHovered ? 1.18 : 1, opacity: isHovered ? 0.9 : 0.6 }}
      />
      <motion.div
        className="fixed top-0 left-0 h-4 w-[2px] rounded-full bg-primary/40"
        style={{
          x: trailX,
          y: trailY,
          translateX: "10px",
          translateY: "-14px",
        }}
        animate={{ scaleY: isHovered ? 1.15 : 1, opacity: isHovered ? 0.8 : 0.5 }}
      />

      {/* Ambient Glow */}
      {isHovered && (
        <motion.div
          className="fixed top-0 left-0 w-28 h-28 bg-primary/15 rounded-full blur-2xl"
          style={{
            x: trailX,
            y: trailY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      )}
    </div>
  );
};

export default CustomCursor;
