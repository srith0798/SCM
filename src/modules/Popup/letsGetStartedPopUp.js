import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
    maxWidth: "700px !important",
    overflow: "hidden",
    top: "-9%",
  },
}));

export default function LetsGetStarted(props) {
  const classes = useStyles();

  return (
    <div>
      {props.state ? (
        <Dialog classes={{ paper: classes.dialogBox }} open>
          <MainContainer>
            <Container>
              <SubContainer>
                <Add>Get Started</Add>
                <img alt="" src="/images/XDC-Cross.svg" onClick={props.click} />
              </SubContainer>
              <Content>Great to have you onboard! Feel free to explore</Content>

              <SpaceBetween>
                <Between>
                  <RowProperty>
                    <Icon src="/images/contracts.svg" />
                  </RowProperty>
                  <RowProperty>Manage contracts</RowProperty>
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
                    You can set different types of alert for your contracts,
                    without missing any information.
                  </SubHeading>
                </Between>
              </SpaceBetween>
              <CenterDiv>
                <Button>Add your first contract</Button>
              </CenterDiv>
              <CenterDiv>
                <input type="checkbox" />
                &nbsp;
                <Toast>Don’t show this message again</Toast>
              </CenterDiv>
              <br />
              <br />
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
`;
const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  width: 100%;
  background-color: #ffffff;

  padding: 15px;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Add = styled.div`
  font: normal normal 600 24px/29px Inter;
  font-size:1.5rem;
  font-weight:600
  color: #303134;
`;
const Img = styled.img`
  cursor: pointer;
`;
const Content = styled.div`
  color: #102c78;
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 600;
`;

const Button = styled.button`
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  border: 0px;
  color: #ffffff;
  width: 100%;
  font-size: 1rem;
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

  max-width: 192px;
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
  font-size: 0.75rem;
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
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;
const Toast = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #303134;
`;

const RowProperty = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  color: #102c78;
`;
