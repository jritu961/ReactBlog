"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = require("./utils/multer");
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const auth_1 = __importDefault(require("./utils/auth"));
// import  fileUpload from "express-fileupload"
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true
}));
// app.use(fileUpload({
//   useTempFiles:true
// }))
app.use("/users", userRoutes_1.default);
//to convert body req(controller) to json
// app.use(express.json());
// we define api
// app.get("/", (req: Request, res: Response) => {
//   res.send("hellochi ritu is good");
// });
app.use("/createPoster", auth_1.default, multer_1.upload.single("image"), userRoutes_1.default);
const port = process.env.PORT;
mongoose_1.default
    .connect("mongodb://0.0.0.0:27017/Ritu")
    .then(() => {
    app.listen(5000, () => {
        console.log(`Server start on port 5000`);
    });
})
    .catch((error) => {
    console.log(error);
});
