export type ServiceArea = {
  slug: string;
  city: string;
  title: string;
  hero: string;
  description: string;
  localDetails: string[];
  faqs: { question: string; answer: string }[];
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "electrician-beirut",
    city: "Beirut",
    title: "Electrician in Beirut",
    hero: "Fast electrical repairs and installations in Beirut.",
    description: "Moe The Electrician helps Beirut homes, apartments, shops, and offices with urgent repairs, lighting, wiring, panel checks, and generator-related electrical work.",
    localDetails: ["Apartment troubleshooting and breaker issues", "Shop lighting and outlet upgrades", "Fast response for urgent Beirut electrical calls"],
    faqs: [
      { question: "Do you offer emergency electrical repairs in Beirut?", answer: "Yes. Emergency electrical repairs are available for power issues, breaker problems, unsafe wiring, and urgent faults in Beirut." },
      { question: "Can you work on Beirut apartments?", answer: "Yes. Moe handles apartment wiring, lighting, outlets, panels, and troubleshooting." },
      { question: "Do you provide commercial electrical service in Beirut?", answer: "Yes. Shops, offices, and small businesses can request lighting, wiring, outlets, and repair work." }
    ]
  },
  {
    slug: "electrician-jounieh",
    city: "Jounieh",
    title: "Electrician in Jounieh",
    hero: "Reliable electrical service for Jounieh homes and businesses.",
    description: "From coastal apartments to local businesses, Moe provides Jounieh electrical repairs, generator installation support, panel upgrades, lighting installation, and smart wiring.",
    localDetails: ["Generator and panel service for homes", "Lighting upgrades for apartments and villas", "Commercial support for local businesses"],
    faqs: [
      { question: "Do you install generators in Jounieh?", answer: "Yes. Generator electrical connections, transfer switch planning, and safety checks are available in Jounieh." },
      { question: "Can I send photos before booking?", answer: "Yes. Send photos on WhatsApp for a faster estimate." },
      { question: "Do you handle smart home wiring?", answer: "Yes. Smart switches, lighting controls, and connected electrical upgrades are available." }
    ]
  },
  {
    slug: "electrician-baabda",
    city: "Baabda",
    title: "Electrician in Baabda",
    hero: "Professional electrician for Baabda repairs, panels, and lighting.",
    description: "Moe The Electrician serves Baabda with safe troubleshooting, panel upgrades, emergency repair calls, lighting projects, and residential electrical work.",
    localDetails: ["Panel and breaker troubleshooting", "Residential repairs and rewiring", "Emergency help for unsafe electrical issues"],
    faqs: [
      { question: "Do you repair breaker problems in Baabda?", answer: "Yes. Moe diagnoses tripping breakers, overloaded circuits, and panel issues in Baabda." },
      { question: "Do you provide free estimates?", answer: "You can send photos and project details on WhatsApp for an initial estimate." },
      { question: "Can you upgrade lighting systems?", answer: "Yes. Lighting installation and upgrades are available for homes and businesses." }
    ]
  },
  {
    slug: "electrician-aley",
    city: "Aley",
    title: "Electrician in Aley",
    hero: "Electrical repairs, generator work, and installations in Aley.",
    description: "For Aley homes, apartments, and small businesses, Moe handles electrical repair, wiring, lighting, generator electrical work, and panel service with clean workmanship.",
    localDetails: ["Generator support for residential properties", "Safe repairs for old or damaged wiring", "Lighting and outlet installations"],
    faqs: [
      { question: "Do you serve homes in Aley?", answer: "Yes. Residential electrical services are available throughout Aley and nearby areas." },
      { question: "Do you handle emergency calls?", answer: "Yes. Urgent electrical issues can be requested by phone or WhatsApp." },
      { question: "Can you inspect old wiring?", answer: "Yes. Moe can inspect wiring problems and recommend practical repair or replacement options." }
    ]
  },
  {
    slug: "electrician-mount-lebanon",
    city: "Mount Lebanon",
    title: "Electrician in Mount Lebanon",
    hero: "Trusted electrical services across Mount Lebanon.",
    description: "Moe The Electrician provides responsive electrical repairs, installations, commercial service, generator connections, panel upgrades, and smart home wiring across Mount Lebanon.",
    localDetails: ["Residential and commercial electrical service", "Panel upgrades and generator electrical work", "Responsive service across nearby towns"],
    faqs: [
      { question: "Which areas of Mount Lebanon do you serve?", answer: "Service is available across Mount Lebanon, including Jounieh, Baabda, Aley, and surrounding areas." },
      { question: "Do you provide commercial electrical services?", answer: "Yes. Commercial lighting, wiring, outlets, and repair work are available." },
      { question: "Can I request a quote online?", answer: "Yes. Use the quote form or WhatsApp to send details and photos." }
    ]
  }
];

export function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}
