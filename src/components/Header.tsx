"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { mainNav } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-navy/10 bg-brand-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Logo className="h-8 w-auto sm:h-9" />

        <nav className="hidden items-center gap-7 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-navy/80 transition-colors hover:text-brand-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/join"
            className="rounded-full bg-brand-navy px-5 py-2.5 text-sm font-semibold text-brand-cream transition-colors hover:bg-brand-teal"
          >
            Join Us
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-brand-navy md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-navy/10 bg-brand-cream px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-brand-navy/80 hover:bg-brand-navy/5 hover:text-brand-navy"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/join"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand-navy px-5 py-2.5 text-center text-sm font-semibold text-brand-cream"
            >
              Join Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
