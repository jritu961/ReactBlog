import express from "express";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const SECRET_KEY = process.env.SECRET_KEY || "USERAPI";

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  try{const authHeader = req.headers["authorization"];
  const token = (authHeader && authHeader.split(" ")[1]) || "";
  if (!token) {
     return res.status(401).json({ message: "please enter token" });
  }
else{
  jwt.verify(token, SECRET_KEY, (err, decoded:any) => {
    if (err) {
      return res.status(401).json({ message: "Something went wrong" });
    } else {
      req.body.id = decoded.id;
      next();
    }
  });
}}
catch(err){
  console.log(err)
}
};

export default authenticateToken;
