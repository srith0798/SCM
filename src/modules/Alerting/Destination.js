import React from "react";
import { Row } from "simple-flexbox";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";

export default function Destination() {
  return (
    <>
      <MainContainer>
        <Div>
          <Row>
            <ColumnOne>Destinations</ColumnOne>
          </Row>
          <RowContainer>
            <Buttonn>
              <img src="/images/slack.svg" style={{ width: "1rem" }} /> Slack
            </Buttonn>
            <Buttonn>
              <img src="/images/webhook.svg" style={{ width: "1rem" }} />
              Webhook
            </Buttonn>
            <Buttonn>
              <img src="/images/email.svg" style={{ width: "1rem" }} />
              Email
            </Buttonn>
          </RowContainer>
        </Div>

        <ColumnOne>Active Destination</ColumnOne>
        <Div>
          <Row>
            <img src="/images/email.svg" style={{ width: "1rem" }} />
            <ColumnTwo>Finance</ColumnTwo>
            <ColumnTwo>it@supportteam.com</ColumnTwo>
            <ColumnTwo>
              <ColorChanging>verified</ColorChanging>
            </ColumnTwo>
            <ColumnTwo>
              <img src="/images/deletes.svg" style={{ width: "1rem" }} />
            </ColumnTwo>
          </Row>
        </Div>
        <Div>
          <Row>
            <Icon src="/images/webhook.svg" />
            <ColumnTwo> Finance</ColumnTwo>
            <ColumnTwo>http://webhook.site/aOe</ColumnTwo>
            <ColumnTwo>
              <ColorChanging>connected</ColorChanging>
            </ColumnTwo>
            <ColumnTwo>
              <Icon src="/images/deletes.svg" />
            </ColumnTwo>
          </Row>
        </Div>
      </MainContainer>
    </>
  );
}
const MainContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  margin-top: 20px;
  height: auto;
`;
const Div = styled.div`
  // padding: 1rem;
  // border-bottom: 1px solid #e3e7eb;
`;
const ColumnOne = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 14px;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  margin-bottom: 20px;
  border-bottom: 2px solid #e3e7eb;
`;
const Buttonn = styled.div`
  top: 279px;
  left: 341px;
  width: 112px;
  height: 42px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #416be0;
  border-radius: 6px;
  opacity: 1;
  align-items: center;
  display: flex;
  justify-content: center;
`;
const ColumnTwo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 14px;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  max-width: 200px;
  margin: 4px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 374px;
  margin-bottom: 20px;
`;
const ColorChanging = styled.text`
  text-align: left;
  font: normal normal normal 14px/17px Inter;
  letter-spacing: 0px;
  color: #00a58c;
  opacity: 1;
`;

const Icon = styled.img`
  width: 1rem;
`;
