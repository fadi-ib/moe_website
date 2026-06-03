import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BadgeCheck, CheckCircle2, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "@/components/ContactCTA";
import { ProductCard } from "@/components/products/ProductCard";
import { AddToQuoteButton, QuoteBasketPanel, WhatsAppProductButton } from "@/components/products/QuoteBasket";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/products";

type ProductDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} | ${product.category}`,
    description: `${product.name} by ${product.brand}. Request price on WhatsApp from Moe The Electrician for electrical supplies Lebanon and electrical items Beirut.`,
    keywords: [
      product.name,
      product.brand,
      product.category,
      "electrical supplies Lebanon",
      "electrical items Beirut",
      "electrician and electrical store"
    ],
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} | Moe The Electrician`,
      description: product.description,
      images: [{ url: product.image, width: 720, height: 540, alt: product.name }]
    }
  };
}

export default async function ProductDetailPage({ params }: ProductDetailProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const relatedProducts = getRelatedProducts(product);

  return (
    <>
      <section className="bg-slate-50 px-4 pb-16 pt-32 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <Image src={product.image} alt={product.name} width={720} height={540} className="aspect-[4/3] w-full object-cover" priority />
          </div>
          <div>
            <Link href={`/products/category/${product.categorySlug}`} className="text-sm font-black uppercase tracking-[0.16em] text-steel">
              {product.category}
            </Link>
            <h1 className="mt-3 text-4xl font-black text-ink md:text-6xl">{product.name}</h1>
            <p className="mt-5 text-xl font-bold text-slate-600">{product.brand}</p>
            <p className="mt-5 max-w-2xl leading-8 text-slate-600">{product.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-black text-ink shadow-sm">
                <Package className="h-4 w-4 text-electric" aria-hidden="true" />
                {product.stockStatus}
              </span>
              <span className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-black text-ink shadow-sm">
                <BadgeCheck className="h-4 w-4 text-electric" aria-hidden="true" />
                {product.price || "Request Price"}
              </span>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <AddToQuoteButton product={product} className="w-full" />
              <WhatsAppProductButton product={product} className="w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-steel">Electrical specs</p>
            <h2 className="mt-3 text-3xl font-black text-ink">Product details for quoting.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {product.specs.map((spec) => (
              <div key={spec} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-electric" aria-hidden="true" />
                <span className="font-bold text-slate-700">{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 ? (
        <section className="bg-slate-50 px-4 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-steel">Related products</p>
                <h2 className="mt-3 text-3xl font-black text-ink">Similar electrical items.</h2>
              </div>
              <Link href="/products" className="font-black text-ink transition hover:text-steel">View all products</Link>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {relatedProducts.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <ContactCTA />
      <QuoteBasketPanel />
    </>
  );
}
