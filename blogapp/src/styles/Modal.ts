import styled from "styled-components";

export const Modal=styled.form`
/* display:flex;
justify-content:center;
align-items:center;
top:0;
left:0;
position:absolute;
width:100vw;
height:100vh;
background-color:rgb(245,245,245); */
/* backgroutton
nd-image: linear-gradient(
    to right top,
    rgb(56, 52, 56),
    rgb(0 195 255 / 97%)
  ); */
`
export const ModalContainer=styled.div`
width:100%;
height:100vh;
border-radius:12px;
display:flex;
justify-content:center;
align-items:center;
background-image: linear-gradient(
    to right top,
    rgb(56, 52, 56),
    rgb(0 195 255 / 97%)
  );

  @media (max-width:1002px) {
    display:flex;
    background-color:red;
    flex-direction:column-reverse;
}
`

export const ModalDivOne=styled.div`

display:flex;
flex-direction:column;
align-items:center;
height:450px;
width:500px;
background-color:#ffff;
box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;




`

export const ModalDivTwo=styled.img`
height:450px;
width:500px;
background-color:red;
`
export const InBox=styled.div`
margin-top:100px;
`


export const Label=styled.label`
margin-top:10px;
padding-top:10px;
`
export const Button=styled.button`
color:white;
background-color:#212121;
width:150px;
height:30px;
border-radius:12px;
cursor: pointer;
`

export const Input=styled.input`
border-style:none;
border-bottom:2px solid black;
margin-bottom:30px;
`