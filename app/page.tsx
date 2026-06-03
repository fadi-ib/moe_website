import { ArrowRight, BadgeCheck, MessageCircle, Phone, ShoppingBasket, ShieldCheck, Sun, Zap } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactCTA } from "@/components/ContactCTA";
import { FAQSection } from "@/components/FAQSection";
import { GalleryCard } from "@/components/GalleryCard";
import { MotionReveal } from "@/components/MotionReveal";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductCategoryGrid } from "@/components/products/ProductCategoryGrid";
import { QuoteRequestForm } from "@/components/QuoteRequestForm";
import { ReviewsSection } from "@/components/ReviewsSection";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustProcessSection } from "@/components/TrustProcessSection";
import { businessStats, galleryProjects, servicesPreview, site, solarSolutions, solutionHighlights, trustBadges, whyChooseUs } from "@/lib/site";
import { featuredProducts } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[760px] overflow-hidden bg-ink px-4 pb-16 pt-28 text-white md:px-8 md:pb-20 md:pt-32">
        <div className="absolute inset-0 bg-circuit-grid bg-[length:34px_34px] opacity-35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(255,210,31,0.22),transparent_28%),linear-gradient(135deg,rgba(11,31,58,0.98),rgba(7,21,39,1))]" />
        <div className="relative mx-auto mb-8 max-w-7xl">
          <Link
            href={site.phoneHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-electric/40 bg-electric px-4 py-3 text-center text-sm font-black text-ink shadow-glow transition hover:bg-white sm:w-auto"
          >
            24/7 Emergency Electrical Repairs - Call Now
          </Link>
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <MotionReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-2 text-sm font-bold text-electric">
              <Zap className="h-4 w-4" aria-hidden="true" />
              Local electrician serving Lebanon
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">Moe The Electrician & Electrical Supplies</h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-white/75">Fast electrical services plus quote-based electrical items for homes, shops, panels, lighting, and installations across Lebanon.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/quote" icon={Phone}>
                Request Electrical Service
              </ButtonLink>
              <ButtonLink href="/products" icon={ShoppingBasket} variant="secondary">
                Shop Electrical Items
              </ButtonLink>
              <ButtonLink href="/solar" icon={Sun} variant="secondary">
                Solar Solutions
              </ButtonLink>
            </div>
            <Link href={site.whatsapp} className="mt-4 inline-flex items-center gap-2 text-sm font-black text-electric transition hover:text-white">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Moe for urgent service or product pricing
            </Link>
            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {trustBadges.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-md border border-white/10 bg-white/10 p-3 text-sm font-bold text-white/80">
                  <BadgeCheck className="h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal delay={0.15} className="relative">
            <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-glow backdrop-blur">
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-md bg-navy">
                <div className="absolute inset-0 noise-overlay" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(255,210,31,0.35),transparent_28%),linear-gradient(145deg,rgba(20,54,95,1),rgba(7,21,39,1))]" />
                <div className="relative flex h-full flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <div className="rounded-md bg-electric px-4 py-2 text-sm font-black text-ink">24/7 Emergency</div>
                    <ShieldCheck className="h-9 w-9 text-electric" aria-hidden="true" />
                  </div>
                  <div className="grid gap-4">
                    <div className="rounded-md border border-electric/25 bg-white/10 p-4">
                      <p className="text-sm font-black uppercase tracking-[0.14em] text-electric">Send photos on WhatsApp</p>
                      <p className="mt-3 text-2xl font-black">Fast estimate for repairs, panels, generators, and wiring.</p>
                      <div className="mt-4 flex items-center gap-3 text-sm font-bold text-white/70">
                        <Phone className="h-4 w-4 text-electric" aria-hidden="true" />
                        {site.phone}
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                      {businessStats.map((stat) => (
                        <div key={stat.label} className="rounded-md border border-white/10 bg-white/10 p-4">
                          <p className="text-3xl font-black text-electric">{stat.value}</p>
                          <p className="mt-1 text-sm text-white/70">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <MotionReveal>
            <SectionHeading
              eyebrow="Our solutions"
              title="One electrician for service, supplies, and solar support."
              description="Get practical electrical help, source the right supplies, and prepare safer solar-ready systems with one clear point of contact."
              align="center"
            />
          </MotionReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {solutionHighlights.map((solution, index) => (
              <MotionReveal key={solution.title} delay={index * 0.05}>
                <article className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-electric hover:shadow-premium">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-navy text-electric transition duration-300 group-hover:bg-electric group-hover:text-ink">
                    <solution.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-black text-ink">{solution.title}</h2>
                  <p className="mt-3 flex-1 leading-7 text-slate-600">{solution.description}</p>
                  <Link href={solution.href} className="mt-6 inline-flex items-center gap-2 text-sm font-black text-steel transition group-hover:text-ink">
                    Learn more
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <MotionReveal>
            <SectionHeading
              eyebrow="Services"
              title="Electrical work handled with precision."
              description="From small repairs to full system upgrades, Moe The Electrician delivers safe, polished, and practical electrical solutions."
              align="center"
            />
          </MotionReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {servicesPreview.map((service, index) => (
              <MotionReveal key={service.title} delay={index * 0.04}>
                <ServiceCard {...service} href="/services" />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <MotionReveal>
              <SectionHeading
                eyebrow="Featured products"
                title="Electrical supplies ready for quote requests."
                description="Request prices for common breakers, cables, LED lighting, panels, and accessories, then confirm availability directly on WhatsApp."
              />
            </MotionReveal>
            <ButtonLink href="/products" variant="ghost" icon={ArrowRight}>
              View Product Catalog
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <MotionReveal key={product.slug} delay={index * 0.04}>
                <ProductCard product={product} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <MotionReveal>
            <SectionHeading
              eyebrow="Product categories"
              title="Shop by electrical need."
              description="Browse organized categories for repairs, installations, panel upgrades, lighting projects, solar support, and job-site accessories."
              align="center"
            />
          </MotionReveal>
          <div className="mt-10">
            <ProductCategoryGrid />
          </div>
        </div>
      </section>

      <section className="bg-ink px-4 py-20 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <MotionReveal>
            <SectionHeading
              eyebrow="Solar solutions"
              title="Solar electrical support for safer PV systems."
              description="Plan solar wiring, inverter connections, DC protection, and photovoltaic accessories with an electrician who understands both service work and product supply."
              light
            />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/solar" icon={Sun}>
                Explore Solar Services
              </ButtonLink>
              <ButtonLink href={site.whatsapp} icon={MessageCircle} variant="secondary">
                WhatsApp Solar Request
              </ButtonLink>
            </div>
          </MotionReveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {solarSolutions.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.05}>
                <div className="flex h-full gap-4 rounded-lg border border-white/10 bg-white/[0.06] p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-electric text-ink">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-black text-white">{item.title}</h3>
                    <p className="mt-2 leading-7 text-white/70">{item.description}</p>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <MotionReveal>
            <SectionHeading
              eyebrow="Fast quote"
              title="Turn a photo into a clear next step."
              description="Send your service type, city, urgency, message, and photos so Moe can understand the job and follow up with the right next step."
            />
          </MotionReveal>
          <MotionReveal delay={0.12}>
            <QuoteRequestForm />
          </MotionReveal>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <MotionReveal>
            <SectionHeading
              eyebrow="Why choose us"
              title="Premium service without the runaround."
              description="Electrical work should feel straightforward: clear answers, dependable scheduling, careful installation, and no mystery around the next step."
            />
          </MotionReveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.04}>
                <div className="flex h-full gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-electric text-ink">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-black text-ink">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{item.description}</p>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section className="bg-ink px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <MotionReveal>
              <SectionHeading
                eyebrow="Gallery"
                title="Project work with a polished finish."
                description="A preview of installations, repairs, lighting upgrades, panel work, and commercial electrical projects."
                light
              />
            </MotionReveal>
            <ButtonLink href="/gallery" variant="secondary">
              View Gallery
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {galleryProjects.slice(0, 3).map((project, index) => (
              <MotionReveal key={project.title} delay={index * 0.06}>
                <GalleryCard {...project} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
      <FAQSection />
      <TrustProcessSection />

      <section className="bg-white px-4 py-16 md:px-8">
        <MotionReveal className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 rounded-lg border border-slate-200 p-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-black text-ink">Ready for safer, cleaner electrical work?</h2>
            <p className="mt-2 text-slate-600">Send a photo of the issue on WhatsApp and get a fast estimate.</p>
          </div>
          <Link href={site.whatsapp} className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-black text-white transition hover:-translate-y-1">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Start WhatsApp Chat
          </Link>
        </MotionReveal>
      </section>
    </>
  );
}
