import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex bg-stone-950 w-full h-48 text-white p-4" id="Contact">
      <div className="flex flex-col mt-4 w-fit">
        <h1 className="">My contacts:</h1>
        <div className="flex w-fit py-4 justify-around">
          <div className="p-1 h-fit hover:-translate-y-1 transition ease-in">
            <Link href={"https://www.linkedin.com/in/eduardo-miyake/"}>
              <Image src={"/icons/linkedin.svg"} width={30} height={30} />
            </Link>
          </div>
          <div className="p-1 h-fit hover:-translate-y-1 transition ease-in">
            <Link href={"https://github.com/duduMiyake"}>
              <Image src={"/icons/github.svg"} width={30} height={30} />
            </Link>
          </div>
          <div className="flex p-1 h-fit text-sm text-gray-400">
            <Image src={"/icons/gmail.svg"} width={30} height={30} />
            <p className="ml-1 place-self-center">@</p>
            <p className="text-sm place-self-center select-all">
              eduardomiyake.martins@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;