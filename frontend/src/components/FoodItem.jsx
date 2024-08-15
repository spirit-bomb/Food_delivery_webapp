import React,{useState,useContext} from 'react'
import {assets} from '../assets/assets'
import { StoreContext } from '../context/StoreContext'

function FoodItem({id,name,price,description,image}) {
    const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);
  return (
    <div className='fooditem w-[100%] m-auto rounded-2xl shadow-lg shadow-[#00000015] animate-fadeIn transition duration-300'>
        <div className='imgcontainer relative'>
            <img src={url+"/images/"+image} alt=""
            className='w-full rounded-t-2xl'/>
            {!cartItems[id]?
            <img src={assets.add_icon_white} alt=""
            className='w-9 absolute bottom-4 right-4 cursor-pointer rounded-[50%]' onClick={()=>addToCart(id)}/>:
            <div className='itemcount absolute bottom-4 right-4 flex items-center gap-2.5 p-1.5
            bg-white rounded-3xl'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
                <p>
                    {cartItems[id]}
                </p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=""/>
            </div>}
        </div>
        <div className='info p-5'>
            <div className='namerating flex justify-between items-center mb-2.5'>
                <p className='text-lg font-medium '>
                    {name}
                </p>
                <img src={assets.rating_starts} alt=""
                className='w-[70px]'/>
            </div>
            <p className='itemdesc text-[#676767]'>
                {description}
            </p>
            <p className='itemprice text-[#ff6347] text-xl font-medium my-2.5'>
                ${price}
            </p>
        </div>
    </div>
  )
}

export default FoodItem