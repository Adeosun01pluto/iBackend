import mongoose from "mongoose";

// Jamb Mathematics
const Jamb_Mathematics_Schema = new mongoose.Schema({
    question_text: [String],
    examType: String,
    year: String,
    subject: String,
    pageNum: String,
    explanation: String,
    explanationMsg: {String,},
    options:[{String}],
    related_lessons: [String]
})
export const Jamb_Mathematics = mongoose.model("mathematics", Jamb_Mathematics_Schema)

// Jamb English Questions
const Jamb_English_Schema = new mongoose.Schema({
    question_text: [String],
    examType: String,
    year: String,
    subject: String,
    pageNum: String,
    explanation: String,
    explanationMsg: {String,},
    options:[{String}],
    related_lessons: [String]
})
export const Jamb_English = mongoose.model("english", Jamb_English_Schema)


// Jamb Physics Questions
const Jamb_Physics_Schema = new mongoose.Schema({
    question_text: [String],
    examType: String,
    year: String,
    subject: String,
    pageNum: String,
    explanation: String,
    explanationMsg: {String,},
    options:[{String}],
    related_lessons: [String]
})
export const Jamb_Physics = mongoose.model("physics", Jamb_Physics_Schema)


// Jamb Chemistry Questions
const Jamb_Chemistry_Schema = new mongoose.Schema({
    question_text: [String],
    examType: String,
    year: String,
    subject: String,
    pageNum: String,
    explanation: String,
    explanationMsg: {String,},
    options:[{String}],
    related_lessons: [String]
})
export const Jamb_Chemistry = mongoose.model("chemistry", Jamb_Chemistry_Schema)


// Jamb Economics Questions
const Jamb_Economics_Schema = new mongoose.Schema({
    question_text: [String],
    examType: String,
    year: String,
    subject: String,
    pageNum: String,
    explanation: String,
    explanationMsg: {String,},
    options:[{String}],
    related_lessons: [String]
})
export const Jamb_Economics = mongoose.model("economics", Jamb_Economics_Schema)