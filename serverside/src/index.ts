import  express from "express"
import { Request, Response, Router,NextFunction} from "express";
import { upload } from "./utils/multer";
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"
import authenticateToken from "./utils/auth";
import env from "dotenv"
import { imageHandler } from "./utils/editorImage";
import routes from "./routes/userRoutes";
const router = express.Router();

// import  fileUpload from "express-fileupload"




const app = express();
env.config()


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use(
  cors({
     //origin:"http://localhost:3000",
   origin:true,
  // origin:"*",
    credentials:true,
   


  })

);

// app.use(fileUpload({
//   useTempFiles:true
// }))

app.use("/users", routes);





app.use("/createPoster",authenticateToken, upload.single("image"), routes);
app.use("/showImage", upload.single("image"), imageHandler);
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
const port = process.env.PORT;
const url=process.env.DATABASE;
console.log(url)
mongoose
  .connect('mongodb+srv://jritu:r9415710006A@cluster0.lcsbupf.mongodb.net/')
  .then(() => {
    app.listen(port, () => {
      console.log(`Server start on port ${port}`);
    });
  })
  .catch((error: string) => {
    console.log(error);
  });
