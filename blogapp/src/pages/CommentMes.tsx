import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Like from "../component/like"
import Modal from 'react-modal';


// import { CommentWrapper,Button,Heading1,Heading2, BoxComment} from 'styles/components/Comment'
import { useNavigate, useParams } from "react-router-dom";
import {
  CommentWrapper,
  Button,
  Heading1,
  Heading2,
  BoxComment,
} from "../../src/styles/comment";
import isLogin from "../utils/isLogin";
import { tokenToString } from "typescript";



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


Modal.setAppElement('#root');
const Comment = () => {
  let subtitle:any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [commentData, setComment] = useState([]);
  const { id } = useParams();
  const token = localStorage.getItem("login");

  const getCommentData = async () => {
    const res = await axios.get(
      `http://localhost:5000/users/getComment/${id}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );
    

    setComment(res.data.data);
    console.log(res)
    setUser(res.data.user)
  };

  useEffect(() => {
    getCommentData();
  }, []);

  const postCommentData = async (e: any) => {
    e.preventDefault();

    const data = e.target.comment.value;

    if (!isLogin()) {
      navigate("/signin");
    } else {
      const res = await axios.post(
        `http://localhost:5000/users/createComment/${id}`,
        { data: data },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
     
      getCommentData();
    }
  };
  return (
    <>
      <CommentWrapper onSubmit={postCommentData}>
        <Heading1>Leave a Comment</Heading1>
        <div style={{display:"flex",flexDirection:"column"}}>
        <BoxComment name="comment" />
      
        <Button type="submit">Submit Comment</Button>
      
      
        </div>
       
      </CommentWrapper>
      <button onClick={openModal} style={{backgroundColor:"#34aadc",borderStyle:"none",color:"#fff",borderRadius:"8px",padding:"10px"}}>Show Comments</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} style={{color:"#34aadc"}}>Comments</h2>
         
        <div>
        {commentData.map((obj: any, index) => {
          return <>
          <div style={{display:"flex",justifyContent:"space-between",margin:"10px"}}>
          <div>{obj.comment}</div>
         
          <div style={{color:"#34aadc",border:"1px solid black"}}>{user}</div>
          </div>
          </>;
        })}
       
      </div>
      <Like name={user}/>
        <button onClick={closeModal} style={{backgroundColor:"#34aadc",borderStyle:"none",color:"#fff",borderRadius:"8px",padding:"10px"}}>close</button>
       
      </Modal>
      
    </>
  );
};


export default Comment;
