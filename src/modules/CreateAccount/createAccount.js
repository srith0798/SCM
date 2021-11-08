import React, { useState } from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import LoginSideView from "../loginSideView/loginSideView";
export default function CreateAccount() {
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  return (
    <>
      <Row>
        <LoginSideView />
        <Div>
          <MainComponent>
            <Heading>Create Account</Heading>
            <RowSpan>
              Already having an account? <Color> &nbsp;Sign in </Color>
            </RowSpan>
            <HorizontalRule></HorizontalRule>
            <div style={{ marginTop: "35px" }}>
              <Row>
                <MainHeading>Email</MainHeading>
              </Row>
              <Row>
                <InputBox placeholder="Enter your email" />
              </Row>
              <Row>
                <MainHeading>Password</MainHeading>
              </Row>
              <Row>
                <InputDiv>
                  <Input
                    placeholder="Enter password"
                    type="password"
                    // type={isRevealPwd ? "text" : "password"}
                    // value={pwd}
                    // onChange={(e) => setPwd(e.target.value)}
                  />
                  <img
                    src="/images/transaction.svg"
                    // title={isRevealPwd ? "Hide password" : "Show password"}
                    // src={isRevealPwd ? hidePwdImg : showPwdImg}
                    // onClick={() => setIsRevealPwd((prevState) => !prevState)}
                  />
                </InputDiv>
              </Row>
              <Row>
                <MainHeading>Confirm Password</MainHeading>
              </Row>
              <Row>
                <InputDiv>
                  <Input placeholder="Enter password" type="password" />
                  <img src="/images/transaction.svg" />
                </InputDiv>
              </Row>
              <RowSpan>
                I agree to the Xmartly <Color> &nbsp;terms &nbsp;</Color> and
                <Color> &nbsp;services&nbsp; </Color>
              </RowSpan>
            </div>
            <Row>
              <Button>Create account</Button>
            </Row>
          </MainComponent>
        </Div>
      </Row>
    </>
  );
}
const Div = styled.div`
  width: 100%;
  max-width: 700px;
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
`;
const RowSpan = styled.span`
  display: flex;
  flex-flow: row nowrap;
  text-align: left;
  font: normal normal medium 18px/21px Inter;
  letter-spacing: 0px;
  margin-top: 21px;
`;
const InputBox = styled.input`
  background: #f5f5f5 0% 0% no-repeat padding-box;
  border-radius: 4px;
  border: 0px;
  font: normal normal medium 18px/21px Inter;
  color: #b1b1b1;
  width: 100%;
  max-width: 667px;
  margin-top: 10px;
  padding: 7px;
`;
const InputDiv = styled.div`
  background: #f5f5f5 0% 0% no-repeat padding-box;
  border-radius: 4px;
  width: 100%;
  max-width: 667px;
  font: normal normal medium 18px/21px Inter;
  color: #b1b1b1;
  padding: 6px;
  display: flex;
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
  background: #919ec1 0% 0% no-repeat padding-box;
  border-radius: 4px;
  text-align: left;
  font: normal normal medium 16px/20px Inter;
  color: #ffffff;
  border: 0px;
  padding: 8px;
  margin-top: 20px;
`;
const HorizontalRule = styled.div`
  width: 100%;
  max-width: 200px;
`;
