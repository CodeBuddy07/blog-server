import express from 'express'
import { registerSchema, loginSchema } from './authValidation'
import { login, register } from './authControllers'
import validateRequest from '../utils/validateRequest'

const router = express.Router()

router.post('/register', validateRequest(registerSchema), register)
router.post('/login', validateRequest(loginSchema), login)

export default router
