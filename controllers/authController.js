import User from '../models/creamyModel/CreamyModel.js'
import jwt  from 'jsonwebtoken'
import bcrypt from "bcrypt"

const handleError = (err) =>{
    // console.log(err.message, err.code)
    let errors = {email : '', password :''}
    // duplicate error code
    if(err.code === 11002){
        errors.email = "that email is already registered"
        return errors
    }
    // validation error
    if(err.message.includes("user validation failed")){
        Object.values(err.errors).forEach(({properties}) =>{
         errors[properties.path] = properties.message
        })
    }
    return errors
}

const maxAge = 3*24*60*60

// create jwt
const createToken = (id)=>{
    return jwt.sign({ id }, "Pluto loves rachael", {
        expiresIn: maxAge
    });
}

export const signup_get = (req, res)=>{
    res.send("signup")
}
// 
export const login_get = (req, res)=>{

    res.send("login")
}

// 
export const signup_post = async (req, res)=>{

    const {email, password} = req.body
    try {
        const user = await User.create({email, password})
        const token =  createToken(user._id)
        res.cookie('jwt' , token, { httpOnly : true, maxAge:maxAge * 1000})
        res.status(201).json({user:user._id})
    
    } catch (err) {        
        const errors = handleError(err) 
        res.status(400).json({errors: errors})
    }

}
export const login_post = async (req, res)=>{
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(user){
        const token =  createToken(user._id)
        res.cookie('jwt' , token, { httpOnly : true, maxAge:maxAge * 1000})
        const auth =await bcrypt.compare(password, user.password)
        if(auth){
            res.status(200).json({user : user._id})
        }
        else{
            res.status(404).json({err: 'incorrect password'})
        }
    }else{
        res.status(404).json({err: 'no email found'})
    }   
}

export const get_user = async (req, res)=>{
    const token = req.cookies.jwt
    if(token){
        // const decoded = atob(token.split('.')[1])
        jwt.verify(token, "Pluto loves rachael",async (err, decodedToken)=>{
            if(err){
                console.log(err)
            }else{
                const user = await User.findById(decodedToken.id)
                res.json(user.email) 
                // console.log(decodedToken.id)
                console.log(user)
            }
        })
    }
    else{
        res.json({msg: "invalid token"})
    }
    // const user = await User.find({})
    

    // try {
    //     const user = await User.login(email, password )
    //     res.status(200).json({user : user._id})
    // } catch (error) {
    //     console.log(error)
        
    // }
}