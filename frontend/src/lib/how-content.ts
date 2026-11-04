import { hubScreens } from "./command-content";

export const challenges = [
  {
    id: "departments",
    title: "Disconnected departments",
    description: "Each team keeps its own version of the same order.",
    icon: "unplug",
  },
  {
    id: "information",
    title: "Scattered business information",
    description: "Documents, sheets and threads across separate systems.",
    icon: "files",
  },
  {
    id: "coordination",
    title: "Manual coordination",
    description: "Progress depends on calls, reminders and follow-ups.",
    icon: "refresh",
  },
  {
    id: "approvals",
    title: "Delayed approvals",
    description: "Transactions wait in inboxes without an owner.",
    icon: "clock",
  },
  {
    id: "finance",
    title: "Limited financial visibility",
    description: "Cash and commitments are reconstructed after the fact.",
    icon: "eye",
  },
  {
    id: "inventory",
    title: "Inventory mismatches",
    description: "The ledger and the warehouse floor disagree.",
    icon: "boxes",
  },
] as const;

export const workflowNodes = [
  {
    id: "sales",
    label: "Sales & Customer Orders",
    blurb: "Commercial terms, customer approvals and order status live on one record.",
    side: "top",
    x: 140,
    y: 92,
  },
  {
    id: "procurement",
    label: "Procurement & Suppliers",
    blurb: "Purchase orders linked to verified shortages, supplier and rate context.",
    side: "top",
    x: 380,
    y: 92,
  },
  {
    id: "checker",
    label: "Checker & Approvals",
    blurb: "Maker-checker review of transactions that require control before they progress.",
    side: "top",
    x: 620,
    y: 92,
  },
  {
    id: "factory",
    label: "Factory & Production",
    blurb: "Batches planned against confirmed orders, with shopfloor and QC updates.",
    side: "top",
    x: 860,
    y: 92,
  },
  {
    id: "inventory",
    label: "Purchase & Inventory",
    blurb: "Stock positions, reservations and movement history across locations.",
    side: "bottom",
    x: 250,
    y: 528,
  },
  {
    id: "warehouse",
    label: "Warehouse & Dispatch",
    blurb: "Inward, allocation, QC gates and dispatch readiness at the point of movement.",
    side: "bottom",
    x: 500,
    y: 528,
  },
  {
    id: "finance",
    label: "Finance & Treasury",
    blurb: "Receivables, payables, vouchers and realised bank balances.",
    side: "bottom",
    x: 750,
    y: 528,
  },
] as const;

export const departments = [
  {
    id: "sales",
    number: "01",
    eyebrow: "Sales Workbench",
    title: "Customer demand, captured once and carried forward.",
    description:
      "Customer orders, pricing, approvals and fulfilment status live on the same record, so sales, credit and dispatch never work from different versions of the order.",
    activities: [
      "Sales orders with locked commercial terms",
      "Customer approvals and advance tracking",
      "Fulfilment status through dispatch and invoicing",
    ],
    connects: ["Procurement", "Warehouse", "Finance"],
    image: hubScreens.sales,
    imageAlt: "Sales Workbench showing customer orders and approvals",
  },
  {
    id: "procurement",
    number: "02",
    eyebrow: "Procurement Workbench",
    title: "Supplier commitments tied to verified demand.",
    description:
      "Purchase orders are raised against a real shortage, received against the dock record, and tracked until the supplier obligation is settled.",
    activities: [
      "Purchase orders linked to sales demand",
      "Supplier records, rate context and lead times",
      "Goods receipts, advance payments and supplier invoices",
    ],
    connects: ["Inventory", "Checker", "Finance"],
    image: hubScreens.procurement,
    imageAlt: "Procurement Workbench showing purchase orders and goods receipts",
  },
  {
    id: "checker",
    number: "03",
    eyebrow: "Checker & Approvals",
    title: "Every exception passes through a control, not an inbox.",
    description:
      "Transactions that require review move to the person accountable for them, with the commercial context already attached and the decision recorded.",
    activities: [
      "Role-based review and approval queues",
      "Approve, reject or return for correction",
      "Audit trail preserved on every decision",
    ],
    connects: ["Sales", "Procurement", "Finance"],
    image: hubScreens.workflow,
    imageAlt: "Workflow queue showing approvals and pending tasks",
  },
  {
    id: "factory",
    number: "04",
    eyebrow: "Factory & Production",
    title: "Production planned against the order that created it.",
    description:
      "Confirmed orders become batches with ownership, priority and dates, and shopfloor updates flow back into stock and delivery commitments.",
    activities: [
      "Batch planning from confirmed customer orders",
      "Shopfloor progress, rejects and downtime updates",
      "Quality release into finished stock",
    ],
    connects: ["Inventory", "Procurement", "Warehouse"],
    image: hubScreens.dashboard,
    imageAlt: "Management view across production, inventory and dispatch",
  },
  {
    id: "warehouse",
    number: "05",
    eyebrow: "Warehouse Control",
    title: "Physical movements recorded where they happen.",
    description:
      "Inward, inspection, allocation, transfer and dispatch are recorded at the point of movement, so the ledger and the floor stay aligned.",
    activities: [
      "Goods inward with quality gates",
      "Bin allocation, transfers and reservations",
      "Dispatch readiness and gate release",
    ],
    connects: ["Sales", "Factory", "Finance"],
    image: hubScreens.warehouse,
    imageAlt: "Warehouse Control showing stock allocation and dispatch readiness",
  },
  {
    id: "finance",
    number: "06",
    eyebrow: "Finance Workbench",
    title: "The financial consequence of every operational move.",
    description:
      "Receivables, payables, vouchers and treasury actuals sit alongside the operations that created them, keeping expected and realised cash distinct.",
    activities: [
      "Receivables and payables with ageing",
      "Payment vouchers and collection records",
      "Treasury, bank actuals and forward visibility",
    ],
    connects: ["Sales", "Procurement", "Management"],
    image: hubScreens.finance,
    imageAlt: "Finance Workbench showing cash forecast, receivables and payables",
  },
] as const;

export const flowSteps = [
  {
    id: "order",
    label: "Customer Order",
    description: "Commercial terms, pricing and delivery commitment recorded once.",
  },
  {
    id: "sales",
    label: "Sales Confirmation",
    description: "Credit and pricing rules validated before the order is locked.",
  },
  {
    id: "supply",
    label: "Procurement / Stock Availability",
    description: "Shortages explode into purchase requirements, or stock is reserved.",
  },
  {
    id: "approval",
    label: "Approval",
    description: "Maker-checker review where the transaction requires control.",
  },
  {
    id: "fulfilment",
    label: "Warehouse / Production",
    description: "Goods are received, produced, inspected and allocated.",
  },
  {
    id: "dispatch",
    label: "Dispatch",
    description: "Documents, allocation and readiness verified before gate release.",
  },
  {
    id: "finance",
    label: "Invoice & Finance",
    description: "Invoicing, receivables and collection follow-up connected to the same record.",
  },
] as const;

export const managementSignals = [
  { label: "Business performance", value: "Sales, margin and order status", tone: "info" },
  { label: "Pending tasks", value: "Approvals waiting on an owner", tone: "warning" },
  { label: "Financial commitments", value: "Payables and expected collections", tone: "info" },
  { label: "Inventory status", value: "Coverage, shortages and QC holds", tone: "success" },
  { label: "Operational alerts", value: "Delayed dispatches and exceptions", tone: "danger" },
] as const;
