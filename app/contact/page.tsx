import type { Metadata } from "next";
import Link from "next/link";
import { MapPinned } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactForm } from "@/components/ContactForm";
import { MotionReveal } from "@/components/MotionReveal";
import { PageHero } from "@/components/PageHero";
import { QuoteRequestForm } from "@/components/QuoteRequestForm";
import { SectionHeading } from "@/components/SectionHeading";
import { contactMethods, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Moe The Electrician in Lebanon for emergency electrician service, residential electrical services, commercial electrical services, generator installation, and panel upgrades."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Call, message, or request a free electrical quote."
        description="Send project details and Moe The Electrician will follow up with clear next steps for residential, commercial, or emergency electrical work."
      />

      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <MotionReveal>
            <SectionHeading
              eyebrow="Get in touch"
              title="Fast contact options for electrical help."
              description="For urgent electrical issues, call directly. For project quotes, share a few details and photos through WhatsApp or the form."
            />
            <div className="mt-8 grid gap-4">
              {contactMethods.map(({ label, value, href, icon: Icon }) => (
                <Link key={label} href={href} className="group flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-electric">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-navy text-electric transition group-hover:bg-electric group-hover:text-ink">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-black uppercase tracking-[0.14em] text-steel">{label}</span>
                    <span className="mt-1 block font-bold text-ink">{value}</span>
                  </span>
                </Link>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal delay={0.12}>
            <ContactForm />
          </MotionReveal>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <MotionReveal>
            <SectionHeading
              eyebrow="Detailed quote"
              title="Upload photos and request a quote."
              description="For better estimates, send the service type, city, urgency, message, and photos through the quote request system."
            />
          </MotionReveal>
          <MotionReveal delay={0.12}>
            <QuoteRequestForm />
          </MotionReveal>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr]">
          <MotionReveal>
            <div className="relative min-h-[380px] overflow-hidden rounded-lg border border-slate-200 bg-navy shadow-premium">
              <div className="absolute inset-0 bg-circuit-grid bg-[length:30px_30px] opacity-60" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,210,31,0.28),transparent_28%),linear-gradient(145deg,rgba(20,54,95,0.98),rgba(7,21,39,1))]" />
              <div className="relative flex min-h-[380px] flex-col items-center justify-center p-8 text-center text-white">
                <MapPinned className="h-14 w-14 text-electric" aria-hidden="true" />
                <h2 className="mt-5 text-3xl font-black">Local Service Map</h2>
                <p className="mt-3 max-w-md leading-8 text-white/70">
                  {site.address} A live Google Map can be embedded here when the business profile is connected.
                </p>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.12} className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm" id="areas">
            <h2 className="text-3xl font-black text-ink">Service areas</h2>
            <p className="mt-4 leading-8 text-slate-600">{site.address}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Beirut", "Mount Lebanon", "Jounieh", "Baabda", "Aley", "Surrounding areas"].map((area) => (
                <div key={area} className="rounded-md bg-slate-100 px-4 py-3 text-sm font-bold text-ink">
                  {area}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.phoneHref}>Call {site.phone}</ButtonLink>
              <ButtonLink href={site.whatsapp} variant="ghost">
                WhatsApp
              </ButtonLink>
            </div>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
