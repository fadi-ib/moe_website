import type { Metadata } from "next";
import { QuoteRequestForm } from "@/components/QuoteRequestForm";
import { PageHero } from "@/components/PageHero";
import { TrustProcessSection } from "@/components/TrustProcessSection";

export const metadata: Metadata = {
  title: "Request an Electrical Quote",
  description: "Request an electrical quote from Moe The Electrician for repairs, installations, generators, panel upgrades, emergency service, and commercial electrical work in Lebanon."
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="Send details and photos for a faster estimate."
        description="Use the quote form to describe your electrical issue, service area, urgency, and upload photos for local mock lead tracking."
      />
      <section className="px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <QuoteRequestForm />
        </div>
      </section>
      <TrustProcessSection />
    </>
  );
}
