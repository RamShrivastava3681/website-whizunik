import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-architecture.jpg";
import { ExternalLink, Quote } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="bg-background text-foreground selection:bg-primary/20 overflow-x-hidden">
      <Header />
      
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30vw] h-[30vw] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <main className="relative pt-40 pb-24 z-10">
        {/* Section 1: Hero */}
        <section className="max-w-[1440px] mx-auto px-8 md:px-12 mb-40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-8"
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-primary font-bold tracking-[0.2em] text-[10px] uppercase mb-8 shadow-sm">
                About
              </span>
              <h1 className="serif-headline text-6xl md:text-8xl lg:text-[110px] text-black font-bold leading-[1.05] tracking-tight">
                Architects of <br/>
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 1 }}
                  className="italic font-light text-primary/80"
                >Intellectual</motion.span> Capital.
              </h1>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-4 md:pt-32"
            >
              <p className="text-black/60 text-xl leading-relaxed font-medium border-l border-black/10 pl-8">
                Whizunik was founded on a singular premise: that true institutional
                excellence is born from the intersection of rigorous data and creative intuition.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Image & Mission */}
        <section className="mb-48 relative">
          <div className="max-w-[1440px] mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              style={{ y: imgY }}
              className="relative group cursor-none"
            >
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden rounded-3xl border border-black/5 shadow-2xl">
                <img
                  alt="Institutional Architecture"
                  className="object-cover w-full h-full opacity-100 transition-transform duration-1000 group-hover:scale-110"
                  src={aboutImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-primary/10 pointer-events-none"></div>
              </div>
            </motion.div>

            <div className="space-y-16">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pl-12 border-l-4 border-primary relative"
              >
                <div className="absolute -left-3 top-[-20px] text-primary/20"><Quote size={60} fill="currentColor" /></div>
                <h2 className="text-5xl font-headline text-black mb-8 font-bold">Our Mission</h2>
                <p className="text-black/70 text-2xl leading-relaxed italic font-headline font-light italic">
                  "To elevate institutional decision-making through a curated approach to
                  complex systems, fostering an environment where clarity becomes the
                  ultimate competitive advantage."
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-8 text-black/60 text-lg leading-relaxed max-w-lg"
              >
                <p className="font-medium text-black/80">
                  We do not merely provide services; we cultivate partnerships built on the
                  foundations of deep research and ethical stewardship.
                </p>
                <p>
                  In an era of noise, we prioritize the signal. Our methodology is refined,
                  reductive, and relentlessly focused on the outcomes that define legacies.
                </p>
                <div className="h-px w-24 bg-primary/40"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: Leadership */}
        <section className="bg-neutral-50 backdrop-blur-sm py-40 mb-48 border-y border-black/5 relative">
          <div className="max-w-[1440px] mx-auto px-8 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5 order-2 lg:order-1"
              >
                <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] block mb-6 px-4 py-1.5 bg-primary/10 w-fit rounded-full border border-primary/20 shadow-inner">
                  Leadership
                </span>
                <h2 className="text-6xl md:text-7xl font-headline text-black mb-10 font-bold tracking-tight">Sankalp Kumar</h2>
                <p className="text-primary text-xl font-bold mb-8 italic">Founder & CEO, Whizunik</p>
                
                <div className="space-y-6 text-black/60 text-lg leading-relaxed border-l border-primary/20 pl-8">
                  <p>
                    With over two decades of experience in institutional strategy, Sankalp
                    brings a perspective that bridges classical academic rigor with contemporary
                    market agility.
                  </p>
                  <p>
                    Under his stewardship, Whizunik has evolved into a boutique powerhouse known
                    for navigating the most intricate challenges of the modern financial landscape.
                  </p>
                </div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="mt-16"
                >
                  <a className="bg-black text-white px-10 py-5 rounded-none font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all duration-500 inline-flex items-center gap-4 group shadow-xl" href="#">
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
        <section className="max-w-[1440px] mx-auto px-8 md:px-12 mb-48">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left mb-24 flex flex-col md:flex-row items-end justify-between gap-10"
          >
            <div className="max-w-2xl">
              <span className="block text-primary font-bold uppercase tracking-widest text-xs mb-4 px-4 py-1.5 bg-primary/5 border border-primary/20 w-fit rounded-full">Core Values</span>
              <h2 className="text-6xl md:text-7xl font-headline text-foreground font-bold tracking-tighter">Our <span className="text-primary italic font-light">Philosophy</span></h2>
            </div>
            <p className="text-on-surface-variant text-xl max-w-sm font-medium border-l border-white/10 pl-8">
              The core principles that govern our engagement and ensure the longevity of our impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
                className="bg-surface-container-low/50 backdrop-blur-xl p-12 rounded-[2.5rem] border border-white/5 hover:border-primary/30 hover:bg-surface-container-low transition-all duration-500 shadow-xl group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-headline text-3xl font-bold mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {p.num.replace('.', '')}
                </div>
                <h3 className="text-3xl font-headline text-foreground mb-6 font-bold">{p.title}</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed group-hover:text-foreground transition-colors">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 5: Signature Quote */}
        <section className="max-w-[1440px] mx-auto px-8 md:px-12 mb-48 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -z-10"></div>
          <div className="flex justify-center md:justify-end">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="max-w-4xl bg-background p-12 md:p-24 border-l-[12px] border-primary relative shadow-2xl"
            >
              <div className="absolute top-10 left-10 text-primary/10"><Quote size={120} fill="currentColor" /></div>
              <blockquote className="text-4xl md:text-6xl font-headline text-foreground leading-[1.1] font-bold italic tracking-tight relative z-10">
                "The most sophisticated solutions are often those that have the courage to
                remain simple. We don't <span className="text-primary not-italic">complicate</span>; we clarify."
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
