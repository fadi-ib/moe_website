import {
  BadgeCheck,
  Bolt,
  Building2,
  CircleDollarSign,
  Clock3,
  Cpu,
  Facebook,
  Gauge,
  Hammer,
  HardHat,
  Home,
  Instagram,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  PanelTop,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  Zap
} from "lucide-react";

const whatsappMessage = "Hello Moe, I need an electrician for:\n- Repair\n- Installation\n- Generator\n- Panel Upgrade\n\nPlease contact me.";

export const site = {
  name: "Moe The Electrician",
  logo: "/images/moe-logo.png",
  phone: "+961 71 076 952",
  phoneHref: "tel:+96171076952",
  whatsappMessage,
  whatsapp: `https://wa.me/96171076952?text=${encodeURIComponent(whatsappMessage)}`,
  email: "info@moetheelectrician.com",
  emailHref: "mailto:info@moetheelectrician.com",
  address: "Serving Beirut, Mount Lebanon, Jounieh, Baabda, Aley and surrounding areas.",
  socials: [
    { label: "Facebook", href: "https://facebook.com", icon: Facebook },
    { label: "Instagram", href: "https://instagram.com", icon: Instagram }
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Quote", href: "/quote" },
    { label: "Contact", href: "/contact" }
  ]
};

export const servicesPreview = [
  { title: "Electrical Repairs", description: "Fast diagnostics and durable repairs for outlets, fixtures, breakers, and wiring issues.", icon: Wrench },
  { title: "Electrical Installations", description: "Clean installations for remodels, additions, appliances, EV-ready circuits, and new systems.", icon: Hammer },
  { title: "Lighting Systems", description: "Interior, exterior, recessed, security, and energy-efficient lighting designed for your space.", icon: Lightbulb },
  { title: "Circuit Breakers & Panels", description: "Panel repairs, breaker replacement, capacity upgrades, and safety improvements.", icon: PanelTop },
  { title: "Generator Installation", description: "Backup power planning and installation for homes and small businesses.", icon: Gauge },
  { title: "Smart Home Solutions", description: "Connected switches, smart lighting, thermostats, and automation-ready electrical upgrades.", icon: Cpu }
];

export const services = [
  { title: "Residential Electrical Services", description: "Repairs, upgrades, remodel wiring, outlets, switches, fixture installs, troubleshooting, and safety checks for modern homes.", icon: Home },
  { title: "Commercial Electrical Services", description: "Reliable electrical support for offices, retail spaces, restaurants, workshops, and light commercial properties.", icon: Building2 },
  { title: "Emergency Repairs", description: "Prompt response for power loss, burning smells, tripped breakers, damaged wiring, and urgent safety concerns.", icon: Zap },
  { title: "Panel Upgrades", description: "Service panel replacements, breaker upgrades, added capacity, subpanels, and code-conscious modernization.", icon: PanelTop },
  { title: "Lighting Installation", description: "Recessed lighting, landscape lighting, security lights, dimmers, fixture swaps, and lighting controls.", icon: Lightbulb },
  { title: "Generator Installation", description: "Generator setup, transfer switch installation, load planning, and dependable backup power solutions.", icon: Gauge },
  { title: "Wiring & Rewiring", description: "New circuits, room additions, old wiring replacement, dedicated appliance lines, and clean cable management.", icon: Bolt },
  { title: "Smart Home Electrical Systems", description: "Smart switches, connected lighting, device wiring, automation controls, and future-ready electrical planning.", icon: Cpu }
];

export const whyChooseUs = [
  { title: "Licensed Electrician", description: "Work completed with safety, compliance, and long-term reliability in mind.", icon: BadgeCheck },
  { title: "Fast Response", description: "Clear scheduling, prompt arrivals, and emergency support when timing matters.", icon: Clock3 },
  { title: "Affordable Pricing", description: "Transparent estimates and practical options before work begins.", icon: CircleDollarSign },
  { title: "Professional Workmanship", description: "Neat installs, careful cleanup, and results that look as good as they perform.", icon: HardHat },
  { title: "Emergency Support", description: "Urgent electrical help for power, panel, wiring, and safety issues.", icon: ShieldCheck }
];

export const testimonials = [
  {
    name: "Rania K.",
    role: "Homeowner in Baabda",
    quote: "Moe came the same day after our breakers kept tripping. He explained the issue clearly, replaced the faulty parts, and left everything neat."
  },
  {
    name: "Daniel M.",
    role: "Shop owner in Beirut",
    quote: "We needed lighting and extra outlets before reopening the shop. Moe worked after hours, kept the place clean, and finished exactly when promised."
  },
  {
    name: "Sarah A.",
    role: "Apartment owner in Jounieh",
    quote: "I sent photos on WhatsApp and got a quick estimate. The repair was handled professionally, and the price was fair."
  }
];

export const galleryProjects = [
  { title: "Panel Upgrade", category: "Before / After", label: "Residential", icon: PanelTop },
  { title: "Kitchen Lighting Upgrade", category: "Residential", label: "Before / After", icon: Lightbulb },
  { title: "Commercial Electrical Fit-Out", category: "Commercial", label: "Shop wiring", icon: Building2 },
  { title: "Generator Installation", category: "Generator", label: "Backup power", icon: Gauge },
  { title: "Smart Home Wiring", category: "Residential", label: "Smart controls", icon: Sparkles },
  { title: "Emergency Repair", category: "Emergency", label: "Same-day fix", icon: Wrench }
];

export const trustBadges = ["Licensed", "Insured", "Emergency Service", "Free Estimates"];

export const businessStats = [
  { value: "500+", label: "Projects Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "4.9", label: "Customer Rating" }
];

export const leadServices = [
  "Electrical Repair",
  "Electrical Installation",
  "Lighting Installation",
  "Generator Installation",
  "Panel Upgrade",
  "Smart Home Wiring",
  "Commercial Electrical Work",
  "Emergency Service"
];

export const reviews = [
  {
    name: "Rania K.",
    area: "Baabda",
    rating: 5,
    quote: "Moe came the same day, fixed the breaker issue, and explained everything before starting. Very professional."
  },
  {
    name: "Sarah A.",
    area: "Jounieh",
    rating: 5,
    quote: "I sent photos on WhatsApp and got a clear estimate quickly. The repair was clean and the price was fair."
  },
  {
    name: "Daniel M.",
    area: "Beirut",
    rating: 5,
    quote: "We needed extra outlets and lighting for our shop. Moe worked neatly and finished before opening day."
  },
  {
    name: "Joseph N.",
    area: "Aley",
    rating: 5,
    quote: "Reliable electrician. He handled our generator connection and checked the panel carefully."
  },
  {
    name: "Maya H.",
    area: "Mount Lebanon",
    rating: 5,
    quote: "Fast response, polite service, and no mess left behind. I would call Moe again."
  }
];

export const faqs = [
  {
    question: "Do you sell electrical products too?",
    answer: "Yes. Moe The Electrician now offers a quote-based catalog for circuit breakers, cables, switches, sockets, LED lighting, panels, contactors, solar accessories, tools, and installation accessories."
  },
  {
    question: "Do you offer emergency electrician services?",
    answer: "Yes. Moe The Electrician handles urgent electrical repairs, power issues, breaker problems, unsafe wiring, and emergency service calls across Beirut, Mount Lebanon, Jounieh, Baabda, Aley, and nearby areas."
  },
  {
    question: "Do you install generators?",
    answer: "Yes. Generator installation services include electrical connections, transfer switch planning, load checks, and safe setup for homes and small businesses."
  },
  {
    question: "How much does electrical repair cost?",
    answer: "Pricing depends on the issue, parts needed, access, and urgency. You can send photos on WhatsApp for a faster initial estimate before scheduling a visit."
  },
  {
    question: "Do you work in Beirut?",
    answer: "Yes. Moe The Electrician provides residential, commercial, and emergency electrical services in Beirut and surrounding areas."
  },
  {
    question: "Do you provide commercial electrical services?",
    answer: "Yes. Services include lighting, outlets, wiring, panel work, troubleshooting, and electrical support for shops, offices, and small commercial spaces."
  }
];

export const contactMethods = [
  { label: "Call Now", value: site.phone, href: site.phoneHref, icon: Phone },
  { label: "WhatsApp", value: "Message Moe directly", href: site.whatsapp, icon: MessageCircle },
  { label: "Email", value: site.email, href: site.emailHref, icon: Mail },
  { label: "Service Area", value: site.address, href: "/contact#areas", icon: MapPin }
];

export const ratingStars = [Star, Star, Star, Star, Star];
