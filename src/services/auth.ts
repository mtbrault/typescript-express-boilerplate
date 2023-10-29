import jwt from 'jsonwebtoken';
import config from '../config';
import type { JWTPayload } from '../models/auth';

export const generateToken = (payload: JWTPayload): string => jwt.sign(payload, config.JWT_SECRET, { expiresIn: '1d' });

export const decodeToken = (token: string): JWTPayload => jwt
  .verify(token, config.JWT_SECRET) as JWTPayload;
