"use client"

import Section from "@/app/ProjectsPage/structure/Section";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomeProjects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const res = await fetch('/data/data.json')
      const data = await res.json();
      setProjects(data.projects_secondary_page);
    };
    fetchData();
  })

  return (
    <div className="flex flex-col pb-10">
      <div className="flex flex-col place-content-center mx-4 mt-4 p-4 h-full">
        <div>
          <h1 className="text-6xl mb-4">Projects</h1>
          <p className="">
            Check out some of my projects below. For more, visit my{" "}
            <Link
              href={"https://github.com/duduMiyake"}
              className="underline underline-offset-4 font-semibold hover:decoration-purple-400 hover:text-purple-400"
            >
              Github
            </Link>
          </p>
        </div>
        {projects.map((project, index) => {
          return (
            <Section
              key={index}
              image={project.src}
              link={project.link}
              title={project.title}
              description={project.description}
              tech={project.tech}
              alt={project.alt}
              {...(project.info && { info: project.info })}
              hasPage={project.hasPage}
            />
          );
        })}
      </div>
      <span className="place-self-center text-lg underline underline-offset-4 font-semibold hover:decoration-purple-400 hover:text-purple-400"><Link href={"#Top"}>Go back to top</Link></span>
    </div>
  );
}
