import React from 'react'
import {menu_list} from '../assets/assets';

function ExploreMenu({category,setCategory}) {
  return (
    <div id="explore-menu" className='exmenu flex flex-col gap-5 max-w-full'>
        <h1 className='text-3xl md:text-4xl text-[#262626] font-medium'>
            Explore our menu
        </h1>
        <p className='exploremenu lg:max-w-[60%] text-[#808080]'>
        Choose from the diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinery expertise. Our mission is to satisfy your cravings and elevate your dining experience
        </p>
        <div className='menulist flex justify-between items-center gap-7 text-center my-5 mx-0
        overflow-x-auto'>
            {menu_list.map((item,idx)=>{
              return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?'all':item.menu_name)} key={idx} 
                className=''>
                  <img src={item.menu_image} alt=''
                  className={category===item.menu_name?`border-4 border-[#ff6347] p-0.5 w-[7.5vw] min-w-20 cursor-pointer rounded-[50%]`:
                  `w-[7.5vw] min-w-20 cursor-pointer rounded-[50%]`}/>
                  <p className='mt-2.5 text-[#747474] cursor-pointer text-[1.4vw]'>
                    {item.menu_name}
                  </p>
                </div>
              )
            })}
        </div>
        <hr className='my-2.5 mx-0 h-0.5 bg-[#e2e2e2] border-none'/>
    </div>
  )
}

export default ExploreMenu