import React, { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { useParams } from "react-router-dom";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { log } from "console";


interface GreetingProps {
  name: string;
}
const Like = (props:GreetingProps) => {
  const token = localStorage.getItem("login");

  const { id } = useParams();
  const {likeCount, setLikeCount, dislikeCount, setdisLikeCount} = useContext(MyContext);

  const likePost = async () => {
    try {
      const islike = await axios.post(
        `http://localhost:5000/users/like/${id}`,
        {},
        {
          headers: {
            authorization: `bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      setLikeCount(islike.data.length);
    } catch (error: any) {
      console.log(error.response);
    }
    getLikesAndDislikes();
  };

  const disLikePost = async () => {
    try {
      const dislike = await axios.post(
        `http://localhost:5000/users/dislikepost/${id}`,
        {},
        {
          headers: {
            authorization: `bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      setdisLikeCount(dislike.data.length);
    } catch (error: any) {
      console.log(error.response);
    }
    getLikesAndDislikes();
  };

  const getLikesAndDislikes = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/users/likesanddislike/${id}`
      );
      console.log("response", response);
      setLikeCount(response.data.likes.length);
      setdisLikeCount(response.data.dislikes.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLikesAndDislikes();
    
  }, []);

  return (
    <div>
       <div>WELCOME {props.name} Please Like Our Post</div>
      <form>
        <ThumbUpOffAltIcon
          style={{ color: "blue" }}
          sx={{ fontSize: "50px" }}
          onClick={likePost}
        />
        {likeCount}
       
        <ThumbDownOffAltIcon
          style={{ color: "red" }}
          sx={{ fontSize: "50px" }}
          onClick={disLikePost}
        />
        {dislikeCount}
      </form>
    </div>
  );
};

export default Like;
