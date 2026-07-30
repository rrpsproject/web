export type ProgramItem = {
  time?: string;
  title: string;
};

export type Speaker = {
  id: string;
  name: string;
  institution: string;
  talkTitle: string;
};

export const conference = {
  title: "RRPS First Conference 2026",
  collaboration: "In collaboration with Weizmann Institute of Science",
  description:
    "A full-day academic conference bringing together students and researchers in psychedelic science from across Israel.",
  date: "December 2026",
  location: "Weizmann Institute of Science",
  registrationUrl: "https://forms.gle/placeholder-register",
};

export const programItems: ProgramItem[] = [
  { title: "Registration & Coffee" },
  { title: "Opening Lecture" },
  { title: "Research Presentations" },
  { title: "Panel Discussion" },
  { title: "Networking Session" },
];

// Placeholder — replace with confirmed speakers once available.
export const speakers: Speaker[] = [
  { id: "speaker-1", name: "Speaker to be announced", institution: "—", talkTitle: "—" },
  { id: "speaker-2", name: "Speaker to be announced", institution: "—", talkTitle: "—" },
  { id: "speaker-3", name: "Speaker to be announced", institution: "—", talkTitle: "—" },
];
