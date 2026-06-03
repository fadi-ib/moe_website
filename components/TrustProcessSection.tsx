import { BadgeCheck, Clock3, ClipboardCheck, MessageCircle, ShieldCheck, Wrench } from "lucide-react";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";

const process = [
  { title: "Send photos", text: "Share the issue on WhatsApp or through the quote form.", icon: MessageCircle },
  { title: "Get a fast estimate", text: "Moe reviews the details and confirms the best next step.", icon: ClipboardCheck },
  { title: "Schedule the visit", text: "Emergency and planned work are scheduled clearly.", icon: Clock3 },
  { title: "Repair and verify", text: "The work is completed, tested, and cleaned before wrap-up.", icon: Wrench }
];

export function TrustProcessSection() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <MotionReveal>
          <SectionHeading
            eyebrow="Trust and process"
            title="Licensed, insured, and built for fast response."
            description="A simple project flow helps turn website visitors into qualified leads without making them guess what happens next."
            align="center"
          />
        </MotionReveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <MotionReveal>
            <div className="h-full rounded-lg bg-navy p-7 text-white shadow-premium">
              <div className="flex h-14 w-14 items-center justify-center rounded-md bg-electric text-ink">
                <ShieldCheck className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-3xl font-black">Emergency response when safety cannot wait.</h3>
              <p className="mt-4 leading-8 text-white/70">Breaker faults, burning smells, power loss, unsafe outlets, and urgent wiring problems can be requested by phone or WhatsApp.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["Licensed", "Insured", "Emergency Service", "Free Estimates"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 rounded-md bg-white/10 px-4 py-3 text-sm font-black">
                    <BadgeCheck className="h-4 w-4 text-electric" aria-hidden="true" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
          <div className="grid gap-4 md:grid-cols-2">
            {process.map((step, index) => (
              <MotionReveal key={step.title} delay={index * 0.04}>
                <article className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-electric text-ink">
                    <step.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-sm font-black text-steel">Step {index + 1}</p>
                  <h3 className="mt-2 text-xl font-black text-ink">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
