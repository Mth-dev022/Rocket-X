import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectDB from '../db/db';
import authRoutes from '../routes/routesAuth'
import questionsRoutes from '../routes/routesQuestions';

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use('/api/auth', authRoutes);
app.use('/api/questions', questionsRoutes);

const PORT: number | string = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`Server is connected on port ${PORT}`);
});

export default app;
