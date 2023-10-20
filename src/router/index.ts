import express from 'express';
import authRouter from './auth-router';

const router = express().use('/auth', authRouter);

export default router;
