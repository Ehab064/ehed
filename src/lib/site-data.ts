export const COMPANY = {
  name: "Experience House (EHED)",
  short: "EHED",
  tagline: "Your Regional Business Gateway",
  address: "Ikaze House, Remera, Kigali, Rwanda",
  phone: "+250 791 704 237",
  phoneHref: "+250791704237",
  website: "www.ehedegypt.com",
  email: "info@ehedegypt.com",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Markets", to: "/markets" },
  { label: "Coffee & Tea", to: "/coffee-tea" },
  { label: "Contact Us", to: "/contact" },
] as const;

export const STATS = [
  { value: "7+", label: "Markets Connected" },
  { value: "50+", label: "Business Partners" },
  { value: "100+", label: "Projects Delivered" },
  { value: "10+", label: "Years of Experience" },
];

export const SERVICES = [
  {
    slug: "trade-facilitation",
    title: "Trade Facilitation",
    description:
      "Supporting smooth cross-border business operations and commercial partnerships between East Africa and Middle East markets.",
    benefit: "Fewer barriers, faster deals across borders.",
  },
  {
    slug: "market-entry",
    title: "Market Entry Support",
    description:
      "Helping companies establish and expand within East African markets through local market guidance and operational support.",
    benefit: "Enter new markets with local intelligence on your side.",
  },
  {
    slug: "sourcing",
    title: "Supplier Sourcing & Procurement",
    description:
      "Identifying reliable suppliers, manufacturers, and procurement opportunities across regional markets.",
    benefit: "Verified suppliers and competitive procurement.",
  },
  {
    slug: "representation",
    title: "Business Representation",
    description:
      "Acting as a regional representative for companies seeking market presence and operational support in East Africa.",
    benefit: "A trusted presence on the ground without a local entity.",
  },
  {
    slug: "expansion",
    title: "Regional Expansion Support",
    description:
      "Providing coordination and strategic support for companies expanding into East African markets.",
    benefit: "A structured roadmap for regional growth.",
  },
  {
    slug: "logistics",
    title: "Logistics Coordination",
    description:
      "Coordinating sourcing, shipping, and operational business requirements across multiple markets.",
    benefit: "One coordinator across the full movement chain.",
  },
  {
    slug: "coffee-tea",
    title: "Coffee & Tea Export",
    description:
      "Supporting export opportunities for premium East African coffee and tea to Egypt, Saudi Arabia and regional markets.",
    benefit: "Direct access to premium origin products.",
  },
];

export type Market = {
  code: string;
  name: string;
  role: string;
  summary: string;
  highlights: string[];
  /** Position in the 100x100 map viewBox */
  x: number;
  y: number;
  hub?: boolean;
};

export const MARKETS: Market[] = [
  {
    code: "RW",
    name: "Rwanda",
    role: "Regional Hub",
    summary:
      "EHED's operational base. Rwanda offers a stable, business-friendly environment and direct access to the wider East African Community.",
    highlights: ["Head office in Kigali", "Ease of doing business", "Gateway to EAC & DRC"],
    x: 46,
    y: 58,
    hub: true,
  },
  {
    code: "UG",
    name: "Uganda",
    role: "East Africa",
    summary:
      "Agricultural sourcing and cross-border distribution corridor with strong demand for regional trade services.",
    highlights: ["Agri sourcing", "Distribution corridor", "Growing consumer market"],
    x: 52,
    y: 46,
  },
  {
    code: "KE",
    name: "Kenya",
    role: "East Africa",
    summary:
      "The region's commercial and logistics centre, connecting inland markets to the Indian Ocean through Mombasa.",
    highlights: ["Mombasa port access", "Financial services hub", "Regional headquarters"],
    x: 62,
    y: 43,
  },
  {
    code: "TZ",
    name: "Tanzania",
    role: "East Africa",
    summary:
      "Dar es Salaam corridor access, mining and agricultural sourcing, and a large domestic consumer base.",
    highlights: ["Dar es Salaam corridor", "Commodity sourcing", "Cross-border logistics"],
    x: 58,
    y: 64,
  },
  {
    code: "CD",
    name: "DRC",
    role: "East Africa",
    summary:
      "High-growth frontier market served through the Rwandan border, with strong demand for consumer and industrial goods.",
    highlights: ["Frontier demand", "Border trade via Rwanda", "Industrial supply"],
    x: 34,
    y: 58,
  },
  {
    code: "EG",
    name: "Egypt",
    role: "North Africa",
    summary:
      "A primary destination market for East African coffee, tea and agricultural products, plus a manufacturing sourcing base.",
    highlights: ["Coffee & tea demand", "Manufacturing sourcing", "MENA distribution"],
    x: 50,
    y: 14,
  },
  {
    code: "SA",
    name: "Saudi Arabia",
    role: "Middle East",
    summary:
      "Fast-growing Gulf demand for premium origin products and long-term regional partnership opportunities.",
    highlights: ["Premium product demand", "Gulf partnerships", "Long-term contracts"],
    x: 82,
    y: 22,
  },
];

export const VALUES = [
  "Professionalism",
  "Integrity",
  "Regional Connectivity",
  "Strategic Partnerships",
  "Business Growth",
  "Reliability",
];

export const WHY_RWANDA = [
  {
    title: "Stable & Business-Friendly",
    text: "Consistently ranked among Africa's easiest places to do business, with efficient company registration and transparent processes.",
  },
  {
    title: "Strategic Location",
    text: "A natural gateway between the East African Community, DRC and onward corridors to the Middle East and North Africa.",
  },
  {
    title: "Modern Infrastructure",
    text: "Reliable connectivity, logistics corridors and a growing international air network out of Kigali.",
  },
  {
    title: "Trusted Environment",
    text: "Strong governance and security standards that give international partners confidence to operate.",
  },
];
