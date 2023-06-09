"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const commentShema = new mongoose_1.default.Schema({
    comment: {
        type: String,
    },
    userId: {
        type: String,
    },
    postId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("comment", commentShema);
