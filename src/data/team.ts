export type TeamMember = {
  id: string;
  name: string;
  affiliation: string;
  photo?: string;
};

// Organizing committee — see public/images/committee.jpeg.
export const teamMembers: TeamMember[] = [
  { id: "ophir-netzer", name: "Ophir Netzer", affiliation: "University of Haifa" },
  { id: "lisa-simon", name: "Lisa Simon", affiliation: "University of Haifa" },
  { id: "jonathan-toledano", name: "Jonathan Toledano", affiliation: "Weizmann Institute of Science" },
  { id: "uri-monsonego", name: "Uri Monsonego", affiliation: "Weizmann Institute of Science" },
  { id: "chloe-shevakh", name: "Chloe Shevakh", affiliation: "The Hebrew University of Jerusalem" },
  { id: "tom-ben-tal", name: "Tom Ben Tal", affiliation: "The Hebrew University of Jerusalem" },
  { id: "lior-kritzman", name: "Lior Kritzman", affiliation: "Reichmann University" },
];
