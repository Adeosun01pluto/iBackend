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


export const get_Quiz = async (req, res)=> {
    const {year, pageNumber, subject}  = req.params
    const slicer = pageNumber * 20
    const firstSlice = slicer - 20 
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

