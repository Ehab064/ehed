import { useI18n, type Lang } from "@/lib/i18n";

export const COMPANY_BASE = {
  short: "EHED",
  phone: "+250 791 704 237",
  phoneHref: "+250791704237",
  website: "www.ehedegypt.com",
  email: "info@ehedegypt.com",
};

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

const GEO: Record<string, { x: number; y: number; hub?: boolean }> = {
  RW: { x: 46, y: 58, hub: true },
  UG: { x: 52, y: 46 },
  KE: { x: 62, y: 43 },
  TZ: { x: 58, y: 64 },
  CD: { x: 34, y: 58 },
  EG: { x: 50, y: 14 },
  SA: { x: 82, y: 22 },
};

const withGeo = (m: Omit<Market, "x" | "y" | "hub">): Market => ({
  ...m,
  ...GEO[m.code]!,
});

const AR = {
  COMPANY: {
    ...COMPANY_BASE,
    name: "إكسبيريانس هاوس (EHED)",
    tagline: "بوابتك التجارية الإقليمية",
    address: "إيكازي هاوس، ريميرا، كيغالي، رواندا",
  },
  NAV: [
    { label: "الرئيسية", to: "/" },
    { label: "من نحن", to: "/about" },
    { label: "خدماتنا", to: "/services" },
    { label: "الأسواق", to: "/markets" },
    { label: "البن والشاي", to: "/coffee-tea" },
    { label: "تواصل معنا", to: "/contact" },
  ],
  STATS: [
    { value: "+7", label: "أسواق مترابطة" },
    { value: "+50", label: "شريك أعمال" },
    { value: "+100", label: "مشروع منفَّذ" },
    { value: "+10", label: "سنوات من الخبرة" },
  ],
  SERVICES: [
    {
      slug: "trade-facilitation",
      title: "تيسير التجارة",
      description:
        "دعم العمليات التجارية العابرة للحدود والشراكات التجارية بين أسواق شرق أفريقيا والشرق الأوسط بسلاسة وكفاءة.",
      benefit: "عوائق أقل وصفقات أسرع عبر الحدود.",
    },
    {
      slug: "market-entry",
      title: "دعم دخول الأسواق",
      description:
        "مساعدة الشركات على التأسيس والتوسع داخل أسواق شرق أفريقيا عبر الإرشاد المحلي والدعم التشغيلي.",
      benefit: "ادخل أسواقاً جديدة بمعرفة محلية موثوقة.",
    },
    {
      slug: "sourcing",
      title: "توريد الموردين والمشتريات",
      description:
        "تحديد الموردين والمصنّعين الموثوقين وفرص الشراء والتوريد عبر الأسواق الإقليمية.",
      benefit: "موردون موثّقون ومشتريات بأسعار تنافسية.",
    },
    {
      slug: "representation",
      title: "التمثيل التجاري",
      description:
        "العمل كممثل إقليمي للشركات الراغبة في حضور سوقي ودعم تشغيلي داخل شرق أفريقيا.",
      benefit: "حضور موثوق على الأرض دون الحاجة لكيان محلي.",
    },
    {
      slug: "expansion",
      title: "دعم التوسع الإقليمي",
      description:
        "توفير التنسيق والدعم الاستراتيجي للشركات التي تتوسع في أسواق شرق أفريقيا.",
      benefit: "خارطة طريق منظّمة للنمو الإقليمي.",
    },
    {
      slug: "logistics",
      title: "تنسيق الخدمات اللوجستية",
      description: "تنسيق التوريد والشحن والمتطلبات التشغيلية للأعمال عبر أسواق متعددة.",
      benefit: "منسّق واحد لسلسلة الحركة بالكامل.",
    },
    {
      slug: "coffee-tea",
      title: "تصدير البن والشاي",
      description:
        "دعم فرص تصدير البن والشاي الفاخر من شرق أفريقيا إلى مصر والسعودية والأسواق الإقليمية.",
      benefit: "وصول مباشر لمنتجات المنشأ الفاخرة.",
    },
  ],
  MARKETS: [
    withGeo({
      code: "RW",
      name: "رواندا",
      role: "المركز الإقليمي",
      summary:
        "المقر التشغيلي لـ EHED. توفر رواندا بيئة أعمال مستقرة وداعمة ووصولاً مباشراً إلى مجموعة شرق أفريقيا الأوسع.",
      highlights: ["المقر الرئيسي في كيغالي", "سهولة ممارسة الأعمال", "بوابة إلى شرق أفريقيا والكونغو"],
    }),
    withGeo({
      code: "UG",
      name: "أوغندا",
      role: "شرق أفريقيا",
      summary:
        "ممر للتوريد الزراعي والتوزيع العابر للحدود مع طلب قوي على خدمات التجارة الإقليمية.",
      highlights: ["توريد زراعي", "ممر توزيع", "سوق استهلاكي متنامٍ"],
    }),
    withGeo({
      code: "KE",
      name: "كينيا",
      role: "شرق أفريقيا",
      summary:
        "المركز التجاري واللوجستي للمنطقة، ويربط الأسواق الداخلية بالمحيط الهندي عبر ميناء مومباسا.",
      highlights: ["الوصول لميناء مومباسا", "مركز للخدمات المالية", "مقرات إقليمية"],
    }),
    withGeo({
      code: "TZ",
      name: "تنزانيا",
      role: "شرق أفريقيا",
      summary:
        "الوصول إلى ممر دار السلام، وتوريد المعادن والمنتجات الزراعية، وقاعدة استهلاكية محلية كبيرة.",
      highlights: ["ممر دار السلام", "توريد السلع", "لوجستيات عابرة للحدود"],
    }),
    withGeo({
      code: "CD",
      name: "الكونغو الديمقراطية",
      role: "شرق أفريقيا",
      summary:
        "سوق واعد سريع النمو يتم خدمته عبر الحدود الرواندية، مع طلب قوي على السلع الاستهلاكية والصناعية.",
      highlights: ["طلب على الأسواق الناشئة", "تجارة حدودية عبر رواندا", "إمداد صناعي"],
    }),
    withGeo({
      code: "EG",
      name: "مصر",
      role: "شمال أفريقيا",
      summary:
        "سوق وجهة رئيسي للبن والشاي والمنتجات الزراعية من شرق أفريقيا، إضافة إلى قاعدة توريد صناعية.",
      highlights: ["طلب على البن والشاي", "توريد صناعي", "توزيع في منطقة الشرق الأوسط"],
    }),
    withGeo({
      code: "SA",
      name: "السعودية",
      role: "الشرق الأوسط",
      summary: "طلب خليجي سريع النمو على منتجات المنشأ الفاخرة وفرص شراكة إقليمية طويلة الأمد.",
      highlights: ["طلب على المنتجات الفاخرة", "شراكات خليجية", "عقود طويلة الأجل"],
    }),
  ] as Market[],
  VALUES: [
    "الاحترافية",
    "النزاهة",
    "الترابط الإقليمي",
    "الشراكات الاستراتيجية",
    "نمو الأعمال",
    "الموثوقية",
  ],
  WHY_RWANDA: [
    {
      title: "بيئة مستقرة وداعمة للأعمال",
      text: "تُصنَّف رواندا باستمرار ضمن أسهل الوجهات لممارسة الأعمال في أفريقيا، بإجراءات تسجيل فعّالة وعمليات شفافة.",
    },
    {
      title: "موقع استراتيجي",
      text: "بوابة طبيعية بين مجموعة شرق أفريقيا والكونغو الديمقراطية والممرات الممتدة نحو الشرق الأوسط وشمال أفريقيا.",
    },
    {
      title: "بنية تحتية حديثة",
      text: "اتصال موثوق وممرات لوجستية وشبكة طيران دولية متنامية انطلاقاً من كيغالي.",
    },
    {
      title: "بيئة موثوقة",
      text: "معايير حوكمة وأمان قوية تمنح الشركاء الدوليين الثقة للعمل والاستثمار.",
    },
  ],
};

const EN: typeof AR = {
  COMPANY: {
    ...COMPANY_BASE,
    name: "Experience House (EHED)",
    tagline: "Your Regional Business Gateway",
    address: "Ikaze House, Remera, Kigali, Rwanda",
  },
  NAV: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Markets", to: "/markets" },
    { label: "Coffee & Tea", to: "/coffee-tea" },
    { label: "Contact", to: "/contact" },
  ],
  STATS: [
    { value: "7+", label: "Connected markets" },
    { value: "50+", label: "Business partners" },
    { value: "100+", label: "Projects delivered" },
    { value: "10+", label: "Years of experience" },
  ],
  SERVICES: [
    {
      slug: "trade-facilitation",
      title: "Trade Facilitation",
      description:
        "Supporting cross-border trade operations and commercial partnerships between East African and Middle Eastern markets, smoothly and efficiently.",
      benefit: "Fewer barriers and faster cross-border deals.",
    },
    {
      slug: "market-entry",
      title: "Market Entry Support",
      description:
        "Helping companies establish and expand within East African markets through local guidance and operational support.",
      benefit: "Enter new markets with trusted local knowledge.",
    },
    {
      slug: "sourcing",
      title: "Sourcing & Procurement",
      description:
        "Identifying reliable suppliers and manufacturers, and purchasing and supply opportunities across regional markets.",
      benefit: "Vetted suppliers and competitively priced procurement.",
    },
    {
      slug: "representation",
      title: "Business Representation",
      description:
        "Acting as a regional representative for companies seeking market presence and operational support inside East Africa.",
      benefit: "A trusted presence on the ground without a local entity.",
    },
    {
      slug: "expansion",
      title: "Regional Expansion Support",
      description:
        "Providing coordination and strategic support for companies expanding across East African markets.",
      benefit: "A structured roadmap for regional growth.",
    },
    {
      slug: "logistics",
      title: "Logistics Coordination",
      description:
        "Coordinating supply, shipping and operational requirements for businesses across multiple markets.",
      benefit: "One coordinator for the entire movement chain.",
    },
    {
      slug: "coffee-tea",
      title: "Coffee & Tea Export",
      description:
        "Supporting premium East African coffee and tea export opportunities to Egypt, Saudi Arabia and regional markets.",
      benefit: "Direct access to premium origin products.",
    },
  ],
  MARKETS: [
    withGeo({
      code: "RW",
      name: "Rwanda",
      role: "Regional hub",
      summary:
        "EHED's operational base. Rwanda offers a stable, business-friendly environment and direct access to the wider East African Community.",
      highlights: ["Headquarters in Kigali", "Ease of doing business", "Gateway to East Africa & DRC"],
    }),
    withGeo({
      code: "UG",
      name: "Uganda",
      role: "East Africa",
      summary:
        "A corridor for agricultural sourcing and cross-border distribution with strong demand for regional trade services.",
      highlights: ["Agricultural sourcing", "Distribution corridor", "Growing consumer market"],
    }),
    withGeo({
      code: "KE",
      name: "Kenya",
      role: "East Africa",
      summary:
        "The region's commercial and logistics hub, linking inland markets to the Indian Ocean via the Port of Mombasa.",
      highlights: ["Mombasa port access", "Financial services hub", "Regional headquarters"],
    }),
    withGeo({
      code: "TZ",
      name: "Tanzania",
      role: "East Africa",
      summary:
        "Access to the Dar es Salaam corridor, minerals and agricultural sourcing, and a large domestic consumer base.",
      highlights: ["Dar es Salaam corridor", "Commodity sourcing", "Cross-border logistics"],
    }),
    withGeo({
      code: "CD",
      name: "DR Congo",
      role: "East Africa",
      summary:
        "A fast-growing frontier market served across the Rwandan border, with strong demand for consumer and industrial goods.",
      highlights: ["Frontier market demand", "Border trade via Rwanda", "Industrial supply"],
    }),
    withGeo({
      code: "EG",
      name: "Egypt",
      role: "North Africa",
      summary:
        "A key destination market for East African coffee, tea and agricultural products, plus an industrial supply base.",
      highlights: ["Coffee & tea demand", "Industrial supply", "MENA distribution"],
    }),
    withGeo({
      code: "SA",
      name: "Saudi Arabia",
      role: "Middle East",
      summary:
        "Fast-growing Gulf demand for premium origin products and long-term regional partnership opportunities.",
      highlights: ["Premium product demand", "Gulf partnerships", "Long-term contracts"],
    }),
  ] as Market[],
  VALUES: [
    "Professionalism",
    "Integrity",
    "Regional connectivity",
    "Strategic partnerships",
    "Business growth",
    "Reliability",
  ],
  WHY_RWANDA: [
    {
      title: "Stable, business-friendly environment",
      text: "Rwanda is consistently ranked among the easiest places to do business in Africa, with efficient registration and transparent processes.",
    },
    {
      title: "Strategic location",
      text: "A natural gateway between the East African Community, the DRC and corridors reaching the Middle East and North Africa.",
    },
    {
      title: "Modern infrastructure",
      text: "Reliable connectivity, logistics corridors and a growing international air network out of Kigali.",
    },
    {
      title: "Trusted environment",
      text: "Strong governance and safety standards that give international partners the confidence to operate and invest.",
    },
  ],
};

export const SITE_DATA: Record<Lang, typeof AR> = { ar: AR, en: EN };

export function getSiteData(lang: Lang) {
  return SITE_DATA[lang];
}

export function useSiteData() {
  const { lang } = useI18n();
  return SITE_DATA[lang];
}

// Backwards-compatible Arabic defaults (used by SSR-only helpers such as sitemap/meta)
export const COMPANY = AR.COMPANY;
export const NAV = AR.NAV;
export const STATS = AR.STATS;
export const SERVICES = AR.SERVICES;
export const MARKETS = AR.MARKETS;
export const VALUES = AR.VALUES;
export const WHY_RWANDA = AR.WHY_RWANDA;
