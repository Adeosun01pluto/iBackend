import express from 'express'
import { get_Syllabus } from '../../controllers/coursesController.js'

const router = express.Router()


router.get("/:subject", get_Syllabus)


export default router
