import mongoose, { Mongoose } from "mongoose";


export const schemaModule = () => {
const userScema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "User must type name"],
        unique: true,
    },
    token: {
        type: String,
    },
    online: {
        type: Boolean,
        default: false,
    },
})
}

