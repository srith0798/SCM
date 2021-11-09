import React, { useState } from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import LoginSideView from "../loginSideView/loginSideView";
import { history } from "../../managers/history";

export default function CreateAccount() {
  const createAccount = () => {
    history.push("/verify");
  };
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(confirmPasswordShown ? false : true);
  };
  return (
    <>
      <Row>
        <LoginSideView />
        <Div>
          <MainComponent>
            <UpperComponent>
              <Heading>Create Account</Heading>
              <RowSpan>
                Already having an account? <Color> &nbsp;Sign in </Color>
              </RowSpan>
            </UpperComponent>

            <div style={{ marginTop: "35px" }}>
              <MainHeading>Email</MainHeading>
              <InputBox placeholder="Enter your email" type="text" required />
              <MainHeading>Password</MainHeading>
              <InputDiv>
                <Input
                  placeholder="Enter password"
                  type="password"
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  required
                  // ref={register({ required: "This is required." })}
                />
                <Image
                  src="/images/showblack.svg"
                  onClick={togglePasswordVisiblity}
                />
              </InputDiv>

              <MainHeading>Confirm Password</MainHeading>

              <InputDiv>
                <Input
                  placeholder="Enter password"
                  type="password"
                  name="password"
                  type={confirmPasswordShown ? "text" : "password"}
                  required
                />
                <Image
                  src="/images/showblack.svg"
                  onClick={toggleConfirmPasswordVisibility}
                />
              </InputDiv>

              <RowSpan>
                I agree to the Xmartly <Color> &nbsp;terms &nbsp;</Color> and
                <Color> &nbsp;services&nbsp; </Color>
              </RowSpan>
            </div>

            <Button onClick={createAccount}>Create account</Button>
          </MainComponent>
        </Div>
      </Row>
    </>
  );
}
const Div = styled.div`
  width: 100%;
  padding: 115px 0px 60px 100px;
`;
const MainComponent = styled.div``;
const Heading = styled.span`
  text-align: left;
  font: normal normal 600 32px/39px Inter;
  color: #191919;
  margin-bottom: 21px;
`;
const MainHeading = styled.span`
  text-align: left;
  font: normal normal medium 16px/20px Inter;
  letter-spacing: 0px;
  color: #191919;
  margin-top: 21px;
  display: flex;
  flex-flow: row nowrap;
`;
const RowSpan = styled.span`
  display: flex;
  flex-flow: row nowrap;
  text-align: left;
  font: normal normal medium 18px/21px Inter;
  margin: 21px 0px 29px 0px;
`;
const Image = styled.img`
  cursor: pointer;
`;
const InputBox = styled.input`
  width: 100%;
  max-width: 677px;
  background: #f5f5f5 0% 0% no-repeat padding-box;
  border-radius: 4px;
  border: 0px;
  font: normal normal medium 18px/21px Inter;
  color: #b1b1b1;
  margin-top: 10px;
  padding: 7px;
  display: flex;
  flex-flow: row nowrap;
`;
const InputDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  background: #f5f5f5 0% 0% no-repeat padding-box;
  border-radius: 4px;
  width: 100%;
  max-width: 677px;
  font: normal normal medium 18px/21px Inter;
  color: #b1b1b1;
  padding: 6px;
  display: flex;
  margin-top: 10px;
`;
const Input = styled.input`
  border: none;
  width: 100%;
  max-width: 667px;
  color: #b1b1b1;
  background: #f5f5f5 0% 0% no-repeat padding-box;
`;
const Color = styled.span`
  font: normal normal medium 18px/21px Inter;
  color: #3163f0;
`;
const Button = styled.button`
  display: flex;
  flex-flow: row nowrap;
  background: #919ec1 0% 0% no-repeat padding-box;
  border-radius: 4px;
  text-align: left;
  font: normal normal medium 16px/20px Inter;
  color: #ffffff;
  border: 0px;
  margin-top: 15px;
  width: 100%;
  max-width: 175px;
  display: flex;
  justify-content: center;
  padding: 7px;
`;

const UpperComponent = styled.div`
  width: 100%;
  max-width: 900px;
  border-bottom: 0.5px solid #e3e7eb;
`;
