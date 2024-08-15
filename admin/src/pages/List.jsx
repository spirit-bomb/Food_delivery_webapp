import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function List({url}) {

  const [list,setList]=useState([]);

  const fetchList=async()=>{
    const res=await axios.get(`${url}/api/food/list`);
    if(res.data.success){
      setList(res.data.data);
    }
    else{
      toast.error("Error");
    }
  }

  useEffect(()=>{
    fetchList();
  },[])

  const removeFood=async(foodId)=>{
    const res=await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList();
    if(res.data.success){
      toast.success(res.data.message);
    }
    else{
      toast.error("Error");
    }
  }
  return (
    <div className='listadd w-[70%] ml-[max(5vw,25px)] mt-12 text-[#6d6d6d] text-base'>
      <p className='mb-2.5'>
        All Foods List
      </p>
      <div className="listtable">
        <div className="listtableformattitle md:grid hidden md:grid-cols-5 bg-[#f9f9f9] items-center gap-2.5 py-3 px-4 border border-[#cacaca] text-sm">
          <b>Image</b>
          <b className=''>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='listtableformat grid grid-cols-3 md:grid-cols-5 items-center gap-2.5 py-3 px-4 border border-[#cacaca] text-sm'>
              <img src={`${url}/images/`+item.image} alt=""
              className='w-12'/>
              <p className=''>
                {item.name}
              </p>
              <p>
                {item.category}
              </p>
              <p>
                ${item.price}
              </p>
              <p onClick={()=>removeFood(item._id)} className='cursor-pointer'>
                X
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List