import express from 'express';
import createTodo from '../controllers/createTodo';
import middleware from '../controllers/middleware';
const router = express.Router();

export const createTodoRouter = router.post('/createtodo',middleware,createTodo)