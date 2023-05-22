import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userName:String,
    email:String,
    fullName:String,
    content: String,
    userID: String,
    imageUrl: { type: String },
    createdAt:{
        type: Date,
        default: new Date()
    },

})

export const postModel = mongoose.model("post", postSchema)