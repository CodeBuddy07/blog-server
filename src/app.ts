import express, { Request, Response } from 'express';
import authRoutes from './app/auth/authRoutes';
import errorMiddleware from './app/utils/customError';

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Blog server is running...');
});

app.use(errorMiddleware);

export default app;
