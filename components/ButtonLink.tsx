import Link from "next/link";
import type { ComponentType } from "react";
import type { ReactNode } from "react";
import type { LucideProps } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ComponentType<LucideProps>;
  className?: string;
};

const variants = {
  primary: "bg-electric text-ink shadow-glow hover:bg-white",
  secondary: "border border-white/20 bg-white/10 text-white hover:border-electric hover:bg-electric hover:text-ink",
  ghost: "bg-white text-navy shadow-premium hover:bg-electric"
};

export function ButtonLink({ href, children, variant = "primary", icon: Icon, className = "" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition duration-300 ${variants[variant]} ${className}`}
    >
      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
      <span>{children}</span>
    </Link>
  );
}
