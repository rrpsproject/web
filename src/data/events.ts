export type SiteEvent = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  href?: string;
  status: "upcoming" | "past";
  external?: boolean;
  banner?: string;
  photos?: string[];
};

const kickoffPhotos = [1, 2, 3, 4, 5, 6].map(
  (n) => `/images/events/kickoff-2026-05-14/${n}.jpg`
);

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
  {
    id: "lips-webinar-2026-09-29",
    title: "Speech-Based Experience Sampling in Psychedelic Research",
    date: "Tuesday, September 29, 2026",
    location: "Online — joint webinar with LiPS",
    description:
      "The first talk in RRPS's webinar series ahead of our December conference, featuring international students working in psychedelic science. This joint session with LiPS (Linguistics in Psychedelic Science) featured Joanna Kuc, a PhD candidate at UCL, on speech-based experience sampling and its potential as a biomarker for predicting psychological change.",
    status: "past",
    banner: "/images/events/lips-webinar-sep29.jpg",
  },
  {
    id: "rrps-kickoff-2026-05-14",
    title: "RRPS Kick-off Meeting",
    date: "Thursday, May 14, 2026",
    location: "Cafe Hashmal, Tel Aviv",
    description:
      "The kick-off meeting of the RRPS forum — an evening to connect, inspire, and build together. We announced the forum, presented its cases and future direction, and introduced the core team and forum members.",
    status: "past",
    banner: kickoffPhotos[1],
    photos: kickoffPhotos,
  },
];

export const upcomingEvents = events.filter((e) => e.status === "upcoming");
export const pastEvents = events.filter((e) => e.status === "past");
