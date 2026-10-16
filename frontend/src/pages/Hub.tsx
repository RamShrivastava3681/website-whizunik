import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  ChevronDown, 
  Maximize2, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  BarChart3, 
  FileText, 
  Building2, 
  Ship, 
  Factory, 
  Coins, 
  Workflow
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Magnetic from "@/components/Magnetic";

interface ScreenshotItem {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  tag: string;
}

const screenshots: ScreenshotItem[] = [
  {
    id: "dashboard",
    title: "Executive Dashboard",
    subtitle: "Real-time attention center, working capital KPIs, and operational health metrics.",
    src: "/assets/hub/dashboard-overview.png",
    tag: "Command Overview"
  },
  {
    id: "finance",
    title: "Finance & Cash Command",
    subtitle: "13-week cash forecasting, runway health alerts, receivables, and payables ledger.",
    src: "/assets/hub/finance-workbench.png",
    tag: "Treasury & Liquidity"
  },
  {
    id: "sales",
    title: "Sales Workbench",
    subtitle: "Active transactions, customer approvals, advance pending tracking, and overdue invoices.",
    src: "/assets/hub/sales-workbench.png",
    tag: "Sales Lifecycle"
  },
  {
    id: "procurement",
    title: "Procurement Workbench",
    subtitle: "Vendor purchase orders, goods receipt notes, price variance, and supplier payables.",
    src: "/assets/hub/procurement-workbench.png",
    tag: "Vendor & PO Flow"
  },
  {
    id: "warehouse",
    title: "Warehouse Control",
    subtitle: "Inward QC gates, bin allocations, dispatch ready checks, and physical stock tracking.",
    src: "/assets/hub/warehouse-control.png",
    tag: "Physical Fulfillment"
  },
  {
    id: "workflow",
    title: "Workflow Queue",
    subtitle: "Role-based action items, inter-department handoffs, and transaction approval states.",
    src: "/assets/hub/workflow-queue.png",
    tag: "Action Centre"
  },
  {
    id: "forecast",
    title: "Demand & SKU Forecast",
    subtitle: "12-month stock movement history, reorder intelligence, velocity, and stockout risks.",
    src: "/assets/hub/sku-forecast.png",
    tag: "Demand Planning"
  },
  {
    id: "marketplace",
    title: "Marketplace Hub",
    subtitle: "Centralized channel synchronization, stock reservation ledger, and 8-step fulfillment queue.",
    src: "/assets/hub/marketplace-integration.png",
    tag: "Channel Sync"
  }
];

const faqs = [
  {
    question: "Does Hub replace an ERP or accounting system?",
    answer: "No. Hub is an independent, focused operating and visibility layer that sits alongside your existing accounting or ERP tools. It connects working capital, trade operations, document approvals, and funding readiness without painful system overhauls."
  },
  {
    question: "Can reports be configured for our requirements?",
    answer: "Yes. The initial scope, views, workflows, and KPIs are tailored around your specific operational priorities and reporting rhythm agreed upon during discovery."
  },
  {
    question: "Is Hub dependent on Whiz-Unik advisory?",
    answer: "No. Hub is designed to be purchased, deployed, and used completely independently as software. Advisory can be added selectively whenever management needs hands-on support with capital structuring or institutional execution."
  }
];

const Hub = () => {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const selectedScreenshot = screenshots.find((s) => s.id === activeTab) || screenshots[0];

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary/20 overflow-x-hidden">
      <Header />

      {/* Decorative Blur Backgrounds */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[8%] left-[-10%] w-[45vw] h-[45vw] bg-primary/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] bg-primary/[0.04] rounded-full blur-[140px]" />
        <div className="absolute bottom-[5%] left-[20%] w-[35vw] h-[35vw] bg-primary/[0.03] rounded-full blur-[120px]" />
      </div>

      <main className="relative pt-24 md:pt-36">
        {/* ========================================================= */}
        {/* SECTION 1: HERO */}
        {/* ========================================================= */}
        <section className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12 pt-8 pb-16 md:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-primary font-bold tracking-[0.25em] text-[10px] md:text-xs uppercase mb-6 shadow-sm"
            >
              <Workflow size={13} />
              <span>Whizunik Hub</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="serif-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08] mb-6"
            >
              Turn operational activity into{" "}
              <span className="text-primary italic font-light">management control.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-black/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-normal"
            >
              Whizunik Hub is an independent operating layer for management teams. It connects operational activity, working capital, reporting, and accountability in one practical system.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Magnetic>
                <Link
                  to="/contact?type=demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/25 group"
                >
                  <span>Request a Demo</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </Magnetic>

              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-neutral-100 text-black/80 hover:text-black hover:bg-neutral-200 text-xs md:text-sm font-bold uppercase tracking-widest transition-all"
              >
                <span>Speak to an Advisor</span>
                <ArrowRight size={15} />
              </Link>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-12 text-xs text-black/60 font-medium"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-primary" /> Independent Operating Layer
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-primary" /> Zero ERP Disruption
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-primary" /> Multi-Workspace Visibility
              </span>
            </motion.div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: PRODUCT SHOWCASE (WHIZUNIK COMMAND INTERFACE) */}
        {/* ========================================================= */}
        <section className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12 py-12 md:py-20">
          <div className="bg-neutral-50/80 border border-black/10 rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-14 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10">
              <div className="lg:col-span-8">
                <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] block mb-3">
                  Whizunik Command
                </span>
                <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
                  See how work moves <span className="text-primary italic font-light">across the business.</span>
                </h2>
                <p className="text-black/70 text-sm sm:text-base md:text-lg leading-relaxed mt-4 max-w-2xl font-normal">
                  Command connects sales, procurement, inventory, finance, warehouse, and management so every team knows what to do next.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
                <span className="px-3 py-1.5 rounded-full bg-white border border-primary/20 text-primary text-xs font-semibold shadow-sm">
                  6 workspaces
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white border border-primary/20 text-primary text-xs font-semibold shadow-sm">
                  Real-time handoffs
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white border border-primary/20 text-primary text-xs font-semibold shadow-sm">
                  Management visibility
                </span>
              </div>
            </div>

            {/* Workspace Tab Switcher */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none border-b border-black/5">
              {screenshots.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(s.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                    activeTab === s.id
                      ? "bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]"
                      : "bg-white text-black/70 border border-black/5 hover:border-black/20 hover:text-black"
                  }`}
                >
                  <span>{s.title}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                    activeTab === s.id ? "bg-white/20 text-white" : "bg-neutral-100 text-black/50"
                  }`}>
                    {s.tag}
                  </span>
                </button>
              ))}
            </div>

            {/* Showcase Screenshot Display with Frame */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-black/15 bg-white shadow-2xl group"
            >
              {/* Window Controls Bar */}
              <div className="bg-neutral-100/90 border-b border-black/10 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-medium text-black/50 ml-3 hidden sm:inline">
                    Command Centre — {selectedScreenshot.title}
                  </span>
                </div>
                
                <button
                  onClick={() => setModalImage(selectedScreenshot.src)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors bg-white px-3 py-1 rounded-lg border border-primary/20 shadow-sm"
                  title="View full resolution"
                >
                  <Maximize2 size={13} />
                  <span className="hidden sm:inline">Expand Fullscreen</span>
                </button>
              </div>

              {/* Main Screenshot Image */}
              <div 
                className="relative cursor-pointer overflow-hidden bg-neutral-900"
                onClick={() => setModalImage(selectedScreenshot.src)}
              >
                <img
                  src={selectedScreenshot.src}
                  alt={selectedScreenshot.title}
                  className="w-full h-auto object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
                />
                
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="px-5 py-2.5 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-2xl">
                    <Maximize2 size={14} /> Click to View Full Size
                  </span>
                </div>
              </div>

              {/* Caption Footer */}
              <div className="p-4 sm:p-5 bg-white border-t border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-black/70">
                <p className="font-medium text-black">
                  <strong className="text-primary font-bold mr-2">{selectedScreenshot.title}:</strong>
                  {selectedScreenshot.subtitle}
                </p>
                <Link
                  to="/contact?type=demo"
                  className="text-primary font-bold uppercase tracking-wider text-xs hover:translate-x-1 transition-transform inline-flex items-center gap-1 shrink-0"
                >
                  <span>Request Live Walkthrough</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: THE OPERATING PROBLEM */}
        {/* ========================================================= */}
        <section className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 items-start mb-16">
            <div className="lg:col-span-7">
              <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] block mb-3">
                The Operating Problem
              </span>
              <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.15] tracking-tight">
                When information is fragmented,{" "}
                <span className="text-primary italic font-light">capital decisions slow down.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-4">
              <p className="text-black/70 text-base sm:text-lg leading-relaxed font-normal border-l-2 border-primary/30 pl-5">
                Finance teams often manage essential information across spreadsheets, email threads, shared folders, and manual reports. Hub provides a focused operating layer for the workflows that sit behind working-capital and lender conversations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                num: "01",
                title: "Monitor",
                desc: "Track receivables, collections, ageing, facilities, and exceptions in real-time.",
                icon: BarChart3
              },
              {
                num: "02",
                title: "Manage",
                desc: "Coordinate documents, tasks, approvals, and accountability with zero status chasing.",
                icon: Layers
              },
              {
                num: "03",
                title: "Analyse & Prepare",
                desc: "Turn live operational activity into reports for management, diligence, and funding readiness.",
                icon: FileText
              }
            ].map((card, i) => (
              <motion.div
                key={card.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-neutral-50 p-8 sm:p-10 rounded-3xl border border-black/10 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl sm:text-4xl font-headline font-bold text-primary/30 group-hover:text-primary transition-colors">
                    {card.num}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <card.icon size={22} />
                  </div>
                </div>
                <h3 className="serif-headline text-2xl font-bold text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-black/70 text-sm sm:text-base leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: PRODUCT WORKFLOWS (DEEP DIVE IN INTERFACE) */}
        {/* ========================================================= */}
        <section className="bg-neutral-900 text-white py-20 md:py-32 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12 relative z-10">
            <div className="max-w-3xl mb-16 md:mb-24">
              <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] block mb-3">
                Product Workflows
              </span>
              <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                Designed around work finance teams <span className="text-primary italic font-light">do every day.</span>
              </h2>
            </div>

            {/* Workflow Item 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center mb-20 md:mb-28 pb-16 border-b border-white/10">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-2">
                  Receivables & Collections
                </span>
                <h3 className="serif-headline text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  See collections before they become a problem.
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                  Bring outstanding receivables, follow-ups, ageing, and account-level context into a view that makes priorities easier to identify and act on before liquidity is compromised.
                </p>
                <div className="space-y-2.5 text-xs text-white/80 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Live 13-week forecast with projected shortfall alerts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Real-time tracking of overdue vs. planned purchase orders</span>
                  </div>
                </div>
                <Link
                  to="/contact?type=demo"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold text-xs uppercase tracking-widest transition-colors"
                >
                  <span>Explore Cash Command</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div 
                className="lg:col-span-7 order-1 lg:order-2 rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 bg-neutral-800 shadow-2xl cursor-pointer group"
                onClick={() => setModalImage("/assets/hub/finance-workbench.png")}
              >
                <img
                  src="/assets/hub/finance-workbench.png"
                  alt="Finance Workbench and Cash Command Centre"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Workflow Item 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center mb-20 md:mb-28 pb-16 border-b border-white/10">
              <div 
                className="lg:col-span-7 rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 bg-neutral-800 shadow-2xl cursor-pointer group"
                onClick={() => setModalImage("/assets/hub/sales-workbench.png")}
              >
                <img
                  src="/assets/hub/sales-workbench.png"
                  alt="Sales Workbench and Connected Approvals"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="lg:col-span-5">
                <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-2">
                  Document Flow & Approvals
                </span>
                <h3 className="serif-headline text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Replace operational chasing with shared accountability.
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                  Keep key documents, approvals, and work items connected to the people and processes responsible for them. No more status meetings to know if dispatch is cleared.
                </p>
                <div className="space-y-2.5 text-xs text-white/80 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Awaiting customer acceptance, advance pending, approval states</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Customer-level ageing and overdue receipts triage</span>
                  </div>
                </div>
                <Link
                  to="/contact?type=demo"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold text-xs uppercase tracking-widest transition-colors"
                >
                  <span>See Sales Flow</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Workflow Item 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-2">
                  Forecasting & Channels
                </span>
                <h3 className="serif-headline text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Make the business easier to understand.
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                  Use structured operational information for management reporting, lender packs, and funding-readiness conversations across inventory velocity and marketplace synchronization.
                </p>
                <div className="space-y-2.5 text-xs text-white/80 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>SKU-level stockout risk and days cover modeling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Channel integration across Amazon, Flipkart, Shopify, and offline</span>
                  </div>
                </div>
                <Link
                  to="/contact?type=demo"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold text-xs uppercase tracking-widest transition-colors"
                >
                  <span>Explore Demand Planning</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div 
                className="lg:col-span-7 order-1 lg:order-2 rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 bg-neutral-800 shadow-2xl cursor-pointer group"
                onClick={() => setModalImage("/assets/hub/sku-forecast.png")}
              >
                <img
                  src="/assets/hub/sku-forecast.png"
                  alt="SKU Forecast and Demand Planning"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 5: HOW HUB BEGINS */}
        {/* ========================================================= */}
        <section className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] block mb-3">
              How Hub Begins
            </span>
            <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Start with one operating problem.{" "}
              <span className="text-primary italic font-light">Expand as the value becomes clear.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                name: "Discover",
                desc: "Map the workflows, reporting gaps, and management questions that matter most."
              },
              {
                step: "02",
                name: "Configure",
                desc: "Set up the relevant workspaces, views, responsibilities, and reporting rhythm."
              },
              {
                step: "03",
                name: "Adopt",
                desc: "Bring the operating team into one shared system with practical, hands-on onboarding."
              },
              {
                step: "04",
                name: "Expand",
                desc: "Add workflows and advisory support only where the business genuinely needs them."
              }
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-8 rounded-3xl bg-neutral-50 border border-black/10 hover:border-primary/30 hover:shadow-lg transition-all relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-primary tracking-widest uppercase block mb-3">
                    Phase {item.step}
                  </span>
                  <h3 className="serif-headline text-2xl font-bold text-foreground mb-3">
                    {item.name}
                  </h3>
                  <p className="text-black/70 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 6: BUILT FOR AUDIENCE */}
        {/* ========================================================= */}
        <section className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12 py-12 md:py-20 border-t border-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 items-start mb-14">
            <div className="lg:col-span-7">
              <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] block mb-3">
                Built For
              </span>
              <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.15] tracking-tight">
                Finance teams managing <span className="text-primary italic font-light">growing complexity.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-4">
              <p className="text-black/70 text-base sm:text-lg leading-relaxed font-normal border-l-2 border-primary/30 pl-5">
                Hub is designed for businesses that have outgrown disconnected spreadsheets but do not need a painful ERP replacement programme.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Exporters & Importers",
                desc: "Trade, receivables, shipping docs, and foreign exchange document workflows.",
                icon: Ship
              },
              {
                title: "Trading Companies",
                desc: "Multiple counterparties, rapid margin calculation, and working-capital movements.",
                icon: Coins
              },
              {
                title: "Manufacturers",
                desc: "Growing operational scale, procurement commitments, and facility capital needs.",
                icon: Factory
              },
              {
                title: "CFOs & Controllers",
                desc: "Clearer reporting, audit-readiness, and visibility without heavy IT transformation.",
                icon: Building2
              }
            ].map((aud) => (
              <div
                key={aud.title}
                className="p-7 rounded-3xl bg-neutral-50 border border-black/10 hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                    <aud.icon size={20} />
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-2">{aud.title}</h4>
                  <p className="text-black/70 text-sm leading-relaxed">{aud.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 7: FAQ ACCORDION */}
        {/* ========================================================= */}
        <section className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12 py-16 md:py-24 border-t border-black/5">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] block mb-3">
                Frequently Asked Questions
              </span>
              <h2 className="serif-headline text-3xl sm:text-4xl font-bold text-foreground">
                Everything you need to know about <span className="text-primary italic font-light">Hub</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.question}
                    className="rounded-2xl border border-black/10 bg-white overflow-hidden transition-all shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-base md:text-lg text-foreground hover:text-primary transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={20}
                        className={`text-primary shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-0 text-black/70 text-sm md:text-base leading-relaxed border-t border-black/5">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 8: FINAL CTA */}
        {/* ========================================================= */}
        <section className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12 py-16 md:py-28">
          <div className="p-10 sm:p-14 md:p-20 rounded-3xl md:rounded-[2.5rem] bg-gradient-to-br from-neutral-900 via-neutral-900 to-[#121630] border border-white/10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8">
                <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] block mb-3">
                  Whizunik Hub
                </span>
                <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                  See the workflows behind <br />
                  <span className="text-primary italic font-light">better management decisions.</span>
                </h2>
                <p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed">
                  Request a focused demonstration around the reporting, workflow, or management-visibility challenge most relevant to your business.
                </p>
              </div>

              <div className="lg:col-span-4 lg:text-right">
                <Magnetic>
                  <Link
                    to="/contact?type=demo"
                    className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-primary text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-primary/30 group"
                  >
                    <span>Request a Demo</span>
                    <ArrowUpRight size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </Magnetic>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================= */}
      {/* FULLSCREEN IMAGE MODAL */}
      {/* ========================================================= */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-7xl w-full max-h-[92vh] overflow-auto rounded-2xl bg-neutral-900 border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/75 text-white hover:bg-black transition-colors flex items-center justify-center"
                aria-label="Close modal"
              >
                ✕
              </button>
              <img
                src={modalImage}
                alt="Enlarged screenshot preview"
                className="w-full h-auto block"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Hub;
