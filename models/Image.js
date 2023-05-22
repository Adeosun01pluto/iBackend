import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    data:{
        type:String
    }
})
export const Image = mongoose.model("image", imageSchema) 