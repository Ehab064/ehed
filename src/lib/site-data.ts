import { useI18n, type Lang } from "@/lib/i18n";

export const COMPANY_BASE = {
  short: "EHED",
  legalName: "Experience House for Electronic Devices Ltd.",
  phone: "+250 791 704 237",
  phoneHref: "+250791704237",
  phoneSa: "+966 56 846 9695",
  phoneSaHref: "+966568469695",
  website: "www.ehedegypt.com",
  email: "info@ehedegypt.com",
  linkedin: "https://www.linkedin.com/company/ehed",
};

export type ServiceCategory = "business" | "technology";

export type Service = {
  slug: string;
  title: string;
  description: string;
  benefit: string;
  need: string;
  outcome: string;
  featured?: boolean;
};

export type MarketTier = "base" | "focus" | "connection";

export type Market = {
  code: string;
  name: string;
  role: string;
  tier: MarketTier;
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

const EN = {
  COMPANY: {
    ...COMPANY_BASE,
    name: "Experience House (EHED)",
    tagline: "Your Regional Business Gateway",
    address: "Ikaze House, Remera, Kigali, Rwanda",
  },
  NAV: [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Markets", to: "/markets" },
    
  ],
  SERVICES: [
    {
      slug: "regional-business-development",
      title: "Regional Business Development",
      description:
        "Identifying practical business opportunities, connecting relevant stakeholders, and supporting the development of regional commercial relationships.",
      benefit: "Turn regional opportunities into structured business initiatives.",
      need: "A company sees potential in the region but has no structured way to develop it.",
      outcome: "A clearer set of qualified opportunities and relevant regional contacts.",
    },
    {
      slug: "market-entry",
      title: "Market Entry Support",
      description:
        "Helping companies understand target markets, identify suitable entry routes, and coordinate the first stages of regional expansion.",
      benefit: "Enter East African markets with informed local support.",
      need: "A company wants to explore or enter an East African market but lacks local knowledge and reliable coordination.",
      outcome: "A clearer entry path supported by relevant local information and relationships.",
    },
    {
      slug: "representation",
      title: "Business Representation",
      description:
        "Providing a local point of coordination for companies seeking market visibility, customer engagement, and business follow-up in the region.",
      benefit: "Build a regional presence without immediately establishing a full local operation.",
      need: "A company needs consistent local follow-up but is not ready to open its own office.",
      outcome: "Continuous local coordination and visibility with regional customers and partners.",
    },
    {
      slug: "strategic-partnerships",
      title: "Strategic Partnerships",
      description:
        "Identifying and facilitating relationships with potential distributors, suppliers, manufacturers, investors, and institutional partners.",
      benefit: "Build stronger partnerships with relevant regional stakeholders.",
      need: "A company is looking for credible regional partners and a reliable way to approach them.",
      outcome: "Introductions and coordinated engagement with relevant partners.",
    },
    {
      slug: "trade-facilitation",
      title: "Trade Facilitation",
      description:
        "Coordinating commercial communication, documentation, local requirements, and cross-border business processes.",
      benefit: "Reduce complexity across regional transactions.",
      need: "Cross-border transactions are slowed by communication gaps and local requirements.",
      outcome: "Smoother coordination between the parties involved in a transaction.",
    },
    {
      slug: "sourcing",
      title: "Sourcing & Procurement",
      description:
        "Supporting the identification, preliminary assessment, and coordination of suppliers, products, and procurement opportunities.",
      benefit: "Access suitable regional and international supply options.",
      need: "A buyer needs supply options but cannot assess or reach them directly.",
      outcome: "A shortlist of relevant supply options and coordinated communication.",
    },
    {
      slug: "industrial-technology",
      title: "Industrial & Technology Solutions",
      description:
        "Supporting clients from needs discovery and solution architecture through supplier coordination, integration, implementation, training, and lifecycle support. Focus areas include industrial identification, labeling, traceability, automatic Print & Apply, RFID, warehouse identification, shop-floor visibility, and networking.",
      benefit: "Improve operational visibility, efficiency, traceability and process control.",
      need: "An operation needs better identification, traceability or shop-floor visibility and a partner able to coordinate the solution.",
      outcome: "A practical solution path with coordinated suppliers, implementation and ongoing support.",
      featured: true,
    },
    {
      slug: "logistics",
      title: "Supply Chain & Logistics Facilitation",
      description:
        "Coordinating with relevant service providers to support supply movement, documentation, and delivery planning.",
      benefit: "Improve coordination across the supply chain.",
      need: "Movement and documentation are handled by several parties with no single coordinator.",
      outcome: "Better planned movement and clearer coordination between providers.",
    },
  ] as Service[],
  MARKETS: [
    withGeo({
      code: "RW",
      name: "Rwanda",
      role: "Regional Base",
      tier: "base",
      summary:
        "EHED's regional base for business development, partner coordination, market engagement, and regional project support.",
      highlights: ["Base in Kigali", "Partner coordination", "Regional project support"],
    }),
    withGeo({
      code: "KE",
      name: "Kenya",
      role: "Focus Market",
      tier: "focus",
      summary: "A major regional business, manufacturing, logistics, and distribution market.",
      highlights: ["Business & manufacturing", "Logistics networks", "Regional distribution"],
    }),
    withGeo({
      code: "UG",
      name: "Uganda",
      role: "Focus Market",
      tier: "focus",
      summary:
        "An important market for agriculture, industry, regional trade, and distribution opportunities.",
      highlights: ["Agriculture & industry", "Regional trade", "Distribution opportunities"],
    }),
    withGeo({
      code: "TZ",
      name: "Tanzania",
      role: "Focus Market",
      tier: "focus",
      summary:
        "A large regional market with industrial, agricultural, logistics, and investment opportunities.",
      highlights: ["Industrial activity", "Logistics corridors", "Investment opportunities"],
    }),
    withGeo({
      code: "CD",
      name: "DR Congo",
      role: "Focus Market",
      tier: "focus",
      summary:
        "A developing neighbouring market with significant demand across infrastructure, industry, technology, and consumer sectors.",
      highlights: ["Infrastructure demand", "Industry & technology", "Consumer sectors"],
    }),
    withGeo({
      code: "EG",
      name: "Egypt",
      role: "Business Connection Market",
      tier: "connection",
      summary:
        "A key market for manufacturers, suppliers, investors, industrial capabilities, and commercial partnerships.",
      highlights: ["Manufacturers & suppliers", "Industrial capabilities", "Commercial partnerships"],
    }),
    withGeo({
      code: "SA",
      name: "Saudi Arabia",
      role: "Business Connection Market",
      tier: "connection",
      summary:
        "A strategic market for business partnerships, industrial expertise, investment relationships, and regional opportunities.",
      highlights: ["Business partnerships", "Industrial expertise", "Investment relationships"],
    }),
  ] as Market[],
  MARKET_NOTE:
    "Market engagement and delivery arrangements are defined according to each opportunity, the required local capabilities, and the scope agreed with the client or partner.",
  GCC_NOTE:
    "GCC / Middle East — Strategic Business Region: a wider region for strategic partners, manufacturers, suppliers, investors, and market connections.",
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
      title: "Regional Position",
      text: "A central base for engaging with East African markets and the DRC.",
    },
    {
      title: "Business Environment",
      text: "A structured environment for building regional and international business relationships.",
    },
    {
      title: "Connectivity",
      text: "Access to regional transport, aviation, communication, and business networks.",
    },
    {
      title: "Local Coordination",
      text: "A practical base for meetings, market follow-up, partner coordination, and business development.",
    },
  ],
  WHY_EHED: [
    {
      title: "Regional Understanding",
      text: "Practical understanding of East African business environments and regional market dynamics.",
    },
    {
      title: "Cross-Regional Perspective",
      text: "Business experience and relationships connecting East Africa with Egypt, Saudi Arabia, and the wider Middle East.",
    },
    {
      title: "Flexible Engagement",
      text: "Support structured around each client's objectives, market stage, and operational requirements.",
    },
    {
      title: "Partner-Driven Approach",
      text: "Collaboration with manufacturers, suppliers, specialists, and service providers according to project needs.",
    },
    {
      title: "Business and Technology Capability",
      text: "A combination of commercial development experience and practical industrial and technology understanding.",
    },
    {
      title: "Direct Coordination",
      text: "Clear communication and direct senior-level involvement throughout the engagement.",
    },
  ],
  ENGAGEMENT_MODELS: [
    "Project-Based Engagement",
    "Market Development Assignment",
    "Business Representation",
    "Strategic Partnership Development",
    "Sourcing and Trade Facilitation",
    "Industrial and Technology Project Support",
  ],
  PROCESS: [
    {
      step: "01",
      title: "Understand",
      text: "We clarify the client's objectives, capabilities, target markets, and expected outcomes.",
    },
    {
      step: "02",
      title: "Assess",
      text: "We review the opportunity, relevant stakeholders, practical requirements, and possible constraints.",
    },
    {
      step: "03",
      title: "Connect and Develop",
      text: "We identify suitable relationships, coordinate engagement, and develop the recommended approach.",
    },
    {
      step: "04",
      title: "Support Implementation",
      text: "We assist with follow-up, local coordination, partner communication, and agreed project activities.",
    },
    {
      step: "05",
      title: "Review and Expand",
      text: "We evaluate progress and identify the next practical stage of market or business development.",
    },
  ],
};

const AR: typeof EN = {
  COMPANY: {
    ...COMPANY_BASE,
    name: "إكسبيريانس هاوس (EHED)",
    tagline: "بوابتك للأعمال الإقليمية",
    address: "إيكازي هاوس، ريميرا، كيغالي، رواندا",
  },
  NAV: [
    { label: "الرئيسية", to: "/" },
    { label: "من نحن", to: "/about" },
    { label: "الخدمات", to: "/services" },
    { label: "الأسواق", to: "/markets" },
    
  ],
  SERVICES: [
    {
      slug: "regional-business-development",
      title: "تطوير الأعمال الإقليمية",
      description:
        "تحديد فرص الأعمال العملية، وربط الأطراف المعنية، ودعم بناء العلاقات التجارية الإقليمية.",
      benefit: "تحويل الفرص الإقليمية إلى مبادرات أعمال منظّمة.",
      need: "شركة ترى إمكانات في المنطقة لكن دون آلية منظّمة لتطويرها.",
      outcome: "مجموعة أوضح من الفرص المؤهلة وجهات اتصال إقليمية ذات صلة.",
    },
    {
      slug: "market-entry",
      title: "دعم دخول الأسواق",
      description:
        "مساعدة الشركات على فهم الأسواق المستهدفة، وتحديد مسارات الدخول المناسبة، وتنسيق المراحل الأولى من التوسع الإقليمي.",
      benefit: "ادخل أسواق شرق أفريقيا بدعم محلي مبني على المعرفة.",
      need: "شركة ترغب في استكشاف أو دخول سوق في شرق أفريقيا لكنها تفتقر للمعرفة المحلية والتنسيق الموثوق.",
      outcome: "مسار دخول أوضح مدعوم بمعلومات وعلاقات محلية ذات صلة.",
    },
    {
      slug: "representation",
      title: "التمثيل التجاري",
      description:
        "توفير نقطة تنسيق محلية للشركات الساعية إلى حضور سوقي وتفاعل مع العملاء ومتابعة أعمالها في المنطقة.",
      benefit: "حضور إقليمي دون الحاجة الفورية لتأسيس عملية محلية كاملة.",
      need: "شركة تحتاج متابعة محلية مستمرة لكنها غير مستعدة لفتح مكتب خاص بها.",
      outcome: "تنسيق محلي مستمر وحضور واضح لدى العملاء والشركاء الإقليميين.",
    },
    {
      slug: "strategic-partnerships",
      title: "الشراكات الاستراتيجية",
      description:
        "تحديد وتيسير العلاقات مع الموزعين والموردين والمصنّعين والمستثمرين والشركاء المؤسسيين المحتملين.",
      benefit: "بناء شراكات أقوى مع أطراف إقليمية ذات صلة.",
      need: "شركة تبحث عن شركاء إقليميين موثوقين وطريقة موثوقة للتواصل معهم.",
      outcome: "تعريفات وتواصل منسّق مع الشركاء المناسبين.",
    },
    {
      slug: "trade-facilitation",
      title: "تيسير التجارة",
      description:
        "تنسيق التواصل التجاري والمستندات والمتطلبات المحلية وعمليات الأعمال العابرة للحدود.",
      benefit: "تقليل التعقيد في المعاملات الإقليمية.",
      need: "معاملات عابرة للحدود تتأخر بسبب فجوات التواصل والمتطلبات المحلية.",
      outcome: "تنسيق أكثر سلاسة بين الأطراف المشاركة في المعاملة.",
    },
    {
      slug: "sourcing",
      title: "التوريد والمشتريات",
      description:
        "دعم تحديد الموردين والمنتجات وفرص الشراء وتقييمها المبدئي وتنسيقها.",
      benefit: "الوصول إلى خيارات توريد إقليمية ودولية مناسبة.",
      need: "مشترٍ يحتاج خيارات توريد لكنه لا يستطيع تقييمها أو الوصول إليها مباشرة.",
      outcome: "قائمة مختصرة بخيارات التوريد المناسبة وتواصل منسّق.",
    },
    {
      slug: "industrial-technology",
      title: "الحلول الصناعية والتقنية",
      description:
        "دعم العملاء من تحديد الاحتياج وتصميم الحل إلى تنسيق الموردين والتكامل والتنفيذ والتدريب والدعم طوال دورة الحياة. تشمل مجالات التركيز التعريف الصناعي والملصقات والتتبع والطباعة واللصق الآلي وRFID وتعريف المستودعات ووضوح خط الإنتاج والشبكات.",
      benefit: "تحسين وضوح العمليات والكفاءة والتتبع والتحكم في المسارات.",
      need: "منشأة تحتاج تعريفاً وتتبعاً أفضل أو وضوحاً في خط الإنتاج وشريكاً قادراً على تنسيق الحل.",
      outcome: "مسار حل عملي مع موردين منسّقين وتنفيذ ودعم مستمر.",
      featured: true,
    },
    {
      slug: "logistics",
      title: "تيسير سلسلة الإمداد واللوجستيات",
      description:
        "التنسيق مع مزودي الخدمات المعنيين لدعم حركة التوريد والمستندات وتخطيط التسليم.",
      benefit: "تحسين التنسيق عبر سلسلة الإمداد.",
      need: "الحركة والمستندات موزعة بين عدة أطراف دون منسّق واحد.",
      outcome: "حركة أفضل تخطيطاً وتنسيق أوضح بين مزودي الخدمة.",
    },
  ] as Service[],
  MARKETS: [
    withGeo({
      code: "RW",
      name: "رواندا",
      role: "القاعدة الإقليمية",
      tier: "base",
      summary:
        "القاعدة الإقليمية لـ EHED لتطوير الأعمال وتنسيق الشركاء والتفاعل مع الأسواق ودعم المشاريع الإقليمية.",
      highlights: ["القاعدة في كيغالي", "تنسيق الشركاء", "دعم المشاريع الإقليمية"],
    }),
    withGeo({
      code: "KE",
      name: "كينيا",
      role: "سوق تركيز",
      tier: "focus",
      summary: "سوق إقليمي رئيسي للأعمال والتصنيع والخدمات اللوجستية والتوزيع.",
      highlights: ["الأعمال والتصنيع", "شبكات لوجستية", "توزيع إقليمي"],
    }),
    withGeo({
      code: "UG",
      name: "أوغندا",
      role: "سوق تركيز",
      tier: "focus",
      summary: "سوق مهم للزراعة والصناعة والتجارة الإقليمية وفرص التوزيع.",
      highlights: ["الزراعة والصناعة", "التجارة الإقليمية", "فرص التوزيع"],
    }),
    withGeo({
      code: "TZ",
      name: "تنزانيا",
      role: "سوق تركيز",
      tier: "focus",
      summary: "سوق إقليمي كبير بفرص صناعية وزراعية ولوجستية واستثمارية.",
      highlights: ["نشاط صناعي", "ممرات لوجستية", "فرص استثمارية"],
    }),
    withGeo({
      code: "CD",
      name: "الكونغو الديمقراطية",
      role: "سوق تركيز",
      tier: "focus",
      summary:
        "سوق مجاور نامٍ بطلب كبير في البنية التحتية والصناعة والتقنية والقطاعات الاستهلاكية.",
      highlights: ["طلب على البنية التحتية", "الصناعة والتقنية", "قطاعات استهلاكية"],
    }),
    withGeo({
      code: "EG",
      name: "مصر",
      role: "سوق ارتباط تجاري",
      tier: "connection",
      summary:
        "سوق رئيسي للمصنّعين والموردين والمستثمرين والقدرات الصناعية والشراكات التجارية.",
      highlights: ["مصنّعون وموردون", "قدرات صناعية", "شراكات تجارية"],
    }),
    withGeo({
      code: "SA",
      name: "السعودية",
      role: "سوق ارتباط تجاري",
      tier: "connection",
      summary:
        "سوق استراتيجي لشراكات الأعمال والخبرات الصناعية والعلاقات الاستثمارية والفرص الإقليمية.",
      highlights: ["شراكات أعمال", "خبرات صناعية", "علاقات استثمارية"],
    }),
  ] as Market[],
  MARKET_NOTE:
    "يتم تحديد نطاق التفاعل مع كل سوق وترتيبات التنفيذ وفق كل فرصة والقدرات المحلية المطلوبة والنطاق المتفق عليه مع العميل أو الشريك.",
  GCC_NOTE:
    "الخليج والشرق الأوسط — منطقة أعمال استراتيجية: نطاق أوسع للشركاء الاستراتيجيين والمصنّعين والموردين والمستثمرين والارتباطات السوقية.",
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
      title: "الموقع الإقليمي",
      text: "قاعدة مركزية للتفاعل مع أسواق شرق أفريقيا والكونغو الديمقراطية.",
    },
    {
      title: "بيئة الأعمال",
      text: "بيئة منظّمة لبناء علاقات أعمال إقليمية ودولية.",
    },
    {
      title: "الترابط",
      text: "وصول إلى شبكات النقل والطيران والاتصالات والأعمال الإقليمية.",
    },
    {
      title: "التنسيق المحلي",
      text: "قاعدة عملية للاجتماعات ومتابعة الأسواق وتنسيق الشركاء وتطوير الأعمال.",
    },
  ],
  WHY_EHED: [
    {
      title: "فهم إقليمي",
      text: "فهم عملي لبيئات الأعمال في شرق أفريقيا وديناميكيات الأسواق الإقليمية.",
    },
    {
      title: "منظور عابر للمناطق",
      text: "خبرة وعلاقات أعمال تربط شرق أفريقيا بمصر والسعودية والشرق الأوسط الأوسع.",
    },
    {
      title: "تعاون مرن",
      text: "دعم مصمَّم حول أهداف كل عميل ومرحلته السوقية ومتطلباته التشغيلية.",
    },
    {
      title: "نهج قائم على الشراكة",
      text: "تعاون مع المصنّعين والموردين والمتخصصين ومزودي الخدمات وفق احتياجات المشروع.",
    },
    {
      title: "قدرة تجارية وتقنية",
      text: "مزيج من خبرة تطوير الأعمال والفهم العملي للحلول الصناعية والتقنية.",
    },
    {
      title: "تنسيق مباشر",
      text: "تواصل واضح ومشاركة مباشرة من الإدارة العليا طوال فترة التعاون.",
    },
  ],
  ENGAGEMENT_MODELS: [
    "تعاون قائم على المشاريع",
    "مهمة تطوير سوق",
    "التمثيل التجاري",
    "تطوير شراكات استراتيجية",
    "التوريد وتيسير التجارة",
    "دعم المشاريع الصناعية والتقنية",
  ],
  PROCESS: [
    {
      step: "01",
      title: "الفهم",
      text: "نوضّح أهداف العميل وقدراته وأسواقه المستهدفة والنتائج المتوقعة.",
    },
    {
      step: "02",
      title: "التقييم",
      text: "نراجع الفرصة والأطراف المعنية والمتطلبات العملية والقيود المحتملة.",
    },
    {
      step: "03",
      title: "الربط والتطوير",
      text: "نحدد العلاقات المناسبة وننسّق التواصل ونطوّر النهج الموصى به.",
    },
    {
      step: "04",
      title: "دعم التنفيذ",
      text: "نساعد في المتابعة والتنسيق المحلي والتواصل مع الشركاء وأنشطة المشروع المتفق عليها.",
    },
    {
      step: "05",
      title: "المراجعة والتوسع",
      text: "نقيّم التقدم ونحدد المرحلة العملية التالية من تطوير السوق أو الأعمال.",
    },
  ],
};

export const SITE_DATA: Record<Lang, typeof EN> = { ar: AR, en: EN };

export function getSiteData(lang: Lang) {
  return SITE_DATA[lang];
}

export function useSiteData() {
  return SITE_DATA[useI18n().lang];
}

// English defaults (used by SSR-only helpers such as sitemap/meta)
export const COMPANY = EN.COMPANY;
export const NAV = EN.NAV;
export const SERVICES = EN.SERVICES;
export const MARKETS = EN.MARKETS;
export const VALUES = EN.VALUES;
export const WHY_RWANDA = EN.WHY_RWANDA;
export const WHY_EHED = EN.WHY_EHED;
