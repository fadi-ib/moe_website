import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ButtonLink";
import { MotionReveal } from "@/components/MotionReveal";

export function ContactCTA() {
  return (
    <section className="bg-navy px-4 py-20 text-white md:px-8">
      <MotionReveal className="mx-auto grid max-w-7xl items-center gap-8 rounded-lg border border-white/10 bg-white/[0.04] p-8 shadow-glow md:grid-cols-[1.1fr_0.9fr] md:p-12">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-electric">Need electrical help?</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Send a photo and get a fast estimate.</h2>
          <p className="mt-5 max-w-2xl leading-8 text-white/70">
            Send a photo of the issue on WhatsApp and get a fast estimate for repairs, installations, generators, panel upgrades, and urgent electrical work.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <ButtonLink href={site.phoneHref} icon={Phone}>
            Call Now
          </ButtonLink>
          <ButtonLink href={site.whatsapp} icon={MessageCircle} variant="secondary">
            WhatsApp
          </ButtonLink>
        </div>
      </MotionReveal>
    </section>
  );
}
