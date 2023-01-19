import React from 'react'
import './pricescale.scss'

const PriceScale = () => {
  return (
    <div className='price-scale'>
      <hr className='scale'/>
      <div className='range'>
        <div className='range-point'>
          <span>To R700</span>
          <span className='circle left'></span>
        </div>
        <div className='line'><hr className='solid'/></div>
        <div className='range-point'>
          <span>To R7,000</span>
          <span className='circle'></span>
        </div>
      </div>
    </div>
  )
}

export default PriceScale