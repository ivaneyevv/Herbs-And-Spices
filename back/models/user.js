import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    nickName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    }
,{
    timestamps: true,
});

export default mongoose.model('User', UserSchema);