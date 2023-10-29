import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import type { JWTPayload } from 'models/auth';
import { decodeToken } from '../services/auth';

export default (req: Request & { user: JWTPayload }, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Missing token' });
    return;
  }

  try {
    const payload = decodeToken(token);
    req.user = payload;
  } catch (error) {
    res.status(StatusCodes.FORBIDDEN).json({ message: 'Invalid token' });
    return;
  }

  next();
};
