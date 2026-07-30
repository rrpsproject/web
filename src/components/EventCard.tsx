import Link from "next/link";
import { CalendarIcon, MapPinIcon, ArrowRightIcon } from "@/components/ui/icons";
import type { SiteEvent } from "@/data/events";

export default function EventCard({
  event,
  eyebrow,
}: {
  event: SiteEvent;
  eyebrow?: string;
}) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-brand-cream-deep/50 p-5 sm:flex-row sm:items-center sm:p-6">
      <div className="flex h-40 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-navy to-brand-teal sm:h-32 sm:w-56">
        <CalendarIcon className="h-10 w-10 text-brand-cream/70" />
      </div>

      <div className="flex-1">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-teal">
            {eyebrow}
          </p>
        )}
        <h3 className="mt-1 font-serif text-xl text-brand-navy">{event.title}</h3>
        <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-brand-navy/70">
          <span className="flex items-center gap-1.5">
            <CalendarIcon className="h-4 w-4" /> {event.date}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPinIcon className="h-4 w-4" /> {event.location}
          </span>
        </div>
        <Link
          href={event.href}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal transition-colors hover:text-brand-navy"
        >
          View details <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}
