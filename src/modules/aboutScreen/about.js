import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import { sessionManager } from "../../managers/sessionManager";
import WalletPopUp from "./walletPopUp";
import Tooltip from "@mui/material/Tooltip";

export default function About(props) {
  const [state, setState] = useState(true);
  return (
    <>
      <MainContainer>
        <MainBoxContainer>
          <Container>
            <LeftContainer>
              <Row>
                <DetailBox>
                  Manage your <Span>Smart Contracts</Span> on XDC Network
                </DetailBox>
              </Row>
              <DataBox>
                Easily govern your smart contract deployment with end-to-end
                lifecycle utility, empowering the entire on-chain critical
                business logic.
              </DataBox>
              <Tooltip
                disableFocusListener
                title="Click to get started with Xmartly"
              >
                <Button>
                  Add Your Smart Contract
                  <img
                    style={{ marginLeft: "0.375rem" }}
                    alt=""
                    src="/images/question-mark.svg"
                  />{" "}
                </Button>
              </Tooltip>
            </LeftContainer>
            <RightContainer>
              <VideoBox>
                <img
                  style={{ width: "3.75rem", height: "3.75rem" }}
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

      <div>
        {!sessionManager.getDataFromCookies("isLoggedIn") && (
          <WalletPopUp
            getCurrentUserDetails={props.getCurrentUserDetails}
            click={() => setState(false)}
            state={state}
          />
        )}
      </div>
    </>
  );
}
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
  height: 500px;
  max-width: 1306px;
  @media (min-width: 340px) and (max-width: 768px) {
    flex-direction: column;
    padding-right: 30px;
    padding-top: 30px;
    padding-left: 46px;
    height: 778px;
  }
`;
const RightContainer = styled.div`
  width: 100%;
  padding: 4.375rem;
  @media (min-width: 340px) and (max-width: 768px) {
    padding: 4.375rem;
    height: 100%;
  }
`;
const LeftContainer = styled.div`
  width: 100%;
  padding: 2.5rem;
`;
const Span = styled.span`
  color: #0089ff;
  white-space: nowrap;
`;
const IconRow = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 47.438rem;
  width: 100%;
`;
const DataBox = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.2rem;
`;
const DetailBox = styled.div`
  width: 100%;
  padding-bottom: 0.938rem;
  font-size: 2rem;
  font-weight: 600;
`;

const Button = styled.button`
  background-repeat: no-repeat;
  background-position: 0.5rem;
  padding: 0.875rem;
  item-align: center;
  background-size: 0.875rem;
  position: relative;
  background-color: #3163f0;
  color: #ffffff;
  border: none;
  border-radius: 0.25rem;
  margin-top: 1.875rem;
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
  @media (min-width: 340px) and (max-width: 790px) {
    margin-left: 112px;
  }
`;
const VideoBox = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 0.125rem solid #d8d8d8;
  border-radius: 0.125rem;
  opacity: 1;
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeadingContainer = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: #1f1f1f;
  padding: 3.75rem;
`;
const GreyContainer = styled.div`
  background-color: none;
  padding-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
  align-self: center;
`;
const Title = styled.div`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.375rem;
  color: #1f1f1f;
  opacity: 1;
`;
const SubTitle = styled.div`
  text-align: center;
  font-size: 1rem;
  color: #4b4b4b;
  margin-top: 0.438rem;
`;

const IconContainer = styled.div`
  padding: 0.625rem;
  width: 100%;
  height: 150px;
  margin: 0px 10px 20px 10px;
  max-width: 18.75rem;
  outline: none;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;
const SubHead = styled.div`
  font-size: 1rem;
  color: #4b4b4b;
  text-align: center;
  width: 100%;
  padding-bottom: 1.25rem;
`;
