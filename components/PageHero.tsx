import { ButtonLink } from "@/components/ButtonLink";
import { MotionReveal } from "@/components/MotionReveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function PageHero({ eyebrow, title, description, ctaLabel, ctaHref }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink px-4 pb-20 pt-36 text-white md:px-8 md:pt-40">
      <div className="absolute inset-0 bg-circuit-grid bg-[length:34px_34px] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,210,31,0.18),transparent_30%),linear-gradient(135deg,rgba(11,31,58,0.98),rgba(7,21,39,1))]" />
      <MotionReveal className="relative mx-auto max-w-7xl">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-electric">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">{description}</p>
        {ctaLabel && ctaHref ? (
          <ButtonLink href={ctaHref} className="mt-8">
            {ctaLabel}
          </ButtonLink>
        ) : null}
      </MotionReveal>
    </section>
  );
}
