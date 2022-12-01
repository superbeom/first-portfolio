import React from "react";
import { GetStaticProps, NextPage } from "next";
import { Prisma } from "@prisma/client";
import moment from "moment";

import {
  User,
  Experience as ExperienceType,
  Project,
  Skill,
  Social,
} from "@/types";

import prismaClient from "@/lib/prisma";

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
  user: User | null;
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
      <Hero user={user} socials={socials} />

      <About user={user} />

      <Experience experiences={experiences} />

      <Skills skills={skills} />

      <Projects projects={projects} />

      <ContactMe user={user} />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const user = await prismaClient.user.findFirst();
  const experiences = await prismaClient.experience.findMany({
    orderBy: {
      endedDate: Prisma.SortOrder.desc,
    },
  });
  const projects = await prismaClient.project.findMany();
  const skills = await prismaClient.skill.findMany();

  const formattedExperiences = experiences.map((experience) => ({
    ...experience,
    startedDate: moment(experience.startedDate).format("MMM YYYY"),
    endedDate: experience.stillWorkingHere
      ? "Present"
      : moment(experience.endedDate).format("MMM YYYY"),
  }));

  return {
    props: {
      user,
      experiences: formattedExperiences,
      projects,
      skills,
    },
  };
};
