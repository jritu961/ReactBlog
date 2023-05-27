"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = process.env.SECRET_KEY || "USERAPI";
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = (authHeader && authHeader.split(" ")[1]) || "";
    if (token == null) {
        return res.sendStatus(401).json({ message: "please enter token" });
    }
    jsonwebtoken_1.default.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Something went wrong" });
        }
        else {
            req.body.id = decoded.id;
            next();
        }
    });
};
exports.default = authenticateToken;
