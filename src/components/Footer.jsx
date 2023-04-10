import { FacebookLogo, InstagramLogo, TwitterLogo, YoutubeLogo } from '@phosphor-icons/react'
import React from 'react'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <section className='text-slate-200 mt-10 p-4 flex-wrap bg-[#1D1D20]'>
      <div className='lg:max-w-[1440px] md:flex md:justify-between mx-auto items-center'>
        <div className='flex flex-col text-center px-8'>
          <h1 className='uppercase mb-3 underline underline-offset-4'>Useful Links</h1>
          <ul className='text-[#a8a8b3] flex flex-col gap-2'>
            <li>
              <a
                href="/"
                className='hover:text-slate-200 transform ease-in-out duration-300'>Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className='hover:text-slate-200 transform ease-in-out duration-300'>About
              </a>
            </li>
            <li>
              <a
                href="/"
                className='hover:text-slate-200 transform ease-in-out duration-300'>Contact
              </a>
            </li>
          </ul>
        </div>
        <div className='flex gap-2 p-8 text-[#a8a8b3] mx-auto items-center justify-center'>
          <a href='https://fb.com' target='_blank' className='hover:text-slate-200 transform ease-in-out duration-300'><FacebookLogo size={32} /></a>
          <a href='https://twitter.com' target='_blank' className='hover:text-slate-200 transform ease-in-out duration-300'><TwitterLogo size={32} /></a>
          <a href='https://www.instagram.com' target='_blank' className='hover:text-slate-200 transform ease-in-out duration-300'><InstagramLogo size={32} /></a>
          <a href='https://youtube.com' target='_blank' className='hover:text-slate-200 transform ease-in-out duration-300'><YoutubeLogo size={32} /></a>
        </div>
        <div className='flex text-center mx-auto md:mx-0 mt-4 md:mt-0 text-[#a8a8b3] justify-center items-center md:pr-8'>
          <p>Copyright &copy; {year} | Developed by <a href="https://github.com/manoellvitor" target='_blank' className='hover:text-slate-200 transform ease-in-out duration-300'>Manoel Lopes</a></p>
        </div>
      </div>
    </section>
  )
}

export default Footer