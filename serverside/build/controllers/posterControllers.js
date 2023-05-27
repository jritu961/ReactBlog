"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updateData = exports.getPoster = exports.createPoster = void 0;
//all property of v2 will come in cloudinary variable
const cloudinary_1 = require("cloudinary");
const poster_1 = __importDefault(require("../models/poster"));
// Configuration
cloudinary_1.v2.config({
    cloud_name: "djmulfeid",
    api_key: "259759478917581",
    api_secret: "PPPiOb4uVF2U2ZsoMI6CKDt9nQ0",
});
const createPoster = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log('Ritu is hot')
    // console.log(req.body)
    try {
        const file = req.file;
        const { title, description } = req.body;
        const uploaded = yield cloudinary_1.v2.uploader.upload(file === null || file === void 0 ? void 0 : file.path);
        const PosterCreate = yield poster_1.default.create({
            title: title,
            description: description,
            image: uploaded.url
        });
        console.log("postcreate", PosterCreate);
        if (!PosterCreate) {
            console.log("27");
            throw new Error("Post not created");
        }
        else {
            console.log("30");
            const data = yield PosterCreate.save();
            return res.status(200).send(data);
        }
    }
    catch (err) {
        console.log("35");
        return res.status(500).send("ERROR_SERVER");
    }
});
exports.createPoster = createPoster;
const getPoster = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getData = yield poster_1.default.find({}).sort({ _id: -1 });
        if (!getData)
            throw new Error("Not found");
        res.status(200).send(getData);
    }
    catch (error) {
        res.status(404).json({
            error: error.message,
        });
    }
});
exports.getPoster = getPoster;
//update
// export const updateData=async(req:Request,res:Response)=>{
//   const id =req.params.id
//   const {title,image,description}=req.body
//   const changeData=await PosterSchema.findById(id);
//   if (!changeData) {
//     res.status(404).send('User not found');
//     return;
//   }
//   else{
//   changeData.title=title;
//   changeData.image=image;
//   changeData.description=description;
//   }
//   res.send(changeData);
// }
const updateData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   try {
    //     const dataToUpdate = req.body;
    //     const id = req.params.id;
    //     const post = await PosterSchema.findById(id);
    //     const keys: any =[];
    //     for (let key in dataToUpdate) {
    //       keys.push(key);
    //     }
    //     //console.log(keys);
    //     for (let i = 0; i < keys.length; i++) {
    //       post[keys[i]] = dataToUpdate[keys[i]];
    //     }
    //     let updated = await post.save();
    //     return res.json({
    //       message: "Post updated Successfully",
    //       Data: updated,
    //     });
    //   } catch (err: any) {
    //     res.json({
    //       message: err.message,
    //     });
    //   }
});
exports.updateData = updateData;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const findId = yield poster_1.default.findByIdAndRemove({ _id: id });
        return res.status(200).json({ message: "post deleted" });
    }
    catch (err) {
        // if(id)
        // {
        //   const deletedata=await PosterSchema.delete({})
        //   return res.status(200).json({message:"post deleted"})}
        // else{
        //   return res.status(403).json({message:"id not found"})
        // }
        //}
        console.log(err);
    }
});
exports.deletePost = deletePost;
