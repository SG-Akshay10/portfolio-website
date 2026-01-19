export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  resume?: string;
}

export type HighlightItem = string | { text: string; subItems: string[] };

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: HighlightItem[];
}

export interface ProjectItem {
  name: string;
  tech: string;
  description: string[];
  link: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
}

export interface SkillsData {
  languages: string[];
  tools: string[];
  ai_ml: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  contact: ContactInfo;
  links: SocialLinks;
  skills: SkillsData;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
}