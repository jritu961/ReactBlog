import { Request, Response } from "express";

import PosterSchema from "../models/poster";


export const likePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    const userid = req.body.id;

    const exitPost: any = await PosterSchema.findById(postId);

    if (!exitPost) throw new Error("Post doesn't exists");

    if (exitPost.likes.includes(userid)) throw new Error("Already liked");

    exitPost.likes.push(userid);
    exitPost.dislikes.remove(userid);

    await exitPost.save();

    res.status(200).send(exitPost.likes);
  } catch (err: any) {
    res.status(403).json({ message: err.message || "Server Error" });
  }
};

export const DisLikePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    const userid = req.body.id;
    const exitPost: any = await PosterSchema.findById(postId);
    if (!exitPost) {
      return res.status(404).send({ error: true, msg: "Post Dont Exist" });
    } else {
      if (!exitPost.dislikes.includes(userid)) {
        exitPost.likes.remove(userid);
        exitPost.dislikes.push(userid);
        await exitPost.save();
        return res.status(200).send(exitPost.dislikes);
      } else {
        res.status(403).json({ message: "Already Dislikes" });
      }
    }
  } catch (err) {
    res.status(500).json({ message: "server errror" });
  }
};

export const getLikesAndDislikes = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;

    const postData = await PosterSchema.findById(postId);

    if (!postData) throw new Error("Post not found");

    res.status(200).send(postData);
  } catch (error) {
    res.status(404).json({ message: error || "Page not found" });
  }
};
