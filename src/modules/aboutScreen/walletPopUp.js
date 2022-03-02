import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";
import { Toaster } from "react-hot-toast";

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
    marginBottom: "275px",
    height: "440px",
  },
}));

export default function WalletPopUp(props) {
  const classes = useStyles();
  const connectWallet = () => {
    if (props.getCurrentUserDetails()) props.click();
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
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
                      src="/images/xdc-cut.svg"
                      onClick={props.click}
                    />
                  </Add>
                </RowContainer>
                <Line></Line>
                <DetailBox>
                  <IconContainer>
                    <StepsTitle>Step 1</StepsTitle>
                    <img
                      style={{ width: "40px", marginTop: "10px" }}
                      alt=""
                      src="/images/xdc-install.svg"
                    />
                    <Title style={{ marginTop: "2px" }}>Install XDCPay</Title>
                    <SubTitle>
                      Install XDCPay Chrome extension from{" "}
                      <a
                        href="https://chrome.google.com/webstore/detail/xdcpay/bocpokimicclpaiekenaeelehdjllofo?hl=en-GB"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        here
                      </a>
                    </SubTitle>
                  </IconContainer>
                  <IconContainer>
                    <StepsTitle>Step 2</StepsTitle>
                    <img alt="" src="/images/xdc-login.svg" />
                    <Title>Login to XDCPay</Title>
                    <SubTitle>
                      Login to you account on XDCPay Chrome extension.
                    </SubTitle>
                  </IconContainer>
                  <IconContainer>
                    <StepsTitle>Step 3</StepsTitle>
                    <img alt="" src="/images/xdc-wallet.svg" />
                    <Title>Connect Wallet</Title>
                    <SubTitle>
                      Connect your XDCPay wallet with SmartHub.
                    </SubTitle>
                  </IconContainer>
                </DetailBox>

                {/* for mobile devices */}
                <DetailBoxMobile>
                <IconContainerMobile>
                    <StepsTitleMobile>Step 1</StepsTitleMobile>
                    <DivMobile>
                    <img
                      style={{ width: "40px",margin: "1px 8px 1px 5px" }}
                      alt=""
                      src="/images/xdc-install.svg"
                    />
                    <SubDivMob>
                    <TitleMobile style={{ marginTop: "2px" }}>Install XDCPay</TitleMobile>
                    <SubTitleMobile>
                      Install XDCPay Chrome extension from{" "}
                      <a
                        href="https://chrome.google.com/webstore/detail/xdcpay/bocpokimicclpaiekenaeelehdjllofo?hl=en-GB"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        here
                      </a>
                    </SubTitleMobile>
                    </SubDivMob>
                   
                    </DivMobile>
                    
                  </IconContainerMobile>
                  <IconContainerMobile>
                    <StepsTitleMobile>Step 2</StepsTitleMobile>
                    <DivMobile>
                    <img alt="" src="/images/xdc-login.svg" />
                    <SubDivMob>
                    <TitleMobile>Login to XDCPay</TitleMobile>
                    <SubTitleMobile>
                      Login to you account on XDCPay Chrome extension.
                    </SubTitleMobile>
                    </SubDivMob>
                    </DivMobile>
                  </IconContainerMobile>
                  <IconContainerMobile>
                    <StepsTitleMobile>Step 3</StepsTitleMobile>
                    <DivMobile>
                    <img alt="" src="/images/xdc-wallet.svg" />
                    <SubDivMob>
                    <TitleMobile>Connect Wallet</TitleMobile>
                    <SubTitleMobile>
                      Connect your XDCPay wallet with SmartHub.
                    </SubTitleMobile>
                    </SubDivMob>
                    </DivMobile>
                  </IconContainerMobile>


                </DetailBoxMobile>
                <Button onClick={() => connectWallet()}>
                  <img
                    style={{ paddingLeft: "30px", marginRight: "15px" }}
                    alt=""
                    src="/images/xdc-logo-white.svg"
                  />
                  Connect Wallet
                </Button>
              </Container>
            </MainContainer>
          </Dialog>
        ) : null}
      </div>
    </>
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
  margin-top: 27px;
  @media (min-width: 300px) and (max-width: 580px) {
    margin-top: 9px;
  }
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
const TitleMobile = styled.div`
text-align: left;
  font: normal normal 600 16px/20px Inter;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  padding-top: 0px;`;

const StepsTitle = styled.div`
  text-align: center;
  font: normal normal normal 14px/17px Inter;
  letter-spacing: 0px;
  color: #7b7979;
  opacity: 1;
  padding-bottom: 10px;
`;
const StepsTitleMobile = styled.div`
  text-align: left;
  font: normal normal normal 14px/17px Inter;
  letter-spacing: 0px;
  color: #7b7979;
  opacity: 1;
  padding-bottom: 10px;
  margin-top: 22px;
  margin-left: 15px;
`;
const SubTitle = styled.div`
  text-align: center;
  letter-spacing: 0px;
  opacity: 1;
  padding-top: 10px;
  font-size: 16px;
  font-weight: normal;
`;
const SubTitleMobile =styled.div`
text-align: left;
  letter-spacing: 0px;
  opacity: 1;
  padding-top: 10px;
  font-size: 14px;
  font-weight: normal;
`;

const IconContainer = styled.div`
  padding: 6px;
  border: 0.031rem #eaf1ec solid;
  width: 200px;
  height: 233px;
  margin: 3px;
`;
const IconContainerMobile = styled.div`
  padding: 6px;
  border: 0.031rem #eaf1ec solid;
  width: 96%;
  height: 148px;
  margin: 3px;
  margin-bottom: 16px;
  border-radius: 6px;
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
  margin-top: 26px;
  // padding-bottom: 18px;
  @media (min-width: 250px) and (max-width:580px) {
    flex-direction: column;
    display:none;
  }
`;
const DetailBoxMobile = styled.div`
  display: flex;
  margin-top: 26px;
  // padding-bottom: 18px;
  @media (min-width: 250px) and (max-width:580px) {
    flex-direction: column;
  }
  @media (min-width: 580px) {
    display:none;
  }
`;
const DivMobile = styled.div`
@media (min-width: 250px) and (max-width:768px) {
  display: flex;
  flex-direction: row;
  margin-top: 0px;
  margin-left: 12px;
}
`;
const SubDivMob = styled.div``;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  padding: 4px;
  background: #ffffff 0% 0% no-repeat padding-box;
  width: 100%;
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

  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Line = styled.div`
  border-bottom: 0.031rem #eaf1ec solid;
  margin-top: 10px;
  width: 596px;
  margin-left: -20px;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
