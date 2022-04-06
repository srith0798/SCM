import React, { useState } from "react";
import styled from "styled-components";
import ContractsService from "../../services/contractsService";
import Dialog from "@mui/material/Dialog";
import utility from "../../utility";
import { makeStyles } from "@material-ui/styles";
import { sessionManager } from "../../managers/sessionManager";
import ShowLoader from "../../common/components/showLoader";
import ScreenSizeDetector from "screen-size-detector";
import { cookiesConstants } from "../../constants";

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
    backgroundColor: "#FFFFFF",
    bottom: "180px",
    "@media screen and (min-width: 300px) and (max-width: 360px)": {
      backgroundColor: "#ECF0F7 !important",
      margin: "0px !important",
      top: "9% !important",
      height: "100% !important",
    },
    "@media screen and (min-width: 361px) and (max-width: 376px)": {
      backgroundColor: "#ECF0F7 !important",
      margin: "0px !important",
      top: "10% !important",
      height: "100% !important",
    },
    "@media screen and (min-width: 377px) and (max-width: 389px)": {
      backgroundColor: "#ECF0F7 !important",
      margin: "0px !important",
      top: "8% !important",
      height: "100% !important",
    },
    "@media screen and (min-width: 390px) and (max-width: 411px)": {
      backgroundColor: "#ECF0F7 !important",
      margin: "0px !important",
      top: "7.5% !important",
      height: "100% !important",
    },
    "@media screen and (min-width: 412px) and (max-width: 767px)": {
      backgroundColor: "#ECF0F7 !important",
      margin: "0px !important",
      top: "7% !important",
      height: "100% !important",
    },
  },
}));

export default function AddContract(props) {
  const screen = new ScreenSizeDetector();
  const classes = useStyles();
  const [hideStep, setHideStep] = useState(true);
  const [checkBox, setCheckBox] = useState(false);
  const [address, setAddress] = React.useState("");
  const [verifyAddress, setVerifyAddress] = React.useState("");
  const [loader, setLoader] = React.useState(false);
  const [error, setError] = useState("");

  const checkAddress = async () => {
    setLoader(true);
    const [error] = await utility.parseResponse(
      ContractsService.checkAddress(address)
    );
    setLoader(false);
    if (error) {
      setError(error);
      return;
    }
    setVerifyAddress(address);
  };

  let user = "";
  try {
    user = window.web3.eth.accounts;
  } catch (e) {}
  const addContract = async () => {
    let userId = sessionManager.getDataFromCookies(cookiesConstants.USER_ID);
    let requestData = {
      contractAddress: address,
      userId: userId,
    };
    setLoader(true);
    const [error, response] = await utility.parseResponse(
      ContractsService.addContract(requestData)
    );
    setLoader(false);
    if (error) {
      setError(error);
      return;
    }
    if (response) {
      props.click();
      props.getContractList();
    }
  };
  React.useEffect(()=>{
  if(address.length >=40)
  handleEnterKey();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[address])


  const handleEnterKey = () => {
      checkAddress();
  };

  console.log("check", error);
  return (
    <div>
      <ShowLoader state={loader} top={"33%"} />
      <Dialog
        hideBackdrop={screen.width > 300 && screen.width < 768 ? true : false}
        classes={{ paper: classes.dialogBox }}
        open
      >
        <MainContainer>
          <Container>
            <SubContainer>
              <Add>Add Contracts</Add>
              <Img
                style={{ cursor: "pointer" }}
                alt=""
                src="/images/close.svg"
                onClick={props.click}
              />
              <CheckDivDesk>
                <HideSteps
                  onClick={() => {
                    setHideStep(!hideStep);
                  }}
                >
                  Hide steps
                </HideSteps>
              </CheckDivDesk>
            </SubContainer>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Content>
                You can import contracts that are available publicly on XDC.
              </Content>
              <CheckDivMob>
                <HideSteps
                  onClick={() => {
                    setHideStep(!hideStep);
                  }}
                >
                  Hide steps
                </HideSteps>
              </CheckDivMob>
            </div>
            <Input
              type="text"
              placeholder="Find a public contract by name or address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <ErrorTag>{error}</ErrorTag>
            {hideStep && (
              <Text>
                1. Go to XDC Observatory/Origin <br></br>
                2. Check for contract <br></br> 3. Copy contract address{" "}
                <br></br>4. Paste it on the given field above
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
              disabled={address === "" || checkBox === false}
              onClick={addContract}
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

const CheckDivMob = styled.div`
  @media (min-width: 300px) and (max-width: 767px) {
    display: none;
  }
`;
const CheckDivDesk = styled.div`
  @media (min-width: 767px) {
    display: none;
  }
`;
const Img = styled.img`
  @media (min-width: 300px) and (max-width: 767px) {
    display: none;
  }
`;
const XDCLogo = styled.img`
  margin-bottom: 5px;
`;
const BlueLine = styled.div`
  width: 115px;
  border-bottom: 2px solid blue;
  margin-left: -8px;
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
const ErrorTag = styled.div`
  color: red;
  font-size: 16px;
  padding: 0px 0px 8px 10px;
  margin-bottom: 0px;
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
  background: "#ECF0F7" 0% 0% no-repeat padding-box;
  border-radius: 6px;
  width: 100%;
  background-color: "#ECF0F7";
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
const Content = styled.div`
  color: #303134;
  margin-top: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
  @media (min-width: 300px) and (max-width: 767px) {
    white-space: unset;
  }
`;
const Input = styled.input`
  background-image: url("/images/search-icon.svg");
  background-repeat: no-repeat;
  background-position: 8px;
  padding-left: 34px;
  background-size: 14px;
  position: relative;
  background-color: #f0f2fc !important;
  border: none;
  border-radius: 4px;
  width: 100%;
  height: 30px;
  margin-bottom: 5px;
  margin-top: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  outline: none;
  color: #436ce0;
  @media (min-width: 300px) and (max-width: 767px) {
    background-color: #ffffff !important ;
  }
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
  @media (min-width: 300px) and (max-width: 767px) {
    margin-top: 50px;
    margin-left: 26%;
  }
`;
const HideSteps = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
  background-color: #ffffff;
  color: #3163f0;
  cursor: pointer;
  background-image: url("/images/arrrow.svg");
  background-repeat: no-repeat;
  width: 100%;
  max-width: 114px;
  padding-left: 26px;
  background-position: right;
  position: relative;
  margin-top: 12px;
  padding-right: 5px;
  margin-right: 15px;
  @media (min-width: 300px) and (max-width: 767px) {
    margin-top: 0px;
    background-color: #ecf0f7;
  }
`;
