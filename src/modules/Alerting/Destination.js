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
            <ColumnOne style={{ borderBottom: "none" }}>Destinations</ColumnOne>
          </Row>
          <RowContainer>
            <Buttonn>
              <img
                alt=""
                src="/images/slack.svg"
                style={{ marginRight: "0.25rem", width: "1.3rem" }}
              />{" "}
              Slack
            </Buttonn>
            <Buttonn>
              <img
                alt=""
                src="/images/webhook.svg"
                style={{ marginRight: "0.25rem", width: "1.3rem" }}
              />
              Webhook
            </Buttonn>
            <Buttonn>
              <img
                alt=""
                src="/images/email.svg"
                style={{ marginRight: "0.25rem", width: "1.3rem" }}
              />
              Email
            </Buttonn>
          </RowContainer>
        </Div>

        <ColumnOne style={{ paddingBottom: "10px" }}>
          Active Destination
        </ColumnOne>
        <LastDiv>
          <Div>
            <Row>
              <img
                alt=""
                src="/images/email.svg"
                style={{ marginRight: "4px", width: "1rem" }}
              />
              <ColumnTwo style={{ color: "#191919" }}>Finance</ColumnTwo>
              <ColumnTwo style={{ fontWeight: "normal" }}>
                it@supportteam.com
              </ColumnTwo>
              <ColumnTwo>
                <ColorChanging style={{ fontWeight: "normal" }}>
                  Verified
                </ColorChanging>
              </ColumnTwo>
              <ColumnTwo>
                <img
                  alt=""
                  src="/images/deletes.svg"
                  style={{ width: "1.1rem" }}
                />
              </ColumnTwo>
            </Row>
          </Div>
          <Div>
            <Row>
              <img
                alt=""
                src="/images/email.svg"
                style={{ marginRight: "0.25rem", width: "1rem" }}
              />
              <ColumnTwo style={{ color: "#191919" }}> Finance</ColumnTwo>
              <ColumnTwo style={{ fontWeight: "normal" }}>
                http://webhook.site/aOe
              </ColumnTwo>
              <ColumnTwo>
                <ColorChanging style={{ fontWeight: "normal" }}>
                  Connected
                </ColorChanging>
              </ColumnTwo>
              <ColumnTwo>
                <Icon src="/images/deletes.svg" style={{ width: "1.1rem" }} />
              </ColumnTwo>
            </Row>
          </Div>
        </LastDiv>
      </MainContainer>
    </>
  );
}
const MainContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  opacity: 1;
  margin-top: 1.25rem;
  height: auto;
`;
const Div = styled.div`
  padding-bottom: 0.5rem;
  // border-bottom: 1px solid #e3e7eb;
`;
const LastDiv = styled.div`
  @media (min-width: 300px) and (max-width: 768px) {
    display: flex;
    overflow: auto;
    flex-direction: column;
  }
`;
const ColumnOne = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.875rem;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  margin-bottom: 1.25rem;
  border-bottom: 0.125rem solid #e3e7eb;
`;
const Buttonn = styled.div`
  width: 6rem;
  height: 2.5rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #416be0;
  border-radius: 0.375rem;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #1d3c93;
  font-size: 0.875rem;
  @media (min-width: 300px) and (max-width: 768px) {
    width: 5rem;
  }
`;
const ColumnTwo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.875rem;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  max-width: 11.25rem;
  margin: 0.25rem;
  @media (min-width: 300px) and (max-width: 768px) {
  }
`;

const RowContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 21.25rem;
  margin-bottom: 1.25rem;
  @media (min-width: 300px) and (max-width: 768px) {
  }
`;
const ColorChanging = styled.text`
  color: #00a58c;
  font-size: 0.875rem;
`;

const Icon = styled.img`
  width: 1rem;
`;
