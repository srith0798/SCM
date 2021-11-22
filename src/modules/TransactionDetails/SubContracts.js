import React, { setstate, state } from "react";
import styled from "styled-components";
import { Column, Row } from "simple-flexbox";

export default function SubContracts() {
  return (
    <SSSSS>
      <BoxContainer
        defaultValue={10}
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
        defaultValue={10}
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
        defaultValue={10}
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
    </SSSSS>
  );
}

const SSSSS = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;

  height: 60vh;
  margin-top: 20px;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 8px 10px 25px 40px;
`;
// const First = styled.div`
//   display: flex;
//   width: 100%;
// `;
const BoxContainer = styled.div`
  padding: 10px;
`;

const Card = styled.div`
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
