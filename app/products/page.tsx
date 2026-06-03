import type { Metadata } from "next";
import { MessageCircle, ShoppingBasket } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { MotionReveal } from "@/components/MotionReveal";
import { PageHero } from "@/components/PageHero";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { ProductCategoryGrid } from "@/components/products/ProductCategoryGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Electrical Products & Supplies",
  description:
    "Browse electrical supplies Lebanon, electrical items Beirut, circuit breakers, cables, switches, LED lighting, electrical panels, solar accessories, and tools from Moe The Electrician.",
  keywords: [
    "electrical supplies Lebanon",
    "electrical items Beirut",
    "electrician and electrical store",
    "circuit breakers Lebanon",
    "LED lighting Lebanon"
  ],
  alternates: { canonical: "/products" }
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Electrical products"
        title="Electrical items supplied by a working electrician."
        description="Browse quote-based electrical supplies for repairs, upgrades, panels, lighting, solar accessories, and installation work across Lebanon."
        ctaLabel="Request Product Price"
        ctaHref="#catalog"
      />

      <section className="px-4 py-16 md:px-8" id="catalog">
        <div className="mx-auto max-w-7xl">
          <MotionReveal>
            <SectionHeading
              eyebrow="Product catalog"
              title="Search, filter, and request prices on WhatsApp."
              description="Add products to a quote basket or request pricing item by item, and Moe will confirm availability, specs, and installation options before you buy."
              align="center"
            />
          </MotionReveal>
          <div className="mt-10">
            <ProductCatalog initialProducts={products} />
          </div>
        </div>
      </section>

      <section className="bg-ink px-4 py-16 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <MotionReveal>
            <SectionHeading
              eyebrow="How product quotes work"
              title="Prices are confirmed before purchase."
              description="Electrical items can vary by brand, rating, stock, quantity, and installation need. Send the product request on WhatsApp and Moe will reply with the current price, availability, and the right option for your job."
              light
            />
          </MotionReveal>
          <MotionReveal delay={0.12}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
                <ShoppingBasket className="h-7 w-7 text-electric" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-black">Build a quote basket</h2>
                <p className="mt-3 leading-7 text-white/70">Add multiple items, include quantities and notes, then send one organized WhatsApp request.</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
                <MessageCircle className="h-7 w-7 text-electric" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-black">Ask for one item</h2>
                <p className="mt-3 leading-7 text-white/70">Use the WhatsApp Price button on any product card for quick availability and pricing.</p>
                <a href={site.whatsapp} className="mt-5 inline-flex items-center gap-2 text-sm font-black text-electric transition hover:text-white">
                  WhatsApp Moe
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <MotionReveal>
            <SectionHeading
              eyebrow="Categories"
              title="Shop by electrical category."
              description="Find the right protection, wiring, lighting, panel, control, solar, and tool items for your project."
              align="center"
            />
          </MotionReveal>
          <div className="mt-10">
            <ProductCategoryGrid />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
