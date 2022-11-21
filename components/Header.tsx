import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

import { Social } from "@/types";

interface Motion {
  position: number;
  className: string;
  onClick?: () => void;
  children: ReactNode;
}

interface Props {
  socials: Social[];
}

const posistion = 500;
const initial = {
  opacity: 0,
  scale: 0.5,
};
const animate = {
  x: 0,
  opacity: 1,
  scale: 1,
};
const transition = { duration: 1.5 };

const socialIconStyle = {
  className: "cursor-pointer",
  fgColor: "gray",
  bgColor: "transparent",
};

const MotionDiv = ({ position, className, onClick, children }: Motion) => (
  <motion.div
    initial={{
      ...initial,
      x: position,
    }}
    animate={animate}
    transition={transition}
    className={className}
    onClick={onClick}
  >
    {children}
  </motion.div>
);

const Header = ({ socials }: Props) => {
  const router = useRouter();

  return (
    <header className="sticky top-0 flex justify-between items-start xl:items-center max-w-7xl p-5 md:mx-auto z-10">
      <MotionDiv position={-posistion} className="flex items-center">
        {socials.map((social) => (
          <SocialIcon
            key={social.id}
            network={social.name}
            url={social.url}
            {...socialIconStyle}
          />
        ))}
      </MotionDiv>

      <MotionDiv
        position={posistion}
        className="flex items-center text-gray-300 cursor-pointer"
        onClick={() => router.push("#contact")}
      >
        <SocialIcon network="email" {...socialIconStyle} />
        <p className="uppercase hidden md:inline-flex text-sm font-semibold text-gray-400">
          Get In Touch
        </p>
      </MotionDiv>
    </header>
  );
};

export default Header;
