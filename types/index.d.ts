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
  points: string[];
  startedDate: string;
  endedDate: string;
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
