export const companyFacts = [
  {
    value: "2023",
    label: "Founded",
    detail: "Built around connected operational reality",
  },
  {
    value: "25+",
    label: "Years combined experience",
    detail: "Structured finance and trade operations",
  },
  {
    value: "150+",
    label: "Transactions advised",
    detail: "Debt and capital structures",
  },
  {
    value: "$10M–$100M+",
    label: "Core business scale",
    detail: "Mid-market growth and enterprise clients",
  },
];

export const operationalChain = [
  { cause: "Sales", effect: "Creates customer orders and receivables." },
  { cause: "Procurement", effect: "Creates supplier obligations and physical stock." },
  { cause: "Production & inventory", effect: "Ties up working capital." },
  { cause: "Collections & treasury", effect: "Realises actual bank liquidity." },
  { cause: "Operational delays", effect: "Become financial and capital problems." },
];

export const beliefs = [
  {
    number: "01",
    title: "Clarity over complexity",
    body:
      "A system should make the business easier to read, not harder to operate. Fewer states, fewer surprises, and a clear next action on every record.",
  },
  {
    number: "02",
    title: "Connected operations over isolated processes",
    body:
      "A sales order, a purchase commitment, a stock movement and a payment are one chain of events. Software should treat them that way instead of asking teams to reconcile them.",
  },
  {
    number: "03",
    title: "Better decisions through visibility",
    body:
      "Management cannot act on numbers that arrive after the decision. Operational and financial information belong in the same view, at the moment it matters.",
  },
  {
    number: "04",
    title: "Technology built around real business needs",
    body:
      "We design around how goods actually move, who approves what, and where cash actually lands — not around an idealised process that exists only in a document.",
  },
];

export const solutionAreas = [
  {
    id: "command",
    label: "WhizUnik Command",
    eyebrow: "Business operating system",
    title: "One operating layer for the whole business.",
    description:
      "An integrated business operating system for trading, distribution and manufacturing operations — sales, procurement, inventory, warehouse, production, approvals and finance working from the same record.",
    points: [
      "Sales, procurement and customer order lifecycles",
      "Inventory, warehouse, quality and dispatch control",
      "Approvals, checkers and transaction ownership",
      "Receivables, payables, treasury and cash visibility",
    ],
    cta: { label: "Explore WhizUnik Command", to: "/" },
    tone: "light" as const,
  },
  {
    id: "advisory",
    label: "Strategic Capital Advisory",
    eyebrow: "Capital advisory",
    title: "Capital conversations grounded in operations.",
    description:
      "Advisory focused on business financing requirements, commercial transactions and capital structuring — assessed against the operating reality of the business rather than a summary spreadsheet.",
    points: [
      "Working capital and cash conversion assessment",
      "Structured growth capital discussions",
      "Transaction and trade finance context",
      "Capital readiness and lender-facing information",
    ],
    cta: { label: "Explore Capital Advisory", to: "/services" },
    tone: "dark" as const,
  },
];

export const approachSteps = [
  {
    number: "01",
    title: "Understand the business",
    body:
      "Start with how the company actually trades — products, customers, suppliers, transaction volumes and the people accountable for each step.",
  },
  {
    number: "02",
    title: "Identify operational challenges",
    body:
      "Locate where information breaks down: manual handovers, delayed approvals, stock mismatches, unclear ownership and late financial reporting.",
  },
  {
    number: "03",
    title: "Design relevant solutions",
    body:
      "Define the workflows, controls and reporting the business needs — in the sequence that removes the most friction first.",
  },
  {
    number: "04",
    title: "Connect processes and systems",
    body:
      "Bring sales, procurement, inventory, production, dispatch and finance onto a shared transaction record, with marketplace and accounting links where they apply.",
  },
  {
    number: "05",
    title: "Support better business visibility",
    body:
      "Give management a running view of orders, stock, commitments and cash — and support the capital conversations that follow from it.",
  },
];

export const operatingDisciplines = [
  {
    title: "Role-led team model",
    description:
      "Every desk — sales, procurement, checker verification, treasury and warehouse — is structured with clear ownership rather than personality-driven silos.",
  },
  {
    title: "Segregation of duties",
    description:
      "No single user initiates, approves and disburses without independent checker review.",
  },
  {
    title: "Truth on the dock",
    description:
      "Goods receipt and gate release govern inventory, not paper assumptions.",
  },
  {
    title: "Realised treasury",
    description:
      "Available cash reflects verified bank remittances, keeping projected funds distinct from realised balances.",
  },
];
