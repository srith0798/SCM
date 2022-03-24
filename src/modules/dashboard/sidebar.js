import React from "react";
import styled from "styled-components";
import { history } from "../../managers/history";
import utility from "../../utility";
import { sessionManager } from "../../managers/sessionManager";

export default function Sidebar(props) {
  const redirectToAbout = () => {
    history.push("/about");
  };
  const redirectToTransaction = () => {
    history.push("/transactions");
  };
  const redirectToContract = () => {
    history.push("/contracts");
  };
  // const redirectToNetwork = () => {
  //   history.push("/networks");
  // };
  const redirectToAnalytics = () => {
    history.push("/analytics");
  };
  const redirectToAlerting = () => {
    history.push("/alerting");
  };
  const redirectToFaqs = () => {
    history.push("/faqs");
  };

  const redirectToLogout = () => {
    sessionManager.removeDataFromCookies("isLoggedIn");
    sessionManager.removeDataFromCookies("accountAddress");
    sessionManager.removeDataFromCookies("userId");
    sessionManager.removeDataFromCookies("username");
    sessionManager.removeDataFromCookies("profilePicture");
    history.replace("/");
    // window.location.reload();
  };

  const [aboutIcon, setAboutIcon] = React.useState(
    "/images/abouticon-blue.svg"
  );
  const [transactionIcon, setTransactionIcon] = React.useState(
    "/images/transactions-blue.svg"
  );
  const [contractsIcon, setContractsIcon] = React.useState(
    "/images/contracts.svg"
  );
  // const [networksIcon, setNetworksIcon] = React.useState(
  //   "/images/networks.svg"
  // );
  const [analyticsIcon, setAnalyticsIcon] = React.useState(
    "/images/analytics-blue.svg"
  );
  const [alertingIcon, setAlertingIcon] = React.useState(
    "/images/alerting-blue.svg"
  );

  const changeSourceForIcons = (value) => {
    if (value === "about") setAboutIcon("/images/abouticon_white.svg");
    if (value === "transactions")
      setTransactionIcon("/images/transactions-white.svg");
    if (value === "contracts") setContractsIcon("/images/contracts-white.svg");
    // if (value === "networks") setNetworksIcon("/images/networks-white.svg");
    if (value === "analytics") setAnalyticsIcon("/images/analytics-white.svg");
    if (value === "alerting") setAlertingIcon("/images/alerting-white.svg");
  };
  const changeOriginalSourceForIcons = (value) => {
    if (value === "about") setAboutIcon("/images/abouticon-blue.svg");
    if (value === "transactions")
      setTransactionIcon("/images/transactions-blue.svg");
    // if (value === "networks") setNetworksIcon("/images/networks.svg");
    if (value === "contracts") setContractsIcon("/images/contracts.svg");
    if (value === "analytics") setAnalyticsIcon("/images/analytics-blue.svg");
    if (value === "alerting") setAlertingIcon("/images/alerting-blue.svg");
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
      {sessionManager.getDataFromCookies("isLoggedIn") && (
        <Wrapper
          style={{
            backgroundColor: utility.isMenuActive("transactions")
              ? "#1d3c93"
              : "",
          }}
          onClick={redirectToTransaction}
          onMouseOver={() => changeSourceForIcons("transactions")}
          onMouseOut={() => changeOriginalSourceForIcons("transactions")}
        >
          <Icon src={transactionIcon} />
          <Heading>Transactions</Heading>
        </Wrapper>
      )}
      {sessionManager.getDataFromCookies("isLoggedIn") && (
        <Wrapper
          style={{
            backgroundColor: utility.isMenuActive("contracts") ? "#1d3c93" : "",
          }}
          onClick={redirectToContract}
          onMouseOver={() => changeSourceForIcons("contracts")}
          onMouseOut={() => changeOriginalSourceForIcons("contracts")}
        >
          <Icon src={contractsIcon} />
          <Heading>Contracts</Heading>
        </Wrapper>
      )}
      {sessionManager.getDataFromCookies("isLoggedIn") && (
        <Wrapper
          style={{
            backgroundColor: utility.isMenuActive("analytics") ? "#1d3c93" : "",
          }}
          onClick={redirectToAnalytics}
          onMouseOver={() => changeSourceForIcons("analytics")}
          onMouseOut={() => changeOriginalSourceForIcons("analytics")}
        >
          <Icon src={analyticsIcon} />
          <Heading>Analytics</Heading>
        </Wrapper>
      )}
      {sessionManager.getDataFromCookies("isLoggedIn") && (
        <Wrapper
          style={{
            backgroundColor: utility.isMenuActive("alerting") ? "#1d3c93" : "",
          }}
          onClick={redirectToAlerting}
          onMouseOver={() => changeSourceForIcons("alerting")}
          onMouseOut={() => changeOriginalSourceForIcons("alerting")}
        >
          <Icon src={alertingIcon} />
          <Heading>Alerting</Heading>
        </Wrapper>
      )}
      <WrapperFaq
        style={{
          marginTop: sessionManager.getDataFromCookies("isLoggedIn")
            ? "12rem"
            : "35rem",
          paddingLeft: sessionManager.getDataFromCookies("isLoggedIn")
            ? "22px"
            : "50px",
          backgroundColor: utility.isMenuActive("faqs") ? "#1d3c93" : "",
        }}
        onClick={redirectToFaqs}
      >
        <Icon src="/images/Subtraction 2.svg" />
        <Heading>FAQs</Heading>
      </WrapperFaq>

      {sessionManager.getDataFromCookies("isLoggedIn") && (
        <WrapperLogout onClick={redirectToLogout}>
          <Icon src="/images/Log out.svg" />
          <Heading>Logout</Heading>
        </WrapperLogout>
      )}
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
  overflow-x: hidden;
  @media (max-width: 1023px) {
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

const WrapperFaq = styled.div`
  flex-wrap: wrap;
  cursor: pointer;
  width: 100%;
  max-width: 240px;
  white-space: nowrap;
  padding: 23px;
  /* padding-left: 35px; */
  &:hover {
    background: #1d3c93;
  }
`;

const WrapperLogout = styled.div`
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
