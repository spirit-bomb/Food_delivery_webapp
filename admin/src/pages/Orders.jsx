import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

function Orders({url}) {
  const [orders,setOrders]=useState([]);
  const fetchAllOrders=async()=>{
    const res=await axios.get(url+"/api/order/list");
    if(res.data.success){
      setOrders(res.data.data);
      //console.log(res.data.data);
    }
    else{
      toast.error("Error")
    }
  }
  const statusHandler=async(e,orderId)=>{
    const res=await axios.post(url+"/api/order/status",{
      orderId,
      status:e.target.value
    })
    if(res.data.success){
      await fetchAllOrders()
    }
  }
  useEffect(()=>{
    fetchAllOrders()
  },[])
  return (
    <div className='orderadd w-[70%] ml-[max(5vw,25px)] mt-12'>
      <h3 className='text-lg font-medium xl:font-semibold'>
        Orders Page
      </h3>
      <div className="orderlist">
        {orders.map((order,idx)=>(
          <div key={idx} className="orderitem grid xl:grid-cols-6 text-xs items-start gap-7 border border-[#ff6347] py-4 px-2 grid-cols-4 lg:p-5 my-7 mx-0 lg:text-sm text-[#505050]">
            <img className='w-10' src={assets.parcel_icon} alt=""/>
            <div className='col-span-2'>
              <p className='itemfood font-semibold'>
                {order.items.map((item,idx)=>{
                  if(idx===order.items.length-1){
                    return item.name+" x "+item.quantity
                  }
                  else{
                    return item.name+" x "+item.quantity+", "
                  }
                })}
              </p>
              <p className='itemname font-semibold mt-7 mb-1'>
                {order.address.firstName+" "+order.address.lastName}
              </p>
              <div className='itemaddress mb-2.5'>
                <p>
                  {order.address.street+","}
                </p>
                <p>
                  {order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}
                </p>
              </div>
              <p className='phone'>
                {order.address.phone}
              </p>
            </div>
            <p>
              Items: {order.items.length}
            </p>
            <p>
              ${order.amount}
            </p>
            <select onChange={(e)=>statusHandler(e,order._id)} value={order.status} className='bg-[#ffe8e4] border border-[#ff6347] w-[max(10vw,120px)] p-1 text-xs xl:text-sm xl:p-2.5 outline-none'>
              <option value="Food Processing...">Food Processing...</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders