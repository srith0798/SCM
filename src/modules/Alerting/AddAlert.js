import React from "react";
import { Row } from "simple-flexbox";
// import Header from "../header/header";
// import Sidebar from "../sidebar/sidebar";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import Historys from "./Historys";
import Destination from "./Destination";
// import Rules from "./Rules";
import { history } from "../../managers/history";

export default function AddAlert() {
  const [activeButton, setActiveButton] = React.useState("Rules");
  const handleViewClick = (e) => {
    setActiveButton(e.target.id);
  };

  const [successfulTransaction, setsuccessfulTransaction] = React.useState(
    "/images/Successful transaction_blue.svg"
  );
  const [failedTransaction, setfailedTransaction] = React.useState(
    "/images/Failed transactionToken.svg"
  );
  const [tokenTransfer, settokenTransfer] = React.useState(
    "/images/XRC token.svg"
  );
  const [transactionValue, settransactionValue] = React.useState(
    "/images/XDC logo.svg"
  );
  const [balanceToken, setBalanceToken] = React.useState(
    "/images/XDC logo.svg"
  );
  const [stateChange, setstateChange] = React.useState(
    "/images/state change_blue.svg"
  );

  // alert target
  const [addressToken, setaddressToken] = React.useState(
    "/images/address_blue.svg"
  );
  const [networkAddress, setnetworkAddress] = React.useState(
    "/images/network_logo.svg"
  );
  const [tagAddress, settagAddress] = React.useState("/images/Tag_logo.svg");
  const [progress, setProgress] = React.useState("ALERT_TYPE");
  const changeProgress = (value) => {
    setProgress(value);
  };
  const backButton = () => {
    history.push("/");
  };
  //TODO: code needs to be optimized for src change
  const changeSourceForIcons = (value) => {
    if (value === "successfulTransaction")
      setsuccessfulTransaction("/images/Successful transaction.svg");
    if (value === "failedTransaction")
      setfailedTransaction("/images/Failed transaction_white.svg");
    if (value === "tokenTransfer")
      settokenTransfer("/images/XRCtoken_white.svg");
    if (value === "transactionValue")
      settransactionValue("/images/XDC logo_white.svg");
    if (value === "balanceToken") setBalanceToken("/images/XDC logo_white.svg");
    if (value === "stateChange")
      setstateChange("/images/statechange_white.svg");
    // for alert target tabs
    if (value === "addressToken")
      setaddressToken("/images/Address_logowhite.svg");
    if (value === "networkAddress")
      setnetworkAddress("/images/networks_white.svg");
    if (value === "tagAddress") settagAddress("/images/tag_white.svg");
  };

  const changeOriginalSourceForIcons = (value) => {
    if (value === "successfulTransaction")
      setsuccessfulTransaction("/images/Successful transaction_blue.svg");
    if (value === "failedTransaction")
      setfailedTransaction("/images/Failed transactionToken.svg");
    if (value === "tokenTransfer") settokenTransfer("/images/XRC token.svg");

    if (value === "transactionValue")
      settransactionValue("/images/XDC logo.svg");
    if (value === "balanceToken") setBalanceToken("/images/XDC logo.svg");
    if (value === "stateChange")
      setstateChange("/images/state change_blue.svg");
    // for alert target
    if (value === "addressToken") setaddressToken("/images/address_blue.svg");
    if (value === "networkAddress")
      setnetworkAddress("/images/network_logo.svg");
    if (value === "tagAddress") settagAddress("/images/Tag_logo.svg");
  };

  return (
    <>
      {/* <Header /> */}
      <Row style={{ height: "250vh" }}>
        {/* <Sidebar /> */}
        <MainContainer>
          <Row>
            <RowCorrecter>
              <TitleHead>
                <img
                  alt=""
                  style={{ marginRight: "0.625rem" }}
                  src="/images/back.svg"
                  onClick={backButton}
                />
                Create Alert
              </TitleHead>
            </RowCorrecter>
          </Row>
          <Container>
            <TabLister>
              <TabView
                id="Rules"
                onClick={handleViewClick}
                style={{
                  color: activeButton === "Rules" ? "blue" : "",
                  display: "flex",
                  paddingBottom: "0.875rem",
                  borderBottom:
                    activeButton === "Rules" ? "2px solid blue" : "",
                }}
              >
                <img
                  alt=""
                  style={{ marginRight: "0.375rem" }}
                  src={
                    activeButton === "Rules"
                      ? "/images/rules.svg"
                      : "/images/rules1.svg"
                  }
                />
                Rules
              </TabView>
              <TabView
                id="History"
                onClick={handleViewClick}
                style={{
                  color: activeButton === "History" ? "blue" : "",
                  display: "flex",
                  paddingBottom: "0.875rem",
                  borderBottom:
                    activeButton === "History" ? "0.125rem solid blue" : "",
                }}
              >
                <img
                  alt=""
                  style={{ marginRight: "0.375rem" }}
                  src={
                    activeButton === "History"
                      ? "/images/history_blue.svg"
                      : "/images/history.svg"
                  }
                />
                History
              </TabView>
              <TabView
                id="Destination"
                onClick={handleViewClick}
                style={{
                  color: activeButton === "Destination" ? "blue" : "",
                  display: "flex",
                  paddingBottom: "0.875rem",
                  borderBottom:
                    activeButton === "Destination" ? "0.125rem solid blue" : "",
                }}
              >
                <img
                  alt=""
                  style={{ marginRight: "5px" }}
                  src={
                    activeButton === "Destination"
                      ? "/images/destination_blue.svg"
                      : "/images/destination.svg"
                  }
                />
                Destination
              </TabView>
            </TabLister>
            {activeButton === "Rules" && (
              <div
              // style={{ overflow: "scroll" }}
              >
                <AlertContainer>
                  <NumberShowUP>1</NumberShowUP>
                  <ProgressHeader>
                    <TypeRow> Alert type</TypeRow>
                    <SelectType>Select a alert triger type</SelectType>
                  </ProgressHeader>
                </AlertContainer>

                <SideLineProvider>
                  <Line></Line>

                  {progress === "ALERT_TYPE" && (
                    <MainBoxContainer>
                      <BoxContainer
                        onClick={() => changeProgress("ALERT_TARGET")}
                        onMouseOver={() =>
                          changeSourceForIcons("successfulTransaction")
                        }
                        onMouseOut={() =>
                          changeOriginalSourceForIcons("successfulTransaction")
                        }
                      >
                        <img alt="" src={successfulTransaction} />
                        <Title>Successful Transaction</Title>
                        <SubTitle>
                          trigger when Successful Transaction happen
                        </SubTitle>
                      </BoxContainer>
                      <BoxContainer
                        onClick={() => changeProgress("ALERT_TARGET")}
                        onMouseOver={() =>
                          changeSourceForIcons("failedTransaction")
                        }
                        onMouseOut={() =>
                          changeOriginalSourceForIcons("failedTransaction")
                        }
                      >
                        <img alt="" src={failedTransaction} />
                        <Title>Failed Transaction</Title>
                        <SubTitle>trigger when Transactions fails</SubTitle>
                      </BoxContainer>
                      <BoxContainer
                        onClick={() => changeProgress("ALERT_TARGET")}
                        onMouseOver={() =>
                          changeSourceForIcons("tokenTransfer")
                        }
                        onMouseOut={() =>
                          changeOriginalSourceForIcons("tokenTransfer")
                        }
                      >
                        <img alt="" src={tokenTransfer} />
                        <Title>XRC-20 Token Transfer </Title>
                        <SubTitle>
                          trigger whenever an XRC-20 Token Transfer happen
                        </SubTitle>
                      </BoxContainer>
                      <BoxContainer
                        onClick={() => changeProgress("ALERT_TARGET")}
                        onMouseOver={() =>
                          changeSourceForIcons("transactionValue")
                        }
                        onMouseOut={() =>
                          changeOriginalSourceForIcons("transactionValue")
                        }
                      >
                        <img alt="" src={transactionValue} />
                        <Title>Transaction Value</Title>
                        <SubTitle>
                          trigger whenever transaction value matches
                        </SubTitle>
                      </BoxContainer>
                      <BoxContainer
                        onClick={() => changeProgress("ALERT_TARGET")}
                        onMouseOver={() =>
                          changeSourceForIcons("balanceToken ")
                        }
                        onMouseOut={() =>
                          changeOriginalSourceForIcons("balanceToken")
                        }
                      >
                        <img alt="" src={balanceToken} />
                        <Title>XDC Balance</Title>
                        <SubTitle>
                          trigger when XDC balance falls below certain threshold
                        </SubTitle>
                      </BoxContainer>

                      <BoxContainer
                        onClick={() => changeProgress("ALERT_TARGET")}
                        onMouseOver={() => changeSourceForIcons("stateChange")}
                        onMouseOut={() =>
                          changeOriginalSourceForIcons("stateChange")
                        }
                      >
                        <img alt="" src={stateChange} />
                        <Title>State Change</Title>
                        <SubTitle>
                          trigger whenever stable variable changes
                        </SubTitle>
                      </BoxContainer>
                      <BoxContainer>
                        <img alt="" src="/images/functioncall.svg" />
                        <Title>Function call</Title>
                        <SubTitle>COMMING SOON</SubTitle>
                      </BoxContainer>
                    </MainBoxContainer>
                  )}
                </SideLineProvider>

                <AlertContainer style={{ width: "315px" }}>
                  <NumberShowUP>2</NumberShowUP>
                  <ProgressHeader>
                    <TypeRow> Alert target</TypeRow>
                    <SelectType>
                      Select a address which alert will be trigger
                    </SelectType>
                  </ProgressHeader>
                </AlertContainer>

                <SideLineProvider>
                  <Line></Line>

                  {progress === "ALERT_TARGET" && (
                    <AlertTargetContainer>
                      <BoxContainer
                        onClick={() => changeProgress("PARAMETERS")}
                        onMouseOver={() => changeSourceForIcons("addressToken")}
                        onMouseOut={() =>
                          changeOriginalSourceForIcons("addressToken")
                        }
                      >
                        <img alt="" src={addressToken} />
                        <Title>Address</Title>
                        <SubTitle>recieve alert for only one address</SubTitle>
                      </BoxContainer>
                      <BoxContainer
                        onClick={() => changeProgress("PARAMETERS")}
                        onMouseOver={() =>
                          changeSourceForIcons("networkAddress")
                        }
                        onMouseOut={() =>
                          changeOriginalSourceForIcons("networkAddress")
                        }
                      >
                        <img alt="" src={networkAddress} />
                        <Title>Network</Title>
                        <SubTitle>
                          recieve alert for deployment on a network
                        </SubTitle>
                      </BoxContainer>
                      <BoxContainer
                        onClick={() => changeProgress("PARAMETERS")}
                        onMouseOver={() => changeSourceForIcons("tagAddress")}
                        onMouseOut={() =>
                          changeOriginalSourceForIcons("tagAddress")
                        }
                      >
                        <img alt="" src={tagAddress} />
                        <Title>Tag</Title>
                        <SubTitle>Recieve alert for every address</SubTitle>
                      </BoxContainer>
                    </AlertTargetContainer>
                  )}
                </SideLineProvider>

                <AlertContainer style={{ width: "225px" }}>
                  <NumberShowUP>3</NumberShowUP>
                  <ProgressHeader>
                    <TypeRow>Parameters</TypeRow>
                    <SelectType>Set alert trigger Parameters</SelectType>
                  </ProgressHeader>
                </AlertContainer>
                <SideLineProvider>
                  <Line></Line>
                  {progress === "PARAMETERS" && (
                    <ParameterContainer>
                      <TypeRow>
                        <ApplyButton
                          onClick={() => changeProgress("DESTINATION")}
                        >
                          Next
                        </ApplyButton>
                      </TypeRow>
                    </ParameterContainer>
                  )}
                </SideLineProvider>
                <AlertContainer style={{ width: "435px" }}>
                  <NumberShowUP style={{ marginRight: "20px" }}>4</NumberShowUP>
                  <ProgressHeader>
                    <TypeRow>Destination</TypeRow>
                    <SelectType
                      style={{
                        marginBottom: "12px",
                      }}
                    >
                      Select the destination in which alert notification will be
                      sent to.
                    </SelectType>
                    {progress === "DESTINATION" && (
                      <DestinationDetail>
                        <EmailBox>
                          <Row>
                            <img
                              alt=""
                              src="/images/email.svg"
                              style={{
                                marginRight: "4px",
                                marginBottom: "8px",
                                width: "1rem",
                              }}
                            />
                            <ColumnTwo>Email</ColumnTwo>
                            <ColumnTwo>it@supportteam.com</ColumnTwo>
                            <ColumnTwo>
                              {" "}
                              <label class="switch" style={{ left: "114px" }}>
                                <input type="checkbox" />
                                <span class="slider round"></span>
                              </label>
                            </ColumnTwo>
                          </Row>
                        </EmailBox>
                        <EmailBox>
                          <Row>
                            <img
                              alt=""
                              src="/images/webhook.svg"
                              style={{
                                marginRight: "4px",
                                marginBottom: "8px",
                                width: "1rem",
                              }}
                            />
                            <ColumnTwo>Finance</ColumnTwo>
                            <ColumnTwo>
                              {" "}
                              <label class="switch" style={{ left: "114px" }}>
                                <input type="checkbox" />
                                <span class="slider round"></span>
                              </label>
                            </ColumnTwo>
                          </Row>
                        </EmailBox>
                      </DestinationDetail>
                    )}
                  </ProgressHeader>
                </AlertContainer>
                <SideLineProvider>
                  <Line></Line>
                  <AlertContainer>
                    <LastContainer>
                      <ApplyButton onClick={() => changeProgress("Rules")}>
                        Done
                      </ApplyButton>
                      <CancelButton
                        onClick={() => changeProgress("ALERT_TYPE")}
                      >
                        Cancel
                      </CancelButton>
                    </LastContainer>
                  </AlertContainer>
                </SideLineProvider>
              </div>
            )}

            {activeButton === "History" && <Historys />}
            {activeButton === "Destination" && <Destination />}
          </Container>
        </MainContainer>
      </Row>
    </>
  );
}
const ColumnTwo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.875rem;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  max-width: 2.25rem;
  margin: 0.25rem;
`;
const DestinationDetail = styled.div`
  margin-bottom: 10px;
`;
const EmailBox = styled.div`
  margin-bottom: 10px;
  background: #f5f6fd 0% 0% no-repeat padding-box;
  border: 1px solid #d5e0ff;
  border-radius: 6px;

  height: 62px;
  padding: 10px;
  width: 1000px;
  // max-width: 453px;
`;
const LastContainer = styled.div`
  display: flex;
  justify-content: start;
  /* width: 100%; */
  margin-left: 22px;
  max-width: 503px;
`;
const CancelButton = styled.div`
  top: 432px;
  left: 1179px;
  width: 72px;
  height: 34px;
  border: 1px solid #3163f0;
  opacity: 1;
  padding-top: 6px;
  border-radius: 3px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  margin-left: -5px;
  margin-right: -11px;

  color: #3163f0;
`;
const ApplyButton = styled.div`
  width: 68px;
  height: 34px;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 3px;
  color: #ffffff;
  padding-top: 6px;
  font-size: 14px;
  margin-right: 15px;
  text-align: center;
  cursor: pointer;
`;
const Title = styled.div`
  font-size: 0.775rem;
  font-weight: 600;
  // color: #1d3c93;
  width: 100%;
  max-width: 16.25rem;
  padding-top: 10px;
  &:hover {
    color: white;
  }
`;
const SubTitle = styled.div`
  font-size: 0.775rem;
  // color: #1d3c93;
  width: 100%;
  max-width: 16.25rem;
  padding-top: 5px;
`;

const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  width: 100%;
  background-color: #ffffff;
  height: 55.25rem;
  padding: 0.5rem;
`;

const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
  padding: 2.5rem;
  height: 110vh;
`;
const TitleHead = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
const RowCorrecter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  max-width: 75rem;
  margin-bottom: 1.25rem;
`;

const TabLister = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 21.875rem;
  cursor: pointer;
  // margin: 25px 0px 10px 17px;
`;
const TabView = styled.div`
  // padding: 0.313rem 0.5rem 0.313rem 0.5rem;
  @media (min-width: 340px) and (max-width: 768px) {
    padding: 1px;
  }
`;

const AlertContainer = styled.div`
  display: flex;
  width: 200px;
  padding: 10px 10px 10px 0px;
  justify-content: space-between;
`;
const TypeRow = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
`;
const SelectType = styled.div`
  font-size: 0.875rem;
  color: #7c828a;
`;
const BoxContainer = styled.div`
  padding: 0.625rem;
  width: 450px;
  height: 150px;
  margin: 0px 10px 20px 10px;
  max-width: 215px;
  background: #f5f6fd;
  border: solid #d5e0ff;
  outline: none;
  background: #f5f6fd 0% 0% no-repeat padding-box;
  border: 1px solid #d5e0ff;
  border-radius: 6px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #3163f0;
    color: white;
  }
  @media (min-width: 340px) and (max-width: 768px) {
    margin: 0px 10px 20px 2px;
  }
`;

const MainBoxContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  // justify-content: space-between;
`;
const AlertTargetContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  max-width: 695px;
  padding-top: 28px;
`;

const ProgressHeader = styled.div`
  flex-flow: row;
`;

const SideLineProvider = styled.div`
  display: flex;
  min-height: 10px;
`;
const Line = styled.div`
  width: 2px;
  background-color: #3163f0;
  margin-left: 10px;
`;
const NumberShowUP = styled.div`
  margin-top: 5px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #3163f0;
  padding: 0px 0px 0px 8px;
`;

const ParameterContainer = styled.div`
  margin: 0px 0px 5px 20px;
`;
