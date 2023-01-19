import React from 'react'
import nikeLogo from '../../../assets/logo-frame.png'
import './brand-description.scss'
import dropdown from '../../../assets/downTriangle.png'

const BrandDescription = () => {
  return (
    <div className='brand-info'>
        <div>
          <img src={nikeLogo} alt=''/>
        </div>
        <div className='brand-content'>
            <div className='brand-header'>
                Nike
            </div>
            <div>
              <p className='brand-description'>
                Our mission is what drives us to do everything possible to expand human potential. We do that by creating groundbreaking sport innovations, by making our products more sustainably, by building a creative and diverse global team and by making a positive impact in communities where we live and work.
              </p>
              <a className='more-cta'>More information 
                <img src={dropdown} alt=''/>
              </a>
            </div>
        </div>
    </div>
  )
}

export default BrandDescription