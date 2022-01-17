import React from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "react-tabs/style/react-tabs.css";
import Events from "../TransactionDetails/Events";
import StateChange from "../TransactionDetails/stateChange";
import SubContracts from "../TransactionDetails/subContracts";
import { history } from "../../managers/history";
import utility from "../../utility";

export default function TransactionDetails() {
  const [activeButton, setActiveButton] = React.useState("Overview");
  const handleViewClick = (e) => {
    setActiveButton(e.target.id);
  };
  const backButton = () => {
    history.push("/dashboard/transactionlist");
  };
  return (
    <MainContainer>
      <SubContainer>
        <TitleDiv>
          <Title>
            <img alt="" src="/images/back.svg" style={{ marginRight: "8px" }} onClick={() => backButton()} />
            Transaction Details
          </Title>
        </TitleDiv>
        <Button>View in explorer</Button>
      </SubContainer>

      <Container>
        <SubHeading style={{ paddingTop: "0.625rem", paddingLeft: "1.25rem" }}>Txn hash</SubHeading>
        <TopContainer>
          <Hash>{utility.truncateTxnAddress("xdcabfe4184e5f9f600fe86d20ffdse2fsfbsgsgsa768b3c")}</Hash>
          <CopyToClipboard>
            <img alt="" src="/images/copy.svg" />
          </CopyToClipboard>
          <FailButton>Fail</FailButton>
          <AlertButton>
            <img alt="" style={{ width: "15px", cursor: "pointer", marginRight: "6px" }} src="/images/addalert.svg" />
            Add alert
          </AlertButton>
        </TopContainer>

        <TabLister>
          <TabView
            id="Overview"
            onClick={handleViewClick}
            style={{
              color: activeButton === "Overview" ? "#3163F0" : "#AEB7D0",
              display: "flex",
              paddingBottom: "0.875rem",
              paddingLeft: "10px",
              borderBottom: activeButton === "Overview" ? "0.225rem solid #3163F0" : "#AEB7D0",
            }}
          >
            <TabImage
              alt=""
              style={{ marginRight: "0.375rem" }}
              src={activeButton === "Overview" ? "/images/overview.svg" : "/images/overview_grey.svg"}
            />
            Overview
          </TabView>
          <TabView
            id="Contracts"
            onClick={handleViewClick}
            style={{
              color: activeButton === "Contracts" ? "#3163F0" : "#AEB7D0",
              display: "flex",
              paddingBottom: "1rem",
              borderBottom: activeButton === "Contracts" ? "0.225rem solid #3163F0" : "",
            }}
          >
            <TabImage
              alt=""
              style={{ marginRight: "0.375rem" }}
              src={activeButton === "Contracts" ? "/images/Contract_blue.svg" : "/images/contract_grey.svg"}
            />
            Contracts
          </TabView>
          <TabView
            id="Events"
            onClick={handleViewClick}
            style={{
              color: activeButton === "Events" ? "#3163F0" : "#AEB7D0",
              display: "flex",
              paddingBottom: "1rem",
              borderBottom: activeButton === "Events" ? "0.225rem solid #3163F0" : "",
            }}
          >
            <TabImage
              alt=""
              style={{ marginRight: "0.375rem" }}
              src={activeButton === "Events" ? "/images/event_blue.svg" : "/images/event_grey.svg"}
            />{" "}
            Events
          </TabView>
          <TabView
            id="StateChange"
            onClick={handleViewClick}
            style={{
              color: activeButton === "StateChange" ? "#3163F0" : "#AEB7D0",
              borderBottom: activeButton === "StateChange" ? "0.225rem solid #3163F0" : "",
            }}
          >
            <TabImage
              alt=""
              style={{ marginRight: "0.375rem", marginBottom: "4px" }}
              src={activeButton === "StateChange" ? "/images/statechange_blue.svg" : "/images/statechange_grey.svg"}
            />
            State changes
          </TabView>
        </TabLister>
        {activeButton === "Overview" && (
          <div>
            <MidContainer>
              <CommonDiv>
                <Row>
                  <Heading>Network</Heading>
                  <SubHead>XDC mainnet</SubHead>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Heading>Error</Heading>
                  <SubHead>Out of Gas</SubHead>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Heading>Block</Heading>
                  <SubHead>365474(2456block)</SubHead>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Heading>Transactions index</Heading>
                  <SubHead>5</SubHead>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Heading>From</Heading>
                  <SubHead style={{ display: "flex", alignItems: "center" }}>
                    <TransactionNumber>{utility.truncateTxnAddress("xdcabfe4184e5f9f600fe86d20ffdse2fsfbsgsgsa768b3c")}</TransactionNumber>

                    <CopyToClipboardImg src="/images/copy.svg" />
                  </SubHead>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Heading>To</Heading>
                  <SubHead>
                    <TransactionNumber>{utility.truncateTxnAddress("xdcabfe4184e5f9f600fe86d20ffdse2fsfbsgsgsa768b3c")}</TransactionNumber>

                    <CopyToClipboardImg src="/images/copy.svg" />
                  </SubHead>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Heading>Timestamp</Heading>
                  <SubHead>213 322 adhfb</SubHead>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Heading>Value</Heading>
                  <SubHead> 10 XDC</SubHead>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Heading>Nonce</Heading>
                  <SubHead>453</SubHead>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Heading>Gas Used</Heading>
                  <SubHead>60,500(100%)</SubHead>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Heading>Gas Price</Heading>
                  <SubHead>XDC(54253.gwel)</SubHead>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Heading>Transaction Fee</Heading>
                  <SubHead>0.237272376272</SubHead>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Heading>Raw input</Heading>
                  <SubHead>
                    <Hash>
                      <TransactionNumber>
                        {utility.truncateTxnAddress("xdcabfe4184e5f9f600fe86d20ffdse2fsfbsgsgsa768b3c")}
                      </TransactionNumber>
                    </Hash>
                    <CopyToClipboardImg src="/images/copy.svg" />
                  </SubHead>
                </Row>
              </CommonDiv>
            </MidContainer>
            <FunctionContainer>
              <CommonDiv>
                <Row>
                  <Heading>Function: </Heading>
                  <SubHeadBlue>transfer()</SubHeadBlue>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Heading>Input:</Heading>
                  <SubHeadBlue>
                    view data
                    <img style={{ marginLeft: "2px" }} alt="" src="/images/Arrrow.svg" />
                  </SubHeadBlue>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Heading>Output </Heading>
                  <SubHeadBlue>
                    veiw data
                    <img style={{ marginLeft: "2px" }} alt="" src="/images/Arrrow.svg" />
                  </SubHeadBlue>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Heading>Caller Address </Heading>
                </Row>
                <Row>
                  <SubHeading style={{ fontWeight: "400", marginRight: "40px" }}>xdcabf...a32c99be1768b3c</SubHeading>
                </Row>
              </CommonDiv>
            </FunctionContainer>
            {/* <b>Token Transfer</b> */}
            <TokenTransferDiv>
              <CommonDiv>
                <Row>
                  <Heading>From:</Heading>
                  <SubHeadBlue>xdcabfe4184e5f9.....fsfbsgsgsa768b3</SubHeadBlue>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Heading>To:</Heading>
                  <SubHeadBlue>xdcabfe4184e5f9......2fsfbsgsgsa768b3</SubHeadBlue>
                </Row>
              </CommonDiv>
            </TokenTransferDiv>
            <b>Stack Trace</b> <ToolTipIcon src="/images/tool-tip.svg" />
            <StackContainer>
              <BackgroundChanger>
                <TextLine>Error Messege:out of gas</TextLine>
                <img alt="" src="/images/error.svg" /> balances[_to] = balances[_to].add(_value);
                <br />
              </BackgroundChanger>
            </StackContainer>
            <LastContainer>
              <SearchBar placeholder="Execution trace" />
              <br />
              <img alt="" src="/images/contracts.svg" style={{ width: "1rem", marginRight: "3px" }} />
              transfer in App_Transactions_Validator
            </LastContainer>
          </div>
        )}
        {activeButton === "Contracts" && <SubContracts />}
        {activeButton === "Events" && <Events />}
        {activeButton === "StateChange" && <StateChange />}
      </Container>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  width: 100%;
  padding: 2.125rem;
  display: 100%;
  height: 230vh;
  @media (min-width: 340px) and (max-width: 768px) {
    padding: 1.5rem;
  }
`;
const TopContainer = styled.div`
  padding-left: 1.25rem;
  display: flex;
  align-items: center;
`;

const TabImage = styled.img`
  @media (min-width: 300px) and (max-width: 485px) {
    width: 13px;
  }
  @media (max-width: 375px) {
    margin-bottom: 10px;
  }
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 267px;
  font-size: 24px;
  font-weight: 600;
  @media (max-width: 375px) {
    font-size: 18px;
    margin-left: 10px;
  }
`;
const Title = styled.div`
  white-space: nowrap;
  @media (min-width: 340px) and (max-width: 768px) {
    align-items: left;
  }
`;
const FunctionContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  opacity: 1;
  margin-top: 1.25rem;
  height: auto;
  white-space: nowrap;
  margin-bottom: 20px;
  @media (min-width: 300px) and (max-width: 485px) {
    flex-direction: column;
    display: flex;
  }
`;
const TokenTransferDiv = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  opacity: 1;
  margin-top: 1.25rem;
  height: auto;
  white-space: nowrap;
  margin-bottom: 20px;
  display: none;
`;

const SubHead = styled.div`
  font-size: 0.75rem;
  display: flex;
  font-weight: 500;
`;
const SubHeadBlue = styled.div`
  font-size: 0.85rem;
  display: flex;
  color: #416be0;
`;
const CommonDiv = styled.div`
  border-bottom: 0.031rem #eaf1ec solid;
  padding: 0.813rem;
`;
const MidContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  margin-top: 1.25rem;
  height: auto;
  overflow: auto;
`;
const StackContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  background-repeat: no-repeat;
  // background-color: #f5f6fd;
  border-radius: 0.375rem;
  padding: 1.875rem;
  margin-top: 1.25rem;
  height: 9.375rem;
`;
const BackgroundChanger = styled.div`
  width: 1016px;
  height: 106px;
  background-repeat: no-repeat;
  background: #f7f8fd 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  padding: 1.875rem;
  @media (min-width: 300px) and (max-width: 1371px) {
    width: 100%;
    padding: 1rem;
  }
`;
const LastContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  margin-top: 1.25rem;
  height: 18.75rem;
  padding: 2rem;
  font-weight: 600;
`;

const Heading = styled.div`
  text-align: left;
  font-size: 0.875rem;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  max-width: 16.25rem;
  @media (min-width: 340px) and (max-width: 768px) {
    max-width: 11.25rem;
  }
`;

const TransactionNumber = styled.div`
  color: #416be0;
  font-weight: 600;
`;

const Button = styled.button`
  background-image: url("/images/globe.svg");
  background-repeat: no-repeat;
  background-position: 0.5rem;
  padding-left: 1.75rem;
  background-size: 1rem;
  position: relative;
  background-color: #ffffff;
  color: #3163f0;
  border: none;
  border-radius: 0.25rem;
  max-width: 17.75rem;
  white-space: nowrap;
  height: 2.125rem;
  font-size: 0.875rem;
  @media (min-width: 300px) and (max-width: 485px) {
    display: none;
  }
`;
const SubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (min-width: 300px) and (max-width: 485px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  width: 100%;
  height: 9.2rem;
  margin-top: 0.5rem;
  width: 100%;
  @media (min-width: 300px) and (max-width: 768px) {
    background-color: #ffffff;
    border-radius: 0.375rem;
    width: 100%;
    height: 8rem;
    margin-top: 1.25rem;
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: 375px) {
    height: 7.4rem;
  }
`;

const Hash = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 0.625rem;
  margin-bottom: 10px;
  border: none;
  width: 100%;
  max-width: 24.063rem;
`;
const SubHeading = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #102c78;
  display: flex;
`;

const CopyToClipboardImg = styled.img`
  margin-left: 35px;
  cursor: pointer;
  @media (min-width: 340px) and (max-width: 768px) {
    margin-left: 3px;
  }
`;

const TextLine = styled.div`
  text-align: left;
  color: #ce1a1a;
  font-weight: 600;
  padding-left: 24px;
`;
const SearchBar = styled.input`
  height: 2.188rem;
  width: 12.5rem;
  border: none;
  margin-bottom: 1.5rem;
  border-radius: 0.25rem;
  background-image: url("/images/search-icon.svg");
  background-repeat: no-repeat;
  background-color: #f5f6fd;
  background-position: 0.5rem;
  padding-left: 1.875rem;
  background-size: 0.75rem;
  position: relative;
  /* &:focus: {
    outline: none;
    border: none;
  } */
`;
const TabLister = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 39.125rem;
  margin: 1.563rem 0rem 0.625rem 1.063rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    min-height: 45px;
    font-size: 13px;
    overflow-y: hidden;
    margin: 0rem 0rem 0rem 0rem;
    white-space: nowrap;
    padding-left: 10px;
  }
  @media (min-width: 320px) and (max-width: 450px) {
    display: flex;
    justify-content: space-between;
    min-height: 45px;
    font-size: 0.6rem;
    overflow-y: hidden;
    margin: 0rem 0rem 0rem 0rem;
    white-space: nowrap;
    padding-left: 0px;
  }

  @media (min-width: 600px) and (max-width: 923px) {
    overflow-y: hidden;
    font-size: 0.8rem;
    padding-left: 0px;
    margin: 0rem 0rem 0rem 0rem;
  }
`;
const TabView = styled.div`
  padding: 0.313rem 0.5rem 0.313rem 0.5rem;
  display: flex;
  @media (min-width: 340px) and (max-width: 768px) {
  }
`;
const ToolTipIcon = styled.img`
  width: 0.75rem;
  cursor: pointer;
  margin-left: 0.513rem;
`;
const FailButton = styled.div`
  color: #ce1a1a;
  padding: 0px 0px 0px 18px;
  width: 100%;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  width: 69px;
  height: 25px;
  background: #fde7e7 0% 0% no-repeat padding-box;
  border: 1px solid #fda6a6;
  border-radius: 4px;
  opacity: 1;
  margin-right: 12px;
  @media (min-width: 300px) and (max-width: 767px) {
    width: 87px;
  }
`;
const AlertButton = styled.div`
  top: 202px;
  left: 1016px;
  width: 100px;
  height: 27px;
  font-size: 14px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #3163f0;
  border-radius: 4px;
  color: #3163f0;
  margin-left: 2px;
  padding-top: 2px;
  padding-left: 8px;
  @media (min-width: 300px) and (max-width: 916px) {
    display: none;
  }
`;
