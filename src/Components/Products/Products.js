import React from 'react'
import BrandDescription from './BrandDescription/BrandDescription'
import { products } from '../../data/data'
import sneaker from '../../assets/ProductImages/product-image1.png' 
import addToWishlist from '../../assets/wishlistIcon.png'
import './product-list.scss'

const Products = () => {
  return (
    <div className='product-section'>
        <BrandDescription />

        <div className='product-count'>
          200 <span>items</span>
        </div>

        <div className='product-list'>
          {products.map(product => (
          <div className='item' key={product.name.replace(/\s/g, '-')}>
            <div className='item-display'>
              <img src={addToWishlist} alt='' className='wishlist-icon'/>
              <img src={product.image} alt='' className='item-img'/>
              {product.sale && <div className='sale-widget'>SALE</div>}
              {product.new && <div className='new-widget'>NEW</div>}
              {product.promo && <div className='promo-widget'>PROMO</div>}
            </div>
            <div className='item-info'>
              <p className='item-name'>{product.name}</p>
              <p className='item-brand'>{product.brand}</p>
              <p className='item-price'>{product.price}</p>
              <p className='item-swatch'></p>
            </div>
          </div>
        ))}
        </div>
        
    </div>
  )
}

export default Products