import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://karthikidd03:Kidd%401028@cluster0.lyskd.mongodb.net/Food-Delivery-System').then(()=>{
       console.log('DB connected') ;
    })
}