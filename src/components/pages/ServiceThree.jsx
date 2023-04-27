import React from 'react'
import ServiceThreeImage from '../../assets/img/personal-trainer-3.jpg'

function ServiceThree() {
  return (
    <div className='flex-1 mb-10 w-full relative shadow-sm shadow-slate-200 flex flex-col items-center justify-center'>
      <img
        src={ServiceThreeImage}
        alt=""
        className='object-cover absolute w-full h-full'
      />
      <div className="t-0 l-0 w-full bg-black  h-full md:h-full absolute opacity-70"></div>
      <div className='flex flex-col justify-center items-center w-full h-full gap-4 md:max-w-2xl z-[1]'>
        <h1 className='font-logo text-slate-200 uppercase text-5xl font-bold text-center leading-tight tracking-wider px-2'>Lifestyle coaching</h1>
        <p className='text-slate-200 text-lg px-4 text-justify first-letter:ml-10'>Lifestyle coaching is a service that focuses on helping clients develop and maintain healthy habits and behaviors that support their overall well-being. A lifestyle coach typically works with clients to identify areas of their life that they want to improve, such as nutrition, stress management, sleep, physical activity, and work-life balance, and then helps them create a plan to make sustainable changes.
        </p>
        <p className='text-slate-200 text-lg px-4 text-justify first-letter:ml-10 hidden md:block'>
          During a lifestyle coaching session, the coach works with the client to assess their current habits and behaviors, and identify areas where they can make positive changes. The coach provides guidance and support to help the client develop strategies and tools to make these changes, and provides ongoing accountability to help them stay on track.</p>
        <a href="/contact" className='rounded-md p-4 text-slate-200  bg-[#6833e4] hover:bg-[#3B2382] shadow-sm cursor-pointer transform ease-in-out duration-500' >START HERE</a>
      </div>
    </div>
  )
}

export default ServiceThree