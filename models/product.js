const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({

name:{
type:String,
required:true
},

price:{
type:Number,
required:true
},

category:{
type:String
},

description:{
type:String
},

image:{
type:String
},

rating:{
type:Number,
default:0
},

stock:{
type:Number,
default:10
},

createdAt:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("Product", productSchema)