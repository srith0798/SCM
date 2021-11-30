import React from "react";
import styled from "styled-components";
import { Column, Row } from "simple-flexbox";
export default function StateChange() {
  return (
    <MidContainer>
      <Column>
        <Heading style={{ marginBottom: "11px" }}>
          App_Transactions_Validator
        </Heading>
        <SHead style={{ marginBottom: "11px" }}>
          xdcabfe4184e5f9f600fe86d20e2a32c
        </SHead>
        <Row>
          <BoxContainer2 style={{ marginBottom: "11px", padding: "1px" }}>
            mapping (address = uint256)
          </BoxContainer2>
          <Div style={{ margin: "2px" }}>Balances</Div>
        </Row>
        <SHead>
          <Row>
            <NewDivv style={{ marginBottom: "11px" }}>
              0.xdcabfe4184e5f9f600fe8435nfsa3599bffe1c
            </NewDivv>
            <BoxContainer style={{ marginBottom: "11px" }}>
              84615710000481040
            </BoxContainer>
            <BoxContainer1 style={{ marginBottom: "11px", marginLeft: "10px" }}>
              24
            </BoxContainer1>
          </Row>
        </SHead>
        <SHead>
          <Row>
            <NewDivv style={{ marginBottom: "11px" }}>
              0.xdcabfe4184e5f9f600fe8435bdsa3599be176
            </NewDivv>
            <BoxContainer style={{ marginBottom: "11px" }}>
              24274685008860000
            </BoxContainer>
            <BoxContainer1 style={{ marginBottom: "11px", marginLeft: "10px" }}>
              242746850088
            </BoxContainer1>
          </Row>
        </SHead>
      </Column>
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
  padding: 20px;
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
  border-bottom: 2px #c9d1cb;
`;
const BoxContainer = styled.div`
  background: #fde7e7 0% 0% no-repeat padding-box;
  border: 1px solid #ce1a1a;
  border-radius: 4px;
  opacity: 1;
`;
const NewDivv = styled.div`
  top: 532px;
  left: 336px;
  width: 349px;
  height: 17px;
  text-align: left;
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;
  color: #191919;
  opacity: 1;
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
const Div = styled.div`
  text-align: left;
  font: normal normal medium 16px/20px Inter;
  letter-spacing: 0px;
  color: #102c78;
  opacity: 1;
`;
