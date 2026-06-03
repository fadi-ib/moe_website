import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://moetheelectrician.com"),
  title: {
    default: "Moe The Electrician | Electrician in Lebanon",
    template: "%s | Moe The Electrician"
  },
  description:
    "Moe The Electrician provides emergency electrician service, residential electrical services, commercial electrical services, generator installation, panel upgrades, and quote-based electrical supplies across Beirut, Mount Lebanon, Jounieh, Baabda, Aley, and surrounding areas.",
  keywords: [
    "Electrician in Lebanon",
    "electrical supplies Lebanon",
    "electrical items Beirut",
    "electrician and electrical store",
    "circuit breakers Lebanon",
    "LED lighting Lebanon",
    "emergency electrician",
    "residential electrical services",
    "commercial electrical services",
    "generator installation",
    "panel upgrades",
    "electrician in Beirut",
    "electrician in Mount Lebanon",
    "electrician in Jounieh",
    "electrician in Baabda",
    "electrician in Aley",
    "electrical repairs",
    "lighting installation",
    "smart home electrical"
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  icons: {
    icon: site.logo,
    apple: site.logo
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://moetheelectrician.com",
    siteName: site.name,
    title: "Moe The Electrician & Electrical Supplies | Lebanon",
    description:
      "Fast emergency electrician service, electrical products, residential electrical services, commercial electrical services, generator installation, and panel upgrades across Lebanon.",
    images: [{ url: site.logo, width: 1200, height: 1200, alt: `${site.name} logo` }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Moe The Electrician & Electrical Supplies | Lebanon",
    description: "Emergency electrician, residential and commercial electrical services, quote-based electrical supplies, generator installation, and panel upgrades."
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: site.name,
    image: site.logo,
    url: "https://moetheelectrician.com",
    telephone: site.phone,
    email: site.email,
    areaServed: ["Beirut", "Mount Lebanon", "Jounieh", "Baabda", "Aley", "Surrounding areas"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "LB",
      addressRegion: "Mount Lebanon",
      addressLocality: "Beirut"
    },
    priceRange: "$$",
    sameAs: site.socials.map((social) => social.href),
    serviceType: [
      "Residential Electrical Services",
      "Commercial Electrical Services",
      "Emergency Electrical Repairs",
      "Panel Upgrades",
      "Lighting Installation",
      "Generator Installation",
      "Smart Home Electrical Systems",
      "Electrical Product Supply",
      "Quote-Based Electrical Store"
    ]
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd)
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
