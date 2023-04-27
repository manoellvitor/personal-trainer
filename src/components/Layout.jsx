import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout() {
  return (
    <div className='h-screen flex flex-col'>
      <Navbar />
      <Footer />
    </div>
  )
}

export default Layout