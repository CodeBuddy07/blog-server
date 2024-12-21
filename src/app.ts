import express, { Request, Response } from 'express'
import authRoutes from './app/auth/authRoutes'
import errorMiddleware from './app/utils/customError'
import blogRouter from './app/blogs/blogRoutes'
import adminRouter from './app/admin/adminRoutes'

const app = express()
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/blogs', blogRouter)
app.use('/api/admin', adminRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Blog server is running...')
})

app.use(errorMiddleware)

export default app
