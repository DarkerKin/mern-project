import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();
const app  = express();

app.get("/product",(req,res)=>{
    res.send("server is ready");
    const product = req.body;
    if(!product.name || !product.price || !product.image) return res.status(400).json({
        sucess : false,
        message: "Please provide all fields"
    })
})



app.listen(3000,()=>{
    connectDB();
    console.log("Server started at http://localhost:3000");
})
