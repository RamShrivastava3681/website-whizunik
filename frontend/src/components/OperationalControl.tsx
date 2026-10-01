import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Check, 
  ArrowRight, 
  RotateCcw, 
  Boxes, 
  Truck, 
  ArrowDownLeft, 
  ArrowUpRight, 
  GitFork, 
  ShieldAlert,
  ChevronRight,
  FileText,
  UserCheck,
  ShieldCheck,
  Receipt,
  CreditCard,
  Package
} from "lucide-react";

const salesLifecycleSteps = [
  { step: "01", name: "Sales Order", desc: "Order booked", icon: FileText },
  { step: "02", name: "Customer Acceptance", desc: "Terms accepted", icon: UserCheck },
  { step: "03", name: "Checker", desc: "Audit approval", icon: ShieldCheck },
  { step: "04", name: "Invoice", desc: "Commercial bill", icon: Receipt },
  { step: "05", name: "Payment", desc: "Funds verified", icon: CreditCard },
  { step: "06", name: "Warehouse", desc: "Stock staging", icon: Package },
  { step: "07", name: "Dispatch", desc: "Physical release", icon: Truck },
];

const procurementLifecycleSteps = [
  "Supplier",
  "Purchase Order",
  "Checker",
  "Supplier Invoice",
  "Treasury",
  "Goods Receipt",
  "GRN",
];

const controlPillars = [
  {
    title: "Goods Received",
    rule: "Stock increases when the GRN is confirmed.",
    detail: "Purchase orders and vendor promises remain projected until physical dock inspection generates the verified GRN.",
    icon: Boxes,
    badge: "Inventory Inflow",
  },
  {
    title: "Goods Dispatched",
    rule: "Stock decreases when physical dispatch or another authorised stock movement is confirmed.",
    detail: "Packing a box or creating an invoice does not deplete warehouse ledger until goods cross the authorized gate.",
    icon: Truck,
    badge: "Inventory Outflow",
  },
  {
    title: "Cash Received",
    rule: "Available cash changes when Treasury records the actual receipt.",
    detail: "Expected customer collections stay projected until the bank statement realization is recorded by Treasury.",
    icon: ArrowDownLeft,
    badge: "Treasury Inflow",
  },
  {
    title: "Cash Paid",
    rule: "Available cash changes when Treasury records the actual payment.",
    detail: "Approved vendor invoices sit in scheduled payables until funds physically leave company accounts.",
    icon: ArrowUpRight,
    badge: "Treasury Outflow",
  },
];

const OperationalControl = () => {
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<"credit" | "advance">("credit");

  return (
    <section className="relative py-24 md:py-32 bg-white text-black overflow-hidden" id="operational-control">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-primary font-body text-[11px] md:text-xs uppercase tracking-[0.35em] font-bold mb-4">
            Operational Control
          </p>
          <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6 leading-[1.15]">
            Numbers change when the business{" "}
            <span className="italic font-light text-primary">actually changes.</span>
          </h2>
          <p className="text-black/75 text-base md:text-lg leading-relaxed font-normal">
            WhizUnik distinguishes between what is <strong>expected to happen</strong> and what has <strong>actually happened</strong>.
          </p>
        </div>

        {/* 4 PILLARS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {controlPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-6 rounded-3xl bg-neutral-50 border border-black/10 hover:border-primary/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-black/50 bg-black/5 px-2.5 py-1 rounded-full">
                      {pillar.badge}
                    </span>
                  </div>
                  <h4 className="text-black font-bold text-lg sm:text-xl tracking-tight mb-2">{pillar.title}</h4>
                  <p className="text-primary font-semibold text-xs sm:text-sm leading-snug mb-3">{pillar.rule}</p>
                  <p className="text-black/60 text-xs sm:text-sm leading-relaxed">{pillar.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* EXPECTED IS NOT ACTUAL BANNER */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-primary/[0.08] via-primary/[0.03] to-transparent border border-primary/20 mb-24 md:mb-32">
          <div className="max-w-3xl">
            <h4 className="text-xl sm:text-2xl font-bold text-black mb-3">Expected is not the same as actual.</h4>
            <p className="text-black/70 text-sm sm:text-base leading-relaxed mb-4">
              Expected collections and payments remain projected until the underlying transaction occurs. Overdue items remain visible until they are resolved or updated.
            </p>
            <p className="text-primary font-bold text-sm sm:text-base">
              This gives management a clearer view of both where the business stands today and what is expected next.
            </p>
          </div>
        </div>

        {/* WORKFLOWS SECTION */}
        <div className="mb-24 md:mb-32">
          <div className="max-w-3xl mb-12">
            <p className="text-primary font-body text-[11px] md:text-xs uppercase tracking-[0.35em] font-bold mb-3">
              Intelligent Workflows
            </p>
            <h3 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
              The transaction <span className="text-primary font-light italic">determines the workflow.</span>
            </h3>
            <p className="text-black/70 text-sm sm:text-base leading-relaxed">
              WhizUnik doesn't simply record transactions. It moves them through the appropriate business process based on verified commercial terms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sales Workflow with Credit vs Advance Toggle */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-black/10">
              <div className="mb-6">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-2">
                  <h4 className="text-xl font-bold text-black tracking-tight">Sales</h4>
                <div className="flex bg-black/5 p-1 rounded-full border border-black/10 relative">
                  <button
                    onClick={() => setActiveWorkflowTab("credit")}
                    className={`relative z-10 px-4 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                      activeWorkflowTab === "credit" ? "text-white" : "text-black/60 hover:text-black"
                    }`}
                  >
                    Credit Terms
                    {activeWorkflowTab === "credit" && (
                      <motion.div
                        layoutId="workflowActivePill"
                        className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveWorkflowTab("advance")}
                    className={`relative z-10 px-4 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                      activeWorkflowTab === "advance" ? "text-white" : "text-black/60 hover:text-black"
                    }`}
                  >
                    Advance Terms
                    {activeWorkflowTab === "advance" && (
                      <motion.div
                        layoutId="workflowActivePill"
                        className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                </div>
              </div>
              {/* Sales Standard Lifecycle Stepper Cards */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-black/10 shadow-xs mb-4 relative overflow-hidden">
                <div className="flex items-center justify-between gap-3 mb-3.5 flex-wrap">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary block">
                      End-to-End Enterprise Flow
                    </span>
                    <h5 className="text-xs sm:text-sm font-bold text-black mt-0.5">
                      Standard Sales Lifecycle
                    </h5>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    7 Connected Stages
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                  {salesLifecycleSteps.map((stage, i) => {
                    const Icon = stage.icon;
                    return (
                      <motion.div
                        key={stage.step}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: i * 0.05, ease: "easeOut" }}
                        whileHover={{ y: -2 }}
                        className="relative p-2.5 rounded-xl bg-neutral-50/80 border border-black/5 hover:border-primary/40 hover:bg-primary/[0.03] hover:shadow-xs transition-all duration-200 text-center flex flex-col items-center justify-between group cursor-default"
                      >
                        {/* Top row: step pill + icon */}
                        <div className="w-full flex items-center justify-between gap-1 mb-1.5">
                          <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-white border border-black/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            {stage.step}
                          </span>
                          <div className="w-5 h-5 rounded-md bg-white border border-black/10 flex items-center justify-center text-black/50 group-hover:text-primary group-hover:border-primary/30 transition-colors">
                            <Icon size={11} />
                          </div>
                        </div>

                        {/* Stage name */}
                        <p className="text-[11px] font-bold text-black leading-snug my-1 group-hover:text-primary transition-colors">
                          {stage.name}
                        </p>

                        {/* Subtitle / tag */}
                        <span className="text-[9px] text-black/45 font-medium leading-none">
                          {stage.desc}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <p className="text-black/65 text-xs font-medium mb-3">Payment terms determine the route.</p>
            </div>

            {activeWorkflowTab === "credit" ? (
                <motion.div
                  key="credit"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {[
                      { step: "01", name: "Sales Order", note: "Created" },
                      { step: "02", name: "Approval", note: "Checker Gate" },
                      { step: "03", name: "Final Invoice", note: "Issued" },
                      { step: "04", name: "Collection", note: "Treasury" },
                      { step: "05", name: "Dispatch", note: "Warehouse" },
                    ].map((item) => (
                      <div key={item.step} className="p-3 rounded-xl bg-white border border-black/10 text-center shadow-2xs hover:border-primary/40 transition-colors">
                        <span className="text-[10px] font-mono font-bold text-primary">{item.step}</span>
                        <p className="text-xs font-bold text-black mt-0.5">{item.name}</p>
                        <span className="text-[9px] text-black/50 font-medium">{item.note}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <span className="font-bold text-primary shrink-0">Credit Terms Route:</span>
                    <div className="flex flex-wrap items-center gap-1.5 text-black/85 font-medium">
                      {["Sales Order", "Approval", "Final Invoice", "Collection", "Dispatch"].map((step, idx) => (
                        <div key={step} className="flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded-md bg-white border border-primary/20 text-[11px] font-semibold text-black">
                            {step}
                          </span>
                          {idx < 4 && <ChevronRight size={12} className="text-primary/50 shrink-0" />}
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-black/55 italic">
                    The appropriate actions are released as the required business events occur.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="advance"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {[
                      { step: "01", name: "Sales Order", note: "Created" },
                      { step: "02", name: "Approval", note: "Checker Gate" },
                      { step: "03", name: "Proforma", note: "Advance Request" },
                      { step: "04", name: "Advance Recd", note: "Bank Proof" },
                      { step: "05", name: "Final Invoice", note: "Dispatch Gate" },
                    ].map((item) => (
                      <div key={item.step} className="p-3 rounded-xl bg-white border border-black/10 text-center shadow-2xs hover:border-primary/40 transition-colors">
                        <span className="text-[10px] font-mono font-bold text-primary">{item.step}</span>
                        <p className="text-xs font-bold text-black mt-0.5">{item.name}</p>
                        <span className="text-[9px] text-black/50 font-medium">{item.note}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <span className="font-bold text-primary shrink-0">Advance Terms Route:</span>
                    <div className="flex flex-wrap items-center gap-1.5 text-black/85 font-medium">
                      {["Sales Order", "Approval", "Proforma", "Advance Received", "Final Invoice", "Dispatch"].map((step, idx) => (
                        <div key={step} className="flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded-md bg-white border border-primary/20 text-[11px] font-semibold text-black">
                            {step}
                          </span>
                          {idx < 5 && <ChevronRight size={12} className="text-primary/50 shrink-0" />}
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-black/55 italic">
                    The appropriate actions are released as the required business events occur.
                  </p>
                </motion.div>
              )}
            </div>

            {/* Procurement & Warehouse Rules */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-3xl bg-neutral-50 border border-black/10">
                <div className="flex items-center gap-3 mb-2">
                  <GitFork size={18} className="text-primary" />
                  <h4 className="font-bold text-black text-base">Procurement</h4>
                </div>
                <p className="text-black/70 text-xs sm:text-sm leading-relaxed mb-3">
                  Creating a Purchase Order does not increase inventory. Stock increases only when Warehouse confirms physical receipt through the GRN.
                </p>
                <div className="p-3 rounded-2xl bg-white border border-black/10 shadow-2xs">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {procurementLifecycleSteps.map((stage, i) => (
                      <div key={stage} className="flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded-md bg-neutral-50 border border-black/5 text-[11px] font-bold text-black/85">
                          <span className="text-[9px] font-mono text-primary mr-1">0{i + 1}</span>
                          {stage}
                        </span>
                        {i < procurementLifecycleSteps.length - 1 && (
                          <ChevronRight size={11} className="text-black/30 shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-neutral-50 border border-black/10">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldAlert size={18} className="text-primary" />
                  <h4 className="font-bold text-black text-base">Warehouse</h4>
                </div>
                <p className="text-black/70 text-xs sm:text-sm leading-relaxed mb-3">
                  Preparing a dispatch does not reduce inventory. Stock decreases only when physical dispatch or another authorised stock movement is confirmed.
                </p>
                <p className="text-primary font-semibold text-xs leading-relaxed">
                  This keeps system inventory connected to actual physical movement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTROL BUILT INTO THE WORKFLOW */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-50 border border-black/10 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <p className="text-primary font-body text-[11px] md:text-xs uppercase tracking-[0.35em] font-bold mb-3">
              CONTROL BUILT INTO THE WORKFLOW
            </p>
            <h3 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
              Approval without <span className="text-primary font-light italic">losing visibility.</span>
            </h3>
            <p className="text-black/75 text-sm sm:text-base leading-relaxed mb-4">
              Transactions requiring review move to the appropriate Checker.
            </p>
            <p className="text-black/60 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
              The Checker can:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-5 rounded-2xl bg-white border border-emerald-500/30 shadow-xs flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-black text-base">Approve</h5>
                  <p className="text-black/65 text-xs sm:text-sm mt-1 leading-relaxed">
                    allowing the transaction to progress.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-amber-500/30 shadow-xs flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <RotateCcw size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-black text-base">Return for Correction</h5>
                  <p className="text-black/65 text-xs sm:text-sm mt-1 leading-relaxed">
                    sending it back to the responsible user.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-black/75 text-sm leading-relaxed mb-6 font-medium">
              WhizUnik maintains the transaction, its status and its progression through the workflow.
            </p>

            <div className="flex flex-wrap gap-6 pt-4 border-t border-black/10 text-xs sm:text-sm text-black/80 font-semibold">
              <span>✓ Clear ownership</span>
              <span>✓ Controlled hand-offs</span>
              <span>✓ Visible next actions</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OperationalControl;
