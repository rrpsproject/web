"use client";

import { useState } from "react";
import type { CommunityMember } from "@/data/community";

export default function MemberCard({
  member,
  activeKeyword,
  onToggleKeyword,
}: {
  member: CommunityMember;
  activeKeyword: string | null;
  onToggleKeyword: (keyword: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const subline = [member.department, member.field].filter(Boolean).join(" · ");

  return (
    <div className="flex flex-col rounded-2xl border border-brand-navy/10 bg-white p-5 transition-colors hover:border-brand-sage">
      <h3 className="font-serif text-lg text-brand-navy">{member.name}</h3>
      {member.status && (
        <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-brand-teal">
          {member.status}
        </p>
      )}
      <p className="mt-2 text-sm text-brand-navy/70">{member.institute}</p>
      {subline && <p className="text-xs text-brand-navy/50">{subline}</p>}

      {member.bio && (
        <div className="mt-3">
          <p
            className={`text-sm leading-relaxed text-brand-navy/80 ${
              expanded ? "" : "line-clamp-4"
            }`}
          >
            {member.bio}
          </p>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-1 text-xs font-semibold text-brand-teal hover:text-brand-navy"
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        </div>
      )}

      {member.keywords.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {member.keywords.map((keyword) => {
            const active = activeKeyword === keyword.toLowerCase();
            return (
              <button
                key={keyword}
                type="button"
                onClick={() => onToggleKeyword(keyword)}
                className={`rounded-full px-2.5 py-0.5 text-xs transition-colors ${
                  active
                    ? "bg-brand-navy text-brand-cream"
                    : "border border-brand-teal/25 bg-brand-teal/10 text-brand-teal hover:border-brand-sage"
                }`}
              >
                {keyword}
              </button>
            );
          })}
        </div>
      )}

      {(member.pi || member.email) && (
        <div className="mt-auto space-y-1 border-t border-brand-navy/10 pt-3 text-xs text-brand-navy/60">
          {member.pi && <p>PI / supervisor: {member.pi}</p>}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="block break-all text-brand-teal hover:text-brand-navy"
            >
              {member.email}
            </a>
          )}
        </div>
      )}
    </div>
  );
}
