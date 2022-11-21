import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import { User } from "@/types";

import { BackgroundCircles } from "@/components";

interface Props {
  user: User;
}

const Hero = ({ user }: Props) => {
  const [text, _] = useTypewriter({
    words: user.description,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex-center flex-col space-y-8 text-center overflow-hidden">
      <BackgroundCircles />

      <Image
        className="w-32 h-32 mx-auto rounded-full object-cover"
        src={user.image}
        alt="profile"
        width={128}
        height={128}
      />

      <div className="z-20">
        <h2 className="text-sm text-gray-500 uppercase pb-2 tracking-[15px]">
          {user.role}
        </h2>

        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="var(--primary)" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="hero-button">About</button>
          </Link>

          <Link href="#experience">
            <button className="hero-button">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="hero-button">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="hero-button">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
