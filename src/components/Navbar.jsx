import { Barbell } from '@phosphor-icons/react'
import React from 'react'

function Navbar() {
  return (
    <header className='flex justify-center border-b-2 border-b-[#a8a8b3] h-32'>
      <div className='flex justify-between items-center p-4 max-w-[1440px] w-full'>
        <div className='flex text-white text-4xl gap-2 items-center'>
          <Barbell size={40} />
          <a
            href="/"
            className='font-logo hover:text-[#a8a8b3] transform ease-in-out duration-700'>TRAINER</a>
        </div>
        <ul className='flex gap-4 text-[#a8a8b3] items-center'>
          <li>
            <a
              href="/"
              className='hover:text-white transform ease-in-out duration-300'>Home</a>
          </li>
          <li>
            <a
              href="/"
              className='hover:text-white transform ease-in-out duration-300'>About</a>
          </li>
          <li>
            <a
              href="/"
              className='hover:text-white transform ease-in-out duration-300'>Services</a>
          </li>
          <li
            className='flex rounded border-[#6833e4] border-2 hover:bg-[#6833e4] transform ease-in-out duration-500 text-white'>
            <a
              href="/"
              className='p-2'>Contact</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar