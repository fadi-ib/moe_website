"use client";

import { MessageCircle, Minus, Plus, ShoppingBasket, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Product } from "@/lib/products";

type QuoteItem = {
  slug: string;
  name: string;
  brand: string;
  quantity: number;
  notes: string;
  image: string;
};

const basketKey = "moe_quote_basket";
const phone = "96171076952";

function readBasket(): QuoteItem[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(basketKey) || "[]") as QuoteItem[];
  } catch {
    return [];
  }
}

function writeBasket(items: QuoteItem[]) {
  window.localStorage.setItem(basketKey, JSON.stringify(items));
  window.dispatchEvent(new Event("moe_quote_basket_updated"));
}

export function AddToQuoteButton({ product, className = "" }: { product: Product; className?: string }) {
  const [added, setAdded] = useState(false);

  function addProduct() {
    const current = readBasket();
    const exists = current.find((item) => item.slug === product.slug);
    const next = exists
      ? current.map((item) => (item.slug === product.slug ? { ...item, quantity: item.quantity + 1 } : item))
      : [
          ...current,
          {
            slug: product.slug,
            name: product.name,
            brand: product.brand,
            quantity: 1,
            notes: "",
            image: product.image
          }
        ];
    writeBasket(next);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={addProduct}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-electric px-4 py-3 text-sm font-black text-ink transition hover:-translate-y-0.5 hover:bg-ink hover:text-white ${className}`}
    >
      <ShoppingBasket className="h-4 w-4" aria-hidden="true" />
      {added ? "Added to Quote" : "Add to Quote"}
    </button>
  );
}

export function WhatsAppProductButton({ product, className = "" }: { product: Product; className?: string }) {
  const message = `Hello Moe, I need a price for:\n- ${product.name}\n- Brand: ${product.brand}\n- Category: ${product.category}\n\nPlease send availability and price.`;
  return (
    <Link
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 ${className}`}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      WhatsApp Price
    </Link>
  );
}

export function QuoteBasketPanel() {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const load = () => setItems(readBasket());
    load();
    window.addEventListener("moe_quote_basket_updated", load);
    window.addEventListener("storage", load);
    return () => {
      window.removeEventListener("moe_quote_basket_updated", load);
      window.removeEventListener("storage", load);
    };
  }, []);

  const totalItems = useMemo(() => items.reduce((total, item) => total + item.quantity, 0), [items]);
  const whatsappHref = useMemo(() => {
    const lines = items.map((item) => `- ${item.name} (${item.brand}) x${item.quantity}${item.notes ? ` | Notes: ${item.notes}` : ""}`);
    const message = `Hello Moe, I need prices for these electrical items:\n${lines.join("\n")}\n\nPlease confirm availability and total quote.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }, [items]);

  function updateQuantity(slug: string, quantity: number) {
    const next = items.map((item) => (item.slug === slug ? { ...item, quantity: Math.max(1, quantity) } : item));
    setItems(next);
    writeBasket(next);
  }

  function updateNotes(slug: string, notes: string) {
    const next = items.map((item) => (item.slug === slug ? { ...item, notes } : item));
    setItems(next);
    writeBasket(next);
  }

  function removeItem(slug: string) {
    const next = items.filter((item) => item.slug !== slug);
    setItems(next);
    writeBasket(next);
  }

  if (items.length === 0) return null;

  return (
    <div className="fixed bottom-5 left-4 right-4 z-40 mx-auto max-w-3xl rounded-lg border border-slate-200 bg-white shadow-premium">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
      >
        <span className="inline-flex items-center gap-2 font-black text-ink">
          <ShoppingBasket className="h-5 w-5 text-electric" aria-hidden="true" />
          Quote Basket
        </span>
        <span className="rounded-md bg-ink px-3 py-1 text-sm font-black text-white">{totalItems} item{totalItems === 1 ? "" : "s"}</span>
      </button>
      {open ? (
        <div className="max-h-[70vh] overflow-auto border-t border-slate-100 p-4">
          <div className="grid gap-3">
            {items.map((item) => (
              <div key={item.slug} className="grid gap-3 rounded-md border border-slate-200 p-3 sm:grid-cols-[72px_1fr_auto]">
                <Image src={item.image} alt={item.name} width={96} height={72} className="h-16 w-16 rounded-md bg-slate-100 object-cover" />
                <div>
                  <p className="font-black text-ink">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.brand}</p>
                  <input
                    className="input-field mt-2 min-h-10 py-2 text-sm"
                    value={item.notes}
                    onChange={(event) => updateNotes(item.slug, event.target.value)}
                    placeholder="Notes, size, color, or installation need"
                  />
                </div>
                <div className="flex items-center gap-2 sm:flex-col">
                  <div className="flex items-center rounded-md border border-slate-200">
                    <button type="button" className="p-2" aria-label="Decrease quantity" onClick={() => updateQuantity(item.slug, item.quantity - 1)}>
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-8 text-center text-sm font-black">{item.quantity}</span>
                    <button type="button" className="p-2" aria-label="Increase quantity" onClick={() => updateQuantity(item.slug, item.quantity + 1)}>
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button type="button" className="flex h-10 w-10 items-center justify-center rounded-md bg-red-50 text-red-700" aria-label="Remove item" onClick={() => removeItem(item.slug)}>
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Link href={whatsappHref} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-black text-white">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Send Quote Basket on WhatsApp
          </Link>
        </div>
      ) : null}
    </div>
  );
}
