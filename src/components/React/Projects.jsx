import React from "react";
import Technologies from "./Technologies";

export const Projects = ({ project }) => {
  return (
    <article className="flex flex-col w-[280px] h-[479px] bg-marc shadow-xl z-10  ">
      <div className="relative">
        <img className="w-full h-auto relative z-[-1]" src={project.img} />
        <p className="flex py-6 px-3 text-[#fec070] text-center opacity-0 justify-center absolute transition ease-in-out duration-700 hover:opacity-100 inset-0 backdrop-blur-sm bg-initial cursor-default text-xs">
          {project.description}
        </p>
      </div>
      <section className="relative">
        <div className="bg-fond-port w-[280px] h-[479px]  absolute z-[-1] "></div>
        <div className="flex justify-center">
          <ul className="flex justify-center ali cursor-pointer mt-1 mb-3">
            <li>
              <a href={project.links[0].github.url}>
                <img
                  src={project.links[0].github.icon}
                  className="w-8 h-auto m-1 hover:animate-bounce"
                  alt="git-hub"
                />
              </a>
            </li>
            <li>
              <a href={project.links[1].demo.url}>
                <img
                  src={project.links[1].demo.icon}
                  className="w-8 h-auto m-1 hover:animate-bounce"
                  alt="netlify"
                />
              </a>
            </li>
          </ul>
        </div>
        <footer>
          <ul className="flex flex-wrap gap-2  cursor-default text-white font-bold px-3.5">
            {project.tecnologies.map((tec) => (
              <Technologies tec={tec} />
            ))}
          </ul>
        </footer>
      </section>
    </article>
  );
};
