export type SiteEvent = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  href: string;
  status: "upcoming" | "past";
};

export const events: SiteEvent[] = [
  {
    id: "rrps-conference-2026",
    title: "RRPS First Conference 2026",
    date: "December 2026",
    location: "Weizmann Institute of Science",
    description:
      "An academic conference bringing together researchers in psychedelic science in Israel.",
    href: "/conference",
    status: "upcoming",
  },
];

export const upcomingEvents = events.filter((e) => e.status === "upcoming");
export const pastEvents = events.filter((e) => e.status === "past");
