import express  from "express";

import { savedQuestion,getUser, savedQuestions, userLogin, userRegister,  } from "../../controllers/userController.js";
const router = express.Router()

router.get("/:id", getUser)
router.post("/register", userRegister)
router.post("/login", userLogin)
// router.post("/f_login", f_userLogin)
router.put("/save", savedQuestion)
// router.get("/savedQuestions/ids",savedQuestion_ids )
router.get("/savedQuestions/:id", savedQuestions )
export default router