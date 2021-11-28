import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import { Column, Row } from "simple-flexbox";
import TableComponent from "../../common/components/TableComponent";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import LetsGetStarted from "../Popup/letsGetStartedPopUp";
import Settings from "../Popup/settings";

const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
  padding: 50px;
`;

const Transactions = styled.div`
  font-size: 20px;
`;
const SearchBar = styled.input`
  height: 35px;
  width: 280px;
  border: none;
  margin-left: 15px;
  border-radius: 4px;
  background-image: url("/images/search-icon.svg");
  background-repeat: no-repeat;
  background-position: 8px;
  padding-left: 30px;
  background-size: 12px;
  position: relative;
  &:focus: {
    outline: none;
    border: none;
  }
`;
const Icons = styled.img`
  margin-right: 10px;
  cursor: pointer;
`;
const IconContainer = styled.div`
  position: absolute;
  right: 40px;
`;
const Heading = styled.span`
  margin-top: 10px;
`;
const InstructionText = styled.span`
  margin-top: 10px;
`;
const Card = styled.div`
  margin-top: 20px;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 8px 10px 25px 40px;
`;

function TransactionList() {
  useEffect(() => {
    // code to run on component mount
    // setstate();
  }, []);
  const [state, setState] = useState(true);
  const [open, isOpen] = useState(false);
  const handleClickOpen = () => {
    isOpen(true);
  };
  const handleClose = () => {
    isOpen(false);
  };
  return (
    <>
      <Header />
      <Row style={{ height: "170vh" }}>
        <Sidebar />
        <MainContainer>
          <Row>
            <Transactions>
              <b>Transactions</b>
            </Transactions>
            <SearchBar placeholder="Search by address or name" />
            <IconContainer>
              {open && <Settings click={handleClose} />}
              <Icons src="/images/settings.svg" onClick={handleClickOpen} />
              <Icons src="/images/refresh.svg" />
              <Icons src="/images/filter.svg" />
            </IconContainer>
          </Row>

          <Card>
            <Column>
              <Heading>View Transaction for Contract</Heading>
              <InstructionText>
                You can view transactions per contract by using the contract
                picker below
              </InstructionText>
              <Select
                defaultValue={10}
                style={{
                  width: 500,
                  marginTop: 10,
                  background: "#F5F6FD",
                  border: "solid #D5E0FF",
                  outline: "none",
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                // label="Age"
                // onChange={handleChange}
              >
                <MenuItem color="#416BE0" value={10}>
                  <Column>
                    App_Transactions
                    <TransactionNumber>
                      xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c
                    </TransactionNumber>
                  </Column>
                </MenuItem>

                <MenuItem value={20} color="#416BE0">
                  <Column>
                    App_Transactions
                    <TransactionNumber>
                      xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c
                    </TransactionNumber>
                  </Column>
                </MenuItem>

                <MenuItem value={30} color="#416BE0">
                  <Column>
                    App_Transactions
                    <TransactionNumber>
                      xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c
                    </TransactionNumber>
                  </Column>
                </MenuItem>
              </Select>
            </Column>
          </Card>
          <TableCard>
            <TableComponent.Table cellpadding="0" cellspacing="0">
              <TableComponent.TableHead>
                <TableComponent.HeadColumn>Tx Hash</TableComponent.HeadColumn>
                <TableComponent.HeadColumn>Status</TableComponent.HeadColumn>
                <TableComponent.HeadColumn>Functions</TableComponent.HeadColumn>
                <TableComponent.HeadColumn>Contracts</TableComponent.HeadColumn>
                <TableComponent.HeadColumn>Form</TableComponent.HeadColumn>
                <TableComponent.HeadColumn>To</TableComponent.HeadColumn>
                <TableComponent.HeadColumn>When</TableComponent.HeadColumn>
              </TableComponent.TableHead>
              <TableComponent.TableBody>
                <TableComponent.BodyColumn>
                  App_Transactions
                </TableComponent.BodyColumn>
                <TableComponent.BodyColumn>
                  App_Transactions
                </TableComponent.BodyColumn>
                <TableComponent.BodyColumn>
                  App_Transactions
                </TableComponent.BodyColumn>
                <TableComponent.BodyColumn>
                  App_Transactions
                </TableComponent.BodyColumn>
                <TableComponent.BodyColumn>
                  App_Transactions
                </TableComponent.BodyColumn>
                <TableComponent.BodyColumn>
                  App_Transactions
                </TableComponent.BodyColumn>
                <TableComponent.BodyColumn>
                  App_Transactions
                </TableComponent.BodyColumn>
              </TableComponent.TableBody>
            </TableComponent.Table>
          </TableCard>
        </MainContainer>
      </Row>
      <div>
        {state && (
          <LetsGetStarted click={() => setState(false)} state={state} />
        )}
      </div>
    </>
  );
}

export default TransactionList;

const TableCard = styled.div`
  background-color: #ffffff;
  height: 480px;
  margin-top: 20px;
`;
const TransactionNumber = styled.b`
  color: #416be0;
`;
