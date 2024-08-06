"use client";

import Image from "next/image";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";

const Section = ({image,link,title,description,tech,alt,info,hasPage,}) => {
  return (
    <RevealWrapper viewFactor={0.6} duration={800} origin="bottom" distance="20%">
      <div className={`flex flex-row items-center h-screen`}>
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
          <p className="mb-4 font-semibold">Stack: {tech}</p>
          <span className="text-lg place-self-center underline hover:decoration-purple-400 hover:text-purple-400">
            <Link href={link}>See project repository</Link>
          </span>
        </div>
      </div>
    </RevealWrapper>
  );
};

export default Section;
