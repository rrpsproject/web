"use client";

import { useState } from "react";
import EventCard from "@/components/EventCard";
import { upcomingEvents, pastEvents } from "@/data/events";

const tabs = [
  { key: "upcoming", label: "Upcoming Events" },
  { key: "past", label: "Past Events" },
] as const;

export default function EventsTabs() {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("upcoming");
  const list = active === "upcoming" ? upcomingEvents : pastEvents;

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex gap-2 border-b border-brand-navy/10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`-mb-px border-b-2 px-4 py-3 text-sm font-semibold transition-colors ${
              active === tab.key
                ? "border-brand-teal text-brand-navy"
                : "border-transparent text-brand-navy/50 hover:text-brand-navy"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-6">
        {list.length === 0 ? (
          <p className="py-16 text-center text-brand-navy/60">
            {active === "upcoming"
              ? "No upcoming events right now — check back soon."
              : "No past events yet."}
          </p>
        ) : (
          list.map((event) => <EventCard key={event.id} event={event} />)
        )}
      </div>
    </div>
  );
}
