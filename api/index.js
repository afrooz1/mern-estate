import express from "express";
import  dotenv  from "dotenv";
import mongoose from "mongoose"
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
   console.log("conntected to mongodb")

}).catch(()=>{
   console.log(err);
})

const app = express();
app.listen(3000, ()=>{
   console.log("Server is runningon port 3000")
})