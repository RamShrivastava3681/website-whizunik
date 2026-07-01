import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Magnetic from "./Magnetic";

const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.5], [0.95, 1]);
  const glowRadius = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/5 to-background" />
        <motion.div
          style={{ opacity: glowRadius }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, hsl(var(--primary) / 0.05) 0%, transparent 60%)",
            }}
          />
        </motion.div>
      </div>

      <motion.div style={{ scale }} className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-black font-body text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-6"
        >
          Chapter VI — Your Next Move
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="serif-headline text-4xl md:text-6xl lg:text-7xl font-bold mb-10 text-black tracking-tight"
        >
          Ready to <span className="blue-gradient-text italic font-light">Structure</span> Your Growth?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-black/60 font-body text-lg md:text-xl leading-relaxed mb-14 max-w-3xl mx-auto font-medium"
        >
          Schedule a confidential consultation with our advisory team. We specialize in architecting capital structures that align with your unique trajectory.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 items-center"
        >
          <Magnetic>
            <Link to="/contact" className="bg-primary text-white px-10 py-5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase shadow-2xl shadow-primary/30 hover:brightness-110 active:scale-95 transition-all duration-300 flex items-center gap-4 group">
              <span>Work With Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </Magnetic>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-black text-lg md:text-xl font-headline italic border-l-2 border-primary/20 pl-6 text-left"
          >
            "Most advisors arrange capital.<br/> We structure it."
          </motion.div>
        </motion.div>

        {/* Closing flourish */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default CTASection;
