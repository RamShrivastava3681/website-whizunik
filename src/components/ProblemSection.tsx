import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { AlertTriangle, Landmark, ShieldCheck } from "lucide-react";

const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className={className}
    >
      <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
};

const ProblemSection = () => {
  return (
    <section className="py-48 bg-white relative overflow-hidden">
      {/* Immersive depth elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-primary/10 rounded-full border border-primary/20 mb-12 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Strategic Analysis</span>
            </div>
            
            <h2 className="serif-headline text-6xl md:text-8xl font-bold text-black mb-10 leading-[1.05] tracking-tight">
              The <span className="blue-gradient-text italic font-light">Structural</span> Gap.
            </h2>
            
            <div className="space-y-10 pl-2">
               <p className="text-black/80 text-2xl font-bold leading-relaxed max-w-xl italic">
                 "Most businesses don’t have a capital problem. They have a capital structure problem."
               </p>
               
               <div className="h-px w-24 bg-primary/40"></div>
               
               <p className="text-black/60 text-lg md:text-xl leading-relaxed max-w-lg font-medium">
                 Between traditional banking and private equity, many strong businesses are left trying to fit into structures that don’t reflect how they actually operate. We work in that gap.
               </p>
            </div>
          </motion.div>

          <div className="lg:col-span-6 space-y-12">
            <TiltCard className="relative bg-neutral-50 p-12 rounded-[3.5rem] border border-black/5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] group overflow-hidden">
               <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
               <div className="flex gap-10 items-start relative z-10">
                  <div className="w-16 h-16 shrink-0 rounded-[1.5rem] bg-white shadow-xl flex items-center justify-center text-red-500 border border-black/5 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                     <AlertTriangle size={32} />
                  </div>
                  <div>
                    <h4 className="font-headline text-3xl text-black mb-6 font-bold">Banks require collateral.</h4>
                    <p className="text-black/60 text-lg leading-relaxed font-medium">
                      Capital access often depends on asset-heavy structures that many growth businesses don’t fit.
                    </p>
                  </div>
               </div>
            </TiltCard>

            <TiltCard className="relative bg-neutral-50 p-12 rounded-[3.5rem] border border-black/5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] group overflow-hidden lg:ml-12">
               <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
               <div className="flex gap-10 items-start relative z-10">
                  <div className="w-16 h-16 shrink-0 rounded-[1.5rem] bg-white shadow-xl flex items-center justify-center text-primary border border-black/5 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                     <Landmark size={32} />
                  </div>
                  <div>
                    <h4 className="font-headline text-3xl text-black mb-6 font-bold">Private equity requires scale.</h4>
                    <p className="text-black/60 text-lg leading-relaxed font-medium">
                      Between debt and equity, strong businesses are left in a gap where structures don’t match operations.
                    </p>
                  </div>
               </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
