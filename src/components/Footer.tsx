import Link from "next/link";
import Logo from "./Logo";
import { footerNav, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-brand-cream">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-5">
          <div className="col-span-2 sm:col-span-3 md:col-span-1">
            <span className="inline-flex rounded-xl bg-brand-cream px-3.5 py-2.5">
              <Logo className="h-8 w-auto" />
            </span>
          </div>

          <FooterColumn title="Navigate" links={footerNav.navigate} />
          <FooterColumn title="Resources" links={footerNav.resources} />
          <FooterColumn title="Legal" links={footerNav.legal} />

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-brand-cream/60">
              Contact
            </h3>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-3 block text-sm text-brand-cream/85 hover:text-brand-cream"
            >
              {siteConfig.contactEmail}
            </a>
            <div className="mt-4 flex gap-3">
              <SocialIcon href={siteConfig.linkedinUrl} label="LinkedIn">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97V21h-4V9Z" />
              </SocialIcon>
              <SocialIcon href={`mailto:${siteConfig.contactEmail}`} label="Email">
                <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.4 2 7.1 5.6a1 1 0 0 0 1 0L19.6 7H4.4Zm15.6 2.3-6.6 5.2a3 3 0 0 1-3 0L3.8 9.3V17h16.2V9.3Z" />
              </SocialIcon>
            </div>
          </div>
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

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-cream/30 text-brand-cream/85 transition-colors hover:border-brand-cream hover:text-brand-cream"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        {children}
      </svg>
    </a>
  );
}
