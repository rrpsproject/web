export type TeamMember = {
  id: string;
  name: string;
  affiliation: string;
  photo?: string;
};

export const teamMembers: TeamMember[] = [
  { id: "ophir-netzer", name: "Ophir Netzer", affiliation: "University of Haifa", photo: "/images/team/ophir.jpg" },
  { id: "lisa-simon", name: "Lisa Simon", affiliation: "University of Haifa", photo: "/images/team/lisa.jpg" },
  { id: "jonathan-toledano", name: "Jonathan Toledano", affiliation: "Weizmann Institute of Science", photo: "/images/team/jonathan.jpg" },
  { id: "uri-monsonego", name: "Uri Monsonego", affiliation: "Weizmann Institute of Science", photo: "/images/team/uri.jpg" },
  { id: "chloe-shevakh", name: "Chloe Shevakh", affiliation: "The Hebrew University of Jerusalem", photo: "/images/team/chloe.jpg" },
  { id: "tom-ben-tal", name: "Tom Ben Tal", affiliation: "The Hebrew University of Jerusalem", photo: "/images/team/tom.jpg" },
  { id: "lior-kritzman", name: "Lior Kritzman", affiliation: "Reichmann University", photo: "/images/team/lior.jpg" },
];
