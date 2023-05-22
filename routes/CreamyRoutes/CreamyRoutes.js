import express from 'express'
import {signup_get, signup_post, login_get, login_post, get_user} from "../../controllers/authController.js"
const router = express.Router()

// 
router.get('/signup', signup_get)
// 
router.post('/signup', signup_post)

// Get User Login 
router.get('/login', login_get)

// Post User Login 
router.post('/login', login_post)

// Take  User to dashboard 
router.get('/dashboard', get_user)

export default router
