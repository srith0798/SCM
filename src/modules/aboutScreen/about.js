import React, { useState } from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import { sessionManager } from "../../managers/sessionManager";
import WalletPopUp from "./walletPopUp";
import Tooltip from "@mui/material/Tooltip";
import FooterComponent from "../dashboard/footerComponent";
import { history } from "../../managers/history";
import { cookiesConstants } from "../../constants";
import ReactTooltip from "react-tooltip";
import ScreenSizeDetector from "screen-size-detector";
import IpadPopup from "./ipadPopup";
import OriginPopup from "./originLink";

export default function About(props) {
  const screen = new ScreenSizeDetector();
  const [state, setState] = useState(true);
  const [address] = React.useState({});
  const [originPopup, setOriginPopup] = useState(false);
  const [screenWidth, setScreenWidth] = useState(false);
  const handleOpen = () => {
    setOriginPopup(true);
  };

  window.addEventListener('resize', ()=>{
    setScreenWidth(window.innerWidth);
  });

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
            <div style={{ display: "flex" }}>
              <Button
                onClick={() =>
                  sessionManager.getDataFromCookies(
                    cookiesConstants.IS_LOGGED_IN
                  )
                    ? history.push({
                        pathname: "/contracts",
                        state: {
                          id: address.address,
                          homepageHistory: "from-home-page",
                        },
                      })
                    : history.push("/")
                }
              >
                Add Your Smart Contract
                <Tooltip
                  disableFocusListener
                  title="Click to get started with Xmartly"
                >
                  <img
                    style={{ marginLeft: "0.375rem" }}
                    alt=""
                    src="/images/question-mark.svg"
                  />
                </Tooltip>
              </Button>

              <ButtonOrigin onClick={() => handleOpen()}>
                Create using origin
                <Tooltip
                  disableFocusListener
                  title="You will be redirected to XDC Origin to deploy your own contracts."
                >
                  <img
                    style={{ marginLeft: "0.375rem" }}
                    alt=""
                    src="/images/question-mark.svg"
                  />
                </Tooltip>
              </ButtonOrigin>
            </div>
          </LeftContainer>
          {originPopup === true ?  <OriginPopup click={()=> setOriginPopup(false)} /> : ""}
          <RightContainer>
            <VideoBox>
              {/* <ReactPlayer
                url="https://www.youtube.com/watch?v=qfXJKTkXzD8"
                controls
                width="100%"
                height="100%"
              /> */}
              <ImgMain
                src="/images/smart-contract-manger-infographic.svg"
                alt="img"
                style={{ width: "fitContent", height: "fitContent" }}
              />
            </VideoBox>
            <div style={{ display: "flex"}}>
              <SmartButton
                onClick={() =>
                  sessionManager.getDataFromCookies(
                    cookiesConstants.IS_LOGGED_IN
                  )
                    ? history.push({
                        pathname: "/contracts",
                        state: {
                          id: address.address,
                          homepageHistory: "from-home-page",
                        },
                      })
                    : history.push("/")
                }
              >
                Add Your Smart Contract
              </SmartButton>
              <ReactTooltip
                className="extra"
                id="button"
                arrowColor="transparent"
                textColor="black"
                borderColor="white"
                border={true}
                delayHide={0}
                delayShow={0}
                clickable={true}
                place="bottom"
                effect="solid"
              >
                Click to get started with Xmartly
              </ReactTooltip>
              <TooltipImg
                style={{
                  width: "15px",
                  height: "13px",
                  marginTop: "35px",
                  marginLeft: "5px",
                }}
                data-tip="button"
                data-for="button"
                alt=""
                src="/images/Subtraction 2.svg"
              />
            </div>
            <div style={{ display: "flex"}}>
            <ButtonOriginMob onClick={() => handleOpen()}>
                Create using origin
              </ButtonOriginMob>
              <ReactTooltip
                className="extra"
                id="origin"
                arrowColor="transparent"
                textColor="black"
                borderColor="white"
                border={true}
                delayHide={0}
                delayShow={0}
                clickable={true}
                place="bottom"
                effect="solid"
              >
                You will be redirected to XDC Origin to deploy your own contracts.
              </ReactTooltip>
              <TooltipImg
                style={{
                  width: "15px",
                  height: "13px",
                  marginTop: "45px",
                  marginLeft: "5px",
                }}
                data-tip="origin"
                data-for="origin"
                alt=""
                src="/images/Subtraction 2.svg"
              />
              </div>
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
        {!sessionManager.getDataFromCookies(cookiesConstants.IS_LOGGED_IN) && (
          <>
            {screen.width >= 0 && screen.width <= 1024 ? (
              <IpadPopup
                getCurrentUserDetails={props.getCurrentUserDetails}
                click={() => setState(false)}
                state={state}
              />
            ) : (
              <WalletPopUp
                getCurrentUserDetails={props.getCurrentUserDetails}
                click={() => setState(false)}
                state={state}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}
// const MainContainer = styled.div`
//   display: flex;
//   justify-content: center;
// `;
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
    height: 1450px;
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
  /* @media (min-width: 768px) and (max-width: 1200px) {
    padding: 16px;
    height: 128vh;
  } */
  @media (min-width: 768px) and (max-width: 800px) {
    height: 128vh !important;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    height: 120vh !important;
  }
  @media (min-height: 1024px) and (max-height: 1190px) {
    padding: 16px;
    height: 108vh;
  }
  @media (min-width: 1200px) {
    height: 110vh;
  }
`;
const TooltipImg = styled.img`
  width: 15px;
  height: 13px;
  margin-top: 35px;
  @media (min-width: 1023px) {
    display: none;
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
    height: 860px;
  }
  @media (min-width: 800px) and (max-width: 1200px) {
    height: 860px !important;
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
    padding: 1.375rem 3rem 12rem 3rem;
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
const ImgMain = styled.img`
  @media (min-width: 300px) and (max-width: 767px) {
    width: 260px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 350px;
  }
`;
const Span = styled.span`
  color: #0089ff;
  white-space: nowrap;
  font-weight: 600;
`;
const Span1 = styled.span`
  @media (min-width: 300px) and (max-width: 414px) {
    white-space: nowrap;
  }
`;
const DivDesktop = styled.div`
  font-weight: 600 !important;
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
  @media (min-width: 300px) and (max-width: 768px) {
    text-align: center;
  }
  @media (min-width: 414px) and (max-width: 2300px) {
    display: none;
  }
`;
const IconRow = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 47.438rem;
  width: 100%;
  @media (min-width: 300px) and (max-width: 767px) {
    max-width: 47.438rem;
    flex-direction: column;
    align-items: center;
  }
`;
const DataBox = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.2rem;
  font-family: "Inter";
  font-weight: 400;
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
  font-weight: 500;
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

const ButtonOrigin = styled.button`
  background-repeat: no-repeat;
  margin-left: 20px;
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
  font-weight: 500;
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

const ButtonOriginMob = styled.button`
  background-repeat: no-repeat;
  margin-left: 20px;
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
  font-weight: 500;
  white-space: nowrap;
  margin-bottom: 15px;
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 38%;
    margin-top: 21px;
  }
  @media (min-width: 392px) and (max-width: 413px) {
    margin-left: 102px;
    font-size: 0.6rem;
    height: 40px;
  }
  @media (min-width: 377px) and (max-width: 391px) {
    margin-left: 95px;
    font-size: 0.6rem;
    height: 40px;
  }
  @media (min-width: 360px) and (max-width: 376px) {
    margin-left: 85px;
    font-size: 0.6rem;
    height: 40px;
  }
  @media (min-width: 414px) and (max-width: 420px) {
    margin-left: 88px;
    font-size: 0.6rem;
    height: 40px;
  }
  
  @media (min-width: 1024px) {
    display: none;
  }
`;


const VideoBox = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
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
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 1rem;
    padding: 0rem;
    white-space: nowrap;
    padding-top: 20px;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    white-space: nowrap;
    padding-top: 2rem;
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
  font-weight: 400;
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
  font-weight: 400;
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
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 30%;
    margin-top: 21px;
  }
  @media (min-width: 392px) and (max-width: 413px) {
    margin-left: 30px;
    font-size: 0.6rem;
    height: 40px;
    margin-right: 5px;
    margin-left: 72px;
    width: 146px;
  }
  @media (min-width: 377px) and (max-width: 391px) {
    margin-left: 30px;
    font-size: 0.6rem;
    height: 40px;
    margin-right: 5px;
    margin-left: 66px;
    width: 146px;
  }

  @media (min-width: 360px) and (max-width: 376px) {
    margin-left: 30px;
    font-size: 0.6rem;
    height: 40px;
    margin-right: 5px;
    margin-left: 50px;
    width: 146px;
  }

  @media (min-width: 414px) and (max-width: 420px) {
    margin-left: 30px;
    font-size: 0.6rem;
    height: 40px;
    margin-right: 5px;
    margin-left: 55px;
    width: 146px;
  }
    @media (min-width: 1024px) {
    display: none;
  }
`;
