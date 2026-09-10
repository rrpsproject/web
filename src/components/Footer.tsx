import Link from "next/link";
import Logo from "./Logo";
import { footerNav } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-brand-cream">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <span className="inline-flex rounded-xl bg-brand-cream px-3.5 py-2.5">
              <Logo className="h-8 w-auto" />
            </span>
          </div>

          <FooterColumn title="Navigate" links={footerNav.navigate} />
          <FooterColumn title="Resources" links={footerNav.resources} />
          <FooterColumn title="Legal" links={footerNav.legal} />
        </div>

        <div className="mt-12 border-t border-brand-cream/15 pt-6 text-xs text-brand-cream/55">
          © {new Date().getFullYear()} RRPS — Rising Researchers in Psychedelic Science
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wide text-brand-cream/60">
        {title}
      </h3>
      <ul className="mt-3 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-brand-cream/85 hover:text-brand-cream"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
