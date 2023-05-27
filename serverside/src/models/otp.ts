import mongoose, { Schema, Document, Model } from 'mongoose';
// here we will define object userSchema which tell us which property we have  to store inside schema

const otpSchema:Schema=new mongoose.Schema(
  {
    code: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    expireIn: {
      type: String,
      required: true,
    },
    // timestamps:true this add two fiels inside schema createStaticHandler,modified
  },
  { timestamps: true }
);

export default mongoose.model("otp", otpSchema);
