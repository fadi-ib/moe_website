export type StockStatus = "In Stock" | "Limited Stock" | "On Request" | "Out of Stock";

export type ProductCategory = {
  name: string;
  slug: string;
  description: string;
  seoDescription: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  brand: string;
  image: string;
  price?: string;
  stockStatus: StockStatus;
  specs: string[];
  description: string;
  featured?: boolean;
};

export const productStorageKey = "moe_products";

export const productCategories: ProductCategory[] = [
  {
    name: "Circuit Breakers",
    slug: "circuit-breakers",
    description: "MCB, MCCB, RCD, and protection devices for homes, shops, and panels.",
    seoDescription: "Circuit breakers Lebanon catalog for electrical panels, protection upgrades, and service-ready electrical supplies."
  },
  {
    name: "Cables & Wires",
    slug: "cables-wires",
    description: "Power cables, flexible wires, armored cables, and installation wiring.",
    seoDescription: "Cables and wires for electrical items Beirut and Lebanon installations, repairs, and fit-outs."
  },
  {
    name: "Switches & Sockets",
    slug: "switches-sockets",
    description: "Modern switches, sockets, dimmers, weatherproof outlets, and plates.",
    seoDescription: "Switches and sockets for electrician and electrical store requests across Lebanon."
  },
  {
    name: "LED Lighting",
    slug: "led-lighting",
    description: "LED panels, strips, downlights, floodlights, and drivers.",
    seoDescription: "LED lighting Lebanon product catalog for residential and commercial lighting upgrades."
  },
  {
    name: "Electrical Panels",
    slug: "electrical-panels",
    description: "Distribution boards, panel accessories, enclosures, rails, and breakers.",
    seoDescription: "Electrical panels and electrical supplies Lebanon for safe distribution board upgrades."
  },
  {
    name: "Contactors & Relays",
    slug: "contactors-relays",
    description: "Control gear for motors, lighting loads, pumps, and automation circuits.",
    seoDescription: "Contactors and relays in Lebanon for electrical control panels and service work."
  },
  {
    name: "Solar Accessories",
    slug: "solar-accessories",
    description: "Solar breakers, connectors, DC protection, cables, and accessories.",
    seoDescription: "Solar accessories Lebanon for electrical installers, repairs, and quote-based supply."
  },
  {
    name: "Tools & Accessories",
    slug: "tools-accessories",
    description: "Meters, testers, terminals, glands, tapes, conduits, and installation accessories.",
    seoDescription: "Electrical tools and accessories Beirut for professional electrician supply requests."
  }
];

export const products: Product[] = [
  {
    id: "P-1001",
    slug: "schneider-acti9-2p-32a-mcb",
    name: "Acti9 2P 32A Circuit Breaker",
    category: "Circuit Breakers",
    categorySlug: "circuit-breakers",
    brand: "Schneider Electric",
    image: "/images/products/circuit-breaker.svg",
    stockStatus: "In Stock",
    specs: ["2 pole", "32A", "6kA breaking capacity", "230/400V AC"],
    description: "Reliable two-pole protection device for residential and light commercial distribution boards.",
    featured: true
  },
  {
    id: "P-1002",
    slug: "legrand-dx3-4p-63a-mccb",
    name: "DX3 4P 63A Main Breaker",
    category: "Circuit Breakers",
    categorySlug: "circuit-breakers",
    brand: "Legrand",
    image: "/images/products/circuit-breaker.svg",
    stockStatus: "Limited Stock",
    specs: ["4 pole", "63A", "DIN rail mount", "Panel main protection"],
    description: "Main breaker option for panel upgrades, shop boards, and larger residential electrical loads."
  },
  {
    id: "P-1003",
    slug: "nexans-3x2-5mm-power-cable",
    name: "3x2.5mm Power Cable",
    category: "Cables & Wires",
    categorySlug: "cables-wires",
    brand: "Nexans",
    image: "/images/products/cable-wire.svg",
    price: "Request Price",
    stockStatus: "In Stock",
    specs: ["3 core", "2.5mm copper", "Indoor power circuits", "Sold by meter or roll"],
    description: "General-purpose copper cable for outlets, appliance circuits, and clean electrical installations.",
    featured: true
  },
  {
    id: "P-1004",
    slug: "bicc-6mm-single-core-wire",
    name: "6mm Single Core Wire",
    category: "Cables & Wires",
    categorySlug: "cables-wires",
    brand: "BICC",
    image: "/images/products/cable-wire.svg",
    stockStatus: "On Request",
    specs: ["6mm copper", "PVC insulated", "Panel and feeder wiring", "Multiple colors available"],
    description: "Heavy-duty single core wire for feeders, panel upgrades, and dedicated electrical lines."
  },
  {
    id: "P-1005",
    slug: "bticino-matix-socket-set",
    name: "Matix Switch & Socket Set",
    category: "Switches & Sockets",
    categorySlug: "switches-sockets",
    brand: "Bticino",
    image: "/images/products/switch-socket.svg",
    stockStatus: "In Stock",
    specs: ["Modular design", "White finish", "16A socket", "Matching plates"],
    description: "Clean switch and socket set for apartment renovations, offices, and modern electrical upgrades."
  },
  {
    id: "P-1006",
    slug: "gewiss-weatherproof-outlet-ip55",
    name: "Weatherproof Outlet IP55",
    category: "Switches & Sockets",
    categorySlug: "switches-sockets",
    brand: "Gewiss",
    image: "/images/products/switch-socket.svg",
    stockStatus: "Limited Stock",
    specs: ["IP55 cover", "16A outlet", "Outdoor rated", "Surface mount"],
    description: "Protected socket option for balconies, terraces, workshops, and exterior electrical points."
  },
  {
    id: "P-1007",
    slug: "philips-led-panel-60x60",
    name: "LED Panel 60x60",
    category: "LED Lighting",
    categorySlug: "led-lighting",
    brand: "Philips",
    image: "/images/products/led-lighting.svg",
    stockStatus: "In Stock",
    specs: ["60x60 cm", "40W", "4000K neutral white", "Office and shop lighting"],
    description: "Efficient flat LED panel for offices, retail spaces, clinics, and clean ceiling installations.",
    featured: true
  },
  {
    id: "P-1008",
    slug: "v-tac-led-strip-24v",
    name: "24V LED Strip Kit",
    category: "LED Lighting",
    categorySlug: "led-lighting",
    brand: "V-TAC",
    image: "/images/products/led-lighting.svg",
    stockStatus: "On Request",
    specs: ["24V DC", "Warm or neutral white", "Driver available", "Cut-to-length"],
    description: "Flexible LED strip solution for kitchens, shelves, signage, and decorative lighting projects."
  },
  {
    id: "P-1009",
    slug: "abb-surface-distribution-board-24way",
    name: "24-Way Distribution Board",
    category: "Electrical Panels",
    categorySlug: "electrical-panels",
    brand: "ABB",
    image: "/images/products/electrical-panel.svg",
    stockStatus: "In Stock",
    specs: ["24 modules", "Surface mount", "DIN rail", "Door included"],
    description: "Distribution board for organized breaker layouts in homes, offices, and small commercial spaces.",
    featured: true
  },
  {
    id: "P-1010",
    slug: "himel-metal-enclosure-400x300",
    name: "Metal Panel Enclosure 400x300",
    category: "Electrical Panels",
    categorySlug: "electrical-panels",
    brand: "Himel",
    image: "/images/products/electrical-panel.svg",
    stockStatus: "Limited Stock",
    specs: ["400x300 mm", "Powder-coated metal", "Lockable door", "Control panel use"],
    description: "Compact metal enclosure for control gear, relays, small panels, and protected installations."
  },
  {
    id: "P-1011",
    slug: "schneider-tesys-contactor-25a",
    name: "TeSys 25A Contactor",
    category: "Contactors & Relays",
    categorySlug: "contactors-relays",
    brand: "Schneider Electric",
    image: "/images/products/contactor-relay.svg",
    stockStatus: "In Stock",
    specs: ["25A", "220/240V coil", "3 pole", "Motor and load control"],
    description: "Reliable contactor for pumps, motors, lighting banks, and control panel applications."
  },
  {
    id: "P-1012",
    slug: "finder-8-pin-relay-base",
    name: "8-Pin Relay with Base",
    category: "Contactors & Relays",
    categorySlug: "contactors-relays",
    brand: "Finder",
    image: "/images/products/contactor-relay.svg",
    stockStatus: "On Request",
    specs: ["8-pin relay", "Plug-in base", "230V AC coil", "Control circuit use"],
    description: "Relay and base set for automation, control panels, pumps, and switching circuits."
  },
  {
    id: "P-1013",
    slug: "mc4-solar-connector-pair",
    name: "MC4 Solar Connector Pair",
    category: "Solar Accessories",
    categorySlug: "solar-accessories",
    brand: "Staubli",
    image: "/images/products/solar-accessory.svg",
    stockStatus: "In Stock",
    specs: ["Male and female pair", "PV cable compatible", "Weather resistant", "Solar DC connection"],
    description: "Connector pair for clean solar cable terminations and PV system maintenance."
  },
  {
    id: "P-1014",
    slug: "dc-solar-breaker-32a",
    name: "DC Solar Breaker 32A",
    category: "Solar Accessories",
    categorySlug: "solar-accessories",
    brand: "Noark",
    image: "/images/products/solar-accessory.svg",
    stockStatus: "Limited Stock",
    specs: ["32A", "DC rated", "PV protection", "DIN rail mount"],
    description: "DC-rated breaker for solar protection boxes and photovoltaic installation safety."
  },
  {
    id: "P-1015",
    slug: "fluke-voltage-tester",
    name: "Voltage Tester",
    category: "Tools & Accessories",
    categorySlug: "tools-accessories",
    brand: "Fluke",
    image: "/images/products/tools-accessories.svg",
    stockStatus: "On Request",
    specs: ["AC voltage detection", "Pocket format", "Field testing", "Professional tool"],
    description: "Compact voltage tester for quick checks during service calls and installation work."
  },
  {
    id: "P-1016",
    slug: "cable-gland-accessory-kit",
    name: "Cable Gland Accessory Kit",
    category: "Tools & Accessories",
    categorySlug: "tools-accessories",
    brand: "Mete Enerji",
    image: "/images/products/tools-accessories.svg",
    stockStatus: "In Stock",
    specs: ["Mixed sizes", "Panel accessories", "IP protection support", "Installation kit"],
    description: "Practical accessory kit for panel wiring, enclosures, cable entries, and neat installations."
  }
];

export const featuredProducts = products.filter((product) => product.featured);

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((product) => product.categorySlug === slug);
}

export function getRelatedProducts(product: Product, limit = 3) {
  return products.filter((item) => item.categorySlug === product.categorySlug && item.slug !== product.slug).slice(0, limit);
}
