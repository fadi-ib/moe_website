import type { Metadata } from "next";
import { ContactCTA } from "@/components/ContactCTA";
import { GalleryCard } from "@/components/GalleryCard";
import { MotionReveal } from "@/components/MotionReveal";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { galleryProjects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View local electrical project examples from Moe The Electrician, including panel upgrades, kitchen lighting, commercial fit-outs, generator installation, smart wiring, and emergency repairs."
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Project gallery"
        title="Real electrical work for homes and businesses."
        description="A local project showcase for panel upgrades, kitchen lighting, commercial electrical work, generator installation, smart wiring, and urgent repairs."
        ctaLabel="Start Your Project"
        ctaHref="/contact"
      />

      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <MotionReveal>
            <SectionHeading
              eyebrow="Showcase"
              title="Recent project categories."
              description="Photo-ready project cards for the kinds of work Moe handles across Beirut, Mount Lebanon, Jounieh, Baabda, Aley, and surrounding areas."
              align="center"
            />
          </MotionReveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryProjects.map((project, index) => (
              <MotionReveal key={project.title} delay={index * 0.04}>
                <GalleryCard {...project} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 md:px-8">
        <MotionReveal className="mx-auto max-w-7xl rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm md:p-12">
          <h2 className="text-3xl font-black text-ink md:text-5xl">Have an electrical issue that needs a closer look?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">
            Send a photo of the issue on WhatsApp and get a fast estimate before scheduling the visit.
          </p>
        </MotionReveal>
      </section>

      <ContactCTA />
    </>
  );
}
