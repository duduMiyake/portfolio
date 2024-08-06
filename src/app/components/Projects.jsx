"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const res = await fetch('/data/data.json')
      const data = await res.json();
      setProjects(data.projects_main_page);
    };
    fetchData();
  })

  return (
    <div
      className="relative flex h-screen w-full md:px-16 text-5xl"
      id="Projects"
    >
      <div className="flex flex-col w-full pb-20">
        <h1 className={`leading-snug px-12 pb-4 mt-10`}>Projects</h1>
        <div className="flex justify-between py-8">
          {projects.map((project, index) => {
            return (
              <button
                key={index}
                className={`hover:scale-125 hover:-translate-y-10 duration-300 ease-in-out transform-gpu shadow-lg rounded-lg w-full flex flex-col items-center mx-5 z-0 hover:z-10 overflow-hidden`}
              >
                  <Image
                    src={project.src}
                    alt="a"
                    width={600}
                    height={600}
                    className={`object-cover w-full z-20`}
                  />
                  <div className="bg-black text-wrap text-lg text-lime-100 h-full w-full z-30 p-4">
                    <h1>{project.alt}</h1>
                    <p className="text-sm	">
                      {project.description}
                    </p>
                  </div>
                
              </button>
            );
          })}
        </div>
        <span className="text-lg place-self-center underline hover:decoration-purple-400 hover:text-purple-400"><Link href={"/ProjectsPage"}>See all projects</Link></span>
      </div>
    </div>
  );
};

export default Projects;
