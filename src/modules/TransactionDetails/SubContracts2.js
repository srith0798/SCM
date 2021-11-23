import React from "react";
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

export default function SubContracts2() {
  return (
    <>
      <Header />
      <Row>
        <Sidebar />
        <MainContainer>
          <Row style={{ display: "flex", justifyContent: "space-between" }}>
            <Transactions>
              <b>Transactions Details</b>
            </Transactions>
            <Button>View in Explorer</Button>
          </Row>

          <Container>
            <SubHeading>Txn hash</SubHeading>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Hash>xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c</Hash>
              <CopyToClipboard>
                <CopyImg src="/images/copy.svg" />
              </CopyToClipboard>
            </div>
            <Tabs>
              <TabList>
                <img src="/images/rules.svg" style={{ width: "16px" }} />
                <Tab> Overview </Tab>
                <img src="/images/contracts.svg" style={{ width: "16px" }} />
                <Tab>Contracts</Tab>
                <img src="/images/general.svg" style={{ width: "16px" }} />
                <Tab>Events</Tab>
                <img src="/images/state change.svg" style={{ width: "16px" }} />
                <Tab>State change</Tab>
              </TabList>
              <TabPanel></TabPanel>
              <TabPanel>
                <SubContracts />
              </TabPanel>
              <TabPanel>
                <Events />
              </TabPanel>
              <TabPanel>
                <StateChange />
              </TabPanel>
            </Tabs>
          </Container>
          <MainBoxContainer></MainBoxContainer>
        </MainContainer>
      </Row>
    </>
  );
}

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
  border-bottom: 1px solid;
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
`;
const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
  padding: 50px;
  display: 100vh;
`;
const Transactions = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: flex-end;
  &::before {
    content: "◀";
    margin: 0 10px;
  }
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
  height: 120px;
  margin-top: 20px;
  padding: 20px;
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
  margin-left: 9%;
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

const MainBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  width: 100%;
`;
