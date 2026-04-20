// EILITE Insurance Agency — boutique brokerage, Harare
// Single source of truth for all page content.

export const business = {
  name: "EILITE Insurance Agency",
  shortName: "EILITE",
  tagline: "Smarter cover. In minutes.",
  established: 2019,
  city: "Harare",
  country: "Zimbabwe",
  website: "https://eiliteinsurance.co.zw",
  phone: "+263 71 259 3700",
  phoneRaw: "+263712593700",
  whatsapp: "+263712593700",
  whatsappDisplay: "+263 71 259 3700",
  email: "info@eiliteinsurance.co.zw",
  address: "3rd Floor, Suite 415, Electra House, 49 Samora Machel Ave, Harare",
  addressShort: "Electra House, 49 Samora Machel Ave",
  mapEmbed:
    "https://www.google.com/maps?q=Electra+House+49+Samora+Machel+Avenue+Harare&output=embed",
  hours: {
    weekdays: "08:00 – 17:00",
    saturday: "09:00 – 13:00",
    sunday: "Closed",
  },
  rating: 4.9,
  reviewCount: 57,
  social: {
    facebook: "https://facebook.com/eiliteinsurance",
    linkedin: "https://linkedin.com/company/eilite-insurance",
    instagram: "https://instagram.com/eilite_insurance",
  },
  regulator: "Regulated by the Insurance & Pensions Commission of Zimbabwe (IPEC)",
  licenceNo: "IPEC-AG/2019/4812",
};

export const waHref = (msg = "Hi EILITE, I'd like to enquire about insurance cover.") =>
  `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(msg)}`;

export const mailHref = (subject, body) =>
  `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// ---------- HERO ----------
export const hero = {
  eyebrow: "Harare · Boutique Insurance Brokerage",
  headline: "Smarter cover.",
  headlineAccent: "In minutes.",
  sub: "EILITE is a boutique brokerage that compares policies from Zimbabwe's leading underwriters and builds cover that actually fits your life — vehicles, homes, businesses, travel and health.",
  ctaPrimary: { label: "Get a Quote", to: "/quote" },
  ctaSecondary: { label: "Browse Products", to: "/products" },
  stat: { value: "4.9/5", label: "rated by 57 clients" },
  heroImage:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
  heroImageAlt: "EILITE broker meeting with a client in a modern Harare office",
  supportStrip: [
    { label: "Multi-insurer panel", value: "12+" },
    { label: "Avg. quote time", value: "3 min" },
    { label: "Claims paid on time", value: "98%" },
    { label: "IPEC licensed", value: "✓" },
  ],
};

// ---------- QUICK QUOTE (hero mini-form) ----------
export const quickQuoteTypes = [
  { key: "vehicle", label: "Vehicle" },
  { key: "home", label: "Home" },
  { key: "business", label: "Business" },
];

// ---------- PRODUCTS ----------
export const products = [
  {
    slug: "vehicle",
    icon: "Car",
    name: "Vehicle Insurance",
    tagline: "Third-party to fully comprehensive — on any budget.",
    summary:
      "From basic RTA cover to fully comprehensive motor policies with windscreen, roadside and personal accident. We quote across 12 underwriters so you never overpay.",
    features: [
      "Comprehensive, Third Party Fire & Theft, or Third Party only",
      "Private, commercial, fleet and PSV vehicles",
      "ZBC Radio Licence & ZINARA facilitation",
      "Free quote in under 3 minutes",
      "Policy issued same-day",
    ],
    popular: true,
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
    startFrom: "From US$38 / quarter",
  },
  {
    slug: "home",
    icon: "House",
    name: "Home Contents & Buildings",
    tagline: "Protect the roof, and everything under it.",
    summary:
      "All-risks home cover for buildings and contents — fire, burglary, flood, accidental damage and personal possessions. Tailored valuations for high-value items.",
    features: [
      "Buildings & contents combined or separate",
      "All-risks cover for jewellery, electronics, art",
      "24/7 emergency assistance",
      "Free home valuation survey",
    ],
    popular: false,
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80",
    startFrom: "From US$12 / month",
  },
  {
    slug: "business",
    icon: "Briefcase",
    name: "Business & Commercial",
    tagline: "End-to-end cover for SMEs and corporates.",
    summary:
      "Property, stock, public liability, employer's liability, professional indemnity and business interruption. One broker, one invoice, one claims contact.",
    features: [
      "Fire, theft & all-risks on stock and assets",
      "Public & product liability up to US$5M",
      "Employer's liability & group personal accident",
      "Professional indemnity for consultants",
      "Business interruption & cyber add-ons",
    ],
    popular: true,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    startFrom: "Quote on request",
  },
  {
    slug: "travel",
    icon: "Airplane",
    name: "Travel Insurance",
    tagline: "Cover that travels as far as you do.",
    summary:
      "Single-trip, multi-trip and Schengen-compliant travel cover for leisure, business and study abroad. Medical emergencies, cancellation, baggage and COVID-19 covered.",
    features: [
      "Schengen-visa compliant policies",
      "Medical emergency cover up to US$100K",
      "Trip cancellation & curtailment",
      "Lost baggage & travel documents",
      "Policies issued in minutes via email",
    ],
    popular: false,
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    startFrom: "From US$9 / trip",
  },
  {
    slug: "medical",
    icon: "FirstAid",
    name: "Medical Aid & Health",
    tagline: "Private healthcare for families & employees.",
    summary:
      "Hospital cash plans, full medical aid and group health schemes through CIMAS, First Mutual and Premier Medical Aid. We negotiate the best group rates for SMEs.",
    features: [
      "Individual, family and group schemes",
      "Hospital cash plans from US$7/month",
      "International referral cover available",
      "Chronic medication benefit",
      "Dental and optical included on senior plans",
    ],
    popular: true,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    startFrom: "From US$7 / month",
  },
  {
    slug: "life",
    icon: "Heart",
    name: "Life & Funeral Assurance",
    tagline: "Peace of mind for the people you love.",
    summary:
      "Term life, whole life and funeral cash plans through Nyaradzo, Old Mutual and First Mutual. Fast claim turnaround — because speed matters most when it matters most.",
    features: [
      "Term life cover up to US$500K sum assured",
      "Family funeral cash plans (up to 10 beneficiaries)",
      "Education & retirement savings riders",
      "No medical exam on cover up to US$50K",
    ],
    popular: false,
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    startFrom: "From US$5 / month",
  },
];

// ---------- WHY EILITE ----------
export const whyUs = [
  {
    icon: "ShieldCheck",
    title: "IPEC Licensed",
    text: "Fully regulated brokerage — your premium is held in a dedicated IBA trust account at all times.",
  },
  {
    icon: "Handshake",
    title: "Independent Advice",
    text: "We aren't tied to any insurer. We work for you and quote the whole market to find better cover at better prices.",
  },
  {
    icon: "Clock",
    title: "Fast Turnaround",
    text: "Most quotes are back within 3 minutes. Policies are issued same-day, digitally.",
  },
  {
    icon: "ChatCircleDots",
    title: "Human Support",
    text: "Direct access to your broker on WhatsApp — not a call-centre queue and not a chatbot.",
  },
];

// ---------- STATS ----------
export const stats = [
  { value: "57+", label: "Client reviews" },
  { value: "4.9", label: "Average rating" },
  { value: "12", label: "Underwriter panel" },
  { value: "98%", label: "Claims paid on time" },
];

// ---------- CLAIMS PROCESS ----------
export const claims = {
  hotline: business.phone,
  whatsapp: business.whatsapp,
  email: business.email,
  afterHours: "+263 77 800 9000",
  steps: [
    {
      n: "01",
      title: "Report the incident",
      text: "Call the 24-hour hotline or WhatsApp us within 48 hours. We open a claim file immediately — no forms required at this stage.",
    },
    {
      n: "02",
      title: "Gather documents",
      text: "We'll send you a short checklist: police report, photos, receipts, medical reports — whatever fits your claim type. Send them via WhatsApp or email.",
    },
    {
      n: "03",
      title: "Assessment & approval",
      text: "A loss adjuster (where needed) inspects within 48 hours. Straightforward claims are approved the same day by the underwriter.",
    },
    {
      n: "04",
      title: "Payout",
      text: "Approved claims settle directly to your nominated account or repairer — typically within 5 working days for motor, 10 for home, 14 for commercial.",
    },
  ],
};

// ---------- STORY / ABOUT ----------
export const story = {
  founded: 2019,
  eyebrow: "Our Story",
  headline: "A brokerage built for the way Harare actually lives.",
  body: [
    "EILITE was founded in 2019 by a small team who had spent a decade inside Zimbabwe's largest insurance companies — and kept watching good clients walk away because cover was confusing, slow, or simply the wrong fit.",
    "So we started a boutique brokerage with one rule: every client gets real human advice, a clear comparison across the market, and a broker who picks up the phone.",
    "Today we look after families, SMEs and individual professionals across Harare and beyond — with a 4.9/5 rating across 57 reviews and a 98% on-time claims record.",
  ],
  values: [
    { title: "Independent", text: "We quote the market, not a single insurer." },
    { title: "Human-scale", text: "Direct access to your broker — every time." },
    { title: "Fast", text: "Quotes in minutes, policies issued same-day." },
    { title: "Transparent", text: "No hidden commissions. Every fee explained." },
  ],
};

// ---------- TEAM ----------
export const team = [
  {
    name: "Farai Mukonoweshuro",
    role: "Principal Broker & Managing Director",
    bio: "Twelve years in Zimbabwean short-term insurance — previously at Old Mutual and Alliance. FCII qualified.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Tendai Chikafu",
    role: "Head of Commercial Lines",
    bio: "Specialises in SME and corporate cover — construction, retail, logistics and professional indemnity portfolios.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Rudo Nyemba",
    role: "Personal Lines Advisor",
    bio: "Your first point of contact for motor, home, travel and life cover. Known for catching the details everyone else misses.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
];

// ---------- REVIEWS ----------
export const reviews = [
  {
    name: "Tapiwa M.",
    role: "SME owner, Graniteside",
    rating: 5,
    text: "I switched our fleet cover to EILITE after years with a direct insurer. Saved 28% on the same cover and actually get WhatsApp replies within minutes. Night and day.",
    date: "3 months ago",
  },
  {
    name: "Chipo Muzenda",
    role: "Travel agent",
    rating: 5,
    text: "Needed Schengen travel cover for a Friday flight — got the policy certificate by email the same afternoon. Embassy accepted it without question.",
    date: "5 months ago",
  },
  {
    name: "Dr. Nigel K.",
    role: "Private practitioner",
    rating: 5,
    text: "Arranged my professional indemnity and practice insurance. Rudo walked me through things my last broker never bothered to explain. Would recommend without hesitation.",
    date: "1 month ago",
  },
  {
    name: "Kudakwashe T.",
    role: "Homeowner, Borrowdale",
    rating: 5,
    text: "Our geyser burst on a Sunday — EILITE's after-hours line had an assessor at the house by Monday morning. Claim settled in eight days. That's the whole point of insurance.",
    date: "2 months ago",
  },
  {
    name: "Ruvimbo S.",
    role: "HR Manager, retail group",
    rating: 4,
    text: "We moved our 82-person group medical aid to EILITE last renewal. Better rates from CIMAS and a proper annual review. Only asking for the portal to include more analytics.",
    date: "4 months ago",
  },
];

// ---------- FAQ ----------
export const faqs = [
  {
    q: "Are you an insurance company or a broker?",
    a: "We're an independent brokerage. That means we compare policies across 12+ underwriters and recommend the best fit for your situation — we don't sell our own insurance.",
  },
  {
    q: "Do I pay extra for using a broker?",
    a: "No. Our commission is built into the insurer's premium and is the same whether you buy direct or through us. In most cases we negotiate better rates than you'd get going direct.",
  },
  {
    q: "How fast can I get a quote?",
    a: "For motor, home, travel and life — under 3 minutes via WhatsApp or our online form. Commercial quotes take a bit longer, usually 24 hours.",
  },
  {
    q: "Are you regulated?",
    a: "Yes. EILITE is licensed by the Insurance & Pensions Commission of Zimbabwe (IPEC), licence no. IPEC-AG/2019/4812.",
  },
  {
    q: "What happens if I need to claim?",
    a: "Call our 24-hour hotline or WhatsApp us. We handle the paperwork with the underwriter on your behalf and stay on the claim until it's paid.",
  },
];

// ---------- PARTNERS ----------
export const partners = [
  "Old Mutual",
  "Nyaradzo",
  "First Mutual",
  "Alliance",
  "CIMAS",
  "Premier",
  "Zimnat",
  "Champions",
  "Cell Insurance",
  "Fidelity Life",
];
