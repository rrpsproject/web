import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import IconCircle from "@/components/ui/IconCircle";
import MoleculeOverlay from "@/components/ui/MoleculeOverlay";
import EventCard from "@/components/EventCard";
import {
  UsersIcon,
  NetworkIcon,
  CalendarIcon,
  ArrowRightIcon,
} from "@/components/ui/icons";
import { upcomingEvents } from "@/data/events";

const whatWeDo = [
  {
    title: "Community",
    text: "A growing network of researchers across disciplines and institutions in Israel.",
    icon: UsersIcon,
    href: "/community",
  },
  {
    title: "Research",
    text: "Facilitating interdisciplinary collaboration and shared academic projects.",
    icon: NetworkIcon,
    href: "/projects",
  },
  {
    title: "Events",
    text: "Organizing meetings, lectures, and academic conferences in psychedelic science.",
    icon: CalendarIcon,
    href: "/events",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative isolate overflow-hidden border-b border-brand-navy/10 bg-brand-cream">
        <div className="absolute inset-0 z-0 hidden sm:block">
          <Image
            src="/images/bg.jpg"
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover object-right"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, #f7f5ef 0%, #f7f5ef 32%, rgba(247,245,239,0.9) 44%, rgba(247,245,239,0.5) 60%, rgba(247,245,239,0) 80%)",
            }}
          />
          <MoleculeOverlay className="absolute inset-0 h-full w-full" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:py-28 lg:py-36">
          <div className="max-w-xl">
            <h1 className="font-serif text-4xl leading-[1.05] text-brand-navy sm:text-5xl lg:text-6xl">
              Rising Researchers in Psychedelic Science
            </h1>
            <p className="mt-6 max-w-lg text-xl text-brand-navy/75">
              Connecting students and early-career researchers in psychedelic
              science across Israel.
            </p>
            <div className="mt-8">
              <Button href="/join">Join the Community</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-1 pb-2 sm:pt-2 sm:pb-3">
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-0">
          {whatWeDo.map(({ title, text, icon: Icon, href }, i) => (
            <Link
              key={title}
              href={href}
              className={`group flex items-start gap-4 rounded-xl p-4 outline-none transition-colors hover:bg-brand-cream-deep/50 focus-visible:ring-2 focus-visible:ring-brand-teal sm:px-8 sm:py-5 ${
                i === 0 ? "sm:pl-0" : "sm:border-l sm:border-brand-navy/10"
              } ${i === whatWeDo.length - 1 ? "sm:pr-0" : ""}`}
            >
              <IconCircle className="transition-colors group-hover:bg-brand-teal group-hover:text-brand-cream">
                <Icon className="h-6 w-6" />
              </IconCircle>
              <div>
                <h3 className="flex items-center gap-1.5 font-serif text-lg text-brand-navy transition-colors group-hover:text-brand-teal">
                  {title}
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-navy/70">
                  {text}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {upcomingEvents.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-3 sm:pb-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-teal">
            Upcoming Events
          </p>
          <div className="mt-3 space-y-4">
            {upcomingEvents.slice(0, 2).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
