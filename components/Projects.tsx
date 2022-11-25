import React from "react";
import Slider from "react-slick";

import { Project as ProjectType } from "@/types";
import { Project } from "@/components";

interface Props {
  projects: ProjectType[];
}

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
};

const Projects = ({ projects }: Props) => {
  return (
    <div className="relative flex-center min-h-screen h-full">
      <h2 className="title">Projects</h2>

      <Slider {...settings} className="w-[90vw] md:w-[60vw] h-full">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
