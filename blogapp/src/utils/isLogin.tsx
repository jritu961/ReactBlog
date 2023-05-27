import React from 'react'

function isLogin() {
    const token=localStorage.getItem("login")
   
    if(token){
        return true
    }
    else{
        console.log("token not")
        return false
    }
  
}

export default isLogin