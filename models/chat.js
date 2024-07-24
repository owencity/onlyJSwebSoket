import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema(
    {
        chat: String,
        user: {
            id: {
                type: mongoose.Schema.Types.ObjectId, // 타입 명시
                ref: 'User',
            },
            name: String,
        },
    },
    { timestamps: true }
);

export default mongoose.model('Chat', chatSchema);