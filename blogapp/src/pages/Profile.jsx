import React, { useState } from "react";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PostContainer, BoxContainer, Header, Button } from "../styles/profile";
import createBlock from "../assets/Images/createBlog.jpg";
import { Input, ImgContainer } from "../styles/profile";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../component/Navbar";
import "../App.css";

import "react-toastify/dist/ReactToastify.css";

function Profile(props) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [body, setBody] = useState("");
  const [loader, setLoader] = useState(false);

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    let sendImage = await axios.post(
      "http://localhost:4000/imageurl",
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=<calculated when request is sent>",
        },
        withCredentials: true,
      }
    );
    return sendImage.data;
  };
  const token = localStorage.getItem("login");

  const getData = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);
    formData.append("content", body);

    try {
      setLoader(true);

      let res = await axios.post(
        "http://localhost:5000/createPoster",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: `bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      setLoader(false);
      toast.success("Add Posted Successfully");
      setTimeout(() => {
        navigate("/");
      }, 2000);
      // navigate('/showContent')
      console.log(res);
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };
  return (
    <PostContainer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar/>
      <BoxContainer onSubmit={handleSubmit(getData)}>
        <Header>ADD BLOG</Header>
        <div style={{ display: "flex" }}>
          <div>
            <Input
              {...register("title")}
              type="text"
              placeholder="Enter Blog Title Here.."
            />
            <Input
              {...register("image")}
              type="file"
              placeholder="Choose File"
            />

            <textarea
              rows={11}
              cols={30}
              style={{
                border: "1px solid black",
                borderRadius: "8px",
                marginLeft: "48px",
                outline: "none",
              }}
              {...register("description")}
              placeholder="Enter Description"
            ></textarea>
            {/* {loader ? <Loader /> : <Button>Post</Button>} */}
            {loader ? (
              <div className="loader">loading</div>
            ) : (
              <Button>Post</Button>
            )}
          </div>
          <div>
            <ImgContainer>
              <img
                src={createBlock}
                style={{
                  height: "500px",
                  width: "405px",
                  marginLeft: "140px",
                  borderRadius: "50% 0px 0px 50%",
                }}
              ></img>
            </ImgContainer>
          </div>
        </div>
      </BoxContainer>
      <div style={{ marginTop: "150px", width: "400px" }}>
        <Editor
          onEditorChange={(data) => {
            setBody(data);
          }}
          init={{
            height: 600,

            menubar: true,
            plugins: ["image"],
            images_upload_url: "postAcceptor.php",
            automatic_uploads: false,
            file_picker_types: "image",
            file_picker_callback: (cb) => {
              const input = document.createElement("input");
              input.setAttribute("type", "file");
              input.setAttribute("accept", "image/*");

              input.onchange = async () => {
                let file = input.files[0];
                let res = await uploadImage(file);

                var reader = new FileReader();

                reader.onload = () => {
                  cb(res, { title: file.name });
                };
                reader.readAsDataURL(file);
              };
              input.click();
            },

            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px margin-top :20px}",
          }}
        />
      </div>
    </PostContainer>
  );
}

export default Profile;
