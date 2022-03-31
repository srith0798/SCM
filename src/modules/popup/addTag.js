import React, { useState } from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";
import ButtonConfirm from "../../common/components/buttonConfirm";
import contractsService from "../../services/contractsService";
const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
  },
}));
export default function AddTags(props) {
  const [input, setInput] = useState([]);
  const [tagError, setTagError] = useState([]);
  const classes = useStyles();
  let contractId = props.contractId;
  const addContractTag = async () => {
    let requestData = {};
    requestData = {
      contractId: contractId,
      tags: input,
    };

    try {
      const response = await contractsService.addTags(requestData);
      console.log(response);
    } catch (e) {
      console.log("Error", e);
    }
    props.click();
  };

  return (
    <div>
      <Dialog
        classes={{ paper: classes.dialogBox }}
        open={true}
        BackdropProps={{
          style: {
            backgroundColor: "rgba(0, 0, 0, 0.3) !important",
            boxShadow: "none",
          },
        }}
      >
        <MainContainer>
          <Container>
            <SubContainer>
              <Add>Add Tag to the selected contract</Add>
            </SubContainer>
            <Content>
              Add unique tags to your contracts to help you filter your
              transactions pinpoint key events that happened more easily.
            </Content>
            <Input
              type="text"
              placeholder="E.g. v1.3.37"
              value={input}
              maxLength={30}
              onChange={(e) => {
                if (e.target.value.length >= 30) {
                  setTagError("Tag cannot be longer than 30 characters");
                  return false;
                }
                setInput([e.target.value]);
              }}
            />{" "}
            <ErrorTag>{tagError}</ErrorTag>
            <SubContainer
              style={{ width: "100%", maxWidth: "160px", marginTop: "30px" }}
            >
              <ButtonConfirm
                input={input}
                text={"Add Tag"}
                click={addContractTag}
              />
              <CancelButton onClick={props.close}>Cancel</CancelButton>
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
const ErrorTag = styled.div`
  color: red;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Add = styled.div`
  font: normal normal 600 24px/29px Inter;
  color: #303134;
`;
const Input = styled.input`
  background: #f0f2fc 0% 0% no-repeat padding-box;
  padding: 7px;
  border: 0px;
  width: 100%;
  max-width: 636px;
  margin-top: 30px;
  background-image: url("/images/Tag.svg");
  background-repeat: no-repeat;
  background-position: 8px;
  padding-left: 35px;
  background-size: 13px;
  color: #436ce0;
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
