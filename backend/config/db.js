import mongoose from 'mongoose';

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://nextjs:nextjs@cluster0.rncynuk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
        dbName:"Foodie",
    }).then(()=>{
        console.log("database connected");
    })
}