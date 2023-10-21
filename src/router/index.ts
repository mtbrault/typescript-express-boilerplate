import express from 'express';
import authRouter from './auth-router';
import auth from '../middleware/auth';

const router = express().use('/auth', authRouter)
  .use(auth);

export default router;
