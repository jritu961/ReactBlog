export const Reducer=(state:any,action:any)=>{
   if(action.type==="USER")
   return action.payload
   else
   return state
}

export const initialState=localStorage.getItem("login")