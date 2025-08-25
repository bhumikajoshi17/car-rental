import express from 'express';
import "dotenv/config" ;
import cors from "cors";
import connectDB from './CONFIGS/db.js';
// import userRouter from './Routes/userRoutes.js';
// import ownerRouter from './Routes/ownerRoutes.js';
// import bookingRouter from './Routes/bookingRoutes.js';

// Initialize Express App

const app =express()
try(


// Connect Database
await connectDB()
console.log('avfds')
const allowedOrigins = [
  "http://localhost:5173", // local
  "https://car-rental-wheat-zeta.vercel.app", // deployed frontend
];

console.log('sdfv')
// Middleware

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // ✅ include OPTIONS
    credentials: true,
  })
);

// ✅ Handle preflight requests properly
app.options("*", cors(
  {
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // ✅ include OPTIONS
    credentials: true,
  }
));



console.log('options')

app.use(express.json());
console.log('json')

app.get('/' , (req,res)=>res.send("Server is Running!"))
// app.use("/api/user", userRouter)
// app.use("/api/owner" ,ownerRouter)
// app.use("/api/bookings" ,bookingRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Server Running on port ${PORT}`))

)
catch (e) {
  console.log(e)
}

export default app;
