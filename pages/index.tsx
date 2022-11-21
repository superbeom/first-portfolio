import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

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
  getSocialsApi,
} from "@/lib/fetch";

import {
  Header,
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
    return (
      <>
        <Head>
          <title>My Portfolio</title>
        </Head>

        <Invalid />
      </>
    );
  }

  return (
    <div
      className="h-screen bg-background text-white custom-scrollbar
      overflow-y-scroll overflow-x-hidden snap-y snap-mandatory z-0"
    >
      <Head>
        <title>Portfolio | {user.name}</title>
      </Head>

      <header className="snap-start">
        <Header socials={socials} />
      </header>

      <section id="hero">
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

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex-center">
            <Image
              className="w-10 h-10 rounded-full filter grayscale hover:grayscale-0"
              src={user.image}
              alt=""
              width={40}
              height={40}
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const user = await getUserApi();
  const experiences = await getExperiencesApi();
  const skills = await getSkillsApi();
  const projects = await getProjectsApi();
  const socials = await getSocialsApi();

  return {
    props: {
      user,
      skills,
      experiences,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
