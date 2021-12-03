import React from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import LoginSideView from "../loginSideView/loginSideView";

export default function VerifyEmail() {
  return (
    <div>
      <Row>
        <>
          <LoginSideView />
        </>
        <MainContainer>
          <SubContainer>
            <MainHeading>Verify Email</MainHeading>

            <SubHeading>
              A verification e-mail has been sent to your e-mail address. Verify
              your account by clicking the link inside the e-mail
            </SubHeading>
            <Button>Continue</Button>
          </SubContainer>
        </MainContainer>
      </Row>
    </div>
  );
}

const MainContainer = styled.div`
  width: 100%;
`;
const SubContainer = styled.div`
  width: 100%;
  max-width: 580px;
  padding: 80px;
`;
const MainHeading = styled.span`
  text-align: left;
  font: normal normal 600 32px/39px Inter;
  color: #191919;
`;
const SubHeading = styled.span`
  font: normal normal medium 18px/21px Inter;
  color: #191919;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 20px;
`;
const Button = styled.button`
  background: #102c78 0% 0% no-repeat padding-box;
  border-radius: 4px;
  font: normal normal medium 16px/20px Inter;
  color: #ffffff;
  width: 100%;
  max-width: 175px;
  margin-top: 20px;
`;
