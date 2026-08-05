import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "onDark" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-terracotta text-cream hover:bg-terracotta-dark",
  onDark: "bg-cream text-terracotta hover:bg-white",
  outline:
    "bg-transparent text-ink border border-ink/20 hover:border-ink/40",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex w-full items-center justify-center rounded-full px-8 py-4 text-base font-semibold transition-colors sm:w-auto ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
