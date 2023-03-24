import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import todoRouter from './router/todoRouter.js';
import userRouter from './router/userRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => res.send('Todo API V 0.0.1'));

app.use('/api', todoRouter);
app.use('/api', userRouter);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
