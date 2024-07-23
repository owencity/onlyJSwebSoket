import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';


const app = express();
dotenv.config();
// Middleware 설정
app.use(cors());
app.use(express.json()); // JSON 본문을 파싱하기 위해 필요

console.log('DB URI:', process.env.DB);
// 데이터베이스 연결
const dbUri = process.env.DB;
if (!dbUri) {
    throw new Error('DB environment variable is not set');
}

mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to database"))
.catch((err) => console.error("Database connection error:", err));

export default app;
