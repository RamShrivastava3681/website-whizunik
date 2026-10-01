import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  ArrowRight, 
  Layers, 
  FileSpreadsheet, 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  Building2, 
  Sparkles 
} from "lucide-react";

const commandCenterMetrics = [
  { label: "Sales", val: "₹1.48 Cr", sub: "14 active deals in progress" },
  { label: "Receivables", val: "₹62.5 L", sub: "38 invoices issued" },
  { label: "Payables", val: "₹41.2 L", sub: "Scheduled vendor payouts" },
  { label: "Available Cash", val: "₹89.4 L", sub: "Verified realized bank balance" },
  { label: "Expected Collections", val: "₹34.0 L", sub: "Next 14 business days" },
  { label: "Expected Payments", val: "₹22.8 L", sub: "Next 14 business days" },
  { label: "Overdues", val: "4 Flags", sub: "Immediate resolution queue" },
  { label: "Pending Actions", val: "7 Tasks", sub: "Across 3 departmental desks" },
];

const operatingPillars = [
  { title: "Connected Workflows", desc: "Information moves with the transaction." },
  { title: "Controlled Hand-offs", desc: "Responsibility moves to the appropriate team." },
  { title: "Role Clarity", desc: "Users see the work relevant to them." },
  { title: "Operational Visibility", desc: "Management sees what is happening across departments." },
  { title: "Less Duplicate Entry", desc: "Teams work from the same underlying transaction." },
];

const implementationSteps = [
  { step: "01", name: "Understand", desc: "Your departments, users, processes and responsibilities." },
  { step: "02", name: "Configure", desc: "Roles, workflows, master data and operating rules." },
  { step: "03", name: "Prepare", desc: "Users, permissions and transaction data." },
  { step: "04", name: "Operate", desc: "Your teams begin working through connected WhizUnik workflows." },
];

const ManagementCenter = () => {
  return (
    <section className="relative py-20 md:py-28 bg-white text-black overflow-hidden" id="management-center">
      {/* Background Lights */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        
        {/* MANAGEMENT COMMAND CENTER HEADER */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-primary font-body text-[11px] md:text-xs uppercase tracking-[0.35em] font-bold mb-4">
            Management Command Center
          </p>
          <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6 leading-[1.15]">
            See the business <span className="text-primary font-light italic">as it moves.</span>
          </h2>
          <p className="text-black/75 text-base md:text-lg leading-relaxed font-normal">
            WhizUnik brings operational and financial activity together so management can see where the business stands, what is expected next, and what requires immediate attention.
          </p>
        </div>

        {/* METRICS DASHBOARD */}
        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 border border-black/10 mb-20 md:mb-28 shadow-sm">
          <div className="flex flex-wrap items-center justify-between pb-6 border-b border-black/10 gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <BarChart3 size={20} />
              </div>
              <div>
                <h4 className="font-bold text-black text-base">Executive Real-Time Pulse</h4>
                <p className="text-black/50 text-xs font-medium">Live consolidated operations & treasury</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-emerald-700 text-xs font-bold uppercase tracking-wider">Live System Sync</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {commandCenterMetrics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-5 rounded-2xl bg-white border border-black/10 hover:border-primary/50 hover:shadow-[0_10px_25px_rgba(47,99,255,0.08)] transition-all group cursor-default"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-black/50 text-xs font-bold uppercase tracking-wider group-hover:text-primary transition-colors">{item.label}</p>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary group-hover:scale-125 transition-all" />
                </div>
                <p className="text-xl sm:text-2xl font-bold text-black tracking-tight mb-1">{item.val}</p>
                <p className="text-black/55 text-[11px] leading-tight font-medium">{item.sub}</p>
              </motion.div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-black font-bold text-base">See today. See what's coming.</p>
              <p className="text-black/70 text-xs sm:text-sm">
                Actual receipts and payments determine available cash. Expected collections and payments provide forward-looking visibility.
              </p>
              <p className="text-black/70 text-xs sm:text-sm">
                Operational queues show what still needs to happen. Management sees the numbers alongside the transactions and actions behind them.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-xs font-bold tracking-widest uppercase hover:brightness-110 shrink-0 self-start sm:self-auto shadow-sm"
            >
              <span>Explore Metrics</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* MORE THAN ANOTHER DEPARTMENTAL SYSTEM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 md:mb-28">
          <div className="lg:col-span-5">
            <p className="text-primary font-body text-[11px] md:text-xs uppercase tracking-[0.35em] font-bold mb-4">
              System Orchestration
            </p>
            <h3 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-6 leading-tight">
              WhizUnik connects the journey <span className="text-primary font-light italic">between systems and teams.</span>
            </h3>
            <p className="text-black/75 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Accounting software records the books. CRM manages customer relationships. Inventory systems track stock. <strong className="text-black">WhizUnik connects the operational journey between them.</strong>
            </p>
            <p className="text-black/65 text-xs sm:text-sm leading-relaxed">
              WhizUnik Command acts as an operational control layer across the business — connecting transactions, responsibilities, approvals, documents, cash movements, and physical inventory movements.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {operatingPillars.map((pillar, idx) => (
              <div key={pillar.title} className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-black/10 hover:border-primary/40 transition-colors flex items-start gap-4">
                <span className="font-mono text-xs font-bold text-primary mt-1">0{idx + 1}</span>
                <div>
                  <h5 className="text-black font-bold text-sm sm:text-base mb-1">{pillar.title}</h5>
                  <p className="text-black/65 text-xs sm:text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WORKS WITH YOUR ACCOUNTING ENVIRONMENT */}
        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 border border-black/10 mb-20 md:mb-28">
          <div className="max-w-3xl">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider inline-block mb-4">
              Accounting Coexistence
            </span>
            <h3 className="serif-headline text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
              Command runs operations. <span className="text-primary font-light italic">Your accounting system continues doing accounting.</span>
            </h3>
            <p className="text-black/70 text-sm sm:text-base leading-relaxed mb-6">
              WhizUnik Command is designed to manage day-to-day operational execution, approvals, transaction movement, and business visibility. Your existing accounting software can continue serving its accounting and statutory reporting purpose.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-black/10">
              <div className="p-4 rounded-xl bg-white border border-black/5">
                <h5 className="text-black font-bold text-sm mb-1">IRN & E-Way Bill Support</h5>
                <p className="text-black/60 text-xs">Currently supported through controlled, mandatory workflow validation fields.</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-black/5">
                <h5 className="text-black font-bold text-sm mb-1">Tally Integration (Planned)</h5>
                <p className="text-black/60 text-xs">Seamless bidirectional movement for accounting & compliance with zero duplicate entry.</p>
              </div>
            </div>
          </div>
        </div>

        {/* IMPLEMENTATION: 4 STEPS */}
        <div className="mb-20 md:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-body text-[11px] md:text-xs uppercase tracking-[0.35em] font-bold mb-3">
              Implementation
            </p>
            <h3 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
              Built around the way <span className="text-primary font-light italic">your business operates.</span>
            </h3>
            <p className="text-black/60 text-sm md:text-base">
              Every business has distinct approval structures. WhizUnik configures around your organization rather than forcing users into a generic box.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationSteps.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
                whileHover={{ y: -3 }}
                className="p-6 rounded-3xl bg-neutral-50 border border-black/10 hover:border-primary/40 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-primary text-xs font-bold tracking-wider">{item.step}</span>
                  <h4 className="text-black font-bold text-xl mt-1 mb-2 tracking-tight">{item.name}</h4>
                  <p className="text-black/60 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* STRATEGIC FINANCE ADVISORY TEASER BANNER */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-primary/[0.08] via-primary/[0.03] to-transparent border border-primary/20 mb-20 relative overflow-hidden">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={18} className="text-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Advisory Practice</span>
            </div>
            <h4 className="serif-headline text-2xl sm:text-3xl font-bold text-black mb-3">
              Technology backed by financial and operating experience.
            </h4>
            <p className="text-black/70 text-sm sm:text-base leading-relaxed mb-6 font-medium">
              Alongside WhizUnik Command, we work selectively with businesses, investors, and capital providers on complex structured capital and trade-finance matters. Our advisory work focuses on strategy, structuring, assessment, and transaction readiness rather than simply introducing capital.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-white font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-md shadow-primary/20"
            >
              <span>Explore Strategic Advisory</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* FINAL CTA SECTION */}
        <div className="text-center max-w-3xl mx-auto pt-4">
          <h3 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
            Bring your operations into <span className="text-primary font-light italic">one connected flow.</span>
          </h3>
          <p className="text-black/70 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto font-medium">
            Connect your teams, transactions, and operational visibility — from the first order to the final movement of goods and cash.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-9 py-4 sm:py-5 rounded-full bg-primary text-white text-xs sm:text-sm font-bold uppercase tracking-[0.2em] hover:shadow-2xl hover:shadow-primary/40 transition-all shadow-xl shadow-primary/20"
          >
            <span>Request a Walkthrough</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ManagementCenter;
