import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

mongoose.connect(process.env.MONGO)
   .then(() => {
      console.log("Connected to MongoDB");
   })
   .catch((err) => {
      console.error("MongoDB connection error:", err);
   });

const app = express();

app.use(express.json()); 

app.get("/", (req, res) => {
   res.send("Server is running!");
});
// ✅ Define routes before starting the server
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
// console.log("User Routes:", userRouter.stack);
// console.log("Auth Routes:", authRouter.stack);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
