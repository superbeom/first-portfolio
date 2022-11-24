import React from "react";
import { motion } from "framer-motion";

import { User } from "@/types";

import { MotionContainer } from "@/components";

interface Props {
  user: User;
}

const About = ({ user }: Props) => (
  <MotionContainer
    className="min-h-screen h-full motion-container lg:max-w-5xl xl:max-w-7xl text-center lg:text-left
    justify-start sm:justify-evenly"
  >
    <h2 className="title">About</h2>

    <motion.img
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ x: 0, opacity: 1 }}
      className="w-44 h-44 flex-shrink-0 mt-32 ball object-cover md:rounded-lg md:w-[300px] md:h-[400px] xl:w-[500px] xl:h-[600px]"
      src={user.image}
    />

    <div className="space-y-10 px-0 mt-8 sm:mt-0 sm:px-10">
      <div className="space-y-5">
        <h3 className="text-3xl sm:text-4xl font-semibold tracking-wider">
          Hey, I'm{" "}
          <span className="underline decoration-primary underline-offset-8">
            {user.name}
          </span>
        </h3>

        <h4 className="about-role">{user.role}</h4>
      </div>

      <p>{user.background}</p>
    </div>
  </MotionContainer>
);

export default About;
