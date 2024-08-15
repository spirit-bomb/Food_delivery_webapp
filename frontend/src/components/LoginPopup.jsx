import React,{useContext, useState} from 'react'
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';


function LoginPopup({setShowLogin}) {
    const {url,setToken}=useContext(StoreContext);
    const [currState,setCurrState]=useState("Login");
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })
    const onChangeHandler=(e)=>{
        const name=e.target.name
        const value=e.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onLogin=async(e)=>{
        e.preventDefault()
        let newUrl=url;
        if(currState==='Login'){
            newUrl+="/api/user/login"
        }
        else{
            newUrl+="/api/user/register"
        }
        const res=await axios.post(newUrl,data);
        if(res.data.success){
            setToken(res.data.token);
            localStorage.setItem("token",res.data.token);;
            setShowLogin(false)
        }
        else{
            alert(res.data.message);
        }
    }
  return (
    <div className='loginpopup absolute z-10 w-full h-full bg-[#00000090] grid'>
        <form onSubmit={onLogin} className='logincontainer self-center w-[max(23vw,330px)] text-[#808080] bg-white
        flex flex-col gap-6 py-6 px-7 rounded-lg text-sm mx-auto '>
            <div className='title flex justify-between items-center text-black'>
                <h2 className='text-xl font-medium'>
                    {currState}
                </h2>
                <img className='w-4 cursor-pointer'
                 onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""/>
            </div>
            <div className='logininputs flex flex-col gap-5'>
                {currState==='Sign up'?<input className=' outline-none border border-[#c9c9c9] p-2.5 rounded-md'
                 type='text' placeholder="Your name" required
                 name='name' onChange={onChangeHandler} value={data.name}/>:
                <></>}
            
                <input name='email' onChange={onChangeHandler} value={data.email} className='outline-none border border-[#c9c9c9] p-2.5 rounded-md'
                 type="email" placeholder="your email" required/>
                <input name='password' onChange={onChangeHandler} value={data.password} className='outline-none border border-[#c9c9c9] p-2.5 rounded-md' 
                type="password" placeholder='password' required/>
            </div>
            <button type='submit' className='p-2.5 rounded-md text-white bg-[#ff6347] text-base cursor-pointer'>
                {currState==="Sign up"?"Create account":"Login"}
            </button>
            <div className='logincondition flex items-start gap-2 mt-[-15px]'>
                <input className='mt-1.5' type='checkbox' required/>
                <p>
                    By continuing, I agree to the terms of use & privacy policy
                </p>
            </div>
            {currState==='Login'?<p>Create a new account? <span className='text-[#ff6347] font-medium cursor-pointer' onClick={()=>setCurrState("Sign up")}>Click here</span></p>:
            <p>Already have an account? <span className='text-[#ff6347] font-medium cursor-pointer' onClick={()=>setCurrState("Login")}>Login here</span></p>}
            
        </form>
    </div>
  )
}

export default LoginPopup