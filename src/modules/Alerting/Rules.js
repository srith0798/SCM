import React from "react";
import { Row } from "simple-flexbox";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Historys from "./Historys";

export default function Rules() {
  return (
    <>
      <Header />
      <Row>
        <Sidebar />
        <MainContainer>
          <Row style={{ display: "flex", justifyContent: "space-between" }}>
            <Transactions>
              <b>Alerting</b>
            </Transactions>
            <Button>Add alert</Button>
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
                <TableContainer>
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
                        <img
                          src="/images/delete.svg"
                          style={{ width: "16px" }}
                        />
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
                        <img
                          src="/images/delete.svg"
                          style={{ width: "16px" }}
                        />
                      </ColumnOne>
                    </Row>
                  </Div>
                </TableContainer>
              </TabPanel>
              <TabPanel>
                <Historys />
              </TabPanel>
            </Tabs>
          </Container>
        </MainContainer>
      </Row>
    </>
  );
}

const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  width: 76rem;
  background-color: #ffffff;
  height: 20rem;
  padding: 8px;
`;

const Transactions = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: flex-end;
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
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  margin-top: 20px;
  height: auto;
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

const TableContainer = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  width: 100%;
  height: 400px;
`;
const Div = styled.div`
  // padding: 20px 20px 15px 30px;
  padding: 15px;
  border-bottom: 1px solid #e3e7eb;
`;
