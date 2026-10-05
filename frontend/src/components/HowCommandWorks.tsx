import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileCheck2, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ListTodo, 
  ShoppingCart, 
  Package, 
  ShieldCheck, 
  Coins, 
  Warehouse, 
  LineChart,
  Check,
  Sparkles,
  GitFork,
  ArrowUpRight,
  ChevronRight
} from "lucide-react";

const flowSteps = [
  { id: "01", title: "Order", desc: "Logged once at inception", sub: "Commercial request" },
  { id: "02", title: "Approval", desc: "Validated by Checker", sub: "Policy gate" },
  { id: "03", title: "Invoice", desc: "Documents locked", sub: "Tax & IRN details" },
  { id: "04", title: "Payment", desc: "Treasury records actuals", sub: "Bank realization" },
  { id: "05", title: "Receipt / Dispatch", desc: "Physical inventory moves", sub: "Dock inspection" },
  { id: "06", title: "Management", desc: "Real-time visibility", sub: "Executive pulse" },
];

const departmentViews = [
  {
    id: "sales",
    name: "Sales",
    icon: ShoppingCart,
    tagline: "Manage customers, Sales Orders, customer acceptance, invoicing requirements and collection follow-up.",
    points: [
      "Manage customer master & relationship context",
      "Draft and confirm verified Sales Orders (SO)",
      "Track customer acceptance & delivery milestones",
      "Monitor invoicing prerequisites and collection follow-ups",
    ],
    sampleAction: "Sales Order #SO-8820 waiting for customer credit acceptance",
  },
  {
    id: "procurement",
    name: "Procurement",
    icon: Package,
    tagline: "Manage suppliers, Purchase Orders, supplier invoices and purchasing workflows.",
    points: [
      "Manage approved suppliers and rate contracts",
      "Issue Purchase Orders (PO) linked to real demand",
      "Track supplier invoices and reconciliation",
      "Drive purchasing workflows with complete traceability",
    ],
    sampleAction: "Purchase Order #PO-4091 awaiting Checker validation",
  },
  {
    id: "checker",
    name: "Checker",
    icon: ShieldCheck,
    tagline: "Review, approve or return transactions before they progress.",
    points: [
      "Review high-value transactions before progression",
      "One-click Approve to release to the next department",
      "Return for Correction with clear audit annotations",
      "Full audit trail preserved across the transaction lifecycle",
    ],
    sampleAction: "Invoice #INV-290 pending Checker sign-off before dispatch",
  },
  {
    id: "finance",
    name: "Finance & Treasury",
    icon: Coins,
    tagline: "Manage invoices, receivables, payables, receipts, payments and cash visibility.",
    points: [
      "Manage sales receivables and supplier payables",
      "Record actual receipts and payments when realized",
      "Maintain clear separation between projected vs available cash",
      "Forward-looking cash flow visibility based on real events",
    ],
    sampleAction: "Payment voucher ₹4,50,000 pending Treasury disbursement",
  },
  {
    id: "warehouse",
    name: "Warehouse",
    icon: Warehouse,
    tagline: "Manage goods receipt, GRN, putaway, stock movement and dispatch.",
    points: [
      "Confirm physical goods receipt with authentic GRN",
      "Stock only increases when GRN is confirmed",
      "Stock only decreases when physical dispatch leaves the dock",
      "Manage internal stock movements and warehouse putaway",
    ],
    sampleAction: "GRN #GRN-1049 awaiting physical dock count confirmation",
  },
  {
    id: "management",
    name: "Management",
    icon: LineChart,
    tagline: "See business-wide transactions, financial position, overdue items and operational priorities.",
    points: [
      "Unified operational and financial health dashboard",
      "Immediate alert on overdue items, bottlenecks, and delays",
      "Cross-departmental transaction pipeline from order to cash",
      "Prioritize operational interventions where it matters most",
    ],
    sampleAction: "Executive Command Center: 4 pending checker actions across 2 regions",
  },
];

const HowCommandWorks = () => {
  const [activeDept, setActiveDept] = useState(departmentViews[0].id);

  const currentDept = departmentViews.find((d) => d.id === activeDept) || departmentViews[0];
  const DeptIcon = currentDept.icon;

  return (
    <section className="relative py-20 md:py-32 bg-white text-black overflow-hidden" id="how-it-works">
      {/* Background Animated Ambient Lights (Original Light Theme) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-[130px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[140px]"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        
        {/* HEADER: HOW COMMAND WORKS */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] md:text-xs uppercase tracking-[0.35em] font-bold mb-5 shadow-2xs"
          >
            <Sparkles size={13} />
            <span>How Command Works</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="serif-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6 leading-[1.15]"
          >
            One transaction.{" "}
            <span className="text-primary font-light italic">One connected flow.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-black/75 text-base md:text-lg leading-relaxed font-normal"
          >
            Information is entered once and moves with the transaction. As the workflow progresses, responsibility moves to the team that needs to act next.
          </motion.p>
        </div>

        {/* ANIMATED STEP FLOW DIAGRAM WITH CONNECTING PIPELINE */}
        <div className="relative mb-20">
          {/* Subtle connecting track line on desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[2px] bg-neutral-200 z-0">
            <motion.div
              animate={{ x: ["0%", "100%", "0%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 relative z-10">
            {flowSteps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5, ease: "easeOut" }}
                className="p-5 rounded-2xl bg-neutral-50/90 backdrop-blur-xs border border-black/10 hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-primary font-mono text-xs font-bold tracking-wider group-hover:scale-110 transition-transform inline-block">
                      {step.id}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  </div>
                  <h4 className="text-black font-bold text-base md:text-lg tracking-tight mb-1">{step.title}</h4>
                  <p className="text-primary text-[11px] font-semibold">{step.sub}</p>
                </div>
                <p className="text-black/60 text-xs mt-3 leading-snug font-medium pt-3 border-t border-black/5">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* THREE CORE PILLARS WITH HOVER TRANSFORMS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-black/10 mb-20 md:mb-28 shadow-xs">
          <motion.div whileHover={{ y: -3 }} className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5 shadow-2xs">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <h5 className="text-black font-bold text-base mb-1">The data moves forward</h5>
              <p className="text-black/65 text-xs sm:text-sm leading-relaxed">No re-typing or copy-pasting between systems. Every field remains unified.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -3 }} className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5 shadow-2xs">
              <Layers size={20} />
            </div>
            <div>
              <h5 className="text-black font-bold text-base mb-1">The responsibility changes</h5>
              <p className="text-black/65 text-xs sm:text-sm leading-relaxed">Automatic handoffs assign tasks to the right department workspace instantly.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -3 }} className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5 shadow-2xs">
              <FileCheck2 size={20} />
            </div>
            <div>
              <h5 className="text-black font-bold text-base mb-1">The transaction stays connected</h5>
              <p className="text-black/65 text-xs sm:text-sm leading-relaxed">Full audit trail from initial sales order to final cash receipt and dispatch.</p>
            </div>
          </motion.div>
        </div>

        {/* SECTION: MY QUEUE - 4 CORE PRINCIPLES BENTO GRID */}
        <div className="mb-24 md:mb-32">
          {/* Section Header */}
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-[11px] uppercase tracking-widest mb-4">
              <ListTodo size={13} />
              <span>My Queue</span>
            </div>
            <h3 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-5 leading-tight">
              Everyone knows <span className="text-primary font-light italic">what to do next.</span>
            </h3>
            <p className="text-black/75 text-sm sm:text-base leading-relaxed mb-4 font-normal">
              Every department works from its own workspace. Every user works from <strong>My Queue</strong>. It shows each user the actions currently waiting for them, based on their role and where each transaction stands.
            </p>
            <p className="text-primary font-bold text-sm sm:text-base">
              Select <em>Action</em>, and WhizUnik takes the user directly to the next required workflow step.
            </p>
          </div>

          {/* Connected Flow Strip */}
          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-black/10 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-black/50 shrink-0">
              Direct Workflow Navigation
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold text-black/85">
              <span className="px-3 py-1.5 rounded-xl bg-white border border-black/10 shadow-2xs">
                01 Role Workspace
              </span>
              <ChevronRight size={14} className="text-primary shrink-0" />
              <span className="px-3 py-1.5 rounded-xl bg-white border border-primary/30 text-primary font-bold shadow-2xs">
                02 My Queue Action
              </span>
              <ChevronRight size={14} className="text-primary shrink-0" />
              <span className="px-3 py-1.5 rounded-xl bg-white border border-black/10 shadow-2xs">
                03 Select Action
              </span>
              <ChevronRight size={14} className="text-primary shrink-0" />
              <span className="px-3 py-1.5 rounded-xl bg-primary text-white font-bold shadow-xs">
                04 Next Step Unlocked
              </span>
            </div>
          </div>

          {/* 4-Card Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {[
              {
                num: "01",
                title: "The workflow creates the work queue.",
                desc: "Business events and transaction progress automatically populate each user's queue. No manager needs to manually assign tasks or track deadlines.",
                tag: "Autonomous Queueing",
                icon: GitFork,
              },
              {
                num: "02",
                title: "No separate task tracker.",
                desc: "Eliminates third-party to-do lists, disconnected spreadsheets, and chase-up messages. The live transaction engine is the single operational truth.",
                tag: "Single Platform",
                icon: Layers,
              },
              {
                num: "03",
                title: "No searching for the transaction.",
                desc: "Clicking 'Action' opens the exact transaction record with all upstream commercial and tax data already pre-filled and locked.",
                tag: "Instant Deep-Link",
                icon: ArrowUpRight,
              },
              {
                num: "04",
                title: "Clear ownership of what happens next.",
                desc: "Every step has an assigned role with zero ambiguity. Responsibility transitions automatically as verification gates are completed.",
                tag: "Complete Accountability",
                icon: CheckCircle2,
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.num}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 sm:p-7 rounded-3xl bg-neutral-50/70 border border-black/10 hover:border-primary/40 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Icon size={20} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-black/5 text-primary">
                        {card.tag}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-primary mb-1 block">
                      Principle {card.num}
                    </span>
                    <h4 className="text-black font-bold text-lg sm:text-xl tracking-tight mb-2 group-hover:text-primary transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-black/70 text-xs sm:text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SECTION: ONE PLATFORM. DIFFERENT VIEWS. (SMOOTH TABS) */}
        <div id="solutions">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-body text-[11px] md:text-xs uppercase tracking-[0.35em] font-bold mb-3 inline-block">
              One Platform. Different Views.
            </span>
            <h3 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
              Every team sees <span className="text-primary font-light italic">the work it owns.</span>
            </h3>
            <p className="text-black/65 text-sm md:text-base">
              Each department operates within a tailored interface focused precisely on its domain responsibilities.
            </p>
          </div>

          {/* Department Selector Tabs with Sliding Pill Animation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 p-1.5 rounded-full bg-neutral-100 max-w-fit mx-auto border border-black/5">
            {departmentViews.map((dept) => {
              const Icon = dept.icon;
              const isActive = activeDept === dept.id;
              return (
                <button
                  key={dept.id}
                  onClick={() => setActiveDept(dept.id)}
                  className={`relative px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 z-10 ${
                    isActive ? "text-white" : "text-black/70 hover:text-black"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeDeptTab"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-primary rounded-full z-[-1] shadow-md shadow-primary/25"
                    />
                  )}
                  <Icon size={16} />
                  <span>{dept.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Department Card with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDept.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="p-8 sm:p-10 rounded-3xl bg-neutral-50 border border-black/10 max-w-4xl mx-auto shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-xs">
                  <DeptIcon size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-black tracking-tight">{currentDept.name} Workspace</h4>
                  <p className="text-primary text-xs sm:text-sm font-semibold">{currentDept.tagline}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {currentDept.points.map((pt) => (
                  <div key={pt} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-black/5 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span className="text-black/80 text-xs sm:text-sm leading-relaxed font-medium">{pt}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-primary text-xs uppercase font-bold tracking-widest">Next Queue Step:</span>
                  <span className="text-black font-semibold text-xs sm:text-sm">{currentDept.sampleAction}</span>
                </div>
                <ArrowRight size={16} className="text-primary shrink-0" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default HowCommandWorks;
