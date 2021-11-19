import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import Line from "./graph";

export default function Analytics(props) {
  return (
    <div>
      <Column>
        <Header />
        <Row style={{ height: "100vh" }}>
          <Sidebar />
          <MainContainer>
            <SubContainer>
              <MainHeading>Analytics</MainHeading>
              <img src="/images/refresh.svg" />
            </SubContainer>
            <Container>
              <View>View analytics for contract</View>
              <Content>
                You can view analytics data per contract by using the contract
                picker below.
              </Content>
              <Card>
                <Column>
                  <Select
                    defaultValue={10}
                    style={{
                      width: 500,
                      marginTop: 10,
                      background: "#F5F6FD",
                      border: "solid #D5E0FF",
                      outline: "none",
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    // label="Age"
                    // onChange={handleChange}
                  >
                    <MenuItem color="#416BE0" value={10}>
                      <Column>
                        App_Transactions
                        <TransactionNumber>
                          xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c
                        </TransactionNumber>
                      </Column>
                    </MenuItem>

                    <MenuItem value={20} color="#416BE0">
                      <Column>
                        App_Transactions
                        <TransactionNumber>
                          xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c
                        </TransactionNumber>
                      </Column>
                    </MenuItem>

                    <MenuItem value={30} color="#416BE0">
                      <Column>
                        App_Transactions
                        <TransactionNumber>
                          xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c
                        </TransactionNumber>
                      </Column>
                    </MenuItem>
                  </Select>
                </Column>
              </Card>
            </Container>
            <Row
              style={{
                width: "100%",

                justifyContent: "space-between",
              }}
            >
              <GraphContainer>
                <Line />
              </GraphContainer>
              <GraphContainer>
                <Line />
              </GraphContainer>
            </Row>
            <Row
              style={{
                width: "100%",

                justifyContent: "space-between",
              }}
            >
              <GraphContainer>
                <Line />
              </GraphContainer>
              <GraphContainer>
                <Line />
              </GraphContainer>
            </Row>
          </MainContainer>
        </Row>
      </Column>
    </div>
  );
}
const MainContainer = styled.div`
  width: 100%;
  padding: 50px;
  background-color: #ecf0f7;
`;
const MainHeading = styled.div`
  text-align: left;
  font: normal normal 600 24px/29px Inter;
  letter-spacing: 0px;
  color: #191919;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  width: 100%;
  height: auto;
  margin-top: 20px;
  padding: 20px;
`;
const View = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #102c78;
`;
const Content = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #191919;
  margin-top: 20px;
`;

const Card = styled.div`
  border-radius: 4px;
`;
const TransactionNumber = styled.b`
  color: #416be0;
`;
const GraphContainer = styled.div`
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  height: auto;
  margin-top: 20px;
  padding: 20px;
  max-width: 590px;
`;
