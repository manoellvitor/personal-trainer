import React from 'react'
import ServiceOneImage from '../../assets/img/personal-trainer-1.jpg'

function ServiceOne() {
  return (
    <div className='flex-1 mb-10 w-full relative shadow-sm shadow-slate-200 flex flex-col items-center justify-center'>
      <img
        src={ServiceOneImage}
        alt=""
        className='object-cover absolute w-full h-full'
      />
      <div className="t-0 l-0 w-full bg-black  h-full md:h-full absolute opacity-70"></div>

      <div className='flex flex-col justify-center items-center w-full h-full gap-4 md:max-w-2xl z-[1]'>
        <h1 className='font-logo text-slate-200 uppercase text-5xl font-bold text-center leading-tight tracking-wider px-2'>Fitness assessments</h1>
        <p className='text-slate-200 text-lg px-4 text-justify first-letter:ml-10'>A fitness assessment is a comprehensive evaluation of a person's fitness level, which is typically conducted by a personal trainer or fitness professional. The assessment typically includes a series of tests and measurements that are used to evaluate various aspects of fitness, such as cardiovascular endurance, muscular strength and endurance, flexibility, and body composition.
          <br />
        </p>
        <p className='text-slate-200 text-lg px-4 text-justify first-letter:ml-10 hidden md:block'>
          The purpose of a fitness assessment is to identify the client's current fitness level, as well as any areas of weakness or potential health concerns. This information is then used to create a personalized workout plan that is tailored to the client's specific needs and goals.

          However, the overall goal of a fitness assessment is to provide the client with a clear understanding of their current fitness level and a roadmap for achieving their fitness goals.</p>
        <a href="/contact" className='rounded-md p-4 text-slate-200  bg-[#6833e4] hover:bg-[#3B2382] shadow-sm cursor-pointer transform ease-in-out duration-500' >START HERE</a>
      </div>
    </div>
  )
}

export default ServiceOne