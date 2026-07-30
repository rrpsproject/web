"use client";

import { useMemo, useState } from "react";
import MemberCard from "@/components/MemberCard";
import Select from "@/components/ui/Select";
import {
  communityMembers,
  instituteOptions,
  statusOptions,
} from "@/data/community";

export default function CommunityDirectory() {
  const [search, setSearch] = useState("");
  const [institute, setInstitute] = useState("");
  const [status, setStatus] = useState("");
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null);

  const results = useMemo(() => {
    const query = search.trim().toLowerCase();

    return communityMembers.filter((member) => {
      if (institute && member.institute !== institute) return false;
      if (status && member.status !== status) return false;
      if (
        activeKeyword &&
        !member.keywords.some((k) => k.toLowerCase() === activeKeyword)
      ) {
        return false;
      }
      if (query) {
        const haystack = [
          member.name,
          member.institute,
          member.department,
          member.field,
          member.bio,
          member.keywords.join(" "),
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    });
  }, [search, institute, status, activeKeyword]);

  const toggleKeyword = (keyword: string) => {
    const key = keyword.toLowerCase();
    setActiveKeyword((current) => (current === key ? null : key));
  };

  const clearFilters = () => {
    setSearch("");
    setInstitute("");
    setStatus("");
    setActiveKeyword(null);
  };

  const hasFilters = Boolean(search || institute || status || activeKeyword);

  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-brand-navy/10 bg-white p-4 sm:flex-row sm:items-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search name, field, or keyword…"
          className="h-12 flex-1 rounded-xl border border-brand-navy/15 bg-white px-4 text-sm text-brand-navy placeholder:text-brand-navy/40 focus:border-brand-teal focus:outline-none"
        />
        <div className="grid grid-cols-1 gap-3 sm:w-auto sm:grid-cols-2">
          <Select
            value={institute}
            onChange={setInstitute}
            options={instituteOptions}
            placeholder="All institutes"
          />
          <Select
            value={status}
            onChange={setStatus}
            options={statusOptions}
            placeholder="All statuses"
          />
        </div>
      </div>

      <div className="mb-6 mt-4 flex items-center justify-between gap-4 text-sm text-brand-navy/60">
        <span>
          {activeKeyword ? (
            <>
              {results.length} of {communityMembers.length} members work on{" "}
              <span className="font-medium text-brand-amber">
                “{activeKeyword}”
              </span>
            </>
          ) : (
            `${results.length} of ${communityMembers.length} members`
          )}
        </span>
        {hasFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="shrink-0 rounded-full border border-brand-navy/15 px-3 py-1.5 text-xs font-medium text-brand-navy/70 transition-colors hover:border-brand-teal hover:text-brand-teal"
          >
            Clear filters
          </button>
        )}
      </div>

      {results.length === 0 ? (
        <p className="py-16 text-center text-brand-navy/60">
          No one matches these filters yet — try clearing one.
        </p>
      ) : (
        <div className="grid gap-5 pb-16 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
              activeKeyword={activeKeyword}
              onToggleKeyword={toggleKeyword}
            />
          ))}
        </div>
      )}
    </div>
  );
}
