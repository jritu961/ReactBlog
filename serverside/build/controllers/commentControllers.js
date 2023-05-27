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
exports.createComment = void 0;
const comment_1 = __importDefault(require("../models/comment"));
const poster_1 = __importDefault(require("../models/poster"));
const createComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const postId = req.params.id;
    const { comment, id } = req.body;
    console.log(id);
    let post = yield poster_1.default.findById({ _id: postId });
    console.log(post);
    if (post) {
        const creatComment = yield comment_1.default.create({
            comment: comment,
            userId: id,
            postId: req.params.id
        });
        return res.status(201).json(creatComment);
    }
    else {
        return res.status(403).json({ message: "post does not exit" });
    }
});
exports.createComment = createComment;
