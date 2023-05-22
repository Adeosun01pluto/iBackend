import express from 'express'
import { get_Chemistry, get_Economics, get_English, get_Mathematics, get_Physics } from '../../controllers/atomicController.js'

const router = express.Router()

router.get("/mathematics/:year", get_Mathematics)
router.get("/english/:year", get_English)
router.get("/chemistry/:year", get_Chemistry)
router.get("/physics/:year", get_Physics)
router.get("/economics/:year", get_Economics)

export default router
