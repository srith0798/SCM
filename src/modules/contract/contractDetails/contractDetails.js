import React, { useState } from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContractAbi from "../../popup/contractAbi";
import RenameContract from "../../popup/renameContract";
import Remove from "../../popup/remove";
import ShowLoader from "../../../common/components/showLoader";
import HideContract from "../../popup/hideContract";
import ShowContract from "./showContract";
import "react-tabs/style/react-tabs.css";
import SourceCode from "./sourceCode";
import ContractsService from "../../../services/contractsService";

import utility from "../../../utility";
import { history } from "../../../managers/history";
import AddTags from "../../popup/addTag";

export default function ContractDetails(props) {
  const [activeButton, setActiveButton] = React.useState("General");
  const handleViewClick = (e) => {
    setActiveButton(e.target.id);
  };

  const [contractAddress, setContractAddress] = React.useState({});
  const getContractById = async () => {
    let url = window.location.pathname;
    let addressURL = url.split("/");
    addressURL = addressURL[3];
    setContractAddress(addressURL);
    try {
      setLoader(true);
      const response = await ContractsService.getContractsById(addressURL);
      setLoader(false);
      console.log("response", response);
      setAddress(response);
    } catch (err) {
      setLoader(false);
    }
  };
  React.useEffect(() => {
    getContractById();
  }, []);

  const [address, setAddress] = React.useState({});

  const [value] = useState("");
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const hideContract = async () => {
    let requestData = {
      id: contractAddress,
    };
    try {
      setLoader(true);
      const response = await ContractsService.hideContract(requestData);
      console.log(response);
      setHide(false);
      window.location.reload();
    } catch (e) {
      console.log("Error", e);
    }
    setLoader(false);
  };
  console.log("contractAddress", contractAddress);
  const showContract = async () => {
    let requestData = {
      id: contractAddress,
    };

    try {
      setLoader(true);
      const response = await ContractsService.showContract(requestData);
      console.log(response);
      setShowBox(false);
      window.location.reload();
    } catch (e) {
      console.log("Error", e);
    }
    setLoader(false);
  };

  const [renameState, setRenameState] = useState(false);
  const renameHandleOpen = () => {
    setRenameState(true);
  };
  const renameHandleClose = () => {
    setRenameState(false);
  };

  // hide popup box handlers

  const [hide, setHide] = useState(false);
  const hideHandleOpen = () => {
    setHide(true);
  };
  const hideHandleClose = () => {
    setHide(false);
  };

  // show popup box handlers

  const [show, setShowBox] = useState(false);
  const hideShowOpen = () => {
    setShowBox(true);
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
  const [addTag, setAddTag] = useState(false);
  const Open = () => {
    setAddTag(true);
  };
  const Close = () => {
    setAddTag(false);
    getContractById();
  };
  // const [removeTagImage, setRemoveTagImage] = useState();
  // const [removeTag, setRemoveTag] = useState(false);
  // const [tagStore, setTagStore] = useState("");
  // const removeTagOpen = (tag) => {
  //   setRemoveTag(true);
  //   setTagStore(tag);
  // };
  return (
    <>
      <ShowLoader state={loader} />
      <MainContainer>
        <SubContainer>
          <MainHeading>
            <Heading>
              <img
                alt=""
                src="/images/back.svg"
                style={{ marginRight: "8px", marginBottom: "3px" }}
                onClick={() => backButton()}
              />
              Contract Details
            </Heading>
            <Button>View in Explorer</Button>
          </MainHeading>
        </SubContainer>
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
            <Hash>
              {utility.truncateTxnAddress(
                "xdcabfe4184e5f9f600fe86d20ffdse2fsfbsgsgsa768b3c"
              )}
            </Hash>
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
              <Div>
                <TableHeading>Network</TableHeading>
                <TableData>XDC Mainnet</TableData>
              </Div>
              <Div>
                <TableHeading>Solidity version</TableHeading>
                <SolidityData>{address.blockNumber}</SolidityData>
              </Div>
              <Div>
                <TableHeading>Verification</TableHeading>
                <Verified>{address.status}</Verified>
              </Div>
              <Div>
                <TableHeading>Tags</TableHeading>
                <TagData>
                  <Row>
                    {address.tags &&
                      address.tags.map((tag) => <FinanceTag>{tag}</FinanceTag>)}

                    {addTag && (
                      <AddTags
                        click={Close}
                        address={address}
                        contract={false}
                      />
                    )}
                    <AddTag onClick={() => Open()}>Add Tag</AddTag>
                  </Row>
                </TagData>
              </Div>
              <Div>
                <TableHeading>Compiler</TableHeading>
                <TableData>{address.blockNumber}</TableData>
              </Div>
              <Div>
                <TableHeading>EVM version</TableHeading>
                <EvmData>{address.blockNumber}</EvmData>
              </Div>
              <Div>
                <TableHeading>Optimizations</TableHeading>
                <Enabled>{address.status}</Enabled>
              </Div>

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
                  {renameState && (
                    <RenameContract
                      address={address}
                      click={renameHandleClose}
                    />
                  )}
                  <RowProperty onClick={() => renameHandleOpen()}>
                    <img alt="" src="/images/edit.svg" />
                  </RowProperty>
                  <RowProperty onClick={() => renameHandleOpen()}>
                    Rename Contract
                  </RowProperty>
                </PopUpBlock>
                <PopUpBlock>
                  {hide && (
                    <HideContract
                      hideContract={hideContract}
                      click={hideHandleClose}
                    />
                  )}
                  {show && (
                    <ShowContract
                      showContract={showContract}
                      click={() => setShowBox(false)}
                    />
                  )}
                  {address.isHidden ? (
                    <>
                      <RowProperty onClick={() => hideShowOpen()}>
                        <img alt="" src="/images/hide.svg" />
                      </RowProperty>
                      <RowProperty onClick={() => hideShowOpen()}>
                        Show Contract
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
                  {remove && (
                    <Remove click={removeHandleClose} contract={address} />
                  )}
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
    </>
  );
}

const MainHeading = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 340px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 58px;
  }
  @media (max-width: 768px) {
    padding-bottom: 5px;
  }
`;
const SubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 3.125rem;
  align-items: center;
  @media (min-width: 300px) and (max-width: 767px) {
    padding-top: 47px;
    padding-bottom: 33px;
  }
`;
const Heading = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #191919;
  margin-right: 0.625rem;
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 1.3rem;
    padding-bottom: 10px;
  }
`;
const Verified = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #00a58c;
  @media (min-width: 320px) and (max-width: 768px) {
    margin-left: -23px;
  }
`;
const Enabled = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #00a58c;
  @media (min-width: 320px) and (max-width: 768px) {
    margin-left: -38px;
  }
`;
const FinanceTag = styled.div`
  display: flex;
  background: #ecf0ff 0% 0% no-repeat padding-box;
  border: 1px solid #eaefff;
  border-radius: 4px;
  width: 100%;
  padding: 10px;
  height: 30px;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-right: 9px;
`;
const ImageTag = styled.div`
  background-image: ${(props) =>
    props.removeTagImage === props.index
      ? `url("/images/close.svg")`
      : `url("/images/Tag.svg")`};

  background-position: left;
  background-size: 13px;
  position: relative;
  background-color: #eaefff;
  border: 1px solid #eaefff;
  border-radius: 0.25rem;
  width: 100%;

  white-space: nowrap;
  height: 30px;

  align-items: center;
  color: #436ce0;
  text-align: center;
  display: flex;
  font-size: 1rem;
  font-weight: 400;

  background-repeat: no-repeat;
`;
const AddTag = styled.button`
  color: #416be0;
  background: #ffffff 0% 0% no-repeat padding-box;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  outline: none;
  white-space: nowrap;
  background-image: url("/images/add-icon.svg");
  background-repeat: no-repeat;
  background-position: 0.5rem;
  padding-left: 1.75rem;
  background-size: 0.875rem;
  position: relative;
  background-color: #ffffff;
  border: none;
  border-radius: 0.25rem;
  white-space: nowrap;
  height: 2.125rem;
`;

const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  width: 100%;
  padding: 3.125rem;
  height: 100vh;
  @media (min-width: 320px) and (max-width: 768px) {
    padding: 1rem;
  }
`;

const Hash = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 0.625rem;
  margin-bottom: 10px;
  border: none;
  width: 100%;
  max-width: 24.063rem;
`;
const Container = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  width: 100%;
  margin-top: 0.625rem;
  height: 159px;
`;

const SubHeading = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #102c78;
  margin-bottom: 10px;
`;

const DetailsSection = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  width: 100%;
  padding: 0.625rem 0.625rem 1.5rem 0.625rem;
  margin-top: 1.25rem;
  overflow-x: auto;
  @media (min-width: 300px) and (max-width: 768px) {
    height: 485px;
    overflow: scroll;
    overflow-y: hidden;
    width: 100%;
    ::-webkit-scrollbar {
      border: 0.5px solid rgb(204, 229, 243);
      outline: none;
      border-radius: 15px;
      /* background: #00A58C; */
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 1px grey;
      border-radius: 15px;
    }
    ::-webkit-scrollbar-thumb {
      background: #3163f0;
      border-radius: 15px;
      border: 4px solid transparent;
      background-clip: content-box;
    }
  }
`;
const Div = styled.div`
  display: flex;
  flex-flow: row nowrap;
  border-bottom: 0.063rem solid #e3e7eb;
  padding: 1.25rem 1.25rem 0.2rem 1.25rem;
  @media (min-width: 340px) and (max-width: 768px) {
    column-gap: 200px;
    white-space: nowrap;
  }
`;
const TableData = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #191919;
  width: 100%;
  /* max-width: 9.375rem; */
  font-size: 1rem;
  font-weight: 600;
`;
const SolidityData = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #191919;
  width: 100%;
  max-width: 9.375rem;
  font-size: 1rem;
  font-weight: 600;
  @media (min-width: 340px) and (max-width: 768px) {
    margin-left: -46px;
  }
`;
const TagData = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #191919;
  width: 100%;
  max-width: 9.375rem;
  font-size: 1rem;
  font-weight: 600;
  @media (min-width: 340px) and (max-width: 768px) {
    margin-left: 14px;
  }
`;
const EvmData = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #191919;
  width: 100%;
  max-width: 9.375rem;
  font-size: 1rem;
  font-weight: 600;
  @media (min-width: 340px) and (max-width: 768px) {
    margin-left: -22px;
  }
`;
const CopyImg = styled.img`
  margin-left: -12%;
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
  min-width: 900px;
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
  flex-flow: row wrap;
  justify-content: center;
  text-align: center;
`;
const TabLister = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 18.125rem;
  margin: 1.563rem 0rem 0.625rem 1.063rem;
  cursor: pointer;
  @media (min-width: 340px) and (max-width: 768px) {
    margin: none;
    max-width: 15.125rem;
  }
`;
const TabView = styled.div``;
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
  max-width: 9.75rem;
  white-space: nowrap;
  height: 2.125rem;
  font-size: 0.875rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
