import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ComponentType<LucideProps>;
  href?: string;
};

export function ServiceCard({ title, description, icon: Icon, href = "/contact" }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-electric hover:shadow-premium">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-navy text-electric transition duration-300 group-hover:bg-electric group-hover:text-ink">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-black text-ink">{title}</h3>
      <p className="mt-3 flex-1 leading-7 text-slate-600">{description}</p>
      <Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-black text-steel transition group-hover:text-ink">
        Request service
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
