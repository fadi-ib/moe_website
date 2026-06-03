"use client";

import { Filter, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ProductCard } from "@/components/products/ProductCard";
import { QuoteBasketPanel } from "@/components/products/QuoteBasket";
import type { Product } from "@/lib/products";
import { productCategories, products as defaultProducts, productStorageKey } from "@/lib/products";

type CatalogProps = {
  initialProducts?: Product[];
  lockedCategorySlug?: string;
};

function readProducts(fallback: Product[]) {
  if (typeof window === "undefined") return fallback;
  try {
    return JSON.parse(window.localStorage.getItem(productStorageKey) || "") as Product[];
  } catch {
    return fallback;
  }
}

export function ProductCatalog({ initialProducts = defaultProducts, lockedCategorySlug }: CatalogProps) {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(lockedCategorySlug || "All");
  const [brand, setBrand] = useState("All");
  const [stock, setStock] = useState("All");

  useEffect(() => {
    const saved = readProducts(defaultProducts);
    setProducts(lockedCategorySlug ? saved.filter((product) => product.categorySlug === lockedCategorySlug) : saved);
  }, [lockedCategorySlug]);

  const brands = useMemo(() => Array.from(new Set(products.map((product) => product.brand))).sort(), [products]);
  const stockStatuses = useMemo(() => Array.from(new Set(products.map((product) => product.stockStatus))).sort(), [products]);
  const filtered = useMemo(() => {
    return products.filter((product) => {
      const haystack = `${product.name} ${product.brand} ${product.category} ${product.description} ${product.specs.join(" ")}`.toLowerCase();
      const matchesSearch = haystack.includes(search.toLowerCase());
      const matchesCategory = category === "All" || product.categorySlug === category;
      const matchesBrand = brand === "All" || product.brand === brand;
      const matchesStock = stock === "All" || product.stockStatus === stock;
      return matchesSearch && matchesCategory && matchesBrand && matchesStock;
    });
  }, [products, search, category, brand, stock]);

  return (
    <>
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid gap-3 lg:grid-cols-[1.4fr_0.9fr_0.9fr_0.9fr]">
          <label className="relative">
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" aria-hidden="true" />
            <input className="input-field pl-10" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search product name, brand, or spec" />
          </label>
          <label className="relative">
            <Filter className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" aria-hidden="true" />
            <select className="input-field pl-10" value={category} onChange={(event) => setCategory(event.target.value)} disabled={Boolean(lockedCategorySlug)}>
              <option value="All">All Categories</option>
              {productCategories.map((item) => (
                <option key={item.slug} value={item.slug}>{item.name}</option>
              ))}
            </select>
          </label>
          <select className="input-field" value={brand} onChange={(event) => setBrand(event.target.value)}>
            <option value="All">All Brands</option>
            {brands.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
          <select className="input-field" value={stock} onChange={(event) => setStock(event.target.value)}>
            <option value="All">All Stock Status</option>
            {stockStatuses.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-8 text-center">
          <p className="text-xl font-black text-ink">No products matched your filters.</p>
          <p className="mt-2 text-slate-600">Try a different brand, category, stock status, or search term.</p>
        </div>
      ) : null}

      <QuoteBasketPanel />
    </>
  );
}
