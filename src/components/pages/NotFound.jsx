import { Bandaids } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'
import NotFoundImage from "../../assets/img/page-not-found-bg.jpg"


function NotFound() {
  return (
    <div className='w-full md:h-[800px] h-[700px] shadow-sm shadow-slate-200 flex flex-col items-center justify-center'>
      <img
        src={NotFoundImage}
        alt="Empty room background image"
        className='object-cover w-full md:h-[800px] h-[700px] absolute'
      />
      <div className="t-0 l-0 w-full bg-black md:h-[800px] h-[700px] absolute opacity-70 overflow-hidden"></div>
      <div className='flex flex-col justify-center items-center w-full h-full gap-4 md:max-w-2xl z-[1]'>
        <div className='flex justify-center items-center'>
          <Bandaids size={100} className='text-emerald-500' />
          <h1 className=' text-fuchsia-700 text-4xl'>404</h1>
        </div>
        <h1 className='font-logo text-slate-200 uppercase text-5xl font-bold text-center leading-tight tracking-wider'>Ops. Page Not found!</h1>
        <p className='text-slate-200 text-center text-lg uppercase'>It looks like the page you are looking for does not exist.</p>
        <Link to="/" className='rounded-md p-4 text-slate-200  bg-[#6833e4] hover:bg-[#3B2382] shadow-sm cursor-pointer transform ease-in-out duration-500 uppercase' >Return to home</Link>
      </div>
    </div>
  )
}

export default NotFound