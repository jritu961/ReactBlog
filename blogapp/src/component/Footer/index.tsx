import React from "react";

// import { FaBeer } from 'react-icons/fa';
import {
  FooterContainer,
  BoxOne,
  BoxOneOne,
  BoxOneTwo,
  BoxOneThree,
  BoxOneThreeImg,
  BoxTwo,
  BoxThree,
  BoxFour,
  BoxFive,
  BoxTwoData,
  BoxThreeData,
  BoxFourData,
  BoxFiveData,
} from "../../styles/Footer";
function Footer() {
  return (
    <div>
      <FooterContainer>
       
        <BoxTwo>
          <BoxTwoData style={{ fontFamily: "sans-serif", fontWeight: "800" }}>
            Menu
          </BoxTwoData>
          <BoxTwoData>Home</BoxTwoData>
          <BoxTwoData>About US</BoxTwoData>
          <BoxTwoData>Services</BoxTwoData>
          <BoxTwoData>Blog</BoxTwoData>
        </BoxTwo>
        <BoxThree>
          <BoxThreeData style={{ fontFamily: "sans-serif", fontWeight: "800" }}>
            Quick Links
          </BoxThreeData>
          <BoxThreeData>Privacy Policy</BoxThreeData>
          <BoxThreeData>Terms and Conditions</BoxThreeData>
          <BoxThreeData>Disclaimer</BoxThreeData>
        </BoxThree>
        <BoxOne>
          <BoxOneOne style={{ fontFamily: "sans-serif", fontWeight: "800" }}>
            About Us
          </BoxOneOne>
          <BoxOneTwo>
            Lorem ipsum dolor sit
            <br />
            consectetur adipisicing <br /> elit.
          </BoxOneTwo>
          <BoxOneThree>
            <BoxOneThreeImg>
              {" "}
              
              <i className="fa-brands fa-facebook"></i>{" "}
            </BoxOneThreeImg>
            <BoxOneThreeImg>
              <i className="fa-brands fa-twitter"></i>{" "}
            </BoxOneThreeImg>
            <BoxOneThreeImg>
              {" "}
              <i className="fa-brands fa-square-instagram"></i>{" "}
            </BoxOneThreeImg>
            <BoxOneThreeImg>
              <i className="fa-brands fa-linkedin"></i>
            </BoxOneThreeImg>
          </BoxOneThree>
        </BoxOne>
        <BoxFour>
          <BoxFourData style={{ fontFamily: "sans-serif", fontWeight: "800" }}>
            Contact Us
          </BoxFourData>
          <BoxFourData>North India,Punjab,Mohali</BoxFourData>
          <BoxFourData>+88967325653</BoxFourData>
          <BoxFourData>info@deno.com</BoxFourData>
          <BoxFourData>www.demo.com</BoxFourData>
        </BoxFour>
        <BoxFive>
          <BoxFiveData style={{ fontFamily: "sans-serif", fontWeight: "800" }}>
            Terms and Conditions
          </BoxFiveData>
          <BoxFiveData>Quick Links</BoxFiveData>
          <BoxFiveData>Services</BoxFiveData>
          <BoxFiveData>Contact Us</BoxFiveData>
        </BoxFive>
      </FooterContainer>
    </div>
  );
}

export default Footer;
