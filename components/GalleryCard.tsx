import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

type GalleryCardProps = {
  title: string;
  category: string;
  label: string;
  icon: ComponentType<LucideProps>;
};

export function GalleryCard({ title, category, label, icon: Icon }: GalleryCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,21,39,0.12),rgba(7,21,39,0.82)),radial-gradient(circle_at_28%_24%,rgba(255,210,31,0.34),transparent_30%)]" />
        <div className="absolute inset-x-6 top-6 h-16 rounded-md bg-white/18 shadow-glow backdrop-blur-sm" />
        <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-3">
          <span className="h-20 rounded-md bg-white/20 backdrop-blur-sm" />
          <span className="h-20 rounded-md bg-white/12 backdrop-blur-sm" />
          <span className="h-20 rounded-md bg-electric/40 backdrop-blur-sm" />
        </div>
        <div className="absolute inset-0 bg-circuit-grid bg-[length:32px_32px] opacity-20" />
        <div className="relative flex h-full flex-col justify-between p-5">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-md bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-ink shadow-sm">{category}</span>
            <span className="rounded-md bg-electric px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-ink">{label}</span>
          </div>
          <div className="flex h-16 w-16 items-center justify-center rounded-md border border-electric/40 bg-ink/70 text-electric shadow-glow backdrop-blur transition duration-300 group-hover:scale-105">
            <Icon className="h-8 w-8" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 p-5">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-steel">Moe The Electrician</p>
          <h3 className="mt-2 text-lg font-black text-ink">{title}</h3>
        </div>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-slate-100 text-ink transition group-hover:bg-electric">
          <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}
