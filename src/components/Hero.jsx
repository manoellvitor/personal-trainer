import React from 'react'
import heroBg from "../assets/img/hero-bg.jpg"

function Hero() {
  return (
    <main className='w-full h-[700px] shadow-sm shadow-slate-200 relative overflow-hidden'>
      <img src={heroBg} alt="Gym equipments hero section background" className='absolute top-0 left-0 object-cover w-full h-full -z-10' />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
      <div className='flex flex-col justify-center items-center w-full h-full gap-4 '>
        <h1 className='text-white -z-10 uppercase text-3xl font-bold text-center'>You don't have to be great to start, but you have to start to be great.</h1>
        <p className='text-white -z-10 text-center'>Champions aren't made in the gyms. Champions are made from something they have deep inside them, a desire, a dream, a vision.</p>
        <a href="#" className='rounded p-4 text-slate-200 bg-[#6833e4] shadow-sm -z-5 cursor-pointer' >START HERE</a>
      </div>
    </main>
  )
}

export default Hero


// className='flex rounded border-[#6833e4] border-2 hover:bg-[#6833e4] transform ease-in-out duration-500 text-white'