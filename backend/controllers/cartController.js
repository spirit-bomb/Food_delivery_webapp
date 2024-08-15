import userModel from '../models/userModel.js';

//add items to user cart

export const addToCart=async(req,res)=>{
    try{
        let userData=await userModel.findOne({_id:req.body.userId})
        let cartData=await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]=1
        }
        else{
            cartData[req.body.itemId]+=1
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({
            success:true,
            message:"added to cart"
        })
    }
    catch(err){
        console.log(err)
        res.json({
            success:false,
            message:"error"
        })
    }
}

//remove items from cart

export const removeFromCart=async(req,res)=>{
    try{
        let userData=await userModel.findById(req.body.userId);
        let cartData=await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId]-=1
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({
            success:true,
            message:"removed from cart"
        })
    }
    catch(err){
        console.log(err);
        res.json({
            success:false,
            message:"error"
        })
    }
}

//fetch cart data

export const getCart=async(req,res)=>{
    try{
        let userData=await userModel.findOne({_id:req.body.userId})
        let cartData=await userData.cartData;
        res.json({
            success:true,
            cartData
        })
    }
    catch(err){
        console.log(err);
        res.json({
            success:false,
            message:"error"
        })
    }
}