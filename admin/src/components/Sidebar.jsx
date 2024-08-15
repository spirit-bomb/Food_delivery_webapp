import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar w-[18%] min-h-[100vh] border border-t-0 border-[#a9a9a9] text-[max(1vw,10px)]'>
        <div className="options pt-12 pl-[20%] flex flex-col gap-5">
            <NavLink to='/add' className="option flex items-center gap-3 border border-[#a9a9a9] border-r-0 py-2 px-2.5 cursor-pointer rounded-s-md"
            style={({isActive})=>{
                return{
                    backgroundColor:isActive?"#fff0ed":"",
                    borderColor:isActive?"#ff6347":"",
                }
            }}>
                <img src={assets.add_icon} alt=""/>
                <p className='hidden lg:block'>
                    Add Items
                </p>
            </NavLink>
            <NavLink to='/list' className="option flex items-center gap-3 border border-[#a9a9a9] border-r-0 py-2 px-2.5 cursor-pointer rounded-s-md"
            style={({isActive})=>{
                return{
                    backgroundColor:isActive?"#fff0ed":"",
                    borderColor:isActive?"#ff6347":"",
                }
            }}>
                <img src={assets.order_icon} alt=""/>
                <p className='hidden lg:block'>
                    List Items
                </p>
            </NavLink>
            <NavLink to='/orders' className="option flex items-center gap-3 border border-[#a9a9a9] border-r-0 py-2 px-2.5 cursor-pointer rounded-s-md"
            style={({isActive})=>{
                return{
                    backgroundColor:isActive?"#fff0ed":"",
                    borderColor:isActive?"#ff6347":"",
                }
            }}>
                <img src={assets.order_icon} alt=""/>
                <p className='hidden lg:block'>
                    Orders
                </p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar