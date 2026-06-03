type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, description, align = "left", light = false }: SectionHeadingProps) {
  return (
    <div className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : ""}`}>
      {eyebrow ? (
        <p className={`mb-3 text-xs font-black uppercase tracking-[0.18em] ${light ? "text-electric" : "text-steel"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-3xl font-black tracking-tight md:text-5xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {description ? (
        <p className={`mt-4 text-base leading-8 md:text-lg ${light ? "text-white/70" : "text-slate-600"}`}>{description}</p>
      ) : null}
    </div>
  );
}
