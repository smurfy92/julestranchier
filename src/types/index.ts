export interface NavItem {
  label: string;
  href: string;
}

export interface HeroData {
  name: string;
  title: string;
  tagline: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export interface Stat {
  value: string;
  label: string;
}

export interface AboutData {
  bio: string[];
  stats: Stat[];
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
  current?: boolean;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ContactLink {
  label: string;
  url: string;
  icon: string;
}
