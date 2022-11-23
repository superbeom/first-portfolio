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
  getSkillsApi,
  getProjectsApi,
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
  skills: Skill[];
  experiences: ExperienceType[];
  projects: Project[];
  socials: Social[];
}

const Home: NextPage<Props> = ({
  user,
  skills,
  experiences,
  projects,
  socials,
}) => {
  if (!user) {
    return <Invalid />;
  }

  return (
    <div className="overflow-x-hidden">
      <section id="hero" className="snap-start active">
        <Hero user={user} socials={socials} />
      </section>

      <section id="about" className="snap-center">
        <About user={user} />
      </section>

      <section id="experience" className="snap-center">
        <Experience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const user = await getUserApi();
  const experiences = await getExperiencesApi();
  const skills = await getSkillsApi();
  const projects = await getProjectsApi();

  return {
    props: {
      user,
      skills,
      experiences,
      projects,
    },
  };
};
