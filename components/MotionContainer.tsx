import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  className: string;
  children: ReactNode;
}

const MotionContainer = ({ className, children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionContainer;
