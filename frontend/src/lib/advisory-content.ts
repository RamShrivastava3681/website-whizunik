export const principles = [
  {
    number: "01",
    title: "Understand the transaction",
    description:
      "Start with the commercial reality — the order, the counterparties, the terms and the operating constraints behind them.",
  },
  {
    number: "02",
    title: "Evaluate capital requirements",
    description:
      "Quantify what the business actually needs, when it needs it, and how existing obligations affect the answer.",
  },
  {
    number: "03",
    title: "Structure appropriate financing pathways",
    description:
      "Explore structures that fit the cash cycle and risk profile, rather than applying a standard product.",
  },
] as const;

export const capabilities = [
  {
    id: "working-capital",
    number: "01",
    tag: "Liquidity",
    title: "Working Capital & Liquidity",
    requirement:
      "Cash is committed to receivables, inventory and supplier terms before the customer pays.",
    process:
      "We map the cash conversion cycle, identify where working capital is trapped, and evaluate appropriate facilities — including supply-chain and receivable-linked structures where suitable.",
    context:
      "Relevant for trading and distribution businesses with seasonal peaks, long supplier lead times or concentrated debtor books.",
    illustration: "cycle",
  },
  {
    id: "growth-capital",
    number: "02",
    tag: "Growth financing",
    title: "Structured Growth Capital",
    requirement:
      "Capacity, capability or a contract win requires funding beyond what operating cash flow can support.",
    process:
      "We assess the commercial case, test the capital requirement against realistic cash generation, and explore structures that avoid unnecessary dilution — junior debt, mezzanine or asset-backed facilities where appropriate.",
    context:
      "Relevant for manufacturers and exporters adding capacity, fulfilling larger orders or funding geographic expansion.",
    illustration: "stack",
  },
  {
    id: "capital-readiness",
    number: "03",
    tag: "Market readiness",
    title: "Capital Strategy & Market Readiness",
    requirement:
      "Lenders and investors assess a business through its information before they assess its ambition.",
    process:
      "We help assemble the operating and financial narrative — information memorandums, cash-flow models, covenant analysis and due diligence documentation — so the business can be reviewed on its real performance.",
    context:
      "Relevant before a facility renewal, a new lender conversation, a diligence process or a capital raise.",
    illustration: "documents",
  },
] as const;

export const tradeStages = [
  {
    number: "01",
    stage: "Supplier",
    title: "Supplier commitment",
    description:
      "Goods or raw material are committed, often against an advance or short payment term.",
    requirement: "Supplier payment requirements",
    timing: "Cash out",
  },
  {
    number: "02",
    stage: "Procurement",
    title: "Purchase obligation",
    description:
      "The purchase order creates a funding requirement before the corresponding revenue is realised.",
    requirement: "Working capital requirement",
    timing: "Cash out",
  },
  {
    number: "03",
    stage: "Goods movement",
    title: "Shipment and documentation",
    description:
      "Transit, inspection and documentation milestones determine when the goods can be invoiced.",
    requirement: "Shipment milestones",
    timing: "In transit",
  },
  {
    number: "04",
    stage: "Buyer",
    title: "Customer terms",
    description:
      "The buyer is granted credit terms, extending the period between delivery and settlement.",
    requirement: "Buyer payment terms",
    timing: "Cash pending",
  },
  {
    number: "05",
    stage: "Payment",
    title: "Cash conversion",
    description:
      "Collection closes the cycle. The gap between payment out and payment in is the funding requirement.",
    requirement: "Cash conversion cycle",
    timing: "Cash in",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Initial Discussion",
    description: "Understand the business and its requirements.",
  },
  {
    number: "02",
    title: "Transaction Assessment",
    description: "Understand the commercial structure and underlying transaction.",
  },
  {
    number: "03",
    title: "Financial Review",
    description: "Review relevant business and financial information.",
  },
  {
    number: "04",
    title: "Structuring Discussion",
    description: "Explore appropriate capital and financing structures.",
  },
  {
    number: "05",
    title: "Next Steps",
    description: "Discuss potential pathways and requirements.",
  },
] as const;

export const credibilityPoints = [
  {
    title: "Understanding of trade operations",
    description:
      "Advice grounded in how purchase orders, shipments, inspections and collections actually behave.",
  },
  {
    title: "Commercial transaction awareness",
    description:
      "We start from the specific transaction and its counterparties, not from a product sheet.",
  },
  {
    title: "Financial and operational visibility",
    description:
      "Operating evidence — orders, stock, receivables — makes the capital conversation concrete.",
  },
  {
    title: "Structured assessment approach",
    description:
      "A defined sequence of discussion, review and structuring, with the reasoning made explicit.",
  },
] as const;
