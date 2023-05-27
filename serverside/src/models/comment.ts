import mongoose from "mongoose";

const commentShema = new mongoose.Schema(
  {
    comment: {
      type: String,
    },
    userId: {
      type: String,
    },
    postId:{
      type:mongoose.Schema.Types.ObjectId,
  },

  },
  { timestamps: true }
);

export default mongoose.model("comment", commentShema);
