import { MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { FAQSection } from "@/components/FAQSection";
import { MotionReveal } from "@/components/MotionReveal";
import { QuoteRequestForm } from "@/components/QuoteRequestForm";
import { ReviewsSection } from "@/components/ReviewsSection";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustProcessSection } from "@/components/TrustProcessSection";
import type { ServiceArea } from "@/lib/serviceAreas";
import { site } from "@/lib/site";

export function ServiceAreaTemplate({ area }: { area: ServiceArea }) {
  return (
    <>
      <section className="relative overflow-hidden bg-ink px-4 pb-16 pt-32 text-white md:px-8 md:pt-40">
        <div className="absolute inset-0 bg-circuit-grid bg-[length:34px_34px] opacity-35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_25%,rgba(255,210,31,0.2),transparent_30%),linear-gradient(135deg,rgba(11,31,58,0.98),rgba(7,21,39,1))]" />
        <MotionReveal className="relative mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-2 text-sm font-bold text-electric">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {area.city}
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">{area.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">{area.hero}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={site.phoneHref} icon={Phone}>Call Now</ButtonLink>
            <ButtonLink href="/quote" variant="secondary">Request Quote</ButtonLink>
          </div>
        </MotionReveal>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <MotionReveal>
            <SectionHeading eyebrow="Local electrician" title={area.description} description="Every area page is written with local search intent, unique FAQs, and clear calls to request service." />
            <div className="mt-6 grid gap-3">
              {area.localDetails.map((detail) => (
                <div key={detail} className="rounded-md border border-slate-200 bg-white px-4 py-3 font-bold text-ink shadow-sm">
                  {detail}
                </div>
              ))}
            </div>
          </MotionReveal>
          <MotionReveal delay={0.12}>
            <QuoteRequestForm />
          </MotionReveal>
        </div>
      </section>

      <ReviewsSection />
      <FAQSection items={area.faqs} title={`Questions about hiring an electrician in ${area.city}.`} />
      <TrustProcessSection />
    </>
  );
}
