import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CommunityDirectory from "./CommunityDirectory";

export const metadata: Metadata = {
  title: "Community — RRPS",
};

export default function CommunityPage() {
  return (
    <div>
      <PageHero
        title="Our Community"
        subtitle="Connect. Collaborate. Advance science together."
      />
      <CommunityDirectory />
    </div>
  );
}
