import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TeamMemberCard from "@/components/TeamMemberCard";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "About — RRPS",
};

const mission = [
  "Build a national research network",
  "Facilitate interdisciplinary collaboration",
  "Support joint academic initiatives",
  "Promote knowledge exchange in psychedelic science",
];

const coreValues = [
  "Scientific rigor",
  "Interdisciplinary collaboration",
  "Academic integrity",
  "Ethical responsibility",
  "Open knowledge exchange",
];

export default function AboutPage() {
  const firstRow = teamMembers.slice(0, 3);
  const secondRow = teamMembers.slice(3, 7);

  return (
    <div>
      <PageHero title="About RRPS" />

      <section className="mx-auto max-w-3xl px-6 py-14">
        <p className="text-lg leading-relaxed text-brand-navy/80">
          Rising Researchers in Psychedelic Science (RRPS) is an academic
          initiative connecting students and early-career researchers across
          Israel in the field of psychedelic science. The forum was
          established to create a structured interdisciplinary network across
          universities, hospitals, and research institutes.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="text-center font-serif text-2xl text-brand-navy">
          Our Team
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-10">
          {firstRow.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-10">
          {secondRow.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      <section className="border-t border-brand-navy/10 bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl text-brand-navy">Mission</h2>
          <p className="mt-2 text-brand-navy/75">RRPS aims to:</p>
          <ul className="mt-4 space-y-3">
            {mission.map((item) => (
              <li key={item} className="flex items-start gap-3 text-brand-navy/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl text-brand-navy">Why This Field</h2>
          <p className="mt-4 leading-relaxed text-brand-navy/80">
            Psychedelic science is an emerging interdisciplinary field
            combining neuroscience, psychiatry, psychology, and pharmacology.
            RRPS supports the development of this field in Israel through
            structured academic collaboration.
          </p>
        </div>
      </section>

      <section className="border-t border-brand-navy/10 bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl text-brand-navy">Core Values</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {coreValues.map((value) => (
              <li key={value} className="flex items-start gap-3 text-brand-navy/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" />
                {value}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
