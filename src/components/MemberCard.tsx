import Link from "next/link";
import type { CommunityMember } from "@/data/community";

export default function MemberCard({ member }: { member: CommunityMember }) {
  return (
    <div className="flex flex-col rounded-2xl border border-brand-navy/10 bg-white p-6">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-cream-deep text-base font-semibold text-brand-navy/60">
        {member.name.charAt(0)}
      </div>
      <h3 className="mt-4 text-center text-base font-semibold text-brand-navy">
        {member.name}
      </h3>
      <p className="text-center text-sm text-brand-navy/70">{member.institution}</p>
      <p className="text-center text-xs uppercase tracking-wide text-brand-navy/45">
        {member.academicLevel}
      </p>

      <div className="mt-4 space-y-2 text-xs">
        <TagRow label="Research" tags={member.researchAreas} />
        <TagRow label="Methods" tags={member.methods} />
      </div>

      <Link
        href={`/community/${member.id}`}
        className="mt-5 rounded-full bg-brand-navy py-2.5 text-center text-sm font-semibold text-brand-cream transition-colors hover:bg-brand-teal"
      >
        View Profile
      </Link>
    </div>
  );
}

function TagRow({ label, tags }: { label: string; tags: string[] }) {
  if (tags.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="text-brand-navy/50">{label}:</span>
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-brand-teal/30 bg-brand-teal/10 px-2 py-0.5 text-brand-teal"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
