import React from 'react'

const Departments = () => {
  return (

    <div className='border-b-2 border-trueGray-950'>
      <div className='flex justify-between h-[34px] w-[460px] text-xs'>
        <button className='departments-btn active'>Women</button>
        <button className='departments-btn'>Men</button>
        <button className='departments-btn'>Kids</button>
        <button className='departments-btn'>Home</button>
        <button className='departments-btn'>Technology</button>
        <button className='departments-btn'>Stores</button>
        <button className='departments-btn'>Deals</button>
      </div>
      <div className='flex justify-between h-[34px] w-[690px] text-xs'>
        <button className='departments-btn'>New in</button>
        <button className='departments-btn'>Clothing</button>
        <button className='departments-btn'>Shoes</button>
        <button className='departments-btn'>Accessories</button>
        <button className='departments-btn'>Jewellery</button>
        <button className='departments-btn'>Beauty</button>
        <button className='departments-btn'>Sports</button>
        <button className='departments-btn'>Plus</button>
        <button className='departments-btn active'>Brands</button>
        <button className='departments-btn'>Stores</button>
        <button className='departments-btn'>Sale</button>
      </div>
    </div>
  )
}

export default Departments