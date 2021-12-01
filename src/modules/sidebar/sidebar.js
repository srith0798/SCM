import React from "react";
import styled from "styled-components";
import { history } from "../../managers/history";

const SidebarContainer = styled.div`
  background: #102c78 0% 0% no-repeat padding-box;
  width: 100%;
  max-width: 200px;
  @media (min-width: 300px) and (max-width: 1024px) {
    display: none;
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

export default function Sidebar() {
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
  return (
    <SidebarContainer>
      <Wrapper onClick={redirectToTransaction} style={{ marginTop: "20px" }}>
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
      <Wrapper>
        <Icon src="/images/Alerting.svg" />
        <Heading>Alerting</Heading>
      </Wrapper>
    </SidebarContainer>
  );
}
