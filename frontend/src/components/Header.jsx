import React from 'react'

function Header() {
  return (
    <div className='header h-[34vw] mx-auto my-7 bg-[url("/header_img.png")] bg-no-repeat bg-contain relative'>
        <div className='absolute flex flex-col items-start gap-[1.5vw] max-w-[65%] lg:max-w-1/2 bottom-[10%] left-[6vw] animate-fadeIn'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-white font-medium '>
                Order your <br/>favourite food here
            </h2>
            <p className='text-white  text-[1vw] hidden lg:block'>
                Choose from the diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinery expertise. Our mission is to satisfy your cravings and elevate your dining experience
            </p>
            <button className="text-[#747474] bg-white rounded-full text-[2vw] md:text-[1vw] font-medium py-[2vw] px-[4vw] md:py-[1vw] md:px-[2.3vw]">
                View Menu 
            </button>
        </div>
    </div>
  )
}

export default Header