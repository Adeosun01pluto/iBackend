import express from 'express'
import { get_Questions, save_question } from '../../controllers/atomicController.js'
import { savedQuestions } from '../../controllers/userController.js'

const router = express.Router()


router.get("/:subject/:year/:pageNumber", get_Questions)
// router.get("/:subject/:year/:pageNumber", get_English)
// router.get("/:subject/:year/:pageNumber", get_Chemistry)
// router.get("/:subject/:year/:pageNumber", get_Physics)
// router.get("/:subject/:year/:pageNumber", get_Economics)
router.get("/save-question/:subject/:year/:id", save_question)
router.post("/saved-questions", savedQuestions )


export default router
