import React,{useContext} from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom';

function Cart() {
  const {cartItems,food_list,removeFromCart,getTotalCartAmount,url}=useContext(StoreContext);
  const navigate=useNavigate();
  return (
    <div className='cart mt-24'>
      <div className='cartitems'>
        <div className='title grid grid-cols-6 items-center text-gray-500 text-[max(1vw,12px)]'>
          <p className=''>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr className='h-0.5 bg-[#e2e2e2]'/>
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return (
              <div key={index}>
                <div className='title item grid grid-cols-6 items-center text-[max(1vw,12px)]
              my-2.5 text-black'>
                  <img className='w-14' src={url+"/images/"+item.image} alt=""/>
                  <p>
                    {item.name}
                  </p>
                  <p>
                    ${item.price}
                  </p>
                  <p>
                    {cartItems[item._id]}
                  </p>
                  <p>
                    ${item.price*cartItems[item._id]}
                  </p>
                  <p onClick={()=>removeFromCart(item._id)} className='cursor-pointer'>
                    X
                  </p>
                </div>
                <hr className='h-0.5 bg-[#e2e2e2]'/>
              </div>

              
            )
          }
        })}
      </div>
      <div className='cartbottom mt-20 flex flex-col-reverse md:flex-row md:justify-between gap-[max(12vw,20px)]'>
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
          <button onClick={()=>navigate('/order')} className='text-white bg-[#ff6347] w-[max(15vw,220px)] py-3 px-0 rounded-md'>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="promocode justify-start flex flex-1">
        <div>
          <p className='text-[#555]'>
            have a Promocode? enter here
          </p>
          <div className="codeinput flex mt-2.5 items-center justify-between bg-[#eaeaea] rounded-md">
            <input type="text" placeholder="promocode"
            className=' bg-transparent outline-none pl-2.5'/>
            <button className='w-[max(10vw,150px)] py-3 px-1 bg-black text-white rounded-md'>
              Submit
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Cart