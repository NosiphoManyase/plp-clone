import React from 'react'
import nikeLogo from '../../../assets/logo-frame.png'
import dropdown from '../../../assets/downTriangle.png'

const BrandDescription = () => {
  return (
    <div className='flex'>
        <div>
          <img src={nikeLogo} alt=''/>
        </div>
        <div className='mx-4'>
            <div className='text-[22px] font-semibold mt-2'>
                Nike
            </div>
            <div>
              <p className='text-sm'>
                Our mission is what drives us to do everything possible to expand human potential. We do that by creating groundbreaking sport innovations, by making our products more sustainably, by building a creative and diverse global team and by making a positive impact in communities where we live and work.
              </p>
              <a className='text-xs font-semibold leading-[14px]'>More information 
                <img className='ml-3.5' src={dropdown} alt=''/>
              </a>
            </div>
        </div>
    </div>
  )
}

export default BrandDescription