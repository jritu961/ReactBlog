"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// here we will define object userSchema which tell us which property we have  to store inside schema
//scema help us to define model
const PosterSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    // timestamps:true this add two fiels inside schema createStaticHandler,modified
}, { timestamps: true });
exports.default = mongoose_1.default.model("Poster", PosterSchema);
