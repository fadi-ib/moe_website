import type { Metadata } from "next";
import { BookOpen, Clock } from "lucide-react";
import { MotionReveal } from "@/components/MotionReveal";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Electrical Blog",
  description: "Electrical repair tips, generator installation guidance, wiring safety advice, and electrician hiring tips from Moe The Electrician in Lebanon."
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Electrical blog"
        title="Helpful electrical advice for local homeowners and businesses."
        description="Read practical guidance about electrical safety, repairs, generators, lighting, and solar-ready upgrades for homes and small businesses."
      />
      <section className="px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <MotionReveal>
            <SectionHeading eyebrow="Articles" title="Electrical guides for safer decisions." description="Helpful articles for understanding common electrical problems, planning upgrades, and knowing when to call a professional." align="center" />
          </MotionReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {blogPosts.map((post, index) => (
              <MotionReveal key={post.slug} delay={index * 0.04}>
                <article className="h-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
                  <div className="relative aspect-[4/3] bg-navy">
                    <div className="absolute inset-0 bg-circuit-grid bg-[length:28px_28px] opacity-30" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(255,210,31,0.28),transparent_32%),linear-gradient(135deg,rgba(20,54,95,1),rgba(7,21,39,1))]" />
                    <div className="relative flex h-full items-center justify-center text-electric">
                      <BookOpen className="h-12 w-12" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-steel">{post.category}</p>
                    <h2 className="mt-3 text-xl font-black text-ink">{post.title}</h2>
                    <p className="mt-3 leading-7 text-slate-600">{post.excerpt}</p>
                    <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-500">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      {post.readingTime}
                    </p>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
