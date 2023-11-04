import express from 'express';
import register from '../controllers/register';
const router = express.Router();

export const registerRoute = router.post('/register',register)