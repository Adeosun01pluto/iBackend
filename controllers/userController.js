import bcrypt from "bcrypt"
import jwt  from "jsonwebtoken";
import { User } from "../models/AtomicModel/userModel.js"

export const getUser = async (req, res)=>{
    const {id} = req.params
    
    const user = await User.findById({_id: id})

    if(user){
        return res.json({user})
    }else{
        return res.json({message: 'Invalid Email'})
    }

}
export const userRegister = async (req, res)=>{
    const {formValues:{userName, password, email, fullName}, imageUrl} = req.body
    
    const user = await User.findOne({email: email})
    if(user){
        return res.json({message:"Email is already in use"})
    }
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({userName ,email ,password: hashedPassword, fullName, profilePic:imageUrl})

    await newUser.save()
    // console.log(userName)
    // res.json({message: "Account has been created successfully"})
    res.json(newUser)

}

export const userLogin = async (req, res)=>{
    const { password, email} = req.body
    const user = await User.findOne({email: email})
    
    // If the user doesn't exist or the password is incorrect, return an error
    if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }
    const token = jwt.sign({id: user._id}, "secret")
    res.json({token, userID: user._id})
     
}

// export const f_userLogin = async (req, res)=>{
//     const { firstName, lastName, email, emailVerified, idToken, photoUrl,refreshToken} = req.body
//     // console.log(idToken, refreshToken)     
// }


export const savedQuestion = async (req, res) =>{
    
    try {
        // const user = req.body.userID
        const question = req.body.questionID
        const user = await User.findById(req.body.userID)

        user.savedQuestions.push(question)
        await user.save()
        res.json({savedQuestions: user.savedQuestions})
    } catch (error) {
        console.log(error)
    }
}
// export const savedQuestion_ids = async (req, res) =>{
    
//     try {
//         const user = await User.findById(req.body.userID)
//         res.json({savedQuestions: user?.savedQuestions})
//     } catch (error) {
//         console.log(error)
//     }
// }

export const savedQuestions = async (req, res) =>{

    try {
        const {id} = req.params
        const user = await User.findById(id)
        // const user = await User.findById(req.body.userID)
        const savedQuestions = user.savedQuestions
        const result = await QuestionPack.find({
            _id : {$in: savedQuestions}
        })
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

