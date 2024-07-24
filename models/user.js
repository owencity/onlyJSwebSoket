// user.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User must type name"],
        unique: true,
    },
    token: { // 필요에 따라 수정 또는 제거
      type: String,
      // expiresAt: Date, // 유효 기간 추가 (선택 사항)
    },
    online: { // 실시간 상태 관리는 Socket.IO 등을 사용 (선택 사항)
      type: Boolean,
      default: false,
    },
});

export default mongoose.model("User", userSchema);