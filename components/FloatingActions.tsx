"use client";

import Link from "next/link";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed bottom-20 right-5 z-40 flex flex-col gap-3 md:bottom-5">
        <Link
          href={site.whatsapp}
          aria-label="Chat on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-premium transition hover:-translate-y-1"
        >
          <MessageCircle className="h-7 w-7" aria-hidden="true" />
        </Link>
        {visible ? (
          <button
            type="button"
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-electric text-ink shadow-premium transition hover:-translate-y-1"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </button>
        ) : null}
      </div>
      <Link
        href={site.phoneHref}
        className="fixed bottom-0 left-0 right-0 z-40 flex min-h-14 items-center justify-center gap-2 bg-electric px-4 py-3 text-sm font-black text-ink shadow-premium md:hidden"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        Call Now
      </Link>
    </>
  );
}
