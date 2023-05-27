import React from 'react'
import {useForm} from "react-hook-form"
import { PostContainer,BoxContainer,PostImage,HeaderContainer,PostData,ReadMoreButton} from '../styles/Post'
function Post() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  return (
    <PostContainer>
      <BoxContainer >
      <PostImage></PostImage>
      <HeaderContainer></HeaderContainer>
      <PostData></PostData>
      <ReadMoreButton></ReadMoreButton>
      </BoxContainer>
    </PostContainer>
  )
}

export default Post