import React from "react";
import styled from "styled-components";
import { Column, Row } from "simple-flexbox";
import MenuItem from "@mui/material/MenuItem";
import { red } from "@mui/material/colors";
export default function StateChange() {
  return (
    <MidContainer>
      <MenuItem value={30} color="#416BE0">
        <Column>
          <Heading>App_Transactions_Validator</Heading>
          <SHead>xdcabfe4184e5f9f600fe86d20e2a32c</SHead>
          <BoxContainer
            defaultValue={10}
            style={{
              width: "250px",
              height: "50px",
              marginTop: 10,
              background: "#F5F6FD",
              border: "solid #D5E0FF",
              outline: "none",
            }}
          >
            Mappping(address=unit256)
          </BoxContainer>
          <br />
          0.xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c{" "}
          <Row>
            {" "}
            <BoxContainer
              defaultValue={10}
              style={{
                width: "200px",
                height: "50px",
                marginTop: 10,
                background: "#ef9a9a",
                border: "solid #D5E0FF",
                outline: "none",
              }}
            >
              49634we2rdniwjk
            </BoxContainer>
          </Row>
        </Column>
      </MenuItem>
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
