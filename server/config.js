import mongoose from "mongoose";
const dbconnect = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/urlShortener').then(() => {
      
        console.log('database connected succesfully');
        
    }).catch((err) => {
        console.log('database connection failed', err);
    });
}

export {dbconnect};