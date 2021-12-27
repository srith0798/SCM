import React from "react";
import styled from "styled-components";
import { history } from "../../managers/history";
import utility from "../../utility";

const SidebarContainer = styled.div`
  // width: 100%;
  // max-width: 200px;

  // @media (min-width: 300px) and (max-width: 1024px) {
  //   // display: none;
  //   position: absolute;
  //   z-index: 1;
  // }
  background: #102c78 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-height: 100vh; */
  height: 100%;
  width: 280px;
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
    history.push("/");
  };
  // const redirectToAbout = () => {
  //   history.push("/");
  // };
  const [aboutIcon, setAboutIcon] = React.useState(
    "/images/abouticon_blue.svg"
  );
  const [transactionIcon, setTransactionIcon] = React.useState(
    "/images/Transactions.svg"
  );
  const [contractsIcon, setContractsIcon] = React.useState(
    "/images/contracts.svg"
  );
  const [networksIcon, setNetworksIcon] = React.useState(
    "/images/networks.svg"
  );
  const [analyticsIcon, setAnalyticsIcon] = React.useState(
    "/images/Analytics.svg"
  );
  const [alertingIcon, setAlertingIcon] = React.useState(
    "/images/Alerting.svg"
  );

  const changeSourceForIcons = (value) => {
    if (value === "about") setAboutIcon("/images/abouticon_white.svg");
    if (value === "Transaction")
      setTransactionIcon("/images/Transactions_white.svg");
    if (value === "Contracts") setContractsIcon("/images/contracts_white.svg");
    if (value === "Networks") setNetworksIcon("/images/networks_white.svg");
    if (value === "Analytics") setAnalyticsIcon("/images/Analytics_white.svg");
    if (value === "Alerting") setAlertingIcon("/images/Alerting_white.svg");
  };
  const changeOriginalSourceForIcons = (value) => {
    if (value === "about") setAboutIcon("/images/abouticon_blue.svg");
    if (value === "Transaction") setTransactionIcon("/images/Transactions.svg");
    if (value === "Networks") setNetworksIcon("/images/networks.svg");
    if (value === "Contracts") setContractsIcon("/images/contracts.svg");
    if (value === "Analytics") setAnalyticsIcon("/images/Analytics.svg");
    if (value === "Alerting") setAlertingIcon("/images/Alerting.svg");
  };

  return (
    <SidebarContainer>
      <Wrapper
        onClick={redirectToAbout}
        style={{ marginTop: "4rem" ,  backgroundColor : utility.isMenuActive("about") ? "#1d3c93" : "" }}
        onMouseOver={() => changeSourceForIcons("about")}
        onMouseOut={() => changeOriginalSourceForIcons("about")}
      >
        <Icon src={aboutIcon} />
        <Heading>About Xmartly</Heading>
      </Wrapper>
      <Wrapper
        style={{  backgroundColor : utility.isMenuActive("transaction") ? "#1d3c93" : "" }}
        onClick={redirectToTransaction}
        onMouseOver={() => changeSourceForIcons("Transaction")}
        onMouseOut={() => changeOriginalSourceForIcons("Transaction")}
      >
        <Icon src={transactionIcon} />
        <Heading>Transactions</Heading>
      </Wrapper>
      <Wrapper
        style={{  backgroundColor : utility.isMenuActive("contract") ? "#1d3c93" : "" }}
        onClick={redirectToContract}
        onMouseOver={() => changeSourceForIcons("Contracts")}
        onMouseOut={() => changeOriginalSourceForIcons("Contracts")}
      >
        <Icon src={contractsIcon} />
        <Heading>Contracts</Heading>
      </Wrapper>
      <Wrapper
        style={{  backgroundColor : utility.isMenuActive("network") ? "#1d3c93" : "" }}
        onClick={redirectToNetwork}
        onMouseOver={() => changeSourceForIcons("Networks")}
        onMouseOut={() => changeOriginalSourceForIcons("Networks")}
      >
        <Icon src={networksIcon} />
        <Heading>Networks</Heading>
      </Wrapper>
      <Wrapper
        style={{  backgroundColor : utility.isMenuActive("analytics") ? "#1d3c93" : "" }}
        onClick={redirectToAnalytics}
        onMouseOver={() => changeSourceForIcons("Analytics")}
        onMouseOut={() => changeOriginalSourceForIcons("Analytics")}
      >
        <Icon src={analyticsIcon} />
        <Heading>Analytics</Heading>
      </Wrapper>
      <Wrapper
        style={{  backgroundColor : utility.isMenuActive("rules") ? "#1d3c93" : "" }}
        onClick={redirectToAlerting}
        onMouseOver={() => changeSourceForIcons("Alerting")}
        onMouseOut={() => changeOriginalSourceForIcons("Alerting")}
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
