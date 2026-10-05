import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  TrendingUp, 
  Boxes, 
  ShoppingCart, 
  CreditCard, 
  AlertCircle 
} from "lucide-react";
import Magnetic from "@/components/Magnetic";

const operationalChain = [
  { icon: ShoppingCart, cause: "Sales", effect: "Creates receivables." },
  { icon: Boxes, cause: "Procurement", effect: "Creates payment obligations." },
  { icon: Boxes, cause: "Inventory", effect: "Ties up working capital." },
  { icon: CreditCard, cause: "Collections", effect: "Creates cash." },
  { icon: AlertCircle, cause: "Operational Delays", effect: "Eventually become financial problems." },
];

const About = () => {
  return (
    <div className="relative min-h-screen bg-white text-black overflow-hidden selection:bg-primary/20">
      <Header />

      {/* Background Decorative Blur */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[45vw] h-[45vw] bg-primary/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[35vw] h-[35vw] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <main className="relative pt-28 md:pt-40 pb-20 md:pb-32 z-10">
        <section className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12">
          
          {/* Hero Section */}
          <div className="max-w-4xl mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-primary font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-6 shadow-sm">
                About WhizUnik
              </span>
              <h1 className="serif-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-black font-bold leading-[1.05] tracking-tight mb-8">
                Where operations, finance{" "}
                <span className="text-primary italic font-light">& technology come together.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-black/75 leading-relaxed font-normal max-w-3xl">
                WhizUnik was built around a simple observation: <br className="hidden sm:inline" />
                <strong className="text-black font-bold">Financial performance and operational execution cannot be separated.</strong>
              </p>
            </motion.div>
          </div>

          {/* THE CORE CHAIN */}
          <div className="mb-20 md:mb-28">
            <h3 className="serif-headline text-2xl sm:text-3xl font-bold text-black mb-8">
              The Reality of Operational Interdependence
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {operationalChain.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.cause}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="p-5 rounded-2xl bg-neutral-50 border border-black/10 hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                        <Icon size={20} />
                      </div>
                      <h4 className="text-base font-bold text-black tracking-tight">{item.cause}</h4>
                      <p className="text-xs sm:text-sm text-black/60 mt-1 font-medium">{item.effect}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* THE STORY */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center p-8 sm:p-12 rounded-3xl bg-neutral-50 border border-black/10 mb-20 md:mb-28">
            <div className="lg:col-span-7">
              <h3 className="serif-headline text-2xl sm:text-4xl font-bold text-black mb-6">
                From working capital analysis to connected operational control.
              </h3>
              <p className="text-black/75 text-sm sm:text-base leading-relaxed mb-4">
                Our experience analysing businesses, working capital, and trade flows shaped the way we built <strong>WhizUnik Command</strong>.
              </p>
              <p className="text-black/70 text-sm sm:text-base leading-relaxed">
                Today, our primary focus is building technology that gives growing businesses greater control, visibility, and accountability across their daily operations.
              </p>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-white border border-primary/20 shadow-sm">
              <div className="flex items-center gap-3 mb-3 text-primary">
                <Sparkles size={20} />
                <span className="font-bold text-xs uppercase tracking-widest">Ongoing Practice</span>
              </div>
              <p className="text-black/80 text-xs sm:text-sm leading-relaxed">
                Our strategic finance practice allows us to continue applying that real-world experience selectively to complex financing, trade structures, and institutional investment situations.
              </p>
            </div>
          </div>

          {/* ONE PERSPECTIVE. TWO APPLICATIONS. */}
          <div className="mb-20 md:mb-28">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] block mb-2">
                Core Architecture
              </span>
              <h3 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold text-black">
                One perspective. <span className="text-primary font-light italic">Two applications.</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* Card 1: Command */}
              <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 text-black border border-black/10 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Terminal size={24} />
                  </div>
                  <h4 className="serif-headline text-2xl sm:text-3xl font-bold text-black mb-2">
                    WhizUnik Command
                  </h4>
                  <p className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
                    Technology for operational control
                  </p>
                  <p className="text-black/65 text-xs sm:text-sm leading-relaxed mb-6">
                    Connects sales, procurement, inventory, finance, and warehouse workflows into one controlled operating flow.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:translate-x-1 transition-transform"
                >
                  <span>Request a Walkthrough</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Card 2: Strategic Advisory */}
              <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 text-black border border-black/10 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <TrendingUp size={24} />
                  </div>
                  <h4 className="serif-headline text-2xl sm:text-3xl font-bold text-black mb-2">
                    Strategic Finance Advisory
                  </h4>
                  <p className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
                    Expertise for complex capital decisions
                  </p>
                  <p className="text-black/65 text-xs sm:text-sm leading-relaxed mb-6">
                    Selective transaction structuring, trade-flow analysis, and lender readiness for businesses and capital funds.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:translate-x-1 transition-transform"
                >
                  <span>Explore Advisory</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          </div>

          {/* FINAL CTA */}
          <div className="p-10 sm:p-14 rounded-3xl bg-neutral-50 border border-primary/25 text-black text-center max-w-3xl mx-auto shadow-sm">
            <h4 className="serif-headline text-2xl sm:text-3xl font-bold mb-4 text-black">
              Bring your operations into one connected flow.
            </h4>
            <p className="text-black/65 text-xs sm:text-sm max-w-lg mx-auto mb-8 font-medium">
              Discover how WhizUnik Command gives management true operational and financial visibility.
            </p>
            <Magnetic>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest hover:brightness-110 shadow-lg shadow-primary/20"
              >
                <span>Request a Walkthrough</span>
                <ArrowRight size={14} />
              </Link>
            </Magnetic>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
