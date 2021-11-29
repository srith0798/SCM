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
            <BoxContainer2>Mappping(address=unit256)</BoxContainer2>
            <Heading style={{ paddingTop: "20px" }}>balances</Heading>
          </Row>
          <Row>
            <NewDivv>0.xdcabfe4184e5f9f600fe8435nfsa3599be1768b3c</NewDivv>
            <BoxContainer>84615710000481040</BoxContainer>
            <BoxContainer1>24</BoxContainer1>
          </Row>
          <Row>
            <NewDivv>0.xdcabfe4184e5f9f600fe8435bdsa3599be1768b3c</NewDivv>
            <BoxContainer>24274685008860000</BoxContainer>
            <BoxContainer1>242746850088</BoxContainer1>
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
  display: flex;
  height: 300px;
`;
const SecondContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

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
  background: #fde7e7 0% 0% no-repeat padding-box;
  border: 1px solid #ce1a1a;
  border-radius: 4px;
  opacity: 1;
`;
const NewDivv = styled.div`
  font-family: bold;
  display: flex;
`;
const BoxContainer1 = styled.div`
  background: #1ace2f 0% 0% no-repeat padding-box;
border: 1px solid #1ACE2F
  border-radius: 4px;
  opacity: 1;
`;

const BoxContainer2 = styled.div`
  background: #3163f11a 0% 0% no-repeat padding-box;
  border: 1px solid #3163f0;
  border-radius: 4px;
  opacity: 1;
`;
