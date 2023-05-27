import React from "react";
import { Container, OtpContainer, Otpinput } from "../../styles/Emailsend";
function Emailsend() {
  return (
    <Container>
      <OtpContainer>
        <Otpinput placeholder="EMail">Email</Otpinput>
        <Otpinput>OTP</Otpinput>
      </OtpContainer>
    </Container>
  );
}

export default Emailsend;
