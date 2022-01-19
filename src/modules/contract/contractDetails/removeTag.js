import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";
import contractsService from "../../../services/contractsService";
import ButtonConfirm from "../../../common/components/buttonConfirm";

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
  },
}));

export default function RemoveTag(props) {
  const removeTags = async () => {
    let requestData = {
      contractId: props.contractAddress,
      tags: [props.tag],
    };

    try {
      const response = await contractsService.removeTags(requestData);
      console.log("removeResponse", response);
    } catch (e) {
      console.log("Error", e);
    }
  };
  const classes = useStyles();
  const Close = () => {
    props.click();
    props.getContractById();
  };
  return (
    <div>
      <Dialog classes={{ paper: classes.dialogBox }} open={true}>
        <MainContainer>
          <Container>
            <SubContainer>
              <Add>Remove tag from contract</Add>
            </SubContainer>
            <Content>Are you sure you want to remove this tag from the contract?</Content>

            <SubContainer style={{ width: "100%", maxWidth: "160px", marginTop: "30px" }}>
              <ButtonConfirm text={"Remove"} click={removeTags} />
              <CancelButton onClick={() => Close()}>Cancel</CancelButton>
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

const CancelButton = styled.button`
  font: normal normal medium 14px/17px Inter;
  color: #3163f0;
  border-radius: 4px;
  background-color: #ffffff;
  border: 1px solid #3163f0;
  text-align: center;
`;
const Content = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  font-family: Inter;
  color: #303134;
  margin-top: 20px;
`;
