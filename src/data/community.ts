export type CommunityMember = {
  id: string;
  name: string;
  institution: string;
  academicLevel: string;
  researchAreas: string[];
  methods: string[];
  field: string;
  researchInterests: string;
  currentProjects: string;
  openToCollaboration: boolean;
  contactEmail?: string;
};

// Sample directory entries so the search/filter UI is demonstrable.
// Replace with the real member roster before launch.
export const communityMembers: CommunityMember[] = [
  {
    id: "amit-cohen",
    name: "Amit Cohen",
    institution: "Weizmann Institute of Science",
    academicLevel: "PhD Candidate",
    researchAreas: ["Neuroscience", "fMRI"],
    methods: ["fMRI"],
    field: "Neuroscience",
    researchInterests: "Neural correlates of altered states of consciousness.",
    currentProjects: "Mapping default mode network connectivity under psilocybin.",
    openToCollaboration: true,
    contactEmail: "",
  },
  {
    id: "noa-levi",
    name: "Noa Levi",
    institution: "Hebrew University of Jerusalem",
    academicLevel: "PhD Candidate",
    researchAreas: ["Psychiatry", "Clinical Trials"],
    methods: ["Psychopharmacology"],
    field: "Psychiatry",
    researchInterests: "MDMA-assisted therapy for treatment-resistant PTSD.",
    currentProjects: "Phase II trial design for combat-related PTSD.",
    openToCollaboration: true,
    contactEmail: "",
  },
  {
    id: "yonatan-mizrahi",
    name: "Yonatan Mizrahi",
    institution: "Tel Aviv University",
    academicLevel: "MSc Student",
    researchAreas: ["Pharmacology"],
    methods: ["Psychopharmacology"],
    field: "Pharmacology",
    researchInterests: "Receptor pharmacology of classic psychedelics.",
    currentProjects: "5-HT2A receptor binding assays in preclinical models.",
    openToCollaboration: false,
    contactEmail: "",
  },
  {
    id: "shira-katz",
    name: "Shira Katz",
    institution: "Ben-Gurion University of the Negev",
    academicLevel: "Postdoctoral Researcher",
    researchAreas: ["Psychology", "Clinical Trials"],
    methods: ["fMRI", "Psychopharmacology"],
    field: "Clinical Psychology",
    researchInterests: "Therapeutic mechanisms of psychedelic-assisted therapy.",
    currentProjects: "Integration protocols following psilocybin sessions.",
    openToCollaboration: true,
    contactEmail: "",
  },
  {
    id: "daniel-avraham",
    name: "Daniel Avraham",
    institution: "Weizmann Institute of Science",
    academicLevel: "PhD Candidate",
    researchAreas: ["Neuroscience"],
    methods: ["fMRI"],
    field: "Neuroscience",
    researchInterests: "Computational models of perception under psychedelics.",
    currentProjects: "EEG signal analysis during guided psilocybin sessions.",
    openToCollaboration: true,
    contactEmail: "",
  },
  {
    id: "maya-goldberg",
    name: "Maya Goldberg",
    institution: "Tel Aviv University",
    academicLevel: "PhD Candidate",
    researchAreas: ["Psychiatry"],
    methods: ["Clinical Trials"],
    field: "Psychiatry",
    researchInterests: "Regulatory pathways for psychedelic-assisted treatments in Israel.",
    currentProjects: "Policy analysis of compassionate-use frameworks.",
    openToCollaboration: true,
    contactEmail: "",
  },
];

export const researchAreaOptions = Array.from(
  new Set(communityMembers.flatMap((m) => m.researchAreas))
).sort();

export const methodOptions = Array.from(
  new Set(communityMembers.flatMap((m) => m.methods))
).sort();

export const institutionOptions = Array.from(
  new Set(communityMembers.map((m) => m.institution))
).sort();
