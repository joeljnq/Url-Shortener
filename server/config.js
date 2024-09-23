import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbconnect = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
      
        console.log('database connected succesfully');
        
    }).catch((err) => {
        console.log('database connection failed', err);
    });
}

export {dbconnect};