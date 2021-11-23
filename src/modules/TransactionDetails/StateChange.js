import React from "react";
import styled from "styled-components";
import { Column, Row } from "simple-flexbox";
export default function StateChange() {
  return (
    <MidContainer>
      <SecondContainer>
        <Column>
          <Heading style={{ paddingTop: "20px" }}>
            App_Transactions_Validator
          </Heading>
          <SHead>xdcabfe4184e5f9f600fe86d20e2a32c</SHead>
          <Row>
            <BoxContainer
              defaultValue={10}
              style={{
                width: "250px",
                height: "50px",
                background: "#F5F6FD",
                border: "solid #D5E0FF",
              }}
            >
              Mappping(address=unit256)
            </BoxContainer>
            <Heading style={{ paddingTop: "20px", paddingLeft: "20px" }}>
              balances
            </Heading>
          </Row>
          <Row>
            <br />
            0.xdcabfe4184e5f9f600fe8435nfsa3599be1768b3c
            <BoxContainer
              defaultValue={10}
              style={{
                width: "200px",
                height: "50px",
                background: "#ef9a9a",
                border: "solid #D5E0FF",
              }}
            >
              84615710000481040
            </BoxContainer>
          </Row>
          <Row>
            <br />
            0.xdcabfe4184e5f9f600fe8435bdsa3599be1768b3c
            <BoxContainer
              style={{
                width: "200px",
                height: "50px",
                background: "#ef9a9a",
                border: "solid #D5E0FF",
              }}
            >
              24274685008860000
            </BoxContainer>
          </Row>
        </Column>
      </SecondContainer>
    </MidContainer>
  );
}
const MidContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  margin-top: 20px;
  height: 300px;
`;
const SecondContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  height: 60vh;
  margin-top: 20px;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 8px 10px 25px 40px;
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
const SHead = styled.div`
  padding: 10px;
`;
const BoxContainer = styled.div`
  padding: 10px;
`;
