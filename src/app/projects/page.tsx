import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Projects — RRPS",
};

export default function ProjectsPage() {
  return (
    <ComingSoon
      title="Projects"
      description="A showcase of collaborative research projects from the RRPS community is on its way."
    />
  );
}
