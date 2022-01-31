import React from "react";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

export default function ConnectWallets(props) {
  const location = useLocation();
  console.log();

  const ConnectWallet = () => {
    if (props.getCurrentUserDetails()) props.click();
  };
  return (
    <>
      <MainContainer>
        <Heading>{location.pathname.split("/")[2]}</Heading>
        <Div>
          <ConnectWalletTitle>Connect Wallet</ConnectWalletTitle>
          <DetailBox>
            You are not connected to XDCPay please connect XDCPay and start
            creating alerts for your contracts. If you are not having XDCPay
            download it from{" "}
            <p>
              <a href="https://chrome.google.com/webstore/detail/xdcpay/bocpokimicclpaiekenaeelehdjllofo?hl=en-GB">
                here
              </a>
            </p>
          </DetailBox>
          <Button onClick={() => ConnectWallet()}>
            <img
              style={{ paddingLeft: "30px", marginRight: "15px" }}
              alt=""
              src="/images/xdc-logo-white.svg"
            />
            Connect Wallet
          </Button>
        </Div>
      </MainContainer>
    </>
  );
}

const ConnectWalletTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
const Heading = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #191919;
  margin-right: 0.625rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    // padding-top: 40px;
    margin-top: 3px;
  }
  @media (min-width: 375px) {
    font-size: 1.4rem;
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

const Div = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  width: 1520px;
  top: 163px;
  left: 321px;
  height: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 25px;
  @media (min-width: 340px) and (max-width: 768px) {
    width: 100%;

    height: 100%;
  }
`;

const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
  padding: 3.5rem;
  height: 100vh;
  @media (min-width: 340px) and (max-width: 768px) {
    padding: 38px 20px 20px 20px;
    height: 100vh;
  }
`;
const Button = styled.button`
  background-repeat: no-repeat;
  display: -webkit-inline-box;
  background-position: 0.5rem;
  padding: 14px;
  item-align: center;
  background-size: 0.875rem;
  width: 264px;
  height: 50px;
  padding-top: 9px;
  background-color: #3163f0;
  color: #ffffff;
  border: none;
  border-radius: 0.25rem;
  font-size: 16px;
  font-weight: 600;
`;

const DetailBox = styled.div`
  font-size: 16px;
  padding-top: 15px;

  width: 422px;
  @media (min-width: 340px) and (max-width: 768px) {
    width: 100%;
  }
`;
