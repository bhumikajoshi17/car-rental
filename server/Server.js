import express from 'express';
import "dotenv/config" ;
import cors from "cors";
import connectDB from './CONFIGS/db.js';
import userRouter from './Routes/userRoutes.js';
import ownerRouter from './Routes/ownerRoutes.js';
import bookingRouter from './Routes/bookingRoutes.js';

// Initialize Express App

const app =express()

// Connect Database
await connectDB()

// Middleware

app.use(cors());
app.use(express.json());

app.get('/' , (req,res)=>res.send("Server is Running!"))
app.use('/api/user', userRouter)
app.use("/api/owner" ,ownerRouter)
app.use("/api/bookings" ,bookingRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Server Running on port ${PORT}`))