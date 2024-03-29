import React from 'react'
import DropdownIcon from '../../assets/DropdownIcon'
import CloseDropdownIcon from '../../assets/CloseDropdownIcon'
import Brand from './Brand/Brand'
import ClothingSizing from './ClothingSizing/ClothingSizing'
import ShoeSizing from './ShoeSizing/ShoeSizing'
import Colors from './Colors/Colors'
import PriceScale from './PriceScale/PriceScale'


const Sidebar = () => {
  return (
    <div className='w-[290px]'>
        <div className='category'>
            <div className='category-name'>
                <span>Brand</span> 
                <DropdownIcon />
            </div>
            <Brand />
        </div>
        <hr className='filter-separator ' />
        <div className='category'> 
            <div className='category-name'>
                <span>Size</span> 
                <CloseDropdownIcon />
            </div>
            <ClothingSizing/>
        </div>
         <hr className='filter-separator' />
        <div className='category'>
            <div className='category-name'>
                <span>Shoe Size</span> 
                <CloseDropdownIcon />
            </div>
            <ShoeSizing />
        </div>
         <hr className='filter-separator' />
        <div className='category'>
            <div className='category-name'>
                <span>Color</span> 
                <CloseDropdownIcon />
            </div>
            <Colors />
        </div>
         <hr className='filter-separator' />
        <div className='category'>
            <div className='category-name'>
                <span>Price Range</span> 
            </div>
            <PriceScale />
        </div>
       

    </div>
  )
}

export default Sidebar