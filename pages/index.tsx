import React from "react";
import { GetStaticProps, NextPage } from "next";

import { User, Experience as ExperienceType, Project, Social } from "@/types";

import { getUserApi, getExperiencesApi, getProjectsApi } from "@/lib/fetch";

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
  socials: Social[];
}

const Home: NextPage<Props> = ({ user, experiences, projects, socials }) => {
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
        <Skills />
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

  return {
    props: {
      user,
      experiences,
      projects,
    },
  };
};
