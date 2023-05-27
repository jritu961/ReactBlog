import styled from "styled-components";

export const MainContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
max-width:100%;
height:100vh;

background-image: linear-gradient(to right top, rgb(56, 52, 56), rgb(238 130 238 / 38%));
@media (max-width:605px) {
  
  
}
/* background-image:linear-gradient(#DDA0DD, #fff); */


`

export const Container=styled.div`
display:flex;



background-color:#ffffff;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius:15px;

@media (max-width:1015px) {
    display:flex;
    flex-direction:column-reverse;
    
    
    
}

`

export const BoxOne=styled.form`
display:flex;
/* width: 577px; */
/* height:250px; */
flex-direction:column;
justify-content:center;
align-items:center;
/* margin-top:100px; */
@media (max-width:1015px) {
    
    
    
}

`

export const BoxTwo=styled.div`
margin-top:10px;

`

export const BoxOneOne=styled.div`
display:flex;
margin-bottom:60px;


`

export const BoxOneOneLeft=styled.button`
border-style:none;
background-color:#fff;
color:#EE82EE;
font-weight:800;
font-size:30px;
border-bottom:3px solid #EE82EE;
cursor: pointer;
`

export const BoxOneOneRight=styled.button`
border-style:none;
background-color:#fff;
font-weight:400;
font-size:30px;
padding-left:150px;
cursor: pointer;
`

export const BoxOneInput=styled.input`

margin:10px;
max-width:350px;
font-weight:800;
outline:none;
font-size:20px;
border:none;

border-bottom:2px solid gray;

/* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset; */
`



export const BoxOneFour=styled.div`
margin:50px;

`

export const BoxOneFourLeft=styled.button`
margin-top:30px;
font-size:20px;
border-style:none;
color:#EE82EE;
font-size:20px;
font-weight:800;
background-color:#fff;
cursor: pointer;
`

export const BoxOneFourRight=styled.button`
border-radius:10px;
max-width:110px;
border-radius:25px;
max-height:45px;
background-color:#EE82EE;
border:none;
color:#fff;
margin-left:80px;
cursor: pointer;
`