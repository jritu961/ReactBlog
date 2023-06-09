"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../utils/auth"));
const userControllers_1 = require("../controllers/userControllers");
const posterControllers_1 = require("../controllers/posterControllers");
const commentControllers_1 = require("../controllers/commentControllers");
const posterControllers_2 = require("../controllers/posterControllers");
const likeController_1 = require("../controllers/likeController");
// const authenticateToken = require("../utils/auth");
const router = express_1.default.Router();
router.post("/", posterControllers_1.createPoster);
router.post("/signup", userControllers_1.signup);
router.post("/signin", userControllers_1.signin);
router.post("/emailsend", userControllers_1.emailsend);
router.patch("/changePassword", auth_1.default, userControllers_1.changePassword);
router.post("/createComment/:id", auth_1.default, commentControllers_1.createComment);
router.get("/getAllPoster", auth_1.default, posterControllers_2.getPoster);
router.get("/getPoster", posterControllers_2.getPoster);
router.patch("/updatePoster/:id", auth_1.default, posterControllers_2.updateData);
router.delete("/deletePost/:id", auth_1.default, posterControllers_2.deletePost);
router.post("/like/:id", auth_1.default, likeController_1.likePost);
exports.default = router;
