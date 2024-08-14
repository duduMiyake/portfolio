"use client";

import Image from "next/image";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";

const Section = ({
  image,
  link,
  title,
  description,
  tech,
  alt,
  info,
  hasPage,
}) => {
  return (
    <>
      <RevealWrapper
        viewFactor={0.5}
        duration={600}
        origin="bottom"
        distance="20%"
      >
        <div
          className={`hidden md:flex flex-row items-center h-screen`}
          id={`${title}`}
        >
          <div className="flex items-start relative basis-1/2 h-3/6 mx-4 content-cente">
            {hasPage ? (
              <Link href={link}>
                <Image
                  src={image}
                  width={1600}
                  height={1600}
                  alt={alt}
                  quality={100}
                  className="object-contain"
                />
              </Link>
            ) : (
              <Image
                src={image}
                width={1600}
                height={1600}
                alt={alt}
                quality={100}
                className="object-cover"
              />
            )}
          </div>
          <div className="basis-1/2 justify-center h-3/6 mx-4">
            <h1 className="text-4xl">{title}</h1>
            {info && <h2 className="font-bold text-sm mt-2">{info}</h2>}
            <p className="text-lg mb-4 mt-6">{description}</p>
            <div className="mb-4 font-semibold">
              Stack:
              <div className="flex flex-wrap">
                {tech.map((tech, index) => {
                  return (
                      <div key={index} className="bg-green-300 rounded-full py-1 px-3 cursor-default hover:bg-green-500 hover:-translate-y-1 duration-200 ease-in-out mr-2 mt-2">
                      {tech}
                      </div>
                  )
                })}
              </div>
            </div>
            <span className="text-lg place-self-center underline hover:decoration-purple-400 hover:text-purple-400">
              <Link href={link}>See project repository</Link>
            </span>
          </div>
        </div>
      </RevealWrapper>

      <div className="md:hidden">
        <Link href={link}>
          <Image
            src={image}
            width={1600}
            height={1600}
            alt={alt}
            quality={100}
            className="object-contain"
          />
        </Link>
      </div>
    </>
  );
};

export default Section;
