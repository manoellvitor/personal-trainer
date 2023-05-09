import React from 'react'
import ServiceFourImage from '../../assets/img/personal-trainer-4.jpg'

function ServiceFour() {
  return (
    <div className='flex-1 mb-10 w-full relative shadow-sm shadow-slate-200 flex flex-col items-center justify-center py-10'>
      <img
        src={ServiceFourImage}
        alt=""
        className='object-cover absolute w-full h-full'
      />
      <div className="t-0 l-0 w-full bg-black  h-full md:h-full absolute opacity-70"></div>
      <div className='flex flex-col justify-center items-center w-full h-full gap-4 md:max-w-2xl z-[1]'>
        <h1 className='font-logo text-slate-200 uppercase text-5xl font-bold text-center leading-tight tracking-wider px-2'>Sports-specific training</h1>
        <p className='text-slate-200 text-lg px-4 text-justify first-letter:ml-10'>Sports-specific training is a type of fitness training that focuses on improving the specific skills, movements, and physical abilities required for a particular sport. This type of training is typically designed and led by a personal trainer or fitness coach who has experience working with athletes in the specific sport.</p>
        <p className='text-slate-200 text-lg px-4 text-justify first-letter:ml-10 hidden md:block'>
          Sports-specific training is beneficial for athletes who want to improve their performance in their chosen sport, whether they are beginners or advanced players. The trainer will typically assess the athlete's current level of fitness and skill, and then design a training plan that is tailored to their specific needs and goals.</p>
        <a href="/contact" className='rounded-md p-4 text-slate-200  bg-[#6833e4] hover:bg-[#3B2382] shadow-sm cursor-pointer transform ease-in-out duration-500' >START HERE</a>
      </div>
    </div>
  )
}

export default ServiceFour