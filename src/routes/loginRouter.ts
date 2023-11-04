import express from 'express';
import login from '../controllers/login';
const router = express.Router();

export const loginRoute = router.post('/login',login)