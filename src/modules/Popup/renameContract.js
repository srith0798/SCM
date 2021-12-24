import React, { useState } from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";
import contractsService from "../../services/contractsService";
import utility from "../../utility";

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
    top: "-15%",
  },
}));

export default function RenameContract(props) {
  const classes = useStyles();
  const [newName, setNewName] = useState(props.address.contractName || "");

  const renameContract = async () => {
    const requestData = {
      id: props.address._id,
      contractName: newName,
    };
    const response = await contractsService.renameContract(requestData);
    console.log(response)
    if(response.contractName === newName){
      props.click()
      utility.apiSuccessToast("Contract rename successful");
      window.location.reload();
    }else{
      utility.apiFailureToast("Rename failed")
    }
  };
  return (
    <div>
      <Dialog classes={{ paper: classes.dialogBox }} open={true}>
        <MainContainer>
          <Container>
            <SubContainer>
              <Add>Rename Contract</Add>
              <img alt="" src="/images/XDC-Cross.svg" onClick={props.click} />
            </SubContainer>
            <Input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <SubContainer
              style={{ width: "100%", maxWidth: "160px", marginTop: "30px" }}
            >
              <RenameButton onClick={renameContract}>Rename</RenameButton>
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
const Input = styled.input`
  background: #f0f2fc 0% 0% no-repeat padding-box;

  padding: 7px;
  border: 0px;
  width: 100%;
  max-width: 636px;
  margin-top: 30px;
  background-image: url("/images/globe.svg");
  background-repeat: no-repeat;
  background-position: 8px;
  padding-left: 35px;
  background-size: 20px;
  color: #436ce0;
`;
const RenameButton = styled.button`
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  background: #3163f0 0% 0% no-repeat padding-box;
  border: 0px;
  border-radius: 4px;
  text-align: center;
`;
const CancelButton = styled.button`
  font: normal normal medium 14px/17px Inter;
  color: #3163f0;
  border-radius: 4px;
  background-color: #ffffff;
  border: 1px solid #3163f0;
  text-align: center;
`;
