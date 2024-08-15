import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import { assets } from '../assets/assets';

function MyOrder() {
    const [data,setData]=useState([]);
    const {url,token}=useContext(StoreContext);
    const fetchOrders=async()=>{
        const res=await axios.post(url+"/api/order/userorder",{},{headers:{token}});
        setData(res.data.data);
    }
    useEffect(()=>{
        if(token){
            fetchOrders();
        }
    },[token]);
  return (
    <div className='myorders my-12 mx-0'>
        <h2 className='text-xl font-semibold'>
            My Orders
        </h2>
        <div className="container flex flex-col gap-5 mt-7">
            {data.map((order,idx)=>{
                return(
                    <div key={idx} className="orders grid grid-cols-4 gap-x-1 text-xs lg:grid-cols-8 
                    items-center gap-7 lg:text-sm py-2.5 px-5
                    text-[#454545] border border-[#ff6347]">
                        <img src={assets.parcel_icon} alt=""
                        className='w-12'/>
                        <p className='col-span-2'>
                            {order.items.map((item,idx)=>{
                                if(idx===order.items.length-1){
                                    return item.name+" x "+item.quantity
                                }
                                else{
                                    return item.name+" x "+item.quantity+", "
                                }
                            })}
                        </p>
                        <p>
                            ${order.amount}.00
                        </p>
                        <p>
                            Items:{order.items.length}
                        </p>
                        <p className='col-span-2'>
                            <span className='text-[#ff6347]'>&#x25cf; </span>
                            <b className='font-medium text-[#454545]'>
                                {order.status}
                            </b>
                        </p>
                        <button onClick={fetchOrders} className='py-3 rounded-md px-0 bg-[#ffe1e1] text-[#454545] text-xs lg:text-sm'>
                            Track order
                        </button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default MyOrder