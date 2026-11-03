export const hubScreens = {
  dashboard: "/assets/hub/dashboard-overview.png",
  finance: "/assets/hub/finance-workbench.png",
  sales: "/assets/hub/sales-workbench.png",
  procurement: "/assets/hub/procurement-workbench.png",
  warehouse: "/assets/hub/warehouse-control.png",
  workflow: "/assets/hub/workflow-queue.png",
  forecast: "/assets/hub/sku-forecast.png",
  marketplace: "/assets/hub/marketplace-integration.png",
} as const;

export type ProductSection = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  surface: "background" | "card";
};

export const productSections: ProductSection[] = [
  {
    id: "sales",
    number: "01",
    eyebrow: "Sales Workbench",
    title: "Every commitment, from enquiry to collection.",
    description:
      "Commercial intent is captured once and carried through approvals, invoicing and collections — so sales, credit and finance work from the same transaction.",
    bullets: [
      "Customer orders with locked commercial terms",
      "Customer approvals and advance tracking",
      "Sales invoices linked to dispatch status",
      "Outstanding receivables by customer",
    ],
    image: hubScreens.sales,
    imageAlt: "Sales Workbench showing active transactions and customer approvals",
    surface: "background",
  },
  {
    id: "procurement",
    number: "02",
    eyebrow: "Procurement Workbench",
    title: "Purchasing tied to real demand.",
    description:
      "Raise purchase orders against verified shortages, receive goods against the dock record, and keep supplier obligations visible before they become surprises.",
    bullets: [
      "Purchase orders linked to sales demand",
      "Supplier records and rate context",
      "Goods receipt notes and inward QC",
      "Supplier invoices and advance payments",
    ],
    image: hubScreens.procurement,
    imageAlt: "Procurement Workbench showing purchase orders and goods receipt notes",
    surface: "card",
  },
  {
    id: "finance",
    number: "03",
    eyebrow: "Finance Workbench",
    title: "Cash you can see before you commit it.",
    description:
      "Separate what has actually landed in the bank from what is expected, overdue or forecast, and see the working-capital position in one place.",
    bullets: [
      "Receivables and payables ageing",
      "Treasury and realised bank balances",
      "Forward cash visibility",
      "Payment vouchers and collection records",
    ],
    image: hubScreens.finance,
    imageAlt: "Finance Workbench showing cash forecast, receivables and payables",
    surface: "background",
  },
  {
    id: "warehouse",
    number: "04",
    eyebrow: "Warehouse Control",
    title: "Physical stock, properly accounted for.",
    description:
      "Every movement is recorded at the point it happens — inward, inspection, allocation, transfer and dispatch — so the ledger reflects the floor.",
    bullets: [
      "Stock overview by location and bin",
      "Goods inward with QC gates",
      "Reserved, QC-pending and damaged stock",
      "Dispatch readiness and gate release",
    ],
    image: hubScreens.warehouse,
    imageAlt: "Warehouse Control showing stock allocation and dispatch readiness",
    surface: "card",
  },
  {
    id: "workflow",
    number: "05",
    eyebrow: "Workflow & Approvals",
    title: "The next action is always obvious.",
    description:
      "Work finds the person responsible instead of waiting in an inbox. Approval, rejection and correction keep their audit trail intact.",
    bullets: [
      "Role-based task queues",
      "Maker-checker approval gates",
      "Transaction ownership at every stage",
      "Activity history and audit trail",
    ],
    image: hubScreens.workflow,
    imageAlt: "Workflow Queue showing role-based approvals and pending tasks",
    surface: "background",
  },
  {
    id: "forecast",
    number: "06",
    eyebrow: "Inventory Intelligence",
    title: "Forecast demand before it becomes a shortage.",
    description:
      "Read historical movement against forward demand to see coverage, stockout risk and what to reorder — before the sales order arrives.",
    bullets: [
      "SKU-level movement history",
      "Monthly demand trends",
      "Coverage and stockout risk",
      "Reorder recommendations",
    ],
    image: hubScreens.forecast,
    imageAlt: "SKU Forecast showing demand history and reorder recommendations",
    surface: "card",
  },
];

export type StoryStage = {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
};

export const storyStages: StoryStage[] = [
  {
    number: "01",
    title: "Commercial Operations",
    description:
      "Enquiry, quotation, sales order and customer approval — held in one record instead of three inboxes.",
    bullets: ["Sales orders", "Customer approvals", "Invoicing"],
    image: hubScreens.sales,
    imageAlt: "Commercial operations screen in WhizUnik Command",
  },
  {
    number: "02",
    title: "Procurement & Supply",
    description:
      "Shortages become purchase orders, purchase orders become goods receipts, and supplier obligations stay visible.",
    bullets: ["Purchase orders", "Goods receipts", "Supplier payables"],
    image: hubScreens.procurement,
    imageAlt: "Procurement and supply screen in WhizUnik Command",
  },
  {
    number: "03",
    title: "Inventory & Production",
    description:
      "Stock is reserved, inspected, allocated and dispatched against the same transaction the customer ordered.",
    bullets: ["Stock positions", "QC gates", "Dispatch readiness"],
    image: hubScreens.warehouse,
    imageAlt: "Inventory and production screen in WhizUnik Command",
  },
  {
    number: "04",
    title: "Financial Control",
    description:
      "Collections, payment vouchers and treasury actuals close the loop on everything that moved before them.",
    bullets: ["Receivables", "Treasury", "Cash position"],
    image: hubScreens.finance,
    imageAlt: "Financial control screen in WhizUnik Command",
  },
];

export const departmentNodes = [
  {
    id: "sales",
    label: "Sales",
    description: "Orders, customer approvals and collection follow-up.",
  },
  {
    id: "procurement",
    label: "Procurement",
    description: "Purchase orders, suppliers and goods receipts.",
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    description: "Batches, shopfloor updates and quality release.",
  },
  {
    id: "inventory",
    label: "Inventory",
    description: "Stock positions, reservations and reorder points.",
  },
  {
    id: "warehouse",
    label: "Warehouse",
    description: "Inward, allocation, transfers and dispatch.",
  },
  {
    id: "finance",
    label: "Finance",
    description: "Receivables, payables, treasury and cash visibility.",
  },
] as const;

export const integrations = [
  {
    id: "amazon",
    name: "Amazon",
    description:
      "Channel order and stock synchronisation scoped during implementation.",
  },
  {
    id: "flipkart",
    name: "Flipkart",
    description:
      "Marketplace order capture and dispatch status alignment.",
  },
  {
    id: "myntra",
    name: "Myntra",
    description:
      "Marketplace catalogue and fulfilment visibility, subject to scope.",
  },
  {
    id: "shopify",
    name: "Shopify",
    description:
      "Storefront orders and inventory levels for D2C operations.",
  },
  {
    id: "tally",
    name: "Tally",
    description:
      "Accounting exchange for masters, invoices and payment vouchers.",
  },
] as const;

export const intelligencePillars = [
  {
    number: "01",
    title: "Financial Visibility",
    description:
      "Understand cash positions, outstanding obligations and financial performance without rebuilding the picture in a spreadsheet.",
    points: ["Cash and bank actuals", "Receivables and payables", "Working-capital position"],
  },
  {
    number: "02",
    title: "Operational Intelligence",
    description:
      "Understand orders, stock, procurement and the bottlenecks that quietly move delivery dates.",
    points: ["Order and dispatch status", "Stock and shortage signals", "Approval bottlenecks"],
  },
  {
    number: "03",
    title: "Business Forecasting",
    description:
      "Use historical movement and demand information to support planning decisions before they are urgent.",
    points: ["Demand trends", "Coverage and runout", "Reorder guidance"],
  },
];
