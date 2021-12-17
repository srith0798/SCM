import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../header/header";
import { Row } from "simple-flexbox";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContractAbi from "../../Popup/contractAbi";
import RenameContract from "../../Popup/renameContract";
import Remove from "../../Popup/remove";

import { history } from "../../../managers/history";
import HideContract from "../../Popup/hideContract";
import "react-tabs/style/react-tabs.css";
import SourceCode from "./sourceCode";
import ContractsService from "../../../services/contractsService";
import utility from "../../../utility";


export default function ContractDetails() {
  const [activeButton, setActiveButton] = React.useState("General");
  const handleViewClick = (e) => {
    setActiveButton(e.target.id);
  };

  const getContractById = async () => {
    // console.log(window.location.pathname);
    let url = window.location.pathname;
    let addressURL = url.split("/");
    // console.log(addressURL);
    addressURL = addressURL[3];
    // console.log(addressURL);
    try {
      const response = await ContractsService.getContractsById(addressURL);
      console.log("response", response);
      setAddress(response);
    } catch (err) {
      console.log(err);
    }
  };
  React.useEffect(() => {
    getContractById();
    //   let address = [
    //     {
    //       heading: "Network",
    //       subheading: "XDC Mainnet",
    //     },
    //     {
    //       heading: "Solidity version",
    //       subheading: "^0.4.16",
    //     },
    //     {
    //       heading: "Verification",
    //       subheading: "Verified",
    //     },
    //     {
    //       heading: "Tags",
    //       subheading: "XDC Mainnet",
    //     },
    //     {
    //       heading: "Compiler",
    //       subheading: "v0.4.20+commit.3155dd80",
    //     },
    //     {
    //       heading: "EVM version",
    //       subheading: "default",
    //     },
    //     {
    //       heading: "Optimizations",
    //       subheading: "Enabled",
    //     },
    //   ];
    //   setAddress(
    //     address.map((object) => {
    //       return {
    //         heading: object.heading,
    //         subheading: object.subheading,
    //       };
    //     })
    //   );
  }, []);

  const [address, setAddress] = React.useState({});
  const [value, setValues] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const hideContract = async () => {
    let requestData ={
      id : "61b6ddbcbf43f62ed425c60c"
    }
    try{

    const response = await ContractsService.hideContract(requestData);
    console.log(response)
    } catch(e){console.log(e)}
  };

  const [renameState, setRenameState] = useState(false);
  const renameHandleOpen = () => {
    setRenameState(true);
  };
  const renameHandleClose = () => {
    setRenameState(false);
  };
  const [hide, setHide] = useState(false);
  const hideHandleOpen = () => {
    setHide(true);
  };
  const hideHandleClose = () => {
    setHide(false);
  };
  const [remove, setRemoveState] = useState(false);
  const removeHandleOpen = () => {
    setRemoveState(true);
  };
  const removeHandleClose = () => {
    setRemoveState(false);
  };
  const backButton = () => {
    history.push("/dashboard/contract");
  };
  return (
    <>
      {/* <Row> */}
      <MainContainer>
        <Row style={{ display: "flex", justifyContent: "space-between" }}>
          <TitleDiv>
            <img
              alt=""
              style={{ marginRight: "4px", cursor: "pointer" }}
              src="/images/back.svg"
              onClick={backButton}
            />
            <Title>Contract Details</Title>
          </TitleDiv>
          <Button>View in Explorer</Button>
        </Row>
        <Container>
          <SubHeading style={{ paddingTop: "0.625rem", paddingLeft: "1rem" }}>
            App_Transactions_Validator
          </SubHeading>
          <div
            style={{
              paddingLeft: "1.25rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Hash
              type="text"
              value={value}
              onChange={(e) => setValues(e.target.value)}
            />
            {/* xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c */}
            <CopyToClipboard text={value}>
              <CopyImg src="/images/copy.svg" />
            </CopyToClipboard>
          </div>

          <TabLister>
            <TabView
              id="General"
              onClick={handleViewClick}
              style={{
                color: activeButton === "General" ? "#3163F0" : "#AEB7D0",
                display: "flex",
                paddingBottom: "0.875rem",
                paddingright: "16px",
                alignItems: "center",
                borderBottom:
                  activeButton === "General"
                    ? "0.125rem solid #3163F0"
                    : "#AEB7D0",
              }}
            >
              <img
                alt=""
                style={{ marginRight: "0.375rem" }}
                src={
                  activeButton === "General"
                    ? "/images/genrl.svg"
                    : "/images/general_grey.svg"
                }
              />
              General
            </TabView>
            <TabView
              id="Source Code"
              onClick={handleViewClick}
              style={{
                color: activeButton === "Source Code" ? "#3163F0" : "#AEB7D0",
                display: "flex",
                paddingBottom: "0.875rem",
                paddingright: "16px",
                alignItems: "center",
                borderBottom:
                  activeButton === "Source Code" ? "0.125rem solid blue" : "",
              }}
            >
              <img
                alt=""
                style={{ marginRight: "0.375rem" }}
                src={
                  activeButton === "Source Code"
                    ? "/images/source code_blue.svg"
                    : "/images/source code_grey.svg"
                }
              />
              Source Code
            </TabView>
          </TabLister>
          {activeButton === "General" && (
            <DetailsSection>
              <div>
                {/* {address.map((data) => { */}

                <Div>
                  <TableHeading>Network</TableHeading>
                  <TableData>{address.address}</TableData>
                </Div>
                <Div>
                  <TableHeading>Solidity version</TableHeading>
                  <TableData>{address.blockNumber}</TableData>
                </Div>
                <Div>
                  <TableHeading>Verification</TableHeading>
                  <Verified>{address.status}</Verified>
                </Div>
                <Div>
                  <TableHeading>Tags</TableHeading>
                  <TableData>{tagDiv()} </TableData>
                </Div>
                <Div>
                  <TableHeading>Compiler</TableHeading>
                  <TableData>{address.blockNumber}</TableData>
                </Div>
                <Div>
                  <TableHeading>EVM version</TableHeading>
                  <TableData>{address.blockNumber}</TableData>
                </Div>
                <Div>
                  <TableHeading>Optimizations</TableHeading>
                  <Enabled>{address.status}</Enabled>
                </Div>

                {/* })} */}
              </div>
              <PopUp>
                <PopUpBlock>
                  <RowProperty>
                    <img alt="" src="/images/cube.svg" />
                  </RowProperty>
                  <RowProperty>View transactions</RowProperty>
                </PopUpBlock>

                <PopUpBlock>
                  {open && <ContractAbi click={handleClose} />}
                  <RowProperty
                    onClick={() => {
                      handleClickOpen();
                    }}
                  >
                    <img alt="" src="/images/code.svg" />
                  </RowProperty>
                  <RowProperty
                    onClick={() => {
                      handleClickOpen();
                    }}
                  >
                    Contract ABI
                  </RowProperty>
                </PopUpBlock>

                <PopUpBlock>
                  {renameState && <RenameContract click={renameHandleClose} />}
                  <RowProperty onClick={() => renameHandleOpen()}>
                    <img alt="" src="/images/edit.svg" />
                  </RowProperty>
                  <RowProperty onClick={() => renameHandleOpen()}>
                    Rename Contract
                  </RowProperty>
                </PopUpBlock>
                <PopUpBlock>
                  {hide && <HideContract hideContract={hideContract} click={hideHandleClose} />}
                  {address.isHidden ? (
                    <>
                      <RowProperty onClick={() => hideHandleOpen()}>
                        <img alt="" src="/images/hide.svg" />
                      </RowProperty>
                      <RowProperty onClick={() => hideHandleOpen()}>
                       Hide Contract
                      </RowProperty>
                    </>
                  ) : (
                    <>
                      <RowProperty onClick={() => hideHandleOpen()}>
                        <img alt="" src="/images/hide.svg" />
                      </RowProperty>
                      <RowProperty onClick={() => hideHandleOpen()}>
                        Hide Contract
                      </RowProperty>
                    </>
                  )}
                </PopUpBlock>
                <PopUpBlock>
                  {remove && <Remove click={removeHandleClose} />}
                  <RowProperty onClick={() => removeHandleOpen()}>
                    <img alt="" src="/images/delete.svg" />
                  </RowProperty>
                  <RowProperty onClick={() => removeHandleOpen()}>
                    Remove Contract
                  </RowProperty>
                </PopUpBlock>
              </PopUp>
            </DetailsSection>
          )}
          {activeButton === "Source Code" && <SourceCode />}
        </Container>
      </MainContainer>
      {/* </Row> */}
    </>
  );
}

function tagDiv() {
  return (
    <Row>
      <FinanceTag>Finance</FinanceTag>
      <AddTag>Add Tag</AddTag>
    </Row>
  );
}
const Verified = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #00a58c;
`;
const Enabled = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #00a58c;
`;
const FinanceTag = styled.div`
  background-image: url("/images/Tag_logo.svg");
  background-repeat: no-repeat;
  background-position: 0.5rem;
  padding-left: 1.75rem;
  background-size: 0.875rem;
  position: relative;
  background-color: #eaefff;
  border: 1px solid #eaefff;
  border-radius: 0.25rem;
  width: 100%;
  max-width: 17.75rem;
  white-space: nowrap;
  height: 2.125rem;
  align-items: center;
  text-align: center;
  display: flex;
  font-size: 0.8rem;
`;
const AddTag = styled.button`
  color: #416be0;
  background: #ffffff 0% 0% no-repeat padding-box;
  font-size: 0.8rem;
  font-weight: 600;
  border: none;
  outline: none;
  white-space: nowrap;
  background-image: url("/images/globe.svg");
  background-repeat: no-repeat;
  background-position: 0.5rem;
  padding-left: 1.75rem;
  background-size: 0.875rem;
  position: relative;
  background-color: #ffffff;

  border: none;
  border-radius: 0.25rem;
  width: 100%;
  max-width: 17.75rem;
  white-space: nowrap;
  height: 2.125rem;
`;

const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  width: 100%;
  padding: 3.125rem;
  height: 100vh;
`;
const Container = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  width: 100%;
  margin-top: 0.625rem;
  height: 9.25rem;
`;
const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 217px;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
`;
const Title = styled.div``;
const SubHeading = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #102c78;
`;

const Hash = styled.input`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 0.625rem;
  font-weight: 600;
  border: none;
  width: 100%;
  max-width: 24.063rem;
`;
const DetailsSection = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  width: 100%;
  height: 35.313rem;
  padding: 0.625rem;
  margin-top: 1.25rem;
`;
const Div = styled.div`
  display: flex;
  flex-flow: row nowrap;
  border-bottom: 0.063rem solid #e3e7eb;
  padding: 1.25rem;
`;
const TableData = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #191919;
  width: 100%;
  max-width: 9.375rem;
  font-size: 1.063rem;
  font-weight: 600;
`;
const CopyImg = styled.img`
  margin-left: 9%;
  cursor: pointer;
`;
const TableHeading = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #102c78;
  max-width: 18.75rem;
  width: 100%;
`;
const PopUp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
  max-width: 59.375rem;
  font-size: 0.875rem;
`;

const PopUpBlock = styled.div`
  background: #f5f6fd 0% 0% no-repeat padding-box;
  border: 0.063rem solid #d5e0ff;
  border-radius: 0.375rem;
  width: 100%;
  max-width: 10.375rem;
  padding: 0.625rem;
  height: 3.938rem;
  color: #1d3c93;
  font-weight: 600;
  cursor: pointer;
`;
const RowProperty = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;
const TabLister = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 18.125rem;
  margin: 1.563rem 0rem 0.625rem 1.063rem;
  cursor: pointer;
`;
const TabView = styled.div`
  padding: 0.313rem 0.5rem 0.313rem 0.5rem;
`;
const Button = styled.button`
  background-image: url("/images/globe.svg");
  background-repeat: no-repeat;
  background-position: 0.5rem;
  padding-left: 1.75rem;
  background-size: 0.875rem;
  position: relative;
  background-color: #ffffff;
  color: #3163f0;
  border: none;
  border-radius: 0.25rem;
  // width: 100%;
  max-width: 17.75rem;
  white-space: nowrap;
  height: 2.125rem;
  font-size: 0.875rem;
`;
