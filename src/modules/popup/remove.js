import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";
import ButtonConfirm from "../../common/components/buttonConfirm";
import ContractService from "../../services/contractsService";

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "50% !important",
  },
}));

export default function Remove(props) {
  const classes = useStyles();
  console.log(props.contract);
  const executeRemoveContract = async () => {
    console.log("HERE");
    const request = {
      id: props.contract._id,
    };
    const response = await ContractService.removeContract(request);
    console.log(response);
  };

  return (
    <div>
      <Dialog classes={{ paper: classes.dialogBox }} open={true} fullWidth maxWidth="xm">
        <MainContainer>
          <Container>
            <SubContainer style={{ justifyContent: "space-between" }}>
              <Add>Remove Contract</Add>
              {/* <img
                alt=""
                src="/images/close.svg"
                onClick={props.click}
                style={{ cursor: "pointer" }}
              /> */}
            </SubContainer>
            <Content>
              Are you sure you wish to remove the contract? This will remove the contract from the transaction listing, and affect all the
              alerts that use this contract.
            </Content>
            <SubContainer style={{ width: "100%", marginTop: "30px" }}>
              <ButtonConfirm text={"Remove contract"} click={executeRemoveContract} />
              <CancelButton onClick={props.click}>Cancel</CancelButton>
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
  padding: 20px;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const Add = styled.div`
  font: normal normal 600 24px/29px Inter;
  color: #303134;
`;
const CancelButton = styled.button`
  font: normal normal medium 14px/17px Inter;
  color: #3163f0;
  border-radius: 4px;
  background-color: #ffffff;
  border: 1px solid #3163f0;
  text-align: center;
  padding: 10px 12px;
`;
const Content = styled.div`
  font: normal normal medium 16px/20px Inter;
  letter-spacing: 0px;
  color: #303134;
  margin-top: 20px;
`;
