import express from 'express'
import { signup, signin, googleAuth } from '../Controller/Auth.js'

const router = express.Router()
//Create a user
router.post('/signup', signup)

//Sign In
router.post('/signin', signin)

//Google Auth
router.post('/google', googleAuth)

export default router
