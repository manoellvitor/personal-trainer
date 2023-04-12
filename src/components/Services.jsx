import React from 'react';
import ServiceOne from "../assets/img/personal-trainer-1.jpg";
import ServiceTwo from "../assets/img/personal-trainer-2.jpg";
import ServiceThree from "../assets/img/personal-trainer-3.jpg";
import ServiceFour from "../assets/img/personal-trainer-4.jpg";

function Services() {
  return (
    <div className='flex justify-center items-center overflow-hidden'>
      <div className='flex flex-col'>
        <h1 className='font-logo text-slate-200 text-3xl md:text-4xl text-center uppercase my-10'>What we offer to you</h1>
        <div className='flex flex-col lg:flex-row justify-between gap-6 mx-2'>
          <div className='flex flex-col lg:flex-row justify-between gap-6'>
            <div className='w-full lg:w-[calc(50% - 6px)] mx-auto relative'>
              <div className='relative'>
                <img className='object-cover h-full w-full lg:w-auto lg:max-w-full' src={ServiceOne} alt="Personal Trainer and person training." />

                <p className='px-4 py-2 text-slate-200 uppercase text-lg lg:text-md font-medium bg-[#1D1D20] absolute top-0 right-0  text-center'>Fitness assessments</p>
                <a href="services/service-one" className='p-4 rounded-tr-md text-slate-200 uppercase bg-[#6833e4] hover:bg-[#3B2382] transform ease-in-out duration-500 bottom-0 absolute'>read more</a>
              </div>
            </div>

            <div className='w-full lg:w-[calc(50% - 6px)] mx-auto relative'>
              <div className='relative'>
                <img className='object-cover h-full w-full lg:w-auto lg:max-w-full' src={ServiceTwo} alt="Personal Trainer and person training." />

                <p className='px-4 py-2 text-slate-200 uppercase text-lg lg:text-md font-medium bg-[#1D1D20] absolute top-0 right-0  text-center'>One-on-one training</p>
                <a href="services/service-two" className='p-4 rounded-tr-md text-slate-200 uppercase bg-[#6833e4] hover:bg-[#3B2382] transform ease-in-out duration-500 bottom-0 absolute'>read more</a>
              </div>
            </div>

            <div className='w-full lg:w-[calc(50% - 6px)] mx-auto relative'>
              <div className='relative'>
                <img className='object-cover h-full w-full lg:w-auto lg:max-w-full' src={ServiceThree} alt="Personal Trainer and person training." />

                <p className='px-4 py-2 text-slate-200 uppercase text-lg lg:text-md font-medium bg-[#1D1D20] absolute top-0 right-0 text-center'>Lifestyle coaching</p>
                <a href="services/service-three" className='p-4 rounded-tr-md text-slate-200 uppercase bg-[#6833e4] hover:bg-[#3B2382] transform ease-in-out duration-500 bottom-0 absolute'>read more</a>
              </div>
            </div>

            <div className='w-full lg:w-[calc(50% - 6px)] mx-auto relative'>
              <div className='relative'>
                <img className='object-cover h-full w-full lg:w-auto lg:max-w-full' src={ServiceFour} alt="Personal Trainer and person training." />

                <p className='px-4 py-2 text-slate-200 uppercase text-lg lg:text-md font-medium bg-[#1D1D20] absolute top-0 right-0 text-center'>Sports-specific training</p>
                <a href="services/service-four" className='p-4 rounded-tr-md text-slate-200 uppercase bg-[#6833e4] hover:bg-[#3B2382] transform ease-in-out duration-500 bottom-0 absolute'>read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services