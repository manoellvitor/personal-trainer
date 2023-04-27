import React from 'react'
import ServiceTwoImage from '../../assets/img/personal-trainer-2.jpg'

function ServiceTwo() {
  return (
    <div className='flex-1 mb-10 w-full relative shadow-sm shadow-slate-200 flex flex-col items-center justify-center'>
      <img
        src={ServiceTwoImage}
        alt=""
        className='object-cover absolute w-full h-full'
      />
      <div className="t-0 l-0 w-full bg-black  h-full md:h-full absolute opacity-70"></div>

      <div className='flex flex-col justify-center items-center w-full h-full gap-4 md:max-w-2xl z-[1]'>
        <h1 className='font-logo text-slate-200 uppercase text-5xl font-bold text-center leading-tight tracking-wider px-2'>One-on-one training</h1>
        <p className='text-slate-200 text-lg px-4 text-justify first-letter:ml-10'>One-on-one training is a personalized fitness service that involves a personal trainer working individually with a client to help them achieve their fitness goals. In a one-on-one training session, the trainer designs a customized workout plan and provides individualized instruction, support, and motivation to help the client reach their fitness goals.
        </p>
        <p className='text-slate-200 text-lg px-4 text-justify first-letter:ml-10 hidden md:block'>
          One-on-one training is ideal for individuals who want a personalized approach to their fitness journey, whether they are just starting out or have specific goals in mind. During a session, the personal trainer will typically work with the client to develop a plan that is tailored to their specific fitness level, preferences, and goals. The trainer will then guide the client through each exercise, providing feedback on proper form and technique to ensure the exercises are done safely and effectively.</p>
        <a href="/contact" className='rounded-md p-4 text-slate-200  bg-[#6833e4] hover:bg-[#3B2382] shadow-sm cursor-pointer transform ease-in-out duration-500' >START HERE</a>
      </div>
    </div>
  )
}

export default ServiceTwo