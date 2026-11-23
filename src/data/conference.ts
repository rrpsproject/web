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
  {
    name: "Haifa Brain and Behavior Hub (HBBH), University of Haifa",
    logo: "/sponsors/haifa-brain-behavior-hub.webp",
  },
  {
    name: "Irene and Jared M. Drescher Center for Research on Mental and Emotional Health",
  },
  {
    name: "Center for Research on the Development of Innovative Neurotechnologies",
  },
];


// ---------------------------------------------------------------------------
// Program
// ---------------------------------------------------------------------------

export type Talk = {
  time: string;
  title: string;
  speaker: string;
  affiliation: string;
};

export type ProgramItem =
  | { kind: "break"; time: string; label: string }
  | { kind: "session"; label: string; title: string; talks: Talk[] }
  | {
      kind: "panel";
      time: string;
      title: string;
      moderator: { name: string; affiliation: string };
      panelists: string;
    };

export const program: ProgramItem[] = [
  { kind: "break", time: "08:15", label: "Registration" },
  { kind: "break", time: "09:00", label: "Opening Words" },
  { kind: "break", time: "09:10", label: "Overview of the field" },
  {
    kind: "session",
    label: "Session 1",
    title:
      "From Acute Stress to Persistent State: Psychoactive Modulation of Stress Across Time and Biological Scales",
    talks: [
      {
        time: "09:20",
        title:
          "When Altered States Meet Acute Stress: Psychoactive Experiences and Post-Traumatic Recovery Among Nova Survivors",
        speaker: "Ophir Netzer",
        affiliation: "University of Haifa",
      },
      {
        time: "09:35",
        title:
          "A Single Dose of MDMA Reduces Fear-Memory Responses in Mice: A Reverse-Translational Study",
        speaker: "Hadas Hovav",
        affiliation: "The Hebrew University of Jerusalem",
      },
      {
        time: "09:50",
        title:
          "Psilocybin Suppresses a Habenula-Driven Persistent Stress Network in the Forebrain",
        speaker: "Jonathan Toledano",
        affiliation: "Weizmann Institute of Science",
      },
    ],
  },
  { kind: "break", time: "10:05", label: "Joint Discussion & Questions" },
  { kind: "break", time: "10:30", label: "Coffee Break" },
  {
    kind: "session",
    label: "Session 2",
    title:
      "Signatures of Healing: Physiological, Neural and Behavioral Markers in Psychedelic-Assisted Therapy",
    talks: [
      {
        time: "11:00",
        title:
          "Between the Sessions: Continuous Physiological Monitoring Across Psychedelic-Assisted Therapy",
        speaker: "Dr. Lisa Simon",
        affiliation: "University of Haifa",
      },
      {
        time: "11:15",
        title:
          "Psychophysiological Threat Responses as Markers of Outcome Following MDMA-Assisted Therapy",
        speaker: "Dr. Lior Kritzman",
        affiliation: "Reichman University",
      },
      {
        time: "11:30",
        title:
          "Exploring Compassion, Interoception, and Physical Touch in MDMA-Assisted Therapy and SEA-IT for Military Related PTSD",
        speaker: "Romi Gura",
        affiliation: "Ariel University",
      },
      {
        time: "11:45",
        title:
          "From Neural Flexibility to Trauma Recovery: A Trauma-Informed Model of Psilocybin-Assisted Psychotherapy for PTSD",
        speaker: "Dr. Itamar Cohen",
        affiliation: "Tel Aviv University",
      },
    ],
  },
  {
    kind: "panel",
    time: "12:00",
    title:
      "The People Behind the Data: What Researchers Can Learn from Study Participants",
    moderator: {
      name: "Dana Bar-Zvi",
      affiliation: "Weizmann Institute of Science",
    },
    panelists: "Study participants",
  },
  { kind: "break", time: "12:45", label: "Lunch" },
  {
    kind: "break",
    time: "13:25",
    label: "Posters & Interactive Presentations" },
  {
    kind: "session",
    label: "Session 3",
    title: "Emerging Directions in Psychedelic Science",
    talks: [
      {
        time: "14:10",
        title:
          "Investigating the Molecular Basis of Psychedelic Therapeutic Decoupling: PKC Modulation Following Psilocybin–D-Serine Findings",
        speaker: "Tom Ben Tal",
        affiliation: "The Hebrew University of Jerusalem",
      },
      {
        time: "14:25",
        title:
          "What Does the Therapeutic Relationship Add in Guided Psychedelic Experiences?",
        speaker: "Dr. Aaron Cherniak",
        affiliation: "The Hebrew University of Jerusalem",
      },
      {
        time: "14:40",
        title:
          "Together in the Rabbit Hole: Attachment Dynamics in Esketamine Assisted Psychotherapy for Treatment Resistant Depression",
        speaker: "Lee Pardo Aviv",
        affiliation: "Reichman University",
      },
      {
        time: "14:55",
        title:
          "The ConCrit Framework: Critical Brain Dynamics as a Unifying Mechanistic Account of Consciousness and Its Psychedelic Modulation",
        speaker: "Inbal Algom",
        affiliation: "Ben-Gurion University of the Negev",
      },
      {
        time: "15:10",
        title:
          "Not Burned Out, Not Yet Ready: Mental Health Practitioners' (MHP) Willingness to Deliver Psychedelic-Assisted Therapy Ahead of Regulatory Approval",
        speaker: "Dr. Avigail Zucker",
        affiliation: "Ariel University",
      },
      {
        time: "15:25",
        title:
          "Tracing Psychedelic Plasticity at the Level of Experience: A Longitudinal fMRI Study",
        speaker: "Amir Harari",
        affiliation: "Tel Aviv University",
      },
    ],
  },
  { kind: "break", time: "15:40", label: "Coffee Break" },
  {
    kind: "session",
    label: "Session 4",
    title: "A Journey with Ayahuasca: From Plant to Ritual Across Cultures",
    talks: [
      {
        time: "16:05",
        title: "Elucidation and Reconstruction of β-Carboline Biosynthesis",
        speaker: "Dr. Let Kho Hao",
        affiliation: "Weizmann Institute of Science",
      },
      {
        time: "16:20",
        title:
          "The Journey to Kosher Psychedelics: Ayahuasca Use in Ultra-Orthodox (Haredi) Communities in Israel and the United States",
        speaker: "Dr. Yonatan David",
        affiliation: "University of Haifa",
      },
      {
        time: "16:35",
        title:
          "New Age Ultra-Orthodoxy: The Subjective Turn in Spirituality Among Haredi Who Drink Ayahuasca",
        speaker: "Michael Fine",
        affiliation: "Tel Aviv University",
      },
      {
        time: "16:50",
        title:
          "Revolutionizing with Antiquity: Glocalized Ayahuasca Rituals in Japan and Israel",
        speaker: "Itamar Zadoff",
        affiliation: "University of Haifa",
      },
    ],
  },
  { kind: "break", time: "17:05", label: "Joint Discussion & Questions" },
  { kind: "break", time: "17:30", label: "Closing + Poster Award" },
];

export type Poster = {
  number: string;
  title: string;
  presenter: string;
  affiliation: string;
};

export const posterSession = {
  title: "Posters, Interactive Presentations & Stand",
  time: "13:25–14:10",
  groups: [
    {
      label: "Posters",
      items: [
        {
          number: "01",
          title:
            "From War Zones to Scalable Care: Implementing Ketamine-Assisted Psychotherapy in a Hospital-Based Resilience Center",
          presenter: "Pinchas Baumol",
          affiliation: "Shaare Zedek Medical Center",
        },
        {
          number: "02",
          title:
            "Affective Empathic Processing Before and After Psilocybin Administration: A Two-Participant fMRI Pilot Study",
          presenter: "Liron Azulay Yaari",
          affiliation: "Tel Aviv University",
        },
        {
          number: "03",
          title:
            "Assessing Trauma with AI: Estimating Psychiatric Severity and Event Intensity from Speech",
          presenter: "Dr. Daniel Sand",
          affiliation: "University of Haifa",
        },
        {
          number: "04",
          title:
            "Untangling the Temporal Relations between Hyper-Inflammation and Posttraumatic Stress Disorder (PTSD): A Longitudinal Study Among Survivors of the Nova Festival Mass Trauma Event",
          presenter: "Ron Menshes",
          affiliation: "Weizmann Institute of Science",
        },
        {
          number: "05",
          title:
            "TripWatch: A Multi-Site Observational Study of Continuous Physiological Monitoring During Psychedelic-Assisted Therapy",
          presenter: "Mary Grankin",
          affiliation: "University of Haifa",
        },
        {
          number: "06",
          title:
            "Temporal Dynamics of Therapeutic Alliance in MDMA-Assisted Therapy for PTSD",
          presenter: "Yahlly Jacoby",
          affiliation: "Reichman University",
        },
        {
          number: "07",
          title:
            "Changes in Cardiac Autonomic Reactivity Following MDMA-Assisted Therapy for PTSD: Heart Rate and Heart Rate Variability During Script-Driven Imagery",
          presenter: "Karin Novitsky",
          affiliation: "Baruch Ivcher School of Psychology, Reichman University",
        },
        {
          number: "08",
          title: "Cell-Type-Specific Activation Map of the Acute Psychedelic Effect",
          presenter: "Amit Shwartz",
          affiliation: "The Hebrew University of Jerusalem",
        },
        {
          number: "09",
          title:
            "Psychological Distress Dynamics as Predictors of PTSD Symptoms: An Ongoing Study Toward Predicting PTSD Trajectories in Nova Festival Survivors",
          presenter: "Omri Radai",
          affiliation: "University of Haifa",
        },
        {
          number: "10",
          title:
            "Taking Drugs During a Terror Attack: An LLM Analysis of Survivor Narratives",
          presenter: "Dr. Amir Harduf",
          affiliation: "University of Haifa",
        },
        {
          number: "11",
          title:
            "Dissecting Behavioral and Molecular Effects of Psilocybin and Bioactive Compounds from Psilocybin-Producing Fungi in C. elegans",
          presenter: "Noga Nitzan",
          affiliation: "Technion – Israel Institute of Technology",
        },
        {
          number: "12",
          title:
            "How Trauma Reshapes the Mind-Body Connection: Evidence from October 7th",
          presenter: "Avraham Shmueli",
          affiliation: "University of Haifa",
        },
        {
          number: "13",
          title:
            "I Abstract, Therefore I Am?: Constructing and Reifying the Self and the Possibility of De-Reification During Psychedelic Ego Dissolution",
          presenter: "Dotan Shani",
          affiliation: "Tel Aviv University",
        },
        {
          number: "14",
          title:
            "Holding the Insight Lightly: Dialectical Behaviour Therapy as the Missing Epistemic Technology for Psychedelic-Assisted Therapy",
          presenter: "Ortal Shinikamin",
          affiliation: "Tel Aviv University",
        },
        {
          number: "15",
          title:
            "Resting-State Functional Connectivity Following Ketamine-Augmented Prolonged Exposure for PTSD: Preliminary Findings from an fMRI Study",
          presenter: "Zoie Milstein",
          affiliation: "Tel Aviv University",
        },
        {
          number: "16",
          title:
            "The Shaare Nefesh Model: Development and Implementation of a Ketamine-Assisted Psychotherapy (KAP) Protocol for PTSD During Wartime",
          presenter: "Asaf Firer",
          affiliation: "The Hebrew University of Jerusalem",
        },
      ],
    },
    {
      label: "Interactive Presentations",
      items: [
        {
          number: "17",
          title:
            "Surprising Variability in Tryptamine Profiles of Psilocybe cubensis Fruiting Bodies: Inter- and Intra-Strain Differences Across 14 Strains Cultivated Under Controlled Conditions",
          presenter: "Amiel Sharchaton",
          affiliation: "Tel-Hai University of Kiryat Shmona in the Galilee",
        },
        {
          number: "18",
          title:
            "Ayahuasca Without the Ayahuasca: A Live Ceremony Simulation and Study Design Discussion on Attachment Repair After Combat Trauma",
          presenter: "Edo Maimon",
          affiliation: "University of Haifa",
        },
        {
          number: "19",
          title:
            "When Minds Meet in Shared Space: EEG Hyperscanning During a Shared Psychedelic-Like VR Experience",
          presenter: "Tom Eshdat",
          affiliation: "Ben-Gurion University of the Negev",
        },
      ],
    },
    {
      label: "Stand",
      items: [
        {
          number: "20",
          title:
            "Hybrid Drug-Digital Therapies: Opportunities, Challenges, and Future Directions for Scalable Neurological and Neuropsychiatric Healthcare",
          presenter: "Prof. Amir Amedi",
          affiliation: "Reichman University",
        },
      ],
    },
  ] satisfies { label: string; items: Poster[] }[],
};
