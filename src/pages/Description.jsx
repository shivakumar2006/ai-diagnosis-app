import React from 'react';

const Description = () => {
    return (
        <div className='w-full min-h-screen pt-6'>
           <div className='w-full h-10 bg-blue-200 flex justify-center items-center'>
                <p>if you have an account <span className='text-red-500 cursor-pointer hover:text-red-500 hover:underline'>log-in</span></p>
           </div>

           <div className='w-full my-6 h-150 border-2 bg-blue-900 flex flex-col justify-center item-center gap-5'
                style={{background: "linear-gradient(90deg,rgba(4, 40, 89, 1) 1%, rgba(3, 45, 84, 1) 36%, rgba(3, 43, 74, 1) 65%, rgba(2, 28, 71, 1) 100%"}}
           >
                <h1 className='text-white text-5xl flex justify-center items-center'>Welcome to MediMate — your personal</h1>
                <p className='text-white text-5xl flex justify-center items-center'>AI-powered health assistant.</p>
                <p className='text-white mt-5 text-2xl font-extralight flex justify-center items-center'>Here, you can securely log your symptoms, write diagnoses, and let AI help you explore relevant health information.</p>
                <p className='text-white text-2xl font-extralight flex justify-center items-center'>Built for individuals who want to understand their health better, one note at a time.</p>
           </div>

           <div className='w-full h-50 mb-5 flex justify-center items-center'>
                <h1 className='text-6xl text-extrabold text-blue-950'>AI-Diagnosis tracker</h1>
           </div>

           <div className='w-full h-100 flex flex-row justify-evenly items-center'>
                <div className='w-70 h-70 rotate-45 rounded-2xl flex items-center justify-center bg-blue-300/50 shadow-2xl'>
                    <div className='w-60 h-60 rotate-0 rounded-2xl flex justify-center items-center shadow-2xl'
                        style={{background: "linear-gradient(90deg,rgba(3, 23, 51, 1) 0%, rgba(4, 38, 69, 1) 36%, rgba(3, 39, 66, 1) 65%, rgba(6, 69, 115, 1) 100%"}}
                    >
                        <p className='text-white text-4xl rotate-315 text-center'>AI-powered diagnosis tracker</p>
                    </div>
                </div>

                <div className='w-70 h-70 rotate-45 rounded-2xl flex items-center justify-center bg-blue-200/40 shadow-2xl'>
                    <div className='w-60 h-60 rotate-0 rounded-2xl flex justify-center items-center shadow-2xl'
                        style={{background: "linear-gradient(90deg,rgba(102, 196, 204, 1) 0%, rgba(103, 212, 219, 1) 37%, rgba(147, 216, 219, 1) 65%, rgba(186, 245, 241, 1) 100%"}}
                    >
                        <p className='text-white text-4xl rotate-315 text-center'>Write. Analyze. Understand</p>
                    </div>
                </div>

                <div className='w-70 h-70 rotate-45 rounded-2xl flex items-center justify-center bg-red-500/20 shadow-2xl'>
                    <div className='w-60 h-60 rotate-0 rounded-2xl flex justify-center items-center shadow-2xl'
                        style={{background: "linear-gradient(90deg,rgba(247, 178, 176, 1) 1%, rgba(245, 182, 162, 1) 37%, rgba(169, 225, 245, 1) 65%, rgba(167, 238, 252, 1) 100%"}}
                    >
                        <p className='text-white text-4xl rotate-315 text-center'>Your health, your assistant</p>
                    </div>
                </div>
           </div>

           {/* Button */}
           <div className='w-full h-50 flex justify-center items-center mt-5'>
                <button className='w-80 h-20 rounded-2xl text-white text-2xl flex justify-center items-center cursor-pointer shadow-2xl'
                    style={{background: "linear-gradient(90deg,rgba(3, 23, 51, 1) 0%, rgba(4, 38, 69, 1) 36%, rgba(3, 39, 66, 1) 65%, rgba(6, 69, 115, 1) 100%"}}
                >
                    Get Started
                </button>
           </div>

           <div className='w-full h-230 flex flex-col justify-center items-center'>
                <div className='w-300 h-170 border-2 text-white rounded-4xl flex flex-col justify-center items-center gap-10 shadow-2xl'
                    style={{background: "linear-gradient(90deg,rgba(4, 40, 89, 1) 1%, rgba(3, 45, 84, 1) 36%, rgba(3, 43, 74, 1) 65%, rgba(2, 28, 71, 1) 100%"}}
                >
                    <h1 className='text-6xl mb-[-30px]'>Welcome to MediMate - Your Smart</h1>
                    <h1 className='text-6xl mb-5'>Health Diary</h1>

                    <p className='text-center font-extralight mb-5'>In today’s fast-moving world, understanding your health should not be complicated. MediMate is your private, <br />AI-powered health notebook that helps you track symptoms, write self-diagnoses, and instantly explore medical information <br /> that matters to you.
                       We believe that everyone should have the power to take control of their health, <br /> without confusion or fear.<br /> That’s why we’ve created a simple yet powerful space where you can write down how you feel — and let AI assist you <br />in finding meaningful insights from reliable sources.
                       Whether you're managing ongoing health concerns,<br /> logging occasional symptoms, or just want to understand your body better, MediMate is here to guide you.</p>

                       <button className='w-80 h-20 bg-white text-blue-950 rounded-2xl mt-5 cursor-pointer'>
                            <p className='text-2xl'>Learn More</p>
                       </button>
                </div>
           </div>
        </div>
    )
}

export default Description;