import React from 'react';

const Description = () => {
    return (
        <div className='w-full min-h-screen pt-6 bg-gray-100'>
           <div className='w-full h-10 bg-blue-200 flex justify-center items-center'>
                <p>if you have an account <span className='text-red-500 cursor-pointer hover:text-red-600 hover:underline'>log-in</span></p>
           </div>

           <div className='w-full my-6 h-150 border-2 bg-blue-900 flex flex-col justify-center item-center gap-5'
                style={{background: "linear-gradient(90deg,rgba(4, 40, 89, 1) 1%, rgba(3, 45, 84, 1) 36%, rgba(3, 43, 74, 1) 65%, rgba(2, 28, 71, 1) 100%"}}
           >
                <h1 className='text-white text-5xl flex justify-center items-center'>Welcome to MediMate — your personal</h1>
                <p className='text-white text-5xl flex justify-center items-center'>AI-powered health assistant.</p>
                <p className='text-white mt-5 text-2xl font-extralight flex justify-center items-center'>Here, you can securely log your symptoms, write diagnoses, and let AI help you explore relevant health information.</p>
                <p className='text-white text-2xl font-extralight flex justify-center items-center'>Built for individuals who want to understand their health better, one note at a time.</p>
           </div>

           <div >

           </div>
        </div>
    )
}

export default Description;