import Express from "express";
import {
    registerController,
    loginController
} from '../controllers/authController.js'

//router object
const router = Express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register', registerController)

//LOGIN || post
router.post('/login',loginController)


export default router