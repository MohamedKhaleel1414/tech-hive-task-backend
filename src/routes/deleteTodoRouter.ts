import express from 'express';
import deleteTodo from '../controllers/deleteTodo';
import middleware from '../controllers/middleware';
const router = express.Router();

export const deleteTodoRouter = router.delete('/deletetodo',middleware,deleteTodo)