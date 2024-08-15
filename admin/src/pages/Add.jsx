import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';

function Add({url}) {
    const [image,setImage]=useState(false);
    const [data,setData]=useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"
    })
    const onChangeHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler=async(e)=>{
        e.preventDefault()
        const formData=new FormData();
        formData.append("name",data.name);
        formData.append("description",data.description);
        formData.append("price",data.price);
        formData.append("category",data.category);
        formData.append("image",image);
        const res=await axios.post(`${url}/api/food/add`,formData);
        if(res.data.success){
            setData({
                name:"",
                description:"",
                price:"",
                category:"Salad"
            })
            setImage(false)
            toast.success(res.data.message);
        }
        else{
            toast.error(res.data.message);
        }
    }
  return (
    <div className='addsection w-[70%] ml-[max(5vw,25px)] mt-12 text-[#6d6d6d] text-base'>
        <form className="flex flex-col gap-5" onSubmit={onSubmitHandler}>
            <div className="addimgflexcol flex flex-col gap-5">
                <p>
                    Upload Image
                </p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt=""
                    className='w-32'/>
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required/>
            </div>
            <div className="addproduct flex gap-2.5 flex-col w-[max(40%,280px)]">
                <p>
                    Product Name
                </p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here'
                className='p-2.5 border-2 border-gray-300 rounded-md'/>
            </div>
            <div className="addproductdescflexcol flex flex-col w-[max(40%,280px)] gap-2.5">
                <p>
                    Product Description
                </p>
                <textarea onChange={onChangeHandler} value={data.description} name='description' rows='6' placeholder="write content here" required
                className='p-2.5 border-2 border-gray-300 rounded-md'>

                </textarea>
            </div>
            <div className="addcategoryprice flex gap-7">
                <div className="addcategory flex flex-col gap-2.5">
                    <p>
                        Product Category
                    </p>
                    <select onChange={onChangeHandler} value={data.category} name='category' className='border-2 border-gray-300 rounded-md max-w-32 p-2.5'>
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className="addpriceflexcol flex flex-col gap-2.5">
                    <p>
                        Product Price
                    </p>
                    <input onChange={onChangeHandler} value={data.price} type='Number' name='price' placeholder='$20'
                    className='border-2 border-gray-300 rounded-md max-w-32 p-2.5'/>
                </div>
            </div>
            <button type='submit' className='addbtn max-w-32 p-2.5 bg-black text-white cursor-pointer'>
                ADD
            </button>
        </form>
    </div>
  )
}

export default Add