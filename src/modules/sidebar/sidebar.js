import React from "react";
import styled from "styled-components";
import { history } from "../../managers/history";

const SidebarContainer = styled.div`
  width: 100%;
  max-width: 200px;

  @media (min-width: 300px) and (max-width: 1024px) {
    // display: none;
    position: absolute;
    z-index: 1;
  }
`;
const Icon = styled.img`
  cursor: pointer;
  margin-right: 13px;
`;
const Wrapper = styled.div`
  flex-wrap: wrap;
  cursor: pointer;
  width: 100%;
  max-width: 240px;
  white-space: nowrap;
  padding: 23px;
  &:hover {
    background: #1d3c93;
  }
`;

const Heading = styled.span`
  color: #ffffff;
`;
const Div = styled.div`
  background: #102c78 0% 0% no-repeat padding-box;
`;

export default function Sidebar(props) {
  const redirectToTransaction = () => {
    history.push("/transaction-list");
  };
  const redirectToContract = () => {
    history.push("/contract");
  };
  const redirectToNetwork = () => {
    history.push("/network");
  };
  const redirectToAnalytics = () => {
    history.push("/analytics");
  };
  const redirectToAlerting = () => {
    history.push("/Alerting");
  };
  const redirectToFaqs = () => {
    history.push("/");
  };
  const redirectToLogout = () => {
    history.push("/");
  };
  const redirectToAbout = () => {
    history.push("/");
  };

  return (
    <Div>
      {/* {props.openHumburger && ( */}
      <SidebarContainer>
        <Wrapper onClick={redirectToAbout} style={{ marginTop: "4rem" }}>
          <Icon src="/images/Xmartly.svg" />
          <Heading>About Xmartly</Heading>
        </Wrapper>
        <Wrapper onClick={redirectToTransaction}>
          <Icon src="/images/Transactions.svg" />
          <Heading>Transactions</Heading>
        </Wrapper>
        <Wrapper onClick={redirectToContract}>
          <Icon src="/images/contracts.svg" />
          <Heading>Contracts</Heading>
        </Wrapper>
        <Wrapper onClick={redirectToNetwork}>
          <Icon src="/images/networks.svg" />
          <Heading>Networks</Heading>
        </Wrapper>
        <Wrapper onClick={redirectToAnalytics}>
          <Icon src="/images/Analytics.svg" />
          <Heading>Analytics</Heading>
        </Wrapper>
        <Wrapper onClick={redirectToAlerting}>
          <Icon src="/images/Alerting.svg" />
          <Heading>Alerting</Heading>
        </Wrapper>
        <Spacing>
          <Wrapper onClick={redirectToFaqs}>
            <Icon src="/images/Subtraction 2.svg" />
            <Heading>FAQs</Heading>
          </Wrapper>
        </Spacing>
        <Wrapper onClick={redirectToLogout}>
          <Icon src="/images/Log out.svg" />
          <Heading>Logout</Heading>
        </Wrapper>
        <CenterDiv>
          <img src="/images/Group 12.svg" />
        </CenterDiv>
      </SidebarContainer>
      {/* )} */}
    </Div>
  );
}

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;
const Spacing = styled.div`
  margin-top: 14rem;
`;
