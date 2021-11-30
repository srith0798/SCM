import React, { useState } from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Events from "./Events";
import StateChange from "./StateChange";

import SubContracts from "./SubContracts";
import { history } from "../../managers/history";

export default function TransactionDetails() {
  const [activeButton, setActiveButton] = React.useState("Overview");
  const handleViewClick = (e) => {
    setActiveButton(e.target.id);
  };
  return (
    <>
      <Header />
      <Row>
        <Sidebar />
        <MainContainer>
          <Row style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <img src="/images/back.svg" onClick={backButton} />
              <b>Transactions Details</b>
            </div>
            <Button>View in Explorer</Button>
          </Row>

          <Container>
            <SubHeading style={{ paddingLeft: "20px" }}>Txn hash</SubHeading>
            <div
              style={{
                paddingLeft: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Hash>xdcabfe4184e5f9f600fe86d20ffdse2fsfbsgsgsa768b3c</Hash>
              <CopyToClipboard>
                <CopyImg src="/images/copy.svg" />
              </CopyToClipboard>
            </div>
            <TabLister>
              <TabView
                id="Overview"
                onClick={handleViewClick}
                style={{
                  color: activeButton === "Overview" ? "blue" : "",
                  borderBottom:
                    activeButton === "Overview" ? "2px solid blue" : "",
                }}
              >
                <img src="/images/rules.svg" />
                Overview
              </TabView>
              <TabView
                id="Contracts"
                onClick={handleViewClick}
                style={{
                  color: activeButton === "Contracts" ? "blue" : "",
                  borderBottom:
                    activeButton === "Contracts" ? "2px solid blue" : "",
                }}
              >
                <img src="/images/contracts.svg" /> Contracts
              </TabView>
              <TabView
                id="Events"
                onClick={handleViewClick}
                style={{
                  color: activeButton === "Events" ? "blue" : "",
                  borderBottom:
                    activeButton === "Events" ? "2px solid blue" : "",
                }}
              >
                <img src="/images/networks.svg" /> Events
              </TabView>
              <TabView
                id="StateChange"
                onClick={handleViewClick}
                style={{
                  color: activeButton === "StateChange" ? "blue" : "",
                  borderBottom:
                    activeButton === "StateChange" ? "2px solid blue" : "",
                }}
              >
                <img src="/images/code.svg" />
                State Change
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
                      <SubHead
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <Hash>
                          <TransactionNumber>
                            xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c
                          </TransactionNumber>
                        </Hash>
                        <CopyImg src="/images/copy.svg" />
                      </SubHead>
                    </Row>
                  </CommonDiv>
                  <CommonDiv>
                    <Row>
                      <Heading>To</Heading>
                      <SubHead
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <Hash>
                          <TransactionNumber>
                            xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c
                          </TransactionNumber>
                        </Hash>
                        <CopyImg src="/images/copy.svg" />
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
                      <SubHead>72462568294732962 XDC(54253.gwel)</SubHead>
                    </Row>
                  </CommonDiv>
                  <CommonDiv>
                    <Row>
                      <Heading>Transaction Fee</Heading>
                      <SubHead>0.2372723762728 XDC</SubHead>
                    </Row>
                  </CommonDiv>
                  <CommonDiv>
                    <Row>
                      <Heading>Raw input</Heading>
                      <SubHead
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <Hash>
                          <TransactionNumber>
                            xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c
                          </TransactionNumber>
                        </Hash>
                        <CopyImg src="/images/copy.svg" />
                      </SubHead>
                    </Row>
                  </CommonDiv>
                </MidContainer>
                <NewContainer>
                  <CommonDiv>
                    <Row>
                      <Heading>Function:</Heading>
                      <SHead>transfer()</SHead>
                    </Row>
                  </CommonDiv>
                  <CommonDiv>
                    <Row>
                      <Heading>Input</Heading>
                      <SHead>view data </SHead>
                    </Row>
                  </CommonDiv>

                  <ThirdBox>
                    <Row
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <CAllADDs>
                        Caller Address:
                        <br />
                        462482482765
                      </CAllADDs>

                      <CAllADDs>
                        Contract Address:
                        <br />
                        4752589752
                      </CAllADDs>
                    </Row>
                  </ThirdBox>
                </NewContainer>
                <b>Stack Trace</b>
                <StackContainer>
                  <TextLi>Error Messege:out of gas</TextLi>
                  balances[_to] = balances[_to].add(_value);
                  <br />
                  at App_Transactions_Validator.sol in
                  App_Transactions_Validator
                </StackContainer>
                <LastContainer>
                  <SearchBar placeholder="Execution trace" />
                  <br />
                  <img src="/images/contracts.svg" style={{ width: "1rem" }} />
                  transfer in App_Transactions_Validator
                </LastContainer>
              </div>
            )}
            {activeButton === "Contracts" && <SubContracts />}
            {activeButton === "Events" && <Events />}
            {activeButton === "StateChange" && <StateChange />}
          </Container>
        </MainContainer>
      </Row>
    </>
  );
}

const backButton = () => {
  history.push();
};

const NewContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  margin-top: 20px;
  height: auto;
`;

const SubHead = styled.div`
  font-size: 12px;
`;
const CommonDiv = styled.div`
  border-bottom: 0.5px #c9d1cb solid;
  padding: 13px;
`;
const MidContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  margin-top: 20px;
  height: auto;
`;
const StackContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  padding: 30px;
  opacity: 1;
  margin-top: 20px;
  height: 150px;
`;
const LastContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  margin-top: 20px;
  height: 300px;
  padding: 2rem;
`;
const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
  padding: 50px;
  display: 100vh;
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

const TransactionNumber = styled.b`
  color: #416be0;
`;
const ThirdBox = styled.div`
  text-align: left;
  padding: 10px;
  font: normal normal 600 14px/17px Inter;
  letter-spacing: 0px;
  color: #102c78;
  opacity: 1;
  width: 100%;
  max-width: 400px;
`;

const CAllADDs = styled.div``;
const Button = styled.button`
  background-image: url("/images/globe.svg");
  background-repeat: no-repeat;
  background-position: 8px;
  padding-left: 21px;
  background-size: 14px;
  position: relative;
  background-color: #ffffff;
  color: #3163f0;
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
  height: 129px;
  margin-top: 20px;
  // padding-left: 20px;
  // padding-top: 20px;
  // padding- bottom:0px;
  // padding-right: 20px;
`;

const Hash = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 10px;
  font-weight: 600;
  border: none;
  width: 100%;
  max-width: 385px;
`;
const SubHeading = styled.div`
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;
  color: #102c78;
`;

const CopyImg = styled.img`
  margin-left: 4%;
  cursor: pointer;
`;

const SHead = styled.div`
  color: #416be0;
`;

const TextLi = styled.div`
  text-align: left;
  letter-spacing: 0px;
  color: #ce1a1a;
  opacity: 1;
`;
const SearchBar = styled.input`
  height: 35px;
  width: 200px;
  border: none;
  margin-left: 15px;
  border-radius: 4px;
  background-image: url("/images/search-icon.svg");
  background-repeat: no-repeat;
  background-position: 8px;
  padding-left: 30px;
  background-size: 12px;
  position: relative;
  &:focus: {
    outline: none;
    border: none;
  }
`;
const TabLister = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 530px;
  margin: 25px 0px 10px 17px;
`;
const TabView = styled.div`
  padding: 5px 8px 5px 8px;
`;
