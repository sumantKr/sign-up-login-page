import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    gender:String,
    hobbies:String,
    createdAt:{
        type:Date,
        default:new Date()
    }
})

const User=mongoose.model('userSchema',userSchema)
export default User;

