import styled from "styled-components";

export const MainContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
max-width:100%;
height:100vh;
background-image: linear-gradient(to right top, rgb(56, 52, 56), rgb(0 255 242 / 34%));

/* background-image: linear-gradient(#40E0D0, #fff); */
@media (max-width:1015px) {
    background-color:red;
    display:flex;
    flex-direction:row-reverse;
}
`
export const Container=styled.div`

display:flex;
background-color:#ffffff;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius:15px;

@media (max-width:1015px) {
    display:flex;
    flex-direction:column;
    
    
    
}

`
export const LoginRoute=styled.button`
font-weight:800;
font-size:30px;
color:#212121;
border-style:none;
background-color:#fff;
padding-left:150px;
cursor: pointer;
margin-top: 24px;
/* padding-right:150px; */
`


export const SignUp=styled.button`
font-size:30px;
border-style:none;
background-color:#fff;
color:#40E0D0;
font-weight:800;
margin-top: 24px;
cursor: pointer;
border-bottom:3px solid #40E0D0;
`

export const BoxOneFourLeft=styled.button`
margin:30px;
border-style:none;
color:#40E0D0;
font-weight:800;

background-color:#fff;
font-size:20px;
cursor: pointer;
`
export const BoxOneFourRight=styled.button`
display:flex;
justify-content:center;
width:200px;
border-radius:50px;

padding:15px;
cursor: pointer;
background-color:#40E0D0;
border:none;
color:#fff;

`



export const BoxTwo=styled.div`
height:auto;
`

