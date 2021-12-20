import React from "react";
import { Row } from "simple-flexbox";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";

export default function Historys() {
  return (
    <MainContainer>
      {/* <TableContainer> */}
      <DetailBox>
        <NewDiv>
          <Row>
            <ColumnOne>Alert Type</ColumnOne>
            <ColumnOne>Contract</ColumnOne>
            <ColumnOne>Tx Hash</ColumnOne>
            <ColumnOne>Network</ColumnOne>
            <ColumnOne>When</ColumnOne>
          </Row>
        </NewDiv>
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
      </DetailBox>
      {/* </TableContainer> */}
    </MainContainer>
  );
}
const MainContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  opacity: 1;
  margin-top: 1.25rem;
  height: 15.625rem;
`;

const TableContainer = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  width: 100%;
  height: 25rem;
  padding: 0.625rem;
   @media (min-width: 300px) and (max-width: 767px) {
    
    overflow: scroll;
    width: 100%;
    height: 281px;
    overflow-y: auto;
    position: relative;
    &::-webkit-scrollbar {
        width: 10px;
        border: 0.5px solid blue;
        outline:none;
    }
    `;
const NewDiv = styled.div`
  padding: 0.938rem;
  border-bottom: 0.063rem solid #e3e7eb;

  padding-left: 20px;
  @media (min-width: 300px) and (max-width: 768px) {
    margin-right: -251px;
  }
`;
const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 300px) and (max-width: 768px) {
    overflow: scroll;
  }
`;
const Div = styled.div`
  padding: 0.938rem;
  border-bottom: 0.063rem solid #e3e7eb;
  @media (min-width: 300px) and (max-width: 768px) {
   margin-right: -251px;
  
`;
const NewDivOne = styled.div`
  padding-left: 0.938rem;
  padding-bottom: 0.938rem;
  border-bottom: 0.063rem solid #e3e7eb;
    @media (min-width: 300px) and (max-width: 768px) {
   
   overflow: scroll;
  
  
`;
const ColumnOne = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.875rem;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  max-width: 18.75rem;
  @media (min-width: 300px) and (max-width: 768px) {
    margin-right: 20px;
  }
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
