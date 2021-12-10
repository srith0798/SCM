import React from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";

export default function About() {
  return (
    <>
      <Header />
      <Row>
        <Sidebar />
        <MainContainer>
          <MainBoxContainer>
            <Container>
              <LeftContainer>
                <DetailBox>
                  Manage your Smart Contracts on XDC Network
                </DetailBox>
                <DataBox>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in
                </DataBox>
                <Button>
                  Add Your Smart Contract
                  <img
                    style={{ marginLeft: "6px" }}
                    alt=""
                    src="/images/questionmark.svg"
                  />
                </Button>
              </LeftContainer>
              <RightContainer>
                <VideoBox>
                  <img
                    style={{ paddingLeft: "90px" }}
                    alt=""
                    src="/images/play.svg"
                  />
                </VideoBox>
              </RightContainer>
            </Container>

            <GreyContainer>
              <HeadingContainer>
                Introducing the Smart Contracts -by XDC
                <SubHead>Add smart contract and managing them</SubHead>
              </HeadingContainer>
              <IconRow>
                <IconContainer>
                  <img alt="" src="/images/manage contracts.svg" />
                  <Title>Manage Contracts</Title>
                  <SubTitle>
                    You can add and manage any contract deployed on XDC Network.
                  </SubTitle>
                </IconContainer>
                <IconContainer>
                  <img alt="" src="/images/analyticsicon.svg" />
                  <Title>Analytics</Title>
                  <SubTitle>
                    View analytics like number of transactions, gas fee etc for
                    the added contract.
                  </SubTitle>
                </IconContainer>
                <IconContainer>
                  <img alt="" src="/images/set alerts.svg" />
                  <Title>Set Alerts</Title>
                  <SubTitle>
                    You can set different types of alert for you contracts,
                    without missing any information
                  </SubTitle>
                </IconContainer>
              </IconRow>
            </GreyContainer>
          </MainBoxContainer>
        </MainContainer>
      </Row>
    </>
  );
}

const IconRow = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 759px;
  width: 100%;
`;
const DataBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  font-size: 16px;
  margin-left: 20px;
  padding-left: 25px;
`;
const DetailBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 25px;
  font-size: 32px;
  font-weight: 600;
  margin-left: 20px;
`;

const Button = styled.button`
  background-repeat: no-repeat;
  background-position: 0.5rem;
  padding: 14px;
  item-align: center;
  background-size: 0.875rem;
  position: relative;
  background-color: #3163f0;
  color: #ffffff;
  border: none;
  border-radius: 0.25rem;
  width: 40%;
  margin-top: 30px;
  margin-left: 60px;
  height: 3.125rem;
  display: flex;
  font-size: 16px;
  font-weight: 600;
`;
const VideoBox = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 2px solid #d8d8d8;
  border-radius: 2px;
  opacity: 1;
  margin: 34px 49px 40px 126px;
  padding: 100px;
  display: flex;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const MainBoxContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-item: center;

  padding: 3.125rem;
`;

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  width: 80%;
  height: 21.75rem;
  margin-top: -0.75rem;
  display: flex;
  justify-content: center;
  align-self: center;
`;
const RightContainer = styled.div`
  width: 100%;
`;
const LeftContainer = styled.div`
  width: 100%;
`;
const HeadingContainer = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: #1f1f1f;
  padding: 60px;
`;
const GreyContainer = styled.div`
  background-color: none;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-self: center;
`;
const Title = styled.div`
  text-align: center;
  font: normal normal 600 20px/24px Inter;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #1f1f1f;
  opacity: 1;
`;
const SubTitle = styled.div`
  text-align: center;
  font-size: 16px;
  color: #4b4b4b;
  margin-top: 7px;
  //   font-weight: 600;
  width: 240px;
`;

const IconContainer = styled.div`
  padding: 0.625rem;

  width: 450px;
  height: 150px;
  margin: 0px 10px 20px 10px;
  max-width: 300px;

  outline: none;

  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;
const SubHead = styled.div`
  font-size: 16px;
  color: #4b4b4b;
  text-align: center;
  width: 100%;
  padding-bottom: 20px;
`;
