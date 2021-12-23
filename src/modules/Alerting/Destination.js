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

        <ColumnOne style={{ paddingBottom: "10px", paddingLeft: "20px" }}>
          Active Destination
        </ColumnOne>
        <LastDiv>
          <Div>
            <RowData>
              <Img alt="" src="/images/email.svg" />
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
            </RowData>
          </Div>
          <Div>
            <RowData>
              <Img alt="" src="/images/email.svg" />
              <ColumnTwo style={{ color: "#191919" }}> Finance</ColumnTwo>
              <ColumnTwo style={{ fontWeight: "normal" }}>
                http://webhook.site/ssss
              </ColumnTwo>
              <ColumnTwo>
                <ColorChanging style={{ fontWeight: "normal" }}>
                  Connected
                </ColorChanging>
              </ColumnTwo>
              <ColumnTwo>
                <Icon src="/images/deletes.svg" style={{ width: "1.1rem" }} />
              </ColumnTwo>
            </RowData>
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
  padding-left: 10px;
  // border-bottom: 1px solid #e3e7eb;
`;
const LastDiv = styled.div`
  overflow-y: hidden;
  height: 109px;
  @media (min-width: 300px) and (max-width: 767px) {
    width: 100%;
    ::-webkit-scrollbar {
      width: 10px;
      border: 0.5px solid rgb(204, 229, 243);
      outline: none;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background:#3163f0;
      border-radius: 15px;
    }
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
  }
`;
const ColumnTwo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.875rem;
  font-weight: 600;
  min-width: 200px;
  color: #102c78;
  width: 100%;
  max-width: 11.25rem;
  margin: 0.25rem;
  @media (min-width: 300px) and (max-width: 768px) {
  }
`;
const RowData = styled.div`
  display: flex;
  @media (min-width: 300px) and (max-width: 768px) {
    column-gap: 55px;
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
const Img = styled.img`
  width: 1rem;
  @media (min-width: 300px) and (max-width: 768px) {
    margin-right: -49px;
    width: 1rem;
  }
`;
