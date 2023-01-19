import React from 'react'
import './sizing.scss'

const ClothingSizing = () => {
  return (
    <div className='sizes'>

      <div className='size-info'>
        <span className='checkbox'></span>
        <span className='size'>L</span>
        <span className='quantity'>232</span>
      </div>

      <div className='size-info'>
        <span className='checkbox'></span>
        <span className='size'>XL</span>
        <span className='quantity'>180</span>
      </div>

      <div className='size-info'>
        <span className='checkbox'></span>
        <span className='size'>14</span>
        <span className='quantity'>178</span>
      </div>

      <div className='size-info active'>
        <span className='checkbox'></span>
        <span className='size'>12</span>
        <span className='quantity'>71</span>
      </div>

      <div className='size-info'>
        <span className='checkbox'></span>
        <span className='size'>8</span>
        <span className='quantity'>22</span>
      </div>

      <div className='size-info'>
        <span className='checkbox'></span>
        <span className='size'>M</span>
        <span className='quantity'>21</span>
      </div>

      <div className='size-info'>
        <span className='checkbox'></span>
        <span className='size'>S</span>
        <span className='quantity'>23</span>
      </div>

      <div className='size-info'>
        <span className='checkbox'></span>
        <span className='size'>XS</span>
        <span className='quantity'>64</span>
      </div>

    </div>
  )
}

export default ClothingSizing