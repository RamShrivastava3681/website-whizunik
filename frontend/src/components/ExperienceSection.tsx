import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Briefcase, TrendingUp, Factory } from 'lucide-react';

const ExperienceSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] as any }
    },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: '80%', // Slightly less than full height for elegance
      transition: { duration: 1.5, ease: "easeInOut" as any, delay: 0.8 }
    },
  };

  const experiences = [
    {
      icon: <Briefcase className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />,
      title: "25+ Years in Structured Finance"
    },
    {
      icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />,
      title: "150+ Transactions Advised"
    },
    {
      icon: <Factory className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />,
      title: "Across Key Industries"
    }
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-background"
    >
      {/* Subtle branding elements to match site style */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] -left-[5%] w-[35vw] h-[35vw] bg-primary/5 rounded-full blur-[80px]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary font-body text-[10px] md:text-xs uppercase tracking-[0.35em] font-bold mb-6"
          >
            Chapter II — Institutional Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="serif-headline text-4xl md:text-6xl text-black mb-4 tracking-tight font-bold"
          >
            Institutional <span className="italic font-light text-primary/80">Expertise</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-px w-20 bg-primary/35 mx-auto mb-6 origin-center"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-black/60 font-sans max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium"
          >
            Decades of strategic market navigation and structured finance excellence.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 relative"
        >
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              <motion.div
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="relative p-10 flex flex-col items-center text-center transition-all duration-500 cursor-default"
              >
                {/* Subtle glass effect on hover to match site style */}
                <div className="absolute inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(243, 244, 246, 0.4) 100%)',
                    border: '1px solid rgba(var(--primary), 0.1)',
                    boxShadow: '0 20px 40px -20px rgba(0, 0, 0, 0.05)',
                  }}
                />

                <motion.div
                  className="mb-6 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500"
                >
                  {React.cloneElement(exp.icon as React.ReactElement, { className: "w-6 h-6" })}
                </motion.div>

                <h3 className="serif-headline text-lg md:text-xl font-bold text-black mb-0 tracking-tight group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
              </motion.div>

              {/* Vertical Divider for Desktop - Subtle Brand Accent */}
              {index < 2 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-2/3 pointer-events-none">
                  <motion.div
                    variants={lineVariants}
                    className="w-full bg-primary/20"
                  />
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .bg-background { background-color: #f9f9fb; }
      `}} />
    </section>
  );
};

export default ExperienceSection;
