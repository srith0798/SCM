import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import Line from "./graph";

export default function FullScreen() {
  return (
    <div>
      <Column>
        <Header />
        <Row>
          <Sidebar />
        </Row>
        <Container>
          <FirstContainer>
            <img src="/images/back.svg" />
            <Heading>Transactions over time</Heading>
          </FirstContainer>
          <SecondContainer>
            <ExpandButton>Expand</ExpandButton>
            <img src="/images/refresh.svg" />
          </SecondContainer>
        </Container>
        <GraphContainer>
          <Line />
        </GraphContainer>
      </Column>
    </div>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const FirstContainer = styled.div``;
const SecondContainer = styled.div``;
const Heading = styled.div``;
const ExpandButton = styled.button`
  background-image: url("/images/Add.svg");
  background-repeat: no-repeat;
  background-position: 8px;
  padding-left: 21px;
  background-size: 14px;
  position: relative;
  background-color: #3163f0;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  width: 130px;
  height: 34px;
  font-size: 14px;
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
