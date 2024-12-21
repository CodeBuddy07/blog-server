import mongoose, { Schema, Document } from 'mongoose'

interface IUser extends Document {
  name: string
  email: string
  password: string
  role: 'admin' | 'user'
  isBlocked: boolean
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: (value: string) => /\S+@\S+\.\S+/.test(value),
        message: 'Please provide a valid email',
      },
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

const User = mongoose.model<IUser>('User', UserSchema)
export default User
