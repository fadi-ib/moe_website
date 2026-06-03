"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ButtonLink";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition duration-300 ${
        scrolled ? "bg-ink/95 shadow-lg shadow-black/10 backdrop-blur-xl" : "bg-ink/70 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md bg-black shadow-glow ring-1 ring-white/10">
            <Image
              src={site.logo}
              alt={`${site.name} logo`}
              width={96}
              height={96}
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <span>
            <span className="block text-lg font-black leading-none">{site.name}</span>
            <span className="mt-1 block text-xs font-bold uppercase tracking-[0.18em] text-white/60">Licensed electrical work</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-4 py-2 text-sm font-bold transition ${
                  active ? "bg-white/10 text-electric" : "text-white/75 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <ButtonLink href={site.phoneHref} icon={Phone} className="min-h-11 px-4 py-2">
            Call Now
          </ButtonLink>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-ink px-4 pb-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-4 py-3 text-sm font-bold ${
                  pathname === item.href ? "bg-electric text-ink" : "bg-white/5 text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href={site.phoneHref} icon={Phone} className="mt-2 w-full">
              Call Now
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
