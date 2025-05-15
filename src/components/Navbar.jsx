import React from 'react';
import { SiWorldhealthorganization } from "react-icons/si";
import { FiSun } from "react-icons/fi";
import { BsMoonStarsFill } from "react-icons/bs";
import { GiHealthNormal } from "react-icons/gi";
import user from "../image/user.avif";

const Navbar = () => {
    return (
        <div className='w-full h-20 sticky bg-blue-950 border-2 flex flex-row justify-between items-center gap-0 rounded-b-2xl'>
            <div className='mx-10 cursor-pointer'>
                < SiWorldhealthorganization className='text-6xl text-white'/>
            </div>
            <div className="w-60 h-18 mr-200 flex flex-row justify-center items-center">
                <h1 className='text-3xl font-medium text-blue-400 mr-15 flex flex-row items-center'>MediMa<GiHealthNormal className='text-sm text-red-500 mt-1'/>e</h1>
            </div>
            
            
            <div className='w-80 h-18 flex flex-row justify-evenly items-center'>
                <div className='text-2xl cursor-pointer'>
                    <FiSun className='text-gray-400 hover:text-white'/>
                </div>
                {/*profile icon*/}
                <div className='w-12 h-12 rounded-full border-gray-200 border-2 cursor-pointer'>
                    <img 
                        src={user} 
                        alt="user" 
                        className='w-full h-full rounded-full'
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Navbar;