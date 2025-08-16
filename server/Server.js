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

const allowedOrigins = [
  "http://localhost:5173", // for local dev
  "https://car-rental-wheat-zeta.vercel.app", // your deployed frontend
];


// Middleware

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));
app.use(express.json());

app.get('/' , (req,res)=>res.send("Server is Running!"))
app.use('/api/user', userRouter)
app.use("/api/owner" ,ownerRouter)
app.use("/api/bookings" ,bookingRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Server Running on port ${PORT}`))

export default app;