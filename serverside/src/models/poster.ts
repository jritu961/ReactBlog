import mongoose, { Schema, Document, Model } from "mongoose";
import comment from "./comment";
// here we will define object userSchema which tell us which property we have  to store inside schema

//scema help us to define model
const PosterSchema = new mongoose.Schema(
  {
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
    content: {
      type: String,
    },
    commentMsj:[{
      type:mongoose.Schema.Types.ObjectId,
    }],
    likes:[{
      type:mongoose.Schema.Types.ObjectId
    }],
    dislikes:[{
      type:mongoose.Schema.Types.ObjectId
    }],
    userId: {
      type: String,
    },
    createdAt:{
      type:Date
    }
  
    // timestamps:true this add two fiels inside schema createStaticHandler,modified
  },
  { timestamps: true }
);

export default mongoose.model("Poster", PosterSchema);
