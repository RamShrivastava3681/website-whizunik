import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Building, Landmark, Compass, CheckCircle2, ShieldCheck, Scale, FileSpreadsheet } from "lucide-react";
import { Link } from "react-router-dom";
import Magnetic from "@/components/Magnetic";

const businessServices = [
  {
    title: "Funding Strategy",
    desc: "Assess the appropriate financing structure for the underlying business requirement.",
    icon: Compass,
  },
  {
    title: "Transaction Structuring",
    desc: "Structure financing around trade flows, receivables, inventory, and working-capital cycles.",
    icon: Scale,
  },
  {
    title: "Lender Readiness",
    desc: "Prepare the financial, commercial, and operational information required for institutional review.",
    icon: FileSpreadsheet,
  },
  {
    title: "Credit Assessment",
    desc: "Identify issues likely to influence how a financing institution assesses the transaction.",
    icon: ShieldCheck,
  },
  {
    title: "Transaction Support",
    desc: "Support management through financial and commercial due diligence.",
    icon: CheckCircle2,
  },
];

const fundServices = [
  {
    title: "Transaction Assessment",
    desc: "Independent analysis of prospective trade and working-capital opportunities.",
    icon: Building,
  },
  {
    title: "Credit & Operational Due Diligence",
    desc: "Review financial strength, transaction structure, and underlying operating flow.",
    icon: ShieldCheck,
  },
  {
    title: "Trade-Flow Analysis",
    desc: "Assess buyers, suppliers, payment terms, inventory movement, and working-capital requirements.",
    icon: Scale,
  },
  {
    title: "Monitoring Frameworks",
    desc: "Help establish transaction monitoring and operational controls post-deployment.",
    icon: CheckCircle2,
  },
];

const Services = () => {
  return (
    <div className="bg-background text-foreground relative overflow-x-hidden selection:bg-primary/20">
      <Header />
      
      {/* Background Subtle Gradient Blobs */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[-10%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px]" 
        />
      </div>

      <main className="pt-28 md:pt-40 pb-20 md:pb-32">
        <section className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12 relative z-10">
          
          {/* Hero Section */}
          <div className="max-w-4xl mb-20 md:mb-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-primary font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-6 shadow-sm">
                Strategic Finance Advisory
              </span>
              <h1 className="serif-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-black font-bold leading-[1.05] tracking-tight mb-8">
                Structured thinking for{" "}
                <span className="text-primary italic font-light">complex capital requirements.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-black/75 leading-relaxed font-normal max-w-3xl mb-8">
                WhizUnik provides selective strategic advisory to businesses and capital providers navigating structured capital and trade-finance transactions.
              </p>
              <p className="text-sm sm:text-base text-black/60 leading-relaxed font-medium max-w-3xl">
                Our work combines financial analysis with an understanding of the underlying commercial transaction, working-capital cycle, and operational risks.
              </p>
            </motion.div>
          </div>

          {/* TWO MAIN COLUMNS: FOR BUSINESSES & FOR FUNDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 mb-24 md:mb-32 items-start">
            
            {/* For Businesses */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-8 sm:p-12 rounded-3xl bg-neutral-50 border border-black/10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Building size={24} />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-primary">Client Practice</span>
                  <h3 className="serif-headline text-2xl sm:text-3xl font-bold text-black">For Businesses</h3>
                </div>
              </div>
              <p className="text-black/60 text-sm mb-8 leading-relaxed">
                Structured guidance for growth-stage businesses planning non-dilutive, structured working-capital and trade debt.
              </p>

              <div className="space-y-4">
                {businessServices.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                      whileHover={{ y: -3 }}
                      className="p-4 rounded-2xl bg-white border border-black/5 hover:border-primary/40 hover:shadow-[0_8px_20px_rgba(47,99,255,0.08)] transition-all duration-300 group cursor-default"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          <Icon size={16} />
                        </div>
                        <div>
                          <h4 className="font-bold text-black text-sm sm:text-base mb-1 group-hover:text-primary transition-colors duration-200">{item.title}</h4>
                          <p className="text-black/65 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* For Funds & Capital Providers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="p-8 sm:p-12 rounded-3xl bg-neutral-50 border border-black/10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Landmark size={24} />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-primary">Institutional Desk</span>
                  <h3 className="serif-headline text-2xl sm:text-3xl font-bold text-black">For Funds & Capital Providers</h3>
                </div>
              </div>
              <p className="text-black/60 text-sm mb-8 leading-relaxed">
                Independent underwriting analysis, operational flow assessment, and transaction monitoring for institutional credit funds.
              </p>

              <div className="space-y-4">
                {fundServices.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                      whileHover={{ y: -3 }}
                      className="p-4 rounded-2xl bg-white border border-black/5 hover:border-primary/40 hover:shadow-[0_8px_20px_rgba(47,99,255,0.08)] transition-all duration-300 group cursor-default"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          <Icon size={16} />
                        </div>
                        <div>
                          <h4 className="font-bold text-black text-sm sm:text-base mb-1 group-hover:text-primary transition-colors duration-200">{item.title}</h4>
                          <p className="text-black/65 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

          </div>

          {/* BANNER: SELECTIVE. STRATEGIC. ADVISORY-LED. */}
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-primary/[0.08] via-primary/[0.03] to-transparent border border-primary/20 text-center max-w-4xl mx-auto">
            <span className="text-primary font-body text-xs font-bold uppercase tracking-[0.3em] block mb-3">
              Selective. Strategic. Advisory-led.
            </span>
            <h3 className="serif-headline text-2xl sm:text-4xl font-bold text-black mb-4">
              Value creation through deep operational and financial insight.
            </h3>
            <p className="text-black/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8 font-medium">
              We focus on assignments where our experience in finance, operations, and transaction structures can add meaningful value.
            </p>
            <Magnetic>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-primary text-white text-xs sm:text-sm font-bold uppercase tracking-widest hover:brightness-110 shadow-xl shadow-primary/20 transition-all"
              >
                <span>Discuss an Advisory Requirement</span>
                <ArrowRight size={16} />
              </Link>
            </Magnetic>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
