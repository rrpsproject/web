import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import { CalendarIcon, MapPinIcon } from "@/components/ui/icons";
import {
  conference,
  organizingCommittee,
  sponsors,
} from "@/data/conference";

export const metadata: Metadata = {
  title: "Conference — RRPS",
};

export default function ConferencePage() {
  return (
    <div>
      <PageHero
        eyebrow={conference.collaboration}
        title={conference.title}
        subtitle={conference.tagline}
      />

      {/* Overview + poster */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-brand-navy/80">
              <span className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-brand-teal" />
                <span className="font-semibold text-brand-navy">
                  {conference.date}
                </span>
              </span>
              <span className="flex items-start gap-2">
                <MapPinIcon className="h-5 w-5 shrink-0 text-brand-teal" />
                <span>
                  <span className="font-semibold text-brand-navy">
                    {conference.venue}
                  </span>
                  <br />
                  {conference.location}
                </span>
              </span>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-brand-navy/80">
              {conference.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={conference.registrationUrl} external>
                Register for the Conference
              </Button>
            </div>

            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <Deadline
                label="Abstract Submission Deadline"
                date={conference.abstractDeadline}
              />
              <Deadline
                label="Registration Deadline"
                date={conference.registrationDeadline}
              />
            </dl>
          </div>

          <figure className="overflow-hidden rounded-2xl border border-brand-navy/10 shadow-sm">
            <Image
              src={conference.poster}
              alt={`${conference.title} — conference poster`}
              width={1350}
              height={2114}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </figure>
        </div>
      </section>

      {/* Organizing committee */}
      <section className="border-t border-brand-navy/10 bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-2xl text-brand-navy">
            Organizing Committee
          </h2>
          <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {organizingCommittee.map((member) => (
              <li
                key={member.name}
                className="flex items-baseline gap-2 border-b border-brand-navy/10 pb-3"
              >
                <span className="font-semibold text-brand-navy">
                  {member.name}
                </span>
                <span className="text-sm text-brand-navy/60">
                  {member.affiliation}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sponsors */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-serif text-2xl text-brand-navy">Sponsors</h2>
        <ul className="mt-6 flex flex-wrap gap-6">
          {sponsors.map((sponsor) => (
            <li
              key={sponsor.name}
              className="flex h-28 w-48 items-center justify-center rounded-xl border border-brand-navy/15 bg-white p-4"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={160}
                height={80}
                className="max-h-full w-auto max-w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </section>

      {/* Coordinator & accessibility */}
      <section className="border-t border-brand-navy/10 bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-2xl text-brand-navy">
            {conference.coordinator.role}
          </h2>
          <p className="mt-4 text-brand-navy/85">
            <span className="font-semibold">{conference.coordinator.name}</span>
            {" — "}
            {conference.coordinator.phones.join(" · ")}
          </p>
          <a
            href={`mailto:${conference.coordinator.email}`}
            className="mt-1 inline-block text-brand-teal hover:text-brand-navy"
          >
            {conference.coordinator.email}
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-brand-navy/10 px-6 py-16 text-center">
        <Button href={conference.registrationUrl} external>
          Register for the Conference
        </Button>
        <p className="mt-4 text-sm text-brand-navy/60">
          Registration closes {conference.registrationDeadline}
        </p>
      </section>
    </div>
  );
}

function Deadline({ label, date }: { label: string; date: string }) {
  return (
    <div className="rounded-xl border border-brand-navy/10 bg-brand-cream-deep/30 px-5 py-4">
      <dt className="text-xs font-semibold uppercase tracking-wide text-brand-teal">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-medium text-brand-navy">{date}</dd>
    </div>
  );
}
