import React from "react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";

import { User, Social } from "@/types";
import useStore from "@/store";

import socialColors from "@/constants/socialColors";

import { Circles } from "@/components";

interface Props {
  user: User;
  socials: Social[];
}

const Hero = ({ user, socials }: Props) => {
  const { isMobile } = useStore();

  const [text, _] = useTypewriter({
    words: user.description,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="layout flex-center flex-col text-center overflow-hidden">
      <Circles />

      <Image
        className="w-32 h-32 mx-auto ball object-cover my-8"
        src={user.image}
        alt="profile"
        width={128}
        height={128}
        priority
      />

      <div className="z-20">
        <h4 className="text-sm text-gray-500 uppercase pb-2 tracking-[5px] sm:tracking-[15px]">
          {user.role}
        </h4>

        <h3 className="text-4xl lg:text-6xl font-semibold">
          <span>{text}</span>
          <Cursor cursorColor="var(--primary)" />
        </h3>
      </div>

      {isMobile && (
        <div className="w-[90vw] flex-center pt-5">
          <div className="w-[90%]">
            {socials.map((social) => {
              return (
                <SocialIcon
                  key={social.id}
                  network={social.name}
                  url={social.url}
                  className="opacity-80"
                  style={{
                    color: socialColors[`${social.name}`],
                  }}
                  fgColor="currentColor"
                  bgColor="transparent"
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
