import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site, servicesPreview } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] md:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md bg-black ring-1 ring-white/10">
              <Image
                src={site.logo}
                alt={`${site.name} logo`}
                width={96}
                height={96}
                className="h-full w-full object-cover"
              />
            </span>
            <span className="text-lg font-black">{site.name}</span>
          </Link>
          <p className="mt-5 max-w-sm leading-7 text-white/60">
            Residential, commercial, emergency, solar, and electrical supply support with clean workmanship and responsive communication.
          </p>
          <div className="mt-5 flex gap-3">
            {site.socials.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-electric hover:text-ink"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-electric">Pages</h2>
          <div className="mt-5 grid gap-3">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-white/70 transition hover:text-electric">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-electric">Services</h2>
          <div className="mt-5 grid gap-3">
            {servicesPreview.slice(0, 5).map((item) => (
              <Link key={item.title} href="/services" className="text-white/70 transition hover:text-electric">
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-electric">Contact</h2>
          <div className="mt-5 grid gap-4 text-white/70">
            <Link href={site.phoneHref} className="flex gap-3 transition hover:text-electric">
              <Phone className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              {site.phone}
            </Link>
            <Link href={site.emailHref} className="flex gap-3 transition hover:text-electric">
              <Mail className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              {site.email}
            </Link>
            <Link href={site.whatsapp} className="flex gap-3 transition hover:text-electric">
              <MessageCircle className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              WhatsApp for service or prices
            </Link>
            <p className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              {site.address}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Licensed electrical services built for safety, speed, and precision.</p>
        </div>
      </div>
    </footer>
  );
}
