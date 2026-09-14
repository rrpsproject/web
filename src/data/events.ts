export type SiteEvent = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  href: string;
  status: "upcoming" | "past";
  external?: boolean;
  banner?: string;
};

export const events: SiteEvent[] = [
  {
    id: "lips-webinar-2026-09-29",
    title: "Speech-Based Experience Sampling in Psychedelic Research",
    date: "Tuesday, September 29, 2026",
    location: "Online — joint webinar with LiPS",
    description:
      "The first talk in RRPS's new webinar series ahead of our December conference, featuring international students working in psychedelic science. This joint session with LiPS (Linguistics in Psychedelic Science) features Joanna Kuc, a PhD candidate at UCL, on speech-based experience sampling and its potential as a biomarker for predicting psychological change. Free, registration required.",
    href: "https://shorturl.at/3j1pf",
    status: "upcoming",
    external: true,
    banner: "/images/events/lips-webinar-sep29.jpg",
  },
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
