import React, { useState } from "react";
import styled from "styled-components";
import { history } from "../../managers/history";

export default function Sidebar(props) {
  const [open, setOpen] = useState(false);
  const redirectToTransaction = () => {
    history.push("/transactions");
    setOpen(false);
  };
  const redirectToContract = () => {
    history.push("/contracts");
    setOpen(false);
  };
  const redirectToNetwork = () => {
    history.push("/networks");
    setOpen(false);
  };
  const redirectToAnalytics = () => {
    history.push("/analytics");
    setOpen(false);
  };
  const redirectToAlerting = () => {
    history.push("/alerting");
  };
  const redirectToLogout = () => {
    history.push("/");
  };
  const redirectToAbout = () => {
    history.push("/");
  };
  const [transactionIcon, setTransactionIcon] = useState(
    "/images/transactions.svg"
  );
  const [contractsIcon, setContractsIcon] = useState("/images/contracts.svg");
  const [networksIcon, setNetworksIcon] = useState("/images/networks.svg");
  const [analyticsIcon, setAnalyticsIcon] = useState("/images/analytics.svg");
  const [alertingIcon, setAlertingIcon] = useState("/images/alerting.svg");

  const changeSourceForIcons = (value) => {
    if (value === "transactions")
      setTransactionIcon("/images/Transactions_white.svg");
    if (value === "contracts") setContractsIcon("/images/contracts_white.svg");
    if (value === "networks") setNetworksIcon("/images/networks_white.svg");
    if (value === "analytics") setAnalyticsIcon("/images/Analytics_white.svg");
    if (value === "alerting") setAlertingIcon("/images/Alerting_white.svg");
  };
  const changeOriginalSourceForIcons = (value) => {
    if (value === "transactions")
      setTransactionIcon("/images/transactions.svg");
    if (value === "networks") setNetworksIcon("/images/networks.svg");
    if (value === "contracts") setContractsIcon("/images/contracts.svg");
    if (value === "analytics") setAnalyticsIcon("/images/analytics.svg");
    if (value === "alerting") setAlertingIcon("/images/alerting.svg");
  };

  return (
    <>
      <Hamburger src="/images/hamburger.svg" onClick={() => setOpen(!open)} />
      {open && (
        <SidebarContainer>
          <Wrapper onClick={redirectToAbout} style={{ marginTop: "4rem" }}>
            <Icon src="/images/Xmartly.svg" />
            <Heading>About Xmartly</Heading>
          </Wrapper>
          <Wrapper
            onClick={redirectToTransaction}
            onMouseOver={() => changeSourceForIcons("transactions")}
            onMouseOut={() => changeOriginalSourceForIcons("transactions")}
          >
            <Icon src={transactionIcon} />
            <Heading>Transactions</Heading>
          </Wrapper>
          <Wrapper
            onClick={redirectToContract}
            onMouseOver={() => changeSourceForIcons("contracts")}
            onMouseOut={() => changeOriginalSourceForIcons("contracts")}
          >
            <Icon src={contractsIcon} />
            <Heading>Contracts</Heading>
          </Wrapper>
          <Wrapper
            onClick={redirectToNetwork}
            onMouseOver={() => changeSourceForIcons("networks")}
            onMouseOut={() => changeOriginalSourceForIcons("networks")}
          >
            <Icon src={networksIcon} />
            <Heading>Networks</Heading>
          </Wrapper>
          <Wrapper
            onClick={redirectToAnalytics}
            onMouseOver={() => changeSourceForIcons("analytics")}
            onMouseOut={() => changeOriginalSourceForIcons("analytics")}
          >
            <Icon src={analyticsIcon} />
            <Heading>Analytics</Heading>
          </Wrapper>
          <Wrapper
            onClick={redirectToAlerting}
            onMouseOver={() => changeSourceForIcons("alerting")}
            onMouseOut={() => changeOriginalSourceForIcons("alerting")}
          >
            <Icon src={alertingIcon} />
            <Heading>Alerting</Heading>
          </Wrapper>
          <Wrapper style={{ marginTop: "8rem" }}>
            <Icon src="/images/Subtraction 2.svg" />
            <Heading>FAQs</Heading>
          </Wrapper>
          <Wrapper onClick={redirectToLogout}>
            <Icon src="/images/Log out.svg" />
            <Heading>Logout</Heading>
          </Wrapper>
          <CenterDiv>
            <img alt="" src="/images/Group 12.svg" />
          </CenterDiv>
        </SidebarContainer>
      )}
    </>
  );
}

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const Hamburger = styled.img`
  width: 35px;
  height: 32px;
  margin: 5px 12px 0px 9px;
  position: absolute;
  left: 123px;
  top: 5px;
  cursor: pointer;
  @media (min-width: 1024px) {
    display: none;
  }
  @media (max-width: 768px) {
    top: 22px;
    margin: 5px 12px 0px 12px;
  }
  @media (min-width: 375px) and(max-width: 1023px) {
    top: 22px;
    margin: 5px 12px 0px 12px;
  }
`;
const SidebarContainer = styled.div`
  position: absolute;
  z-index: 1000;
  background: #102c78 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 248px;
  padding-top: 15px;
  @media (min-width: 1023px) {
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
