import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, Compass, PenTool, Zap } from "lucide-react";

const steps = [
    {
        num: "01",
        icon: <Search size={20} />,
        title: "Understand",
        desc: "Understand the business and cash flows",
        detail: "We dive deep into your operational metrics and cash conversion cycles to see the business as you do."
    },
    {
        num: "02",
        icon: <Compass size={20} />,
        title: "Identify",
        desc: "Identify capital constraints",
        detail: "Locating the exact structural bottlenecks that are preventing your business from scaling efficiently."
    },
    {
        num: "03",
        icon: <PenTool size={20} />,
        title: "Design",
        desc: "Design the structure",
        detail: "Engineering bespoke capital frameworks that align with your specific operating rhythm."
    },
    {
        num: "04",
        icon: <Zap size={20} />,
        title: "Execute",
        desc: "Execute with capital partners",
        detail: "Deploying the strategy through our curated network of institutional debt and hybrid capital providers."
    },
];

const LifecycleSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="py-20 md:py-32 lg:py-48 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.02),transparent)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14 md:mb-24 lg:mb-32 text-center"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-primary font-body text-[10px] md:text-xs uppercase tracking-[0.35em] font-bold mb-6"
                    >
                        Chapter IV — Operational Protocol
                    </motion.p>
                    <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black tracking-tight">
                        How We <span className="blue-gradient-text italic font-light">Architect Growth.</span>
                    </h2>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Animated Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/5 -translate-x-1/2 hidden md:block">
                        <motion.div
                            style={{ scaleY: pathLength }}
                            className="absolute top-0 left-0 w-full h-full bg-primary origin-top shadow-[0_0_15px_rgba(var(--primary),0.3)]"
                        />
                    </div>

                    <div className="space-y-12 md:space-y-20 lg:space-y-24">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6 }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-20 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Step Content */}
                                <div className={`flex-1 text-center ${i % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    <span className="font-headline text-5xl md:text-6xl text-black/5 font-bold mb-2 block tabular-nums">
                                        {step.num}
                                    </span>
                                    <h4 className="text-xl md:text-2xl font-headline text-black mb-3 md:mb-4 font-bold">{step.title}</h4>
                                    <p className="text-black/80 text-base md:text-lg font-medium mb-3">{step.desc}</p>
                                    <p className="text-black/40 text-xs leading-relaxed max-w-xs mx-auto md:mx-0 px-3 md:px-0">
                                        {step.detail}
                                    </p>
                                </div>

                                {/* Central Icon Indicator */}
                                <div className="relative z-20">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="w-16 h-16 rounded-[1.5rem] bg-white shadow-xl border border-black/5 flex items-center justify-center text-primary relative overflow-hidden group"
                                    >
                                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary transition-colors duration-500" />
                                        <div className="relative z-10 group-hover:text-white transition-colors">
                                            {step.icon}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Spacer for reverse layout */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LifecycleSection;

