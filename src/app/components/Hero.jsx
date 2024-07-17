import Image from "next/image";

const Hero = () => {
    return (
        <Image 
            src="/hero"
            width={500}
            height={500}
            alt="hero image"
            className="px-5"
        />
    )
}

export default Hero;