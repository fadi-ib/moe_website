"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Electrical service request from ${form.get("name") || "website visitor"}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.get("name") || ""}`,
        `Phone: ${form.get("phone") || ""}`,
        `Email: ${form.get("email") || ""}`,
        `Service: ${form.get("service") || ""}`,
        "",
        `${form.get("message") || ""}`
      ].join("\n")
    );

    setSent(true);
    window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-premium md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-ink">
          Full name
          <input className="input-field" name="name" type="text" placeholder="Your name" required />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Phone number
          <input className="input-field" name="phone" type="tel" placeholder="Your phone" required />
        </label>
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-ink">
          Email
          <input className="input-field" name="email" type="email" placeholder="you@example.com" required />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Service needed
          <select className="input-field" name="service" defaultValue="" required>
            <option value="" disabled>
              Select a service
            </option>
            <option>Electrical Repairs</option>
            <option>Electrical Installations</option>
            <option>Panel Upgrades</option>
            <option>Lighting Installation</option>
            <option>Generator Installation</option>
            <option>Smart Home Electrical</option>
            <option>Emergency Repairs</option>
          </select>
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-bold text-ink">
        Project details
        <textarea className="input-field min-h-36 resize-y" name="message" placeholder="Tell us what is happening or what you need installed." required />
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-electric px-5 py-3 text-sm font-black text-ink shadow-glow transition hover:bg-navy hover:text-white md:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Send Request
      </button>
      {sent ? <p className="mt-4 text-sm font-bold text-steel">Opening your email app with the request details.</p> : null}
    </form>
  );
}
