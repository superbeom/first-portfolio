import React from "react";
import { motion } from "framer-motion";

import { Project } from "@/types";
import { MotionContainer } from "@/components";

interface Props {
  projects: Project[];
}

const Projects = ({ projects }: Props) => {
  return (
    <MotionContainer
      className="relative h-screen flex flex-col overflow-hidden
    text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="title">Projects</h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
        custom-scrollbar"
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="w-screen flex-shrink-0 snap-center flex-center flex-col space-y-5 p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src="https://res.cloudinary.com/ds8wavxll/image/upload/v1668665907/cat2_nmkrwg.jpg"
              alt=""
              width={200}
              height={200}
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl flex flex-col items-center">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-primary/50">
                  Case Study {index + 1} of {projects.length}
                </span>
                : UPS Clone
              </h4>

              <p className="sm:w-[80%] md:w-[70%] lg:w-[50%] text-lg text-center md:text-left">
                Netflix 2.0 app that has a Log In and Log Out Authentication
                with Google. It has a beautiful Home Screen with all the movies
                looking just like Netflix. There is also a subscription page
                where you can see your active monthly subscription. We also use
                Stripe Payments for the monthly Netflix Subscription!
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-[30%] left-0 w-full h-[500px] -skew-y-12 bg-primary/10" />
    </MotionContainer>
  );
};

export default Projects;
