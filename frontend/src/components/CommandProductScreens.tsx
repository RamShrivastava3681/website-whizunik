import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
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
  ChevronLeft,
  TrendingUp,
  Clock,
  Boxes,
  Truck,
  ArrowDownLeft,
  Check,
  Factory,
  Building2,
  Store,
  FileSpreadsheet,
  Database,
  ArrowRightLeft,
  CreditCard,
  AlertTriangle,
  RefreshCw,
  Cpu,
  Activity,
  Zap,
  CheckCheck,
  SlidersHorizontal
} from "lucide-react";
import Magnetic from "./Magnetic";

// Role workspaces data (All numbers strictly in $ and international notation: Millions/Thousands)
const roleWorkspaces = [
  {
    id: "sales",
    name: "Sales",
    icon: ShoppingCart,
    tagline: "Manage customers, Sales Orders, customer acceptance, invoicing requirements and collection follow-up.",
    caption: "Sales Workbench • Order commitments & customer accounts",
    points: [
      "Manage customer master & commercial relationship context",
      "Draft and confirm verified Sales Orders (SO) with locked pricing policies",
      "Track customer acceptance, credit approvals & delivery milestones",
      "Monitor invoicing prerequisites and proactive collection follow-up",
    ],
    sampleAction: "Sales Order #SO-8820 waiting for customer credit acceptance",
    metrics: [
      { label: "Active Deals", val: "14 Orders" },
      { label: "Pipeline Value", val: "$1.85M" },
      { label: "Credit Approvals", val: "3 Pending" },
    ],
    flowNodes: [
      { step: "01", name: "Inquiry & Terms", desc: "Pricing rules & tax codes applied" },
      { step: "02", name: "Credit Check", desc: "Customer exposure verified" },
      { step: "03", name: "SO Confirmed", desc: "Commercial terms locked" },
      { step: "04", name: "Checker Release", desc: "Handoff to Procurement & BOM" },
    ]
  },
  {
    id: "procurement",
    name: "Procurement",
    icon: Package,
    tagline: "Manage suppliers, Purchase Orders, supplier invoices and purchasing workflows.",
    caption: "Procurement Workbench • Supplier commitments & goods receipt",
    points: [
      "Manage approved suppliers and active rate contracts",
      "Issue Purchase Orders (PO) linked directly to real customer demand",
      "Track supplier invoices, advance payments, and 3-way reconciliation",
      "Drive purchasing workflows with complete lot and price traceability",
    ],
    sampleAction: "Purchase Order #PO-4091 awaiting Checker validation",
    metrics: [
      { label: "Open POs", val: "19 Orders" },
      { label: "Shortage BOMs", val: "4 Items" },
      { label: "Vendor Invoices", val: "$495K" },
    ],
    flowNodes: [
      { step: "01", name: "BOM Shortage", desc: "Demand exploded automatically" },
      { step: "02", name: "Vendor Selection", desc: "Rate contract & lead time evaluated" },
      { step: "03", name: "PO Generation", desc: "Purchase order tied to SO" },
      { step: "04", name: "Dock Notice", desc: "Inward shipment alert sent to dock" },
    ]
  },
  {
    id: "factory",
    name: "Factory & Production",
    icon: Factory,
    tagline: "Manage job orders, shopfloor routing, batch planning, machine yields and downtime.",
    caption: "Factory & Production Control • Shopfloor lines, batch scheduling & yield logs",
    points: [
      "Convert confirmed Sales Orders directly into production job orders and batches",
      "Real-time machine scheduling with line capacity and operator allocations",
      "Live shift updates tracking good production, scrap rejects, rework and downtime",
      "Integrated QC release gates preventing non-compliant output from entering finished stock",
    ],
    sampleAction: "Batch #B-309 on Line 2 awaiting operator shift yield log",
    metrics: [
      { label: "Active Batches", val: "8 In-Line" },
      { label: "Shopfloor Yield", val: "98.4%" },
      { label: "Downtime Alerts", val: "0 Critical" },
    ],
    flowNodes: [
      { step: "01", name: "Job Order Gen", desc: "Customer SO explodes to production order" },
      { step: "02", name: "Shopfloor Routing", desc: "Assigned to Line 2 machine sequence" },
      { step: "03", name: "Hourly Shift Logs", desc: "Operators log good units, scrap & delays" },
      { step: "04", name: "QC Sign-off", desc: "Batch released directly to FG warehouse" },
    ]
  },
  {
    id: "warehouse",
    name: "Warehouse",
    icon: Warehouse,
    tagline: "Manage goods receipt, GRN, putaway, stock movement and dispatch.",
    caption: "Warehouse Control • Inward QC, stock staging & gate dispatches",
    points: [
      "Confirm physical goods receipt with authentic GRN inspection",
      "Stock only increases when GRN is confirmed on the dock",
      "Stock only decreases when physical dispatch leaves the facility gate",
      "Manage internal bin movements, QC staging, and warehouse putaway",
    ],
    sampleAction: "GRN #GRN-1049 awaiting physical dock count confirmation",
    metrics: [
      { label: "Pending GRN", val: "6 Inwards" },
      { label: "QC Inspections", val: "3 In-Progress" },
      { label: "Ready to Gate", val: "8 Dispatches" },
    ],
    flowNodes: [
      { step: "01", name: "Gate Inward", desc: "Carrier docket matched to PO" },
      { step: "02", name: "Dock QC Check", desc: "Physical count & defect check" },
      { step: "03", name: "GRN Confirmation", desc: "Stock ledger increments strictly now" },
      { step: "04", name: "Gate Dispatch", desc: "Physical gate pass updates order" },
    ]
  },
  {
    id: "finance",
    name: "Finance & Treasury",
    icon: Coins,
    tagline: "Manage invoices, receivables, payables, receipts, payments and cash visibility.",
    caption: "Finance & Cash Command • 13-week runway, ledger & collections",
    points: [
      "Manage sales receivables aging and supplier payment schedules",
      "Record actual receipts and payments only when realized in bank statement",
      "Maintain strict separation between projected cash and available liquidity",
      "Forward-looking 13-week cash forecasting based on verified business events",
    ],
    sampleAction: "Payment voucher $55,000 pending Treasury disbursement",
    metrics: [
      { label: "Available Cash", val: "$1.12M" },
      { label: "Expected Collections", val: "$410K" },
      { label: "Payables Due", val: "$275K" },
    ],
    flowNodes: [
      { step: "01", name: "3-Way Match", desc: "PO, GRN & supplier invoice matched" },
      { step: "02", name: "Tax Invoice Push", desc: "Statutory books synced with Tally/ERP" },
      { step: "03", name: "Bank Realization", desc: "Actual cash posted from bank feed" },
      { step: "04", name: "13-Wk Forecast", desc: "Liquidity runway updated in real time" },
    ]
  },
  {
    id: "checker",
    name: "Checker / Approvals",
    icon: ShieldCheck,
    tagline: "Review, approve or return transactions before they progress to next departments.",
    caption: "Checker Action Desk • Two-man rule verification & audit control",
    points: [
      "Review high-value transactions before departmental progression",
      "One-click Approve to release to downstream fulfillment desks",
      "Return for Correction with clear audit annotations and notes",
      "Preserve an unalterable audit trail across the transaction lifecycle",
    ],
    sampleAction: "Invoice #INV-290 pending Checker sign-off before dispatch",
    metrics: [
      { label: "Awaiting Sign-off", val: "5 Approvals" },
      { label: "Returned for Edits", val: "1 Item" },
      { label: "Audit Logged", val: "100% Policy" },
    ],
    flowNodes: [
      { step: "01", name: "Event Triggers", desc: "High-value action or price deviation" },
      { step: "02", name: "Policy Evaluation", desc: "Commercial margin & risk evaluated" },
      { step: "03", name: "Maker-Checker Sign", desc: "Authorized sign-off with audit note" },
      { step: "04", name: "Downstream Release", desc: "Desk unlocks for execution" },
    ]
  },
];

// Management pulse metrics (All in $ and Millions/Thousands)
const commandCenterMetrics = [
  { label: "Sales Active", val: "$1.85M", sub: "14 active deals in progress" },
  { label: "Receivables", val: "$750K", sub: "38 invoices issued" },
  { label: "Payables", val: "$495K", sub: "Scheduled vendor payouts" },
  { label: "Available Cash", val: "$1.12M", sub: "Verified realized bank balance" },
  { label: "Expected Collections", val: "$410K", sub: "Next 14 business days" },
  { label: "Expected Payments", val: "$275K", sub: "Next 14 business days" },
  { label: "Overdues", val: "4 Flags", sub: "Immediate resolution queue" },
  { label: "Pending Actions", val: "7 Tasks", sub: "Across 3 departmental desks" },
];

const transactionSequence = [
  { step: "01", name: "Order", actor: "Sales", desc: "Commercial terms logged once at inception", badge: "$128,500 SO" },
  { step: "02", name: "Approval", actor: "Checker", desc: "Audit and policy gates validated", badge: "2-Man Rule" },
  { step: "03", name: "Procurement", actor: "Procurement", desc: "PO tied to verified bill of materials", badge: "Demand Tied" },
  { step: "04", name: "Production", actor: "Factory & Production", desc: "Batch planning, shift updates & QC yield", badge: "Batch Scheduled" },
  { step: "05", name: "Receipt & Stock", actor: "Warehouse", desc: "Dock inspection & physical stock ledger", badge: "Dock Confirmed" },
  { step: "06", name: "Invoice", actor: "Finance", desc: "Commercial and tax details locked upon dispatch", badge: "Tax Locked" },
  { step: "07", name: "Payment", actor: "Treasury", desc: "Bank remittances realized in books", badge: "Bank Verified" },
  { step: "08", name: "Management", actor: "Executive", desc: "Unified consolidated visibility across all operations", badge: "Real-time Pulse" },
];


// Interactive live queue categories (Numbers in $ and International Notation)
const queueCategories = [
  {
    id: "all",
    name: "All Action Items",
    count: 14,
    items: [
      { type: "Approval", dept: "Checker", title: "SO #8820 Credit Policy Deviation", desc: "Customer requested 45-day credit vs standard 30-day policy", priority: "High", time: "12m ago" },
      { type: "Task", dept: "Warehouse", title: "GRN Confirmation for Steel Coils (PO #4091)", desc: "Physical delivery at Dock 3 awaiting inward inspection count", priority: "Medium", time: "24m ago" },
      { type: "Document", dept: "Finance", title: "Generate Tax Invoice & Commercial Docket for Dispatch #DS-204", desc: "Customer acceptance received; ready for logistics carrier handover", priority: "High", time: "42m ago" },
      { type: "Follow-up", dept: "Sales", title: "Receivable Overdue: Apex Industries ($52,000)", desc: "Payment due date exceeded by 7 days; automated reminder queued", priority: "Urgent", time: "1h ago" },
      { type: "Exception", dept: "Shopfloor", title: "BOM Shortage: Packaging Cartons (Batch #B-309)", desc: "Inventory shortfall of 180 units; urgent supplier PO suggested", priority: "Urgent", time: "2h ago" },
    ]
  },
  {
    id: "approvals",
    name: "Approvals & Verifications",
    count: 4,
    items: [
      { type: "Approval", dept: "Checker", title: "SO #8820 Credit Policy Deviation", desc: "Customer requested 45-day credit vs standard 30-day policy", priority: "High", time: "12m ago" },
      { type: "Approval", dept: "Checker", title: "PO #4102 Supplier Price Variance", desc: "Raw material unit rate $14.20/kg vs contract rate $13.80/kg", priority: "Medium", time: "35m ago" },
      { type: "Approval", dept: "Checker", title: "Quality Release for Batch #B-402", desc: "QC inspection completed with 99.1% pass rate; sign-off requested", priority: "Medium", time: "1h ago" },
      { type: "Approval", dept: "Finance", title: "Vendor Payment Voucher $55,000", desc: "Advance payout against verified PO #4088 scheduled today", priority: "Urgent", time: "2h ago" },
    ]
  },
  {
    id: "tasks",
    name: "Tasks & Workflows",
    count: 5,
    items: [
      { type: "Task", dept: "Warehouse", title: "GRN Confirmation for Steel Coils (PO #4091)", desc: "Physical delivery at Dock 3 awaiting inward inspection count", priority: "Medium", time: "24m ago" },
      { type: "Task", dept: "Procurement", title: "Release Purchase Order for Carton Packaging", desc: "Auto-generated requirement from BOM shortage check", priority: "Urgent", time: "45m ago" },
      { type: "Task", dept: "Production", title: "Schedule Line 2 for Customer Order #SO-8819", desc: "Materials cleared; ready for machine shop execution", priority: "Normal", time: "2h ago" },
    ]
  },
  {
    id: "documents",
    name: "Documents & Compliance",
    count: 3,
    items: [
      { type: "Document", dept: "Finance", title: "Generate Tax Invoice & Commercial Docket for Dispatch #DS-204", desc: "Customer acceptance received; ready for logistics carrier handover", priority: "High", time: "42m ago" },
      { type: "Document", dept: "Warehouse", title: "Locked Delivery Challan #DC-992", desc: "Pre-filled from verified dispatch staging", priority: "Normal", time: "3h ago" },
    ]
  },
  {
    id: "collections",
    name: "Collections Follow-ups",
    count: 2,
    items: [
      { type: "Follow-up", dept: "Sales", title: "Receivable Overdue: Apex Industries ($52,000)", desc: "Payment due date exceeded by 7 days; automated reminder queued", priority: "Urgent", time: "1h ago" },
      { type: "Follow-up", dept: "Sales", title: "Follow-up Due: Metro Engineering ($26,000)", desc: "Commitment promised for tomorrow morning", priority: "Medium", time: "4h ago" },
    ]
  },
];

export const CommandProductScreens = () => {
  const [activeWorkspace, setActiveWorkspace] = useState(roleWorkspaces[0].id);
  const [activeQueueTab, setActiveQueueTab] = useState("all");
  const [activeMeshNode, setActiveMeshNode] = useState(0);

  const currentWorkspace = roleWorkspaces.find((w) => w.id === activeWorkspace) || roleWorkspaces[0];
  const WorkspaceIcon = currentWorkspace.icon;

  const activeQueue = queueCategories.find(q => q.id === activeQueueTab) || queueCategories[0];

  const meshNodes = [
    { name: "Sales Workbench", role: "Commercial Demand", icon: ShoppingCart, input: "Customer SO", output: "Locked Pricing & BOM Demand", status: "Active" },
    { name: "Checker Gate", role: "Audit & Policy", icon: ShieldCheck, input: "Order Deviations", output: "Two-Man Rule Authorization", status: "Protected" },
    { name: "Procurement Workbench", role: "Supply Commitments", icon: Package, input: "BOM Shortages", output: "Demand-Linked PO", status: "Active" },
    { name: "Factory Floor", role: "Production & Assembly", icon: Factory, input: "BOM & Work Orders", output: "Batch Yield & QC Release", status: "Active" },
    { name: "Warehouse Control", role: "Physical Reality", icon: Warehouse, input: "Physical Deliveries", output: "Authentic Dock GRN & Gate Pass", status: "Synced" },
    { name: "Finance & Treasury", role: "Realized Liquidity", icon: Coins, input: "Bank Statements", output: "13-Week Cash Forecasting", status: "Realized" },
    { name: "Management Pulse", role: "Executive View", icon: LineChart, input: "Live Operations", output: "Single Source of Truth", status: "Live" },
  ];

  return (
    <div className="relative w-full bg-paper">
      
      {/* =========================================================================
          SECTION 1: COMMAND OVERVIEW (immediately below the hero)
      ========================================================================== */}
      <section className="py-16 md:py-24 bg-white border-b border-line" id="command-overview">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="eyebrow block mb-3">
              Operating Platform • Command Overview
            </span>
            <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink mb-4">
              One connected <span className="text-blue italic font-light">operating flow.</span>
            </h2>
            <p className="text-mutedBlue text-base sm:text-lg leading-relaxed font-normal">
              Whizunik Command brings your entire business operations into a unified interface: connecting Sales, Procurement, Checker / approvals, Factory & Production, Warehouse, Finance, and Management.
            </p>
          </div>

          {/* Connected Workspaces Badges in reference teal/light style */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {[
              { name: "Sales", icon: ShoppingCart },
              { name: "Procurement", icon: Package },
              { name: "Checker / Approvals", icon: ShieldCheck },
              { name: "Factory & Production", icon: Factory },
              { name: "Warehouse / Factory", icon: Warehouse },
              { name: "Finance", icon: Coins },
              { name: "Management", icon: LineChart },
            ].map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.name}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-line text-xs font-semibold text-ink shadow-[0_4px_12px_rgba(16,34,73,0.04)] hover:border-blue/50 transition-colors"
                >
                  <Icon size={14} className="text-blue" />
                  <span>{node.name}</span>
                </div>
              );
            })}
          </div>

          {/* DIAGRAM 1: Interactive Operational Architecture Mesh Diagram */}
          <div className="max-w-5xl mx-auto rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#f7fcff] to-[#edf8f7] border border-[#cde3e8] shadow-[0_20px_45px_rgba(16,34,73,0.08)] mb-14">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#cfe0e6] gap-4">
              <div>
                <span className="eyebrow text-blue block mb-1">
                  Architecture Diagram
                </span>
                <h3 className="serif-headline text-xl sm:text-2xl font-bold text-ink tracking-tight">
                  Synchronized Operational Core
                </h3>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dff6eb] border border-[#b8ebd3] text-[#26845d] text-xs font-bold font-mono">
                <span className="w-2 h-2 rounded-full bg-[#26845d] animate-pulse" />
                <span>Zero Double Data Entry • Live Pulse</span>
              </div>
            </div>

            {/* Visual Connected System Mesh */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {meshNodes.map((node, idx) => {
                const NodeIcon = node.icon;
                const isSelected = activeMeshNode === idx;
                return (
                  <div
                    key={node.name}
                    onClick={() => setActiveMeshNode(idx)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                      isSelected 
                        ? "bg-white border-blue shadow-lg ring-2 ring-blue/20 -translate-y-1" 
                        : "bg-white/90 border-line hover:border-blue/50 hover:bg-white hover:-translate-y-0.5 shadow-sm"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isSelected ? "bg-blue text-white" : "bg-blue/10 text-blue"
                      }`}>
                        <NodeIcon size={20} />
                      </div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-light text-teal-accent border border-teal-border">
                        {node.status}
                      </span>
                    </div>

                    <h4 className="font-bold text-ink text-sm mb-0.5">{node.name}</h4>
                    <p className="text-blue text-xs font-semibold mb-3">{node.role}</p>

                    <div className="space-y-1.5 pt-3 border-t border-line text-[11px]">
                      <div className="text-mutedBlue flex items-center justify-between">
                        <span>Input:</span>
                        <span className="font-semibold text-ink">{node.input}</span>
                      </div>
                      <div className="text-mutedBlue flex items-center justify-between">
                        <span>Output:</span>
                        <span className="font-semibold text-blue">{node.output}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Central Synchronized Flow Summary */}
            <div className="p-5 rounded-2xl bg-white border border-[#cde3e8] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center text-blue shrink-0">
                  <Activity size={20} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-ink">
                    Connected Architecture Flow: {meshNodes[activeMeshNode].name}
                  </p>
                  <p className="text-xs text-mutedBlue">
                    Triggered by <strong className="text-ink">{meshNodes[activeMeshNode].input}</strong> ➔ Validated via system rules ➔ Dispatches <strong className="text-blue">{meshNodes[activeMeshNode].output}</strong> downstream in real time.
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-blue shrink-0 px-3.5 py-1.5 rounded-full bg-teal-light border border-teal-border self-start md:self-auto font-mono">
                No Manual Spreadsheets
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: MANAGEMENT COMMAND CENTRE (after overview)
      ========================================================================== */}
      <section className="py-16 md:py-24 bg-paper border-b border-line" id="management-command-centre">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12">
          
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="eyebrow block mb-3">
              Executive Pulse • Management Command Centre
            </span>
            <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink mb-4">
              See the business <span className="text-blue italic font-light">as it moves.</span>
            </h2>
            <p className="text-mutedBlue text-base sm:text-lg leading-relaxed font-normal">
              Whizunik Command brings operational and financial activity together so executives can see where the business stands, what is expected next, and what requires immediate attention.
            </p>
          </div>

          {/* Executive Real-Time Pulse Metric Cards */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-line shadow-[0_16px_35px_rgba(16,34,73,0.06)] mb-12">
            <div className="flex flex-wrap items-center justify-between pb-5 border-b border-line gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center text-blue">
                  <LineChart size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-ink text-base">Executive Real-Time Pulse</h4>
                  <p className="text-mutedBlue text-xs font-medium font-mono">Live consolidated operations, receipts & payments ($ Millions / Thousands)</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#dff6eb] border border-[#b8ebd3] text-[#26845d]">
                <span className="w-2 h-2 rounded-full bg-[#26845d] animate-pulse" />
                <span className="text-xs font-bold font-mono uppercase tracking-wider">Live System Sync</span>
              </div>
            </div>

            {/* Metrics Grid (All in $) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {commandCenterMetrics.map((item) => (
                <div
                  key={item.label}
                  className="p-4 sm:p-5 rounded-2xl bg-paper border border-line hover:border-blue/50 hover:bg-white hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-mutedBlue text-[10px] font-mono font-bold uppercase tracking-wider">{item.label}</p>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue" />
                  </div>
                  <p className="text-xl sm:text-2xl font-bold font-mono text-ink tracking-tight mb-1">{item.val}</p>
                  <p className="text-mutedBlue text-[11px] leading-tight font-medium">{item.sub}</p>
                </div>
              ))}
            </div>

            {/* DIAGRAM 2: 13-Week Cash & Liquidity Runway Diagram */}
            <div className="p-6 sm:p-8 rounded-2xl bg-paper border border-line mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-line gap-3">
                <div>
                  <span className="eyebrow block text-blue mb-1">
                    Liquidity Forecasting Diagram
                  </span>
                  <h5 className="font-bold text-ink text-base">
                    13-Week Realized Liquidity Runway vs Projected Inflows
                  </h5>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="inline-flex items-center gap-1.5 text-[#26845d] font-bold">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#26845d]" />
                    <span>Realized Bank Funds</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-blue font-bold">
                    <span className="w-2.5 h-2.5 rounded-sm bg-blue" />
                    <span>Verified Collections</span>
                  </span>
                </div>
              </div>

              {/* Visual Cash Flow Runway Bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-ink">Realized Bank Balance</span>
                    <span className="font-mono font-bold text-ink">$1,120,000</span>
                  </div>
                  <div className="w-full h-3 bg-neutral-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#26845d] rounded-full" style={{ width: "72%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-ink">Expected 14-Day Customer Collections (From Confirmed SOs)</span>
                    <span className="font-mono font-bold text-blue">+$410,000</span>
                  </div>
                  <div className="w-full h-3 bg-neutral-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue rounded-full" style={{ width: "26%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-ink">Scheduled Vendor Disbursements (Verified POs Due)</span>
                    <span className="font-mono font-bold text-rose-600">-$275,000</span>
                  </div>
                  <div className="w-full h-3 bg-neutral-200 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-500 rounded-full" style={{ width: "18%" }} />
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-line flex flex-wrap items-center justify-between text-xs text-mutedBlue font-medium gap-2">
                <span>Net Projected Working Capital Buffer: <strong className="text-ink font-mono font-bold">$1,255,000</strong></span>
                <span className="text-blue font-bold font-mono">Zero speculative forecasting • 100% verified events</span>
              </div>
            </div>

            {/* Expected receipts callout banner */}
            <div className="p-5 rounded-2xl bg-teal-light border border-teal-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-ink font-bold text-sm sm:text-base">Expected receipts and payments vs verified actuals</p>
                <p className="text-mutedBlue text-xs sm:text-sm">
                  Management sees operational bottlenecks alongside the real-time cash, debtor position, and outstanding commitments.
                </p>
              </div>
              <Link
                to="/contact?type=walkthrough"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue text-white text-xs font-bold tracking-widest uppercase hover:brightness-105 shrink-0 self-start sm:self-auto shadow-md shadow-blue/20"
              >
                <span>Request Walkthrough</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ROLE WORKSPACES (after management view)
      ========================================================================== */}
      <section className="py-16 md:py-24 bg-white border-b border-line" id="role-workspaces">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <span className="eyebrow block mb-3">
              Departmental Workspaces • Role Execution
            </span>
            <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink mb-4">
              Every team sees <span className="text-blue italic font-light">the work it owns.</span>
            </h2>
            <p className="text-mutedBlue text-base sm:text-lg leading-relaxed font-normal">
              Tailored workspace views for Sales, Procurement, Checker, Factory & Production, Warehouse, Finance and Treasury. Each team works from an interface designed around its specific operational mandate.
            </p>
          </div>

          {/* Role Tabs Switcher */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 p-1.5 rounded-full bg-paper max-w-fit mx-auto border border-line">
            {roleWorkspaces.map((role) => {
              const Icon = role.icon;
              const isActive = activeWorkspace === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveWorkspace(role.id)}
                  className={`relative px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 z-10 cursor-pointer ${
                    isActive ? "text-white" : "text-ink/75 hover:text-ink"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeRoleTab"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-blue rounded-full z-[-1] shadow-md shadow-blue/25"
                    />
                  )}
                  <Icon size={15} />
                  <span>{role.name}</span>
                </button>
              );
            })}
          </div>

          {/* Role Workspace Showcase Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWorkspace.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="p-6 sm:p-10 rounded-3xl bg-paper border border-line shadow-[0_16px_35px_rgba(16,34,73,0.06)] max-w-5xl mx-auto"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-line">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue/10 flex items-center justify-center text-blue shadow-xs">
                    <WorkspaceIcon size={24} />
                  </div>
                  <div>
                    <h3 className="serif-headline text-2xl font-bold text-ink tracking-tight">{currentWorkspace.name} Workspace</h3>
                    <p className="text-blue text-xs sm:text-sm font-semibold">{currentWorkspace.tagline}</p>
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-line text-xs text-mutedBlue max-w-sm shadow-xs">
                  <span className="font-mono text-[10px] uppercase font-bold text-blue block mb-0.5">Assigned Queue Item:</span>
                  <span className="font-semibold text-ink">{currentWorkspace.sampleAction}</span>
                </div>
              </div>

              {/* Departmental Metrics Ribbon */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {currentWorkspace.metrics.map((m) => (
                  <div key={m.label} className="p-4 rounded-2xl bg-white border border-line shadow-xs">
                    <p className="text-mutedBlue font-mono text-[10px] font-bold uppercase tracking-wider mb-1">{m.label}</p>
                    <p className="text-lg font-bold font-mono text-ink">{m.val}</p>
                  </div>
                ))}
              </div>

              {/* DIAGRAM 3: Departmental Operational Pipeline Diagram */}
              <div className="p-6 rounded-2xl bg-white border border-line mb-8 shadow-xs">
                <span className="eyebrow block text-blue mb-3">
                  Workflow Execution Pipeline
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {currentWorkspace.flowNodes.map((fn, idx) => (
                    <div key={fn.step} className="p-3.5 rounded-xl bg-paper border border-line relative">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-blue text-xs font-bold">{fn.step}</span>
                        {idx < 3 && <ChevronRight size={14} className="text-mutedBlue hidden lg:block" />}
                      </div>
                      <h5 className="font-bold text-ink text-xs mb-1">{fn.name}</h5>
                      <p className="text-mutedBlue text-[11px] leading-tight">{fn.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsibilities Grid */}
              <div className="space-y-3">
                <span className="eyebrow block text-mutedBlue mb-2">
                  Key Operational Mandates
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {currentWorkspace.points.map((pt) => (
                    <div key={pt} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-line shadow-xs hover:border-blue/50 transition-colors">
                      <CheckCircle2 size={16} className="text-blue mt-0.5 shrink-0" />
                      <span className="text-ink text-xs sm:text-sm font-medium leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: MY QUEUE (after role workspaces)
      ========================================================================== */}
      <section className="py-16 md:py-24 bg-paper border-b border-line" id="my-queue">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="eyebrow block mb-3">
              Task Orchestration • My Queue & Approvals
            </span>
            <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-tight mb-4">
              Everyone knows <span className="text-blue italic font-light">what to do next.</span>
            </h2>
            <p className="text-mutedBlue text-base sm:text-lg leading-relaxed">
              Shows tasks, approvals, documents, collections follow-ups and exceptions. As transactions progress, tasks populate the responsible user's queue automatically.
            </p>
          </div>

          {/* Interactive Live Queue Simulator */}
          <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-line shadow-[0_16px_35px_rgba(16,34,73,0.06)] p-6 sm:p-8">
            
            {/* Queue Filter Tabs */}
            <div className="flex flex-wrap items-center justify-between pb-6 mb-6 border-b border-line gap-4">
              <div className="flex flex-wrap gap-2">
                {queueCategories.map((cat) => {
                  const isActive = activeQueueTab === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveQueueTab(cat.id)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        isActive
                          ? "bg-blue text-white shadow-xs"
                          : "bg-paper text-ink/75 hover:bg-neutral-200 border border-line"
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${isActive ? "bg-white/20 text-white" : "bg-black/10 text-ink"}`}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-mutedBlue">
                <span className="w-2 h-2 rounded-full bg-[#26845d] animate-ping" />
                <span>Auto-populating Queue Desk</span>
              </div>
            </div>

            {/* Queue Action Item Cards (All in $) */}
            <div className="space-y-3 mb-6">
              {activeQueue.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-paper border border-line hover:border-blue/50 hover:bg-white hover:shadow-sm transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-blue/10 flex items-center justify-center text-blue shrink-0 mt-0.5">
                      <ListTodo size={18} />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-ink border border-line">
                          {item.dept}
                        </span>
                        <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded ${
                          item.priority === "Urgent" 
                            ? "bg-rose-500/10 text-rose-700 border border-rose-500/20" 
                            : item.priority === "High"
                            ? "bg-amber-500/10 text-amber-700 border border-amber-500/20"
                            : "bg-blue/10 text-blue border border-blue/20"
                        }`}>
                          {item.priority}
                        </span>
                        <span className="font-mono text-[10px] text-mutedBlue">{item.time}</span>
                      </div>
                      <h4 className="font-bold text-ink text-sm">{item.title}</h4>
                      <p className="text-mutedBlue text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    <span className="text-xs font-bold text-blue px-3.5 py-1.5 rounded-full bg-blue/10 hover:bg-blue hover:text-white transition-colors cursor-pointer font-mono">
                      Action Desk
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* DIAGRAM 4: Task Ingestion & Resolution Pipeline Diagram */}
            <div className="p-4 rounded-2xl bg-paper border border-line">
              <span className="eyebrow block text-mutedBlue mb-2">
                Automated Task Routing Diagram
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white border border-line text-center">
                  <span className="font-mono text-[10px] font-bold text-blue block">Step 1</span>
                  <span className="font-semibold text-ink">Business Event Occurs</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-line text-center">
                  <span className="font-mono text-[10px] font-bold text-blue block">Step 2</span>
                  <span className="font-semibold text-ink">Auto-Routed to Owner Desk</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-line text-center">
                  <span className="font-mono text-[10px] font-bold text-blue block">Step 3</span>
                  <span className="font-semibold text-ink">Checker Audit Sign-off</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-line text-center">
                  <span className="font-mono text-[10px] font-bold text-blue block">Step 4</span>
                  <span className="font-semibold text-ink">Fulfillment Release</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-line flex flex-wrap items-center justify-between gap-3 text-xs text-mutedBlue font-medium">
              <span>Zero separate spreadsheets or forgotten to-do lists.</span>
              <span className="text-blue font-bold font-mono">100% Audit Traceability</span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CONNECTED TRANSACTION VIEW (near end of page)
      ========================================================================== */}
      <section className="py-16 md:py-24 bg-white border-b border-line" id="connected-transaction-view">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="eyebrow block mb-3">
              Transaction Lifecycle • Connected Flow
            </span>
            <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink mb-4">
              One transaction. <span className="text-blue italic font-light">One connected flow.</span>
            </h2>
            <p className="text-mutedBlue text-base sm:text-lg leading-relaxed font-normal">
              From inception to bank realization, information travels along the full transaction sequence:
            </p>
            <div className="mt-4 p-3 rounded-2xl bg-paper border border-line text-xs sm:text-sm font-bold text-blue w-max max-w-[92vw] relative left-1/2 -translate-x-1/2 font-mono">
              Order → Approval → Procurement → Factory & Production → Invoice → Payment → Receipt / Dispatch → Management
            </div>
          </div>

          {/* DIAGRAM 5: Full-Trace Stepper Timeline Diagram */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-3 mb-16">
            {transactionSequence.map((item) => (
              <div
                key={item.step}
                className="p-4 rounded-2xl bg-paper border border-line hover:border-blue/50 hover:bg-white hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-blue text-xs font-bold">{item.step}</span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-mutedBlue bg-white border border-line px-2 py-0.5 rounded">
                      {item.actor}
                    </span>
                  </div>
                  <h4 className="font-bold text-ink text-sm mb-1">{item.name}</h4>
                  <p className="text-mutedBlue text-xs leading-relaxed mb-3">{item.desc}</p>
                </div>
                <div className="pt-2 border-t border-line text-[10px] font-mono font-bold text-blue">
                  {item.badge}
                </div>
              </div>
            ))}
          </div>

          {/* Product Hierarchy Core Affirmation Banner in reference deep navy */}
          <div className="p-8 sm:p-12 rounded-3xl bg-navy text-white relative overflow-hidden mb-16 shadow-2xl">
            <div className="max-w-3xl relative z-10 space-y-4">
              <span className="font-mono text-[#83d6cf] font-bold text-xs uppercase tracking-[0.25em] block">
                Whizunik Operating Architecture
              </span>
              <h3 className="serif-headline text-2xl sm:text-4xl font-bold text-white leading-tight">
                Whizunik Command connects the work. <br />
                <span className="text-white/70 font-normal">Integrations connect the systems.</span> <br />
                <span className="text-[#83d6cf] italic font-light">Dashboards help management decide.</span> <br />
                <span className="text-white/80 font-normal">Strategic Capital Advisory helps when capital becomes the question.</span>
              </h3>
            </div>
            <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue/20 rounded-full blur-[140px] pointer-events-none" />
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: MARKETPLACE & ACCOUNTING SOFTWARE INTEGRATIONS (HIGHLIGHT)
          (Marketplace integration and accounting software integrations highlight)
      ========================================================================== */}
      <section className="py-16 md:py-24 bg-white" id="integrations">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="eyebrow block mb-3">
              Connected Ecosystem • Integrations
            </span>
            <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink mb-4">
              Connect your marketplaces, <br />
              <span className="text-blue italic font-light">accounting software & banks.</span>
            </h2>
            <p className="text-mutedBlue text-base sm:text-lg leading-relaxed font-normal">
              Whizunik Command orchestrates your daily business without forcing you to replace existing financial records or marketplace portals. Everything stays synchronized in real time.
            </p>
          </div>

          {/* 3 Main Integration Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-14">
            
            {/* 1. Marketplace Integrations */}
            <div className="p-8 rounded-3xl bg-paper border border-line hover:border-blue/50 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue/10 flex items-center justify-center text-blue mb-6">
                  <Store size={24} />
                </div>
                <span className="eyebrow block text-blue mb-2">
                  Sales Channels
                </span>
                <h3 className="serif-headline text-xl font-bold text-ink mb-3">
                  Marketplace & Channel Integration
                </h3>
                <p className="text-mutedBlue text-xs sm:text-sm leading-relaxed mb-6">
                  Seamlessly connect major ecommerce marketplaces and B2B portals. Customer orders synchronize automatically, reserve inventory, and decrement live stocks upon gate dispatch.
                </p>

                {/* Popular Integrations Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Amazon", "Flipkart", "Shopify", "WooCommerce", "Meesho", "IndiaMART", "TradeIndia", "Custom B2B"].map((ch) => (
                    <span key={ch} className="px-2.5 py-1 rounded-full bg-white border border-line text-xs font-semibold text-ink shadow-2xs">
                      {ch}
                    </span>
                  ))}
                </div>

                <div className="space-y-2.5 pt-4 border-t border-line text-xs text-ink/80 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue shrink-0" />
                    <span>Real-time multi-channel inventory sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue shrink-0" />
                    <span>Automated sales order ingestion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue shrink-0" />
                    <span>Zero overselling or manual stock reconciliations</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-line text-[11px] text-mutedBlue font-semibold font-mono">
                Synchronized channel stock & order dispatch
              </div>
            </div>

            {/* 2. Accounting Software Integrations */}
            <div className="p-8 rounded-3xl bg-paper border border-line hover:border-blue/50 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue/10 flex items-center justify-center text-blue mb-6">
                  <FileSpreadsheet size={24} />
                </div>
                <span className="eyebrow block text-blue mb-2">
                  Statutory Books
                </span>
                <h3 className="serif-headline text-xl font-bold text-ink mb-3">
                  Tally & Accounting Software
                </h3>
                <p className="text-mutedBlue text-xs sm:text-sm leading-relaxed mb-6">
                  Designed to connect with Tally Prime, Tally ERP 9, and standard accounting software to exchange customer masters, verified invoices, and payment vouchers without duplicate data entry.
                </p>

                {/* Popular Integrations Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Tally Prime", "Tally ERP 9", "Zoho Books", "QuickBooks", "Busy", "SAP", "ERP Ledgers"].map((acc) => (
                    <span key={acc} className="px-2.5 py-1 rounded-full bg-white border border-line text-xs font-semibold text-ink shadow-2xs">
                      {acc}
                    </span>
                  ))}
                </div>

                <div className="space-y-2.5 pt-4 border-t border-line text-xs text-ink/80 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue shrink-0" />
                    <span>Bi-directional master & voucher synchronization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue shrink-0" />
                    <span>Tax invoice & statutory ledger push</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue shrink-0" />
                    <span>Eliminate 100% of double manual data entry</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-line text-[11px] text-mutedBlue font-semibold font-mono">
                Operational queue feeds statutory books directly
              </div>
            </div>

            {/* 3. Banking & Treasury Rails */}
            <div className="p-8 rounded-3xl bg-paper border border-line hover:border-blue/50 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue/10 flex items-center justify-center text-blue mb-6">
                  <CreditCard size={24} />
                </div>
                <span className="eyebrow block text-blue mb-2">
                  Treasury & Cash
                </span>
                <h3 className="serif-headline text-xl font-bold text-ink mb-3">
                  Banking & Payment Gateways
                </h3>
                <p className="text-mutedBlue text-xs sm:text-sm leading-relaxed mb-6">
                  Connect corporate net banking and payment gateways for verified bank realization. Payments and collections reflect in books only when physically realized in bank feeds.
                </p>

                {/* Popular Integrations Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Corporate Net Banking", "HDFC / ICICI / SBI", "Razorpay", "Cashfree", "Direct Bank API"].map((bank) => (
                    <span key={bank} className="px-2.5 py-1 rounded-full bg-white border border-line text-xs font-semibold text-ink shadow-2xs">
                      {bank}
                    </span>
                  ))}
                </div>

                <div className="space-y-2.5 pt-4 border-t border-line text-xs text-ink/80 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue shrink-0" />
                    <span>Realized bank balance verification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue shrink-0" />
                    <span>Automated payment settlement reconciliation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue shrink-0" />
                    <span>13-week forward cash forecasting</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-line text-[11px] text-mutedBlue font-semibold font-mono">
                Strict separation between projected and realized cash
              </div>
            </div>

          </div>

          {/* Bottom Integrated Architecture Highlight Card */}
          <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue/10 via-teal-light to-transparent border border-teal-border text-center space-y-4 shadow-sm">
            <span className="eyebrow block text-blue">
              The Whizunik Ecosystem Guarantee
            </span>
            <h4 className="serif-headline text-2xl sm:text-3xl font-bold text-ink">
              Your accounting software keeps statutory books. <br />
              <span className="text-blue italic font-light">Your marketplaces bring commercial demand.</span> <br />
              Whizunik Command orchestrates the operations in between.
            </h4>
            <p className="text-mutedBlue text-xs sm:text-sm max-w-xl mx-auto font-medium">
              Teams work from clean, focused queues with zero duplicate entries, while management and finance enjoy real-time clarity across every transaction.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default CommandProductScreens;
