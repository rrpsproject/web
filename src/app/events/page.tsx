import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EventsTabs from "./EventsTabs";

export const metadata: Metadata = {
  title: "Events — RRPS",
};

export default function EventsPage() {
  return (
    <div>
      <PageHero title="Events" />
      <EventsTabs />
    </div>
  );
}
