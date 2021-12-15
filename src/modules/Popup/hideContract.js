import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";
import ContractsService from "../../services/contractsService";

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
  },
}));

export default function HideContract(props) {
  console.log(props)
  
  // const hideContract = async () => {
  //   try {
  //     const response = await ContractsService.hideContracts({});
  //     setAddress(response);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const classes = useStyles();
  return (
    <div>
      <Dialog classes={{ paper: classes.dialogBox }} open={true}>
        <MainContainer>
          <Container>
            <SubContainer>
              <Add>Hide Contract</Add>
              <img alt="" src="/images/XDC-Cross.svg" onClick={props.click} />
            </SubContainer>
            <Content>
              Are you sure you wish to hide this contract from the transaction
              listing?
            </Content>
            <SubContainer
              style={{ width: "100%", maxWidth: "200px", marginTop: "30px" }}
            >
              <HideButton onClick={props.hideContract}>Hide Contract</HideButton>
              <CancelButton>Cancel</CancelButton>
            </SubContainer>
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
  height: 200px;
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
// const Img = styled.img`
//   cursor: pointer;
// `;

const HideButton = styled.button`
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  background: #3163f0 0% 0% no-repeat padding-box;
  border: 0px;
  border-radius: 4px;
  text-align: center;
  white-space: nowrap;
`;
const CancelButton = styled.button`
  font: normal normal medium 14px/17px Inter;
  color: #3163f0;
  border-radius: 4px;
  background-color: #ffffff;
  border: 1px solid #3163f0;
  text-align: center;
`;
const Content = styled.div`
  font: normal normal medium 16px/20px Inter;
  letter-spacing: 0px;
  color: #303134;
  margin-top: 20px;
`;
