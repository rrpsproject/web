import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — RRPS",
};

export default function PrivacyPage() {
  return (
    <div>
      <PageHero title="Privacy Policy" />
      <section className="mx-auto max-w-2xl space-y-8 px-6 py-14 text-brand-navy/85">
        <p className="text-sm text-brand-navy/55">Last updated: July 17, 2026</p>

        <Block title="Overview">
          Rising Researchers in Psychedelic Science (&quot;RRPS&quot;,
          &quot;we&quot;, &quot;us&quot;) respects your privacy. This policy
          explains what information we collect through this website, how we
          use it, and the choices you have.
        </Block>

        <Block title="Information We Collect">
          We collect information you choose to provide directly to us, such
          as when you apply to join RRPS or submit a profile for the
          Community directory (e.g. name, institution, academic level,
          research interests, and contact details). We do not collect
          sensitive personal data through this site, and we do not sell your
          information to third parties.
        </Block>

        <Block title="How We Use Information">
          We use the information you provide to operate the Community
          directory, communicate with you about RRPS activities and events,
          and improve our website. Community profile information is only
          published with your consent and can be updated or removed by
          contacting us.
        </Block>

        <Block title="Third-Party Forms">
          Applications to join RRPS and conference registrations are
          processed through Google Forms. Your submissions to those forms are
          subject to Google&apos;s own privacy policy in addition to this one.
        </Block>

        <Block title="Cookies & Analytics">
          This site may use basic, privacy-respecting analytics to understand
          overall traffic. We do not use this data to identify individual
          visitors.
        </Block>

        <Block title="Your Choices">
          You may request access to, correction of, or deletion of your
          personal information at any time by contacting us at{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-brand-teal underline">
            {siteConfig.contactEmail}
          </a>
          .
        </Block>

        <Block title="Contact">
          Questions about this policy can be sent to{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-brand-teal underline">
            {siteConfig.contactEmail}
          </a>
          .
        </Block>

        <p className="text-xs text-brand-navy/45">
          This is a general-purpose draft policy and has not been reviewed by
          legal counsel. Please have it reviewed before relying on it.
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
