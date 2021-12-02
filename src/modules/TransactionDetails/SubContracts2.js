import React from "react";
import styled from "styled-components";
import { Column, Row } from "simple-flexbox";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function SubContracts2() {
  return (
    <>
      <Header />
      <Row>
        <Sidebar />
        <MainContainer>
          <Row style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <img
                src="/images/back.svg"
                style={{ marginRight: "10px" }}
                // onClick={backButton}
              />
              <b>Transactions Details</b>
            </div>
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
                <img alt="" src="/images/rules.svg" style={{ width: "16px" }} />
                <Tab> Overview </Tab>
                <img
                  alt=""
                  src="/images/contracts.svg"
                  style={{ width: "16px" }}
                />
                <Tab>Contracts</Tab>
                <img
                  alt=""
                  src="/images/general.svg"
                  style={{ width: "16px" }}
                />
                <Tab>Events</Tab>
                <img
                  alt=""
                  src="/images/state change.svg"
                  style={{ width: "16px" }}
                />
                <Tab>State change</Tab>
              </TabList>
            </Tabs>
          </Container>
          <BoxContainer>
            <Row>
              <Heading>Contracts </Heading>
              <SubHead>App_Transactions_Validator</SubHead>
            </Row>
            <Column>
              <CommonDiv>
                <Row>
                  <Heads>
                    <img
                      src="/images/contracts.svg"
                      style={{ width: "1rem" }}
                    />
                    <TextLi>Subcontracts name</TextLi>
                  </Heads>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Head>
                    <img
                      src="/images/contracts.svg"
                      style={{ width: "1rem" }}
                    />
                    Subcontracts name
                  </Head>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Head>
                    <img
                      src="/images/contracts.svg"
                      style={{ width: "1rem" }}
                    />
                    Subcontracts name
                  </Head>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Head>
                    <img
                      src="/images/contracts.svg"
                      style={{ width: "1rem" }}
                    />
                    Subcontracts name
                  </Head>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Head>
                    <img
                      src="/images/contracts.svg"
                      style={{ width: "1rem" }}
                    />
                    Subcontracts name
                  </Head>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Head>
                    <img
                      src="/images/contracts.svg"
                      style={{ width: "1rem" }}
                    />
                    Subcontracts name
                  </Head>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Head>
                    <img
                      src="/images/contracts.svg"
                      style={{ width: "1rem" }}
                    />
                    Subcontracts name
                  </Head>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Head>
                    <img
                      src="/images/contracts.svg"
                      style={{ width: "1rem" }}
                    />
                    Subcontracts name
                  </Head>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Head>
                    <img
                      src="/images/contracts.svg"
                      style={{ width: "1rem" }}
                    />
                    Subcontracts name
                  </Head>
                </Row>
              </CommonDiv>
              <CommonDiv>
                <Row>
                  <Head>
                    <img
                      src="/images/contracts.svg"
                      style={{ width: "1rem" }}
                    />
                    Subcontracts name
                  </Head>
                </Row>
              </CommonDiv>
            </Column>
          </BoxContainer>
        </MainContainer>
      </Row>
    </>
  );
}
const SubHead = styled.div`
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;
  color: #102c78;
  font-size: 12px;
`;
const CommonDiv = styled.div``;

const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
  padding: 50px;
  display: 100vh;
`;

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
const BoxContainer = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  width: 100%;
  height: auto;
  margin-top: 20px;
  padding: 10px;
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

const Heading = styled.div`
  text-align: left;
  font: normal normal 600 14px/17px Inter;
  letter-spacing: 0px;
  color: #102c78;
  opacity: 1;
  width: 100%;
  max-width: 110px;
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  font: normal normal 600 14px/17px Inter;
  opacity: 1;
  width 150px;
  height: 50px;
  &:hover{
    background-color: blue;
    color: #ffffff;
  }
  
`;
const Heads = styled.div`
 display: flex;
  align-items: center;
  font: normal normal 600 14px/17px Inter;
  opacity: 1;
  width 150px;
  height: 50px;
  &:hover{
    background-color: blue;
    color: #ffffff;
  }
`;

const TextLi = styled.div`
  text-align: left;
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;

  opacity: 1;
  font-size: 14px;
`;
