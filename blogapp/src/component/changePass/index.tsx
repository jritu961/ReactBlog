import React from 'react'
import axios from 'axios';
import { Button,ModalContainer,ModalDivOne,ModalDivTwo,Label,Input,InBox} from "../../styles/Modal"
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import forget from "../../assets/Images/forget.jpeg"

export interface Forgetdata{
    email:String,
    otpCode:number,
    password:number
}
export function ChangePass() {
const navigate=useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Forgetdata>();
    

      const changePassword=async(data:Forgetdata)=>{
         const response=await axios.patch("http://localhost:5000/users/changePassword",data)
          console.log(response)
       }
     
  return (
    <div>
    <ModalContainer>
     <ModalDivOne>
     <InBox>
      <form onSubmit={handleSubmit(changePassword)}>
      <h2>Forget password?</h2>
       <Label>Email</Label>
       <br></br>
       <Input {...register("email") }></Input>
       <br></br>
       <Label>Code</Label>
       <br></br>
      
       <Input {...register("otpCode")}></Input>
       <br></br>
       <Label>New Password</Label>
       <br></br>
       <Input {...register("password")}></Input>
       <br></br>
       <Button>Reset Password</Button>
       </form>
       </InBox>
     </ModalDivOne>
     <ModalDivTwo src={forget}></ModalDivTwo>
    </ModalContainer>
</div>
  )
}

