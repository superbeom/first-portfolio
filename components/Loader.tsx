import React from "react";
import { BackgroundCircles } from "@/components";

const Loader = () => {
  return (
    <div className="dark h-screen bg-background">
      <div className="absolute top-[35%] right-[50%]">
        <BackgroundCircles />
      </div>
    </div>
  );
};

export default Loader;
