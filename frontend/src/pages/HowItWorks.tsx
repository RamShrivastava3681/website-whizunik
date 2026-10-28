import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  FileCheck2, 
  GitFork, 
  ArrowUpRight, 
  ChevronRight, 
  ChevronLeft,
  RefreshCw,
  Sparkles, 
  Check, 
  Maximize2, 
  X,
  Workflow,
  Factory,
  Building2,
  FileSpreadsheet,
  Database,
  ArrowRightLeft,
  ShieldCheck,
  AlertTriangle,
  Clock,
  TrendingUp,
  Boxes,
  Truck,
  CreditCard,
  LineChart,
  ShoppingCart,
  Package
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Magnetic from "@/components/Magnetic";

// Flow sequence
const primaryFlowSteps = [
  { step: "01", name: "Order", desc: "Commercial terms recorded once" },
  { step: "02", name: "Approval", desc: "Validated by Checker policy" },
  { step: "03", name: "Procurement", desc: "PO linked to actual demand" },
  { step: "04", name: "Invoice", desc: "Commercial & tax bill locked" },
  { step: "05", name: "Payment", desc: "Treasury records bank actuals" },
  { step: "06", name: "Receipt / Dispatch", desc: "Dock inspection & gate release" },
  { step: "07", name: "Management", desc: "Unified executive pulse" },
];

// Manufacturing & export connected workflow example (Interactive 9-stage pipeline)
const factoryWorkflowSteps = [
  {
    step: "01",
    title: "Customer Order",
    badge: "Commercial Demand",
    desc: "Customer, product, variant, quantity, price, delivery date and status.",
    detail: "Order details are locked at entry so all downstream manufacturing and procurement functions work from verified demand.",
    icon: ShoppingCart,
    tag: "Demand Entry",
    verification: "Customer credit status & price margin rules validated automatically",
    statusBadge: "Commercial Lock Active"
  },
  {
    step: "02",
    title: "Material Check",
    badge: "BOM & Inventory Check",
    desc: "Required, available, reserved, incoming and shortage quantities from the product material list or BOM.",
    detail: "Real-time stock reservation calculates net shortages instantly without requiring manual warehouse phone calls.",
    icon: Database,
    tag: "BOM Calculation",
    verification: "Multi-level Bill of Materials explodes against raw material warehouse ledgers",
    statusBadge: "Auto BOM Explode"
  },
  {
    step: "03",
    title: "Purchase and Receive",
    badge: "Procurement & Inward",
    desc: "Create a purchase requirement or order when materials are short; increase stock only after goods receipt.",
    detail: "Vendors receive POs linked directly to order shortages. Inward stock ledger increments only after physical dock inspection.",
    icon: Package,
    tag: "Dock Inward",
    verification: "Dock GRN strictly required before raw material ledger increases",
    statusBadge: "GRN Dock Verification"
  },
  {
    step: "04",
    title: "Production Planning",
    badge: "Shopfloor Scheduling",
    desc: "Create a batch linked to the customer order with quantity, priority, dates, work area and owner.",
    detail: "Batches are tagged to the customer commitment, establishing clear line priority and operational ownership.",
    icon: Factory,
    tag: "Batch Scheduling",
    verification: "Batch IDs bound to Customer Order number and line machine capacity",
    statusBadge: "Scheduled on Line 2"
  },
  {
    step: "05",
    title: "Factory Updates",
    badge: "Live Assembly Execution",
    desc: "Record good quantity, rejects, rework, downtime, delays and owned issues.",
    detail: "Daily shift logs track yield and downtime in real time, alerting management before bottlenecks turn into late shipments.",
    icon: RefreshCw,
    tag: "Shift Logs",
    verification: "Hourly operator logs flag machine downtime and scrap counts instantly",
    statusBadge: "Real-time Yield: 98.4%"
  },
  {
    step: "06",
    title: "Quality Decision",
    badge: "QC Release Gate",
    desc: "Released, partially released, on hold, rejected or sent for rework.",
    detail: "Mandatory quality checkpoints prevent defective materials from progressing to finished inventory.",
    icon: ShieldCheck,
    tag: "Inspection Gate",
    verification: "Digital QC sign-off required before goods can move to finished inventory",
    statusBadge: "QC Passed & Signed"
  },
  {
    step: "07",
    title: "Finished Stock",
    badge: "Finished Goods Ledger",
    desc: "Add only released production to finished stock, linked to product, batch and customer order.",
    detail: "Finished goods ledger updates strictly upon QC approval, preventing unverified lots from being allocated to dispatch.",
    icon: Boxes,
    tag: "FG Warehouse",
    verification: "Physical finished stock allocated directly to waiting Customer Sales Order",
    statusBadge: "Ready for Allocation"
  },
  {
    step: "08",
    title: "Dispatch",
    badge: "Logistics & Gate Release",
    desc: "Check released quantity, allocation, documents and readiness; confirmed dispatch reduces stock and updates order status.",
    detail: "Packaging lists, e-way bills, and transport allocations verified before physical gate release.",
    icon: Truck,
    tag: "Gate Dispatch",
    verification: "Gate pass generated only after e-way bill & transporter docket matched",
    statusBadge: "Dispatched via Docket"
  },
  {
    step: "09",
    title: "Invoice & Payment Follow-up",
    badge: "Commercial Realization",
    desc: "Track invoices, due and overdue amounts, buyer follow-up and management reporting.",
    detail: "Receivables tracking initiates automatically upon dispatch confirmation with scheduled collection cadences.",
    icon: Coins,
    tag: "Realization",
    verification: "Statutory tax invoice pushed to accounting ledger and collections queue",
    statusBadge: "Realized in Bank"
  },
];

// Management indicators
const managementViewCards = [
  { title: "Orders at risk", sub: "Delivery milestones & schedule delays", badge: "Critical" },
  { title: "Material shortages", sub: "BOM shortages vs pending PO deliveries", badge: "Inventory" },
  { title: "Production progress", sub: "Active batch status across factory lines", badge: "Operations" },
  { title: "Factory issues", sub: "Machine downtime & shift log exceptions", badge: "Shopfloor" },
  { title: "Quality holds", sub: "Batches awaiting re-inspection or rework", badge: "QC Gate" },
  { title: "Released stock", sub: "Finished goods verified ready for customer", badge: "Warehouse" },
  { title: "Dispatch readiness", sub: "Staged orders awaiting transport docs", badge: "Logistics" },
  { title: "Debtor position", sub: "Total outstanding balances across buyers", badge: "Receivables" },
  { title: "Due & overdue invoices", sub: "Aging buckets & collection follow-up queue", badge: "Finance" },
  { title: "Cash-flow forecast", sub: "13-week forward liquidity vs commitments", badge: "Treasury" },
  { title: "SKU forecast", sub: "Velocity, reorder points, and runout days", badge: "Demand" },
  { title: "Pending approvals", sub: "Checker actions awaiting sign-off", badge: "Audit" },
];

// Integration categories
const integrationCategories = [
  {
    title: "Tally & Accounting Software",
    desc: "Designed to connect with Tally and established accounting platforms to exchange masters, verified invoices, and payment vouchers without duplicate data entry.",
    tag: "Accounting Layer"
  },
  {
    title: "ERP & Finance Systems",
    desc: "Can connect with corporate ERP ledgers so daily operational workflows feed statutory books while teams work from focused task queues.",
    tag: "Finance Books"
  },
  {
    title: "Banking & Payment Systems",
    desc: "Designed to integrate with corporate net-banking and payment gateways for verified bank realization and automated reconciliation.",
    tag: "Treasury & Rail"
  },
  {
    title: "Marketplaces & Sales Channels",
    desc: "Can connect with ecommerce marketplaces and B2B portals to synchronize sales orders, track dispatches, and update channel stock levels.",
    tag: "Commerce Sync"
  },
  {
    title: "Inventory & Warehouse Applications",
    desc: "Designed to communicate with barcode scanners, WMS tools, and logistics platforms for accurate dock counts and dispatch confirmations.",
    tag: "Physical Stock"
  },
  {
    title: "CRM & Web-Based Business Tools",
    desc: "Can connect with sales pipelines and cloud collaboration tools, bringing client commitments seamlessly into the execution workflow.",
    tag: "Commercial Front"
  },
];

// Implementation steps
const implementationSteps = [
  { step: "01", name: "Understand", desc: "Map your departments, users, existing processes, and approval structures." },
  { step: "02", name: "Configure", desc: "Configure role workspaces, custom validation gates, master catalogs, and operating rules." },
  { step: "03", name: "Prepare", desc: "Onboard users, define permissions, and migrate initial operational and customer data." },
  { step: "04", name: "Operate & Expand", desc: "Begin with one core workflow (such as Order-to-Cash) and expand horizontally across the organization." },
];

const HowItWorks = () => {
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-white text-black overflow-x-hidden selection:bg-primary/20">
      <Header />

      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[150px]"
        />
      </div>

      <main className="pt-28 md:pt-40 pb-20 md:pb-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12 relative z-10">
          
          {/* =========================================================
              HERO: HOW COMMAND OPERATES
          ========================================================== */}
          <div className="max-w-4xl mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] md:text-xs uppercase tracking-[0.35em] font-bold mb-6 shadow-xs">
                <Sparkles size={13} />
                <span>Operating Model & Architecture</span>
              </div>
              <h1 className="serif-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black mb-6 leading-[1.1]">
                How Whizunik Command{" "}
                <span className="text-primary italic font-light">operates inside a business.</span>
              </h1>
              <p className="text-black/75 text-base sm:text-lg md:text-xl leading-relaxed font-normal max-w-3xl mb-8">
                Command is an operating layer designed to sit over your existing software. Information is entered once at inception, responsibility transitions automatically between teams, and management receives continuous visibility over transactions, cash, and inventory.
              </p>

              {/* High-level Flow Strip */}
              <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-black/10 flex flex-wrap items-center justify-between gap-3 shadow-xs">
                <span className="text-[11px] font-bold uppercase tracking-wider text-black/50 shrink-0">
                  Transaction Lifecycle:
                </span>
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs font-semibold text-black/80">
                  {primaryFlowSteps.map((step, idx) => (
                    <div key={step.step} className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-white border border-black/10 text-black/90 shadow-2xs">
                        <span className="text-primary font-mono mr-1">{step.step}</span>
                        {step.name}
                      </span>
                      {idx < primaryFlowSteps.length - 1 && (
                        <ChevronRight size={13} className="text-primary/60 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* =========================================================
              SECTION 1: CONNECTED WORKFLOW & DEPARTMENT HANDOFFS
              (Screenshot 1: Connected workflow screenshot beside handoffs)
          ========================================================== */}
          <section className="mb-24 md:mb-32 pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
              
              {/* Left Column: Department Handoffs Explanation */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-primary font-body text-[11px] md:text-xs uppercase tracking-[0.35em] font-bold block mb-3">
                    Department Handoffs
                  </span>
                  <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight mb-4">
                    How teams hand work{" "}
                    <span className="text-primary italic font-light">to one another.</span>
                  </h2>
                  <p className="text-black/75 text-sm sm:text-base leading-relaxed">
                    In traditional companies, handoffs happen over phone calls, spreadsheets, and emails — causing delays and miscommunications. In Whizunik Command, the workflow itself moves the transaction forward.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-neutral-50 border border-black/10 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="text-black font-bold text-base mb-1">The data moves forward</h4>
                      <p className="text-black/70 text-xs sm:text-sm leading-relaxed">
                        Entered once at inception. Customer specifications, agreed prices, and material lists flow through approvals, procurement, and warehouse without manual re-typing.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-neutral-50 border border-black/10 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <Layers size={20} />
                    </div>
                    <div>
                      <h4 className="text-black font-bold text-base mb-1">The responsibility changes</h4>
                      <p className="text-black/70 text-xs sm:text-sm leading-relaxed">
                        When Sales confirms an order, responsibility transitions to Checker. When Checker approves, responsibility transitions to Procurement or Warehouse. Every role knows exactly what belongs to them.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-neutral-50 border border-black/10 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <FileCheck2 size={20} />
                    </div>
                    <div>
                      <h4 className="text-black font-bold text-base mb-1">The transaction stays connected</h4>
                      <p className="text-black/70 text-xs sm:text-sm leading-relaxed">
                        Every document, receipt note, invoice, and payment stays linked to the root commercial transaction, giving an unalterable audit trail.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Platform Screenshot 1 (Connected Workflow) */}
              <div className="lg:col-span-6">
                <div className="relative group rounded-3xl p-3 bg-neutral-100/80 border border-black/10 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between px-3 py-2 border-b border-black/5 mb-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span className="font-bold text-black uppercase tracking-wider text-[10px]">
                        Live Platform View • Connected Workflow & Queues
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedImage("/assets/hub/workflow-queue.png")}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-black/10 text-primary text-[10px] font-bold hover:bg-primary hover:text-white transition-colors"
                    >
                      <Maximize2 size={11} />
                      <span>Zoom View</span>
                    </button>
                  </div>

                  <div 
                    onClick={() => setSelectedImage("/assets/hub/workflow-queue.png")}
                    className="relative rounded-2xl overflow-hidden cursor-pointer bg-white border border-black/5"
                  >
                    <img
                      src="/assets/hub/workflow-queue.png"
                      alt="Connected Workflow Queue in Whizunik Command"
                      className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-white text-xs font-bold drop-shadow">Click to inspect full platform screen</span>
                    </div>
                  </div>

                  <div className="p-3 mt-2 text-center">
                    <p className="text-xs font-semibold text-black/70">
                      Actual platform screen: <strong className="text-primary font-bold">Workflow Queue</strong> displaying department handoffs, pending actions, and status progression.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* =========================================================
              SECTION 2: OWNERSHIP & WORK QUEUES (MY QUEUE)
          ========================================================== */}
          <section className="mb-24 md:mb-32">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-[11px] uppercase tracking-widest mb-4">
                <Workflow size={13} />
                <span>Ownership & Work Queues</span>
              </div>
              <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-5 leading-tight">
                How My Queue assigns responsibility:{" "}
                <span className="text-primary italic font-light">Everyone knows what to do next.</span>
              </h2>
              <p className="text-black/75 text-base sm:text-lg leading-relaxed">
                Rather than navigating through endless menus or searching for file numbers, every team member works from their tailored <strong>My Queue</strong>. It presents tasks, approvals, documents, and exceptions specifically assigned to their role.
              </p>
              <p className="text-primary font-bold text-sm sm:text-base mt-2">
                Clicking <em>Action</em> opens the exact transaction record with all upstream commercial and tax data already pre-filled and locked.
              </p>
            </div>

            {/* 4 Core Principles Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {[
                {
                  num: "01",
                  title: "The workflow creates the work queue.",
                  desc: "Business events and transaction progress automatically populate each user's queue. No manager needs to manually assign tasks or chase deadlines.",
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
                    className="p-6 sm:p-7 rounded-3xl bg-neutral-50/80 border border-black/10 hover:border-primary/40 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
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
          </section>

          {/* =========================================================
              SECTION 3: MANUFACTURING & EXPORT WORKFLOW EXAMPLE
              (Shifted to How It Works as requested by manager)
          ========================================================== */}
          <section className="mb-24 md:mb-32" id="factory-workflow">
            <div className="p-6 sm:p-10 md:p-12 rounded-3xl bg-neutral-50/80 border border-black/10">
              
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="eyebrow block mb-3 text-blue">
                  Shopfloor & Manufacturing • Connected Factory Workflow
                </span>
                <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink mb-4">
                  From customer order to factory floor <br />
                  <span className="text-blue italic font-light">& bank collection.</span>
                </h2>
                <p className="text-mutedBlue text-base sm:text-lg leading-relaxed font-normal">
                  A synchronized operating loop built specifically for manufacturers and exporters. When a customer order is locked, material shortages explode, shopfloor batches plan, QC gates inspect, and dispatches trigger bank collection cadences automatically.
                </p>
              </div>

              {/* Interactive Stepper Navigation Bar */}
              <div className="max-w-5xl mx-auto mb-8">
                <div className="grid grid-cols-3 sm:grid-cols-9 gap-1.5 p-2 rounded-2xl bg-white border border-line shadow-xs">
                  {factoryWorkflowSteps.map((s, idx) => {
                    const isActive = activeWorkflowIndex === idx;
                    return (
                      <button
                        key={s.step}
                        onClick={() => setActiveWorkflowIndex(idx)}
                        className={`p-2.5 rounded-xl text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                          isActive 
                            ? "bg-blue text-white shadow-md shadow-blue/25" 
                            : "hover:bg-paper text-mutedBlue"
                        }`}
                      >
                        <span className={`text-[10px] font-mono font-bold ${isActive ? "text-white/80" : "text-blue"}`}>
                          {s.step}
                        </span>
                        <span className="text-[11px] font-bold truncate w-full text-center">
                          {s.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Step Interactive Showcase Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={factoryWorkflowSteps[activeWorkflowIndex].step}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-5xl mx-auto rounded-3xl p-6 sm:p-10 bg-white border border-line shadow-[0_16px_35px_rgba(16,34,73,0.06)]"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-6 border-b border-line">
                    <div className="flex items-center gap-4">
                      {(() => {
                        const CurrentIcon = factoryWorkflowSteps[activeWorkflowIndex].icon;
                        return (
                          <div className="w-14 h-14 rounded-2xl bg-blue/10 flex items-center justify-center text-blue shrink-0 shadow-xs">
                            <CurrentIcon size={28} />
                          </div>
                        );
                      })()}
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-blue font-bold text-xs">
                            Stage {factoryWorkflowSteps[activeWorkflowIndex].step} of 09
                          </span>
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-light text-teal-accent border border-teal-border">
                            {factoryWorkflowSteps[activeWorkflowIndex].badge}
                          </span>
                        </div>
                        <h3 className="serif-headline text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                          {factoryWorkflowSteps[activeWorkflowIndex].title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-teal-light border border-teal-border text-xs font-bold text-teal-accent font-mono">
                      <CheckCircle2 size={15} />
                      <span>{factoryWorkflowSteps[activeWorkflowIndex].statusBadge}</span>
                    </div>
                  </div>

                  {/* Step Deep Dive Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="p-5 rounded-2xl bg-paper border border-line space-y-3">
                      <span className="eyebrow block text-mutedBlue">
                        Operational Scope
                      </span>
                      <p className="text-ink font-semibold text-sm sm:text-base leading-relaxed">
                        {factoryWorkflowSteps[activeWorkflowIndex].desc}
                      </p>
                      <p className="text-mutedBlue text-xs sm:text-sm leading-relaxed">
                        {factoryWorkflowSteps[activeWorkflowIndex].detail}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-teal-light/40 border border-teal-border space-y-3 flex flex-col justify-between">
                      <div>
                        <span className="eyebrow block text-teal-accent mb-1">
                          Whizunik Command System Rule
                        </span>
                        <h4 className="font-bold text-ink text-sm mb-2">Automated Policy & Verification</h4>
                        <p className="text-mutedBlue text-xs sm:text-sm leading-relaxed">
                          {factoryWorkflowSteps[activeWorkflowIndex].verification}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-teal-border flex items-center justify-between text-xs text-teal-accent font-semibold font-mono">
                        <span>Enforced via maker-checker audit</span>
                        <ShieldCheck size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Prev / Next Step Controls */}
                  <div className="flex items-center justify-between pt-4 border-t border-line">
                    <button
                      disabled={activeWorkflowIndex === 0}
                      onClick={() => setActiveWorkflowIndex(prev => Math.max(0, prev - 1))}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-ink/75 hover:text-ink hover:bg-paper disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft size={16} />
                      <span>Previous Step</span>
                    </button>

                    <div className="text-xs text-mutedBlue font-mono font-medium">
                      Step {activeWorkflowIndex + 1} of 9
                    </div>

                    <button
                      disabled={activeWorkflowIndex === factoryWorkflowSteps.length - 1}
                      onClick={() => setActiveWorkflowIndex(prev => Math.min(factoryWorkflowSteps.length - 1, prev + 1))}
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold bg-blue text-white hover:brightness-105 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-blue/20"
                    >
                      <span>Next Step</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </section>

          {/* =========================================================
              SECTION 4: MANAGEMENT VIEW (Unified Executive View)
          ========================================================== */}
          <section className="mb-24 md:mb-32">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-[11px] uppercase tracking-widest mb-4">
                <LineChart size={13} />
                <span>Executive Command</span>
              </div>
              <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-5 leading-tight">
                How management receives the complete view:{" "}
                <span className="text-primary italic font-light">See what is happening across the business.</span>
              </h2>
              <p className="text-black/75 text-base sm:text-lg leading-relaxed">
                Know what requires attention and assign the next action from one connected management view. Executives monitor operational bottlenecks alongside financial commitments in real time.
              </p>
            </div>

            {/* 12 Indicators Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {managementViewCards.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-neutral-50 border border-black/10 hover:border-primary/40 hover:bg-white hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-black/50 bg-black/5 px-2 py-0.5 rounded">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="text-black font-bold text-base tracking-tight mb-1">
                      {item.title}
                    </h4>
                    <p className="text-black/60 text-xs leading-snug">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* =========================================================
              SECTION 5: INTEGRATIONS (Tally, Applications & Marketplaces)
              (Screenshot 2: Integration or system-connection screenshot)
          ========================================================== */}
          <section className="mb-24 md:mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
              
              {/* Left: Integrations Copy & Categories */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-primary font-body text-[11px] md:text-xs uppercase tracking-[0.35em] font-bold block mb-3">
                    Integrations Layer
                  </span>
                  <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight mb-4">
                    Works with the systems <span className="text-primary italic font-light">you already use.</span>
                  </h2>
                  <p className="text-black/85 text-base sm:text-lg font-medium leading-relaxed mb-3">
                    Whizunik Command is an operating layer, not an ERP replacement. It can connect with accounting platforms such as Tally and other web-based applications so information can move between the systems that already run the business.
                  </p>
                  <p className="text-black/60 text-xs sm:text-sm leading-relaxed">
                    Integration scope depends on the system and implementation requirements. Designed to prevent double entry while respecting your statutory accounting environment.
                  </p>
                </div>

                {/* Visual Flow Indicator */}
                <div className="p-4 rounded-2xl bg-neutral-50 border border-black/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-black/50 block mb-2">
                    Recommended Visual Flow:
                  </span>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-black/85">
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-black/10 shadow-2xs">Existing Systems</span>
                    <ChevronRight size={14} className="text-primary shrink-0" />
                    <span className="px-2.5 py-1 rounded-lg bg-primary text-white shadow-xs">Whizunik Command</span>
                    <ChevronRight size={14} className="text-primary shrink-0" />
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-black/10 shadow-2xs">Workflows</span>
                    <ChevronRight size={14} className="text-primary shrink-0" />
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-black/10 shadow-2xs">Management View</span>
                  </div>
                </div>

                {/* 6 Integration Categories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {integrationCategories.map((cat) => (
                    <div key={cat.title} className="p-4 rounded-xl bg-neutral-50 border border-black/10 hover:border-primary/30 transition-colors">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-primary block mb-1">
                        {cat.tag}
                      </span>
                      <h4 className="font-bold text-black text-sm mb-1">{cat.title}</h4>
                      <p className="text-black/65 text-xs leading-relaxed">{cat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Platform Screenshot 2 (Marketplace & Channel Integration) */}
              <div className="lg:col-span-6">
                <div className="relative group rounded-3xl p-3 bg-neutral-100/80 border border-black/10 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between px-3 py-2 border-b border-black/5 mb-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                      <span className="font-bold text-black uppercase tracking-wider text-[10px]">
                        Live Platform View • System & Marketplace Integration
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedImage("/assets/hub/marketplace-integration.png")}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-black/10 text-primary text-[10px] font-bold hover:bg-primary hover:text-white transition-colors"
                    >
                      <Maximize2 size={11} />
                      <span>Zoom View</span>
                    </button>
                  </div>

                  <div 
                    onClick={() => setSelectedImage("/assets/hub/marketplace-integration.png")}
                    className="relative rounded-2xl overflow-hidden cursor-pointer bg-white border border-black/5"
                  >
                    <img
                      src="/assets/hub/marketplace-integration.png"
                      alt="System Connection & Marketplace Integration in Whizunik Command"
                      className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-white text-xs font-bold drop-shadow">Click to inspect full platform screen</span>
                    </div>
                  </div>

                  <div className="p-3 mt-2 text-center">
                    <p className="text-xs font-semibold text-black/70">
                      Actual platform screen: <strong className="text-primary font-bold">Marketplace & Systems Hub</strong> showing order synchronization, stock allocation ledger, and carrier dispatch integrations.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* =========================================================
              SECTION 6: IMPLEMENTATION APPROACH (Expand Horizontally)
          ========================================================== */}
          <section className="mb-24 md:mb-32">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary font-body text-[11px] md:text-xs uppercase tracking-[0.35em] font-bold mb-3 inline-block">
                Rollout Philosophy
              </span>
              <h3 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
                Implementation begins with one workflow{" "}
                <span className="text-primary italic font-light">and expands.</span>
              </h3>
              <p className="text-black/65 text-sm md:text-base leading-relaxed">
                You do not have to disrupt your entire organization on day one. Whizunik Command starts with a single critical workflow and expands across departments as your teams build confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {implementationSteps.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="p-6 rounded-3xl bg-neutral-50 border border-black/10 hover:border-primary/40 hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-primary text-xs font-bold tracking-wider">{item.step}</span>
                    <h4 className="text-black font-bold text-xl mt-1 mb-2 tracking-tight">{item.name}</h4>
                    <p className="text-black/65 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* =========================================================
              FINAL CTA SECTION: REQUEST A WALKTHROUGH
          ========================================================== */}
          <div className="p-10 sm:p-14 rounded-3xl bg-neutral-50 border border-primary/25 text-center max-w-3xl mx-auto shadow-sm">
            <h3 className="serif-headline text-3xl sm:text-4xl font-bold text-black mb-4">
              See connected operations <span className="text-primary italic font-light">for your business.</span>
            </h3>
            <p className="text-black/70 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto font-medium">
              We'll walk you through how your specific workflows, handoffs, and accounting integrations connect inside Whizunik Command.
            </p>
            <Magnetic>
              <Link
                to="/contact?type=walkthrough"
                className="relative overflow-hidden inline-flex items-center gap-3 px-9 py-4 sm:py-5 rounded-full bg-primary text-white text-xs sm:text-sm font-bold uppercase tracking-[0.2em] hover:shadow-[0_16px_40px_rgba(47,99,255,0.45)] hover:brightness-105 active:scale-[0.98] transition-all duration-300 shadow-xl shadow-primary/25 group"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                <span className="relative z-10">Request a Walkthrough</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </Magnetic>
          </div>

        </div>
      </main>

      {/* Screenshot Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full max-h-[90vh] bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <div className="flex items-center justify-between px-6 py-4 bg-black/60 border-b border-white/10 text-white text-xs">
                <span className="font-bold tracking-wide">Live Platform Screen Inspection</span>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="overflow-auto max-h-[calc(90vh-60px)] p-2 bg-neutral-950 flex items-center justify-center">
                <img
                  src={selectedImage}
                  alt="Expanded Platform Screen"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default HowItWorks;
