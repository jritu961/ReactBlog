import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/index";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

import Imgone1 from "../../assets/Images/Imgone1.jpg";

import Comment from "../../pages/CommentMes";
import { EditorImg ,EditorContainer,EditorDescription,EditorLogo} from "../../styles/showContent";
const ShowContent = () => {
  const [data, setData] = useState("");
  const [title, setTitle] = useState("");
  const [postData, setPostData] = useState<any>({});
  const [description,setDescrition]=useState("")
  const { id } = useParams();

  const GetContent = async () => {
    const post = await axios.get(
      `http://localhost:5000/users/getContent/${id}`
    );

    setPostData(post.data.data);
    setData(post.data.data.content);
    setTitle(post.data.data.title);
    setDescrition(post.data.data.description);
  };

  useEffect(() => {
    GetContent();
  },[]);
  return (
    <>
    

      <Navbar />




      <EditorContainer>
        
     
      <EditorImg
          // style={{ width: "45vw",height:"40vw"}}
          dangerouslySetInnerHTML={{ __html: data }}
        ></EditorImg>
      
   
     
      
     
      
     
        </EditorContainer>
  <Comment/>
  
    
</>
  );
};

export default ShowContent;
