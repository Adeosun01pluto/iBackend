import express from 'express'
import { get_Questions, get_Quiz, save_question } from '../../controllers/atomicController.js'
import { savedQuestions } from '../../controllers/userController.js'

const router = express.Router()


router.get("/:subject/:year/:pageNumber", get_Questions)
router.get("/quiz/:subject/:year/:number", get_Quiz)

router.get("/save-question/:subject/:year/:id", save_question)
router.post("/saved-questions", savedQuestions )


export default router
