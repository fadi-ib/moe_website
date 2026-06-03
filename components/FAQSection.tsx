import { faqs } from "@/lib/site";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  items?: FAQItem[];
  title?: string;
};

export function FAQSection({ items = faqs, title = "Electrical service questions, answered." }: FAQSectionProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <section className="bg-slate-50 px-4 py-16 md:px-8 md:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto max-w-5xl">
        <MotionReveal>
          <SectionHeading eyebrow="FAQ" title={title} description="Helpful answers for common repair, generator, panel, residential, and commercial electrical questions." align="center" />
        </MotionReveal>
        <div className="mt-10 grid gap-4">
          {items.map((item, index) => (
            <MotionReveal key={item.question} delay={index * 0.03}>
              <details className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer list-none text-lg font-black text-ink">{item.question}</summary>
                <p className="mt-3 leading-8 text-slate-600">{item.answer}</p>
              </details>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
