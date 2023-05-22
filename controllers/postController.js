import { postModel } from "../models/AtomicModel/postModel.js"
import { User } from "../models/AtomicModel/userModel.js"

export const createPost = async (req, res)=>{
    const {content, userID, imageUrl} = req.body
    const {userName, email, fullName} = await User.findById(userID)
    const post = new postModel({ content, userID, userName, email, imageUrl, fullName})
    await post.save()
    res.json({postDetails:{fullName, userName, email, post}})
}
export const getPosts = async (req, res)=>{
    const posts = await postModel.find()
    // console.log(posts)
    res.json(posts)
}
export const getPostById = async (req, res)=>{

    res.json({mssg : "Reached"})
}