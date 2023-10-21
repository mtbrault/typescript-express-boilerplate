import express from 'express';
import joi from 'joi';
import { login, register } from '../controller/auth';
import validate from '../middleware/validate';

const schema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export default express()
  .post('/login', validate(schema), login)
  .post('/register', validate(schema), register);
