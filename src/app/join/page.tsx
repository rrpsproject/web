import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join Us — RRPS",
};

export default function JoinPage() {
  return (
    <div>
      <PageHero title="Join RRPS" />
      <section className="mx-auto max-w-2xl px-6 py-16 text-center">
        <p className="text-lg leading-relaxed text-brand-navy/80">
          RRPS welcomes students and early-career researchers in
          neuroscience, psychology, psychiatry, pharmacology, and related
          fields interested in psychedelic science.
        </p>
        <div className="mt-8">
          <Button href={siteConfig.joinFormUrl} external>
            Apply to Join
          </Button>
        </div>
      </section>
    </div>
  );
}
