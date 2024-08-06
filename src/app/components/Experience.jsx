'use client'

import { useState } from "react";

const Experience = () => {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("");
    const [visible, setVisible] = useState("opacity-0");
    const [active, setActive] = useState({index: "nothing", class: ""});

    const experiences = [
        {
            "title": "Software Developer Intern",
            "date" : "May (2024) - PRESENT",
            "description": "Developed, tested, and corrected front-end functionalities, with a focus on React.js and Next.js. Also utilized and learned to work with technologies such as Git, Jenkins, Keycloak, and Redmine."
        },
        {
            "title": "Undergraduate Teaching Assistant - Data Structure and Algorithm",
            "date" : "Feb (2023) - Dec (2023)",
            "description": "Assisted the professor in preparing and conducting lectures and laboratory sessions for the Data Structures course. I provided support to students with questions and difficulties related to the course content, including fundamental algorithms such as lists, queues, stacks, and trees. I also helped proctor exams in the classroom. This role helped me develop communication, organization, and leadership skills, and it deepened my knowledge of Data Structures."
        }
    ]

    const handleDescription = (index) => {
        if(index == active.index) {
            setVisible("opacity-0");
            setActive(prevState => ({
                index: "nothing",
                class: ""
            }));
            
        } else {
            setActive(prevState => ({
                index: index,
                class: "bg-stone-800 -translate-y-1 scale-110"
            }));
            setVisible("opacity-100");
            setTitle(experiences[index].title);
            setDate(experiences[index].date);
            setDescription(experiences[index].description);
        }
    }

    return (
        <div className="flex h-fit w-full md:px-16 text-5xl" id="Experience">
            <div className="flex flex-col basis-2/4 bg-stone-950 w-full pb-20">
               <h1 className={`text-lime-100 leading-snug px-12 pb-4 mt-10`}>
                    Experiences
               </h1> 
               <ul className="list-none list-inside text-lime-100 px-12 pt-3 text-lg cursor-pointer">
                    {experiences.map((experience, index) => {
                        if(active.index == index) {var itemClass = active.class}
                        return (
                            <li 
                                key={index} 
                                onClick={() => handleDescription(index)}
                                className={`${itemClass} py-3 px-4 my-2 ease-in-out rounded-md hover:bg-stone-800 hover:-translate-y-1 hover:scale-110 duration-300`}>
                                    <span className="mr-4">{experience.title}</span>
                                    <span className="text-sm opacity-75">{experience.date}</span>
                        </li>
                        )
                    })}
               </ul>
            </div>
            <div className="flex basis-2/4 justify-center">
                <div className="w-8/12 h-fit">
                    <div className={`ease-linear duration-300 ${visible}`}>
                        <h1 className="text-xl font-bold">
                            {title}
                        </h1>
                        <h2 className="text-sm font-bold opacity-75">
                            {date}
                        </h2>
                        <p className="text-sm font-bold leading-normal mt-2">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Experience;