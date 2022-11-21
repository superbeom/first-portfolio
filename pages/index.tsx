import React from "react";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { User, Experience as ExperienceType, Project, Skill } from "@/types";

import {
  getUserApi,
  getExperiencesApi,
  getSkillsApi,
  getProjectsApi,
} from "@/lib/fetch";
import { smoothScroll } from "@/utils";

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
}

const Home: NextPage<Props> = ({ user, skills, experiences, projects }) => {
  if (!user) {
    return <Invalid />;
  }

  return (
    <div className="scroll-layout">
      <section id="hero" className="snap-start">
        <Hero user={user} />
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

      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex-center">
          <Image
            className="w-10 h-10 rounded-full filter grayscale hover:grayscale-0"
            src={user.image}
            alt=""
            width={40}
            height={40}
            onClick={() => smoothScroll("hero")}
          />
        </div>
      </footer>
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
    revalidate: 10,
  };
};
