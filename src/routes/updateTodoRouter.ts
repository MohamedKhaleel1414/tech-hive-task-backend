import express from 'express';
import updateTodo from '../controllers/updateTodo';
import middleware from '../controllers/middleware';
const router = express.Router();

export const updateTodoRouter = router.patch('/updatetodo',middleware,updateTodo)