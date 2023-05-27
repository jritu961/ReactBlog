import styled from "styled-components";

export const BlogContainer = styled.div`
margin:20px;
`;
export const DivOne = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  
  @media (max-width:730px) {
  
    margin-left: -60px;
  };
  @media (max-width:511px) {
  
  margin-left: -180px;
}
`;

export const PartOne = styled.div`
  margin-top: 140px;
  font-size: 40px;
  font-weight: 400;
  @media (max-width:730px) {
   
  }
`;

export const PartTwo = styled.div`
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  color:#34aadc;
  margin-top: 10px;
  display:flex;
  justify-content:center;
  font-size:70px;
  height:80px;
  width:300px;
  
`;

export const PartThree = styled.div`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin-top: 20px;
`;

export const DivTwo = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
  margin-top:40px;
 
  /* margin-left:150px; */
`;

export const Postcontainer=styled.div`
display:flex;
justify-content:center;
align-items:center;

`
export const DivThree = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width:1400px;
  justify-content:center;
  
  
  
`;
export const ReadMoreButton = styled.button`
  display: flex;
  margin: 10px;
  font-size: 20px;
 
  font-weight: 600;
  border-style: none;
  background-color: transparent;
  color:#34aadc;
  cursor: pointer;

  /* &:hover{
    font-size:30px;
    &{}
} */
`;

export const DivBox = styled.div`
  display: flex;
  justify-content:space-between;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: #34aadc 0px 5px 5px;
  margin:30px;
  max-width: 400px;
  min-height:500px;
  &:hover {
     background-image: linear-gradient(to right top, rgb(56, 52, 56), rgb(0 195 255 / 97%));;
  }
`;

export const HeaderBox = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  text-align: center;
  font-family: Serif;
  font-size: 30px;
  font-weight: 800;
  color:#34aadc;
  /* margin: 10px; */
  max-width: "200px";
`;

export const PostBox = styled.div`
display:flex;
flex-wrap:wrap;
  font-family: Serif;
  margin: 10px;
  font-family: "Times New Roman", Times, serif;
  text-align: left;
  font-weight: 500;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Imgone = styled.div``;

export const ImgTwo = styled.div``;

export const ImgThree = styled.div``;

export const BlogIconsReadDivCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DecorIconLeft=styled.div`
margin-top:130px;
margin-left:100px;
@media (max-width:870px) {
 
 transform:translateY(-300px)
}

`

export const DecorIconRight=styled.div`
margin-top:130px;
margin-right:100px;
@media (max-width:870px) {
  
 transform:translateY(-300px)
}
`