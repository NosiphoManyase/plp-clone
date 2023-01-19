import React from 'react'
import sneaker from '../../../assets/ProductImages/product-image1.png' 
import addToWishlist from '../../../assets/wishlistIcon.png'

const RecentlyViewed = () => {
  return (
    <div>

      <h4 className='section-title'>Recently viewed products</h4>
      <div className='product-list'>
      <div className='item'>
        <div className='item-display'>
          <img src={addToWishlist} alt='' className='wishlist-icon'/>
          <img src={sneaker} alt='' className='item-img'/>
        </div>
        <div className='item-info'>
          <p className='item-name'>Blazer Mid '77 VNTG</p>
          <p className='item-brand'>Nike</p>
          <p className='item-price'>R599.00</p>
          <div className='item-swatches'>
            <p className='swatch-purple'></p>
            <p className='swatch-pink'></p>
            <p className='swatch-blue'></p>
          </div>
        </div>
      </div>
      <div className='item'>
        <div className='item-display'>
          <img src={addToWishlist} alt='' className='wishlist-icon'/>
          <img src={sneaker} alt='' className='item-img'/>
        </div>
        <div className='item-info'>
          <p className='item-name'>Blazer Mid '77 VNTG</p>
          <p className='item-brand'>Nike</p>
          <p className='item-price'>R599.00</p>
          <div className='item-swatches'>
            <p className='swatch-purple'></p>
            <p className='swatch-pink'></p>
            <p className='swatch-blue'></p>
          </div>
        </div>
      </div>
      <div className='item'>
        <div className='item-display'>
          <img src={addToWishlist} alt='' className='wishlist-icon'/>
          <img src={sneaker} alt='' className='item-img'/>
        </div>
        <div className='item-info'>
          <p className='item-name'>Blazer Mid '77 VNTG</p>
          <p className='item-brand'>Nike</p>
          <p className='item-price'>R599.00</p>
          <div className='item-swatches'>
            <p className='swatch-purple'></p>
            <p className='swatch-pink'></p>
            <p className='swatch-blue'></p>
          </div>
        </div>
      </div>
      <div className='item'>
        <div className='item-display'>
          <img src={addToWishlist} alt='' className='wishlist-icon'/>
          <img src={sneaker} alt='' className='item-img'/>
        </div>
        <div className='item-info'>
          <p className='item-name'>Blazer Mid '77 VNTG</p>
          <p className='item-brand'>Nike</p>
          <p className='item-price'>R599.00</p>
          <div className='item-swatches'>
            <p className='swatch-purple'></p>
            <p className='swatch-pink'></p>
            <p className='swatch-blue'></p>
          </div>
        </div>
      </div>
      <div className='item'>
        <div className='item-display'>
          <img src={addToWishlist} alt='' className='wishlist-icon'/>
          <img src={sneaker} alt='' className='item-img'/>
        </div>
        <div className='item-info'>
          <p className='item-name'>Blazer Mid '77 VNTG</p>
          <p className='item-brand'>Nike</p>
          <p className='item-price'>R599.00</p>
          <div className='item-swatches'>
            <p className='swatch-purple'></p>
            <p className='swatch-pink'></p>
            <p className='swatch-blue'></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RecentlyViewed