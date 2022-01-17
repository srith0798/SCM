import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
  },
}));

export default function Settings(props) {
  const classes = useStyles();

  // const [status, setStatus] = React.useState(false);
  // const handleToggleStatus = () => {
  //   setStatus(!status);
  // };
  // const [func, setFunc] = React.useState(false);
  // const handleToggleFunc = () => {
  //   setFunc(!func);
  // };
  // const [contractDiv, setContractsDiv] = React.useState(false);
  // const handleToggleContract = () => {
  //   setContractsDiv(!contractDiv);
  // };
  // const [from, setFrom] = React.useState(false);
  // const handleToggleFrom = () => {
  //   setFrom(!from);
  // };
  // const [to, setTo] = React.useState(false);
  // const handleToggleTo = () => {
  //   setTo(!to);
  // };
  // const [when, setWhen] = React.useState(false);
  // const handleToggleWhen = () => {
  //   setWhen(!when);
  // };

  return (
    <div>
      <Dialog classes={{ paper: classes.dialogBox }} open={true}>
        <MainContainer>
          <Container>
            <SubContainer style={{ padding: "15px 12px 10px 10px" }}>
              <Add>Settings</Add>
              <img style={{ cursor: "pointer" }} alt="" src="/images/close.svg" onClick={props.click} />
            </SubContainer>
            <MainHeading style={{ padding: "15px 12px 10px 10px" }}>Configure Columns</MainHeading>
            <Content>
              Change the layout of the transactions list and display only the columns and information that is most important to you.
            </Content>
            <SubContainer
              style={{
                borderBottom: "1px solid #d5e0ff",
                padding: "15px 12px 10px 10px",
              }}
            >
              <Heading>Transaction Hash</Heading>
              <label class="switch">
                <input type="checkbox" onChange={props.handleToggleTransaction} checked={props.transactionHash} />
                <span class="slider round"></span>
              </label>
            </SubContainer>
            {/* <SubContainer
              style={{
                borderBottom: "1px solid #d5e0ff",
                padding: "5px 12px 10px 10px",
              }}
            >
              <Heading>Status</Heading>
              <label class="switch">
                <input type="checkbox" onChange={handleToggleStatus} checked={status} />
                <span class="slider round"></span>
              </label>
            </SubContainer>
            <SubContainer
              style={{
                borderBottom: "1px solid #d5e0ff",
                padding: "5px 12px 10px 10px",
              }}
            >
              <Heading>Function</Heading>
              <label class="switch">
                <input type="checkbox" onChange={handleToggleFunc} checked={func} />
                <span class="slider round"></span>
              </label>
            </SubContainer>
            <SubContainer
              style={{
                borderBottom: "1px solid #d5e0ff",
                padding: "5px 12px 10px 10px",
              }}
            >
              <Heading>Contracts</Heading>
              <label class="switch">
                <input type="checkbox" onChange={handleToggleContract} checked={contractDiv} />
                <span class="slider round"></span>
              </label>
            </SubContainer>
            <SubContainer
              style={{
                borderBottom: "1px solid #d5e0ff",
                padding: "5px 12px 10px 10px",
              }}
            >
              <Heading>From</Heading>
              <label class="switch">
                <input type="checkbox" onChange={handleToggleFrom} checked={from} />
                <span class="slider round"></span>
              </label>
            </SubContainer>
            <SubContainer
              style={{
                borderBottom: "1px solid #d5e0ff",
                padding: "5px 12px 10px 10px",
              }}
            >
              <Heading>Network</Heading>
              <label class="switch">
                <input type="checkbox" onChange={handleToggleTo} checked={to} />
                <span class="slider round"></span>
              </label>
            </SubContainer>
            <SubContainer
              style={{
                borderBottom: "1px solid #d5e0ff",
                padding: "5px 12px 10px 10px",
              }}
            >
              <Heading>XDC value</Heading>
              <label class="switch">
                <input type="checkbox" onChange={handleToggleWhen} checked={when} />
                <span class="slider round"></span>
              </label>
            </SubContainer> */}
          </Container>
        </MainContainer>
      </Dialog>
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
  border-radius: 0.375rem;
  width: 100%;
  background-color: #ffffff;
  max-width: 43.75rem;
  height: auto;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-left: 9px;
  margin-right: 5px;
`;
const Add = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #303134;
  margin-left: 1.5px;
`;

const MainHeading = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #102c78;
  border-bottom: 1px solid rgb(213, 224, 255);
  margin-left: 9px;
`;
const Content = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #303134;
  margin-top: 0.625rem;
  padding: 15px 12px 8px 10px;
  margin-left: 9px;
`;
const Heading = styled.div`
  text-align: left;
  font-size: 1rem;
  font-weight: 600;
  color: #303134;
  margin-top: 1.25rem;
`;
