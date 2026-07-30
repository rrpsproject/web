"use client";

import { useState } from "react";
import CommunityDirectory from "./CommunityDirectory";

// Soft access gate mirroring the source directory. The unlock is NOT
// remembered — the access word is required on every page load. NOTE: this is
// still NOT real security — the member data is bundled into the client JS and
// can be read via dev tools. For true protection, gate the data server-side.
const ACCESS_WORD = "mycelium";

export default function CommunityGate() {
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim().toLowerCase() === ACCESS_WORD) {
      setUnlocked(true);
    } else {
      setError("That's not it — check the forum for the current access word.");
    }
  };

  if (unlocked) return <CommunityDirectory />;

  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <form
        onSubmit={submit}
        className="rounded-2xl border border-brand-navy/10 bg-white p-8 text-center"
      >
        <h2 className="font-serif text-xl text-brand-navy">Members only</h2>
        <p className="mt-2 text-sm leading-relaxed text-brand-navy/70">
          This directory is for RRPS members and conference presenters. Enter
          the access word shared in the forum.
        </p>
        <input
          type="password"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError("");
          }}
          placeholder="Access word"
          autoFocus
          autoComplete="off"
          className="mt-5 w-full rounded-xl border border-brand-navy/15 bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-brand-navy/40 focus:border-brand-teal focus:outline-none"
        />
        <button
          type="submit"
          className="mt-3 w-full rounded-full bg-brand-navy py-3 text-sm font-semibold text-brand-cream transition-colors hover:bg-brand-teal"
        >
          Enter
        </button>
        {error && <p className="mt-3 text-sm text-red-700">{error}</p>}
        <p className="mt-5 border-t border-brand-navy/10 pt-4 text-xs text-brand-navy/50">
          Soft access check, not real security — please don&apos;t share the
          access word outside the group.
        </p>
      </form>
    </div>
  );
}
