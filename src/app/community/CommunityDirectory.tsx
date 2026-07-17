"use client";

import { useMemo, useState } from "react";
import MemberCard from "@/components/MemberCard";
import Select from "@/components/ui/Select";
import {
  communityMembers,
  researchAreaOptions,
  methodOptions,
  institutionOptions,
} from "@/data/community";

export default function CommunityDirectory() {
  const [search, setSearch] = useState("");
  const [researchArea, setResearchArea] = useState("");
  const [method, setMethod] = useState("");
  const [institution, setInstitution] = useState("");

  const results = useMemo(() => {
    const query = search.trim().toLowerCase();

    return communityMembers.filter((member) => {
      const matchesQuery =
        query.length === 0 ||
        [
          member.name,
          member.institution,
          member.field,
          ...member.researchAreas,
          ...member.methods,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      const matchesArea =
        !researchArea || member.researchAreas.includes(researchArea);
      const matchesMethod = !method || member.methods.includes(method);
      const matchesInstitution =
        !institution || member.institution === institution;

      return matchesQuery && matchesArea && matchesMethod && matchesInstitution;
    });
  }, [search, researchArea, method, institution]);

  return (
    <div>
      <div className="mx-auto max-w-6xl px-6 pt-10">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, keyword, or research area…"
          className="w-full rounded-xl border border-brand-navy/15 bg-white px-5 py-3.5 text-sm text-brand-navy placeholder:text-brand-navy/40 focus:border-brand-teal focus:outline-none"
        />

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Select
            value={researchArea}
            onChange={setResearchArea}
            options={researchAreaOptions}
            placeholder="Research Area"
          />
          <Select
            value={method}
            onChange={setMethod}
            options={methodOptions}
            placeholder="Method"
          />
          <Select
            value={institution}
            onChange={setInstitution}
            options={institutionOptions}
            placeholder="Institution"
          />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10">
        {results.length === 0 ? (
          <p className="py-16 text-center text-brand-navy/60">
            No researchers match your search yet.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
