import { Mongoose } from "mongoose";

const { default: mongoose } = require("mongoose");

const connectDB = async () =>{
    try{
        if(Mongoose.connection.readyState === 0){
            await mongoose.connect(process.env.MONGO_URI);
            console.log("MongoDB connected");
        }
    } catch(err){
        console.log(err);
    }
}

export default connectDB;