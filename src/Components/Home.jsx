import React from 'react'
import Myimg from "../img/my.JPG";
import {MdKeyboardArrowRight} from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
     
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        
        <div className="flex flex-col justify-center h-full">
           
            <h2 className=" pt-20 text-4xl sm:text-7xl font-bold pr-8 text-white">I am a Student</h2>
            
            <p className="text-gray-500 py-4 max-w-md">
                
                Currently I am pursuing MCA (Master of Computer Applications) from Graphic Era Hill University.
                I love to work on Web application using technologies like React, Tailwind.
            </p>
            <div>
                <Link to='project'
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer  hover:text-black">
                    Projects
                    <span className="group-hover:rotate-90 duration-150">
                    <MdKeyboardArrowRight size={25} className="ml-1" />
                    </span>
                </Link>
            </div>
        </div>
           <div>
               <img src={Myimg} alt="my profile"  className="h-96 rounded-2xl mx-auto w:1/5:96 md:w-full" />
           </div>
      </div>
    </div>
  )
}

export default Home
