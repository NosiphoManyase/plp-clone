import React from 'react'

const ClothingSizing = () => {
  return (
    <div className='sizes'>

      <div className='side-bar-list p-2'>
        <span className='checkbox'></span>
        <span className='size-spacing'>L</span>
        <span className='quantity'>232</span>
      </div>

      <div className='side-bar-list p-2'>
        <span className='checkbox'></span>
        <span className='size-spacing'>XL</span>
        <span className='quantity'>180</span>
      </div>

      <div className='side-bar-list p-2'>
        <span className='checkbox'></span>
        <span className='size-spacing'>14</span>
        <span className='quantity'>178</span>
      </div>

      <div className='side-bar-list p-2 active-size'>
        <span className='checkbox'></span>
        <span className='size-spacing'>12</span>
        <span className='quantity'>71</span>
      </div>

      <div className='side-bar-list p-2'>
        <span className='checkbox'></span>
        <span className='size-spacing'>8</span>
        <span className='quantity'>22</span>
      </div>

      <div className='side-bar-list p-2'>
        <span className='checkbox'></span>
        <span className='size-spacing'>M</span>
        <span className='quantity'>21</span>
      </div>

      <div className='side-bar-list p-2'>
        <span className='checkbox'></span>
        <span className='size-spacing'>S</span>
        <span className='quantity'>23</span>
      </div>

      <div className='side-bar-list p-2'>
        <span className='checkbox'></span>
        <span className='size-spacing'>XS</span>
        <span className='quantity'>64</span>
      </div>

    </div>
  )
}

export default ClothingSizing