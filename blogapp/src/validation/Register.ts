import * as yup from "yup"


export const registerSchema=yup.object().shape({
   
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.number().required('Password is required'),
    
})