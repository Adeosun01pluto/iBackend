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



const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
// // connect to db
mongoose.connect(process.env.DB_URI)
.then(()=>{
    app.listen(process.env.PORT || 3001, ()=>{
        console.log("connected to db &&  Listening on port ", process.env.PORT || 3001)
    })
    
}).catch(err=>{
    console.log(err)
})


const openAi = new OpenAIApi(
    new Configuration({
      apiKey:process.env.API_KEYS,
    })
  )

app.post("/completions", async (req, res)=>{
    const {input} = req.body
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
