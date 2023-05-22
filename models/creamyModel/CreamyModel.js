import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";
import bcrypt, { genSalt } from 'bcrypt'

const Schema = mongoose.Schema


// user Schema
const user_Schema = new Schema({
    email :{
        type: String,
        unique: true,
        require: [true, "Please enter an email"],
        lowercase: true,
        validate: [isEmail, 'please enter a valid email']
    },
    password: {
        type: String,
        require: [true, "please enter a password"],
        minlength: [6, "Minimum length is 6 characters"] ,
    }


}, {timestamps: true})

// fire a function before saving user
user_Schema.pre("save", async function (next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

// static method to login user
// user_Schema.statics.login = async function(email, password){
//     const user = await this.findOne({email})
//     if(user){
//         const auth =await bcrypt.compare(password, user.password)
//         if(auth){
//             return user;
//         }
//         throw Error("incorrect password")
//     }
//     throw Error("incorrect email")
// }

const User = mongoose.model('user', user_Schema )
export default User









// // User Schema
// export const User_Schema = new Schema({
//     first_name:{
//         type: String,
//         require: true
//     },
//     last_name:{
//         type: String,
//         require: true
//     },
//     user_name:{
//         type: String,
//         require: true
//     },
//     phone :{
//         type: Number,
//         require: true
//     },
//     email :{
//         type: String,
//         unique: true,
//         require: true,
//         lowercase: true
//     },
//     address : {
    //         type: String
    //     },
    //     password: {
        //         type: String,
        //         require: true,
        //         minlength: 6 
        //     },
        //     todo: [ String ],
        //     posts : [
            //         {
                //             title:String,
                //             message:String,
//             like_count: {
//                 type:Number,
//                 default:0
//             },
//             selected_file: String,
//             created_at: {
    //                 type: Date,
    //                 default: new Date()
//             },
//             creator:String
//         }
//     ],
//     saved_posts : [
//         {
    //             title:String,
//             message:String,
//             like_count: {
    //                 type:Number,
    //                 default:0
    //             },
    //             selected_file: String,
    //             saved_at: {
        //                 type: Date,
        //                 default: new Date()
        //             },
        //             creator:String
        //         }
        //     ]
        
        // }, {timestamps: true})
        
        // // User Schema
        // export const Register_Schema = new Schema({
        
        //     first_name:{
        //         type: String,
        //         require: true
        //     },
        //     last_name:{
        //         type: String,
        //         require: true
        //     },
        //     user_name:{
        //         type: String,
        //         require: true
        //     },
        //     phone :{
        //         type: Number,
        //         require: true
        //     },
        //     email :{
        //         type: String,
        //         unique: true,
        //         require: true,
        //         lowercase: true
        //     },
        //     address : {
        //         type: String
        //     },
        //     password: {
        //         type: String,
        //         require: true,
        //         minlength: 6 
        //     }
        
        // }, {timestamps: true})