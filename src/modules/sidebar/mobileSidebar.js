import React from "react";
import styled from "styled-components";
import { history } from "../../managers/history";

const SidebarContainer = styled.div`
  // width: 100%;
  // max-width: 200px;
  // position: absolute;
  // z-index: 1;
  // @media (min-width: 300px) and (max-width: 1024px) {
  //   position: absolute;
  //   z-index: 1;
  // }
  display: none;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 228px;
  padding-top: 15px;

  @media (max-width: 768px) {
    display: flex;
    margin-top: 60px;
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
  const [transactionIcon, setTransactionIcon] = React.useState(
    "/images/Transactions.svg"
  );
  const [contractsIcon, setContractsIcon] = React.useState(
    "/images/Transactions.svg"
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
    <Div>
      {/* {props.openHumburger && ( */}
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
          <img alt="" src="/images/Group 12.svg" />
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
  margin-top: 9rem;
`;
