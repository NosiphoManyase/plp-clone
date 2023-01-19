import React from 'react'
import Navbar from './Header/Navbar'
import Departments from './Departments/Departments'
import './navigation.scss'

const Navigation = () => {

  return (
    <div className='navigation'>
        <Navbar />
        <Departments />
        <p className='breadcrumb'>
          <span>Women </span>
          <span>/ Brand </span>
          <span className='current-department'>/ Nike</span>
        </p>
        
    </div>
  )
}

export default Navigation