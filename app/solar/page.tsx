import type { Metadata } from "next";
import { MessageCircle, ShoppingBasket, Sun } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { MotionReveal } from "@/components/MotionReveal";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ButtonLink } from "@/components/ButtonLink";
import { solarSolutions, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solar Electrical Services",
  description:
    "Solar electrical support in Lebanon for PV wiring, inverter connections, DC protection, solar accessories, solar breakers, PV cables, and quote-based solar installation support.",
  keywords: [
    "solar electrician Lebanon",
    "solar accessories Lebanon",
    "inverter wiring Lebanon",
    "PV cable Lebanon",
    "solar DC breaker Lebanon"
  ],
  alternates: { canonical: "/solar" }
};

export default function SolarPage() {
  return (
    <>
      <PageHero
        eyebrow="Solar solutions"
        title="Solar electrical support built around safety and reliability."
        description="Get help with solar-ready wiring, inverter connections, DC protection, PV cable terminations, and quote-based solar accessories for homes and small businesses."
        ctaLabel="WhatsApp Solar Request"
        ctaHref={site.whatsapp}
      />

      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <MotionReveal>
            <SectionHeading
              eyebrow="Solar services"
              title="Practical support for photovoltaic systems."
              description="Moe supports the electrical side of solar work, from safe wiring and protection devices to accessories that help installations stay clean and dependable."
              align="center"
            />
          </MotionReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {solarSolutions.map((service, index) => (
              <MotionReveal key={service.title} delay={index * 0.04}>
                <ServiceCard {...service} href={site.whatsapp} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <MotionReveal>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-md bg-navy text-electric">
              <Sun className="h-7 w-7" aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-3xl font-black text-ink md:text-5xl">Solar accessories supplied by quote.</h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-600">
              Request availability and pricing for DC breakers, MC4 connectors, PV cables, protection boxes, labels, enclosures, and related solar installation accessories.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/products/category/solar-accessories" icon={ShoppingBasket} variant="ghost">
                View Solar Products
              </ButtonLink>
              <ButtonLink href={site.whatsapp} icon={MessageCircle}>
                WhatsApp Price Request
              </ButtonLink>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.12}>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-steel">Solar checklist</p>
              <div className="mt-5 grid gap-3">
                {[
                  "PV cable size and route",
                  "Inverter connection and protection",
                  "DC breaker and isolator needs",
                  "Panel load and backup power requirements",
                  "Accessory availability and installation scope"
                ].map((item) => (
                  <div key={item} className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 font-bold text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
