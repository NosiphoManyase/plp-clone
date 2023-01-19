import React from 'react'
import BrandDescription from './BrandDescription/BrandDescription'
import { products } from '../../data/data' 
import addToWishlist from '../../assets/wishlistIcon.png'
import dropdown from '../../assets/downTriangle.png'
import './product-list.scss'
import RecentlyViewed from './RecentlyViewed/RecentlyViewed'

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

        <div className='load-more'>
          <div>
            <p>You've viewed 10 out of 80 products</p>
            <div className='full-bar'>
              <div className='progress-bar'></div>
            </div>
          </div>
          <button>Load more</button>
        </div>
        
        <div className='seo-block'>
            <h4>Title for lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
            <a>See more <img src={dropdown} alt=''/></a>
        </div>

        <RecentlyViewed />
    </div>
  )
}

export default Products