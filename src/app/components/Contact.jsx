import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex bg-stone-950 w-full h-fit text-white p-4 justify-between" id="Contact">
      <div className="flex flex-col mt-4 w-fit items-center md:items-start">
        <h1 className="w-fit">My contacts:</h1>
        <div className="flex w-fit py-4 justify-around">
          <div className="p-1 h-fit hover:-translate-y-1 transition ease-in">
            <Link href={"https://www.linkedin.com/in/eduardo-miyake/"}>
              <Image alt="linkedin icon" src={"/icons/linkedin.svg"} width={30} height={30} />
            </Link>
          </div>
          <div className="p-1 h-fit hover:-translate-y-1 transition ease-in">
            <Link href={"https://github.com/duduMiyake"}>
              <Image alt="github icon" src={"/icons/github.svg"} width={30} height={30} />
            </Link>
          </div>
          <div className="hidden md:flex p-1 h-fit text-sm text-gray-400">
            <Image alt="gmail icon" src={"/icons/gmail.svg"} width={30} height={30} />
            <p className="ml-1 place-self-center">@</p>
            <p className="text-sm place-self-center select-all">
              eduardomiyake.martins@gmail.com
            </p>
          </div>
        </div>
        <div className="text-sm mb-12 md:hidden">
          <span>@</span>
          <span>eduardomiyake.martins@gmail.com</span>
        </div>
        <div className="md:hidden mx-8 text-sm opacity-50">Developed using Next.js, React.js and deployed with Vercel</div>
      </div>
      <div className="hidden md:flex items-center opacity-75">
        <h1>Developed using Next.js, React.js and deployed with Vercel</h1>
      </div>
    </div>
  );
};

export default Contact;
