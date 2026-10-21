export interface ProfileConfig {
  name: string;
  role: string;
  status: string;
  education: {
    institution: string;
    year: string;
    degree: string;
  };
  focusAreas: string[];
  careerInterest: string;
  socials: {
    linkedin: string;
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
  systemMeta: {
    version: string;
    buildState: string;
    environment: string;
    stack: string[];
  };
}

export const PROFILE: ProfileConfig = {
  name: "Priyani Mohanta",
  role: "Backend & Systems Engineer",
  status: "Undergraduate • First-Year B.Tech",
  education: {
    institution: "Veer Surendra Sai University of Technology (VSSUT), Burla",
    year: "1st Year",
    degree: "Bachelor of Technology",
  },
  focusAreas: [
    "Java",
    "Spring Boot",
    "REST APIs",
    "Generative AI",
  ],
  careerInterest: "Forward Deployed Engineer (FDE)",
  socials: {
    linkedin: "https://www.linkedin.com/in/priyanimohanta/",
  },
  navigation: [
    { label: "Overview", href: "#overview" },
    { label: "Architecture", href: "#architecture" },
    { label: "Focus Stack", href: "#focus" },
    { label: "Connect", href: "#connect" },
  ],
  systemMeta: {
    version: "v1.0.0-foundation",
    buildState: "Active Foundation",
    environment: "Client / Workspace",
    stack: ["React", "TypeScript", "Vite", "Spring Boot (Target)"],
  },
};
