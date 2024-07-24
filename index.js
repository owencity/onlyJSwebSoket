import http from 'http';
import app from "./app.js";
import { Server } from 'socket.io';
import { initializeSocketIO } from './utils/io.js';

const httpServer = http.createServer(app);

export const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000"
  }
});

httpServer.listen(process.env.PORT, () => {
  console.log("서버가 포트에서 수신 중입니다:", process.env.PORT);
  initializeSocketIO(io);
});

// 즉시 실행 함수 제거, listen 호출 이후에 배치
// io.on('connection', async (socket) => {
//   console.log('클라이언트가 연결되었습니다:', socket.id);

//   // 소켓 이벤트 핸들러 추가 (필요에 따라 작성)
// });