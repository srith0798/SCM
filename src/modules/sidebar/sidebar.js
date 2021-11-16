import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  background: #102c78 0% 0% no-repeat padding-box;
  width: 100%;
  max-width: 200px;
`;
const Icon = styled.img``;
const Wrapper = styled.div`
  flex-wrap: wrap;
  padding: 40px 0px 0px 25px;
  cursor: pointer;
  width: 100%;
  max-width: 240px;
  white-space: nowrap;
`;

const Heading = styled.span`
  letter-spacing: 0px;
  color: #8ca6f0;
  opacity: 1;
  margin-left: 15px;
`;

function Sidebar() {
  const redirectToTransaction = () => {};
  return (
    <SidebarContainer>
      <Wrapper onClick={redirectToTransaction}>
        <Icon src="/images/Transactions.svg" />
        <Heading>Transactions</Heading>
      </Wrapper>
      <Wrapper>
        <Icon src="/images/contracts.svg" />
        <Heading>Contracts</Heading>
      </Wrapper>
      <Wrapper>
        <Icon src="/images/networks.svg" />
        <Heading>Networks</Heading>
      </Wrapper>
      <Wrapper>
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
