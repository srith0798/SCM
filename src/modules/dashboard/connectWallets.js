import React from "react";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";

export default function ConnectWallets(props) {
  const ConnectWallet = () => {
    if (props.getCurrentUserDetails()) props.click();
  };
  return (
    <>
      <MainContainer>
        <Div>
          <ConnectWalletTitle>Connect Wallet</ConnectWalletTitle>
          <DetailBox>
            You are not connected to XDCPay please connect XDCPay and start
            creating alerts for your contracts. If you are not having XDCPay
            download it from{" "}
            <p>
              <a href="mailto:someone@example.com">here</a>
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

const ConnectWalletTitle = styled.div``;
const Div = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 25px;
`;

const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
  padding: 2.5rem;
  height: 100vh;
  @media (min-width: 340px) and (max-width: 768px) {
   padding: 38px 20px 20px 20px;

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
  padding-bottom: 21px;
  width: 422px;
`;
