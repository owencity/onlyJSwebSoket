// app.js
import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();

// Middleware 설정
app.use(cors());
app.use(express.json()); 

console.log('DB URI:', process.env.DB);

// 데이터베이스 연결
const dbUri = process.env.DB;
if (!dbUri) {
    throw new Error('DB environment variable is not set');
}

mongoose.connect(dbUri)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Database connection error:", err));



export default app; // default export로 변경
    