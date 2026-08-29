export const SITE = {
  name: "VadTech Studio",
  tagline: "Websites, AI & Automation Built for Modern Businesses",
  email: "vadstudio30@gmail.com",
  whatsappNumber: "+1 289 472 2093",
  whatsappHref:
    "https://wa.me/12894722093?text=" +
    encodeURIComponent("Hi VadTech Studio, I'd like a free business consultation."),
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
    { label: "Facebook", href: "#" },
  ],
} as const;

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
] as const;

export const SERVICE_OPTIONS = [
  "New website",
  "Website redesign",
  "AI chatbot",
  "WhatsApp automation",
  "Booking system",
  "E-commerce store",
  "Other",
] as const;

export const SERVICES = [
  {
    icon: "🌐",
    title: "Business Websites",
    short: "Fast, mobile-first websites that turn visitors into paying customers.",
    long: "Conversion-focused websites built on modern technology — clear messaging, fast load times, strong SEO foundations and clear calls to action so your business looks credible and gets found.",
  },
  {
    icon: "🤖",
    title: "AI Automation",
    short: "Automate repetitive work so your team focuses on revenue.",
    long: "We map the repetitive tasks slowing your business down and replace them with reliable AI-driven workflows: lead routing, follow-ups, reporting, data entry and internal notifications.",
  },
  {
    icon: "💬",
    title: "AI Chatbots",
    short: "24/7 assistants that answer questions and capture leads.",
    long: "Trained on your business information, our chatbots answer common questions instantly, qualify enquiries and hand real opportunities to your team — day or night.",
  },
  {
    icon: "📅",
    title: "Booking & Appointment Systems",
    short: "Let customers book themselves, without back-and-forth.",
    long: "Online scheduling with reminders, calendar sync and automated confirmations. Fewer no-shows, less admin, more booked time.",
  },
  {
    icon: "📱",
    title: "WhatsApp Business Automation",
    short: "Automated replies, follow-ups and notifications on WhatsApp.",
    long: "Meet customers where they already are. We set up automated WhatsApp replies, lead capture, appointment reminders and follow-up sequences that keep conversations moving.",
  },
  {
    icon: "🛒",
    title: "E-commerce Websites",
    short: "Online stores built to sell, not just to look good.",
    long: "Product catalogues, secure checkout, abandoned-cart follow-ups and analytics — an online store engineered around your margins and your customers.",
  },
  {
    icon: "🔧",
    title: "Website Maintenance",
    short: "Updates, security, backups and performance care.",
    long: "Ongoing support so your site stays fast, secure and current: updates, monitoring, backups, content changes and performance tuning.",
  },
  {
    icon: "📈",
    title: "Business Digital Solutions",
    short: "Systems, integrations and dashboards tailored to you.",
    long: "When off-the-shelf tools don't fit, we design custom digital systems — internal tools, integrations and dashboards that connect the software you already use.",
  },
] as const;

export const AI_CAPABILITIES = [
  {
    title: "Customer Support",
    body: "AI answers your most common customer questions 24/7, in a tone that matches your brand.",
  },
  {
    title: "Lead Capture",
    body: "Automatically collects customer details, qualifies interest and sends real leads straight to you.",
  },
  {
    title: "Appointment Booking",
    body: "Customers schedule instantly instead of waiting for a reply — with automatic reminders.",
  },
  {
    title: "WhatsApp Automation",
    body: "Automate replies, follow-ups and notifications on the channel your customers already use.",
  },
  {
    title: "Business Workflow Automation",
    body: "Connect the tools you use and remove the repetitive manual steps between them.",
  },
] as const;

export const PROCESS = [
  { step: "01", title: "Discovery", body: "We learn your business, customers and the bottlenecks costing you time or sales." },
  { step: "02", title: "Strategy", body: "We map the right mix of website, AI and automation — with clear scope and outcomes." },
  { step: "03", title: "Build", body: "We design and build the system, testing on real devices and real workflows." },
  { step: "04", title: "Launch & Support", body: "We launch, measure and keep improving with ongoing support when you need it." },
] as const;

export const FAQS = [
  {
    q: "How long does a website take to build?",
    a: "Most business websites go live in 1–3 weeks depending on the number of pages and how quickly content is available. Larger e-commerce or custom builds take longer, and we always agree a timeline up front.",
  },
  {
    q: "What exactly is AI automation for a small business?",
    a: "It is software that handles repetitive work for you — answering common questions, capturing and qualifying leads, booking appointments, sending follow-ups and moving information between the tools you already use.",
  },
  {
    q: "How does your pricing work?",
    a: "Web solutions start from $500 and AI automation from $300. Final pricing depends on scope, so we quote after a short consultation. Custom solutions are quoted individually.",
  },
  {
    q: "Do you work with businesses outside your area?",
    a: "Yes. We work remotely with businesses in any location, communicating over WhatsApp, email and video calls.",
  },
  {
    q: "Can you improve a website I already have?",
    a: "Absolutely. We handle redesigns, performance and SEO improvements, and can add chatbots, booking or WhatsApp automation to an existing site.",
  },
  {
    q: "What happens after launch?",
    a: "You own everything we build. We offer maintenance and support plans covering updates, security, backups and improvements as your business grows.",
  },
] as const;

export const PRICING = [
  { name: "Web Solutions", price: "Starting from $500", body: "Business websites, redesigns and e-commerce stores built to convert." },
  { name: "AI Automation", price: "Starting from $300", body: "Chatbots, WhatsApp automation, booking systems and workflow automation." },
  { name: "Custom Solutions", price: "Let's discuss your needs", body: "Multi-system builds, integrations and tailored digital platforms." },
] as const;

export const TECHNOLOGIES = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "OpenAI",
  "WhatsApp Business API",
  "Supabase",
  "Stripe",
  "Make / Zapier",
  "Google Analytics",
] as const;
