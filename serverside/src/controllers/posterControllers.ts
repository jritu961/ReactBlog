import express from "express";
import path from "path";


import { v2 as cloudinary } from "cloudinary";
import { Request, Response } from "express";
import multer, { Multer } from "multer";
interface UploadedFile extends Express.Multer.File {}


import PosterSchema from "../models/poster";
import { FileReadResult } from "fs/promises";
// Configuration
cloudinary.config({
  cloud_name: "djmulfeid",
  api_key: "259759478917581",
  api_secret: "PPPiOb4uVF2U2ZsoMI6CKDt9nQ0",
});

export const createPoster = async (req: Request, res: Response) => {
  try {
    const file= req.file;
    const { title, description, content } = req.body;
    let uploaded
    if(file?.path)
     uploaded = await cloudinary.uploader.upload(file?.path);

    const PosterCreate = await PosterSchema.create({
      title: title,
      description: description,
      image: uploaded?.url,
      content: content,
    });

   
    if (!PosterCreate) {
      throw new Error("Post not created");
    } else {
     
      const data = await PosterCreate.save();
      return res.status(200).send(data);
    }
  } catch (error: unknown) {
    if (typeof error === "string") {
      // handle string erro
    } else if (typeof error === "number") {
      // handle number error
    } else {
      // handle other error
    }
  }
};

export const getPoster = async (req: Request, res: Response) => {
  try {
    const getData = await PosterSchema.find({}).sort({ _id: -1 });
    if (!getData) throw new Error("Not found");
    res.status(200).send(getData);
  } catch (error: unknown) {
    if (typeof error === "string") {
      // handle string error
    } else if (typeof error === "number") {
      // handle number error
    } else {
      // handle other error
    }
  }
};

export const updateData = async (req: Request, res: Response) => {};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const findId = await PosterSchema.findByIdAndRemove({ _id: id });

    return res.status(200).json({ message: "post deleted" });
  } catch (err) {
    console.log(err);
  }
};
