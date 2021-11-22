import React, { setstate, state } from "react";
import styled from "styled-components";

export default function SubContracts() {
  return (
    <MainDiv>
      <MainBoxContainer>
        <BoxContainer
          style={{
            width: "250px",
            height: "100px",
            marginTop: 10,
            background: "#F5F6FD",
            border: "solid #D5E0FF",
            outline: "none",
          }}
        >
          <Heading>App_Transactions_Validator</Heading>
          xdcabfe4184e5f9f600fe86d20e
        </BoxContainer>

        <BoxContainer
          style={{
            width: "250px",
            height: "100px",
            marginTop: 10,
            background: "#F5F6FD",
            border: "solid #D5E0FF",
            outline: "none",
          }}
        >
          <Heading>App_Transactions_Validator</Heading>
          xdcabfe4184e5f9f600fe86d20e
        </BoxContainer>

        <BoxContainer
          style={{
            width: "250px",
            height: "100px",
            marginTop: 10,
            background: "#F5F6FD",
            border: "solid #D5E0FF",
            outline: "none",
          }}
        >
          <Heading>App_Transactions_Validator</Heading>
          xdcabfe4184e5f9f600fe86d20e
        </BoxContainer>
      </MainBoxContainer>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  height: 60vh;
  margin-top: 20px;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 8px 10px 25px 40px;
`;
const BoxContainer = styled.div`
  padding: 10px;
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
const MainBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  width: 100%;
`;
