import about from "@/app/styles/About.module.css"
import Image from "next/image";

const About = () => {
    return (
        <div className="relative flex h-screen md:px-16">
            <div className="flex basis-2/4 h-screen bg-stone-950" id="About">
                <div className={`absolute left-1/2 transform -translate-x-1/2 flex flex-row self-center w-11/12 h-auto ${about.background} rounded-lg p-10 shadow-lg`} >
                    <div className="basis-3/4 pr-12">
                        <div className="text-6xl">
                            About
                        </div>
                        <br />
                        <div>
                            <p>
                                I`m a Computer Science student at the Universidade de Fortaleza (UNIFOR) and a Front-End Developer Intern. 
                                My passion for technology and software development drives me to continuously learn and improve my skills, right now i develop most using react.js and next.js. <br />
                                When I’m not coding, you’ll find me exploring the latest tech trends, I’m always eager to connect with like-minded professionals and explore new things in the tech world.<br /><br />
                                Feel free to explore my portfolio to see some of the projects I’ve worked on, and don’t hesitate to reach out if you’d like to connect!
                            </p>
                            <div>
                                <h1 className="mt-2 font-bold">Education</h1>
                                <ul>
                                    <li className="list-disc list-inside font-semibold">
                                        Bachelor's Degree in Computer Science, Universidade de Fortaleza (UNIFOR) - 2021 to Present
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/4 grid grid-cols-2 gap-4 place-content-around">
                        <Image 
                            src="/icons/reactjs.svg"
                            alt="react logo"
                            width={80}
                            height={80}
                        />
                        <Image 
                            src="/icons/next-js.svg"
                            alt="next-js logo"
                            width={80}
                            height={80}
                        />
                        <Image 
                            src="/icons/javascript.svg"
                            alt="js logo"
                            width={80}
                            height={80}
                        />
                        <Image 
                            src="/icons/git.svg"
                            alt="git logo"
                            width={80}
                            height={80}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const skills_row1 = [
    { src: "/icons/html.svg", alt: "html logo" },
    { src: "/icons/css.svg", alt: "css logo" },
    { src: "/icons/javascript.svg", alt: "javascript logo" },
    { src: "/icons/reactjs.svg", alt: "javascript logo" },
    { src: "/icons/next-js.svg", alt: "javascript logo" },
    { src: "/icons/tailwind.svg", alt: "tailwind logo" },
    { src: "/icons/bootstrap.svg", alt: "bootstrap logo" },
]

const skills_row2 = [
    { src: "/icons/mysql.svg", alt: "mysql logo" },
    { src: "/icons/java.svg", alt: "java logo" },
    { src: "/icons/python.svg", alt: "python logo" },
    { src: "/icons/clojure.svg", alt: "clojure logo" },
    { src: "/icons/jquery.svg", alt: "jquery logo" },
    { src: "/icons/git.svg", alt: "git logo" },
    { src: "/icons/github2.svg", alt: "github logo" },
]

const Skills = () => {
    return (
        <div className="relative flex h-screen md:px-16">
            <div className="flex basis-2/4 h-screen bg-stone-950" id="Skills">
                <div className={`absolute left-1/2 transform -translate-x-1/2 flex flex-col self-center w-11/12 h-auto ${about.background} rounded-lg p-10 shadow-lg`}>
                    <h1 className="text-6xl">Skills</h1><br />
                    <h2 className="text-3xl place-self-center">Tech Stack</h2><br />
                    <p className="place-self-center">Technologies I`ve been working with or have worked/used</p><br />
                    <div className="grid gap-4 grid-flow-col justify-items-center mt-12">
                        {skills_row1.map((skill, index) => (
                            <Image key={index} src={skill.src} alt={skill.alt} width={60} height={60}/>
                        ))}
                    </div>
                    <div className="grid gap-4 grid-flow-col justify-items-center mt-12">
                        {skills_row2.map((skill, index) => (
                            <Image key={index} src={skill.src} alt={skill.alt} width={60} height={60}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export { About, Skills };