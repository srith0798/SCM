import React from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import Select from "@mui/material/Select";
export default function Events() {
  return (
    <MidContainer>
      <ThirdBoxContainer>
        <Row
          style={{
            display: "flex",
            width: "100%",

            justifyContent: "space-between",
          }}
        >
          <CAllADDs style={{ padding: "10px" }}>
            Event_Name:
            <br />
            <Select
              style={{
                width: "200px",
                marginTop: "2px",
                background: "#F5F6FD",

                height: "3rem",
              }}
            />
          </CAllADDs>
          <CAllADDs style={{ padding: "10px" }}>
            Contract:
            <br />
            <Select
              style={{
                width: "200px",
                marginTop: "2px",
                background: "#F5F6FD",

                height: "3rem",
              }}
            />
          </CAllADDs>
        </Row>
      </ThirdBoxContainer>
      <Heading style={{ paddingLeft: "20px" }}>
        App_Transactions_Validator
      </Heading>
      <BoxContainer
        defaultValue={10}
        style={{
          width: "100%",
          height: "130px",
          background: "#F5F6FD",
          paddingLeft: "20px",
        }}
      >
        <Heading>
          [ <br />
          "From": xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c
          <br />
          "to"
          <br />
          "Value"
          <br />]
        </Heading>
      </BoxContainer>
      <Heading style={{ padding: "20px" }}>Approval</Heading>
      <br />
      <Heading style={{ paddingLeft: "20px" }}>
        App_Transactions_Validator
      </Heading>
      <BoxContainer
        defaultValue={10}
        style={{
          width: "100%",
          height: "150px",
          borderspacing: "10px",
          background: "#F5F6FD",
          paddingLeft: "20px",
        }}
      >
        <Heading>
          ["Owner": xhadhfbskn74833n3ioj5n35ngnncsdjkcsvkdsc
          <br />
          "Spender" :x24rfn35i6n3n434rnffcjckibw42uh4c
          <br />
          "Amount" :k23rcwe5fqef5f4ed345sdwff34g55g3afc
          <br />]
        </Heading>
      </BoxContainer>
    </MidContainer>
  );
}

const MidContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  margin-top: 20px;
  height: 100vh;
  width: 100%;
`;

const ThirdBoxContainer = styled.div`
  text-align: left;
  padding: 10px;
  font: normal normal 600 14px/17px Inter;
  letter-spacing: 0px;
  color: #102c78;
  opacity: 1;
  width: 100%;
  max-width: 400px;
`;

const CAllADDs = styled.div`
  padding: "200px";
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

const BoxContainer = styled.div`
  padding: 0.625rem;
`;
