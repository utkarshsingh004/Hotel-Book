import mongoose from 'mongoose'

const connectDB = async()=>{

    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log(`/n MongoDB connected successfully!!`);
        
    } catch (error) {
        console.log("MONGODB CONNECTON ERROR",error);
        
    }

}