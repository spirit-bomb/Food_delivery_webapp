import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Order() {
  const {getTotalCartAmount,token,food_list,url,cartItems}=useContext(StoreContext);

  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder=async(e)=>{
    e.preventDefault();
    let orderItems=[];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo=item;
        itemInfo['quantity']=cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    let orderData={
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2,
    }
    let res=await axios.post(url+"/api/order/place",orderData,{headers:{token}});
    if(res.data.success){
      const {session_url}=res.data;
      window.location.replace(session_url);
    }
    else{
      alert("error");
    }
  }
  const navigate=useNavigate();
  useEffect(()=>{
    if(!token){
      navigate("/cart")
    }
    else if(getTotalCartAmount()===0){
      navigate("/cart")
    }
  },[token])

  return (
    <>
    <form onSubmit={placeOrder} className="placeorder flex flex-col md:flex-row items-start justify-between gap-12 mt-24">
      <div className="orderleft w-full max-w-[max(30%,500px)]">
        <p className="title text-3xl font-semibold mb-12">
          Delivery Information
        </p>
        <div className="multifields flex gap-2.5">
          <input required className='mb-4 w-full p-2.5 border border-[#c5c5c5] rounded-md outline-[#ff6347]'
           type='text' name='firstName' onChange={(onChangeHandler)} value={data.firstName} placeholder="First-name"/>
          <input required className='mb-4 w-full p-2.5 border border-[#c5c5c5] rounded-md outline-[#ff6347]'
           type='text' name="lastName" onChange={onChangeHandler} value={data.lastName} placeholder="last-name"/>
        </div>
        <input required className='mb-4 w-full p-2.5 border border-[#c5c5c5] rounded-md outline-[#ff6347]'
         type='email' name="email" onChange={onChangeHandler} value={data.email} placeholder="email address"/>
        <input required className='mb-4 w-full p-2.5 border border-[#c5c5c5] rounded-md outline-[#ff6347]'
         type='text' name='street' onChange={onChangeHandler} value={data.street} placeholder="Street"/>
        <div className="multifields flex gap-2.5">
          <input required className='mb-4 w-full p-2.5 border border-[#c5c5c5] rounded-md outline-[#ff6347]'
           type='text' name='city' onChange={onChangeHandler} value={data.city} placeholder="City"/>
          <input required className='mb-4 w-full p-2.5 border border-[#c5c5c5] rounded-md outline-[#ff6347]'
           type='text' name='state' onChange={onChangeHandler} value={data.state} placeholder="State"/>
        </div>
        <div className="multifields flex gap-2.5">
          <input required className='mb-4 w-full p-2.5 border border-[#c5c5c5] rounded-md outline-[#ff6347]'
           type='text' name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder="pincode"/>
          <input required className='mb-4 w-full p-2.5 border border-[#c5c5c5] rounded-md outline-[#ff6347]'
           type='text' name='country' onChange={onChangeHandler} value={data.country} placeholder="Country"/>
        </div>
        <input required  className='mb-4 w-full p-2.5 border border-[#c5c5c5] rounded-md outline-[#ff6347]'
         type='text' name='phone' onChange={onChangeHandler} value={data.phone} placeholder="Phone"/>
      </div>
      <div className="orderright w-full max-w-[max(40%,500px)]">
      <div className='carttotal flex flex-1 flex-col gap-5'>
          <h2 className='text-2xl font-medium'>
            Cart Totals
          </h2>
          <div>
          <div className="details flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-2.5'/>
            <div className="details flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr className='my-2.5'/>
            <div className="details flex justify-between text-[#555]">
              <b>Total</b><b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button type='submit' className='text-white mt-7 bg-[#ff6347] w-[max(15vw,220px)] py-3 px-0 rounded-md'>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
    </>
  )
}

export default Order