import express from 'express';
import {
  createUser, getAllUser, getUserById, updateUser,
} from '../controller/userController.js';

const userRouter = express.Router();

userRouter.get('/user', getAllUser);
userRouter.get('/user/:id', getUserById);
userRouter.post('/user/', createUser);
userRouter.put('/user/:id', updateUser);

export default userRouter;
