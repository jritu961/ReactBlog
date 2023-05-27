import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxContainer = styled.form`

  margin-top: 150px;
  margin-left: 100px;
  width: 900px;
  height: 600px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
`;


export const Header = styled.h1`
  
  text-align: center;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
 font-weight:800;
`;


export const Input = styled.input`
  display: flex;
  flex-wrap:wrap;
  margin: 50px;
  border: none;
  border-bottom: 1px solid black;
  font-size: 20px;
  outline: none;
  width: 250px;
`;



export const Button = styled.button`
  display: flex;
  cursor: pointer;
  margin-top:50px;
  margin-left:120px;
  border: 1px solid black;
  align-items:center;
  justify-content:center;
  width: 100px;
  height: 30px;
  border-radius: 8px;
  background-image: linear-gradient(#fff, #212121);
`;

export const ImgContainer = styled.div`
width:250px;

`




