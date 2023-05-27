import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import userModel from "../models/user";
import otpSchema from "../models/otp";

const nodeMailer = require("nodemailer");
const SECRET_KEY = "USERAPI";


export interface User {
  email: string;
  password:string;

  
}


interface OtpData {
  email: string;
  
  code: number;
  expireIn: Date;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}


export const signup = async (req: Request, res: Response) => {
  const { username, email, phone } = req.body;
  const password=req.body.password.toString()
  try {
    const existUser = await userModel.findOne({ email: email });
    if (existUser) {
      return res.status(203).json({ message: "User already exits" });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const result = await userModel.create({
      username: username,
      email: email,
      password: hashPassword,
      phone: phone,
    });

    const token = jwt.sign({ email: result.email, id: result.id }, SECRET_KEY);
     
    res.status(201).json({ user: result, token: token, message: "User Created" });
  } catch (error) {
    
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const existUser = await userModel.findOne({ email: email });
  if (!existUser) {
    return res.status(203).json({ message: "user not found" });
  }
  const matchpass = await bcrypt.compare(password, existUser.password);
  if (!matchpass) {
    return res.status(203).json({ message: "Password is wrong" });
  }
  const token = jwt.sign(
    { email: existUser.email, id: existUser.id },
    SECRET_KEY
  );
  res.cookie("jwtoken", token, {
    expires: new Date(Date.now() + 25992000000),
    httpOnly: true, //where we can add
  });

  res
    .status(201)
    .json({
      user: existUser,
      token: token,
      message: "User Signin Successfully"
    });
};

const mailer = async (email: string, otp: number) => {
  const nodemailer = require("nodemailer");
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "jritu961@gmail.com", // generated ethereal user
      pass: "efpjvexsvgnpjvyi", // generated ethereal password
    },
  });

  // send mail with defined transport object
  const mailOptions = {
    from: 'jritu961@gmail.com>', // sender address
    to: email, // list of receivers
    subject:"Hello✔", // Subject line
    text: `${otp}`, // plain text body
    html: `<p>Your Otp Code Is <br> <b>${otp}<b/></p>`, // html bodyk
  };


   await transporter.sendMail(mailOptions)
 
};

export const emailsend = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const exitEmail = await userModel.findOne({ email: email });
    if (exitEmail) {
      const otpCode = Math.floor(Math.random() * 10000 + 1);
      const otpData = new otpSchema({
        email: email,
        code: otpCode,
        expireIn: new Date().getTime() + 300 * 1000,
      });
      const otpResponse= await otpData.save();
      res
        .status(201)
        .json({
          success: true,
          message: "Suceess Plaese Check your email",
          otpCode,
        });

      mailer(email, otpCode);
    } else {
      res.status(200).json({ success: false, message: "Email does not exits" });
    }
  } catch (error: Error | any) {
    res.status(400).json({ success: false, message: error.message });
  }
};



export const changePassword = async (req: Request, res: Response) => {
  // res.status(200).json({message:"ok"})
  try{
  const { email, otpCode, password } = req.body;
  const dataExit = await otpSchema.findOne({ email: email, code: otpCode });

  if (dataExit) {
    const currentTime = new Date().getTime();
    const diff = dataExit.expireIn - currentTime;
    if (diff < 0) {
      return res.status(300).json({ message: "Otp expire" });
    } else {
      let user:User |null= await userModel.findOneAndUpdate(
        { email: email },
        { password: password },
        { new: true }
      );
      if(!user){
        return res.status(401).json({message:"Email does not exits"})
      }
      const hashPassword = await bcrypt.hash(password, 10);
      user.password=hashPassword;
      const userWithSaveMethod = user as User & { save: () => Promise<User> };
      const saved = await userWithSaveMethod.save()
      return res.status(200).json({ message: "password changed", saved });
    }
  } else {
    return res.status(400).json({ message: "Invalid otp" });
  }
}
catch(err){
  console.log(err)
}
};
