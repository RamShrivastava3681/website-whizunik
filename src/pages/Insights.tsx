import Header from "@/components/Header";
import Footer from "@/components/Footer";
import insightsHero from "@/assets/insights-hero.jpg";
import { ArrowRight, ArrowUpRight, Newspaper, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    category: "Firm Updates",
    title: "Whizunik Institutional Expands Private Equity Advisory to Nordic Markets",
    date: "March 15, 2024"
  },
  {
    category: "Capital Markets",
    title: "Understanding the Resilience of Sustainable Debt Instruments in 2024",
    date: "March 10, 2024"
  },
  {
    category: "Perspectives",
    title: "The Long View: Why Institutional Patience is the Ultimate Arbitrage",
    date: "March 05, 2024"
  },
];

const moreArticles = [
  {
    category: "Asset Management",
    title: "Navigating the Liquidity Mismatch in Private Credit",
    desc: "A deep dive into the structural challenges facing modern alternative assets."
  },
  {
    category: "Technology",
    title: "Quantum Computing: Implications for Institutional Risk Modeling",
    desc: "How the next frontier of processing will redefine portfolio stress testing."
  },
  {
    category: "Leadership",
    title: "The Modern Partner: Shifting Dynamics in B2B Advisory",
    desc: "Evolving client expectations in an era of digital-first consultancy."
  },
];

const Insights = () => {
  return (
    <div className="bg-background text-foreground selection:bg-primary/20 transition-colors duration-500">
      <Header />
      
      <main className="pt-40 pb-32 max-w-[1440px] mx-auto px-8 md:px-12">
        {/* Section 1: Hero Title */}
        <section className="mb-32 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-primary font-bold tracking-[0.2em] text-[10px] uppercase mb-8 shadow-sm">
              Market Intelligence
            </span>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-foreground leading-[1.05] tracking-tighter mb-12 font-headline">
              Insights for the<br />
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="italic font-light text-primary/80"
              >Modern Institution</motion.span>.
            </h1>
            <p className="text-on-surface-variant text-2xl leading-relaxed max-w-3xl font-medium border-l-[3px] border-primary/20 pl-10">
              Curated perspectives on global markets, technological shifts, and the evolving
              landscape of institutional excellence.
            </p>
          </motion.div>
        </section>

        {/* Section 2: Bento Editorial Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          {/* Featured Article */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8 group cursor-pointer relative"
          >
            <div className="relative overflow-hidden mb-10 aspect-[16/9] rounded-[2.5rem] border border-white/5 shadow-2xl">
              <img
                alt="Abstract digital network visualization"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src={insightsHero}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-primary/5 opacity-60"></div>
              <div className="absolute top-8 left-8">
                <span className="bg-primary px-6 py-2 text-white font-bold text-xs tracking-widest uppercase rounded-full shadow-lg">Featured Analysis</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6 mb-6 text-primary/60 font-medium">
              <div className="flex items-center gap-2"><Calendar size={16} /> <span>March 24, 2024</span></div>
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
              <div className="flex items-center gap-2"><Newspaper size={16} /> <span>12 Min Read</span></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl text-foreground font-headline font-bold leading-tight group-hover:text-primary transition-colors duration-500 max-w-4xl tracking-tight">
              The Synthesis of Human Judgment and Machine Intelligence in Global Strategy
            </h2>
            
            <motion.div 
              whileHover={{ rotate: 45 }}
              className="absolute bottom-4 right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl"
            >
              <ArrowUpRight size={32} />
            </motion.div>
          </motion.div>

          {/* Side List */}
          <div className="lg:col-span-4 flex flex-col gap-12">
            {articles.map((a, i) => (
              <motion.div 
                key={a.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group cursor-pointer border-b border-white/5 pb-10 hover:border-primary/40 transition-colors"
              >
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4 block">
                  {a.category}
                </span>
                <h3 className="text-2xl text-foreground/90 font-headline font-bold leading-snug group-hover:text-primary transition-colors duration-300">
                  {a.title}
                </h3>
                <div className="mt-4 text-sm text-on-surface-variant flex items-center gap-2">
                  <span className="font-bold">By Analytical Team</span>
                  <div className="w-1 h-1 rounded-full bg-white/20"></div>
                  <span>{a.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 3: Quarterly Review Glass Card */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-surface-container-low/40 backdrop-blur-3xl border border-white/5 p-12 md:p-24 flex flex-col lg:flex-row items-center gap-20 rounded-[3rem] shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48 group-hover:scale-150 transition-transform duration-1000"></div>
            
            <div className="lg:w-1/2 relative z-10">
              <h2 className="text-5xl md:text-6xl text-foreground mb-8 font-headline font-bold tracking-tight">Quarterly <span className="text-primary italic font-light">Intelligence</span> Review</h2>
              <p className="text-on-surface-variant mb-12 text-xl font-medium leading-relaxed">
                Download our comprehensive analysis of the macroeconomic forces shaping
                the upcoming fiscal cycle.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-none font-bold uppercase text-sm tracking-[0.2em] transition-all shadow-xl hover:shadow-primary/20"
              >
                Access Full Report
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="lg:w-1/2 relative z-10">
              <div className="border-l-[12px] border-primary pl-12 py-6 bg-white/5 backdrop-blur-md rounded-r-2xl">
                <blockquote className="font-headline text-3xl text-foreground italic leading-tight font-medium mb-8">
                  "In an era of hyper-liquidity, the most valuable asset a firm can possess is
                  not capital, but the clarity of focus required to deploy it effectively."
                </blockquote>
                <cite className="block text-primary font-bold text-sm uppercase tracking-widest not-italic">
                  — Elias Thorne, Chief Strategy Officer
                </cite>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 4: More Articles Grid (Premium Cards) */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {moreArticles.map((a, i) => (
              <motion.div 
                key={a.title} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer p-12 bg-surface-container-low/20 backdrop-blur-sm rounded-[2rem] border border-white/5 hover:border-primary/40 hover:bg-surface-container-low/40 transition-all duration-500 shadow-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <ArrowUpRight size={24} />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4 block">
                  {a.category}
                </span>
                <h3 className="text-3xl text-foreground/90 font-headline font-bold leading-tight group-hover:text-primary transition-colors duration-300 mb-6">
                  {a.title}
                </h3>
                <p className="text-on-surface-variant font-medium leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {a.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 5: Newsletter (Premium High-Contrast) */}
        <section className="mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[3rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none noise-bg"></div>
            <div className="relative z-10">
              <h2 className="font-headline text-5xl md:text-7xl text-white font-bold tracking-tighter mb-8 italic">The Intelligence Brief</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-16 text-2xl font-light font-headline tracking-wide">
                Receive a monthly synthesis of our most impactful insights directly to your inbox.
                No noise, just <span className="text-white font-bold italic">signal</span>.
              </p>
              <div className="flex flex-col md:flex-row max-w-2xl mx-auto gap-4">
                <input
                  className="bg-white/10 backdrop-blur-md border border-white/20 focus:ring-2 focus:ring-white/40 text-white w-full rounded-none text-lg px-8 py-5 placeholder:text-white/40 outline-none transition-all"
                  placeholder="Professional Email Address"
                  type="email"
                />
                <button className="bg-white text-primary px-12 py-5 rounded-none hover:bg-primary-foreground hover:text-white transition-all font-bold text-sm tracking-widest uppercase shadow-xl whitespace-nowrap">
                  Join Protocol
                </button>
              </div>
              <p className="mt-8 text-white/40 text-xs tracking-widest uppercase font-bold italic">
                Sovereignty over documentation. No unauthorized dissemination.
              </p>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
