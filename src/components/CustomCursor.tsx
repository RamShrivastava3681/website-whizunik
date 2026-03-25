import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Precise dot position
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  // Spring for the trailing circle
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const trailX = useSpring(mousePos.x, springConfig);
  const trailY = useSpring(mousePos.y, springConfig);

  useEffect(() => {
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
  }, [isVisible]);

  useEffect(() => {
    trailX.set(mousePos.x);
    trailY.set(mousePos.y);
  }, [mousePos, trailX, trailY]);

  if (typeof window === "undefined" || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Precise Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full"
        style={{
          x: mousePos.x,
          y: mousePos.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.6 : 1,
        }}
      />
      
      {/* Trailing Circle */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-black/20 rounded-full"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 2 : 1,
          backgroundColor: isHovered ? "rgba(0, 0, 0, 0.03)" : "transparent",
          borderColor: isHovered ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.2)",
        }}
      />

      {/* Subtle Glow Effect for Premium feel */}
      {isHovered && (
        <motion.div
          className="fixed top-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl"
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
