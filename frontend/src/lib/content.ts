/**
 * Single source of truth for positioning, copy and product screenshots.
 * Brand rule: company "Whizunik", product "Whizunik Command",
 * service "Structured Capital Advisory".
 */

export const site = {
  name: "Whizunik",
  product: "Whizunik Command",
  advisory: "Structured Capital Advisory",
  url: "https://whizunik.com",
  email: "sankalp@whizunik.com",
  phone: "+91-7045941942",
  phoneHref: "tel:+917045941942",
  address: "Max Towers, 16th Floor, Sector 16B, Noida, 201301",
};

export const navLinks = [
  { label: "Whizunik Command", path: "/command" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Strategic Advisory", path: "/strategic-advisory" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export type ProductScreen = {
  id: string;
  file: string;
  title: string;
  caption: string;
  alt: string;
  width: number;
  height: number;
};

type Screen = ProductScreen;

export const screens: Record<string, Screen> = {
  dashboard: {
    id: "dashboard",
    file: "dashboard-overview",
    title: "Management dashboard",
    caption:
      "See cash, receivables, payables, sales, inventory and attention points in one view.",
    alt: "Whizunik Command management dashboard showing cash, receivables, payables, sales and inventory in one view",
    width: 1710,
    height: 920,
  },
  workflow: {
    id: "workflow",
    file: "workflow-queue",
    title: "Workflow Queue",
    caption: "Give every pending action an owner, priority, due date and next step.",
    alt: "Whizunik Command Workflow Queue listing pending actions with owner, priority, due date and next step",
    width: 1705,
    height: 923,
  },
  finance: {
    id: "finance",
    file: "finance-workbench",
    title: "Finance Workbench",
    caption:
      "Track cash position, receivables, payables, forecasts and upcoming movements.",
    alt: "Whizunik Command Finance Workbench showing cash position, receivables, payables and upcoming movements",
    width: 1672,
    height: 940,
  },
  procurement: {
    id: "procurement",
    file: "procurement-workbench",
    title: "Procurement Workbench",
    caption:
      "Track purchase orders, goods receipts and supplier commitments against real demand.",
    alt: "Whizunik Command Procurement Workbench showing purchase orders, goods receipts and supplier commitments",
    width: 1672,
    height: 941,
  },
  sales: {
    id: "sales",
    file: "sales-workbench",
    title: "Sales Workbench",
    caption:
      "Keep customer orders, approvals, invoicing and collections on one record.",
    alt: "Whizunik Command Sales Workbench showing customer orders, approvals and collection status",
    width: 1672,
    height: 940,
  },
  warehouse: {
    id: "warehouse",
    file: "warehouse-control",
    title: "Warehouse Control",
    caption: "Record inward, inspection, allocation and dispatch where they happen.",
    alt: "Whizunik Command Warehouse Control showing inward stock, allocation and dispatch readiness",
    width: 1672,
    height: 941,
  },
  marketplace: {
    id: "marketplace",
    file: "marketplace-integration",
    title: "Marketplace Integration Hub",
    caption: "Synchronise channel orders, stock reservations and fulfilment status.",
    alt: "Whizunik Command Marketplace Integration Hub showing channel orders and stock reservations",
    width: 1672,
    height: 940,
  },
  forecast: {
    id: "forecast",
    file: "sku-forecast",
    title: "SKU Forecast",
    caption: "Read demand history, coverage and reorder points before a shortage.",
    alt: "Whizunik Command SKU Forecast showing demand history, stock coverage and reorder points",
    width: 1672,
    height: 941,
  },
};

/** The three public product views used on the Command page. */
export const primaryScreens: Screen[] = [screens.dashboard, screens.workflow, screens.finance];

/** Additional product views used on How It Works. */
export const tourScreens: Screen[] = [
  screens.sales,
  screens.procurement,
  screens.warehouse,
  screens.marketplace,
  screens.forecast,
];

export const capabilities = [
  {
    name: "Connect the work",
    description:
      "One record carries an order from enquiry through procurement, stock, dispatch and collection.",
  },
  {
    name: "Assign ownership",
    description:
      "Every pending action has a named owner, a priority and a date it is due.",
  },
  {
    name: "Surface exceptions",
    description:
      "Overdue collections, stock shortages and stalled approvals appear before they become a meeting.",
  },
  {
    name: "Support management decisions",
    description:
      "Cash, commitments and operational position are presented together, not reconstructed afterwards.",
  },
];

export const workflow = [
  "Customer order",
  "Material check",
  "Procurement",
  "Production",
  "Quality",
  "Finished stock",
  "Dispatch",
  "Invoice and payment follow-up",
];

export const clientTypes = [
  {
    name: "Exporters and international traders",
    problem: "Order documents, shipment status and receivables live across email and spreadsheets.",
    useCase: "See each export order, its document position and its collection status on one record.",
  },
  {
    name: "Manufacturers and fabricators",
    problem: "Production, material availability and dispatch promises sit in separate registers.",
    useCase: "Plan against real material and capacity, and keep delivery commitments visible to everyone.",
  },
  {
    name: "Trading and distribution companies",
    problem: "Margin and stock position are reconciled after the sale rather than during it.",
    useCase: "Connect purchase, stock and sale so availability and margin are visible as work happens.",
  },
  {
    name: "Promoter-led growth businesses",
    problem: "Management depends on status meetings to find out what is stuck and who owns it.",
    useCase: "Give every pending action an owner and a date, and surface exceptions before they escalate.",
  },
];

export const howSteps = [
  {
    number: "01",
    title: "Customer order",
    happens:
      "The order is captured with the customer, items, price, delivery date and payment terms.",
    owner: "Sales",
    visible:
      "Confirmed order value, locked commercial terms, approvals pending and advance received.",
    management: "Order book, committed delivery dates and the terms the business has agreed.",
  },
  {
    number: "02",
    title: "Material and stock check",
    happens:
      "Available, reserved and short quantities are checked against the order before it is released.",
    owner: "Inventory and stores",
    visible: "Stock by location, reservations, shortages and quality holds.",
    management: "Which orders can be served from stock, and what has to be bought.",
  },
  {
    number: "03",
    title: "Purchase and receive",
    happens:
      "Shortages become purchase orders, and goods are received against the dock record.",
    owner: "Procurement",
    visible:
      "Open purchase orders, expected dates, rate variance, goods receipts and supplier dues.",
    management: "Purchase commitments, supplier exposure and delivery risk.",
  },
  {
    number: "04",
    title: "Production planning",
    happens: "Confirmed orders become batches with a priority, a sequence and completion dates.",
    owner: "Production planning",
    visible: "Batch plan, material readiness and capacity constraints per work centre.",
    management: "Load against capacity and the orders exposed to delay.",
  },
  {
    number: "05",
    title: "Factory updates",
    happens: "Shopfloor progress, rejections and downtime are recorded as they occur.",
    owner: "Production supervisor",
    visible: "Stage-wise progress, output, rejections and revised completion dates.",
    management: "Which batches are behind, and the customer dates they affect.",
  },
  {
    number: "06",
    title: "Quality decision",
    happens: "Inward or finished goods are inspected, then released, held or sent for rework.",
    owner: "Quality",
    visible: "Inspection results, holds, rework and release status by batch.",
    management: "Quality exposure and the orders waiting on clearance.",
  },
  {
    number: "07",
    title: "Finished stock",
    happens: "Released output is taken into finished stock with its bin and batch reference.",
    owner: "Stores and warehouse",
    visible: "Finished quantities, batch traceability and stock already reserved to orders.",
    management: "What is ready to sell and what is already committed.",
  },
  {
    number: "08",
    title: "Dispatch",
    happens:
      "Allocation, packing and documents are checked before the goods are released at the gate.",
    owner: "Dispatch and logistics",
    visible: "Dispatch readiness, documents, transporter details and gate release.",
    management: "What has left, what is waiting, and the reason it is waiting.",
  },
  {
    number: "09",
    title: "Invoice and payment follow-up",
    happens: "The invoice is raised and the receivable is tracked until it is collected.",
    owner: "Finance and collections",
    visible: "Invoices, due dates, ageing, follow-up history and receipts.",
    management: "Receivables, overdue value and expected cash by date.",
  },
  {
    number: "10",
    title: "Management view",
    happens: "Signals from every stage consolidate into a single management position.",
    owner: "Management",
    visible: "Cash, receivables, payables, sales, inventory and open attention points.",
    management: "What is moving, what needs attention and what happens next.",
  },
];

export const advisoryAreas = [
  {
    title: "Capital requirement diagnosis",
    description:
      "Establish what the business actually needs, when it needs it, and how existing obligations affect the answer.",
  },
  {
    title: "Working capital structure",
    description:
      "Map the cash conversion cycle and identify where working capital is committed or trapped.",
  },
  {
    title: "Debt and structured finance",
    description:
      "Evaluate facilities and structures that fit the operating cycle, collateral position and risk profile.",
  },
  {
    title: "Growth capital",
    description:
      "Test the commercial case for expansion against realistic cash generation before committing to a structure.",
  },
  {
    title: "Lender and investor preparation",
    description:
      "Assemble the operating and financial narrative — models, covenant analysis and diligence material.",
  },
  {
    title: "Transaction execution support",
    description:
      "Support the process from term sheet to drawdown, including lender queries and condition precedent tracking.",
  },
];

export const teamCapabilities = [
  {
    title: "Capital strategy",
    description: "Requirement diagnosis, structuring and lender or investor preparation.",
  },
  {
    title: "Product and operations",
    description: "Operating model design, workflow definition and implementation scope.",
  },
  {
    title: "Technology",
    description: "Application delivery, data structure and integration with existing systems.",
  },
  {
    title: "Specialist execution",
    description: "Transaction support, documentation and process execution where required.",
  },
];
