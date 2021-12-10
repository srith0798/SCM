import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../header/header";
// import Sidebar from "../sidebar/sidebar";
import { Row, Column } from "simple-flexbox";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContractAbi from "../../Popup/contractAbi";
import RenameContract from "../../Popup/renameContract";
import Remove from "../../Popup/remove";

import { history } from "../../../managers/history";
import HideContract from "../../Popup/hideContract";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SourceCode from "./sourceCode";

export default function ContractDetails(props) {
  React.useEffect(() => {
    let address = [
      {
        heading: "Network",
        subheading: "XDC Mainnet",
      },
      {
        heading: "Solidity version",
        subheading: "^0.4.16",
      },
      {
        heading: "Verification",
        subheading: "Verified",
      },
      {
        heading: "Tags",
        subheading: "XDC Mainnet",
      },
      {
        heading: "Compiler",
        subheading: "v0.4.20+commit.3155dd80",
      },
      {
        heading: "EVM version",
        subheading: "default",
      },
      {
        heading: "Optimizations",
        subheading: "Enabled",
      },
    ];

    setAddress(
      address.map((object) => {
        return {
          heading: object.heading,
          subheading: object.subheading,
        };
      })
    );
  }, []);

  const [address, setAddress] = React.useState([]);
  const [value, setValues] = useState("");
  const [open, setOpen] = useState(false);
  // const [] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // const handleCommonPopUpOpen = () => {
  //   setCommonOpen(true);
  // };
  // const handleCommonPopUpClose = () => {
  //   setCommonOpen(false);
  // };
  // const handleCommonPopUP = (state, values) => {
  //   if (state === "commonOpen") {
  //     setCommonOpen(values);
  //   }
  // };

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
    history.push("/contract");
  };
  return (
    <div>
      <Column>
        {/* <Header /> */}
        <div>
          <Row>
            {/* <Sidebar /> */}
            <MainContainer>
              <SubContainer>
                <div>
                  <img
                    alt=""
                    src="/images/back.svg"
                    style={{ marginRight: "0.625rem" }}
                    onClick={backButton}
                  />
                  <Heading>Contract Details</Heading>
                </div>
                <div style={{ display: "flex" }}>
                  <Button>View in Explorer</Button>
                </div>
              </SubContainer>
              <Container>
                <SubHeading>App_Transactions_Validator</SubHeading>
                <div style={{ display: "flex", alignItems: "center" }}>
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

                <Tabs>
                  <TabList>
                    <Tab>
                      <img alt="" src="/images/genrl.svg" />
                      &emsp;General
                    </Tab>
                    <Tab>
                      {" "}
                      <img alt="" src="/images/coding.svg" />
                      &emsp;Source Code
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <DetailsSection>
                      <div>
                        {address.map((data, index) => {
                          return (
                            <Div>
                              <TableHeading>{data.heading}</TableHeading>
                              <TableData>{data.subheading}</TableData>
                            </Div>
                          );
                        })}
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
                          <RowProperty onClick={handleClickOpen}>
                            <img alt="" src="/images/code.svg" />
                          </RowProperty>
                          <RowProperty>Contract ABI</RowProperty>
                        </PopUpBlock>

                        <PopUpBlock>
                          {renameState && (
                            <RenameContract click={renameHandleClose} />
                          )}
                          <RowProperty onClick={() => renameHandleOpen()}>
                            <img alt="" src="/images/edit.svg" />
                          </RowProperty>
                          <RowProperty>Rename Contract</RowProperty>
                        </PopUpBlock>
                        <PopUpBlock>
                          {hide && <HideContract click={hideHandleClose} />}
                          <RowProperty onClick={() => hideHandleOpen()}>
                            <img alt="" src="/images/hide.svg" />
                          </RowProperty>
                          <RowProperty>Hide Contract</RowProperty>
                        </PopUpBlock>
                        <PopUpBlock>
                          {remove && <Remove click={removeHandleClose} />}
                          <RowProperty onClick={() => removeHandleOpen()}>
                            <img alt="" src="/images/delete.svg" />
                          </RowProperty>
                          <RowProperty>Remove Contract</RowProperty>
                        </PopUpBlock>
                      </PopUp>
                    </DetailsSection>
                  </TabPanel>
                  <TabPanel>
                    <SourceCode />
                  </TabPanel>
                </Tabs>
              </Container>
            </MainContainer>
          </Row>
        </div>
      </Column>
    </div>
  );
}
const MainContainer = styled.div`
  background-color: #ecf0f7;
  width: 100%;
  padding: 3.125rem;
`;
const SubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 3.125rem;
  align-items: center;
`;
const Heading = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: #191919;
  margin-right: 0.625rem;
`;
const SubHeading = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #102c78;
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
  width: 100%;
  max-width: 17.75rem;
  white-space: nowrap;
  height: 2.125rem;
  font-size: 0.875rem;
`;
const Container = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  width: 100%;

  margin-top: 1.25rem;
  padding: 1.25rem;
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
  height: auto;
  margin-top: 1.25rem;
  padding: 0.625rem;
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
  margin-top: 4.375rem;
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
