import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Maximize2, 
  X, 
  Sparkles, 
  ShoppingCart, 
  Package, 
  Warehouse, 
  Coins, 
  ShieldCheck, 
  LineChart, 
  ListTodo, 
  ArrowUpRight, 
  FileCheck2,
  ChevronRight,
  TrendingUp,
  Clock,
  Boxes,
  Truck,
  ArrowDownLeft,
  Check
} from "lucide-react";
import Magnetic from "./Magnetic";

// Role workspaces data
const roleWorkspaces = [
  {
    id: "sales",
    name: "Sales",
    icon: ShoppingCart,
    tagline: "Manage customers, Sales Orders, customer acceptance, invoicing requirements and collection follow-up.",
    screenshot: "/assets/hub/sales-workbench.png",
    caption: "Sales Workbench • Order commitments & customer accounts",
    points: [
      "Manage customer master & commercial relationship context",
      "Draft and confirm verified Sales Orders (SO) with pricing policies",
      "Track customer acceptance, credit approvals & delivery milestones",
      "Monitor invoicing prerequisites and proactive collection follow-up",
    ],
    sampleAction: "Sales Order #SO-8820 waiting for customer credit acceptance",
  },
  {
    id: "procurement",
    name: "Procurement",
    icon: Package,
    tagline: "Manage suppliers, Purchase Orders, supplier invoices and purchasing workflows.",
    screenshot: "/assets/hub/procurement-workbench.png",
    caption: "Procurement Workbench • Supplier commitments & goods receipt",
    points: [
      "Manage approved suppliers and active rate contracts",
      "Issue Purchase Orders (PO) linked directly to real customer demand",
      "Track supplier invoices, advance payments, and 3-way reconciliation",
      "Drive purchasing workflows with complete lot and price traceability",
    ],
    sampleAction: "Purchase Order #PO-4091 awaiting Checker validation",
  },
  {
    id: "warehouse",
    name: "Warehouse",
    icon: Warehouse,
    tagline: "Manage goods receipt, GRN, putaway, stock movement and dispatch.",
    screenshot: "/assets/hub/warehouse-control.png",
    caption: "Warehouse Control • Inward QC, stock staging & gate dispatches",
    points: [
      "Confirm physical goods receipt with authentic GRN inspection",
      "Stock only increases when GRN is confirmed on the dock",
      "Stock only decreases when physical dispatch leaves the facility gate",
      "Manage internal bin movements, QC staging, and warehouse putaway",
    ],
    sampleAction: "GRN #GRN-1049 awaiting physical dock count confirmation",
  },
  {
    id: "finance",
    name: "Finance & Treasury",
    icon: Coins,
    tagline: "Manage invoices, receivables, payables, receipts, payments and cash visibility.",
    screenshot: "/assets/hub/finance-workbench.png",
    caption: "Finance & Cash Command • 13-week runway, ledger & collections",
    points: [
      "Manage sales receivables aging and supplier payment schedules",
      "Record actual receipts and payments only when realized in bank statement",
      "Maintain strict separation between projected cash and available liquidity",
      "Forward-looking 13-week cash forecasting based on verified business events",
    ],
    sampleAction: "Payment voucher ₹4,50,000 pending Treasury disbursement",
  },
  {
    id: "checker",
    name: "Checker / Approvals",
    icon: ShieldCheck,
    tagline: "Review, approve or return transactions before they progress to next departments.",
    screenshot: "/assets/hub/workflow-queue.png",
    caption: "Checker Action Desk • Two-man rule verification & audit control",
    points: [
      "Review high-value transactions before departmental progression",
      "One-click Approve to release to downstream fulfillment desks",
      "Return for Correction with clear audit annotations and notes",
      "Preserve an unalterable audit trail across the transaction lifecycle",
    ],
    sampleAction: "Invoice #INV-290 pending Checker sign-off before dispatch",
  },
];

// Management pulse metrics
const commandCenterMetrics = [
  { label: "Sales Active", val: "₹1.48 Cr", sub: "14 active deals in progress" },
  { label: "Receivables", val: "₹62.5 L", sub: "38 invoices issued" },
  { label: "Payables", val: "₹41.2 L", sub: "Scheduled vendor payouts" },
  { label: "Available Cash", val: "₹89.4 L", sub: "Verified realized bank balance" },
  { label: "Expected Collections", val: "₹34.0 L", sub: "Next 14 business days" },
  { label: "Expected Payments", val: "₹22.8 L", sub: "Next 14 business days" },
  { label: "Overdues", val: "4 Flags", sub: "Immediate resolution queue" },
  { label: "Pending Actions", val: "7 Tasks", sub: "Across 3 departmental desks" },
];

const transactionSequence = [
  { step: "01", name: "Order", actor: "Sales", desc: "Commercial terms logged once at inception" },
  { step: "02", name: "Approval", actor: "Checker", desc: "Audit and policy gates validated" },
  { step: "03", name: "Procurement", actor: "Procurement", desc: "PO tied to verified bill of materials" },
  { step: "04", name: "Invoice", actor: "Finance", desc: "Commercial and tax details locked" },
  { step: "05", name: "Payment", actor: "Treasury", desc: "Bank remittances realized in books" },
  { step: "06", name: "Receipt / Dispatch", actor: "Warehouse", desc: "Physical gate movement updates stock" },
  { step: "07", name: "Management", actor: "Executive", desc: "Unified consolidated visibility" },
];

export const CommandProductScreens = () => {
  const [activeWorkspace, setActiveWorkspace] = useState(roleWorkspaces[0].id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const currentWorkspace = roleWorkspaces.find((w) => w.id === activeWorkspace) || roleWorkspaces[0];
  const WorkspaceIcon = currentWorkspace.icon;

  return (
    <div className="relative w-full">
      
      {/* =========================================================================
          SCREEN 1: COMMAND OVERVIEW (immediately below the hero)
          Caption: One connected operating flow
      ========================================================================== */}
      <section className="py-16 md:py-24 bg-white" id="command-overview">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12">
          
          {/* Section Header with exact caption */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-primary font-body text-[11px] md:text-xs uppercase tracking-[0.35em] font-bold mb-3 inline-block">
              Presentation Screen 1 • Command Overview
            </span>
            <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-4">
              One connected <span className="text-primary italic font-light">operating flow.</span>
            </h2>
            <p className="text-black/75 text-base sm:text-lg leading-relaxed font-normal">
              Whizunik Command brings your entire business operations into a unified interface: connecting Sales, Procurement, Checker / approvals, Finance, Warehouse, and Management.
            </p>
          </div>

          {/* 6 Connected Workspaces Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
            {[
              { name: "Sales", icon: ShoppingCart },
              { name: "Procurement", icon: Package },
              { name: "Checker / Approvals", icon: ShieldCheck },
              { name: "Finance", icon: Coins },
              { name: "Warehouse", icon: Warehouse },
              { name: "Management", icon: LineChart },
            ].map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.name}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-black/5 text-xs font-semibold text-black/80"
                >
                  <Icon size={14} className="text-primary" />
                  <span>{node.name}</span>
                </div>
              );
            })}
          </div>

          {/* Screenshot 1 Container with Lightbox Trigger */}
          <div className="relative group max-w-5xl mx-auto rounded-3xl p-3 sm:p-4 bg-neutral-100 border border-black/10 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between px-3 py-2 border-b border-black/5 mb-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-black uppercase tracking-wider text-[11px]">
                  Actual Platform Screen • Whizunik Command Overview
                </span>
              </div>
              <button
                onClick={() => setSelectedImage("/assets/hub/dashboard-overview.png")}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/10 text-primary text-xs font-bold hover:bg-primary hover:text-white transition-colors"
              >
                <Maximize2 size={12} />
                <span>Expand Fullscreen</span>
              </button>
            </div>

            <div 
              onClick={() => setSelectedImage("/assets/hub/dashboard-overview.png")}
              className="relative rounded-2xl overflow-hidden cursor-pointer bg-white border border-black/5"
            >
              <img
                src="/assets/hub/dashboard-overview.png"
                alt="Whizunik Command Overview Platform Screen"
                className="w-full h-auto object-cover group-hover:scale-[1.008] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white text-xs sm:text-sm font-bold drop-shadow">
                  Caption: <strong>One connected operating flow</strong> • Click to inspect platform dashboard
                </span>
              </div>
            </div>

            <div className="p-3 text-center">
              <p className="text-xs sm:text-sm font-semibold text-black/70">
                Caption: <strong className="text-primary font-bold">One connected operating flow</strong> — Real platform view uniting sales commitments, purchase orders, inventory counts, and treasury realization.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SCREEN 2: MANAGEMENT COMMAND CENTRE (after overview)
          Caption: See the business as it moves
      ========================================================================== */}
      <section className="py-16 md:py-24 bg-neutral-50/70 border-y border-black/5" id="management-command-centre">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12">
          
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="text-primary font-body text-[11px] md:text-xs uppercase tracking-[0.35em] font-bold mb-3 block">
              Presentation Screen 2 • Management Command Centre
            </span>
            <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-4">
              See the business <span className="text-primary italic font-light">as it moves.</span>
            </h2>
            <p className="text-black/75 text-base sm:text-lg leading-relaxed font-normal">
              Whizunik Command brings operational and financial activity together so executives can see where the business stands, what is expected next, and what requires immediate attention.
            </p>
          </div>

          {/* Executive Real-Time Pulse Metric Cards */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-sm mb-12">
            <div className="flex flex-wrap items-center justify-between pb-5 border-b border-black/10 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <LineChart size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-black text-base">Executive Real-Time Pulse</h4>
                  <p className="text-black/50 text-xs font-medium">Live consolidated operations, receipts & payments</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="text-emerald-700 text-xs font-bold uppercase tracking-wider">Live System Sync</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {commandCenterMetrics.map((item, idx) => (
                <div
                  key={item.label}
                  className="p-4 sm:p-5 rounded-2xl bg-neutral-50/80 border border-black/5 hover:border-primary/40 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-black/50 text-[10px] font-bold uppercase tracking-wider">{item.label}</p>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-black tracking-tight mb-1">{item.val}</p>
                  <p className="text-black/55 text-[11px] leading-tight font-medium">{item.sub}</p>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div className="space-y-1">
                <p className="text-black font-bold text-sm sm:text-base">Expected receipts and payments vs verified actuals</p>
                <p className="text-black/70 text-xs sm:text-sm">
                  Management sees operational bottlenecks alongside the real-time cash, debtor position, and outstanding commitments.
                </p>
              </div>
              <Link
                to="/contact?type=walkthrough"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-xs font-bold tracking-widest uppercase hover:brightness-110 shrink-0 self-start sm:self-auto shadow-sm"
              >
                <span>Request Walkthrough</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Actual Platform Screenshot for Screen 2 */}
            <div className="relative group rounded-3xl p-3 sm:p-4 bg-neutral-100/90 border border-black/10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between px-3 py-2 border-b border-black/5 mb-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-bold text-black uppercase tracking-wider text-[11px]">
                    Live Platform View • Executive Real-Time Pulse & Demand Forecasting
                  </span>
                </div>
                <button
                  onClick={() => setSelectedImage("/assets/hub/sku-forecast.png")}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/10 text-primary text-xs font-bold hover:bg-primary hover:text-white transition-colors"
                >
                  <Maximize2 size={12} />
                  <span>Expand Fullscreen</span>
                </button>
              </div>

              <div 
                onClick={() => setSelectedImage("/assets/hub/sku-forecast.png")}
                className="relative rounded-2xl overflow-hidden cursor-pointer bg-white border border-black/5"
              >
                <img
                  src="/assets/hub/sku-forecast.png"
                  alt="Management Command Centre Screen"
                  className="w-full h-auto object-cover group-hover:scale-[1.008] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white text-xs sm:text-sm font-bold drop-shadow">
                    Caption: <strong>See the business as it moves</strong> • Click to inspect management dashboard
                  </span>
                </div>
              </div>

              <div className="p-3 text-center">
                <p className="text-xs sm:text-sm font-semibold text-black/70">
                  Caption: <strong className="text-primary font-bold">See the business as it moves</strong> — Operational and financial activity united into one executive view with live system sync.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SCREEN 3: ROLE WORKSPACES (after management view)
          Caption: Every team sees the work it owns
      ========================================================================== */}
      <section className="py-16 md:py-24 bg-white" id="role-workspaces">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <span className="text-primary font-body text-[11px] md:text-xs uppercase tracking-[0.35em] font-bold mb-3 inline-block">
              Presentation Screen 3 • Role Workspaces
            </span>
            <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-4">
              Every team sees <span className="text-primary italic font-light">the work it owns.</span>
            </h2>
            <p className="text-black/75 text-base sm:text-lg leading-relaxed font-normal">
              Tailored workspace views for Sales, Procurement, Warehouse, Finance and Treasury. Each team works from an interface designed around its specific operational mandate.
            </p>
          </div>

          {/* Role Tabs Switcher */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 p-1.5 rounded-full bg-neutral-100 max-w-fit mx-auto border border-black/5">
            {roleWorkspaces.map((role) => {
              const Icon = role.icon;
              const isActive = activeWorkspace === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveWorkspace(role.id)}
                  className={`relative px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 z-10 cursor-pointer ${
                    isActive ? "text-white" : "text-black/70 hover:text-black"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeRoleTab"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-primary rounded-full z-[-1] shadow-md shadow-primary/25"
                    />
                  )}
                  <Icon size={15} />
                  <span>{role.name}</span>
                </button>
              );
            })}
          </div>

          {/* Role Screen Display Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWorkspace.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="p-6 sm:p-10 rounded-3xl bg-neutral-50 border border-black/10 shadow-sm max-w-5xl mx-auto"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-black/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-xs">
                    <WorkspaceIcon size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black tracking-tight">{currentWorkspace.name} Workspace</h3>
                    <p className="text-primary text-xs sm:text-sm font-semibold">{currentWorkspace.tagline}</p>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-black/10 text-xs text-black/70 max-w-sm">
                  <span className="text-[10px] uppercase font-bold text-primary block mb-0.5">Assigned Queue Item:</span>
                  <span className="font-semibold text-black">{currentWorkspace.sampleAction}</span>
                </div>
              </div>

              {/* Actual Platform Screenshot for Active Workspace */}
              <div className="relative group rounded-2xl overflow-hidden mb-8 border border-black/10 bg-white shadow-md">
                <img
                  src={currentWorkspace.screenshot}
                  alt={`${currentWorkspace.name} Workspace Screen`}
                  className="w-full h-auto object-cover group-hover:scale-[1.008] transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => setSelectedImage(currentWorkspace.screenshot)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 hover:bg-black text-white text-xs font-bold backdrop-blur-sm transition-colors"
                  >
                    <Maximize2 size={12} />
                    <span>View Screen</span>
                  </button>
                </div>
                <div className="p-3 bg-neutral-100/90 text-center border-t border-black/5 text-xs text-black/75">
                  Live Screenshot: <strong className="text-primary font-bold">{currentWorkspace.caption}</strong>
                </div>
              </div>

              {/* Responsibilities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {currentWorkspace.points.map((pt) => (
                  <div key={pt} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-black/5 shadow-2xs">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-black/85 text-xs sm:text-sm font-medium leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* =========================================================================
          SCREEN 4: MY QUEUE (after role workspaces)
          Caption: Everyone knows what to do next
      ========================================================================== */}
      <section className="py-16 md:py-24 bg-neutral-50/70 border-y border-black/5" id="my-queue">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
            
            {/* Left: My Queue Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-primary font-body text-[11px] md:text-xs uppercase tracking-[0.35em] font-bold block mb-3">
                  Presentation Screen 4 • My Queue
                </span>
                <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight mb-4">
                  Everyone knows <span className="text-primary italic font-light">what to do next.</span>
                </h2>
                <p className="text-black/75 text-base sm:text-lg leading-relaxed">
                  Shows tasks, approvals, documents, collections follow-ups and exceptions. As transactions progress, tasks populate the responsible user's queue automatically.
                </p>
              </div>

              <div className="space-y-3.5">
                {[
                  { title: "Tasks & Workflows", desc: "Commercial actions generated automatically from verified business events." },
                  { title: "Approvals & Verifications", desc: "Two-man rule check for high-value purchases, price deviations, and dispatches." },
                  { title: "Documents & Compliance", desc: "Pre-filled invoices, GRN reports, and locked shipping documents ready for release." },
                  { title: "Collections Follow-ups", desc: "Aging receivables flagged with customer contact histories and next action dates." },
                  { title: "Exceptions & Holds", desc: "QC rejections and order credit holds raised immediately for executive resolution." },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-2xl bg-white border border-black/10 flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <ListTodo size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-black text-sm">{item.title}</h4>
                      <p className="text-black/65 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: My Queue Live Platform Screenshot */}
            <div className="lg:col-span-6">
              <div className="relative group rounded-3xl p-3 bg-white border border-black/10 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between px-3 py-2 border-b border-black/5 mb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                    <span className="font-bold text-black uppercase tracking-wider text-[10px]">
                      Live Platform View • My Queue & Approvals
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedImage("/assets/hub/workflow-queue.png")}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-100 text-primary text-[10px] font-bold hover:bg-primary hover:text-white transition-colors"
                  >
                    <Maximize2 size={11} />
                    <span>Expand</span>
                  </button>
                </div>

                <div 
                  onClick={() => setSelectedImage("/assets/hub/workflow-queue.png")}
                  className="relative rounded-2xl overflow-hidden cursor-pointer border border-black/5"
                >
                  <img
                    src="/assets/hub/workflow-queue.png"
                    alt="My Queue Live Platform View in Whizunik Command"
                    className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-bold drop-shadow">Caption: Everyone knows what to do next</span>
                  </div>
                </div>

                <div className="p-3 text-center">
                  <p className="text-xs font-semibold text-black/70">
                    Caption: <strong className="text-primary font-bold">Everyone knows what to do next</strong> — Live task queue with zero separate spreadsheets or external to-do lists.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SCREEN 5: CONNECTED TRANSACTION VIEW (near end of page)
          Caption: One transaction. One connected flow
      ========================================================================== */}
      <section className="py-16 md:py-24 bg-white" id="connected-transaction-view">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-primary font-body text-[11px] md:text-xs uppercase tracking-[0.35em] font-bold mb-3 inline-block">
              Presentation Screen 5 • Connected Transaction View
            </span>
            <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-4">
              One transaction. <span className="text-primary italic font-light">One connected flow.</span>
            </h2>
            <p className="text-black/75 text-base sm:text-lg leading-relaxed font-normal">
              From inception to bank realization, information travels along the full transaction sequence:
            </p>
            <div className="mt-4 p-3 rounded-2xl bg-neutral-50 border border-black/10 text-xs sm:text-sm font-bold text-primary">
              Order → Approval → Procurement → Invoice → Payment → Receipt / Dispatch → Management
            </div>
          </div>

          {/* Stepper Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 mb-14">
            {transactionSequence.map((item, idx) => (
              <div
                key={item.step}
                className="p-4 rounded-2xl bg-neutral-50 border border-black/10 hover:border-primary/40 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-primary text-xs font-bold">{item.step}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-black/50 bg-black/5 px-2 py-0.5 rounded">
                      {item.actor}
                    </span>
                  </div>
                  <h4 className="font-bold text-black text-sm mb-1">{item.name}</h4>
                  <p className="text-black/60 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Live Platform Screenshot for Screen 5 */}
          <div className="relative group max-w-5xl mx-auto rounded-3xl p-3 sm:p-4 bg-neutral-100/90 border border-black/10 shadow-lg hover:shadow-xl transition-all duration-300 mb-14">
            <div className="flex items-center justify-between px-3 py-2 border-b border-black/5 mb-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span className="font-bold text-black uppercase tracking-wider text-[11px]">
                  Live Platform View • Connected Transaction View & Traceability
                </span>
              </div>
              <button
                onClick={() => setSelectedImage("/assets/hub/workflow-queue.png")}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/10 text-primary text-xs font-bold hover:bg-primary hover:text-white transition-colors"
              >
                <Maximize2 size={12} />
                <span>Expand Fullscreen</span>
              </button>
            </div>

            <div 
              onClick={() => setSelectedImage("/assets/hub/workflow-queue.png")}
              className="relative rounded-2xl overflow-hidden cursor-pointer bg-white border border-black/5"
            >
              <img
                src="/assets/hub/workflow-queue.png"
                alt="Connected Transaction View Screen in Whizunik Command"
                className="w-full h-auto object-cover group-hover:scale-[1.008] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white text-xs sm:text-sm font-bold drop-shadow">
                  Caption: <strong>One transaction. One connected flow</strong> • Click to inspect connected transaction stream
                </span>
              </div>
            </div>

            <div className="p-3 text-center">
              <p className="text-xs sm:text-sm font-semibold text-black/70">
                Caption: <strong className="text-primary font-bold">One transaction. One connected flow</strong> — Real platform view uniting sales commitments, purchase orders, inventory counts, and treasury realization.
              </p>
            </div>
          </div>

          {/* Product Hierarchy Core Affirmation Banner */}
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 text-white relative overflow-hidden mb-16 shadow-2xl">
            <div className="max-w-3xl relative z-10 space-y-4">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] block">
                Whizunik Operating Architecture
              </span>
              <h3 className="serif-headline text-2xl sm:text-4xl font-bold text-white leading-tight">
                Whizunik Command connects the work. <br />
                <span className="text-white/70 font-normal">Integrations connect the systems.</span> <br />
                <span className="text-primary italic font-light">Dashboards help management decide.</span> <br />
                <span className="text-white/80 font-normal">Strategic Advisory helps when capital becomes the question.</span>
              </h3>
            </div>
            <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
          </div>

        </div>
      </section>

      {/* Lightbox Image Zoom Modal */}
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

    </div>
  );
};

export default CommandProductScreens;
