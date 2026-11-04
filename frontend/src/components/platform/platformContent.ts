import { screens, type ProductScreen } from "@/lib/content";

export type FloatCard = {
  label: string;
  value: string;
  tone?: "neutral" | "teal" | "blue";
  kind?: "metric" | "document" | "status";
};

export type Phase = {
  id: string;
  number: string;
  navLabel: string;
  title: string;
  description: string;
  screen?: ProductScreen;
  cards: FloatCard[];
  side: "left" | "right";
  variant?: "intro" | "workspace" | "factory" | "forecast" | "ecosystem";
};

export const platformPhases: Phase[] = [
  {
    id: "intro",
    number: "01",
    navLabel: "The Platform",
    title: "Every moving part. One intelligent system.",
    description:
      "Connected workspaces, one transaction record. Each department gets a dedicated working environment while the business operates as one.",
    cards: [],
    side: "left",
    variant: "intro",
  },
  {
    id: "sales",
    number: "02",
    navLabel: "Sales",
    title: "Every commitment, from enquiry to collection.",
    description:
      "Commercial intent is captured once and carried through approvals, invoicing and fulfilment.",
    screen: screens.sales,
    cards: [
      { label: "Customer Order", value: "Captured once" },
      { label: "Sales Invoice", value: "Linked to dispatch" },
      { label: "Advance Payment", value: "Tracked", tone: "teal" },
      { label: "Collection Status", value: "Visible" },
    ],
    side: "left",
    variant: "workspace",
  },
  {
    id: "procurement",
    number: "03",
    navLabel: "Procurement",
    title: "Purchasing tied to real demand.",
    description:
      "Raise purchase orders against verified requirements, receive goods against the dock record, and keep supplier obligations visible.",
    screen: screens.procurement,
    cards: [
      { label: "Supplier", value: "Record and terms" },
      { label: "Purchase Order", value: "Raised on demand", tone: "blue" },
      { label: "Goods Receipt", value: "Against the dock record" },
      { label: "Supplier Invoice", value: "Matched" },
      { label: "Expected Delivery", value: "Visible" },
    ],
    side: "right",
    variant: "workspace",
  },
  {
    id: "finance",
    number: "04",
    navLabel: "Finance",
    title: "Cash you can see before you commit.",
    description:
      "Separate what has actually landed in the bank from what is expected, overdue or forecast.",
    screen: screens.finance,
    cards: [
      { label: "Available Cash", value: "Realised balances", tone: "teal" },
      { label: "Expected Inflows", value: "Forward view" },
      { label: "Upcoming Outflows", value: "Committed" },
      { label: "Receivables", value: "Ageing" },
      { label: "Payables", value: "Scheduled" },
      { label: "Cash Forecast", value: "Rolling" },
    ],
    side: "left",
    variant: "workspace",
  },
  {
    id: "factory",
    number: "05",
    navLabel: "Factory",
    title: "From raw materials to finished goods.",
    description:
      "Connect material availability, production activities and manufacturing progress with the rest of your business operations.",
    cards: [],
    side: "right",
    variant: "factory",
  },
  {
    id: "warehouse",
    number: "06",
    navLabel: "Warehouse",
    title: "Physical stock, properly accounted for.",
    description:
      "Every movement is recorded at the point it happens — inward, inspection, allocation, transfer and dispatch.",
    screen: screens.warehouse,
    cards: [
      { label: "Stock by Location", value: "Live positions" },
      { label: "Goods Receipt", value: "Recorded inward", tone: "teal" },
      { label: "QC Pending", value: "Held" },
      { label: "Reserved Stock", value: "Allocated to orders" },
      { label: "Dispatch Readiness", value: "Checked" },
    ],
    side: "right",
    variant: "workspace",
  },
  {
    id: "workflow",
    number: "07",
    navLabel: "Workflow",
    title: "The next action is always obvious.",
    description:
      "Work finds the person responsible instead of waiting in an inbox.",
    screen: screens.workflow,
    cards: [
      { label: "Pending Approval", value: "Queued", tone: "blue" },
      { label: "Assigned To", value: "Named owner" },
      { label: "Priority", value: "Set" },
      { label: "Due Date", value: "Attached" },
      { label: "Approval Status", value: "Recorded" },
      { label: "Audit Trail", value: "Preserved" },
    ],
    side: "left",
    variant: "workspace",
  },
  {
    id: "forecast",
    number: "08",
    navLabel: "Inventory",
    title: "See demand before it becomes a shortage.",
    description:
      "Connect historical movements, demand patterns and inventory positions to make more informed replenishment decisions.",
    screen: screens.forecast,
    cards: [
      { label: "Movement history", value: "Recorded" },
      { label: "Demand pattern", value: "Observed" },
      { label: "Reorder point", value: "Suggested", tone: "teal" },
      { label: "Stockout risk", value: "Surfaced" },
    ],
    side: "right",
    variant: "forecast",
  },
  {
    id: "ecosystem",
    number: "09",
    navLabel: "Connected",
    title: "One business. One connected operating system.",
    description:
      "Whizunik Command brings the moving parts of your business into one coordinated environment.",
    cards: [],
    side: "left",
    variant: "ecosystem",
  },
];

export const workspaceRail = platformPhases.filter((phase) => phase.variant === "workspace" || phase.variant === "factory" || phase.variant === "forecast");
