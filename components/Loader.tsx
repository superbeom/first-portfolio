import React from "react";
import { Circles } from "@/components";

const Loader = () => {
  return (
    <div className="dark h-screen bg-background">
      <div className="absolute top-[35%] right-[50%]">
        <Circles />
      </div>
    </div>
  );
};

export default Loader;
