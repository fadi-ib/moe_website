import { Star } from "lucide-react";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { reviews } from "@/lib/site";

function initials(name: string) {
  return name.split(" ").map((part) => part[0]).join("").replace(".", "");
}

export function ReviewsSection() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <MotionReveal>
          <SectionHeading
            eyebrow="Google-style reviews"
            title="Local customers trust Moe for fast, clean electrical work."
            description="Realistic review cards designed to build confidence before a visitor calls or requests a quote."
            align="center"
          />
        </MotionReveal>
        <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-5">
          {reviews.map((review, index) => (
            <MotionReveal key={review.name} delay={index * 0.04} className="min-w-[280px] snap-start md:min-w-0">
              <article className="h-full rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sm font-black text-electric">
                    {initials(review.name)}
                  </div>
                  <div>
                    <h3 className="font-black text-ink">{review.name}</h3>
                    <p className="text-sm text-slate-500">{review.area}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-1 text-electric">
                  {Array.from({ length: review.rating }).map((_, star) => (
                    <Star key={star} className="h-4 w-4 fill-electric" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-4 leading-7 text-slate-600">&ldquo;{review.quote}&rdquo;</p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
