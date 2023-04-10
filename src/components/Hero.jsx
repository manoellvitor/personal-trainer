import React from 'react'
import heroImage from "../assets/img/hero-bg.jpg"

function Hero() {
  return (
    <div className='w-full md:h-[800px] h-[700px] shadow-sm shadow-slate-200 flex flex-col items-center justify-center'>
      <img
        src={heroImage}
        alt="Gym equipments background image"
        className='object-cover w-full md:h-[800px] h-[700px] absolute'
      />
      <div className="t-0 l-0 w-full bg-black md:h-[800px] h-[700px] absolute opacity-70 overflow-hidden"></div>
      <div className='flex flex-col justify-center items-center w-full h-full gap-4 md:max-w-2xl z-[1]'>
        <h1 className='font-logo text-slate-200 uppercase text-5xl font-bold text-center leading-tight tracking-wider px-2'>You don't have to be great to start, but you have to start to be great.</h1>
        <p className='text-slate-200 text-center text-lg px-4'>Champions aren't made in the gyms. Champions are made from something they have deep inside them, a desire, a dream, a vision.</p>
        <a href="#" className='rounded-md p-4 text-slate-200  bg-[#6833e4] hover:bg-[#3B2382] shadow-sm cursor-pointer transform ease-in-out duration-500' >START HERE</a>
      </div>
    </div>
  )
}

export default Hero