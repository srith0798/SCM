import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../../assets/styles/custom.css";
import { sessionManager } from "../../managers/sessionManager";
import utility from "../../utility";
import { NETWORKS } from "../../constants";
import { history } from "../../managers/history";
import { cookiesConstants } from "../../constants";

const Web3 = require("web3");

function Header(props) {
  const getUserAccountAddress = () => {
    let user = "";
    user = sessionManager.getDataFromCookies(cookiesConstants.ACCOUNT_ADDRESS)?.replace('0x', 'xdc');
    if (user) user = utility.truncateTxnAddress(user);
    return user;
  };

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

  const getBalance2 = async (address) => {
    let balance = null;
    await window.web3.eth.getBalance(address).then((res) => {
      balance = res / Math.pow(10, 18);
      balance = truncateToDecimals(balance);
    });
    return balance;
  };

  const [balance, getWalletBalance] = useState([]);
  const getXDCWalletBalance = async (address) => {
    window.web3 = new Web3(window.xdc ? window.xdc : window.ethereum);

    if (window.web3.currentProvider) {
      if (!window.web3.currentProvider.chainId) {
        await getBalance2(address);
        let balance = null;
        await window.web3.eth.getBalance(address).then((res) => {
          balance = res / Math.pow(10, 18);
          balance = truncateToDecimals(balance);
          getWalletBalance(balance);
        });
        return await balance;
      }
    }
  };

  const getUserBalance = async () => {
    let balance = sessionManager.getDataFromCookies(cookiesConstants.ACCOUNT_ADDRESS);
    const web3 = new Web3(
      new Web3.providers.HttpProvider(process.env.REACT_APP_NETWORK_RPC_URL)
    );
    let checkResult = Web3.utils.toChecksumAddress(balance);

    if (checkResult) getXDCWalletBalance(checkResult);
  };
  
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
    margin-left: 50px;
  }
`;
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

  return (
    <>
      <HeaderContainer>
        <SpaceBetween>
          <div style={{ display: "flex", marginLeft: "12px" }}>
            <XmartlyLogo src="/images/Logo.svg" />
          </div>
          {sessionManager.getDataFromCookies(cookiesConstants.ACCOUNT_ADDRESS)?.replace('0x', 'xdc') ? (
            <XDCContainer>
              <XDCInfo {...getUserBalance()}>{balance} XDC</XDCInfo>
              <UserContainer>
                {getUserAccountAddress()}
                <UserLogo src="/images/profile.svg" />
              </UserContainer>
            </XDCContainer>
          ) : (
            <Button onClick={props.getCurrentUserDetails}>
              Connect Wallet
            </Button>
          )}
        </SpaceBetween>
      </HeaderContainer>
    </>
  );
}

export default Header;


