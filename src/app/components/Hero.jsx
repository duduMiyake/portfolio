import Image from "next/image";
import info from "@/app/styles/Hero-inf.module.css"
import Link from "next/link";

const Hero = () => {

    return (
        <div className="flex h-screen w-screen md:w-full md:px-16 text-5xl">
            <div className={`flex flex-col bg-stone-950 w-full`}>
                <h1 className={`text-lime-100 text-4xl md:text-5xl leading-snug px-6 md:px-12 pt-12 pb-4 mt-10`}>
                    Hi,<br />
                    I`m Eduardo,<br />
                    Software developer<br /> 
                    and student
                </h1>
                <div className="flex flex-row px-12 space-x-4">
                    <Link href="https://github.com/duduMiyake" target="_blank">
                        <Image 
                            src="/icons/github.svg"
                            width={45}
                            height={45}
                            alt="github image"
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/in/eduardo-miyake/" target="_blank">
                        <Image 
                            src="/icons/linkedin.svg"
                            width={45}
                            height={45}
                            alt="linkedin image"
                        />
                    </Link>
                </div>
                <div className="flex px-12">
                    <a href={"/Resume.pdf"} download={"Resume Eduardo Miyake"} target="_blank" rel="noreferrer">
                    <button 
                            type="button" 
                            className="grow-0 text-base bg-lime-100 rounded-full px-6 py-2 mt-8">
                            See my resume
                        </button>
                    </a> 
                </div>
            </div>
            <div className="hidden md:flex flex-col w-full place-content-center">
                <Image 
                src="/hero-image.png"
                width={500}
                height={500}
                alt="hero image"
                layout="responsive"
                className="place-self-center"
                />
            </div>
        </div>
        
    )
}

export default Hero;