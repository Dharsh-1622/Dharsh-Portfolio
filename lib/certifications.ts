export type Certification = {
  title: string;
  source: string;
  description: string;
  file: string;
  lifetimeValid: boolean;
  highlight?: boolean;
};

export const certifications: Certification[] = [
  {
    title: "Advanced C Programming",
    source: "College Course",
    description: "Advanced C concepts including pointers and file handling.",
    file: "advanced-c-programming.pdf",
    lifetimeValid: true,
  },
  {
    title: "Mobile App Development",
    source: "College Course",
    description: "Basics of building mobile applications with hands-on practice.",
    file: "mobile-app-development.pdf",
    lifetimeValid: true,
  },
  {
    title: "Social Network Analysis",
    source: "NPTEL",
    description: "Network structures, graph theory, and analysis concepts.",
    file: "social-network-analysis.pdf",
    lifetimeValid: false,
  },
  {
    title: "Flutter Development",
    source: "NASSCOM",
    description: "Cross-platform mobile app development using Flutter.",
    file: "flutter-development.pdf",
    lifetimeValid: true,
  },
  {
    title: "DSA in Python",
    source: "Infosys",
    description: "Data structures and algorithm problem-solving techniques.",
    file: "dsa-in-python.pdf",
    lifetimeValid: true,
  },
  {
    title: "Oracle Global Certification",
    source: "Oracle",
    description: "Global Oracle certification in AI and cloud platform technologies.",
    file: "oracle-global-certification.pdf",
    lifetimeValid: true,
    highlight: true,
  },
  {
    title: "Industry 4.0 & IIoT",
    source: "NPTEL",
    description: "Introduction to Industry 4.0 and Industrial Internet of Things.",
    file: "industry-4-0-iot.pdf",
    lifetimeValid: false,
  },
];
