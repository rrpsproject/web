import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Resources — RRPS",
};

export default function ResourcesPage() {
  return (
    <ComingSoon
      title="Resources"
      description="Papers, webinars, and guides for the psychedelic science community are coming soon."
    />
  );
}
