import express from "express";
import {signUpController, loginController, userDetailsController} from "../controllers/userControllers.js"
import {createProfileController, updateProfileController} from "../controllers/profileControllers.js"

const router = express.Router()


router.post("/signup", signUpController)
router.post("/login", loginController)
router.get("/user-details/:userId", userDetailsController)
router.post("/create-profile/:userId", createProfileController)
router.put("/update-profile/:userId", updateProfileController)


export default router