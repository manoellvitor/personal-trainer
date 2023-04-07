import { Barbell, List, X } from '@phosphor-icons/react';
import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className='flex justify-center border-b-2 border-slate-300'>
        {/* Toggle Menu */}
        {
          isMenuOpen ?
            <div className='text-slate-200 text-lg t-0 l-0 w-full h-screen absolute z-[999] bg-[#121214] flex flex-col items-center md:hidden'>
              <ul className='flex flex-col gap-4 text-[#a8a8b3] items-center mt-40'>
                <li>
                  <Link to="/"
                    className='hover:text-slate-200 transform ease-in-out duration-300' onClick={() => { setIsMenuOpen(!isMenuOpen) }}>Home</Link>
                </li>
                <li>
                  <Link to="/about"
                    className='hover:text-slate-200 transform ease-in-out duration-300' onClick={() => { setIsMenuOpen(!isMenuOpen) }}>About</Link>
                </li>
                <li>
                  <Link to="/services"
                    className='hover:text-slate-200 transform ease-in-out duration-300' onClick={() => { setIsMenuOpen(!isMenuOpen) }}>Services</Link>
                </li>
                <li
                  className='flex rounded border-[#6833e4] border-2 hover:bg-[#6833e4] transform ease-in-out duration-500 text-slate-200'>
                  <Link to="/contact"
                    className='p-2' onClick={() => { setIsMenuOpen(!isMenuOpen) }}>Contact</Link>
                </li>
              </ul>
            </div>
            : <></>
        }

        <div className='flex justify-between items-center p-4 max-w-[1440px] w-full '>
          <div className='flex text-slate-200 text-4xl gap-2 items-center'>
            <Barbell size={40} />
            <Link to="/"
              className='font-logo hover:text-slate-400 transform ease-in-out duration-700'>TRAINER</Link>
          </div>

          <nav className='hidden md:flex'>
            <ul className='flex gap-4 text-[#a8a8b3] items-center'>
              <li>
                <Link to="/"
                  className='hover:text-slate-200 transform ease-in-out duration-300'>Home</Link>
              </li>
              <li>
                <Link to="/about"
                  className='hover:text-slate-200 transform ease-in-out duration-300'>About</Link>
              </li>
              <li>
                <Link to="/services"
                  className='hover:text-slate-200 transform ease-in-out duration-300'>Services</Link>
              </li>
              <li
                className='flex rounded border-[#6833e4] border-2 hover:bg-[#6833e4] transform ease-in-out duration-500 text-slate-200'>
                <Link to="/contact"
                  className='p-2'>Contact</Link>
              </li>
            </ul>
          </nav>


          <div className='md:hidden z-[999]'>
            {isMenuOpen ?
              <X
                size={32}
                className='text-slate-200 cursor-pointer'
                onClick={handleMenu} /> :
              <List
                size={32}
                className='text-slate-200 cursor-pointer'
                onClick={handleMenu}
              />}
          </div>
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default Navbar