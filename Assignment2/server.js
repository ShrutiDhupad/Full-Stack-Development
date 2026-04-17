const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

// serve frontend
app.use(express.static("public"))

// CONTACT FORM API
app.post("/contact", (req,res)=>{
    
    const {name,email,message} = req.body

    console.log(name,email,message)

    res.json({
        message:"Message received successfully"
    })

})

app.listen(3000,()=>{
    console.log("Server running on port 3000")
})