import React from 'react'
// import './pricescale.scss'

const PriceScale = () => {
  return (
    <div className='relative'>
      <hr className='w-[260px] h-[2px] bg-[#E3E3E4] border-none absolute bottom-2 z-[-1]'/>
      <div className='w-max flex justify-center items-center ml-[40px]'>
        <div className='flex flex-col'>
          <span className=''>From R700</span>
          <span className='circle ml-auto'></span>
        </div>
        <div className='w-[80px] self-end mb-[7px]'><hr className='h-[2px] w-full bg-[#000000]'/></div>
        <div className='flex flex-col'>
          <span>To R7,000</span>
          <span className='circle'></span>
        </div>
      </div>
    </div>
  )
}

export default PriceScale