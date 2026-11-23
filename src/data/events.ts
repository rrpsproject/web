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
    id: "weiner-webinar-2026-11-23",
    title:
      "Single-Nucleus Transcriptomics Reveals Cell Type-Specific and Time-Dependent Effects of Psilocybin and Ketamine on Gene Expression",
    date: "Monday, November 23, 2026 · 19:00 IST / 12:00 EST / 18:00 CET",
    location: "Online — RRPS webinar",
    description:
      "Psilocybin and ketamine can produce long-lasting changes in neural circuits and behavior, but the transcriptional mechanisms behind these effects remain unclear. Amanda Weiner, a graduate student in the Kwan Lab at Cornell University, presents a single-nucleus RNA sequencing study of the mouse medial frontal cortex, showing that psilocybin produces distinct, temporally regulated transcriptional responses across neuronal and glial cell types, with patterns that differ from those induced by ketamine. Free, registration required.",
    href: "https://shorturl.at/jfPlQ",
    status: "upcoming",
    external: true,
    banner: "/images/events/weiner-webinar-nov23.jpg",
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
    id: "vejmola-webinar-2026-10-29",
    title:
      "Perceptual Changes Induced by Psychedelics and Their Electrophysiological Correlates in Rats",
    date: "Thursday, October 29, 2026",
    location: "Online — RRPS webinar",
    description:
      "How do psychedelic visual distortions actually work in the brain? Dr. Čestmír Vejmola, a postdoctoral researcher at the National Institute of Mental Health (Czech Republic), bridged rodent electrophysiology and human visual perception to show how psychedelics alter sensory processing across species — presenting new translational models linking neural activity to altered visual states, and shared behavioral patterns between humans and animal models under psilocybin.",
    status: "past",
    banner: "/images/events/vejmola-webinar-oct29.jpg",
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
