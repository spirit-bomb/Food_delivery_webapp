import React,{useContext} from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

function FoodDisplay({category}) {
    const {food_list}=useContext(StoreContext)
  return (
    <div className='fooddisplay mt-7'>
        <h2 className='text-2xl font-semibold'>
            Top dishes near you
        </h2>
        <div className='foodlist grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 mt-7 gap-x-12'>
            {food_list.map((item,idx)=>{
                if(category==='all' || category===item.category){
                    return(
                        <FoodItem key={idx}
                        id={item._id}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        price={item.price}/>
                    )
                }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay