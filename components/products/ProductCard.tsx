import { BadgeCheck, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { AddToQuoteButton, WhatsAppProductButton } from "@/components/products/QuoteBasket";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
      <Link href={`/products/${product.slug}`} className="block bg-slate-50">
        <Image src={product.image} alt={product.name} width={720} height={540} className="aspect-[4/3] w-full object-cover" />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-steel">
          <span>{product.category}</span>
          <span className="h-1 w-1 rounded-full bg-electric" />
          <span>{product.brand}</span>
        </div>
        <Link href={`/products/${product.slug}`} className="mt-3 text-xl font-black text-ink transition hover:text-steel">
          {product.name}
        </Link>
        <p className="mt-3 line-clamp-3 leading-7 text-slate-600">{product.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-3 py-2 text-xs font-black text-ink">
            <Package className="h-3.5 w-3.5" aria-hidden="true" />
            {product.stockStatus}
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-electric/20 px-3 py-2 text-xs font-black text-ink">
            <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
            {product.price || "Request Price"}
          </span>
        </div>
        <div className="mt-auto grid gap-2 pt-5 sm:grid-cols-2">
          <AddToQuoteButton product={product} />
          <WhatsAppProductButton product={product} />
        </div>
      </div>
    </article>
  );
}
