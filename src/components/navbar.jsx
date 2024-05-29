import icon from "../assets/icon.png"
import { FaLinkedinIn } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"

const navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6 ">
          
          <div className=" m-8 flex flex-shrink-0 items-center"> 
            <img className="mx-5 w-20 " src={icon} alt="icon"  />
          </div>
         
          
          <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/aditya-maurya-038266286/" target="_blanck"><FaLinkedinIn/></a>
           <a href="https://github.com/O-Aditya" target="_blanck"> <FaGithub/></a>
           <a href="http://"><FaSquareXTwitter/></a> 
            <a href=""><FaInstagram/></a>
          </div>
        </nav>
      );
}

export default navbar
