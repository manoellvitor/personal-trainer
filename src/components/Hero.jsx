import React from 'react'
import heroImage from "../assets/img/hero-bg.jpg"

function Hero() {
  return (
    <main className='w-full h-[700px] shadow-sm shadow-slate-200 relative overflow-hidden flex flex-col items-center justify-center'>
      <img src={heroImage} alt="Gym equipments hero section background" className='absolute top-0 left-0 object-cover w-full h-full -z-10' />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
      <div className='flex flex-col justify-center items-center w-full h-full gap-4 md:max-w-2xl'>
        <h1 className='text-white -z-10 uppercase text-3xl font-bold text-center'>You don't have to be great to start, but you have to start to be great.</h1>
        <p className='text-white -z-10 text-center'>Champions aren't made in the gyms. Champions are made from something they have deep inside them, a desire, a dream, a vision.</p>
        <a href="#" className='rounded-md p-4 text-slate-200  bg-[#6833e4] hover:bg-[#3B2382] shadow-sm -z-5 cursor-pointer transform ease-in-out duration-500' >START HERE</a>
      </div>
    </main>
  )
}

export default Hero


// className='flex rounded border-[#6833e4] border-2 hover:bg-[#6833e4] transform ease-in-out duration-500 text-white'