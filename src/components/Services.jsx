import React from 'react';
import ServiceOne from "../assets/img/personal-trainer-1.jpg";
import ServiceTwo from "../assets/img/personal-trainer-2.jpg";
import ServiceThree from "../assets/img/personal-trainer-3.jpg";
import ServiceFour from "../assets/img/personal-trainer-4.jpg";

function Services() {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-logo text-slate-200 text-4xl text-center uppercase my-10'>What we offer to you</h1>
        <div className='flex flex-col lg:flex-row  lg:max-w-[1400px] justify-between gap-10'>
          <div className='w-[450px] h-[320px] md:w-[700px]'>
            <img
              className='object-cover w-full h-full t-0 l-0 opacity-70'
              src={ServiceOne}
              alt="Personal trainer guiding person exercise image of service one." />

            <a href="/" className='p-4 text-slate-200 uppercase  bg-[#6833e4] hover:bg-[#3B2382] -top-[38px] relative'> read more</a>
          </div>

          <div className='w-[450px] h-[320px] md:w-[700px]'>
            <img
              className='object-cover w-full h-full t-0 l-0 opacity-70'
              src={ServiceTwo}
              alt="Personal trainer guiding person exercise image of service one." />

            <a href="/" className='p-4 text-slate-200 uppercase  bg-[#6833e4] hover:bg-[#3B2382] -top-[38px] relative'> read more</a>
          </div>

          <div className='w-[450px] h-[320px] md:w-[700px]'>
            <img
              className='object-cover w-full h-full t-0 l-0 opacity-70'
              src={ServiceThree}
              alt="Personal trainer guiding person exercise image of service one." />

            <a href="/" className='p-4 text-slate-200 uppercase  bg-[#6833e4] hover:bg-[#3B2382] -top-[38px] relative'> read more</a>
          </div>

          <div className='w-[450px] h-[320px] md:w-[700px]'>
            <img
              className='object-cover w-full h-full t-0 l-0 opacity-70'
              src={ServiceFour}
              alt="Personal trainer guiding person exercise image of service one." />

            <a href="/" className='p-4 text-slate-200 uppercase  bg-[#6833e4] hover:bg-[#3B2382] -top-[38px] relative'> read more</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;