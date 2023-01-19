import React from 'react'
import logo from '../../../assets/logo.png'
import SearchIcon from '../../../assets/SearchIcon'
import locationIcon from '../../../assets/locationIcon.png'
import profileIcon from '../../../assets/profileIcon.png'
import cartIcon from '../../../assets/cartIcon.png'
import './navbar.scss'

const Navbar = () => {

  return (
    <div className='navigation__header'>
        <div className='logo'>
            <img src={logo}/>
        </div>
        <div className='search'>
            <SearchIcon className='search-icon' />
            <input type='text'
                placeholder='search products,stores or brands'
            />
        </div>
        <div className='header__utilities'>
            <div className='utility store-finder'>
                <img src={locationIcon} className='utility-icon'/>
                <p>Store finder</p>
            </div>
            <div className='utility profile'>
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