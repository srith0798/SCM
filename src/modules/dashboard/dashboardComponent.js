import React, { useEffect } from "react";
import styled from "styled-components";
import Utility from "../../utility";
import HeaderComponent from "./header";
import DesktopSideMenu from "./sidebar";
import MobileSideMenu from "./mobileSidebar";
import ContractDetails from "../contract/contractDetails/contractDetails";
import Contract from "../contract/contract";
import TransactionDetails from "../transactionDetails/transactionDetails";
import TransactionList from "../transactions/transactionList";
import Network from "../network/network";
import Analytics from "../analytics/analytics";
import About from "../aboutScreen/about";
import Rules from "../alerting/rules";
import AddAlert from "../alerting/addAlert";
import AlertDetails from "../alerting/alertDetails";
import { sessionManager } from "../../managers/sessionManager";
import UserService from "../../services/userService";
import { history } from "../../managers/history";
import ConnectWallets from "./connectWallets";
import utility from "../../utility";
import toast, { Toaster } from "react-hot-toast";
import { httpConstants } from "../../constants";
import VerifiedContracts from "../transactionDetails/verifiedContracts";
import Faqs from "../faqs/faq";

//Replace Under Development with component once developed-
const HomeComponent = (props) => {
  useEffect(() => {}, []);
  return (
    <>
      {!sessionManager.getDataFromCookies("isLoggedIn") ? (
        <Container>
          {Utility.isMenuActive("/about") && (
            <About getCurrentUserDetails={props.getCurrentUserDetails} />
          )}
          {!Utility.isMenuActive("/about") && (
            <ConnectWallets
              getCurrentUserDetails={props.getCurrentUserDetails}
            />
          )}
        </Container>
      ) : (
        <Container>
          {Utility.isMenuActive("/contracts") &&
            (Utility.isMenuActive("/contract-details") ? (
              <ContractDetails />
            ) : (
              <Contract />
            ))}
          {Utility.isMenuActive("/transactions") &&
            (Utility.isMenuActive("/transaction-details") ? (
              <TransactionDetails />
            ) : (
              <TransactionList />
            ))}
          {Utility.isMenuActive("/about") && (
            <About getCurrentUserDetails={props.getCurrentUserDetails} />
          )}
          {Utility.isMenuActive("/faqs") && <Faqs/>}
          {Utility.isMenuActive("/analytics") && <Analytics />}
          {Utility.isMenuActive("/alerting") && <Rules />}
          {Utility.isMenuActive("/add-alert") && <AddAlert />}
          {Utility.isMenuActive("/alert-detail") && <AlertDetails />}
          {Utility.isMenuActive("/networks") && <Network />}
          {Utility.isMenuActive("/verified-contracts") && <VerifiedContracts/>}
          
        </Container>
      )}
    </>
  );
};

const dashboardComponent = (props) => {
  const loginErrorMessage = () =>
    toast.error(httpConstants.MESSAGE.VALIDATE_BROWSER_LOGIN, {
      duration: 4000,

      position: httpConstants.MESSAGE.TOASTS_POSITION,

      className: "toast-div-address",
    });
  const getCurrentUserDetails = async () => {
    let user = "";

    try {
      user = window.web3.eth.accounts;
    } catch (e) {}

    if (user && user.length) {
      const response = await UserService.addUser({ accountAddress: user[0] });
      if (response.accountAddress) {
        sessionManager.setDataInCookies(
          response.accountAddress,
          "accountAddress"
        );
        sessionManager.setDataInCookies(response._id, "userId");
        sessionManager.setDataInCookies(response.username, "username");
        sessionManager.setDataInCookies(
          response.profilePicture,
          "profilePicture"
        );
      }
      sessionManager.setDataInCookies(true, "isLoggedIn");
      history.push("/about");
    }
    else{
      loginErrorMessage();
    }
    return true; //required to close the "connect wallet" popup
  };

  return (
    <>
      <DashboardContainer>
        <HeaderComponent
          {...props}
          getCurrentUserDetails={getCurrentUserDetails}
        />
        <HomeContainer>
          <DesktopSideMenu {...props} />
          <MobileSideMenu {...props} />
          <ScrollableDiv>
            <HomeComponent
              {...props}
              getCurrentUserDetails={getCurrentUserDetails}
            />
          </ScrollableDiv>
        </HomeContainer>
      </DashboardContainer>
    </>
  );
};
export default dashboardComponent;

const DashboardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* overflow-y: hidden;
  overflow-x: hidden; */
  height: 100vh;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow-y: hidden;
  overflow-x: hidden;
`;
const ScrollableDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow: auto;
`;
