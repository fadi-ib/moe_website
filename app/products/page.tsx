import type { Metadata } from "next";
import { ContactCTA } from "@/components/ContactCTA";
import { MotionReveal } from "@/components/MotionReveal";
import { PageHero } from "@/components/PageHero";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { ProductCategoryGrid } from "@/components/products/ProductCategoryGrid";
import { SectionHeading } from "@/components/SectionHeading";
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
              description="No online payment yet. Add products to a quote basket or request pricing item by item, and Moe will confirm availability, specs, and installation options."
              align="center"
            />
          </MotionReveal>
          <div className="mt-10">
            <ProductCatalog initialProducts={products} />
          </div>
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
