import express from 'express';
import retrieveTodos from '../controllers/retrieveTodos';
import middleware from '../controllers/middleware';
const router = express.Router();

export const retrieveTodosRouter = router.get('/retrievetodos/:id',middleware,retrieveTodos)