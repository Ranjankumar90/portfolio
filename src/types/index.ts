export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
  icon?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number | string;
  location: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}