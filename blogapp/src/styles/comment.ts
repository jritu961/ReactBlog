import styled from "styled-components";


export const ReadMoreContainer=styled.div`

max-height:400px;
width:500px;
background-color:red;
`



export const CommentWrapper=styled.form`
 width:70vw;
 margin: 0 auto;
 display:flex;
 align-items:center;
 flex-direction:column;
`
export const BoxComment =styled.textarea`
width: 400px;
height:100px;
border-style:none;
outline:none;
resize : none;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`
export const LikeContainer=styled.form`
position:absolute;
left: 300px;

`
export const Heading1=styled.h1`

`
export const Heading2=styled.h4`

`
export const Button=styled.button`
    background-color: #0007d5;
    min-height: 40px;
    max-width:150px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    
`
export const CommentSection=styled.div`
 width:70vw;
 margin: 0 auto;
 display:flex;
 gap:20px;
 flex-direction: column;
 
`
export const Comments=styled.div`
 /* min-width:20vw; */
     width: 100VW;
    padding: 20px;
    margin:10px 0;
    border-radius:10px;
    background-color:#e2e1e1;
 /* display:flex; */
`