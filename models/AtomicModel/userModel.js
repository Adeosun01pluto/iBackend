import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        minLength:2,
        maxLength:20,
    },
    fullName:{
        type:String,
        minLength:2,
        maxLength:20,
    },
    email:{
        type:String,
        unique:true
    },
    verified: {type:Boolean, default: false},
    password:{
        type:String,
        minLength:6,
        // select: false
    },
    savedQuestions: [String],
    imageUrl: { type: String }
})
export const User = mongoose.model("User", userSchema) 