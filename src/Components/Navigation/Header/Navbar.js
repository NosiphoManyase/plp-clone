import React from 'react'
import logo from '../../../assets/logo.png'
import SearchIcon from '../../../assets/SearchIcon'
import locationIcon from '../../../assets/locationIcon.png'
import profileIcon from '../../../assets/profileIcon.png'
import cartIcon from '../../../assets/cartIcon.png'
// import './navbar.scss'

const Navbar = () => {

  return (
    <div className='flex items-center justify-between py-[18px]'>
        <div className='w-[72px] h-[36px] flex justify-center'>
            <img className='self-center' src={logo}/>
        </div>
        <div className='flex items-center bg-gray-100 w-[768px] h-[30px] py-2 px-[10px]'>
            <SearchIcon className='' />
            <input type='text'
                placeholder='search products,stores or brands'
                className='w-full h-full border-none bg-gray-100 outline-none ml-2'
            />
        </div>
        <div className='flex w-[250px] justify-between'>
            <div className='utility'>
                <img src={locationIcon} className='utility-icon'/>
                <p>Store finder</p>
            </div>
            <div className='utility'>
                <img src={profileIcon} className='utility-icon'/>
                <p>Profile</p>
            </div>
            <div className='utility cart'>
                <img src={cartIcon} className='utility-icon'/>
                <p>Cart</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar