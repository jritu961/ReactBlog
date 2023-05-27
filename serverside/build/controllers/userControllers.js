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
exports.changePassword = exports.emailsend = exports.signin = exports.signup = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../models/user"));
const otp_1 = __importDefault(require("../models/otp"));
const nodeMailer = require("nodemailer");
const SECRET_KEY = "USERAPI";
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, phone } = req.body;
    const password = req.body.password.toString();
    try {
        const existUser = yield user_1.default.findOne({ email: email });
        if (existUser) {
            return res.status(203).json({ message: "User already exits" });
        }
        const hashPassword = yield bcrypt_1.default.hash(password, 10);
        const result = yield user_1.default.create({
            username: username,
            email: email,
            password: hashPassword,
            phone: phone,
        });
        const token = jsonwebtoken_1.default.sign({ email: result.email, id: result.id }, SECRET_KEY);
        res.status(201).json({ user: result, token: token, message: "User Created" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});
exports.signup = signup;
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const existUser = yield user_1.default.findOne({ email: email });
    if (!existUser) {
        return res.status(203).json({ message: "user not found" });
    }
    const matchpass = yield bcrypt_1.default.compare(password, existUser.password);
    if (!matchpass) {
        return res.status(203).json({ message: "Password is wrong" });
    }
    const token = jsonwebtoken_1.default.sign({ email: existUser.email, id: existUser.id }, SECRET_KEY);
    res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25992000000),
        httpOnly: true, //where we can add
    });
    res
        .status(201)
        .json({
        user: existUser,
        token: token,
        message: "User Signin Successfully",
    });
});
exports.signin = signin;
const mailer = (email, otp) => __awaiter(void 0, void 0, void 0, function* () {
    const nodemailer = require("nodemailer");
    let transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: false,
        auth: {
            user: "jritu961@gmail.com",
            pass: "efpjvexsvgnpjvyi", // generated ethereal password
        },
    });
    // send mail with defined transport object
    const mailOptions = {
        from: 'jritu961@gmail.com>',
        to: email,
        subject: "Hello✔",
        text: `${otp}`,
        html: `<p>Your Otp Code Is <br> <b>${otp}<b/></p>`, // html body
    };
    yield transporter.sendMail(mailOptions);
    // transporter.sendMail(mailOptions, (error: any, info: any) => {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log(`Email sent:`+ mailOptions);
    //   }
    // });
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview only available when sending through an Ethereal account
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});
const emailsend = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    try {
        const exitEmail = yield user_1.default.findOne({ email: email });
        if (exitEmail) {
            const otpCode = Math.floor(Math.random() * 10000 + 1);
            const otpData = new otp_1.default({
                email: email,
                code: otpCode,
                expireIn: new Date().getTime() + 300 * 1000,
            });
            const otpResponse = yield otpData.save();
            res
                .status(201)
                .json({
                success: true,
                message: "Suceess Plaese Check your email",
                otpCode,
            });
            mailer(email, otpCode);
        }
        else {
            res.status(200).json({ success: false, message: "Email does not exits" });
        }
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});
exports.emailsend = emailsend;
const changePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.status(200).json({message:"ok"})
    const { email, otpCode, password } = req.body;
    const dataExit = yield otp_1.default.findOne({ email: email, code: otpCode });
    if (dataExit) {
        const currentTime = new Date().getTime();
        const diff = dataExit.expireIn - currentTime;
        if (diff < 0) {
            return res.status(300).json({ message: "Otp expire" });
        }
        else {
            let user = yield user_1.default.findOneAndUpdate({ email: email }, { password: password }, { new: true });
            const hashPassword = yield bcrypt_1.default.hash(password, 10);
            user.password = hashPassword;
            const saved = yield user.save();
            return res.status(200).json({ message: "password changed", saved });
        }
    }
    else {
        return res.status(400).json({ message: "Invalid otp" });
    }
});
exports.changePassword = changePassword;
