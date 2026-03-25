import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Magnetic from "./Magnetic";

const CTASection = () => {
  return (
    <section className="py-24 max-w-[1440px] mx-auto px-8 md:px-12 mb-20 relative">
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#0f1012] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] border border-white/5"
      >
        {/* Reality-breaking abstract backgrounds */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"
        />
        
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, -45, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[30%] -left-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-10"
          >
            <Sparkles size={24} />
          </motion.div>
          
          <span className="inline-block px-5 py-1.5 bg-white/5 rounded-full text-white/50 font-bold uppercase tracking-[0.2em] text-[10px] mb-10 border border-white/10 backdrop-blur-md">
            Our Philosophy
          </span>
          
          <h2 className="serif-headline text-5xl md:text-7xl lg:text-8xl text-white mb-10 font-bold tracking-tighter leading-tight max-w-4xl">
            Why <span className="blue-gradient-text italic font-light">Whizunik.</span>
          </h2>
          
          <div className="relative mb-14">
            <p className="text-white text-2xl md:text-4xl lg:text-5xl font-headline italic max-w-4xl leading-tight font-light">
              "Most advisors arrange capital. <br className="hidden md:block"/> 
              We <span className="bg-primary text-white not-italic px-5 py-1.5 rounded-xl inline-block mt-4 md:mt-0 md:ml-3 shadow-xl shadow-primary/30">structure</span> it."
            </p>
          </div>
          
          <p className="text-white/40 text-lg md:text-xl max-w-2xl leading-relaxed mb-16 font-medium italic">
            Our approach is grounded in understanding how businesses actually operate — designing capital solutions that are aligned with cash flows, growth plans, and long-term objectives.
          </p>
          
          <Magnetic>
            <button className="bg-white text-black px-12 py-6 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-4 group overflow-hidden">
              <span>Work With Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </Magnetic>
        </div>
      </motion.div>
    </section>

  );
};

export default CTASection;
