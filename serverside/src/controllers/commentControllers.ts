import { Request,Response } from "express";
import { Express } from "express";
import commentShema from '../models/comment'
import userShema from '../models/comment'
import PosterSchema from "../models/poster"
import User from '../models/user'
import { ObjectId } from 'mongodb';

interface Comment{
  comment:string,
  userId:string,
  postId: ObjectId; 
}


export const createComment=async(req:Request,res:Response)=>{
    const postId=req.params.id;
    const {data,id} =req.body;
   
    let post=await PosterSchema.findById({_id:postId});
    
    if(post){
    const createComment=await commentShema.create({
      comment:data,
        userId:id,
        postId:req.params.id
    })
    
    return res.status(201).json(createComment)
    }
    else{
        return res.status(403).json({message:"post does not exit"})
    }
}


export const getComment=async(req:Request,res:Response)=>{
    const id= req.params.id;
    const {username}=req.body
   
    let postId=req.params.id;
    let comment:any=await commentShema.find({postId:id}).sort({_id:-1})
    let user;
    // console.log("comment",comment)
    if({id:comment.userId})
    user=await User.findOne({id:comment.userId})
    console.log(user)
    return res.json({
      message:'Comment list',
      data:comment,
      user:user?.username
    })
  
    
   
}



export const getAllComment=async(req:Request,res:Response)=>{
  try{  
   
    const id= req.params.id
   
    let findALLComment=await commentShema.find({postId:id})
    
        return res.status(200).json(findALLComment)
    
}
     catch(err){
        res.status(500).json({message:"server error"})
     }
}

export const getContent= async (req: Request, res: Response) => {
    try {
     let id =req.params.id
     
      let post =await PosterSchema.findById(id)
     
      return res.json({
        data:post
      })
      } catch (Error:Error|any) {
        res.status(403).json({message:"multer size is too long"})
       
        
      }

}
