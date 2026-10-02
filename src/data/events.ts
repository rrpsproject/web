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
    id: "vejmola-webinar-2026-10-29",
    title:
      "Perceptual Changes Induced by Psychedelics and Their Electrophysiological Correlates in Rats",
    date: "Thursday, October 29, 2026 · 19:00 IST / 18:00 CET / 17:00 UTC",
    location: "Online — RRPS webinar",
    description:
      "How do psychedelic visual distortions actually work in the brain? Dr. Čestmír Vejmola, a postdoctoral researcher at the National Institute of Mental Health (Czech Republic), bridges rodent electrophysiology and human visual perception to reveal how psychedelics alter sensory processing across species — presenting new translational models linking neural activity to altered visual states, and shared behavioral patterns between humans and animal models under psilocybin. Relevant for researchers across neuroscience, psychology, computational modeling, and medicine. Free, registration required.",
    href: "https://shorturl.at/UTAo6",
    status: "upcoming",
    external: true,
    banner: "/images/events/vejmola-webinar-oct29.jpg",
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
      "The evening that launched the RRPS forum. Researchers and friends of the community gathered at Cafe Hashmal in Tel Aviv to connect, share inspiration, and start building together. We officially announced the forum, presented the cases we're working on and our vision for the road ahead, and introduced the core team alongside the forum's founding members.",
    status: "past",
    banner: kickoffPhotos[1],
    photos: kickoffPhotos,
  },
];

export const upcomingEvents = events.filter((e) => e.status === "upcoming");
export const pastEvents = events.filter((e) => e.status === "past");
