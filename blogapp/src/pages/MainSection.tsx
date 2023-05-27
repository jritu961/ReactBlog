import React from 'react'
import Navbar from '../component/Navbar'
import SectionOne from '../component/Sectionone'
import {Main} from "../styles/Main"
import Footer from '../component/Footer'
import Post from './Post'
function MainSection() {
  return (
    <div>
      
    <Navbar/>
    <SectionOne/>
    {/* <Post/> */}
    <Footer/>
   
    </div>
  )
}

export default MainSection