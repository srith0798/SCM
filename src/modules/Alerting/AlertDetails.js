import React from "react";
import { Row } from "simple-flexbox";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import { history } from "../../managers/history";

export default function AlertDetails() {
  return (
    <div>
      <Header />
      <Row>
        <Sidebar />

        <MainContainer>
          <Row style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <img
                src="/images/back.svg"
                style={{ marginRight: "10px" }}
                onClick={backButton}
              />
              <b>Alert Details</b>
            </div>
            <Button>Add alert</Button>
          </Row>
          <Container>
            <CommonDiv>
              <Row>
                <Heading>ID</Heading>
                <SubHead>45fej-46de-41d3-b23a-fhf783</SubHead>
              </Row>
            </CommonDiv>
            <CommonDiv>
              <Row>
                <Heading>Name</Heading>
                <SubHead>
                  Sucessfull transaction in App_Transactions_Validator
                </SubHead>
              </Row>
            </CommonDiv>
            <CommonDiv>
              <Row>
                <Heading>Alert Type</Heading>
                <SubHead>
                  <TextColor>Sucessfull transaction</TextColor>
                </SubHead>
              </Row>
            </CommonDiv>
            <CommonDiv>
              <Row>
                <Heading>Target</Heading>
                <SubHead>App_Transactions_Validator</SubHead>
              </Row>
            </CommonDiv>
          </Container>
          <br />
          <b>Alert will be sent to this destination</b>
          <NewContainer>
            <CommonDiv>
              <Row>
                <img src="/images/email.svg" style={{ width: "1rem" }} />
                <Heading>Email :it@supportteam.com</Heading>
                <SubHead>it@supportteam.com</SubHead>
              </Row>
            </CommonDiv>
            <CommonDiv>
              <Row>
                <img src="/images/webhook.svg" style={{ width: "1rem" }} />
                <Heading>Finance</Heading>
                <SubHead>https:webhook.site/aOe</SubHead>
              </Row>
            </CommonDiv>
            <RowContainer>
              <Buttonn>Edit</Buttonn>
              <Buttonn2>Disable</Buttonn2>
            </RowContainer>
          </NewContainer>
        </MainContainer>
      </Row>
    </div>
  );
}

const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
  padding: 3rem;
  display: 100vh;
`;
const NewContainer = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  width: 100%;
  height: 10rem;
  margin-top: 20px;
  padding: 20px;
`;

const backButton = () => {
  history.push(AlertDetails);
};
const Button = styled.button`
  background-image: url("/images/Add.svg");
  background-repeat: no-repeat;
  background-position: 8px;
  padding-left: 21px;
  background-size: 14px;
  position: relative;
  background-color: #3163f0;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  width: 130px;
  height: 34px;
  font-size: 14px;
`;

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  width: 100%;
  height: 12rem;
  margin-top: 20px;
  padding: 20px;
`;

const CommonDiv = styled.div`
  border-bottom: 1px solid;
  padding: 8px;
`;
const Heading = styled.div`
  text-align: left;
  font: normal normal 600 14px/17px Inter;
  letter-spacing: 0px;
  color: #102c78;
  opacity: 1;
  width: 100%;
  max-width: 260px;
`;
const SubHead = styled.div`
  font-size: 13px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 160px;
  padding-top: 10px;
`;
const Buttonn = styled.div`
  top: 548px;
  left: 341px;
  width: 79px;
  height: 34px;
  align-items: center;
  display: flex;
  justify-content: center;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  text-align: left;
  font: normal normal medium 16px/20px Inter;
  letter-spacing: 0px;
  color: #ffffff;
`;
const Buttonn2 = styled.div`
  top: 548px;
  left: 341px;
  width: 79px;
  height: 34px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #416be0;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: left;
  font: normal normal medium 16px/20px Inter;
  letter-spacing: 0px;
  color: #3163f0;
  opacity: 1;
`;
const TextColor = styled.div`
  text-align: left;
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;
  color: #416be0;
  opacity: 1;
`;
