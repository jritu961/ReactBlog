import { v2 as cloudinary } from "cloudinary";
import {Request ,Response} from 'express'
cloudinary.config({
    cloud_name: "djmulfeid",
    api_key: "259759478917581",
    api_secret: "PPPiOb4uVF2U2ZsoMI6CKDt9nQ0",
  });

export const imageHandler=async (req:Request | any,res:Response)=>{
    try{
       let file= req.file.path
       const result = await cloudinary.uploader.upload(file)
       if(result){
        res.json(result?.url)
       }
       }catch(err:any){
        res.json(err.message)
       }
}
