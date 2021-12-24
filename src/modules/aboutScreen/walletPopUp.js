import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
  },
}));

export default function WalletPopUp(props) {
  const classes = useStyles();
  const connectWallet = () => {
    if(props.getCurrentUserDetails())
      props.click()
  }
  return (
    <div>
      {props.state ? (
        <Dialog classes={{ paper: classes.dialogBox }} open={true}>
          <MainContainer>
            <Container>
              <RowContainer>
                <Add>
                  Connect Wallet
                  <CrossIcon
                    alt=""
                    src="/images/XDC-Cross.svg"
                    onClick={props.click}
                  />
                </Add>
              </RowContainer>
              <DetailBox>
                <IconContainer>
                  <StepsTitle>Step 1</StepsTitle>
                  <img
                    style={{ width: "50px" }}
                    alt=""
                    src="/images/XDCinstall.svg"
                  />
                  <Title>Install XDCPay</Title>
                  <SubTitle>
                    Install XDCPay Chrome extension from here.
                  </SubTitle>
                </IconContainer>
                <IconContainer>
                  <StepsTitle>Step 1</StepsTitle>
                  <img alt="" src="/images/XDClogin.svg" />
                  <Title>Login to XDCPay</Title>
                  <SubTitle>
                    Login to you account on XDCPay Chrome extension.
                  </SubTitle>
                </IconContainer>
                <IconContainer>
                  <StepsTitle>Step 1</StepsTitle>
                  <img alt="" src="/images/XDCwallet.svg" />
                  <Title>Connect Wallet</Title>
                  <SubTitle>Connect your XDCPay wallet with SmartHub.</SubTitle>
                </IconContainer>
              </DetailBox>
              <Button onClick={() => connectWallet()}>
                <img
                  style={{ paddingLeft: "30px", marginRight: "15px" }}
                  alt=""
                  src="/images/XDC logo_white.svg"
                />
                Connect Wallet
              </Button>
            </Container>
          </MainContainer>
        </Dialog>
      ) : null}
    </div>
  );
}
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
const Title = styled.div`
  text-align: center;
  font: normal normal 600 16px/20px Inter;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  padding-top: 20px;
`;
const StepsTitle = styled.div`
  text-align: center;
  font: normal normal normal 14px/17px Inter;
  letter-spacing: 0px;
  color: #7b7979;
  opacity: 1;
  padding-bottom: 10px;
`;
const SubTitle = styled.div`
  text-align: center;

  letter-spacing: 0px;
  opacity: 1;
  padding-top: 10px;
  font-size: 16px;
  font-weight: normal;
`;

const IconContainer = styled.div`
  padding: 20px;
`;

const CrossIcon = styled.img`
  cursor: pointer;
  width: 16px;
  transition: width 0.1s;
  &:hover {
    width: 18px;
    box-shadow: 15px 18px 78px -23px rgba(0, 0, 0, 1);
    -webkit-box-shadow: 15px 18px 78px -23px rgba(0, 0, 0, 1);
    -moz-box-shadow: 15px 18px 78px -23px rgba(0, 0, 0, 1);
  }
`;
const DetailBox = styled.div`
  display: flex;
  padding-bottom: 35px;
`;
const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding-left: 30px;
`;
const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  // padding-bottom: 20px;
  border-radius: 0.375rem;
  width: 100%;
  background-color: #ffffff;
  max-width: 563px;
  padding: 4px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  width: 100%;
  background-color: #ffffff;
  max-width: 563px;
  align-items: center;
  text-align: center;
  height: 420px;
`;
const Add = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #303134;
  padding-top: 15px;
  padding-bottom: 5px;
  // margin-left: -12px;
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const RowContainer = styled.div`
  // padding: 18px 14px 12px 12px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
