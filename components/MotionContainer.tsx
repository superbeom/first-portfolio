import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  id: string;
  className: string;
  children: ReactNode;
}

const MotionContainer = ({ id, className, children }: Props) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default MotionContainer;
