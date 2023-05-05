import React from 'react'
import BrandDescription from './BrandDescription/BrandDescription'
import { products } from '../../data/data' 
import addToWishlist from '../../assets/wishlistIcon.png'
import dropdown from '../../assets/downTriangle.png'
// import './product-list.scss'
import RecentlyViewed from './RecentlyViewed/RecentlyViewed'

const Products = () => {
  return (
    <div className='w-[902px] mt-5 mb-[15px]'>
        <BrandDescription />

        <div className='my-[15px] text-xs font-bold'>
          200 <span className='text-[#919191]'>items</span>
        </div>

        <div className='product-list'>
          {products.map(product => (
          <div className='item' key={product.name.replace(/\s/g, '-')}>
            <div className='relative'>
              <img src={addToWishlist} alt='' className='wishlist-icon'/>
              <img src={product.image} alt='' className='item-img'/>
              {product.sale && <div className='widget w-[38px] h-5 bg-[#FF3933]'>SALE</div>}
              {product.new && <div className='widget w-[50px] h-5 bg-[#040404]'>NEW</div>}
              {product.promo && <div className='widget w-[50px] h-5 bg-[#4646E8]'>PROMO</div>}
            </div>
            <div className='item-info'>
              <p className='item-name'>{product.name}</p>
              <p className='item-brand'>{product.brand}</p>
              <p className='item-price'>{product.sale && 'Sale Price: '}
                <span className={product.sale?'text-[#FF3933] line-through': undefined}>{product.price}</span>
                {product.promo && ' - Range'}
              </p>
              <p className='w-[13px] h-[13px] bg-[#766EFF]'></p>
            </div>
          </div>
        ))}
        </div>

        <div className='flex flex-col items-center py-4 '>
          <div>
            <p className='font-semibold text-[10px] text-[#919191] pb-2'>You've viewed 10 out of 80 products</p>
            <div className='w-[189.6px] h-[4px] bg-trueGray-200 mb-4'>
              <div className='h-[4px] w-[143px] bg-trueGray-950'></div>
            </div>
          </div>
          <button className='w-[120px] h-[48px] border-visible border border-trueGray-950 font-semibold text-trueGray-950'>
            Load more
          </button>
        </div>
        
        <div className=''>
            <h4 >Title for lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
            <a>See more <img src={dropdown} alt=''/></a>
        </div>

        <RecentlyViewed />
    </div>
  )
}

export default Products