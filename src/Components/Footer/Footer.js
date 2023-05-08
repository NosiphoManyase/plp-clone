import React from 'react'
import logoBig from '../../assets/logo-big.png'
import twitter from '../../assets/SocialIcons/twitter.png'
import instagram from '../../assets/SocialIcons/instagram.png'
import tiktok from '../../assets/SocialIcons/tiktok.png'
import facebook from '../../assets/SocialIcons/twitter.png'
import cellphone from '../../assets/cellphone.png'
import telephone from '../../assets/telephone.png'
import location from '../../assets/locationIcon.png'
import delivery from '../../assets/delivery.png'
import wallet from '../../assets/wallet.png'
// import './footer.scss'

const Footer = () => {
  return (
    <div>
        <div className='border-y-4 border-trueGray-950'>
            <div className='border-b border-trueGray-950 flex justify-center h-[48px] py-6 '>
                <p className='font-semibold text-base w-[206px] mr-2'>Sign up to our newsletter</p>
                <input className='w-[380px] bg-gray-100 border-none'
                    placeholder='Enter your email address'
                />
                <button className='w-[117px] bg-trueGray-900 ml-2 **'>Subscribe</button>
            </div>
            <div className='flex justify-between'>
                <div className='font-semibold text-sm leading-4 flex flex-col gap-2'>
                    <div className='footer-column-1'>
                        <img src={wallet} alt='' />
                        <p>Pay your TFG Money Account online</p>
                    </div>
                    <div className='footer-column-1'>
                        <img src={delivery} alt='' />
                        <p>Track your order</p>
                    </div>
                    <div className='footer-column-1'>
                        <img src={location} alt='' />
                        <p>Find your nearest store</p>
                    </div>
                    <div className='footer-column-1'>
                        <img src={telephone} alt='' />
                        <p>Contact us</p>
                    </div>
                    <div className='footer-column-1'>
                        <img src={cellphone} alt='' />
                        <p>Get the Bash app</p>
                    </div>
                </div>
                <div className='column-2'>
                <h4>Customer service</h4>
                <ul>
                    <li>Contact us</li>
                    <li>Click & Collect</li>
                    <li>Delivery</li>
                    <li>Returns & refunds</li>
                    <li>Online shopping help & FAQs</li>
                    <li>Ways to pay</li>
                    <li>Terms & conditions & policies</li>
                </ul>
                </div>
                <div className='column-3'>
                    <h4>TFG services</h4>
                    <ul>
                        <li>TFG Money</li>
                        <li>TFG Money Account</li>
                        <li>TFG Rewards</li>
                        <li>TFG Insurance</li>
                        <li>TFG Connect</li>
                        <li>Repairs, valuations & ring sizing</li>
                    </ul>
                </div>
                <div className='column-4'>
                    <h4 className='font-semibold leading-5'>Company</h4>
                    <ul className='font-base text-sm leading-5'>
                        <li>Store finder</li>
                        <li>About Bash</li>
                        <li>About TFG - The Foschini Group Ltd.</li>
                        <li>Sustainability, CSI, BEE</li>
                        <li>Careers at TFG</li>
                    </ul>
                </div> 
            </div>
        </div>
        <div className='flex py-[36px]'>
            <div className='logo'>
                <img src={logoBig} />
            </div>
            <div className='font-base text-xs leading-[18px] text-trueGray-400 ml-auto'>
                <div className='flex'>
                    <img src={instagram} alt='' />
                    <img src={twitter} alt='' />
                    <img src={tiktok} alt='' />
                    <img src={facebook} alt='' />
                </div>
                <p>© Copyright The Foschini Group.</p>
                <p> All Rights Reserved. Foschini Retail Group 
                    (Pty) Ltd is a registered credit provider 
                    (NCRCP36) 
                </p>
                <p>TFG Limited | Privacy | Access to information (PDF, 501KB) | SA COVID-19 Portal</p>
            </div>
        </div>
    </div>
  )
}

export default Footer