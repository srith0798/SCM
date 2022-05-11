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
    maxWidth: "635px",
    maxHeight: "430px",
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

export default function ImportContract(props) {
  const screen = new ScreenSizeDetector();
  const classes = useStyles();
  const [address, setAddress] = React.useState([]);
  const [loader, setLoader] = React.useState(false);
  const [selected, setSelected] = React.useState([]);

  const addContract = async () => {
    let userId = sessionManager.getDataFromCookies(cookiesConstants.USER_ID);
    let requestData = {
      userId: userId,
      contractAddress: selected,
    };
    setLoader(true);
    const [error, response] = await utility.parseResponse(
      ContractsService.addContract(requestData)
    );
    setLoader(false);
    if (error) {
      return;
    }
    setAddress(response.contractList);
    if (response) props.click();
  };

  const handleClick = (e, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

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
            <div>
            <Add>Import Contract</Add>
            <Content>
              We have found {props?.contracts?.length} Contracts linked with
              this wallet address. Do you want to import these contracts?
            </Content>
            <FlexDiv>
              <HeadingOne>Contract Name</HeadingOne>
              <HeadingTwo>Address</HeadingTwo>
              <HeadingThree>Network</HeadingThree>
            </FlexDiv>
            </div>
            <ContractHolder>
            {props?.contracts.length !== 0
              ? props?.contracts.length &&
                props?.contracts.map((item) => (
                  <FlexDivInside>
                    <ContractContent>
                      {" "}
                      {item?.tokenImage ? (
                        <img
                        style={{
                          height: "20px",
                          width: "20px",
                          marginRight: "10px",
                        }}
                        src={item.tokenImage}
                      ></img>
                      ) : ""}
                      {item.tokenName}
                    </ContractContent>
                    <BackgroundChangerTxhash>
                      {utility.truncateTxnAddress(item.address)}
                    </BackgroundChangerTxhash>
                    <ContractNetwork>
                      {item.network ? item.network : "XDC Mainnet"}
                    </ContractNetwork>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "40px",
                      }}
                    >
                      <CheckBox
                        type="checkbox"
                        onChange={(e) => handleClick(e, item.address)}
                      />
                    </div>
                  </FlexDivInside>
                ))
              : ""}
              </ContractHolder>
            <Button onClick={addContract}>Import</Button>
            <ButtonSkip onClick={props.click}>Skip</ButtonSkip>
          </Container>
        </MainContainer>
      </Dialog>
    </div>
  );
}
const ContractHolder = styled.div`
height: auto;
max-height: 167px;
overflow-x: scroll;
`;
const HeadingOne = styled.div`
  color: #102c78;
  font-weight: 500;
  font-size: 14px;
  width: 260px;
`;

const CheckBox = styled.input`
  outline: none;
`;

const HeadingTwo = styled.div`
  color: #102c78;
  font-weight: 500;
  font-size: 14px;
  width: 170px;
`;
const HeadingThree = styled.div`
  color: #102c78;
  font-weight: 500;
  font-size: 14px;
  width: 100px;
`;

const FlexDiv = styled.div`
  display: flex;
  margin: 10px 10px 0px 0px;
  height: 40px;
  border-bottom: 1px solid #e2e2e2;
`;

const FlexDivInside = styled.div`
  display: flex;
  border-bottom: 1px solid #e2e2e2;
  width: 100%;
  height: 55px;
  padding: 10px 0px 10px 0px;
`;

const ContractContent = styled.div`
  font-size: 15px;
  font-weight: 400;
  display: flex;
  align-items: center;
  width: 256px;
`;
const ContractNetwork = styled.div`
  font-size: 15px;
  font-weight: 400;
  display: flex;
  align-items: center;
  margin-left: 5%;
`;

const BackgroundChangerTxhash = styled.div`
  width: 100%;
  max-width: 145px;
  height: auto;
  background-repeat: no-repeat;
  background: #eaefff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  padding: 1px 6px 1px 10px;
  cursor: pointer;
  font-weight: 400;
  display: flex;
  align-items: center;
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
  padding: 20px 20px 20px 25px;
`;
const Add = styled.div`
  color: #303134;
  font-size: 24px;
  font-weight: 600;
`;
const Content = styled.div`
  color: #303134;
  margin-top: 10px;
  font-size: 0.8rem;
  font-weight: 500;
  @media (min-width: 300px) and (max-width: 767px) {
    white-space: unset;
  }
`;
const Button = styled.button`
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  border: 0px;
  color: #ffffff;
  max-width: 100px;
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

const ButtonSkip = styled.button`
  background: #ffffff00 0% 0% no-repeat padding-box;
  border-radius: 6px;
  border: 1px solid #3163f0;
  color: #3163f0;
  max-width: 100px;
  width: 100%;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 6px;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  margin-left: 20px;
  @media (min-width: 300px) and (max-width: 767px) {
    margin-top: 50px;
    margin-left: 26%;
  }
`;
