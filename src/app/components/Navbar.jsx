import Link from "next/link";
import navbar from "@/app/styles/Navbar.module.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav className={`${navbar.border} border-b-2 p-5`}>
            <div>
                
                <ul className="flex justify-end space-x-10">
                    <li>About</li>
                    <li>Projects</li>
                    <li>Education</li> 
                    <li>Experiences</li> 
                    <li>Contacts</li> 
                    <li><FaGithub className="text-2xl pl"/></li>
                    <li><FaLinkedin className="text-2xl"/></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;