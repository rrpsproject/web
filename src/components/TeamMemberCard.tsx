import Image from "next/image";
import type { TeamMember } from "@/data/team";

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const initial = member.name.trim().charAt(0).toUpperCase();

  return (
    <div className="flex w-40 flex-col items-center text-center">
      <div className="flex h-36 w-36 items-center justify-center overflow-hidden rounded-full bg-brand-cream-deep text-3xl font-semibold text-brand-navy/60">
        {member.photo ? (
          <Image src={member.photo} alt={member.name} width={144} height={144} className="h-full w-full object-cover" />
        ) : (
          initial
        )}
      </div>
      <h3 className="mt-3 text-sm font-semibold text-brand-navy">{member.name}</h3>
      <p className="mt-1 text-xs leading-snug text-brand-navy/65">{member.affiliation}</p>
    </div>
  );
}
