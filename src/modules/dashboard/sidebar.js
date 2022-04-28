import React, { useEffect } from "react";
import styled from "styled-components";
import { history } from "../../managers/history";
import utility from "../../utility";
import { sessionManager } from "../../managers/sessionManager";
import { cookiesConstants } from "../../constants";
import { NETWORKS } from "../../constants";
const Web3 = require("web3");

export default function Sidebar(props) {
  const getBalance = async (address) => {
    let balance = null;
    await window.web3.eth.getBalance(address).then((res) => {
      balance = res / Math.pow(10, 18);
      balance = truncateToDecimals(balance);
    });
    return balance;
  };

  const [wallet, setWallet] = React.useState(false);

  function truncateToDecimals(num, dec = 2) {
    let decimal = dec;
    if (
      num !== 0 &&
      num.toString().split(".")[0] === 0 &&
      num.toString().split(".")[1].charAt(0) === 0 &&
      num.toString().split(".")[1].charAt(1) === 0
    ) {
      decimal = 4;
    }
    const calcDec = Math.pow(10, decimal);
    return Math.trunc(num * calcDec) / calcDec;
  }

  const HandleWalletChange = async () => {
    console.log();
    window.web3 = new Web3(window.xdc ? window.xdc : window.ethereum);

    if (
      window.web3.currentProvider &&
      sessionManager.getDataFromCookies(cookiesConstants.IS_LOGGED_IN)
    ) {
      if (!window.web3.currentProvider.chainId) {
        //when metamask is disabled
        const state = window.web3.givenProvider.publicConfigStore
          ? window.web3.givenProvider.publicConfigStore._state
          : window.web3.currentProvider.publicConfigStore._state;
        if (state.selectedAddress !== undefined) {
          let address = state.selectedAddress;
          let network =
            state.networkVersion === "50"
              ? NETWORKS.XDC_MAINNET
              : NETWORKS.XDC_APOTHEM_TESTNET;

          let newBalance = await getBalance(address);

          if (
            (address || network) &&
            (address !==
              sessionManager.getDataFromCookies(
                cookiesConstants.ACCOUNT_ADDRESS
              ) ||
              network !==
                sessionManager.getDataFromCookies(cookiesConstants.NETWORK) ||
              newBalance !==
                sessionManager.getDataFromCookies(cookiesConstants.BALANCE))
          ) {
            let balance = null;

            await window.web3.eth.getBalance(address).then((res) => {
              balance = res / Math.pow(10, 18);
              balance = truncateToDecimals(balance);
            });

            sessionManager.setDataInCookies(
              address,
              cookiesConstants.ACCOUNT_ADDRESS
            );
            sessionManager.setDataInCookies(address, cookiesConstants.USER_ID);
            sessionManager.setDataInCookies(network, cookiesConstants.NETWORK);
            sessionManager.setDataInCookies(balance, cookiesConstants.BALANCE);
            sessionManager.setDataInCookies(
              true,
              cookiesConstants.IS_LOGGED_IN
            );
          }
        } else {
          //metamask is also enabled with xdcpay
        }
      }
    }
  };

  //   useEffect(()=>{
  // setTimeout(() => {
  //     handleWalletSession();
  //     console.log("working");
  //   }, 500);
  //   }, [])
  useEffect(() => {
    const handleWalletSession = () => {
      if (!window.xdc) {
        sessionManager.removeDataFromCookies(cookiesConstants.IS_LOGGED_IN);
        sessionManager.removeDataFromCookies(cookiesConstants.ACCOUNT_ADDRESS);
        sessionManager.removeDataFromCookies(cookiesConstants.BALANCE);
        sessionManager.removeDataFromCookies(cookiesConstants.NETWORK);
        history.replace("/about");
      } else {
        window.web3 = new Web3(window.xdc ? window.xdc : window.ethereum);

        if (window.web3.currentProvider) {
          if (!window.web3.currentProvider.chainId) {
            const state = window.web3.givenProvider.publicConfigStore
              ? window.web3.givenProvider.publicConfigStore._state
              : window.web3.currentProvider.publicConfigStore._state;
            if (!state.selectedAddress) {
              sessionManager.removeDataFromCookies(
                cookiesConstants.IS_LOGGED_IN
              );
              sessionManager.removeDataFromCookies(
                cookiesConstants.ACCOUNT_ADDRESS
              );
              sessionManager.removeDataFromCookies(cookiesConstants.BALANCE);
              sessionManager.removeDataFromCookies(cookiesConstants.NETWORK);
              history.replace("/about");
            }
          } else {
            sessionManager.removeDataFromCookies(cookiesConstants.IS_LOGGED_IN);
            sessionManager.removeDataFromCookies(
              cookiesConstants.ACCOUNT_ADDRESS
            );
            sessionManager.removeDataFromCookies(cookiesConstants.BALANCE);
            sessionManager.removeDataFromCookies(cookiesConstants.NETWORK);
            history.replace("/about");
          }
        } else {
          sessionManager.removeDataFromCookies(cookiesConstants.IS_LOGGED_IN);
          sessionManager.removeDataFromCookies(
            cookiesConstants.ACCOUNT_ADDRESS
          );
          sessionManager.removeDataFromCookies(cookiesConstants.BALANCE);
          sessionManager.removeDataFromCookies(cookiesConstants.NETWORK);
          history.replace("/about");
        }
      }
    };

    setTimeout(() => {
      handleWalletSession();
    }, 500);
    window.addEventListener("load", HandleWalletChange);
  }, [wallet]);

  HandleWalletChange();

  const redirectToAbout = () => {
    history.push("/about");
    setWallet(!wallet);
  };
  const redirectToTransaction = () => {
    history.push("/transactions");
    setWallet(!wallet);
  };
  const redirectToContract = () => {
    history.push("/contracts");
    setWallet(!wallet);
  };
  // const redirectToNetwork = () => {
  //   history.push("/networks");
  // };
  const redirectToAnalytics = () => {
    history.push("/analytics");
    setWallet(!wallet);
  };
  const redirectToAlerting = () => {
    history.push("/alerting");
    setWallet(!wallet);
  };
  const redirectToFaqs = () => {
    history.push("/faqs");
    setWallet(!wallet);
  };

  const redirectToLogout = () => {
    sessionManager.removeDataFromCookies(cookiesConstants.IS_LOGGED_IN);
    sessionManager.removeDataFromCookies(cookiesConstants.ACCOUNT_ADDRESS);
    sessionManager.removeDataFromCookies(cookiesConstants.USER_ID);
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
      {sessionManager.getDataFromCookies(cookiesConstants.IS_LOGGED_IN) && (
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
      {sessionManager.getDataFromCookies(cookiesConstants.IS_LOGGED_IN) && (
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
      {sessionManager.getDataFromCookies(cookiesConstants.IS_LOGGED_IN) && (
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
      {sessionManager.getDataFromCookies(cookiesConstants.IS_LOGGED_IN) && (
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
          marginTop: sessionManager.getDataFromCookies(
            cookiesConstants.IS_LOGGED_IN
          )
            ? "12rem"
            : "35rem",
          backgroundColor: utility.isMenuActive("faqs") ? "#1d3c93" : "",
        }}
        onClick={redirectToFaqs}
      >
        <Icon src="/images/Subtraction 2.svg" />
        <Heading>FAQs</Heading>
      </WrapperFaq>

      {sessionManager.getDataFromCookies(cookiesConstants.IS_LOGGED_IN) && (
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
  font-weight: 500;
`;
