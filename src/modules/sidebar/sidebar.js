import React from "react";
import styled from "styled-components";
import { history } from "../../managers/history";

const SidebarContainer = styled.div`
  background: #102c78 0% 0% no-repeat padding-box;
  width: 100%;
  max-width: 200px;
  padding: 30px;
  @media (min-width: 300px) and (max-width: 1024px) {
    display: none;
  }
`;
const Icon = styled.img``;
const Wrapper = styled.div`
  flex-wrap: wrap;

  cursor: pointer;
  width: 100%;
  max-width: 240px;
  white-space: nowrap;
  &:hover {
    background: #1d3c93;
  }
`;

const Heading = styled.span`
  color: #ffffff;
`;

function Sidebar() {
  const redirectToTransaction = () => {
    history.push("/transaction-details");
  };
  const redirectToContract = () => {
    history.push("/contract");
  };
  const redirectToNetwork = () => {
    history.push("/network");
  };
  const redirectToAnalytics = () => {
    history.push("/analytics-Maincomponent");
  };
  return (
    <SidebarContainer>
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
      <Wrapper>
        <Icon src="/images/Alerting.svg" />
        <Heading>Alerting</Heading>
      </Wrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
