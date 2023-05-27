import axios from "axios";
import React, { useEffect, useState } from "react";
import isLogin from "../utils/isLogin";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Index = () => {
//   const naviagate=useNavigate()
//   const [like,setLike]=useState(false);
//   const [dislike,setDislike]=useState(false);
//  // const [dislike,setDisLike]=useState(null);
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const routeParams = useParams<string>();
//   const postid = routeParams.id;
//   const [data, setData] = useState("");
//   const [title, setTitle] = useState("");
//   const[postData,setPostData]=useState<any>({})
//   const [user,setUser]=useState(null)
//   const [comment, setComment] = useState([]);
//   let login =isLogin();
//   useEffect(() => {
//     const getPostData = async () => {
//       let id=data
//       let post: any = await axios.get(`http://localhost:5000/users/getContent/${id}`);
//       setUser(post.data.data.userId);
//       setData(post.data.data.content);
//       setTitle(post.data.data.title);
//       setPostData(post.data.data);
//     }
//     getPostData();
//   }, []);

//   const getCommData = async () => {
//     let id=data
//     let commentList: any = await axios.get(`http://localhost:5000/users/getAllComment/${id}`);
//     setComment(commentList.data.data);
    
//   };


  

//   useEffect(()=>{
//     getCommData();
//   },[])
//   const handleLike=async()=>{
//     if(!login){
//       naviagate('/signin')
//       return;
//     }
//     let id=data;
//     let islike= await axios.post(`http://localhost:5000/users/likes/${id}`,)
//     if(islike.data.data.includes(user)) {
//       setLike((prevState:any)=>{
//        return !prevState
//       })
//       setDislike(false)
//      }else{
//       setLike((prevState:any)=>{
//          return !prevState
//         })
//      }
//   }
//   const handledisLike=async(data:any)=>{
//     if(!login){
//       naviagate('/signin')
//       return;
//     }
//     let id=data
//     let disislike= await axios.post(`http://localhost:5000/users/DisLikePost/${id}`,{
//       postId:postid
//     })  
//     if(disislike.data.data.includes(user)) {
//      setDislike((prevState:any)=>{
//       return !prevState
//      })
//      setLike(false)
//     }
//     else{
//       setDislike((prevState:any)=>{
//         return !prevState
//        })
//     }
//   }



//   useEffect(()=>{
//     let likeflag = postData.likes?.includes(user);
//     console.log(likeflag)
//     if(likeflag){
//       setLike(true)
//     }
//     let dislikeflag = postData.dislikes?.includes(user);
//     if(dislikeflag){
//       setDislike(true)
//     }
//   },[postData])
  



//console.log(event.toISOString());

  return (
    <>
      {/* <div
        style={{
          backgroundColor: "rgb(25, 118, 210)",
          width: "100%",
          height: "60px",
          position: "absolute",
          top: "0",
        }}
      >
        <div style={{ marginLeft: "30px", color: "white" }}>LOGO</div>
        <div>
          <div style={{ marginRight: "30px", color: "white" }}>
            GO BACK
          </div>
          <div style={{ marginRight: "30px", color: "white" }}>
            HELP
          </div>
          <div style={{ marginRight: "30px", color: "white" }}>
            ABOUT US
          </div>
          <div style={{ marginRight: "30px", color: "white" }}>
            LOGOUT
          </div>
        </div>
      </div>
      <h1>{title}</h1>
      <div>
        <h1 style={{ width: "70vw", margin: "0 auto" }}>{title}</h1>
        <div
          style={{ width: "70vw", margin: "0 auto" }}
          dangerouslySetInnerHTML={{ __html: data }}
        ></div>
        <div
          style={{
            width: "70vw",
            margin: "0 auto",
            padding: "20px",
            fontSize: "large",
          }}
        >
        
        </div>
      
      </div> */}
    </>
  );
};

export default Index;
