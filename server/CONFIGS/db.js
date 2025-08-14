import mongoose from "mongoose";

const connectDB =async ()=> {
    try {
        //mongoose.connection.on('connected',()=> console.log("Database Connected"));
        await mongoose.connect(`${process.env.MONGODB_URI}/car-rental`)
        .then(() => console.log("MongoDB connected"))
        .catch((err) => console.error("MongoDB connection error:", err));
    } catch (error) {
        console.log(error.message);
        
    }

}

export default connectDB;