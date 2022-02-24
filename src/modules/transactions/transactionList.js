import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Column } from "simple-flexbox";
import LetsGetStarted from "../popup/letsGetStartedPopUp";
import Settings from "../popup/settings";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { history } from "../../managers/history";
import Tooltip from "@mui/material/Tooltip";
import ContractsService from "../../services/contractsService";
import { sessionManager } from "../../managers/sessionManager";
import ShowLoader from "../../common/components/showLoader";
import utility from "../../utility";
import Filter from "../popup/filter";
import "moment-timezone";
import Moment from "react-moment";
import ReactPaginate from "react-paginate";

export default function TransactionList() {
  const [state, setState] = useState(true);
  const [filterData, setFilterData] = React.useState(1);
  const [open, isOpen] = useState(false);
  const [filterPopupOpen, setfilterPopupOpen] = useState(false);
  const [countToggle, setCountToggle] = useState(10);
  let url = history?.location?.state?.id;
  let name = history?.location?.state?.name;

  const handleClickOpen = () => {
    isOpen(true);
  };

  const handleClose = () => {
    isOpen(false);
  };

  const filterPopupClose = (data) => {
    setfilterPopupOpen(false);
    setFilterData(data);
  };

  const [TxHashToolTip, setTxHashToolTip] = React.useState(false);
  const [statusToolTip, setstatusToolTip] = React.useState(false);
  const [functionToolTip, setfunctionToolTip] = React.useState(false);
  // const [showPlaceHolder, setShowPlaceHolder] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const [address, setAddress] = React.useState([]);
  const [searchRow, setSearchRow] = React.useState([]);
  const [contracts, setContracts] = React.useState([]);
  const [selected, setSelected] = React.useState("");
  const [selectedName, setSelectedName] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [valueCheck, setValueCheck] = React.useState(0);

  const getContractNames = async (skip = 0, limit = 10) => {
    let userId = sessionManager.getDataFromCookies("userId");
    let dropDownSelect = [];
    try {
      const requestData = {
        skip: skip,
        limit: limit,
        userId: userId,
      };
      setLoader(true);
      const response = await ContractsService.getContractsList(requestData);
      setLoader(false);
      response.contractList.forEach((row) => {
        if (row.isHidden === false) dropDownSelect.push(row);
      });
      setContracts(dropDownSelect);
      if (!url) {
        setSelected(dropDownSelect[0].address);
        getTransaction(dropDownSelect[0].address);
        setSelectedName(dropDownSelect[0].contractName);
      } else {
        setSelected(url);
        getTransaction(url);
        setSelectedName(name);
      }
      // if (response.contractList.length === 0) setShowPlaceHolder(true);
    } catch (e) {
      // setShowPlaceHolder(true);
      setLoader(false);
    }
  };
  const getTransaction = async (address, skip = 0, limit = countToggle) => {
    try {
      const requestData = {
        skip: skip,
        limit: limit,
        contractAddress: address,
      };
      setLoader(true);
      const response = await ContractsService.getTransactionsList(requestData);
      setLoader(false);
      setAddress(response.transactionList);
      let pageCount = response.totalCount;
      if (pageCount % countToggle === 0) {
        setPage(parseInt(pageCount / countToggle));
      } else {
        setPage(parseInt(pageCount / countToggle) + 1);
      }
    } catch (e) {
      // setShowPlaceHolder(true);
      setLoader(false);
    }
  };
  const searchTransaction = async (searchValues, searchKeys) => {
    try {
      const requestData = {
        searchValue: searchValues,
        searchKeys: searchKeys,
        skip: 0,
        limit: countToggle,
      };
      setLoader(true);
      const response = await ContractsService.getTransactionsList(requestData);
      setLoader(false);
      setSearchRow(response.transactionList);

      // if (response.transactionList.length === 0) setShowPlaceHolder(true);
    } catch (e) {
      // setShowPlaceHolder(true);
      setLoader(false);
    }
  };

  const [input, setInput] = useState("");
  const search = (event) => {
    setInput(event.target.value);
    searchTransaction(event.target.value, ["hash"]);
  };

  const [isSetOpen, setOpen] = React.useState(false);
  const handleClick = (e) => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: "absolute",
    top: 90,
    right: 0,
    left: 0,
    zIndex: 1,
    p: 1,
    bgcolor: "background.paper",
    width: "100%",
    maxWidth: "453px",
    background: "#f5f6fd 0% 0% no-repeat padding-box",
    border: "1px solid #d5e0ff",
    borderRadius: "6px",
    overflowY: "auto",
    height: "200px",
    marginTop: "4px",
    fontSize: "0.875rem",
    fontWeight: "600",
    color: "#191919",
  };
  const redirectToTransactionDetails = (id, status) => {
    history.push({
      pathname: "/transactions/transaction-details?" + id,
      state: { id: id, status: status },
    });
  };
  const changePage = (value) => {
    setValueCheck(value.selected);
    getTransaction(
      selected,
      Math.ceil(value.selected * countToggle),
      countToggle
    );
  };
  const [toggle, setToggle] = React.useState({
    transactionHash: true,
    status: true,
    contracts: true,
    function: true,
    from: true,
    to: true,
    when: true,
  });
  /////searchFilter

  const [select, setSelect] = React.useState(1);

  const [fromInput, setFromInput] = React.useState(0);

  const [toInput, setToInput] = React.useState(0);
  let getFrom = new Date(fromInput).toUTCString();
  let setFrom = new Date(getFrom).getTime() / 1000.0;

  let getTo = new Date(toInput).toUTCString();
  let setTo = new Date(getTo).getTime() / 1000.0;

  useEffect(() => {
    if (selected.length > 0) {
      getTransaction(selected);
    } else getContractNames();
  }, [select, countToggle]);

  const [selectDrop, setSelectDrop] = React.useState([]);

  const filterSearch = async () => {
    let requestData = {
      skip: 0,
      limit: countToggle,
      status: "",
      // from: fromInput,
      // to: toInput,
      // network: selectDrop,
    };
    switch (select) {
      case 2:
        requestData.status = true;
        break;
      case 3:
        requestData.status = false;
        break;
      default:
        return requestData;
    }
    try {
      const response = await ContractsService.getTransactionsList(requestData);

      setAddress(response.transactionList);
    } catch (e) {
      console.log(e);
    }
  };

  function setStatus(val) {
    if (val === true) {
      return "Success";
    } else return "Fail";
  }

  return (
    <>
      <MainContainer>
        <SubContainer>
          <ShowLoader state={loader} top={"33%"} />
          <TransactionMedia>Transactions</TransactionMedia>
          <TransactionBox>
            <NewDiv>
              <Transactions>Transactions</Transactions>
              <SearchBar
                placeholder="Search by address or name"
                onChange={search}
                value={input}
              />
            </NewDiv>

            <IconContainer>
              {open && (
                <Settings
                  click={handleClose}
                  setToggle={setToggle}
                  toggle={toggle}
                />
              )}
              <Tooltip disableFocusListener title="Settings">
                <Icons src="/images/settings.svg" onClick={handleClickOpen} />
              </Tooltip>
              <Tooltip disableFocusListener title="Refresh">
                <Icons
                  onClick={() => getTransaction()}
                  src="/images/refresh.svg"
                />
              </Tooltip>
              {filterPopupOpen && (
                <Filter
                  click={filterPopupClose}
                  select={select}
                  filterSearch={filterSearch}
                  setSelect={setSelect}
                  fromInput={fromInput}
                  setFromInput={setFromInput}
                  toInput={toInput}
                  setToInput={setToInput}
                  selectDrop={selectDrop}
                  setSelectDrop={setSelectDrop}
                />
              )}
              <Tooltip disableFocusListener title="Filter">
                <Icons src="/images/filter.svg" onClick={setfilterPopupOpen} />
              </Tooltip>
            </IconContainer>
          </TransactionBox>

          <Card>
            <Column>
              <Heading>View Transaction for Contract</Heading>
              <InstructionText>
                You can view transactions per contract by using the contract
                picker below
              </InstructionText>

              <ClickAwayListener onClickAway={handleClickAway}>
                <Box
                  sx={{
                    position: "relative",
                    marginRight: "15px;",
                    wordBreak: "break-all",
                  }}
                  selected={selected.address}
                >
                  <DropDown onClick={handleClick}>
                    {selectedName || "Contract"}
                    <img
                      style={{ marginLeft: "0.5rem" }}
                      alt=""
                      src="/images/XDCmainnet.svg"
                    />
                    <br />
                    <TransactionHash>{selected}</TransactionHash>
                    <Image src="/images/arrrow.svg" />
                  </DropDown>

                  {isSetOpen ? (
                    <Box sx={styles}>
                      <Label>Contracts</Label>
                      {contracts.length &&
                        contracts.map((item) => (
                          <div
                            onClick={() => {
                              setOpen(false);
                              getTransaction(item.address);
                              setSelected(item.address);
                              setSelectedName(item.contractName);
                            }}
                          >
                            {item.contractName || "Contract"}
                            <img
                              style={{ marginLeft: "0.5rem" }}
                              alt=""
                              src="/images/XDCmainnet.svg"
                            />
                            <br />
                            <TransactionHash>{item.address}</TransactionHash>
                          </div>
                        ))}
                    </Box>
                  ) : null}
                </Box>
              </ClickAwayListener>
            </Column>
          </Card>
        </SubContainer>
        <TableContainer>
          <Div>
            <RowData>
              {toggle.transactionHash && (
                <ColumnOne>
                  Tx Hash
                  <Tooltip
                    open={TxHashToolTip}
                    onOpen={() => setTxHashToolTip(true)}
                    onClose={() => setTxHashToolTip(false)}
                    disableFocusListener
                    title="Unique transaction identifier, also known as the Transaction ID"
                  >
                    <ToolTipIcon
                      onClick={() => setTxHashToolTip(!TxHashToolTip)}
                      src="/images/tool-tip.svg"
                    />
                  </Tooltip>
                </ColumnOne>
              )}
              {toggle.status && (
                <ColumnOne>
                  Status
                  <Tooltip
                    open={statusToolTip}
                    onOpen={() => setstatusToolTip(true)}
                    onClose={() => setstatusToolTip(false)}
                    disableFocusListener
                    title="Token transaction status"
                  >
                    <ToolTipIcon
                      onClick={() => setstatusToolTip(!statusToolTip)}
                      src="/images/tool-tip.svg"
                    />
                  </Tooltip>
                </ColumnOne>
              )}
              {toggle.function && (
                <ColumnOne>
                  Function
                  <Tooltip
                    open={functionToolTip}
                    onOpen={() => setfunctionToolTip(true)}
                    onClose={() => setfunctionToolTip(false)}
                    disableFocusListener
                    title="Smart contract function status"
                  >
                    <ToolTipIcon
                      onClick={() => setfunctionToolTip(!functionToolTip)}
                      src="/images/tool-tip.svg"
                    />
                  </Tooltip>
                </ColumnOne>
              )}
              {toggle.contracts && (
                <ColumnOne>
                  Contracts
                  <Tooltip
                    disableFocusListener
                    title="Name of the smart contract"
                  >
                    <ToolTipIcon
                      onClick={() => setstatusToolTip(!statusToolTip)}
                      src="/images/tool-tip.svg"
                    />
                  </Tooltip>
                </ColumnOne>
              )}
              {toggle.from && (
                <ColumnOne>
                  From
                  <Tooltip disableFocusListener title="Sender’s account">
                    <ToolTipIcon src="/images/tool-tip.svg" />
                  </Tooltip>
                </ColumnOne>
              )}
              {toggle.to && (
                <ColumnOne>
                  To
                  <Tooltip disableFocusListener title="Receiver’s account">
                    <ToolTipIcon src="/images/tool-tip.svg" />
                  </Tooltip>
                </ColumnOne>
              )}
              {toggle.when && (
                <ColumnOne>
                  When
                  <Tooltip
                    disableFocusListener
                    title="Date and time of transaction execution"
                  >
                    <ToolTipIcon src="/images/tool-tip.svg" />
                  </Tooltip>
                </ColumnOne>
              )}
            </RowData>
          </Div>

          <div>
            {(input === "" ? address : searchRow).map((data, index) => {
              const status = setStatus(data.status);
              return (
                <Div>
                  <RowData
                    onClick={() =>
                      redirectToTransactionDetails(data?.hash, status)
                    }
                  >
                    {toggle.transactionHash && (
                      <ColumnSecond>
                        <BackgroundChangerTxhash>
                          {utility.truncateTxnAddress(data.hash)}
                        </BackgroundChangerTxhash>
                      </ColumnSecond>
                    )}

                    {toggle.status && <ColumnSecond>{status}</ColumnSecond>}

                    {toggle.function && (
                      <ColumnSecond>{data.function}</ColumnSecond>
                    )}
                    {toggle.contracts && (
                      <ColumnSecond>
                        {/* {utility.truncateTxnAddress(data.contractAddress)} */}
                        {selectedName || "Contract"}
                      </ColumnSecond>
                    )}

                    {toggle.from && (
                      <ColumnSecond>
                        <BackgroundChangerFrom>
                          {utility.truncateTxnAddress(data.from)}
                        </BackgroundChangerFrom>
                      </ColumnSecond>
                    )}

                    {toggle.to && (
                      <ColumnSecond>
                        <BackgroundChangerTo>
                          {utility.truncateTxnAddress(data.to)}
                        </BackgroundChangerTo>
                      </ColumnSecond>
                    )}

                    {toggle.when && (
                      <ColumnSecond>
                        {new Date(data.createdOn).toLocaleString("en-US")}
                      </ColumnSecond>
                    )}
                  </RowData>
                </Div>
              );
            })}
          </div>
          {/* <PlaceHolderContainer>
              <PlaceHolderImage src="/images/contracts.svg" />
              No Transaction Found
            </PlaceHolderContainer> */}
        </TableContainer>
        <PageVerifyCheck check={address.length}>
          <PaginationDiv>
            <BottomLabel>
              Per Page
              <SelectionDivStyle
                buttonToggle={countToggle}
                onClick={() => setCountToggle(10)}
              >
                10
              </SelectionDivStyle>
              <SelectionDivStyleTwo
                buttonToggle={countToggle}
                onClick={() => setCountToggle(20)}
              >
                20
              </SelectionDivStyleTwo>
              <SelectionDivStyleThree
                buttonToggle={countToggle}
                onClick={() => setCountToggle(50)}
              >
                50
              </SelectionDivStyleThree>
            </BottomLabel>
            <ReactPaginate
              previousLabel={"<-"}
              nextLabel={"->"}
              pageCount={page}
              breakLabel={"..."}
              initialPage={0}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </PaginationDiv>
        </PageVerifyCheck>
      </MainContainer>
      <div>
        {false && (
          <LetsGetStarted click={() => setState(false)} state={state} />
        )}
      </div>
    </>
  );
}

const PageVerifyCheck = styled.div`
  display: ${(props) => (props.check < 10 ? "none" : "block")};
  height: auto;
`;
const SubContainer = styled.div``;
const BottomLabel = styled.div`
  display: flex;
  white-space: nowrap;
  font-size: 12px;
  color: #797979;
  margin-right: 5px;
  font-weight: 500;
  font-family: "Inter", Medium;
`;
const Div = styled.div`
  padding: 0.75rem;
  border-bottom: 1px solid #e3e7eb;
  white-space: nowrap;
  column-gap: 20px;
  width: fit-content;
  @media (min-width: 300px) and (max-width: 768px) {
    width: fit-content;
  }

  @media (min-width: 767px) and (max-width: 1200px) {
    width: fit-content;
  }
`;
const RowData = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 21px;
  @media (min-width: 300px) and (max-width: 768px) {
    column-gap: 36px;
  }

  @media (min-width: 767px) and (max-width: 1200px) {
  }
`;

const TableContainer = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  width: 100%;
  min-height: 35rem;
  height: auto;
  padding: 0.625rem;
  margin-top: 1.563rem;
  overflow-y: hidden;
  // ::-webkit-scrollbar {
  //   border: 0.5px solid rgb(204, 229, 243);
  //   outline: none;
  //   border-radius: 15px;
  //   /* background: #00A58C; */
  // }
  // ::-webkit-scrollbar-track {
  //   box-shadow: inset 0 0 1px grey;
  //   border-radius: 15px;
  // }
  // ::-webkit-scrollbar-thumb {
  //   background: #3163f0;
  //   border-radius: 15px;
  //   border: 4px solid transparent;
  //   background-clip: content-box;
  // }

  @media (min-width: 300px) and (max-width: 767px) {
    overflow-y: hidden;
    width: 100%;
    height: auto;

    position: relative;
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
const PaginationDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-right: 0;
  & .paginationBttns {
    list-style: none;
    display: flex;
    justify-content: center;
  }
  & .paginationBttns a {
    padding: 7px;
    font-size: 10px;
    margin: 6px;
    border-radius: 5px;
    border: 1px solid lightgrey;
    color: skyblue;
    cursor: pointer;
  }
  & .paginationActive a {
    color: white !important;
    background: #3163f0;
  }
  & .next a {
    border: none;
  }
  & .previous a {
    border: none;
  }
`;
const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  height: auto;
  width: 100%;
  padding: 4.125rem;
  padding-bottom: 6rem;

  @media (min-width: 340px) and (max-width: 1024px) {
    padding: 3.125rem 1.5rem 7rem 1.5rem;
  }
`;
const TransactionBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const NewDiv = styled.div`
  display: flex;
  @media (min-width: 340px) and (max-width: 768px) {
    margin-left: -3px;
    padding: 2px;
  }
`;
const Transactions = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #191919;
  @media (min-width: 360px) and (max-width: 577px) {
    display: none;
  }
`;
const TransactionMedia = styled.div`
  display: none;

  @media (min-width: 360px) and (max-width: 577px) {
    font-size: 1.3rem;
    padding-bottom: 10px;
    color: #191919;
    font-weight: 700;
    display: flex;
  }
`;
const SearchBar = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.25rem;
  font-size: 14px;
  font-family: normal;
  font-weight: 400;
  color: #888888;
  padding-left: 1.975rem;
  background-image: url("/images/searchbar-icon.svg");
  background-repeat: no-repeat;
  background-position: 0.7rem;
  background-size: 12.6px;
  position: relative;
  border: none;
  width: 270px;
  height: 38px;
  margin-left: 10px;
  @media (max-width: 767px) {
    width: min-content;
    height: 37px;
    margin-left: 0px;
  }
`;
const Icons = styled.img`
  cursor: pointer;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 120px;
  cursor: pointer;
  @media (min-width: 300px) and (max-width: 768px) {
    width: 100%;
    max-width: 123px;
    height: 35px;
    margin-top: 3px;
  }
`;
const Heading = styled.span`
  color: #102c78;
  font-size: 0.975rem;
  font-weight: 600;
`;
const InstructionText = styled.span`
  margin-top: 0.625rem;
  color: rgb(25, 25, 25);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
`;
const Card = styled.div`
  margin-top: 1.25rem;
  background-color: #ffffff;
  border-radius: 0.25rem;
  padding: 1rem 0rem 1.6rem 1rem;
`;
const ColumnOne = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  color: #102c78;
  column-gap: 20px;
  width: fit-content;
  min-width: 200.5px;
  white-space: nowrap;
  @media (min-width: 300px) and (max-width: 767px) {
    width: fit-content;
  }
  @media (min-width: 767px) and (max-width: 1200px) {
    width: 8%;
  }
`;
const ColumnSecond = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #191919;
  width: 100%;
  min-width: 200px;
`;

const BackgroundChangerTxhash = styled.div`
  width: fit-content;
  height: auto;
  background-repeat: no-repeat;
  background: #eaefff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  padding: 1px 6px 1px 4px;
  cursor: pointer;

  @media (min-width: 300px) and (max-width: 1371px) {
    margin-left: 0px;
    background-repeat: no-repeat;
    background: #eaefff 0% 0% no-repeat padding-box;
    border-radius: 6px;
    opacity: 1;
  }
`;
const BackgroundChangerTo = styled.div`
  width: fit-content;
  height: auto;
  background-repeat: no-repeat;
  background: #eaefff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  padding: 1px 6px 1px 4px;

  @media (min-width: 300px) and (max-width: 1371px) {
    // width: 100%;
    // padding: 1rem;
  }
`;
const BackgroundChangerFrom = styled.div`
  width: fit-content;
  height: auto;
  background-repeat: no-repeat;
  background: #eaefff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  padding: 1px 6px 1px 4px;

  @media (min-width: 300px) and (max-width: 1371px) {
    // width: 100%;
    // padding: 1rem;
  }
`;
const DropDown = styled.div`
  background: #f5f6fd 0% 0% no-repeat padding-box;
  border: 1px solid #d5e0ff;
  border-radius: 6px;
  font: normal normal medium 14px/17px Inter;
  font-size: 15px;
  font-weight: 600;
  color: #191919;
  height: 89px;
  padding: 14px;
  width: 100%;
  max-width: 453px;
  position: relative;
  @media (max-width: 375px) {
    margin-right: 14px;
    height: auto;
  }
`;
const TransactionHash = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #416be0;
  margin-top: 0.5rem;
  cursor: pointer;
  width: 100%;
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 0.6rem;
  }
  @media (max-width: 375px) {
    font-size: 0.55rem;
    padding-top: 5px;
  }
`;
const Image = styled.img`
  width: 0.95rem;
  position: absolute;
  top: 36px;
  right: 17px;
  cursor: pointer;
  @media (max-width: 375px) {
    width: 0.85rem;
    position: absolute;
    top: 32px;
    right: 16px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 0.95rem;
    position: absolute;
    top: 29px;
    right: 23px;
    cursor: pointer;
  }
`;
const Label = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #767c93;
`;
const ToolTipIcon = styled.img`
  width: 0.75rem;
  cursor: pointer;
  margin-left: 0.5rem;
`;
const PlaceHolderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 50%;
  font-weight: 600;
  font-size: 13px;
`;
const PlaceHolderImage = styled.img`
  width: 50px;
  -webkit-filter: grayscale(60%); /* Safari 6.0 - 9.   */
  filter: grayscale(60%);
  margin-bottom: 20px;
`;

const SelectionDivStyle = styled.div`
  font-size: 12px;
  font-weight: 600;
  font-family: Inter;
  margin-right: 10px;
  border-radius: 4px 4px 4px 4px;
  height: 20px;
  width: 20px;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.buttonToggle === 10 ? "#ffffff" : "#191919")};

  background-color: ${(props) =>
    props.buttonToggle === 10 ? "#3163F0" : "#FFFFFF"};
`;
const SelectionDivStyleTwo = styled.div`
  font-size: 12px;
  font-weight: 600;
  font-family: Inter;
  margin-right: 10px;
  border-radius: 4px 4px 4px 4px;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.buttonToggle === 20 ? "#ffffff" : "#191919")};

  background-color: ${(props) =>
    props.buttonToggle === 20 ? "#3163F0" : "#FFFFFF"};
`;
const SelectionDivStyleThree = styled.div`
  font-size: 12px;
  font-weight: 600;
  font-family: Inter;
  margin-right: 10px;
  border-radius: 4px 4px 4px 4px;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.buttonToggle === 50 ? "#ffffff" : "#191919")};

  background-color: ${(props) =>
    props.buttonToggle === 50 ? "#3163F0" : "#FFFFFF"};
`;
