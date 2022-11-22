import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  position: number;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

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

const MotionNav = ({ position, className, onClick, children }: Props) => {
  return (
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
};

export default MotionNav;
