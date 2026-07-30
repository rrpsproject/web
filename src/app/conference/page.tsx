import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import { CalendarIcon, MapPinIcon } from "@/components/ui/icons";
import { conference, programItems, speakers } from "@/data/conference";

export const metadata: Metadata = {
  title: "Conference — RRPS",
};

export default function ConferencePage() {
  return (
    <div>
      <PageHero eyebrow={conference.collaboration} title={conference.title} />

      <section className="mx-auto max-w-3xl px-6 py-14">
        <p className="text-lg leading-relaxed text-brand-navy/80">
          {conference.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-brand-navy/75">
          <span className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" /> {conference.date}
          </span>
          <span className="flex items-center gap-2">
            <MapPinIcon className="h-4 w-4" /> {conference.location}
          </span>
        </div>

        <div className="mt-8">
          <Button href={conference.registrationUrl} external>
            Register for Conference
          </Button>
        </div>
      </section>

      <section className="border-t border-brand-navy/10 bg-white px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-2xl text-brand-navy">Program</h2>
          <ol className="mt-8 space-y-0">
            {programItems.map((item, i) => (
              <li key={item.title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-navy text-xs font-semibold text-brand-cream">
                    {i + 1}
                  </span>
                  {i < programItems.length - 1 && (
                    <span className="w-px flex-1 bg-brand-navy/15" />
                  )}
                </div>
                <p className="pb-8 pt-1 text-brand-navy/85">{item.title}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl text-brand-navy">Speakers</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {speakers.map((speaker) => (
              <div
                key={speaker.id}
                className="rounded-2xl border border-brand-navy/10 bg-white p-5 text-center"
              >
                <div className="mx-auto h-14 w-14 rounded-full bg-brand-cream-deep" />
                <h3 className="mt-3 text-sm font-semibold text-brand-navy">
                  {speaker.name}
                </h3>
                <p className="text-xs text-brand-navy/60">{speaker.institution}</p>
                <p className="mt-1 text-xs text-brand-navy/70">{speaker.talkTitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-brand-navy/10 bg-white px-6 py-16 text-center">
        <Button href={conference.registrationUrl} external>
          Register for Conference
        </Button>
      </section>
    </div>
  );
}
