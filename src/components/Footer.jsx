import React from 'react';
import { SiWorldhealthorganization } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiGithub } from "react-icons/si";


const Footer = () => {
    return (
        <div className='w-full h-110 rounded-t-4xl'
        style={{background: "linear-gradient(90deg,rgba(4, 40, 89, 1) 1%, rgba(3, 45, 84, 1) 36%, rgba(3, 43, 74, 1) 65%, rgba(2, 28, 71, 1) 100%"}}
        >
            <div className='w-full h-20 rounded-t-4xl flex items-center'>
                <p className='mx-5 text-white'>All it takes is a quick login — and you're ready to begin your journey to better health awareness.</p>
            </div>

            <div className='w-full h-90 flex flex-col justify-center items-center'>
                <div className='w-full h-20 flex justify-center items-center'>
                    <p className='text-3xl text-white'>Your notes. Your privacy. Your assistant.</p>
                </div>
                <div className='w-full h-80 flex flex-row justify-evenly items-center'>
                    <SiWorldhealthorganization className='text-9xl text-white cursor-pointer'/>
                    <div className='w-100 h-80 flex flex-col justify-evenly items-center'>
                        <h1 className='text-2xl text-white font-extralight'>Contact me</h1>
                        <div className='w-80 h-10 text-3xl mt-[-100px] text-white flex flex-row justify-evenly items-center'>
                            <FaLinkedin className='cursor-pointer'/>
                            <FaYoutube className='cursor-pointer'/>
                            <SiGithub className='cursor-pointer'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;