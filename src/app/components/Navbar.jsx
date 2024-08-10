"use client";

import Link from "next/link";
import navbar from "@/app/styles/Navbar.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const minimalNavbar = pathname === "/ProjectsPage";

  return (
    <>
    <nav id="Top" className={`flex-row hidden md:flex justify-between ${navbar.border} p-5 items-center`}>
      <Link href={"/"}>
        <div className="flex items-center">
          <Image
            src={"/icons/navbar-icon.svg"}
            width={40}
            height={40}
            alt="Navbar icon"
          ></Image>
          <h1 className="font-bold ml-2">WELCOME!</h1>
        </div>
      </Link>
      
      <div>
        <ul className="flex justify-end space-x-10 mr-6">
          {pathname === "/" ? (
            <li className="underline underline-offset-8 opacity-60 transition">
              <Link href={"/"}>Home</Link>
            </li>
          ) : (
            <li className="hover:opacity-60 transition">
              <Link href={"/"}>Home</Link>
            </li>
          )}

          {!minimalNavbar && (
            <>
              <li className="hover:opacity-60 transition">
                <Link href={"#About"}>About</Link>
              </li>
              <li className="hover:opacity-60 transition">
                <Link href={"#Skills"}>Skills</Link>
              </li>
              <li className="hover:opacity-60 transition">
                <Link href={"#Experience"}>Experiences</Link>
              </li>
            </>
          )}
          {pathname === "/ProjectsPage" ? (
            <li className="underline underline-offset-8 opacity-60 transition">
              <Link href={"/ProjectsPage"}>Projects</Link>
            </li>
          ) : (
            <li className="hover:opacity-60 transition">
              <Link href={"/ProjectsPage"}>Projects</Link>
            </li>
          )}

          {!minimalNavbar && (
            <li className="hover:opacity-60 transition">
              <Link href={"#Contact"}>Contact</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>

    <nav id="Top" className={`flex-row flex md:hidden justify-between ${navbar.border} p-5 items-center`}>
      <Link href={"/"}>
        <div className="flex items-center">
          <Image
            src={"/icons/navbar-icon.svg"}
            width={40}
            height={40}
            alt="Navbar icon"
          ></Image>
          <h1 className="font-bold ml-2">WELCOME!</h1>
        </div>
      </Link>
      
      <div>
        <ul className="flex justify-end space-x-10 mr-6">
          {pathname === "/" ? (
            <li className="underline underline-offset-8 opacity-60 transition">
              <Link href={"/"}>Home</Link>
            </li>
          ) : (
            <li className="hover:opacity-60 transition">
              <Link href={"/"}>Home</Link>
            </li>
          )}
          {pathname === "/ProjectsPage" ? (
            <li className="underline underline-offset-8 opacity-60 transition">
              <Link href={"/ProjectsPage"}>Projects</Link>
            </li>
          ) : (
            <li className="hover:opacity-60 transition">
              <Link href={"/ProjectsPage"}>Projects</Link>
            </li>
          )}

        </ul>
      </div>
    </nav>


    </>
  );
};

export default Navbar;
