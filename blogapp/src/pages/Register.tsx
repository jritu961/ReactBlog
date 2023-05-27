import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import signup from "../assets/Images/signup.jpg";
import { IRegister } from "../interfaces/register";
import { useSelector, useDispatch } from "react-redux";
import { combine } from "../Redux/counterSlice";

import {
  BoxOneOne,
  BoxOneInput,
  BoxOneFour,
  BoxOne,
} from "../styles/Login";


import {
  LoginRoute,
  SignUp,
  MainContainer,
  BoxOneFourLeft,
  BoxOneFourRight,
  BoxTwo,
  Container
} from "../styles/Signup";
import { useState } from "react";




const REACT_APP_BASE_URL=process.env.REACT_APP_BASE_URL 
console.log(`hdsh`,process.env.REACT_APP_BASE_URL)

const LoginSchema = yup.object().shape({
  username: yup
    .string()
    .required("username is required")
    .min(3, "minimum 3 value are required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required")
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "not a valid email"
    ),
  password: yup.number().required("Password is required"),
  phone: yup.number().required("username is required"),
});

const Login = () => {
  const navigate = useNavigate();

  //   const combine=useSelector((state:any)=>{
  //     return state.reducerFns.combine
  // })
  const dispatch = useDispatch();
 

  const getData = async (data: any) => {
    
    const response = await axios.post(
      "http://localhost:5000/users/signup",
      data
    );
    if (response.data.message === "User already exits") {
      toast.warning("User already exits");
    } else if (response.data.message === "User Created") {
      toast.success("SignUp Successfully");
    } else {
      toast.error("Something went wrong");
    }
  
    dispatch(combine(data));
  };

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<IRegister>({ resolver: yupResolver(LoginSchema) });

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
        <BoxTwo>
          <img src={signup} alt="login"  style={{width:"100%",height:"351px"}}></img>
        </BoxTwo>
        <BoxOne onSubmit={handleSubmit(getData)}>
          <BoxOneOne>
          <SignUp
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign up
            </SignUp>
            <LoginRoute style={{marginLeft:"300px;"}}
              onClick={() => {
                navigate("/signin");
              }}
            >
              Login
            </LoginRoute>
           
          </BoxOneOne>
          <BoxOneInput
            placeholder="Username"
            type="text"
            {...register("username")}
          ></BoxOneInput>
          {errors.username && <p>{errors.username.message}</p>}
          <BoxOneInput
            placeholder="Email"
            type="email"
            {...register("email")}
          ></BoxOneInput>
          {errors.email && <p>{errors.email?.message}</p>}
          <BoxOneInput
            placeholder="Password"
            type="text"
            {...register("password")}
          ></BoxOneInput>
          {errors.password && <span>This field is required</span>}
          <BoxOneInput
            placeholder="Phone"
            type="text"
            {...register("phone")}
          ></BoxOneInput>
          {errors.phone?.message && <span>This field is required</span>}
          <BoxOneFour>
            <BoxOneFourRight>SignUp</BoxOneFourRight>
          </BoxOneFour>
        </BoxOne>
      </Container>
    </MainContainer>
  );
};

export default Login;
