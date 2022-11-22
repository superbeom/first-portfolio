import React, { useState } from "react";
import { isMobileOnly } from "react-device-detect";
import { SocialIcon } from "react-social-icons";

import { Social } from "@/types";

import socialColors from "@/constants/socialColors";
import { position } from "@/constants/styles";

import { MotionNav } from "@/components";

interface Props {
  socials: Social[];
}

const LeftNav = ({ socials }: Props) => {
  const [target, setTarget] = useState<string>("");

  const handleMouseEnter = (target: string) => {
    setTarget(target);
  };

  const handleMouseLeave = () => {
    setTarget("");
  };

  return (
    <MotionNav
      position={-position}
      className="fixed left-0 flex flex-col items-center py-2 z-10
      mx-2 my-3"
    >
      {!isMobileOnly && (
        <>
          {socials.map((social) => {
            return (
              <SocialIcon
                key={social.id}
                network={social.name}
                url={social.url}
                className="pointer"
                style={{
                  color:
                    target === social.name
                      ? socialColors[`${social.name}`]
                      : "gray",
                }}
                fgColor="currentColor"
                bgColor="transparent"
                onMouseEnter={() => handleMouseEnter(social.name)}
                onMouseLeave={handleMouseLeave}
              />
            );
          })}
        </>
      )}
    </MotionNav>
  );
};

export default LeftNav;
