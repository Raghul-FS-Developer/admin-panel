const mongoose = require("mongoose")
const {Schema} = mongoose

const  users = new Schema({
    image:String,
    username:String,
    email:String,
    mobile:String,

    address:String,
    country:String,
    status:String,
    age:String    
})
module.exports = mongoose.model("user", users);