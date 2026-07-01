import Header from "@/components/Header";
import Footer from "@/components/Footer";
import websitePic from "@/assets/about-hero.png";
import { ExternalLink, Quote } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ComplexityToOrder from "@/components/ComplexityToOrder";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-white text-black overflow-hidden">
      <Header />

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30vw] h-[30vw] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <main className="relative pt-20 md:pt-24 pb-12 z-10">
        {/* Section 1: Hero */}
        <section className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12 mb-8 md:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-8"
            >
              <span className="inline-block px-4 py-1 bg-primary/10 rounded-full border border-primary/20 text-primary font-bold tracking-[0.2em] text-[10px] uppercase mb-4 shadow-sm">
                About
              </span>
              <h1 className="serif-headline text-4xl sm:text-5xl md:text-6xl text-black font-bold leading-[1.05] tracking-tight">
                Architects of <br />
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 1 }}
                  className="italic font-light text-primary/80"
                >
                  Intellectual
                </motion.span>{" "}
                Capital.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-4 md:pt-2"
            >
              <p className="text-black/60 text-sm sm:text-base md:text-base leading-relaxed font-medium border-l border-black/10 pl-5 md:pl-8">
                Whiz-Unik was founded on a singular premise: that true institutional excellence is born from the intersection of rigorous data and creative intuition.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Image & Mission - Redesigned for "Cooler" High-End Aesthetic */}
        <section className="mb-12 md:mb-24 relative">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-20 items-center">
            
            {/* Visual Column — 55 % */}
            <motion.div
              style={{ y: imgY }}
              className="relative lg:col-span-7 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-primary/[0.04] blur-[100px] rounded-full pointer-events-none" />
              <div className="relative z-10 w-full">
                <ComplexityToOrder />
              </div>
            </motion.div>

            {/* Content Column — 45 % */}
            <div className="lg:col-span-5 space-y-6 md:space-y-10">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 mb-6"
                >
                  <div className="h-px w-12 bg-primary" />
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-primary font-bold">Mission Statement</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="serif-headline text-2xl md:text-4xl lg:text-5xl leading-[1.15] text-black font-medium italic mb-8"
                >
                  To help growth stage businesses structure capital with <span className="text-primary not-italic font-bold">clarity</span>, precision, and intent.
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Card 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="group p-6 rounded-2xl bg-white border border-black/[0.03] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.1)] transition-all duration-500"
                  >
                    <div className="h-1 w-10 bg-primary/20 mb-4 group-hover:w-full transition-all duration-700" />
                    <p className="text-black/80 font-medium text-sm md:text-base leading-relaxed">
                      Capital should <span className="text-primary italic">adapt</span> to the business, not the other way around.
                    </p>
                  </motion.div>

                  {/* Card 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="group p-6 rounded-2xl bg-neutral-900 border border-white/5 shadow-2xl hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="h-1 w-10 bg-primary/40 mb-4 group-hover:w-full transition-all duration-700" />
                    <p className="text-white/80 font-light text-sm md:text-base leading-relaxed italic">
                      "We don't approach capital as a transaction, but as a structure that needs to fit the business."
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 pt-8 border-t border-black/5 flex items-start gap-6"
                >
                  <div className="text-primary font-serif text-4xl opacity-30 select-none">"</div>
                  <p className="text-black/60 text-base md:text-lg leading-relaxed font-light italic max-w-xl">
                    Our work is grounded in understanding cash flows, constraints, and growth - and designing solutions that align with them.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Leadership */}
        <section className="bg-neutral-50 backdrop-blur-sm py-16 md:py-40 mb-16 md:mb-48 border-y border-black/5 relative">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5 order-2 lg:order-1"
              >
                <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] block mb-6 px-4 py-1.5 bg-primary/10 w-fit rounded-full border border-primary/20 shadow-inner">
                  Leadership
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-black mb-1 font-bold tracking-tight">Sankalp Kumar</h2>
                <p className="text-primary text-lg md:text-xl font-bold mb-4 md:mb-5 italic">Founder, Whiz-Unik</p>

                <div className="space-y-3 md:space-y-4 text-black/60 text-base md:text-lg leading-relaxed border-l border-primary/20 pl-5 md:pl-8">
                  <p>
                    Sankalp works closely with growth-stage businesses on structuring capital across working capital, trade finance, and growth funding.
                  </p>
                  <p>
                    His work is rooted in understanding how businesses actually operate - from cash flow cycles and receivables to capital constraints and expansion plans - before designing financing structures around them.
                  </p>
                  <p>
                    He has spent several years working with exporters, trading companies, and mid-sized businesses, focusing on situations where standard financing does not fit and structured solutions are required.
                  </p>
                  <p>
                    He has worked with some of the most prominent brands in the country, helping them scale and grow their business through innovative financial structures.
                  </p>
                  <p>
                    His approach is hands-on, analytical, and deal-driven - with an emphasis on clarity, alignment, and execution.
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mt-6 md:mt-8"
                >
                  <a className="bg-black text-white px-10 py-5 rounded-none font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all duration-500 inline-flex items-center gap-4 group shadow-xl" href="https://www.linkedin.com/in/sankalp-kumar-770b7023/">
                    <span>View LinkedIn</span>
                    <ExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-7 order-1 lg:order-2"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative aspect-[4/3] bg-neutral-200 rounded-[3rem] overflow-hidden border border-black/10 shadow-2xl transform group-hover:rotate-1 transition-transform duration-500">
                    <img
                      alt="Sankalp Kumar Portrait"
                      className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-105"
                      src="/Confident%20professional%20in%20office%20setting.png"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-primary/10"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 4: Philosophy */}
        <section className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12 mb-16 md:mb-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left mb-12 md:mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-10"
          >
            <div className="max-w-2xl">
              <span className="block text-primary font-bold uppercase tracking-widest text-xs mb-4 px-4 py-1.5 bg-primary/5 border border-primary/20 w-fit rounded-full">Core Values</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-foreground font-bold tracking-tighter">Our <span className="text-primary italic font-light">Philosophy</span></h2>
            </div>
            <p className="text-black/60 text-base md:text-xl max-w-sm font-medium border-l border-black/10 pl-5 md:pl-8">
              The core principles that govern our engagement and ensure the longevity of our impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {[
              {
                num: "01.",
                title: "Intellectual Rigor",
                desc: "We reject superficial solutions. Every strategy is forged through exhaustive research and peer-reviewed methodologies.",
              },
              {
                num: "02.",
                title: "Radical Integrity",
                desc: "Our advice is uncompromised. We maintain absolute transparency, prioritizing the client's long-term health over short-term gains.",
              },
              {
                num: "03.",
                title: "Measured Precision",
                desc: "In strategy, as in architecture, every millimeter matters. We execute with a level of detail that leaves nothing to chance.",
              },
            ].map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-surface-container-low/50 backdrop-blur-xl p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-[2.5rem] border border-white/5 hover:border-primary/30 hover:bg-surface-container-low transition-all duration-500 shadow-xl group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-headline text-2xl md:text-3xl font-bold mb-6 md:mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {p.num.replace('.', '')}
                </div>
                <h3 className="text-2xl md:text-[28px] font-headline text-foreground mb-4 md:mb-6 font-bold">{p.title}</h3>
                <p className="text-on-surface-variant text-base md:text-lg leading-relaxed group-hover:text-foreground transition-colors">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 5: Signature Quote */}
        <section className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12 mb-16 md:mb-48 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -z-10"></div>
          <div className="flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl bg-background p-6 sm:p-8 md:p-24 border-l-4 md:border-l-[12px] border-primary relative shadow-2xl"
            >
              <div className="absolute top-6 left-6 md:top-10 md:left-10 text-primary/10"><Quote size={88} fill="currentColor" /></div>
              <blockquote className="text-2xl sm:text-3xl md:text-5xl font-headline text-foreground leading-[1.1] font-light italic tracking-tight relative z-10">
                "The most sophisticated solutions are often those that have the courage to
                remain simple. We don't <span className="text-primary not-italic font-semibold">complicate</span>; we clarify."
              </blockquote>
              <div className="mt-12 flex items-center gap-6">
                <div className="h-[2px] w-12 bg-primary"></div>
                <cite className="block text-on-surface-variant font-bold uppercase tracking-[0.3em] text-xs not-italic">
                  Institutional Manifesto, 2024
                </cite>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
