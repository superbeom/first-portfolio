import React from "react";
import { GetStaticProps, NextPage } from "next";

import {
  User,
  Experience as ExperienceType,
  Project,
  Skill,
  Social,
} from "@/types";

import {
  getUserApi,
  getExperiencesApi,
  getProjectsApi,
  getSkillsApi,
} from "@/lib/fetch";

import {
  Hero,
  About,
  Experience,
  Skills,
  Projects,
  ContactMe,
  Invalid,
} from "@/components";

interface Props {
  user: User;
  experiences: ExperienceType[];
  projects: Project[];
  skills: Skill[];
  socials: Social[];
}

const Home: NextPage<Props> = ({
  user,
  experiences,
  projects,
  skills,
  socials,
}) => {
  if (!user) {
    return <Invalid />;
  }

  return (
    <div className="overflow-x-hidden">
      <section id="hero" className="active">
        <Hero user={user} socials={socials} />
      </section>

      <section id="about">
        <About user={user} />
      </section>

      <section id="experience">
        <Experience experiences={experiences} />
      </section>

      <section id="skills">
        <Skills skills={skills} />
      </section>

      <section id="projects">
        <Projects projects={projects} />
      </section>

      <section id="contact">
        <ContactMe user={user} />
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const user = await getUserApi();
  const experiences = await getExperiencesApi();
  const projects = await getProjectsApi();
  const skills = await getSkillsApi();

  return {
    props: {
      user,
      experiences,
      projects,
      skills,
    },
  };
};
