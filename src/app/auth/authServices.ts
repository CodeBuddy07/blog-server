import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { IRegisterUser, ILoginUser } from './authInterface'
import User from '../models/userModel'

export const registerUser = async (userData: IRegisterUser) => {
  const { name, email, password, role } = userData

  const existingUser = await User.findOne({ email })
  if (existingUser) {
    throw new Error('User already exists with this email')
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
  })

  return {
    _id: newUser._id,
    name: newUser.name,
    email: newUser.email,
  }
}

export const loginUser = async (userData: ILoginUser) => {
  const { email, password } = userData

  const user = await User.findOne({ email })
  if (!user) {
    throw new Error('Invalid credentials')
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    throw new Error('Invalid credentials')
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET as string,
    {
      expiresIn: '1d',
    },
  )

  return { token }
}
