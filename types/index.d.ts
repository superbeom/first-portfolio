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
  startedDate: string;
  endedDate: string;
}

export interface Skill {
  id: string;
  name: string;
  url: string;
}

export interface Project {
  id: string;
  name: string;
  image: string;
  summary: string;
  url: string;
}

export interface Social {
  id: string;
  name: string;
  url: string;
  userId: string;
}

export interface Seo {
  id: string;
  author: string;
  title: string;
  description: string;
  image: string;
  subject: string;
  keywords: string;
  url: string;
}
