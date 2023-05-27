import React, { useContext } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

import { MyContext } from "../App";
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginImg from "../assets/Images/loginImg.jpg";
// import { createContext,useEffect,useState} from "react";
// import 




// interface Logindata{

// }

import {
  MainContainer,
  Container,
  BoxOne,
  BoxTwo,
  BoxOneOne,
  BoxOneInput,
  BoxOneFour,
  BoxOneOneLeft,
  BoxOneOneRight,
  BoxOneFourLeft,
  BoxOneFourRight,
} from "../styles/Login";
import { type } from "os";


function Login() {
  const {state,dispatch}=useContext(MyContext)
  const {user,setUser}=useContext(MyContext)
  const navigate=useNavigate()



   
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  

  const getData=async(data:any)=>{
    const response=await axios.post("http://localhost:5000/users/signin",data)
    localStorage.clear()
    localStorage.setItem('login',response.data.token)
    
    if(response.data.message==="User Signin Successfully"){
      dispatch({type:"USER",payload:true})
      toast.success("User Signin Successfully")
      setTimeout(()=>{
        navigate("/")
      },2000)
      
      
    }
    else if(response.data.message==="Password is wrong"){
      toast.error("Password is wrong")
    }
    else if(response.data.message==="Email does not exits"){
      toast.error("Email does not exits")
    }
    else{
      toast.error("user not found")
    }
  }
   

  


  const otpSend=async(data:any)=>{
    navigate("/changePass")
    const response=await axios.post("http://localhost:5000/users//emailsend",data)
   
    if(!response.data.success){
      toast.error("Email does not exits")
    }
    else if(response.data.success){
      toast.success("OTP Send Successfully")
    }
    else{
      toast.warn("Please Enter Email")
    }
  }

  
  return (
    <MainContainer>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Container>
        <BoxOne onSubmit={handleSubmit(getData)}>
          <BoxOneOne>
            <BoxOneOneLeft>Login</BoxOneOneLeft>
            <BoxOneOneRight onClick={()=>{
              navigate("/signup")
            }}>Sign up</BoxOneOneRight>
          </BoxOneOne>
          <BoxOneInput placeholder="Email" {...register("email")}></BoxOneInput>
          <BoxOneInput placeholder="Password" {...register("password")}></BoxOneInput>

          <BoxOneFour>
            <BoxOneFourLeft onClick={handleSubmit(otpSend)}>Forget password?</BoxOneFourLeft>
            
            <BoxOneFourRight >Login</BoxOneFourRight>
          </BoxOneFour>
        </BoxOne>
        <BoxTwo>
          <img src={loginImg} alt="login" height="425px" width="100%"></img>
        </BoxTwo>
      </Container>
    </MainContainer>
  );
}

export default Login;
