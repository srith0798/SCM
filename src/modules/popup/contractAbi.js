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
              <img alt="" src="/images/close.svg" onClick={props.click} />
            </SubContainer>
            <Div>{props.data}</Div>
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
  overflow-x: hidden;
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
  height: auto;
  margin-top: 8px;
  padding: 10px;
  display: inline-block;
  color: #aaadc4;
  overflow-x: scroll;
`;
