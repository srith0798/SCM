import React, { useState } from "react";
import styled from "styled-components";
import { history } from "../../managers/history";
import { sessionManager } from "../../managers/sessionManager";
import { cookiesConstants } from "../../constants";

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
  // const redirectToNetwork = () => {
  //   history.push("/networks");
  //   setOpen(false);
  // };
  const redirectToFaqs = () => {
    history.push("/faqs");
  };
  const redirectToAnalytics = () => {
    history.push("/analytics");
    setOpen(false);
  };
  const redirectToAlerting = () => {
    history.push("/alerting");
  };
  const redirectToLogout = () => {
    sessionManager.removeDataFromCookies(cookiesConstants.IS_LOGGED_IN);
    sessionManager.removeDataFromCookies(cookiesConstants.ACCOUNT_ADDRESS);
    sessionManager.removeDataFromCookies(cookiesConstants.USER_ID);
    sessionManager.removeDataFromCookies("username");
    sessionManager.removeDataFromCookies("profilePicture");
    history.replace("/");
  };
  const redirectToAbout = () => {
    history.push("/");
  };
  const [transactionIcon, setTransactionIcon] = useState(
    "/images/transactions-blue.svg"
  );
  const [contractsIcon, setContractsIcon] = useState("/images/contracts.svg");
  // const [networksIcon, setNetworksIcon] = useState("/images/networks.svg");
  const [analyticsIcon, setAnalyticsIcon] = useState(
    "/images/analytics-blue.svg"
  );
  const [alertingIcon, setAlertingIcon] = useState("/images/alerting-blue.svg");

  const changeSourceForIcons = (value) => {
    if (value === "transactions")
      setTransactionIcon("/images/transactions-white.svg");
    if (value === "contracts") setContractsIcon("/images/contracts-white.svg");
    // if (value === "networks") setNetworksIcon("/images/networks_white.svg");
    if (value === "analytics") setAnalyticsIcon("/images/analytics-white.svg");
    if (value === "alerting") setAlertingIcon("/images/alerting-white.svg");
  };
  const changeOriginalSourceForIcons = (value) => {
    if (value === "transactions")
      setTransactionIcon("/images/transactions.svg");
    // if (value === "networks") setNetworksIcon("/images/networks.svg");
    if (value === "contracts") setContractsIcon("/images/contracts.svg");
    if (value === "analytics") setAnalyticsIcon("/images/analytics-blue.svg");
    if (value === "alerting") setAlertingIcon("/images/alerting-blue.svg");
  };

  const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const Hamburger = styled.img`
  width: 35px;
  height: 32px;
  margin: 5px 12px 0px 19px;
  position: absolute;
  // left: 123px;
  top: 5px;
  cursor: pointer;
  @media (min-width: 1024px) {
    display: none;
  }
  @media (max-width: 767px) {
    top: 51px;
    margin: 5px 12px 0px 12px;
  }
  // @media (min-width: 768px) and(max-width: 1023px) {
  //   top: 22px;
  //   margin: 5px 12px 0px 12px;
  // }
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
  overflow-x: hidden;
  @media (min-width: 1023px) {
    display: none;
  }
`;
const SidebarContainerRightDiv = styled.div`
  position: absolute;
  z-index: 1000;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  left: 248px;
  padding-top: 15px;
  overflow-x: hidden;
  @media (min-width: 1023px) {
    display: none;
  }
  @media (min-width: 767px) and (max-width: 819px) {
  width: 520px;
  }
  @media (min-width: 820px) and (max-width: 1024px) {
    width: 572px;
  }
  @media (min-width: 300px) and (max-width: 500px) {
    width: 140px;
  }
`;
// const LogoutTag = styled.div`
// display: flex;
// /* @media (min-width: 300px) and (max-width: 768px) {
//   display:none;
// } */
// `;
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
  &:hover {
    background: #1d3c93;
  }
  @media (min-width: 767px) and (max-width: 819px) {
    margin-top: 40rem !important;
  }
  @media (min-width: 820px) and (max-width: 1024px) {
    margin-top: 50rem !important;
  }
  @media (min-width: 300px) and (max-width: 376px) {
    margin-top: 22rem !important;
  }
  @media (min-width: 377px) and (max-width: 394px) {
    margin-top: 29rem !important;
  }
`;

const Heading = styled.span`
  color: #ffffff;
`;

  return (
    <>
      <Hamburger src="/images/hamburger.svg" onClick={() => setOpen(!open)} />
      {open && (
        <div>
        <SidebarContainer>
          <Wrapper onClick={redirectToAbout} style={{ marginTop: "20px" }}>
            <Icon src="/images/Xmartly.svg" />
            <Heading>About Xmartly</Heading>
          </Wrapper>
          {sessionManager.getDataFromCookies(cookiesConstants.IS_LOGGED_IN) && (
            <Wrapper
              onClick={redirectToTransaction}
              onMouseOver={() => changeSourceForIcons("transactions")}
              onMouseOut={() => changeOriginalSourceForIcons("transactions")}
            >
              <Icon src={transactionIcon} />
              <Heading>Transactions</Heading>
            </Wrapper>
          )}
          {sessionManager.getDataFromCookies(cookiesConstants.IS_LOGGED_IN) && (
            <Wrapper
              onClick={redirectToContract}
              onMouseOver={() => changeSourceForIcons("contracts")}
              onMouseOut={() => changeOriginalSourceForIcons("contracts")}
            >
              <Icon src={contractsIcon} />
              <Heading>Contracts</Heading>
            </Wrapper>
          )}
          
          {sessionManager.getDataFromCookies(cookiesConstants.IS_LOGGED_IN) && (
            <Wrapper
              onClick={redirectToAnalytics}
              onMouseOver={() => changeSourceForIcons("analytics")}
              onMouseOut={() => changeOriginalSourceForIcons("analytics")}
            >
              <Icon src={analyticsIcon} />
              <Heading>Analytics</Heading>
            </Wrapper>
          )}
          {sessionManager.getDataFromCookies(cookiesConstants.IS_LOGGED_IN) && (
            <Wrapper
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
              marginTop: sessionManager.getDataFromCookies(cookiesConstants.IS_LOGGED_IN)
                ? "10rem"
                : "33rem",
            }}
            onClick={redirectToFaqs}
          >
            <Icon src="/images/Subtraction 2.svg" />
            <Heading>FAQs</Heading>
          </WrapperFaq>
          {sessionManager.getDataFromCookies(cookiesConstants.IS_LOGGED_IN) && (
            <Wrapper onClick={redirectToLogout}>
              <Icon src="/images/Log out.svg" />
              <Heading>Logout</Heading>
            </Wrapper>
          )}
          <CenterDiv>
            <img alt="" src="/images/Group 12.svg" />
          </CenterDiv>
        </SidebarContainer>
        <SidebarContainerRightDiv onClick={() => setOpen(false)}/>
        </div>
      )}
    </>
  );
}


