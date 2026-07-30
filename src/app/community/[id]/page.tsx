import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { communityMembers } from "@/data/community";
import { ArrowRightIcon } from "@/components/ui/icons";

export function generateStaticParams() {
  return communityMembers.map((member) => ({ id: member.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const member = communityMembers.find((m) => m.id === id);
  return { title: member ? `${member.name} — RRPS` : "Profile — RRPS" };
}

export default async function MemberProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const member = communityMembers.find((m) => m.id === id);
  if (!member) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/community"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-teal hover:text-brand-navy"
      >
        <span className="rotate-180">
          <ArrowRightIcon />
        </span>
        Back to Community
      </Link>

      <div className="mt-6 flex items-center gap-5">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-cream-deep text-2xl font-semibold text-brand-navy/60">
          {member.name.charAt(0)}
        </div>
        <div>
          <h1 className="font-serif text-3xl text-brand-navy">{member.name}</h1>
          <p className="text-brand-navy/70">{member.institution}</p>
        </div>
      </div>

      <dl className="mt-10 divide-y divide-brand-navy/10 rounded-2xl border border-brand-navy/10 bg-white">
        <ProfileRow label="Institution" value={member.institution} />
        <ProfileRow label="Field" value={member.field} />
        <ProfileRow label="Methods" value={member.methods.join(", ") || "—"} />
        <ProfileRow label="Research interests" value={member.researchInterests} />
        <ProfileRow label="Current projects" value={member.currentProjects} />
        <ProfileRow
          label="Open to collaboration"
          value={member.openToCollaboration ? "Yes" : "No"}
        />
        {member.contactEmail && (
          <ProfileRow label="Contact" value={member.contactEmail} />
        )}
      </dl>
    </div>
  );
}

function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 px-6 py-4 sm:grid-cols-3 sm:gap-4">
      <dt className="text-sm font-semibold text-brand-navy/60">{label}</dt>
      <dd className="text-sm text-brand-navy/85 sm:col-span-2">{value}</dd>
    </div>
  );
}
