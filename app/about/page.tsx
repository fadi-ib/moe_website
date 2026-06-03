import type { Metadata } from "next";
import { Award, CheckCircle2, Clock3, ShieldCheck, Wrench, Zap } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { MotionReveal } from "@/components/MotionReveal";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Moe The Electrician, a professional electrical service company focused on safety, responsiveness, clean workmanship, and dependable results."
};

export default function AboutPage() {
  const values = [
    { title: "Safety first", description: "Every recommendation starts with protecting people, property, and long-term reliability.", icon: ShieldCheck },
    { title: "Clear communication", description: "You get practical explanations, direct scheduling, and honest project expectations.", icon: CheckCircle2 },
    { title: "Responsive service", description: "Emergency calls, repairs, and scheduled work are handled with urgency and respect.", icon: Clock3 },
    { title: "Quality workmanship", description: "Clean installs, tidy finishes, and details that hold up after the job is done.", icon: Award }
  ];

  return (
    <>
      <PageHero
        eyebrow="About Moe"
        title="A modern electrician business built on trust and clean workmanship."
        description="Moe The Electrician helps homeowners and businesses solve electrical problems with speed, professionalism, and a premium service experience."
        ctaLabel="Contact Moe"
        ctaHref="/contact"
      />

      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <MotionReveal>
            <SectionHeading
              eyebrow="Company story"
              title="Electrical service that feels organized from the first call."
              description="Moe The Electrician was created for clients who want electrical work done carefully, clearly, and without the old-service-company friction. Whether it is a flickering light, a panel upgrade, a commercial fit-out, or emergency troubleshooting, the goal is the same: safe systems, polished finishes, and a service process that respects your time."
            />
            <p className="mt-6 leading-8 text-slate-600">
              The company combines hands-on electrical expertise with a modern approach to communication, quoting, and follow-through. That means clean documentation, practical recommendations, and work that is tested before the project is considered complete.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.12}>
            <div className="relative rounded-lg border border-slate-200 bg-white p-5 shadow-premium">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-navy">
                <div className="absolute inset-0 bg-circuit-grid bg-[length:28px_28px] opacity-55" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(255,210,31,0.28),transparent_32%),linear-gradient(145deg,rgba(20,54,95,1),rgba(7,21,39,1))]" />
                <div className="relative flex h-full flex-col justify-end p-8 text-white">
                  <div className="mb-auto flex h-16 w-16 items-center justify-center rounded-md bg-electric text-ink shadow-glow">
                    <Wrench className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-electric">On-site electrical service</p>
                  <h2 className="mt-3 text-3xl font-black">Moe on the job</h2>
                  <p className="mt-3 leading-7 text-white/70">Clean troubleshooting, safe repairs, and careful installation work across local homes and businesses.</p>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {[
            ["Years of hands-on experience", "Residential, commercial, repairs, installations, panels, lighting, and controls."],
            ["Mission", "Make electrical work safer, cleaner, faster, and easier for every client."],
            ["Values", "Professional communication, dependable workmanship, transparent pricing, and responsive support."]
          ].map(([title, text], index) => (
            <MotionReveal key={title} delay={index * 0.06}>
              <article className="h-full rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
                <Zap className="h-8 w-8 text-electric" aria-hidden="true" />
                <h2 className="mt-5 text-2xl font-black text-ink">{title}</h2>
                <p className="mt-3 leading-8 text-slate-600">{text}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <MotionReveal>
            <SectionHeading
              eyebrow="Mission and values"
              title="The standard behind every job."
              description="Electrical work is hidden inside walls, panels, ceilings, and systems. That is exactly why the process needs to be careful, visible, and accountable."
              align="center"
            />
          </MotionReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <MotionReveal key={value.title} delay={index * 0.05}>
                <article className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-navy text-electric">
                    <value.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-xl font-black text-ink">{value.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{value.description}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
