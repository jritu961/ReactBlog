import express, { Router } from "express";
import authenticateToken from "../utils/auth";
import {
  signin,
  signup,
  emailsend,
  changePassword,
} from "../controllers/userControllers";
import { createPoster } from "../controllers/posterControllers";

import {createComment,getComment,getAllComment,getContent} from "../controllers/commentControllers"
import { getPoster,updateData,deletePost } from "../controllers/posterControllers";
import {likePost,DisLikePost, getLikesAndDislikes} from "../controllers/likeController"
// const authenticateToken = require("../utils/auth");

const router = express.Router();
router.post("/",createPoster);
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/emailsend", emailsend);
router.patch("/changePassword", changePassword);
router.post("/createComment/:id",authenticateToken,createComment)
router.get("/getAllPoster",authenticateToken,getPoster)
router.get("/getPoster", getPoster);
router.patch("/updatePoster/:id",authenticateToken, updateData);
router.delete("/deletePost/:id",authenticateToken, deletePost);
router.get("/getComment/:id",authenticateToken,getComment)
router.get("/getAllComment/:id",authenticateToken,getAllComment)
router.get("/getContent/:id",getContent)
router.post("/like/:id",authenticateToken,likePost);
router.post("/dislikepost/:id",authenticateToken,DisLikePost)
router.get("/likesanddislike/:id", getLikesAndDislikes);

  
export default router;