import mongoose, { Schema, Document, Model } from 'mongoose';

//here we will define object userSchema which tell us which property we have  to store inside schema

const userSchema:Schema=new mongoose.Schema(
  {
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
      type:Number,
      required: true,
    },
    
    // timestamps:true this add two fiels inside schema createStaticHandler,modified
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
