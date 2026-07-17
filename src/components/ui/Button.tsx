import Link from "next/link";
import { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-navy text-brand-cream hover:bg-brand-teal",
  secondary:
    "bg-brand-cream text-brand-navy border border-brand-navy/15 hover:border-brand-navy/40",
  ghost: "text-brand-teal hover:text-brand-navy",
};

type ButtonProps = {
  href: string;
  variant?: Variant;
  external?: boolean;
  children: React.ReactNode;
} & Omit<ComponentProps<typeof Link>, "href">;

export default function Button({
  href,
  variant = "primary",
  external = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
