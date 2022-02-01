import React from "react";
import styled from "styled-components";
import { history } from "../../managers/history";
import utility from "../../utility";
import { sessionManager } from "../../managers/sessionManager";

export default function Sidebar(props) {
  const redirectToAbout = () => {
    history.push("/dashboard/about");
  };
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
    history.push("/dashboard/rules");
  };
  const redirectToFaqs = () => {
    history.push("/");
  };
  const redirectToLogout = () => {
    sessionManager.removeDataFromCookies("isLoggedIn");
    sessionManager.removeDataFromCookies("accountAddress");
    sessionManager.removeDataFromCookies("userId");
    sessionManager.removeDataFromCookies("username");
    sessionManager.removeDataFromCookies("profilePicture");
    window.location.href = 'http://localhost:3000/dashboard/about'
  };

  const [aboutIcon, setAboutIcon] = React.useState(
    "/images/abouticon_blue.svg"
  );
  const [transactionIcon, setTransactionIcon] = React.useState(
    "/images/transactions.svg"
  );
  const [contractsIcon, setContractsIcon] = React.useState(
    "/images/contracts.svg"
  );
  const [networksIcon, setNetworksIcon] = React.useState(
    "/images/networks.svg"
  );
  const [analyticsIcon, setAnalyticsIcon] = React.useState(
    "/images/analytics.svg"
  );
  const [alertingIcon, setAlertingIcon] = React.useState(
    "/images/alerting.svg"
  );

  const changeSourceForIcons = (value) => {
    if (value === "about") setAboutIcon("/images/abouticon_white.svg");
    if (value === "Transaction")
      setTransactionIcon("/images/Transactions_white.svg");
    if (value === "Contracts") setContractsIcon("/images/contracts_white.svg");
    if (value === "Networks") setNetworksIcon("/images/networks_white.svg");
    if (value === "Analytics") setAnalyticsIcon("/images/Analytics_white.svg");
    if (value === "alerting") setAlertingIcon("/images/Alerting_white.svg");
  };
  const changeOriginalSourceForIcons = (value) => {
    if (value === "about") setAboutIcon("/images/abouticon_blue.svg");
    if (value === "Transaction") setTransactionIcon("/images/transactions.svg");
    if (value === "Networks") setNetworksIcon("/images/networks.svg");
    if (value === "Contracts") setContractsIcon("/images/contracts.svg");
    if (value === "Analytics") setAnalyticsIcon("/images/analytics.svg");
    if (value === "alerting") setAlertingIcon("/images/alerting.svg");
  };

  return (
    <SidebarContainer>
      <Wrapper
        onClick={redirectToAbout}
        style={{
          marginTop: "4rem",
          backgroundColor: utility.isMenuActive("about") ? "#1d3c93" : "",
        }}
        onMouseOver={() => changeSourceForIcons("about")}
        onMouseOut={() => changeOriginalSourceForIcons("about")}
      >
        <Icon src={aboutIcon} />
        <Heading>About Xmartly</Heading>
      </Wrapper>
      <Wrapper
        style={{
          backgroundColor: utility.isMenuActive("transaction") ? "#1d3c93" : "",
        }}
        onClick={redirectToTransaction}
        onMouseOver={() => changeSourceForIcons("Transaction")}
        onMouseOut={() => changeOriginalSourceForIcons("Transaction")}
      >
        <Icon src={transactionIcon} />
        <Heading>Transactions</Heading>
      </Wrapper>
      <Wrapper
        style={{
          backgroundColor: utility.isMenuActive("contract") ? "#1d3c93" : "",
        }}
        onClick={redirectToContract}
        onMouseOver={() => changeSourceForIcons("Contracts")}
        onMouseOut={() => changeOriginalSourceForIcons("Contracts")}
      >
        <Icon src={contractsIcon} />
        <Heading>Contracts</Heading>
      </Wrapper>
      <Wrapper
        style={{
          backgroundColor: utility.isMenuActive("network") ? "#1d3c93" : "",
        }}
        onClick={redirectToNetwork}
        onMouseOver={() => changeSourceForIcons("Networks")}
        onMouseOut={() => changeOriginalSourceForIcons("Networks")}
      >
        <Icon src={networksIcon} />
        <Heading>Networks</Heading>
      </Wrapper>
      <Wrapper
        style={{
          backgroundColor: utility.isMenuActive("analytics") ? "#1d3c93" : "",
        }}
        onClick={redirectToAnalytics}
        onMouseOver={() => changeSourceForIcons("Analytics")}
        onMouseOut={() => changeOriginalSourceForIcons("Analytics")}
      >
        <Icon src={analyticsIcon} />
        <Heading>Analytics</Heading>
      </Wrapper>
      <Wrapper
        style={{
          backgroundColor: utility.isMenuActive("rules") ? "#1d3c93" : "",
        }}
        onClick={redirectToAlerting}
        onMouseOver={() => changeSourceForIcons("alerting")}
        onMouseOut={() => changeOriginalSourceForIcons("alerting")}
      >
        <Icon src={alertingIcon} />
        <Heading>Alerting</Heading>
      </Wrapper>

      <Wrapper style={{ marginTop: "8rem" }} onClick={redirectToFaqs}>
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
  );
}

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const SidebarContainer = styled.div`
  background: #102c78 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 248px;
  padding-top: 15px;
  @media (max-width: 768px) {
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
