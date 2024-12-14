// const express=require('expre ss');
import express from "express"
import dotenv from "dotenv";
dotenv.config();
const app=express();
app.get('/',(req,res)=>{
    res.send({message:"welcome to ecomerce app"})
})
const port = process.env.PORT || 8080;

app.listen(8080, () => {
  console.log(`server running on ${port}`);
}); 