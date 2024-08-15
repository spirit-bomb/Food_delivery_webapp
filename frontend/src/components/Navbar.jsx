import React,{useContext, useState} from 'react'
import {assets} from '../assets/assets';
import {Link, useNavigate} from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

function Navbar({setShowLogin}) {
    const [home,setHome]=useState(true);
    const [menu,setMenu]=useState(false);
    const [mobile,setMobile]=useState(false);
    const [contact,setContact]=useState(false);
    const {getTotalCartAmount,token,setToken}=useContext(StoreContext);
    const navigate=useNavigate()
    const logout=()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/")
    }
  return (
    <div className='pt-5 flex justify-between items-center'>
        <Link to='/'><img src={assets.logo} alt=''
        className='lg:w-36 w-28 cursor-pointer'/>
        </Link>
        
        <ul className='hidden md:flex sm:gap-4 lg:gap-5 text-[#49557e] text-base'>
            <Link to='/' onClick={()=>{
                setHome(true);
                setMenu(false);
                setMobile(false);
                setContact(false)
            }} 
            className={home?`pb-0.5 border-b-2 border-b-[#49557e] cursor-pointer`:`cursor-pointer`}>home</Link>
            <a href="#explore-menu" onClick={()=>{
                setMenu(true);
                setHome(false);
                setMobile(false);
                setContact(false)
            }}  
            className={menu?`pb-0.5 border-b-2 border-b-[#49557e] cursor-pointer`:`cursor-pointer`}>menu</a>
            <a href="#mobile-app" onClick={()=>{
                setMobile(true);
                setHome(false);
                setMenu(false);
                setContact(false)
            }}  
            className={mobile?`pb-0.5 border-b-2 border-b-[#49557e] cursor-pointer`:`cursor-pointer`}>mobile-app</a>
            <a href="#footer" onClick={()=>{
                setContact(true);
                setHome(false);
                setMobile(false);
                setMenu(false)
            }}  
            className={contact?`pb-0.5 border-b-2 border-b-[#49557e] cursor-pointer`:`cursor-pointer`}>contact us</a>
        </ul>
        <div className='nav-right flex items-center lg:gap-10 gap-4'>
            <img src={assets.search_icon} alt="" className="lg:w-6 w-5"/>
            <div className='nav-search-icon relative'>
             <Link to='/cart'> <img src={assets.basket_icon} alt=""
                className='lg:w-6 w-5'/>
             </Link>

                <div className={getTotalCartAmount()?`absolute min-w-2.5 min-h-2.5 bg-[#ff6347] rounded-[5px] top-[-8px] right-[-8px]`:``}>

                </div>
            </div>
            {!token?<button onClick={()=>setShowLogin(true)} className='bg-transparent md:text-base text-[#49557e] border border-[#ff6347] text-sm
            lg:py-2.5 lg:px-7 py-2 px-5 rounded-[50px] cursor-pointer hover:bg-[#fff4f2] transition-colors duration-300'>
                Sign in
            </button>:
            <div className='navbarprofile relative group'>
                <img src={assets.profile_icon} alt="" className='lg:w-6 w-5'/>
                <ul className='dropdown absolute group-hover:flex-col z-20 gap-2.5 bg-[#fff2ef] py-3 px-6 rounded-md border border-[#ff6347] outline-2 outline-white right-0 hidden group-hover:flex'>
                    <li className='flex items-center gap-2.5 cursor-pointer mr-3' onClick={()=>navigate('/myorders')}>
                        <img src={assets.bag_icon} alt="" className=' w-5'/><p className='text-sm lg:text-base hover:text-[#ff6347]'>
                            Orders
                        </p>
                    </li>
                    <hr className=' bg-[#e2e2e2] border'/>
                    <li className='flex items-center gap-2.5 cursor-pointer mr-3' onClick={logout}>
                        <img src={assets.logout_icon} alt="" className='w-5'/><p className='text-sm lg:text-base hover:text-[#dd6347]'>
                            Logout
                        </p>
                    </li>
                </ul>
            </div>}

        </div>
    </div>
  )
}

export default Navbar