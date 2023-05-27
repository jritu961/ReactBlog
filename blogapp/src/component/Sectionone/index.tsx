import React from "react";
import axios from "axios";
import "../../App.css";
import { useState, useEffect } from "react";
import Typewriter from 'typewriter-effect';
import { SiMediamarkt } from 'react-icons/si';

import {
  PartOne,
  PartTwo,
  PartThree,
  DivOne,
  DivTwo,
  DivThree,
  DivBox,
  HeaderBox,
  PostBox,
  ReadMoreButton,
  BlogIconsReadDivCon,
  BlogContainer,
  Postcontainer,
  DecorIconLeft,
  DecorIconRight
} from "../../styles/SectionOne";
import { useNavigate } from "react-router-dom";
import bg1 from "../../assets/Images/bg1.jpg";
import bg2 from "../../assets/Images/bg2.jpg";
import bg3 from "../../assets/Images/bg3.jpg";
import bg4 from "../../assets/Images/bg4.jpg";
import bg5 from "../../assets/Images/bg5.jpg";
import isLogin from "../../utils/isLogin";
const BASE_URL=process.env.BASE_URL



function SectionOne() {
  const navigate = useNavigate();
  const [initialImg, changeImg] = useState(0);
  const [allImage, setallImage] = useState([bg1, bg2, bg3, bg4, bg5]);
  const [data, setData] = useState([]);
  // const [commentData, setComentData] = useState("");

  useEffect(() => {
    setInterval(() => {
      changeImg((initialImg) => (initialImg > 3 ? 0 : initialImg + 1));
    }, 2000);
  }, []);
  const getData = async (data: any) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/users/getPoster",
        data
      );
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  //getData();
  useEffect(() => {
    getData(data);
  }, []);

  const getEditorContent = (data: any) => {
    if (!isLogin()) {
      console.log("User is not login");
      // const res=await axios.get(`http://localhost:5000/users/getContent/${id}`)

      // console.log(res)
    } else {
      let id = data;
      navigate(`showContent/${id}`);
    }
  };

  return (
    <>
    < BlogContainer>
    <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"2px solid green "}}>
        <DecorIconLeft><SiMediamarkt size={130}/></DecorIconLeft>
      <DivOne>
        <PartOne>The blog</PartOne>
       
        <PartTwo>
         
        <Typewriter 
                options={{
                  autoStart: true,
                  loop: true,    
                  delay: 40,
                  strings: [
                    "Developer",
                    "Frontend",
                    "UIloper",
                  ],
                  
          
                }}
              />
              </PartTwo>
            
        
        <PartThree>
          The latest industry news,interkdfuh geiwur jkrhwier
        </PartThree>
      </DivOne>
      <DecorIconRight><SiMediamarkt size={130}/></DecorIconRight>
              </div>
      <DivTwo>
        <img
          src={allImage[initialImg]}
          alt="jkj"
          height="500px "
         
          width="1300px"
        ></img>
      </DivTwo>
<Postcontainer>
      <DivThree>
        {data.map((obj: any, index) => (
          <DivBox key={index}>
            <img src={obj?.image} height="250px"  alt="hh" style={{maxWidth:"400px"}}></img>

            <HeaderBox>{obj.title}</HeaderBox>
            <PostBox>{obj.description}</PostBox>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <ReadMoreButton
                onClick={() => {
                  getEditorContent(obj._id);
                }}
              >
                ReadMore....
                {/* <i className="fa-solid fa-arrow-right"></i> */}
              </ReadMoreButton>

              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  
                }}
              >
                <i className="fa-sharp fa-solid fa-thumbs-up" style={{}}>
                  {obj.likes.length}
                </i>
              </button>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                 
                }}
              >
                <i className="fa-sharp fa-solid fa-thumbs-down">
                  {obj.dislikes.length}
                </i>
              </button>
            </div>
            <BlogIconsReadDivCon></BlogIconsReadDivCon>
          </DivBox>
        ))}
      </DivThree>
      </Postcontainer>
      </BlogContainer>
    </>
  );
}

export default SectionOne;
