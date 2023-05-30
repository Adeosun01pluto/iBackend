import mongoose from "mongoose"

export const get_Syllabus = async (req, res)=> {
    const {subject}  = req.params
    try { 
        let Model;
        if (mongoose.models[subject]) {
        // Model already exists, use the existing one
        Model = mongoose.model(subject);
        } 
        else {
        // Model doesn't exist, create a new one
        const schema = new mongoose.Schema({
            topic: String,
            subTopics: [{}],
            link:String
        });
        Model = mongoose.model(subject, schema);
        }
        const syllabus = await Model.find(); // Query with the specific criteria
        res.json({
          data: syllabus,
          subject
        });
    } catch (error) {
        console.log(error)
    }
}
