import { object, string, number, date, InferType } from 'yup';

let loginSchema = object({
    
    email: string().email(),
    password:number().required().positive().integer(),
    
  });