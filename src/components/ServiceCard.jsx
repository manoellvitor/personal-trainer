import React from 'react';

function ServiceCard(props) {
  const { serviceName, serviceImageURL, serviceURL } = props.service

  return (
    <div className='w-full lg:w-[calc(50% - 6px)] mx-auto relative'>
      <div className='relative'>
        <img className='object-cover h-full w-full lg:w-auto lg:max-w-full' src={serviceImageURL} alt="Personal Trainer and person training." />

        <p className='px-4 py-2 text-slate-200 uppercase text-lg lg:text-md font-medium bg-[#1D1D20] absolute top-0 right-0  text-center'>{serviceName}</p>
        <a href={serviceURL} className='p-4 rounded-tr-md text-slate-200 uppercase bg-[#6833e4] hover:bg-[#3B2382] transform ease-in-out duration-500 bottom-0 absolute'>read more</a>
      </div>
    </div>
  )
}

export default ServiceCard