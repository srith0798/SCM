import React from "react";
import { Row } from "simple-flexbox";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Historys from "./Historys";
import Destination from "./Destination";

export default function Rules() {
  return (
    <>
      <Header />
      <Row>
        <Sidebar />
        <MainContainer style={{ padding: "3rem" }}>
          <Row>
            <RowCorrecter>
              <Title>Alerting</Title>
              <Button>Add alert</Button>
            </RowCorrecter>
          </Row>
          <Container>
            <Tabs>
              <TabList>
                <img src="/images/rules.svg" style={{ width: "16px" }} />
                <Tab> Rules </Tab>
                <img src="/images/history.svg" style={{ width: "17px" }} />
                <Tab>History</Tab>
                <img src="/images/destination.svg" style={{ width: "16px" }} />
                <Tab>Destination</Tab>
              </TabList>
              <TabPanel>
                <Div>
                  <Row>
                    <ColumnOne>Contract Name</ColumnOne>
                    <ColumnOne>Address</ColumnOne>
                    <ColumnOne>Network</ColumnOne>
                    <ColumnOne>Alert Type</ColumnOne>
                    <ColumnOne></ColumnOne>
                    <ColumnOne></ColumnOne>
                  </Row>
                </Div>
                <Div>
                  <Row>
                    <ColumnOne>App_Transactions_Validator</ColumnOne>
                    <ColumnOne>0xndfahkk57..fj9</ColumnOne>
                    <ColumnOne>XDC Mainnet</ColumnOne>
                    <ColumnOne>Sucessfull transaction</ColumnOne>
                    <ColumnOne>enabled</ColumnOne>
                    <ColumnOne>
                      <img src="/images/delete.svg" style={{ width: "16px" }} />
                    </ColumnOne>
                  </Row>
                </Div>
                <Div>
                  <Row>
                    <ColumnOne>App_Transactions_Validator</ColumnOne>
                    <ColumnOne>0xndfahkk57..fj9</ColumnOne>
                    <ColumnOne>XDC Mainnet</ColumnOne>
                    <ColumnOne>Failed transaction</ColumnOne>
                    <ColumnOne>enabled</ColumnOne>
                    <ColumnOne>
                      <img src="/images/delete.svg" style={{ width: "16px" }} />
                    </ColumnOne>
                  </Row>
                </Div>
              </TabPanel>
              <TabPanel>
                <Historys />
              </TabPanel>
              <TabPanel>
                <Destination />
              </TabPanel>
            </Tabs>
          </Container>
        </MainContainer>
      </Row>
    </>
  );
}

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;
const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  width: 100%;
  background-color: #ffffff;
  height: 20rem;
  padding: 8px;
`;

const ColumnOne = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 14px;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  max-width: 300px;
`;
const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
  padding: 50px;
  display: 100vh;
`;

const Button = styled.button`
  background-image: url("/images/Add.svg");
  background-repeat: no-repeat;
  background-position: 8px;
  padding-left: 21px;
  background-size: 14px;
  position: relative;
  background-color: #3163f0;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  width: 130px;
  height: 34px;
  font-size: 14px;
`;

const Div = styled.div`
  // padding: 20px 20px 15px 30px;
  padding: 15px;
  border-bottom: 1px solid #e3e7eb;
`;
const RowCorrecter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
`;
