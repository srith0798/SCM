import React, { useState } from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import { sessionManager } from "../../managers/sessionManager";
import WalletPopUp from "./walletPopUp";
import Tooltip from "@mui/material/Tooltip";
import FooterComponent from "../dashboard/footerComponent";
import ReactPlayer from "react-player";
import { history } from "../../managers/history";
import AddContract from "../popup/addContract";

export default function About(props) {
  const [state, setState] = useState(true);
  const [address, setAddress] = React.useState({});

  return (
    <>
      <MainBoxContainer>
        <Container>
          <LeftContainer>
            <Row>
              <DetailBox>
                <DivDesktop>
                  Manage your <Span>Smart Contracts</Span> on XDC Network
                </DivDesktop>
                <MobileSpan>
                  {" "}
                  <Span1>Manage your Smart </Span1> <br></br>
                  <Span1>Contracts on XDC Network</Span1>
                </MobileSpan>
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
              <Button
                onClick={() =>
                  history.push({
                    pathname: "/contracts",
                    state: {
                      id: address.address,
                      homepageHistory: "from-home-page",
                    },
                  })
                }
              >
                Add Your Smart Contract
                <img
                  style={{ marginLeft: "0.375rem" }}
                  alt=""
                  src="/images/question-mark.svg"
                />
              </Button>
            </Tooltip>
          </LeftContainer>
          <RightContainer>
            <VideoBox>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=qfXJKTkXzD8"
                controls
                width="100%"
                height="100%"
              />
            </VideoBox>
            <SmartButton
             onClick={() =>
              history.push({
                pathname: "/contracts",
                state: {
                  id: address.address,
                  homepageHistory: "from-home-page",
                },
              })
            }
            >
              Add Your Smart Contract
              <img
                style={{ marginLeft: "0.375rem" }}
                alt=""
                src="/images/question-mark.svg"
              />
            </SmartButton>
          </RightContainer>
        </Container>

        <GreyContainer>
          <HeadingContainer>
            Introducing the Smart Contracts - by XDC
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
                View analytics like number of transactions, gas fee etc for the
                added contract.
              </SubTitle>
            </IconContainer>
            <IconContainer>
              <img alt="" src="/images/set alerts.svg" />
              <Title>Set Alerts</Title>
              <SubTitle>
                You can set different types of alert for you contracts, without
                missing any information
              </SubTitle>
            </IconContainer>
          </IconRow>
        </GreyContainer>
      </MainBoxContainer>

      <DivFooter>
        <FooterComponent />
      </DivFooter>

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
  height: -webkit-fill-available;
  @media (min-width: 300px) and (max-width: 700px) {
    padding: 1.125rem;
    height: 1377px;
  }
  @media (min-width: 414px) and (max-width: 768px) {
    padding: 1.125rem;
    height: 1811px;
  }
  @media (max-width: 375px) {
    padding: 16px;
  }
  @media (max-width: 768px) {
    padding: 30px;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    padding: 16px;
    height:128vh;
  }
  @media (min-width: 800px) and (max-width: 1024px) {
    height:117vh;!important;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    height:175vh;!important;
  }
  @media (min-height: 1024px) and (max-height: 1190px) {
    padding: 16px;
    height:108vh;
  }
  @media (min-width:1200px){
    height:127vh
  }
`;
const Container = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
  // height: 468px;
  max-width: 1306px;
  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    padding-right: 30px;
    padding-top: 30px;
    padding-left: 46px;
    height: 778px;
  }
  @media (min-width:800px) and (max-width: 1200px){
    height:668px !important;
  }
  @media (min-width: 300px) and (max-width: 414px) {
    flex-direction: column;
    padding-right: 0px;
    padding-top: 0px;
    padding-left: 0px;
    height: auto;
  }
  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;
const RightContainer = styled.div`
  width: 100%;
  padding: 4.7rem;
  @media (min-width: 340px) and (max-width: 803px) {
    padding: 1.375rem 3rem 9rem 3rem;
    height: 100%;
  }
  @media (min-width: 300px) and (max-width: 414px) {
    padding: 30px;
  }
  @media (min-width: 800px) and (max-width: 1200px) {
    padding: 0.7rem 4.7rem 0.7rem 4.7rem;
    margin-bottom: 155px;
  }
`;
const LeftContainer = styled.div`
  width: 100%;
  padding: 3.9rem;
  @media (min-width: 300px) and (max-width: 414px) {
    padding: 1.5rem;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    // padding: 1.5rem;
    padding: 3.9rem;
    padding-top: 0;
    padding-bottom: 16px;
  }
`;
const Span = styled.span`
  color: #0089ff;
  white-space: nowrap;
`;
const Span1 = styled.span`
  @media (min-width: 300px) and (max-width: 414px) {
    white-space: nowrap;
  }
`;
const DivDesktop = styled.div`
  @media (min-width: 300px) and (max-width: 414px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    text-align: -webkit-center;
    padding-bottom: 48px;
    padding-top: 2px;
  }
`;
const MobileSpan = styled.div`
  @media (min-width: 414px) and (max-width: 2300px) {
    display: none;
  }
`;
const IconRow = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 47.438rem;
  width: 100%;
  @media (min-width: 300px) and (max-width: 768px) {
    max-width: 47.438rem;
    flex-direction: column;
    align-items: center;
  }
`;
const DataBox = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.2rem;
  @media (min-width: 300px) and (max-width: 414px) {
    font-size: 14px;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    text-align: -webkit-center !important;
  }
  @media (max-width: 768px) {
    text-align: -webkit-center !important;
  }
`;
const DetailBox = styled.div`
  width: 100%;
  padding-bottom: 0.938rem;
  font-size: 2rem;
  font-weight: 600;
  @media (min-width: 300px) and (max-width: 414px) {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) and (max-width: 1200px) {
  }
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
  width: fit-content;
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
  @media (min-width: 340px) and (max-width: 1023px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 300px) and (max-width: 414px) {
    margin-left: 30px;
    font-size: 0.6rem;
    height: 40px;
  }
  @media (max-width: 456px) {
    margin-left: 30px;
    font-size: 0.6rem;
    height: 40px;
  }

  @media (max-width: 1023px) {
    display: none;
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
  @media (min-width: 300px) and (max-width: 414px) {
    height: 140px;
  }
`;

const HeadingContainer = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: #1f1f1f;
  padding: 3.75rem;
  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 1rem;
    padding: 0rem;
    white-space: nowrap;
    padding-top: 20px;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    white-space: nowrap;
  }
`;
const GreyContainer = styled.div`
  background-color: none;
  padding-bottom: 2.25rem;
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
  @media (min-width: 300px) and (max-width: 414px) {
    font-size: 0.9rem;
  }
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
  @media (min-width: 300px) and (max-width: 768px) {
    height: 232px;
  }
`;
const SubHead = styled.div`
  font-size: 1rem;
  color: #4b4b4b;
  text-align: center;
  width: 100%;
  padding-bottom: 1.25rem;
  @media (min-width: 300px) and (max-width: 414px) {
    font-size: 0.8rem;
  }
`;
const DivFooter = styled.div`
  @media (min-width: 300px) and (max-width: 414px) {
    z-index: -1;
  }
`;
const SmartButton = styled.div`
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
  width: fit-content;
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
  @media (min-width: 340px) and (max-width: 1023px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 21px;
  }
  @media (max-width: 414px) {
    margin-left: 30px;
    font-size: 0.6rem;
    height: 40px;
    margin-right: 64px;
    margin-left: 61px;
    width: 162px;
  }

  @media (max-width: 375px) {
    margin-left: 30px;
    font-size: 0.6rem;
    height: 40px;
    margin-right: 64px;
    margin-left: 44px;
    width: 162px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
