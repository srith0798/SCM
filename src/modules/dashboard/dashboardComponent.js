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
// import ConnectWallets from "./connectWallets";
// import utility from "../../utility";
import toast from "react-hot-toast";
import { httpConstants,validationsMessages } from "../../constants";
import VerifiedContracts from "../transactionDetails/verifiedContracts";
import Faqs from "../faqs/faq";
import Web3 from "web3";
import { NETWORKS } from "../../constants";


//Replace Under Development with component once developed-
const HomeComponent = (props) => {
  

  // currentAddress = currentAddress.replace(/,"");
  useEffect(() => {}, []);
  return (
    <>
      {!sessionManager.getDataFromCookies("isLoggedIn") ? (
        <Container>
          {Utility.isMenuActive("/about") && (
            <About getCurrentUserDetails={props.getCurrentUserDetails} />
          )}
          {!Utility.isMenuActive("/about") && (
            <Faqs/>
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
          {Utility.isMenuActive("/faqs") && <Faqs />}
          {Utility.isMenuActive("/analytics") && <Analytics />}
          {Utility.isMenuActive("/alerting") && <Rules />}
          {Utility.isMenuActive("/add-alert") && <AddAlert />}
          {Utility.isMenuActive("/alert-detail") && <AlertDetails />}
          {Utility.isMenuActive("/networks") && <Network />}
          {Utility.isMenuActive("/verified-contracts") && <VerifiedContracts />}
        </Container>
      )}
    </>
  );
};



const redirectErrorMessage = () =>
  toast.error(validationsMessages.VALIDATE_BROWSER_REDIRECTING, {
    duration: 4000,
    position: validationsMessages.TOASTS_POSITION,
    className: "toast-div-address",
  });

  function truncateToDecimals(num, dec = 2) {
    let decimal = dec;
    if(num !== 0 && num.toString().split('.')[0] === 0 && num.toString().split('.')[1].charAt(0) === 0 && num.toString().split('.')[1].charAt(1) === 0){
      decimal = 4;
    }
    const calcDec = Math.pow(10, decimal);
    return Math.trunc(num * calcDec) / calcDec;
  }
// const disableMetamaskMessage = () =>
//   toast.error(validationsMessages.VALIDATE_BROWSER_REDIRECTING, {
//     duration: 4000,
//     position: validationsMessages.TOASTS_POSITION,
//     className: "toast-div-address",
// });

const dashboardComponent = (props) => {

  const Reload = (value) => {
    getCurrentUserDetails(value);
  }

  const loginErrorMessage = () =>
    toast.error(httpConstants.MESSAGE.VALIDATE_BROWSER_LOGIN, {
      duration: 4000,

      position: httpConstants.MESSAGE.TOASTS_POSITION,

      className: "toast-div-address",
    });
  const getCurrentUserDetails = async (value) => {
    window.web3 = new Web3(window.xdc ? window.xdc : window.ethereum);


      if (window.web3.currentProvider) {
        if (!window.web3.currentProvider.hasOwnProperty("chainId")) {
          if(!window.xdc){
            console.log("Error");
          }
          else{
            //when metamask is not in effect
            const state = window.web3.givenProvider.publicConfigStore ? window.web3.givenProvider.publicConfigStore._state : window.web3.currentProvider.publicConfigStore._state;
            let address = state.selectedAddress;
            let network =
                state.networkVersion === "50" ? NETWORKS.XDC_MAINNET : NETWORKS.XDC_APOTHEM_TESTNET;
            let account = false;

            await window.web3.eth.getAccounts((err, accounts) => {
              if (err !== null) console.error("");
              else if (accounts.length === 0) {
                account = false;
              } else {
                account = true;
              }
            });

            if (!account) {
              loginErrorMessage();
            } else if (address || network) {
              let balance = null;

              await window.web3.eth.getBalance(address).then((res) => {
                balance = res / Math.pow(10, 18);
                balance = truncateToDecimals(balance);
              });

              let accountDetails = {
                address: address,
                network: network,
                balance: balance,
                isLoggedIn: true,
              };
              sessionManager.setDataInCookies(address, "accountAddress");
              sessionManager.setDataInCookies(address, "userId");
              sessionManager.setDataInCookies(network, "network");
              sessionManager.setDataInCookies(balance, "balance");
              sessionManager.setDataInCookies(true, "isLoggedIn");
              history.replace("/about");
              // props.login(accountDetails);
              console.log("Check", accountDetails);
              // handleDialogClose();
            }
          }

        } else {
          //metamask is also enabled with xdcpay
          // disableMetamaskMessage();
          console.log("Error");
        }
      } else {
        // For mobile and tab - redirect to App Store
        redirectErrorMessage();
      }
    //}
    // console.log("adad", history.location.pathname);


    //  if (window?.web3?.eth) {
    //       let user = "";

    //       try {
    //         user = window?.web3?.eth?.accounts;
    //         console.log(user[0],"userssss!!")
    //       } catch (e) {console.log(e,"error")}
    //       console.log(user,"user!!")
    //       if (user && user.length) {
            
    //         const response = await UserService.addUser({ accountAddress: user[0] });
    //         if (response.accountAddress) {
    //           sessionManager.setDataInCookies(
    //             response.accountAddress,
    //             "accountAddress"
    //           );
    //           sessionManager.setDataInCookies(response.accountAddress, "userId");
    //           sessionManager.setDataInCookies(response.username, "username");
    //           sessionManager.setDataInCookies(
    //             response.profilePicture,
    //             "profilePicture"
    //           );
    //         }
    //         sessionManager.setDataInCookies(true, "isLoggedIn");
    //         // history.push("/about");
    //         window.location.reload();
            
    //         return {user:user};
    //       } else {
    //         loginErrorMessage();
    //       }
    //       return true; //required to close the "connect wallet" popup
      
    // } else {
      
    //   redirectErrorMessage();
    // }
  };
  
  // let check = window?.web3?.eth?.accounts;
  // let pathname = history.location.pathname;
  // let currentAddress = sessionManager.getDataFromCookies("accountAddress");
  // if(check && check[0]!==currentAddress){
  //   Reload(pathname);
  // }

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
