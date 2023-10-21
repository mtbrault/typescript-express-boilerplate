import express from 'express';
import { login, register } from '../controller/auth';

export default express()
  .post('/login', login)
  .post('/register', register);
