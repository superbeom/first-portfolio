export interface User {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string[];
  background: string;
  phone: string;
  email: string;
  address: string;
  socials: Social[];
}

export interface Experience {
  id: string;
  jobTitle: string;
  company: string;
  companyImage: string;
  stillWorkingHere: boolean;
  technologies: Skill[];
  points: string[];
  startedDate: string;
  endedDate: string;
}

export interface Skill {
  id: string;
  name: string;
  image: string;
  progress: number;
  experienceId: string;
  projectId: string;
}

export interface Project {
  id: string;
  name: string;
  image: string;
  summary: string;
  technologies: Skills[];
  url: string;
}

export interface Social {
  id: string;
  name: string;
  url: string;
  userId: string;
}
