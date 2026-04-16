const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const ADMIN = {
    username: "admin",
    password: "1234"
}
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/feedbackDB")

const Feedback = require("./models/Feedback")

// Add feedback
app.post("/feedback", async (req,res)=>{
    const feedback = new Feedback(req.body)
    await feedback.save()
    res.json({message:"Feedback saved"})
})

// Get feedback
app.get("/feedback", async (req,res)=>{
    const data = await Feedback.find()
    res.json(data)
})

app.listen(5000,()=>{
    console.log("Server running on port 5000")
})
app.delete("/feedback/:id", async (req, res) => {
    try {
        const deleted = await Feedback.findByIdAndDelete(req.params.id)

        if (!deleted) {
            return res.status(404).json({ message: "Feedback not found" })
        }

        res.json({ message: "Deleted successfully" })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message })
    }
})

app.use(express.json())   // VERY IMPORTANT

app.post("/admin/login", (req, res) => {
    const { username, password } = req.body

    if (username === "admin" && password === "1234") {
        res.json({ success: true })
    } else {
        res.status(401).json({ success: false })
    }
})