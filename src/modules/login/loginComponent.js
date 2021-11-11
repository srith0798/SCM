import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import LoginSideView from "../loginSideView/loginSideView";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: 10%;
  top: -110px;
`;

const Heading = styled.span`
  font-size: 26px;
  letter-spacing: 0px;
  color: #191919;
  opacity: 1;
`;

const SubHeading = styled.span`
  margin-top: 10px;
  font-size: 16px;
`;

const Email = styled.span`
  margin-top: 10px;
  font-size: 14px;
`;

const Password = styled.span`
  margin-top: 10px;
  font-size: 14px;
`;

const EmailInput = styled.input`
  width: 500px;
  height: 38px;
  background: #f5f5f5 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  border: none;
`;
const PasswordInput = styled.input`
  width: 500px;
  height: 38px;
  background: #f5f5f5 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  border: none;
`;
const ForgotPassword = styled.span`
  text-align: right;
  font-size: 14px;
`;
const SignInButton = styled.button`
  width: 123px;
  height: 38px;
  background: #102c78 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  border: none;
  color: #ffffff;
  margin-top: 20px;
`;

const HorizontalLine = styled.hr`
  height: 10px;
  width: 100%;
`;

function LoginComponent() {
  return (
    <Row>
      <LoginSideView />
      <MainContainer>
        <Column>
          <Heading>
            <b>Sign in to Xmartly</b>
          </Heading>
          <SubHeading>
            Don't have an account?{" "}
            <a href="/create-account">Create an account</a>
          </SubHeading>
          <HorizontalLine />
          <Email>Email</Email>
          <EmailInput></EmailInput>
          <Password>Password</Password>
          <PasswordInput></PasswordInput>
          <ForgotPassword>
            <a href="#">Forgot Password?</a>
          </ForgotPassword>
          <SignInButton>Sign in</SignInButton>
        </Column>
      </MainContainer>
    </Row>
  );
}

export default LoginComponent;
