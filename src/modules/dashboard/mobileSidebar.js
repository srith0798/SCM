import React, { useState } from "react";
import styled from "styled-components";
import { history } from "../../managers/history";
import utility from "../../utility";

const Hamburger = styled.img`
  width: 25px;
  height: 25px;
  margin: 5px 12px 0px 9px;
  position: absolute;
  left: 123px;
  top: 51px;
  cursor: pointer;
  @media (min-width: 769px) {
    display: none;
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
  width: 280px;
  padding-top: 15px;

  @media (min-width: 769px) {
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
// const Div = styled.div`
//   background: #102c78 0% 0% no-repeat padding-box;
// `;

export default function Sidebar(props) {
  const [open, setOpen] = useState(false);
  const redirectToTransaction = () => {
    history.push("/dashboard/transaction-list");
  };
  const redirectToContract = () => {
    history.push("/dashboard/contract");
  };
  const redirectToNetwork = () => {
    history.push("/dashboard/network");
  };
  const redirectToAnalytics = () => {
    history.push("/dashboard/analytics");
  };
  const redirectToAlerting = () => {
    history.push("/dashboard/Alerting");
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
  const [transactionIcon, setTransactionIcon] = useState(
    "/images/Transactions.svg"
  );
  const [contractsIcon, setContractsIcon] = useState(
    "/images/Transactions.svg"
  );
  const [networksIcon, setNetworksIcon] = useState("/images/networks.svg");
  const [analyticsIcon, setAnalyticsIcon] = useState("/images/Analytics.svg");
  const [alertingIcon, setAlertingIcon] = useState("/images/Alerting.svg");

  const changeSourceForIcons = (value) => {
    if (value === "Transaction")
      setTransactionIcon("/images/Transactions_white.svg");
    if (value === "Contracts") setContractsIcon("/images/contracts_white.svg");
    if (value === "Networks") setNetworksIcon("/images/networks_white.svg");
    if (value === "Analytics") setAnalyticsIcon("/images/Analytics_white.svg");
    if (value === "Alerting") setAlertingIcon("/images/Alerting_white.svg");
  };
  const changeOriginalSourceForIcons = (value) => {
    if (value === "Transaction") setTransactionIcon("/images/Transactions.svg");
    if (value === "Networks") setNetworksIcon("/images/networks.svg");
    if (value === "Contracts") setContractsIcon("/images/contracts.svg");
    if (value === "Analytics") setAnalyticsIcon("/images/Analytics.svg");
    if (value === "Alerting") setAlertingIcon("/images/Alerting.svg");
  };

  return (
    <>
      <Hamburger
        src="/images/overview_grey.svg"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <SidebarContainer>
          <Wrapper onClick={redirectToAbout} style={{ marginTop: "4rem" }}>
            <Icon src="/images/Xmartly.svg" />
            <Heading>About Xmartly</Heading>
          </Wrapper>
          <Wrapper
            onClick={redirectToTransaction}
            onMouseOver={() => changeSourceForIcons("Transaction")}
            onMouseOut={() => changeOriginalSourceForIcons("Transaction")}
          >
            <Icon src={transactionIcon} />
            <Heading>Transactions</Heading>
          </Wrapper>
          <Wrapper
            onClick={redirectToContract}
            onMouseOver={() => changeSourceForIcons("Contracts")}
            onMouseOut={() => changeOriginalSourceForIcons("Contracts")}
          >
            <Icon src={contractsIcon} />
            <Heading>Contracts</Heading>
          </Wrapper>
          <Wrapper
            onClick={redirectToNetwork}
            onMouseOver={() => changeSourceForIcons("Networks")}
            onMouseOut={() => changeOriginalSourceForIcons("Networks")}
          >
            <Icon src={networksIcon} />
            <Heading>Networks</Heading>
          </Wrapper>
          <Wrapper
            onClick={redirectToAnalytics}
            onMouseOver={() => changeSourceForIcons("Analytics")}
            onMouseOut={() => changeOriginalSourceForIcons("Analytics")}
          >
            <Icon src={analyticsIcon} />
            <Heading>Analytics</Heading>
          </Wrapper>
          <Wrapper
            onClick={redirectToAlerting}
            onMouseOver={() => changeSourceForIcons("Alerting")}
            onMouseOut={() => changeOriginalSourceForIcons("Alerting")}
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
const Spacing = styled.div`
  margin-top: 8rem;
`;
