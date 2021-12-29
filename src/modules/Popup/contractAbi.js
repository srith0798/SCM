import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
  },
}));

export default function ContractAbi(props) {
  const classes = useStyles();
  return (
    <div>
      <Dialog classes={{ paper: classes.dialogBox }} open>
        <MainContainer>
          <Container>
            <SubContainer>
              <Add>Contract ABI</Add>
              <img alt="" src="/images/XDC-Cross.svg" onClick={props.click} />
            </SubContainer>
            <Div>Code</Div>
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
  border-radius: 6px;
  width: 100%;
  background-color: #ffffff;
  max-width: 700px;
  height: 300px;
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
const Div = styled.div`
  background-color: #f0f2fc;
  border-radius: 4px;
  width: 100%;
  max-width: 650px;
  height: 220px;
  margin-top: 8px;
  padding: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #aaadc4;
  font-size: 45px;
`;
