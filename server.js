const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(express.static("public"))
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/amazonClone")

const User = require("./models/User")
const Product = require("./models/product")

// SIGNUP API
app.post("/signup", async (req,res)=>{
const {username,password} = req.body
const user = new User({username,password})
await user.save()

res.json({
success:true,
message:"User registered"
})
})

// LOGIN API
app.post("/login", async (req,res)=>{
const {username,password} = req.body

const user = await User.findOne({username,password})

if(user){
res.json({success:true,message:"Login successful"})
}
else{
res.json({success:false,message:"Invalid credentials"})
}
})

app.listen(3000,()=>{
console.log("Server running on port 3000")
})