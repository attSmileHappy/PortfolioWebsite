export type ProjectCategory = 'all' | 'work' | 'team' | 'personal';

export interface ProjectDetail {
  id: string;
  category: 'work' | 'team' | 'personal';
  title: string;
  subTitle?: string;
  clientOrOrg?: string;
  period: string;
  teamSize?: string;
  roles: string[];
  summary: string;
  keyContributions: string[];
  techStack: string[];
  award?: string;
  githubUrl?: string;
  featured?: boolean;
  image?: string;
  metrics?: string;
  architectureDetails?: string[];
}

export interface CareerItem {
  period: string;
  company: string;
  department: string;
  role: string;
  description: string;
  highlights: string[];
}

export interface EducationItem {
  period: string;
  institution: string;
  major: string;
  details: string;
  gpa?: string;
}

export interface SkillCategory {
  title: string;
  enTitle: string;
  skills: {
    name: string;
    level?: string;
    context?: string;
  }[];
}
