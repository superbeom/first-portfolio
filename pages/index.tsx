import React from "react";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Prisma } from "@prisma/client";
import moment from "moment";

import {
  User,
  Experience as ExperienceType,
  Project,
  Skill,
  Social,
  Seo,
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
  seo: Seo | null;
}

const Home: NextPage<Props> = ({
  user,
  experiences,
  projects,
  skills,
  socials,
  seo,
}) => {
  if (!user) {
    return <Invalid />;
  }

  return (
    <>
      <Head>
        <meta name="description" content="Awesome portfolio" />
        <meta name="subject" content={seo?.subject} />
        <meta name="author" content={seo?.author} />
        <meta name="publisher" content={seo?.author} />
        <meta name="keywords" content={seo?.keywords} />
        <meta name="robots" content="all" />

        <meta property="og:title" content={seo?.title} />
        <meta property="og:image" content={seo?.image} />
        <meta property="og:url" content={seo?.url} />
        <meta property="og:description" content={seo?.description} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seo?.title} />
        <meta name="twitter:image" content={seo?.image} />
        <meta name="twitter:description" content={seo?.description} />

        <link rel="canonical" href={seo?.url} />
      </Head>

      <div className="overflow-x-hidden">
        <Hero user={user} socials={socials} />

        <About user={user} />

        <Experience experiences={experiences} />

        <Skills skills={skills} />

        <Projects projects={projects} />

        <ContactMe user={user} />
      </div>
    </>
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
  const seo = await prismaClient.seo.findFirst();

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
      seo,
    },
  };
};
