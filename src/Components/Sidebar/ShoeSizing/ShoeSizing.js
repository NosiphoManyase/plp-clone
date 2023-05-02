import React from 'react'

const ShoeSizing = () => {

//make grid columns closer together
  return (
    <div className='grid grid-cols-3 gap-2'>
      <button className='size-btn'>UK 2.5</button>
      <button className='size-btn'>UK 3</button>
      <button className='size-btn'>UK 3.5</button>
      <button className='size-btn'>UK 4</button>
      <button className='size-btn'>UK 5</button>
      <button className='size-btn'>UK 6</button>
      <button className='size-btn'>UK 8</button>
      <button className='size-btn'>UK 9</button>
      <button className='size-btn'>UK 10</button>
      <button className='size-btn'>UK 11</button>
    </div>
  )
}

export default ShoeSizing