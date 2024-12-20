import { Request, Response } from 'express';
import { loginUser, registerUser } from './authServices';
import catchAsync from '../utils/catchAsync';



export const register = catchAsync(async (req: Request, res: Response) => {
  const user = await registerUser(req.body);
  res.status(201).json({
    success: true,
    message: 'User registered successfully',
    statusCode: 201,
    data: user
  });
});

export const login = catchAsync(async (req: Request, res: Response) => {
  const token = await loginUser(req.body);
  res.status(200).json({
    success: true,
    message: 'Login successful',
    statusCode: 200,
    data: token
  });
});
