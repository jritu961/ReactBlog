import { Translate } from "@mui/icons-material";
import styled from "styled-components";
interface humbuger{
  humberger: boolean;
}

export const Navbarmain = styled.div`
  top: 0;
  position: fixed;
  display: flex;
  /* background: #8b5cf6; */
  min-height: auto;
  color: #fff;
  border-radius: 5px;
  min-width: 100%;
  z-index: 4;
  background-image: linear-gradient(
    to right top,
    rgb(56, 52, 56),
    rgb(0 195 255 / 97%)
  );
 
`
export const ModalContainer = styled.div`
  width: 800px;
  height: 500px;
`
export const Leftnavbar = styled.div`
  display: flex;
  font-style: Bold;
  font-size: 50px;
  font-family: sans-sarif;
`
export const Midnav = styled.div<humbuger>`
  display: flex;
  
  
  @media (max-width: 730px) {
  
    display: flex;
    flex-direction: column;
    transform:${(props)=>(props.humberger?"TranslateY(0px)":"TranslateY(-200px)")};
  min-height:${(props)=>(props.humberger?"100px":"5px")};
    max-height: 5px;
  }
`;
export const Icon = styled.div`

`;

export const IconAndDAta = styled.div`
  display: flex;
  align-items: center;
`;

export const Rightnav = styled.div<humbuger>`
  display: flex;
  padding: 10px;
  
  @media (max-width: 730px) {
    /* z-index:4;
    padding:0 0.2rem; */
    display: flex;
    flex-direction: column;
    transform:${(props)=>(props.humberger?"TranslateY(30px)":"TranslateY(-300px)")};
    max-height:${(props)=>(props.humberger?"100px":"5px")};
   
  }
`

export const Navdata = styled.button`
  border: 2px solid red;
  display: flex;
  padding: 10px;
  margin-left: 10px;
  text-align: center;
  background-color: transparent;
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  width: 95px;
  border-style: none;
  cursor: pointer;
  @media (max-width: 730px) {
    /* z-index:4;
    padding:0 0.2rem; */

    background-color: transparent;
  }
`;

export const PowerImg = styled.button`
  padding-left: 50px;
  border-style: none;
  cursor: pointer;
  background-color: transparent;
  margin-right:30px;
  @media (max-width: 730px) {
    
    text-align: start;
   
    
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
 

  padding: 20px;
 
  width: 100vw;
  @media (max-width: 730px) {
    display: flex;
    flex-direction: column;
    
  }
`;

export const TogglerNavbar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavbarToggler = styled.button<humbuger>`
  display: flex;
  flex-direction: column;
  border-style: none;
  background-color: transparent;
  margin-right:50px;
  cursor: pointer;
  
  color: ${(props) => (props.humberger ? "white" : "black")};
`;

export const Bar = styled.span`
  width: 40px;
  height: 5px;
  margin-bottom: 10px;
  background-color: #ffff;
  @media (min-width: 730px) {
    display: none;
  }
`


export const BlogImg = styled.div`
display:"flex";
justify-content:"center";
align-items:"center";
transform:translateY(-45px);
@media (max-width:701px) {
  transform:translateY(30px);
  
}
`
