// io 객체를 인자로 받는 함수 정의
export function initializeSocketIO(io) {
    io.on('connection', async (socket) => {
      console.log('클라이언트가 연결되었습니다:', socket.id);
  
      // 소켓 이벤트 핸들러 추가 (필요에 따라 작성)
    });
  }