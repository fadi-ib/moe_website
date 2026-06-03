import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { productCategories } from "@/lib/products";

export function ProductCategoryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {productCategories.map((category) => (
        <Link
          key={category.slug}
          href={`/products/category/${category.slug}`}
          className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-electric hover:shadow-premium"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-electric text-ink">
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" aria-hidden="true" />
          </div>
          <h3 className="mt-5 text-xl font-black text-ink">{category.name}</h3>
          <p className="mt-3 leading-7 text-slate-600">{category.description}</p>
        </Link>
      ))}
    </div>
  );
}
