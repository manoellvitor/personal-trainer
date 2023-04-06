import React from 'react';
import ServiceOne from "../assets/img/personal-trainer-1.jpg";
import ServiceTwo from "../assets/img/personal-trainer-2.jpg";
import ServiceThree from "../assets/img/personal-trainer-3.jpg";
import ServiceFour from "../assets/img/personal-trainer-4.jpg";

function Services() {
  return (
    <div className='flex justify-center items-center overflow-hidden'>
      <div className='flex flex-col'>
        <h1 className='font-logo text-slate-200 text-4xl text-center uppercase my-10'>What we offer to you</h1>
        <div className='flex flex-col lg:flex-row  lg:max-w-[1400px]  justify-between gap-6'>
          <div className='w-[450px] h-[320px] md:w-[700px]'>
            <img
              className='object-cover w-full h-full t-0 l-0 transform ease-in-out duration-500'
              src={ServiceOne}
              alt="Personal trainer guiding person exercise image of service one." />

            <a href="/" className='p-4 rounded-tr-md text-slate-200 uppercase  bg-[#6833e4] hover:bg-[#3B2382] transform ease-in-out duration-500 -top-[38px] relative'> read more</a>
            <p className='px-4 py-2 text-slate-200 uppercase text-lg lg:text-md font-medium bg-[#1D1D20] -top-[345px] relative w-56 lg:w-[210px] left-[226px] md:left-[476px] lg:left-[122px] text-center'>Personal Trainer</p>
          </div>

          <div className='w-[450px] h-[320px] md:w-[700px]'>
            <img
              className='object-cover w-full h-full t-0 l-0 transform ease-in-out duration-500'
              src={ServiceTwo}
              alt="Personal trainer guiding person exercise image of service one." />

            <a href="/" className='p-4 rounded-tr-md text-slate-200 uppercase  bg-[#6833e4] hover:bg-[#3B2382] transform ease-in-out duration-500 -top-[38px] relative'> read more</a>
            <p className='py-2 text-slate-200 uppercase text-lg lg:text-md font-medium bg-[#1D1D20] -top-[345px] relative w-64 lg:w-[220px] left-[194px] md:left-[445px] lg:left-[112px] text-center'>One-on-one training</p>
          </div>

          <div className='w-[450px] h-[320px] md:w-[700px]'>
            <img
              className='object-cover w-full h-full t-0 l-0 transform ease-in-out duration-500'
              src={ServiceThree}
              alt="Personal trainer guiding person exercise image of service one." />

            <a href="/" className='p-4 rounded-tr-md text-slate-200 uppercase  bg-[#6833e4] hover:bg-[#3B2382] transform ease-in-out duration-500 -top-[38px] relative'> read more</a>
            <p className='py-2 text-slate-200 uppercase text-lg lg:text-md font-medium bg-[#1D1D20] -top-[345px] relative w-64 lg:w-[220px] left-[194px] md:left-[445px] lg:left-[112px] text-center'>Lifestyle coaching</p>
          </div>

          <div className='w-[450px] h-[320px] md:w-[700px]'>
            <img
              className='object-cover w-full h-full t-0 l-0 transform ease-in-out duration-500'
              src={ServiceFour}
              alt="Personal trainer guiding person exercise image of service one." />

            <a href="/" className='p-4 rounded-tr-md text-slate-200 uppercase  bg-[#6833e4] hover:bg-[#3B2382] transform ease-in-out duration-500 -top-[38px] relative'> read more</a>
            <p className='px-2 py-2 text-slate-200 uppercase text-lg lg:text-md font-medium bg-[#1D1D20] -top-[345px] relative w-64 lg:w-[240px] left-[194px] md:left-[445px] lg:left-[92px] text-center'>Nutritional guidance</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services