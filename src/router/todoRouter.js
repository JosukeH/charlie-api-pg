import express from 'express';
import {
  createTodo, deleteTodo, getAllTodo, getTodosByUser,
} from '../controller/todoController.js';

const todoRouter = express.Router();

todoRouter.get('/todo', getAllTodo);
todoRouter.post('/todo', createTodo);
todoRouter.get('/todos/:id', getTodosByUser);
todoRouter.delete('/todos/:id', deleteTodo);
export default todoRouter;
