import mongoose from 'mongoose';

export const connectDB=async()=>{
    await mongoose.connect(process.env.MONGODB_URI,{
        dbName:"Foodie",
    }).then(()=>{
        console.log("database connected");
    })
}