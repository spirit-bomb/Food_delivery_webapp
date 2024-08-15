import React from 'react'
import {assets} from '../assets/assets';

function Footer() {
  return (
    <div id="footer" className=' footer bg-[#323232] text-[#d9d9d9] flex flex-col items-center gap-5 py-5 px-[8vw] pt-20 mt-24'>
        <div className='footcontent flex flex-col gap-9 w-full md:grid md:grid-cols-4 md:gap-20'>
            <div className='footleft col-span-2 flex flex-col items-start gap-5'>
                <img src={assets.logo} alt=""/>
                <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                </p>
                <div className='flex w-10 mr-4 gap-3 cursor-pointer'>
                    <img src={assets.facebook_icon} alt=""/>
                    <img src={assets.twitter_icon} alt=""/>
                    <img src={assets.linkedin_icon} alt=""/>
                </div>
            </div>
            <div className='footcenter flex flex-col items-start gap-5'>
                <h2 className='text-white text-xl font-medium'>
                    COMPANY
                </h2>
                <ul className='mb-2.5 cursor-pointer'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footright flex flex-col items-start gap-5'>
                <h2 className='text-white text-xl font-medium'>
                    GET IN TOUCH
                </h2>
                <ul className='cursor-pointer'>
                    <li>+1-212-456-7890</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr className='w-full h-0.5 my-4 bg-gray-600'/>
        <p className='copyright text-center'>
            Copyright 2024 @ tomato.com - All Rights Reserved
        </p>
    </div>
  )
}

export default Footer