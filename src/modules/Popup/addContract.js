import React, { useState } from "react";
import styled from "styled-components";
import ContractsService from "../../services/contractsService";
import Dialog from "@mui/material/Dialog";
import utility from "../../utility";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
  },
}));

export default function AddContract(props) {
  const classes = useStyles();
  const [hideStep, setHideStep] = useState(true);
  const [checkBox, setCheckBox] = useState(false);
  const [address, setAddress] = React.useState("");
  const [verifyAddress, setVerifyAddress] = React.useState("");
  console.log("address", checkBox);
  console.log(props);

  const checkAddress = async () => {
    try{
      const response = await ContractsService.checkAddress(address);
      if(response)
        setVerifyAddress(address)
    }catch(e){
      if (e === "Address already Exists") utility.apiFailureToast(e);
      console.log(e);
      utility.apiFailureToast(e)
    }
    
  }

  const addContract = async () => {
    try {
      let requestData = {
        contractAddress: address,
      };
      const response = await ContractsService.addContract(requestData);
      if (response.address && response.address === address) {
        utility.apiSuccessToast("Contract added");
        props.click();
        props.reloadData();
      } else {
        utility.apiFailureToast("Contract not found");
      }
    } catch (e) {
      if (e === "Address already Exists") utility.apiFailureToast(e);
      console.log(e);
      utility.apiFailureToast(e)
    }
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      checkAddress();
    }
  };
  return (
    <div>
      <Dialog classes={{ paper: classes.dialogBox }} open>
        <MainContainer>
          <Container>
            <SubContainer>
              <Add>Add Contract</Add>
              <img alt="" src="/images/XDC-Cross.svg" onClick={props.click} />
            </SubContainer>
            {/* <ImportFile>Import Public Contracts</ImportFile> */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Content>
                You can import contracts that have been verified publicly on
                XDC.
              </Content>

              <HideSteps
                onClick={() => {
                  setHideStep(!hideStep);
                }}
              >
                Hide steps
              </HideSteps>
            </div>
            <Input
              type="text"
              placeholder="Find a public contract by name or address"
              onChange={(e) => setAddress(e.target.value)}
              onKeyDown={(e) => handleEnterKey(e)}
            />
            {hideStep && (
              <Text>
                1. Go to XDC Explorer <br></br>
                2. Check for an verified contract <br></br> 3. Copy contract
                address <br></br>4. Paste it on the given field below
              </Text>
            )}
            {verifyAddress === "" ? (
              ""
            ) : (
              <ImportBox>
                <IconImport>
                  <XDCLogo src="/images/network_xdc.svg"></XDCLogo>
                  <BlueLine></BlueLine>
                </IconImport>
                <SelectImport>
                  <CheckBox
                    type="checkbox"
                    onChange={(e) => setCheckBox(e.target.checked)}
                  />
                  <AddressImport>{address}</AddressImport>
                </SelectImport>
              </ImportBox>
            )}
            <Button
              onClick={addContract}
              disabled={address.trim().length >= 0 && !checkBox ? true : false}
              style={{ backgroundColor: address === "" ? "#9DB5F8" : "" }}
            >
              Import Contracts
            </Button>
          </Container>
        </MainContainer>
      </Dialog>
    </div>
  );
}

const CheckBox = styled.input`
  outline: none;
`;
const XDCLogo = styled.img`
  margin-bottom: 5px;
`;
const BlueLine = styled.div`
  width: 30px;
  border-bottom: 2px solid blue;
`;
const AddressImport = styled.div`
  color: #436ce0;

  margin-left: 5px;
  font-size: 0.8rem;
  font-weight: 600;
`;
const ImportBox = styled.div`
  background-color: #f0f2fc;
  width: 100%;
`;
const IconImport = styled.div`
  padding: 8px 8px 0px 8px;
  border-bottom: 1px solid #c3c3c3;
`;
const SelectImport = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
  margin-top: 18px;
`;

const Text = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #303134;
`;
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
  color: #303134;
  font-size: 1rem;
  font-weight: 600;
`;
// const Img = styled.img`
//   cursor: pointer;
// `;

const Content = styled.div`
  color: #303134;
  margin-top: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
`;
const Input = styled.input`
  background-image: url("/images/search-icon.svg");
  background-repeat: no-repeat;
  background-position: 8px;
  padding-left: 34px;
  background-size: 14px;
  position: relative;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  width: 100%;
  background-color: #f0f2fc;
  height: 30px;
  margin-bottom: 15px;
  margin-top: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  outline: none;
  color: #436ce0;
`;
const Button = styled.button`
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  border: 0px;
  color: #ffffff;
  max-width: 172px;
  width: 100%;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 6px;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
`;
const HideSteps = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
  background-color: #ffffff;
  color: #3163f0;
  cursor: pointer;
  background-image: url("/images/Arrrow.svg");
  background-repeat: no-repeat;
  width: 100%;
  max-width: 114px;
  padding-left: 26px;
  background-position: right;
  position: relative;
  margin-top: 12px;
`;
