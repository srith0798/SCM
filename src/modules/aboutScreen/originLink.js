import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
    backgroundColor: "#FFFFFF",
    bottom: "180px",
  },
}));

export default function OriginPopup(props) {
  const classes = useStyles();
  return (
    <div>
      <Dialog classes={{ paper: classes.dialogBox }} open={true}>
            <MainContainer>
              <Container>
                <RowContainer>
                  <Add>
                     Create Smart Contract
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
                      src="/images/token-origin.svg"
                    />
                    <SubTitle>
                    Create XRC-20 token using Origin{" "}
                    </SubTitle>
                  </IconContainer>
                  <IconContainer>
                    <StepsTitle>Step 2</StepsTitle>
                    <img alt="" src="/images/circle-origin.svg" />
                    <SubTitle>
                    Analyze Transactions of XRC20 Tokens
                    </SubTitle>
                  </IconContainer>
                  <IconContainer>
                    <StepsTitle>Step 3</StepsTitle>
                    <img alt="" src="/images/alert-origin.svg" />
                    <SubTitle>
                    Set Alerts on Transactions
                    </SubTitle>
                  </IconContainer>
                </DetailBox>
                <Button onClick={()=> window.open("https://origin.xdc.org/")}>
                  Go to Origin
                </Button>
              </Container>
            </MainContainer>
          </Dialog>
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
  padding-top: 12px;
  background-color: #3163f0;
  color: #ffffff;
  border: none;
  border-radius: 0.25rem;
  font-size: 16px;
  font-weight: 500;
  margin-top: 27px;
  padding-left: 88px;
  @media (min-width: 300px) and (max-width: 580px) {
    margin-top: 9px;
    display:none;
  }
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
  font-weight: 600;
`;

const IconContainer = styled.div`
  padding: 6px;
  border: 0.031rem #eaf1ec solid;
  width: 200px;
  height: 175px;
  margin: 3px;
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
  height: 380px;
  @media (min-width: 300px) and (max-width: 767px) {
    padding-left: 17px;
    padding-right: 17px;
  }
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
  @media (min-width: 300px) and (max-width: 767px){
    padding-left: 15px;
    padding-right: 15px;
  }
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
