import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use — RRPS",
};

export default function TermsPage() {
  return (
    <div>
      <PageHero title="Terms of Use" />
      <section className="mx-auto max-w-2xl space-y-8 px-6 py-14 text-brand-navy/85">
        <p className="text-sm text-brand-navy/55">Last updated: July 17, 2026</p>

        <Block title="Acceptance of Terms">
          By accessing this website, you agree to these Terms of Use. If you
          do not agree, please do not use the site.
        </Block>

        <Block title="Purpose of This Site">
          This website provides information about Rising Researchers in
          Psychedelic Science (RRPS), an academic initiative connecting
          students and early-career researchers in psychedelic science
          across Israel, including our Community directory, Events, and
          Conference information.
        </Block>

        <Block title="Community Directory">
          The Community directory is intended for genuine academic
          networking. Entries are added or updated by RRPS based on
          information provided by members. By submitting your information
          for inclusion, you confirm it is accurate and that you consent to
          its display on this site.
        </Block>

        <Block title="Not Medical or Legal Advice">
          Content on this site is provided for academic and informational
          purposes only. It does not constitute medical, legal, or
          professional advice regarding psychedelic substances or their use.
        </Block>

        <Block title="External Links">
          This site links to third-party services, including Google Forms
          for applications and registrations. RRPS is not responsible for
          the content or practices of external sites.
        </Block>

        <Block title="Intellectual Property">
          The RRPS name, logo, and original content on this site belong to
          RRPS unless otherwise noted, and may not be used without
          permission.
        </Block>

        <Block title="Changes to These Terms">
          We may update these Terms from time to time. Continued use of the
          site after changes constitutes acceptance of the updated Terms.
        </Block>

        <Block title="Contact">
          Questions about these Terms can be sent to{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-brand-teal underline">
            {siteConfig.contactEmail}
          </a>
          .
        </Block>

        <p className="text-xs text-brand-navy/45">
          This is a general-purpose draft and has not been reviewed by legal
          counsel. Please have it reviewed before relying on it.
        </p>
      </section>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-serif text-xl text-brand-navy">{title}</h2>
      <p className="mt-2 leading-relaxed">{children}</p>
    </div>
  );
}
