import React from 'react'

function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4  gap-20 h-[300px] justify-items-center m-4">
      <div className='bg-red-100 w-full '>Service 1</div>
      <div className='bg-blue-100 w-full'>Service 2</div>
      <div className='bg-red-100 w-full'>Service 3</div>
      <div className='bg-blue-100 w-full'>Service 4</div>
    </div>
  )
}

export default Services