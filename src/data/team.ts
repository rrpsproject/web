export type TeamMember = {
  id: string;
  name: string;
  bio: string;
  photo?: string;
};

// Placeholder roster — replace with the 7 real team members (name, one-line
// bio of 8–12 words, optional photo) before launch.
export const teamMembers: TeamMember[] = [
  { id: "member-1", name: "Team Member 1", bio: "Role & focus area — replace with real bio" },
  { id: "member-2", name: "Team Member 2", bio: "Role & focus area — replace with real bio" },
  { id: "member-3", name: "Team Member 3", bio: "Role & focus area — replace with real bio" },
  { id: "member-4", name: "Team Member 4", bio: "Role & focus area — replace with real bio" },
  { id: "member-5", name: "Team Member 5", bio: "Role & focus area — replace with real bio" },
  { id: "member-6", name: "Team Member 6", bio: "Role & focus area — replace with real bio" },
  { id: "member-7", name: "Team Member 7", bio: "Role & focus area — replace with real bio" },
];
