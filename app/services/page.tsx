import type { Metadata } from "next";
import { ContactCTA } from "@/components/ContactCTA";
import { MotionReveal } from "@/components/MotionReveal";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Electrical Services",
  description:
    "Electrician in Lebanon for emergency electrician service, residential electrical services, commercial electrical services, generator installation, panel upgrades, lighting installation, wiring, rewiring, and smart home electrical systems."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Electrical services"
        title="Complete electrical support for homes and businesses."
        description="Choose Moe The Electrician for safe troubleshooting, neat installations, dependable upgrades, and responsive emergency electrical help."
        ctaLabel="Get Free Quote"
        ctaHref="/contact"
      />

      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <MotionReveal>
            <SectionHeading
              eyebrow="What we do"
              title="Service cards built around real electrical needs."
              description="Every job starts with clear communication, practical recommendations, and a focus on lasting safety."
              align="center"
            />
          </MotionReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <MotionReveal key={service.title} delay={index * 0.035}>
                <ServiceCard {...service} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {[
            ["01", "Inspect", "We identify the root cause, evaluate safety, and explain the practical options."],
            ["02", "Quote", "You receive a clear scope before work begins, with no vague surprises."],
            ["03", "Install", "The work is completed cleanly, tested carefully, and reviewed before wrap-up."]
          ].map(([number, title, text], index) => (
            <MotionReveal key={title} delay={index * 0.06}>
              <article className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-black text-electric">{number}</p>
                <h2 className="mt-3 text-2xl font-black text-ink">{title}</h2>
                <p className="mt-3 leading-8 text-slate-600">{text}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
