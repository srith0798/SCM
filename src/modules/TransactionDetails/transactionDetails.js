import React from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import { CopyToClipboard } from "react-copy-to-clipboard";
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
  const backButton = () => {
    history.push("/");
  };
  return (
    <>
      <MainContainer>
        <Row style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <img
              alt=""
              style={{ marginRight: "0.625rem" }}
              src="/images/back.svg"
              onClick={backButton}
            />
            <b>Transactions Details</b>
          </div>
          <Button>View in Explorer</Button>
        </Row>

        <Container>
          <SubHeading
            style={{ paddingTop: "0.625rem", paddingLeft: "1.25rem" }}
          >
            Txn hash
          </SubHeading>
          <div
            style={{
              paddingLeft: "1.25rem",
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
                display: "flex",
                paddingBottom: "0.875rem",
                borderBottom:
                  activeButton === "Overview" ? "0.125rem solid blue" : "",
              }}
            >
              <img
                alt=""
                style={{ marginRight: "0.375rem" }}
                src={
                  activeButton === "Overview"
                    ? "/images/overview.svg"
                    : "/images/overview_grey.svg"
                }
              />
              Overview
            </TabView>
            <TabView
              id="Contracts"
              onClick={handleViewClick}
              style={{
                color: activeButton === "Contracts" ? "blue" : "",
                display: "flex",
                paddingBottom: "0.875rem",
                borderBottom:
                  activeButton === "Contracts" ? "0.125rem solid blue" : "",
              }}
            >
              <img
                alt=""
                style={{ marginRight: "0.375rem" }}
                src={
                  activeButton === "Contracts"
                    ? "/images/contracts.svg"
                    : "/images/contract_grey.svg"
                }
              />
              Contracts
            </TabView>
            <TabView
              id="Events"
              onClick={handleViewClick}
              style={{
                color: activeButton === "Events" ? "blue" : "",
                display: "flex",
                paddingBottom: "0.875rem",
                borderBottom:
                  activeButton === "Events" ? "0.125rem solid blue" : "",
              }}
            >
              <img
                alt=""
                style={{ marginRight: "0.375rem" }}
                src={
                  activeButton === "Events"
                    ? "/images/event_blue.svg"
                    : "/images/event_grey.svg"
                }
              />{" "}
              Events
            </TabView>
            <TabView
              id="StateChange"
              onClick={handleViewClick}
              style={{
                color: activeButton === "StateChange" ? "blue" : "",
                borderBottom:
                  activeButton === "StateChange" ? "0.125rem solid blue" : "",
              }}
            >
              <img
                alt=""
                style={{ marginRight: "0.375rem" }}
                src={
                  activeButton === "Events"
                    ? "/images/statechange_grey.svg"
                    : "/images/statechange_grey.svg"
                }
              />
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
                    <SubHead style={{ display: "flex", alignItems: "center" }}>
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
                    <SubHead style={{ display: "flex", alignItems: "center" }}>
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
                    <SubHead style={{ display: "flex", alignItems: "center" }}>
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
                at App_Transactions_Validator.sol in App_Transactions_Validator
              </StackContainer>
              <LastContainer>
                <SearchBar placeholder="Execution trace" />
                <br />
                <img
                  alt=""
                  src="/images/contracts.svg"
                  style={{ width: "1rem" }}
                />
                transfer in App_Transactions_Validator
              </LastContainer>
            </div>
          )}
          {activeButton === "Contracts" && <SubContracts />}
          {activeButton === "Events" && <Events />}
          {activeButton === "StateChange" && <StateChange />}
        </Container>
      </MainContainer>
    </>
  );
}

const NewContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  opacity: 1;
  margin-top: 1.25rem;
  height: auto;
`;

const SubHead = styled.div`
  font-size: 0.75rem;
`;
const CommonDiv = styled.div`
  border-bottom: 0.031rem #c9d1cb solid;
  padding: 0.813rem;
`;
const MidContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  opacity: 1;
  margin-top: 1.25rem;
  height: auto;
`;
const StackContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  padding: 1.875rem;
  margin-top: 1.25rem;
  height: 9.375rem;
`;
const LastContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  margin-top: 1.25rem;
  height: 18.75rem;
  padding: 2rem;
`;
const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  width: 100%;
  padding: 3.125rem;
  display: 100vh;
  overflow-x: scroll;
`;

const Heading = styled.div`
  text-align: left;
  font-size: 0.875rem;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  max-width: 16.25rem;
`;

const TransactionNumber = styled.b`
  color: #416be0;
`;
const ThirdBox = styled.div`
  text-align: left;
  padding: 0.625rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #102c78;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 21rem;
`;

const CAllADDs = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  max-width: 21rem;
`;
const Button = styled.button`
  background-image: url("/images/globe.svg");
  background-repeat: no-repeat;
  background-position: 0.5rem;
  padding-left: 1.75rem;
  background-size: 0.875rem;
  position: relative;
  background-color: #ffffff;
  color: #3163f0;
  border: none;
  border-radius: 0.25rem;
  // width: 100%;
  max-width: 17.75rem;
  white-space: nowrap;
  height: 2.125rem;
  font-size: 0.875rem;
`;

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  width: 100%;
  height: 8.75rem;
  margin-top: 1.25rem;
`;

const Hash = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 0.625rem;
  // font-weight: 600;
  border: none;
  width: 100%;
  max-width: 24.063rem;
`;
const SubHeading = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
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
  letter-spacing: 0rem;
  color: #ce1a1a;
  opacity: 1;
`;
const SearchBar = styled.input`
  height: 2.188rem;
  width: 12.5rem;
  border: none;
  margin-left: 0.938rem;
  border-radius: 0.25rem;
  background-image: url("/images/search-icon.svg");
  background-repeat: no-repeat;
  background-position: 0.5rem;
  padding-left: 1.875rem;
  background-size: 0.75rem;
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
  max-width: 33.125rem;
  margin: 1.563rem 0rem 0.625rem 1.063rem;
  cursor: pointer;
`;
const TabView = styled.div`
  padding: 0.313rem 0.5rem 0.313rem 0.5rem;
`;
