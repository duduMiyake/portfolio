"use client";

import { useState } from "react";

const Experience = () => {
  const [title, setTitle] = useState("Software Developer Intern");
  const [date, setDate] = useState("May (2024) - PRESENT");
  const [description, setDescription] = useState("Developed, tested, and corrected front-end functionalities, with a focus on React.js and Next.js. Also utilized and learned to work with technologies such as Git, Jenkins, Keycloak, and Redmine.");
  const [visible, setVisible] = useState("opacity-100");
  const [active, setActive] = useState({ index: 0, class: "bg-stone-800 -translate-y-1 scale-110" });

  const experiences = [
    {
      from: "TJCE",
      from_details: " (Court of Justice of Ceará)",
      title: "Software Developer Intern",
      date: "May (2024) - NOW • 7 mos",
      description:
        "Worked on developing and testing projects that were migrating from an old pattern of the company to a new one. \n Working with Ruby, Ruby on Rails, Rspec (for unit testing) and Git with Gitlab for versioning in a SCRUM enviroment.",
    },
    {
      from: "UNIFOR",
      from_details: "",
      title: "Undergraduate Teaching Assistant - Data Structure and Algorithm",
      date: "Feb (2023) - Dec (2023) • 11 mos",
      description:
        "Assisted the professor in preparing and conducting lectures and laboratory sessions for the Data Structures course. I provided support to students with questions and difficulties related to the course content, including fundamental algorithms such as lists, queues, stacks, and trees. I also helped proctor exams in the classroom. This role helped me develop communication, organization, and leadership skills, and it deepened my knowledge of Data Structures.",
    },
  ];

  const handleDescription = (index) => {
    if (index == active.index) {
      setVisible("opacity-0");
      setActive((prevState) => ({
        index: "nothing",
        class: "",
      }));
    } else {
      console.log(index)
      setActive((prevState) => ({
        index: index,
        class: "bg-stone-800 -translate-y-1 scale-110",
      }));
      setVisible("opacity-100");
      setTitle(experiences[index].title);
      setDate(experiences[index].date);
      setDescription(experiences[index].description);
    }
  };

  return (
    <div className="flex h-fit md:w-full md:px-16 text-5xl" id="Experience">
      <div className="flex flex-col md:basis-2/4 md:bg-stone-950 w-full md:pb-20">
        <h1
          className={`md:text-lime-100 leading-snug px-7 md:px-12 pb-4 mt-10`}
        >
          Experiences
        </h1>
        {/* lista no port view "md" */}
        <ul className="place-self-center hidden md:flex md:flex-col list-none list-inside md:text-lime-100 px-12 pt-3 text-lg cursor-pointer">
          {experiences.map((experience, index) => {
            if (active.index == index) {
              var itemClass = active.class;
            }
            return (
              <li
                key={index}
                onClick={() => handleDescription(index)}
                className={`${itemClass} py-3 px-4 my-2 ease-in-out rounded-md hover:bg-stone-800 hover:-translate-y-1 hover:scale-110 duration-300`}
              >
                <h1 className="text-2xl">{experience.from}<span className="">{experience.from_details}</span></h1>
                <h1 className="opacity-75 underline-offset-4 underline">{experience.title}</h1>
                <span className="text-sm opacity-75">{experience.date}</span>
              </li>
            );
          })}
        </ul>
        {/* lista no port view "sm" */}
        <ul className="md:hidden p-4 font-bold">
          {experiences.map((experience, index) => {
            return (
              <li key={index} className={`py-3 px-4 mb-12 ease-in-out rounded-md`}>
                <p className="text-2xl underline underline-offset-2">{experience.title}</p>
                <p className="text-base opacity-75">{experience.date}</p>
                <p className="text-lg leading-relaxed mt-4 font-medium">{experience.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="hidden md:flex md:basis-2/4 justify-center">
        <div className="w-10/12 h-fit">
          <div className={`ease-linear duration-300 ${visible}`}>
            <h1 className="text-xl font-bold">{title}</h1>
            <h2 className="text-sm font-bold opacity-75">{date}</h2>
            <p className="text-sm font-bold leading-normal mt-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
