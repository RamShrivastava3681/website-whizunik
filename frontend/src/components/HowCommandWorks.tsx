import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileCheck2, 
  ArrowRight, 
  ArrowDown,
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
  Sparkles
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

const connectedQueueStages = [
  {
    step: "01",
    role: "Sales Queue",
    icon: ShoppingCart,
    tag: "Commercial Inception",
    task: "Sales Order Verified & Signed",
    desc: "Customer signs acceptance terms. The transaction automatically lands in the Checker's queue.",
    handoff: "Auto-routes to Checker Queue with commercial terms locked",
    nextDept: "Checker Desk",
  },
  {
    step: "02",
    role: "Checker Queue",
    icon: ShieldCheck,
    tag: "Audit Gate",
    task: "Policy & Margin Approval",
    desc: "Checker validates payment terms and credit limit. Approval instantly unlocks the operational route.",
    handoff: "Auto-routes to Warehouse Fulfillment Queue",
    nextDept: "Warehouse Desk",
  },
  {
    step: "03",
    role: "Warehouse Queue",
    icon: Warehouse,
    tag: "Physical Gate",
    task: "Stock Allocation & Dock GRN",
    desc: "Warehouse allocates authentic stock and performs physical dispatch or goods receipt verification.",
    handoff: "Auto-routes to Finance Invoicing Queue",
    nextDept: "Finance Desk",
  },
  {
    step: "04",
    role: "Finance Queue",
    icon: Coins,
    tag: "Settlement Gate",
    task: "Tax Invoice & Cash Realization",
    desc: "Finance releases the verified tax invoice and matches realized bank credit in Treasury.",
    handoff: "Completed cycle reconciles into Management Ledger",
    nextDept: "Management",
  },
];

const HowCommandWorks = () => {
  const [activeDept, setActiveDept] = useState(departmentViews[0].id);
  const [activeQueueStep, setActiveQueueStep] = useState<number>(0);

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

        {/* SECTION: MY QUEUE (INTERACTIVE SIMULATION) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center mb-20 md:mb-28">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-[10px] uppercase tracking-widest mb-4">
              <ListTodo size={12} />
              <span>My Queue</span>
            </div>
            <h3 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-6 leading-tight">
              Everyone knows <span className="text-primary font-light italic">what to do next.</span>
            </h3>
            <p className="text-black/75 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Every department works from its own workspace. Every user works from <strong>My Queue</strong>. It shows each user the actions currently waiting for them, based on their role and where each transaction stands.
            </p>
            <p className="text-black/75 text-sm sm:text-base leading-relaxed mb-8 font-normal">
              Select <strong>Action</strong>, and WhizUnik takes the user directly to the next required workflow step.
            </p>

            <div className="space-y-3">
              {[
                "The workflow creates the work queue.",
                "No separate task tracker.",
                "No searching for the transaction.",
                "Clear ownership of what happens next.",
              ].map((text) => (
                <div key={text} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-black/80 text-xs sm:text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Connected Transaction Queue Chain */}
            <div className="rounded-3xl border border-black/10 bg-neutral-50/70 p-6 sm:p-8 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-black/10 mb-6 flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-xs">
                    <ListTodo size={20} />
                  </div>
                  <div>
                    <h5 className="text-black font-bold text-sm sm:text-base tracking-tight">
                      The Connected Workflow Queue
                    </h5>
                    <p className="text-black/50 text-[11px] font-medium">
                      How an action in one queue directly links to the next
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Live Connected Chain
                </span>
              </div>

              {/* Connected Stepper with Visual Links */}
              <div className="space-y-3 relative">
                {connectedQueueStages.map((stage, idx) => {
                  const Icon = stage.icon;
                  const isSelected = activeQueueStep === idx;

                  return (
                    <div key={stage.step} className="relative">
                      {/* Queue Stage Card */}
                      <div
                        onClick={() => setActiveQueueStep(idx)}
                        className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? "bg-white border-primary shadow-md ring-1 ring-primary/30"
                            : "bg-white/80 border-black/10 hover:border-primary/40 hover:bg-white shadow-2xs"
                        }`}
                      >
                        <div className="flex items-start gap-3.5 sm:gap-4">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                              isSelected
                                ? "bg-primary text-white shadow-xs"
                                : "bg-neutral-100 text-black/60 group-hover:text-primary"
                            }`}
                          >
                            <Icon size={19} />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-xs font-bold text-primary px-1.5 py-0.5 rounded bg-primary/10">
                                  Stage {stage.step}
                                </span>
                                <h4 className="font-bold text-black text-sm sm:text-base tracking-tight">
                                  {stage.role}
                                </h4>
                              </div>
                              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-black/5 text-black/60">
                                {stage.tag}
                              </span>
                            </div>

                            <p className="text-black font-semibold text-xs sm:text-sm mb-1">
                              {stage.task}
                            </p>
                            <p className="text-black/65 text-xs leading-relaxed">
                              {stage.desc}
                            </p>

                            {/* Direct Link Badge */}
                            <div className="mt-3 pt-2.5 border-t border-black/5 flex items-center justify-between gap-2 text-xs flex-wrap">
                              <div className="flex items-center gap-1.5 text-primary font-bold text-[11px]">
                                <ArrowRight size={13} className="shrink-0" />
                                <span>Link: {stage.handoff}</span>
                              </div>
                              <span className="text-[10px] font-semibold text-black/50">
                                Target: {stage.nextDept}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Visible Connecting Arrow Link Between Stages */}
                      {idx < connectedQueueStages.length - 1 && (
                        <div className="flex justify-center py-1">
                          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/5 text-primary text-[10px] font-bold">
                            <ArrowDown size={11} className="animate-bounce" />
                            <span>Workflow links to next queue</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Quote from Document */}
              <div className="mt-5 p-3.5 rounded-xl bg-primary/5 border border-primary/20 text-xs text-black/75 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span>
                  <strong>Document Principle:</strong> <em>"Select Action, and WhizUnik takes the user directly to the next required workflow step — the workflow creates the work queue."</em>
                </span>
              </div>
            </div>
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
