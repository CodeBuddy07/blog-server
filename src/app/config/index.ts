import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  port: process.env.PORT,
  database_url: process.env.MONGO_URI,
  jwt_secret: process.env.JWT_SECRET,
  node_env: process.env.NODE_ENV,
}
