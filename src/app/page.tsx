import Button from "@/components/ui/Button";
import IconCircle from "@/components/ui/IconCircle";
import OrganicWaves from "@/components/ui/OrganicWaves";
import EventCard from "@/components/EventCard";
import { UsersIcon, NetworkIcon, CalendarIcon } from "@/components/ui/icons";
import { upcomingEvents } from "@/data/events";

const whatWeDo = [
  {
    title: "Community",
    text: "A growing network of researchers across disciplines and institutions in Israel.",
    icon: UsersIcon,
  },
  {
    title: "Research",
    text: "Facilitating interdisciplinary collaboration and shared academic projects.",
    icon: NetworkIcon,
  },
  {
    title: "Events",
    text: "Organizing meetings, lectures, and academic conferences in psychedelic science.",
    icon: CalendarIcon,
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-brand-navy/10">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <h1 className="font-serif text-4xl leading-tight text-brand-navy sm:text-5xl">
              Rising Researchers in Psychedelic Science
            </h1>
            <p className="mt-5 max-w-md text-lg text-brand-navy/75">
              Connecting students and early-career researchers in psychedelic
              science across Israel.
            </p>
            <div className="mt-8">
              <Button href="/join">Join the Community</Button>
            </div>
          </div>

          <div className="relative h-64 sm:h-80 lg:h-96">
            <OrganicWaves className="h-full w-full" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-serif text-3xl text-brand-navy">What We Do</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {whatWeDo.map(({ title, text, icon: Icon }) => (
            <div
              key={title}
              className="flex flex-col items-start gap-4 rounded-2xl border border-brand-navy/10 bg-white p-6"
            >
              <IconCircle>
                <Icon className="h-6 w-6" />
              </IconCircle>
              <h3 className="font-serif text-lg text-brand-navy">{title}</h3>
              <p className="text-sm text-brand-navy/75">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {upcomingEvents[0] && (
        <section className="mx-auto max-w-6xl px-6 pb-16 sm:pb-20">
          <EventCard event={upcomingEvents[0]} eyebrow="Upcoming Event" />
        </section>
      )}
    </div>
  );
}
