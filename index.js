import express  from "express";
import { Configuration, OpenAIApi } from "openai"
import cors from "cors"
import mongoose from "mongoose";
import router from "./routes/AtomicRoutes/AtomicRoutes.js";
import userRoute from "./routes/AtomicRoutes/userRoute.js";
import postRoutes from "./routes/AtomicRoutes/postRoutes.js";
import { verifyToken } from "./middleware/atomicWare.js";
import bodyParser from "body-parser";
import * as dotenv from 'dotenv'
import * as fs from 'fs';
dotenv.config()

const PORT=3001
const DB_URI = "mongodb+srv://admin:admin@cluster1.s2gzblr.mongodb.net/Atomic?retryWrites=true&w=majority"
const API_KEYS = "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"

const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
// // connect to db
mongoose.connect(DB_URI)
.then(()=>{
    app.listen(PORT || 3001, ()=>{
        console.log("connected to db &&  Listening on port ", PORT || 3001)
    })
    
}).catch(err=>{
    console.log(err)
})


const openAi = new OpenAIApi(
    new Configuration({
      apiKey:API_KEYS,
    })
  )

// app.post("/completions", async (req, res)=>{
//   try {
//     const input = req.body;

//     const response = await openAi.createCompletion({
//       model: "gpt-3.5-turbo",
//       prompt: `${input}`,
//       temperature: 0, // Higher values means the model will take more risks.
//       max_tokens: 3000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
//       top_p: 1, // alternative to sampling with temperature, called nucleus sampling
//       frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
//       presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
//     });

//     res.status(200).send({
//       bot: response.data.choices[0].text
//     });

//   } catch (error) {
//     console.error(error)
//     res.status(500).send(error || 'Something went wrong');
//   }
// })
app.post("/completions", async (req, res)=>{
    const {input} = req.body
    console.log(input)
    try {
        const response = await openAi.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: input }],
            max_tokens:200
          })
          res.json(response.data)

        } catch (error) {
        console.log(error.message)
    }
})

app.use("/api/v1/jamb/questions", router)
// app.use("/api/v1/waec/questions", router)
// app.use("/api/v1", verifyToken, router)
app.use("/auth", userRoute)
// app.use("/posts", postRoutes)
app.use("/posts",verifyToken, postRoutes)
