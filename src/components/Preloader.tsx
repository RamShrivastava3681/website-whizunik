import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
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
          className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center"
        >
          <div className="relative text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              <span className="text-primary font-bold tracking-[0.4em] text-[10px] uppercase">
                Technical Telemetry
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-black text-5xl md:text-7xl font-bold tracking-[-0.05em] mb-4 font-headline"
            >
              WHIZUNIK
            </motion.h1>

            <div className="w-64 h-[1px] bg-black/5 mx-auto relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            
            <motion.div 
              className="mt-4 text-black/40 font-mono text-xs tabular-nums"
            >
              System Initialization: {progress}%
            </motion.div>
          </div>

          <div className="absolute bottom-12 left-12">
             <div className="text-black/20 text-[8px] uppercase tracking-widest leading-loose font-bold">
               Access Protocol: Secured<br/>
               Sovereignty of Data: Active<br/>
               © Whizunik 2024
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
