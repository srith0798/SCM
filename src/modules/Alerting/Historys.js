import React from "react";
import { Row } from "simple-flexbox";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";

export default function Historys() {
  return (
    <div>
      <MainContainer>
        <Div>
          <Row>
            <ColumnOne>Alert Type</ColumnOne>
            <ColumnOne>Contracts</ColumnOne>
            <ColumnOne>Tx Hash</ColumnOne>
            <ColumnOne>Network</ColumnOne>
            <ColumnOne>When</ColumnOne>
          </Row>
        </Div>
        <Div>
          <Row>
            <ColumnTwo style={{ fontSize: "0.875rem", color: "#191919" }}>
              Sucessfull transaction
            </ColumnTwo>
            <ColumnTwo style={{ fontSize: "0.875rem", color: "#191919" }}>
              App_Transactions
            </ColumnTwo>
            <ColumnTwo style={{ fontSize: "0.875rem", color: "#191919" }}>
              0xndfahkk57..fj9
            </ColumnTwo>
            <ColumnTwo style={{ fontSize: "0.875rem", color: "#191919" }}>
              XDC Mainnet
            </ColumnTwo>
            <ColumnTwo style={{ fontSize: "0.875rem", color: "#191919" }}>
              02.2.2022 12:02
            </ColumnTwo>
          </Row>
        </Div>
        <Div>
          <Row>
            <ColumnTwo style={{ fontSize: "0.875rem", color: "#191919" }}>
              Sucessfull transaction
            </ColumnTwo>
            <ColumnTwo style={{ fontSize: "0.875rem", color: "#191919" }}>
              App_Transactions
            </ColumnTwo>
            <ColumnTwo style={{ fontSize: "0.875rem", color: "#191919" }}>
              0xndfahkk57..fj9
            </ColumnTwo>
            <ColumnTwo style={{ fontSize: "0.875rem", color: "#191919" }}>
              XDC Mainnet
            </ColumnTwo>
            <ColumnTwo style={{ fontSize: "0.875rem", color: "#191919" }}>
              02.2.2022 12:02
            </ColumnTwo>
          </Row>
        </Div>
      </MainContainer>
    </div>
  );
}
const MainContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  opacity: 1;
  margin-top: 1.25rem;
  height: 15.625rem;
`;

const Div = styled.div`
  padding: 0.938rem;
  border-bottom: 0.063rem solid #e3e7eb;
`;
const ColumnOne = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.875rem;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  max-width: 18.75rem;
`;

const ColumnTwo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.875rem;
  color: #191919;
  // font-weight: 600;
  width: 100%;
  max-width: 18.75rem;
`;
