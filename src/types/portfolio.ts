export interface ScreenshotItem {
  url: string;
  title: string;
  caption: string;
  tag?: string;
}

export interface ProjectArchitecture {
  problem: string;
  solution: string;
  keyComponents: string[];
  databaseModel: string[];
  securityPatterns: string[];
  dataFlowSummary: string;
}

export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  type: string;
  badge: string;
  badgeColor?: 'emerald' | 'amber' | 'cyan' | 'purple';
  summary: string;
  highlights: string[];
  techStack: string[];
  architecture: ProjectArchitecture;
  screenshots: ScreenshotItem[];
  liveDemoUrl?: string;
  githubUrl?: string;
  isProtected: boolean;
  stats: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  category: string;
  level: string; // e.g. "Advanced", "Production Proven"
  highlight: string;
  productionUsage: string;
}

export interface CompetencyDomain {
  id: string;
  title: string;
  iconName: string;
  badge: string;
  description: string;
  skills: SkillItem[];
}

export interface SystemStat {
  label: string;
  value: string;
  subtext: string;
  iconName: string;
}

export interface DeveloperProfile {
  name: string;
  title: string;
  experienceYears: string;
  tagline: string;
  email: string;
  phone: string;
  github: string;
  location: string;
  status: string;
  summary: string;
}
