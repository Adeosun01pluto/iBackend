import { Jamb_Chemistry, Jamb_Economics, Jamb_English, Jamb_Mathematics, Jamb_Physics } from "../models/AtomicModel/AtomicModel.js"

// export const get_FullQuestions = async (req, res)=> {
//     // http://localhost:3001/api/v1?examType=jamb&year=2015&subject=accounts&pageNum=1&fields=question_text,year
//     try {
//         const queryObj = {...req.query}
//         const {pageNum , year} = queryObj
//         const {subject} = req.params
        
//         // const C_pageNum = pageNum ? pageNum : "1" 
//         const C_year =year ? year : "2014" 
//         const option = {
//             subject,
//             // pageNum:C_pageNum,
//             year:C_year 
//         }
//         let question = await QuestionPack.find(option)
//         // question = await QuestionPack.find(queryObj).select(fields || "")
//         // console.log(option)
//         res.status(200).json({
//             data_length: question.length,
//             data:question
//         })
//     } catch (error) {
//         res.status(404).json({
//             status: 'fail',
//             message: error
//         })
//         console.log(error)
//     }
// }


export const get_Mathematics = async (req, res)=> {
    try { 
        const questions = await Jamb_Mathematics.find()
        res.json({
            data:questions,
            data_Length: questions.length
        })
    } catch (error) {
        console.log(error)
    }
}
export const get_English = async (req, res)=> {
    try {    
        const questions = await Jamb_English.find()
        res.json({
            data:questions,
            data_Length: questions.length
        })
    } catch (error) {
        console.log(error)
    }
}
export const get_Chemistry = async (req, res)=> {
    try {    
        const questions = await Jamb_Chemistry.find()
        res.json({
            data:questions,
            data_Length: questions.length
        })
    } catch (error) {
        console.log(error)
    }
}
export const get_Physics = async (req, res)=> {
    try {    
        const questions = await Jamb_Physics.find()
        res.json({
            data:questions,
            data_Length: questions.length
        })
    } catch (error) {
        console.log(error)
    }
}
export const get_Economics = async (req, res)=> {
    try {    
        const questions = await Jamb_Economics.find()
        res.json({
            data:questions,
            data_Length: questions.length
        })
    } catch (error) {
        console.log(error)
    }
}
