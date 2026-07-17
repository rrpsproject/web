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
    <div className="flex flex-col gap-6 rounded-2xl border border-brand-navy/10 bg-white p-6 sm:flex-row sm:items-center">
      <div className="flex h-32 w-full shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-navy to-brand-teal sm:w-48">
        <CalendarIcon className="h-10 w-10 text-brand-cream/80" />
      </div>

      <div className="flex-1">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-teal">
            {eyebrow}
          </p>
        )}
        <h3 className="mt-1 font-serif text-xl text-brand-navy">{event.title}</h3>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-brand-navy/70">
          <span className="flex items-center gap-1.5">
            <CalendarIcon className="h-4 w-4" /> {event.date}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPinIcon className="h-4 w-4" /> {event.location}
          </span>
        </div>
        <p className="mt-3 text-sm text-brand-navy/75">{event.description}</p>
      </div>

      <Link
        href={event.href}
        className="flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-brand-navy px-5 py-2.5 text-sm font-semibold text-brand-cream transition-colors hover:bg-brand-teal"
      >
        View details <ArrowRightIcon />
      </Link>
    </div>
  );
}
