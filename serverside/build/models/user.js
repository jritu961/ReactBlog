"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//here we will define object userSchema which tell us which property we have  to store inside schema
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    //whenever we update the  password it will create empty token fiels in database"
    phone: {
        type: Number,
        required: true,
    },
    // timestamps:true this add two fiels inside schema createStaticHandler,modified
}, { timestamps: true });
exports.default = mongoose_1.default.model("User", userSchema);
