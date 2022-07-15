const mongoose = require("mongoose")
const {Schema} = mongoose

const  product = new Schema({
    image:String,
    title:String,
    description:String,
    category:String,
    price:String,
    status:String
})
module.exports = mongoose.model("product", product);