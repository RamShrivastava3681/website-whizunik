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
  AlertCircle,
  Building2,
  Calendar,
  Award,
  Factory,
  Users2,
  Briefcase,
  CheckCircle2
} from "lucide-react";
import Magnetic from "@/components/Magnetic";

const companyStats = [
  { val: "2023", label: "Founded", sub: "Built around connected operational reality" },
  { val: "25+", label: "Years Combined Experience", sub: "Deep background in structured finance" },
  { val: "150+", label: "Transactions Advised", sub: "Across complex debt & capital structures" },
  { val: "₹50–500 Cr", label: "Core Business Scale", sub: "Mid-market growth & enterprise clients" },
];

const operationalChain = [
  { icon: ShoppingCart, cause: "Sales", effect: "Creates customer orders & receivables." },
  { icon: Boxes, cause: "Procurement", effect: "Creates supplier obligations & physical stock." },
  { icon: Factory, cause: "Production & Inventory", effect: "Ties up enterprise working capital." },
  { icon: CreditCard, cause: "Collections & Treasury", effect: "Realizes actual bank liquidity." },
  { icon: AlertCircle, cause: "Operational Delays", effect: "Directly become financial & capital problems." },
];

const clientProfiles = [
  {
    title: "Exporters & International Traders",
    desc: "Companies managing foreign exchange, buyer credit cycles, container shipping documentation, and multi-stage bank realizations.",
    tag: "Global Trade",
  },
  {
    title: "Manufacturers & Fabricators",
    desc: "Industrial producers coordinating BOM material checks, vendor POs, factory shift runs, QC release gates, and dispatches.",
    tag: "Industrial",
  },
  {
    title: "Trading & Distribution Companies",
    desc: "High-volume distributors tracking vendor payment credit, real-time inventory staging, channel orders, and debtor aging.",
    tag: "Supply Chain",
  },
  {
    title: "Promoter-Led Growth Businesses",
    desc: "Visionary enterprises that have outgrown manual spreadsheets and need systemic operational control without hiring massive IT overhead.",
    tag: "Growth Scale",
  },
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
                About Whiz-Unik
              </span>
              <h1 className="serif-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-black font-bold leading-[1.05] tracking-tight mb-8">
                Where operations, finance{" "}
                <span className="text-primary italic font-light">& technology come together.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-black/75 leading-relaxed font-normal max-w-3xl mb-8">
                Founded in 2023, Whiz-Unik was built around a singular observation born out of 25+ years in structured finance: <br className="hidden sm:inline" />
                <strong className="text-black font-bold">Financial performance and operational execution cannot be separated.</strong>
              </p>
              <p className="text-black/65 text-sm sm:text-base leading-relaxed max-w-3xl font-medium">
                When operations stall, capital dries up. When systems disconnect, visibility vanishes. We build software and advise capital to ensure growing companies maintain total operational control.
              </p>
            </motion.div>
          </div>

          {/* COMPANY KEY METRICS (Founded 2023, 25+ years, 150+ transactions, ₹50-500 Cr) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20 md:mb-28">
            {companyStats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                whileHover={{ y: -3 }}
                className="p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-black/10 hover:border-primary/40 hover:shadow-sm transition-all"
              >
                <span className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold text-primary block mb-2">
                  {stat.val}
                </span>
                <h4 className="text-black font-bold text-sm sm:text-base mb-1">{stat.label}</h4>
                <p className="text-black/55 text-xs font-medium leading-relaxed">{stat.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* THE REALITY OF OPERATIONAL INTERDEPENDENCE */}
          <div className="mb-20 md:mb-28">
            <div className="max-w-2xl mb-8">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] block mb-2">
                Operational Foundation
              </span>
              <h3 className="serif-headline text-2xl sm:text-3xl font-bold text-black">
                The Reality of Operational Interdependence
              </h3>
            </div>

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

          {/* WHO WHIZ-UNIK WORKS WITH */}
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-50 border border-black/10 mb-20 md:mb-28">
            <div className="max-w-3xl mb-10">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] block mb-2">
                Client Focus
              </span>
              <h3 className="serif-headline text-2xl sm:text-4xl font-bold text-black mb-4">
                Who Whiz-Unik Works With
              </h3>
              <p className="text-black/70 text-sm sm:text-base leading-relaxed">
                We partner with ₹50–500 Cr mid-market enterprises across India and global trade hubs who require rigorous operational clarity and disciplined working capital control:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {clientProfiles.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-white border border-black/10 hover:border-primary/40 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-bold text-black">{item.title}</h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-neutral-100 text-primary">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-black/65 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* TEAM MODEL & OPERATING PHILOSOPHY */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center p-8 sm:p-12 rounded-3xl bg-white border border-black/10 mb-20 md:mb-28 shadow-sm">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] block">
                Operating Philosophy
              </span>
              <h3 className="serif-headline text-2xl sm:text-4xl font-bold text-black leading-tight">
                Role-Led Team Model & Institutional Discipline
              </h3>
              <p className="text-black/75 text-sm sm:text-base leading-relaxed">
                We operate on a <strong>role-led team model</strong> rather than personality-driven silos. Every desk — from Sales and Procurement to Checker verification, Treasury, and Warehouse fulfillment — is structured with clear ownership, segregation of duties, and two-man verification rules.
              </p>
              <p className="text-black/70 text-xs sm:text-sm leading-relaxed">
                Our team brings together veterans in structured finance, supply chain operations, full-stack software architecture, and corporate treasury. We believe software should reflect physical shopfloor and commercial reality — not hypothetical accounting abstractions.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-3.5">
              {[
                { title: "Segregation of Duties", desc: "No single user can initiate, approve, and disburse without independent Checker review." },
                { title: "Truth on the Dock", desc: "Physical goods receipt (GRN) and gate releases govern inventory, not paper assumptions." },
                { title: "Realized Treasury", desc: "Available cash reflects verified bank remittances, keeping projected funds transparently distinct." },
                { title: "Zero IT Overhead", desc: "Built as an intuitive operating layer that frontline teams adopt in days without extensive retraining." },
              ].map((item, idx) => (
                <div key={item.title} className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-black/10 flex items-start gap-4">
                  <span className="font-mono text-primary text-xs font-bold mt-0.5">0{idx + 1}</span>
                  <div>
                    <h5 className="font-bold text-black text-sm mb-0.5">{item.title}</h5>
                    <p className="text-black/65 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
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
                to="/contact?type=walkthrough"
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
