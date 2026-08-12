export type CommitteeMember = {
  name: string;
  affiliation: string;
};

export type Sponsor = {
  name: string;
  logo?: string;
};

export const conference = {
  title: "The 1st RRPS Research Day",
  tagline: "The Future of Psychedelic Science",
  collaboration: "In collaboration with the Weizmann Institute of Science",
  description:
    "Join us for the 1st RRPS Conference, a student-led event bringing together early-career researchers across the field of psychedelic science. From neuroscience and clinical research to animal models, anthropology, and beyond, the event will foster scientific exchange, collaboration, and new perspectives shaping the future of psychedelic research in Israel.",
  date: "23 December 2026",
  venue: "The David Lopatie Conference Centre",
  location: "Weizmann Institute of Science",
  registrationUrl:
    "https://erez.weizmann.ac.il/apx/r/ws1/101/101/?P101_PKNS_CODE=3443",
  abstractDeadline: "September 23, 2026",
  registrationDeadline: "December 15, 2026",
  poster: "/images/RRPS_Conference_Invite.jpg",
  coordinator: {
    name: "Irit Veksler",
    role: "Conference Coordinator & Accessibility",
    phones: ["08-9344245", "050-510-9718"],
    email: "Irit.veksler@weizmann.ac.il",
  },
};

export const organizingCommittee: CommitteeMember[] = [
  { name: "Ophir Netzer", affiliation: "University of Haifa" },
  { name: "Lisa Simon", affiliation: "University of Haifa" },
  { name: "Jonathan Toledano", affiliation: "Weizmann Institute of Science" },
  { name: "Uri Monsonego", affiliation: "Weizmann Institute of Science" },
  { name: "Chloe Shevakh", affiliation: "The Hebrew University of Jerusalem" },
  { name: "Tom Ben Tal", affiliation: "The Hebrew University of Jerusalem" },
  { name: "Lior Kritzman", affiliation: "Reichmann University" },
  { name: "Dana Bar-Zvi", affiliation: "Weizmann Institute of Science" },
];

export const sponsors: Sponsor[] = [
  { name: "SalomonLab", logo: "/sponsors/salomonlab.jpeg" },
  { name: "Azrieli Foundation", logo: "/sponsors/azrieli-foundation.png" },
  { name: "MAPS Israel", logo: "/sponsors/maps-israel.png" },
  {
    name: "Azrieli Institute for Brain & Neural Sciences",
    logo: "/sponsors/azrieli-institute-brain-neural.png",
  },
  { name: "Center for Research on Positive Neuroscience" },
];
