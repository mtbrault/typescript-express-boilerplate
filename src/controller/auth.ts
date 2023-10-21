import { Request, Response } from 'express';

export const login = async (req: Request, res: Response): Promise<Response> => {
  console.log(req.body);
  return res.status(200).json({ message: 'User logged in' });
};

export const register = async (req: Request, res: Response): Promise<Response> => {
  console.log(req.body);
  return res.status(201).json({ message: 'User created' });
};
