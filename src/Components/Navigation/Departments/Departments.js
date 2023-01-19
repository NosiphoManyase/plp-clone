import React from 'react'
import './departments.scss'

const Departments = () => {
  return (

    <div className='departments'>
      <div className='primary-departments'>
        <button className='active'>Women</button>
        <button>Men</button>
        <button>Kids</button>
        <button>Home</button>
        <button>Technology</button>
        <button>Stores</button>
        <button>Deals</button>
      </div>
      <div className='sub-departments'>
        <button>New in</button>
        <button>Clothing</button>
        <button>Shoes</button>
        <button>Accessories</button>
        <button>Jewellery</button>
        <button>Beauty</button>
        <button>Sports</button>
        <button>Plus</button>
        <button className='active'>Brands</button>
        <button>Stores</button>
        <button>Sale</button>
      </div>
    </div>
  )
}

export default Departments