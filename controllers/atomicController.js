import mongoose, { Schema } from "mongoose"
// import * as AtomicModel from "../models/AtomicModel/AtomicModel.js"
// { Jamb_Chemistry, Jamb_Economics, Jamb_English, Jamb_Mathematics, Jamb_Physics }


export const get_Questions = async (req, res)=> {
    const {year, pageNumber, subject}  = req.params
    const slicer = pageNumber * 10
    const firstSlice = slicer - 10 
    // const Subject = subject.charAt(0).toUpperCase() + subject.slice(1)
    try { 
        let Model;
        if (mongoose.models[subject]) {
        // Model already exists, use the existing one
        Model = mongoose.model(subject);
        } 
        else {
        // Model doesn't exist, create a new one
        const schema = new mongoose.Schema({
            question_text: [String],
            examType: String,
            year: String,
            subject: String,
            pageNum: String,
            explanation: String,
            explanationMsg: String,
            options: [],
            related_lessons: [String]
        });
        Model = mongoose.model(subject, schema);
        }
        const questions = await Model.find({ year}); // Query with the specific criteria
        res.json({
          data: questions.slice(firstSlice, slicer),
          data_Length: questions.length,
          firstSlice,
          slicer
        });
    } catch (error) {
        console.log(error)
    }
}





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
// export const get_English = async (req, res)=> {
//     const {year, pageNumber, subject}  = req.params
//     const slicer = pageNumber * 10
//     const firstSlice = slicer - 10 
//     try { 
//         const questions = await Jamb_English.find({year})

//         res.json({
//             data:questions.slice(firstSlice, slicer),
//             data_Length: questions.length,
//         })
//         console.log(subject)
//     } catch (error) {
//         console.log(error)
//     }
// }
// export const get_Chemistry = async (req, res)=> {
//     const {year, pageNumber, subject}  = req.params
//     const slicer = pageNumber * 10
//     const firstSlice = slicer - 10 
//     try { 
//         const questions = await Jamb_Chemistry.find({year})

//         res.json({
//             data:questions.slice(firstSlice, slicer),
//             data_Length: questions.length,
//         })
//         console.log(subject)
//     } catch (error) {
//         console.log(error)
//     }
// }
// export const get_Physics = async (req, res)=> {
//     const {year, pageNumber, subject}  = req.params
//     const slicer = pageNumber * 10
//     const firstSlice = slicer - 10 
//     try { 
//         const questions = await Jamb_Physics.find({year})

//         res.json({
//             data:questions.slice(firstSlice, slicer),
//             data_Length: questions.length,
//         })
//         console.log(subject)
//     } catch (error) {
//         console.log(error)
//     }
// }
// export const get_Economics = async (req, res)=> {
//     const {year, pageNumber, subject}  = req.params
//     const slicer = pageNumber * 10
//     const firstSlice = slicer - 10 
//     try { 
//         const questions = await Jamb_Economics.find({year})

//         res.json({
//             data:questions.slice(firstSlice, slicer),
//             data_Length: questions.length,
//         })
//         console.log(subject)
//     } catch (error) {
//         console.log(error)
//     }
// }

export const save_question = async(req, res) =>{
    const {id, subject, year} = req.params
    try {
        res.json({id, subject, year})
    } catch (error) {
        console.log(error.message)
    }
}
export const savedQuestions = async (req, res) =>{
    const {id} = req.body
}

