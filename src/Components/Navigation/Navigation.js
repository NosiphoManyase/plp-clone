import React from 'react'
import Navbar from './Header/Navbar'
import Departments from './Departments/Departments'

const Navigation = () => {

  return (
    <div>
        <Navbar />
        <Departments />
        <p className='text-[10px] text-[#919191] font-semibold'>
          <span>Women </span>
          <span>/ Brand </span>
          <span className='text-[#040404]'>/ Nike</span>
        </p>
        
    </div>
  )
}

export default Navigation