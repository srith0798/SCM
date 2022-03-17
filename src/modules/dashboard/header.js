import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../../assets/styles/custom.css";
import { sessionManager } from "../../managers/sessionManager";
import utility from "../../utility";
import { NETWORKS } from "../../constants";
const Web3 = require("web3");

function Header(props) {

  const [forceUpdate, setForceUpdate] = useState(false);

  const getUserAccountAddress = () => {
    let user = "";
    user = sessionManager.getDataFromCookies("accountAddress");
    if (user) user = utility.truncateTxnAddress(user);
    return user;
  };

  const getBalance = async(address) => {
    let balance = null;
    await window.web3.eth.getBalance(address).then((res) => {
      balance = res / Math.pow(10, 18);
      balance = truncateToDecimals(balance);
    });
    return balance;
  }

  function truncateToDecimals(num, dec = 2) {
      let decimal = dec;
      if(num !== 0 && num.toString().split('.')[0] === 0 && num.toString().split('.')[1].charAt(0) === 0 && num.toString().split('.')[1].charAt(1) === 0){
        decimal = 4;
      }
      const calcDec = Math.pow(10, decimal);
      return Math.trunc(num * calcDec) / calcDec;
    }

    const getBalance2 = async(address) => {
      let balance = null;
      await window.web3.eth.getBalance(address).then((res) => {
        balance = res / Math.pow(10, 18);
        balance = truncateToDecimals(balance);
      });
      return balance;
    }


    const [balance, getWalletBalance] = useState([]);
  const getXDCWalletBalance = async (address) => {
    window.web3 = new Web3(window.xdc ? window.xdc : window.ethereum);

    if (
      window.web3.currentProvider 
    ) {
      if (!window.web3.currentProvider.chainId) {
         await getBalance2(address);
            let balance = null;
           await window.web3.eth.getBalance(address)
           .then((res) => {
              balance = res / Math.pow(10, 18);
              balance = truncateToDecimals(balance);
              console.log(balance,"res#")
              getWalletBalance(balance)
            })
            return await balance
      }
    }
  };


  const getUserBalance = async () => {
    let balance = sessionManager.getDataFromCookies("accountAddress");
    const web3 = new Web3(
      new Web3.providers.HttpProvider(process.env.REACT_APP_NETWORK_RPC_URL)
    );
    // console.log("adadad", web3);
    
    let checkResult = Web3.utils.toChecksumAddress(balance);
    
    if (checkResult)
    getXDCWalletBalance(checkResult)
      // web3.eth.getBalance(checkResult, function (error, result) {
      //   if (error) {
      //   } else {
      //     let num = Number(result / 1000000000000000000);

      //     getSetBalance(num.toFixed(2));
      //   }
      // });
  };


  const handleXDCPayWalletChange = async () => {
    console.log("check1");
    window.web3 = new Web3(window.xdc ? window.xdc : window.ethereum);
    if (
      window.web3.currentProvider &&
      sessionManager.getDataFromCookies("isLoggedIn")
    ) {
      console.log("check2");
      if (!window.web3.currentProvider.chainId) {
        console.log("check3");
        //when metamask is disabled
        const state = window.web3.givenProvider.publicConfigStore ? window.web3.givenProvider.publicConfigStore._state : window.web3.currentProvider.publicConfigStore._state;
        if (state.selectedAddress !== undefined) {
          let address = state.selectedAddress;
          let network =
            state.networkVersion === "50"
              ? NETWORKS.XDC_MAINNET
              : NETWORKS.XDC_APOTHEM_TESTNET;

          let newBalance = await getBalance(address);

          console.log("check4", address, network, newBalance);
          if ((address || network) && (address !== sessionManager.getDataFromCookies("accountAddress")  || newBalance !== balance)) {
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

            
            
            // props.updateAccountDetails(accountDetails);
            // setForceUpdate(true);
          }
        } else {
          //metamask is also enabled with xdcpay
        }
      }
    }
  };
  // const [getBalance, getSetBalance] = useState("");
  useEffect(() => {
    getUserBalance();
    handleXDCPayWalletChange();
    // window.addEventListener("load", handleXDCPayWalletChange);
     //eslint-disable-next-line
  }, []);

  
  return (
    <>
    <HeaderContainer>
      <SpaceBetween>
        <div style={{ display: "flex", marginLeft: "12px" }}>
          {/* <GridLogo
            src="/images/Grid.svg"
            onClick={() => setOpenHumburger(openHumburger)}
          /> */}
          <XmartlyLogo src="/images/Logo.svg" />
        </div>
        {sessionManager.getDataFromCookies("accountAddress") ? (
          <XDCContainer>
            <XDCInfo {...getUserBalance()}>{balance} XDC</XDCInfo>
            <UserContainer>
              {getUserAccountAddress()}
              <UserLogo src="/images/profile.svg" />
            </UserContainer>
          </XDCContainer>
        ) : (
          <Button onClick={props.getCurrentUserDetails}>Connect Wallet</Button>
        )}
      </SpaceBetween>
    </HeaderContainer>
    </>
  );
}

export default Header;

const UserLogo = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 7px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  background: #091f5c 0% 0% no-repeat padding-box;
  opacity: 1;
  padding: 5px;
  @media (max-width: 767px) {
    padding-top: 50px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
  }
`;
const XmartlyLogo = styled.img`
  margin-right: 17px;
  @media (min-width: 300px) and (max-width: 1024px) {
    margin-left:50px
  }
  
`;
// const GridLogo = styled.img`
//   margin-right: 17px;
//   @media (max-width: 1024px) {
//     display: none;
//   }
// `;
const XDCContainer = styled.div`
  background: #3e579a;
  display: flex;
  color: white;
  border-radius: 5px;
  align-items: center;
  padding: 0 0 0 10px;
  margin-right: 4px;
`;

const UserContainer = styled.div`
  width: 190px;
  background: #324988;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0px 10px;

  @media (max-width: 500px) {
    display: none;
  }
`;
const SpaceBetween = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding-bottom: 4px;
  padding-top: 3px;
  @media (min-width: 768px) and (max-width: 1200px) {
    padding-bottom: 7px;
    padding-top: 7px;
  }
`;
const Button = styled.button`
  border: 1px solid white;
  background: transparent;
  border-radius: 5px;
  font-size: 14px;
  color: white;
  padding: 5px 20px 5px 20px;
  @media (min-width: 300px) and (max-width: 767px) {
    padding: 1px 4px 1px 4px;
    font-size: 12px;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    margin-top: 7px;
  }
`;
const XDCInfo = styled.button`
  margin-right: 30px;
  background: #3e579a;
  display: flex;
  color: white;
  border: none;
  outline: none;
  @media (max-width: 374px) {
    display: none;
  }
`;
