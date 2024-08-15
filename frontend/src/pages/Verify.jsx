import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';

function Verify() {
    const [searchParam,setSearchParam]=useSearchParams();
    const success=searchParam.get("success")
    const orderId=searchParam.get("orderId")
    const {url}=useContext(StoreContext);
    const navigate=useNavigate();
    useEffect(()=>{
        verifyPayment()
    },[])

    const verifyPayment=async()=>{
        const res=await axios.post(url+"/api/order/verify",{success,orderId});
        if(res.data.success){
            navigate("/myorders");
        }
        else{
            navigate("/")
        }
    }

  return (
    <div className='verify min-h-[60vh] grid'>
        <div className="spinner w-20 h-20 place-self-center border-4 border-[#bdbdbd] border-t-[#ff6347]
        rounded-full animate-spin ">

        </div>
    </div>
  )
}

export default Verify