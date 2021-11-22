import React, { useState } from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
  },
}));

export default function LetsGetStarted(props) {
  const classes = useStyles();
  console.log("fiffhiefhrfh", props);
  return (
    <div>
      {props.state ? (
        <Dialog classes={{ paper: classes.dialogBox }} open>
          <MainContainer>
            <Container>
              <SubContainer>
                <Add>Get Started</Add>
                <Img src="/images/XDC-Cross.svg" onClick={props.click} />
              </SubContainer>
              <Content>Great to have you onboard! Feel free to explore</Content>

              <SpaceBetween>
                <Between>
                  <RowProperty>
                    <Icon src="/images/contracts.svg" />
                  </RowProperty>
                  <RowProperty>Mange contracts</RowProperty>
                  <SubHeading>
                    You can add and manage any contract deployed on XDC Network.
                  </SubHeading>
                </Between>
                <Between>
                  <RowProperty>
                    <Icon src="/images/Analytics.svg" />
                  </RowProperty>
                  <RowProperty>Analytics</RowProperty>
                  <SubHeading>
                    View analytics like number of transactions, gas fee etc for
                    the added contract.
                  </SubHeading>
                </Between>
                <Between>
                  <RowProperty>
                    <Icon src="/images/Alerting.svg" />
                  </RowProperty>
                  <RowProperty>Set Alerts</RowProperty>
                  <SubHeading>
                    {" "}
                    You can set different types of alert for you contracts,
                    without missing any information
                  </SubHeading>
                </Between>
              </SpaceBetween>
              <CenterDiv>
                <Button>Add your first contract</Button>
                {/* <Toast>Don’t show this message again</Toast> */}
              </CenterDiv>
            </Container>
          </MainContainer>
        </Dialog>
      ) : null}
    </div>
  );
}
const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 445px;
`;
const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;

  border-radius: 6px;
  width: 100%;
  background-color: #ffffff;
  max-width: 700px;
  height: 400px;
  padding: 20px;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Add = styled.div`
  font: normal normal 600 24px/29px Inter;
  color: #303134;
`;
const Img = styled.img`
  cursor: pointer;
`;
const Content = styled.div`
  //   font: normal normal 600 16px/20px Inter;
  color: #102c78;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
`;

const Button = styled.button`
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  border: 0px;
  color: #ffffff;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  padding: 7px;
  margin-top: 40px;
  cursor: pointer;
  max-width: 230px;
  margin-top: 20px;
`;
const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
const Between = styled.div`
  background: #f5f6fd 0% 0% no-repeat padding-box;
  border: 1px solid #d5e0ff;
  border-radius: 6px;
  width: 100%;
  max-width: 166px;
  padding: 10px;
  color: #1d3c93;
  font-weight: 600;
  cursor: pointer;
  height: 230px;
`;
const Icon = styled.img`
  width: 90px;
`;
const SubHeading = styled.span`
  text-align: center;
  font-size: 12px;
  font: normal normal medium 14px/17px Inter;
  color: #303134;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin-top: 20px;
`;
const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const Toast = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #303134;
`;

const RowProperty = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;
