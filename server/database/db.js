import mongoose from "mongoose";

const DBConnection=async()=>{
    const MONGODB_URL='mongodb+srv://ranjeet16pd:BjLsbtSXERx95oOY@cluster0.emcjvtx.mongodb.net/'
    try{
       await mongoose.connect(MONGODB_URL,{useNewUrlParser:true});
        console.log('data base connected');

    }catch(error){
        console.log('Error while connecting with data base',error.message);
    }
}

export default DBConnection;

// BjLsbtSXERx95oOY