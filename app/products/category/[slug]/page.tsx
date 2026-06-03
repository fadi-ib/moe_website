import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { getCategoryBySlug, getProductsByCategory, productCategories } from "@/lib/products";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: `${category.name} Lebanon`,
    description: category.seoDescription,
    keywords: [
      `${category.name} Lebanon`,
      "electrical supplies Lebanon",
      "electrical items Beirut",
      "electrician and electrical store",
      "circuit breakers Lebanon",
      "LED lighting Lebanon"
    ],
    alternates: { canonical: `/products/category/${category.slug}` }
  };
}

export default async function ProductCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(category.slug);

  return (
    <>
      <PageHero
        eyebrow="Product category"
        title={category.name}
        description={category.description}
        ctaLabel="Request Category Quote"
        ctaHref="#products"
      />
      <section className="px-4 py-16 md:px-8" id="products">
        <div className="mx-auto max-w-7xl">
          <ProductCatalog initialProducts={categoryProducts} lockedCategorySlug={category.slug} />
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
