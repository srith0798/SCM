import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Column, Row } from "simple-flexbox";
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
import Moment from "react-moment";
import "moment-timezone";
import ReactPaginate from "react-paginate";

export default function TransactionList(props) {
  const [state, setState] = useState(true);
  const [filterData, setFilterData] = React.useState(1);
  const [open, isOpen] = useState(false);
  const [filterPopupOpen, setfilterPopupOpen] = useState(false);

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
  const [showPlaceHolder, setShowPlaceHolder] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const [address, setAddress] = React.useState([]);
  const [searchRow, setSearchRow] = React.useState([]);
  const [contracts, setContracts] = React.useState([]);
  const [selected, setSelected] = React.useState({});
  const [page, setPage] = React.useState(1);
  const [valueCheck, setValueCheck] = React.useState(0);

  const getContractNames = async (skip = 0, limit = 10) => {
    let userId = sessionManager.getDataFromCookies("userId");
    try {
      const requestData = {
        skip: skip,
        limit: limit,
        userId: userId,
      };
      setLoader(true);
      const response = await ContractsService.getContractsList(requestData);
      setLoader(false);

      setContracts(response.contractList);

      if (response.contractList.length === 0) setShowPlaceHolder(true);
    } catch (e) {
      setShowPlaceHolder(true);
      setLoader(false);
    }
  };

  const getTransaction = async (skip = 0, limit = 10) => {
    try {
      const requestData = {
        skip: skip,
        limit: limit,
      };
      setLoader(true);
      const response = await ContractsService.getTransactionsList(requestData);
      setLoader(false);
      setAddress(response.transactionList);
      let pageCount = response.totalCount;
      if (pageCount % 10 === 0) {
        setPage(parseInt(pageCount / 10));
      } else {
        setPage(parseInt(pageCount / 10) + 1);
      }
    } catch (e) {
      setShowPlaceHolder(true);
      setLoader(false);
    }
  };
  const searchTransaction = async (searchValues, searchKeys) => {
    try {
      const requestData = {
        searchValue: searchValues,
        searchKeys: searchKeys,
        skip: 0,
        limit: 10,
      };
      setLoader(true);
      const response = await ContractsService.getTransactionsList(requestData);
      setLoader(false);
      setSearchRow(response.transactionList);

      if (response.transactionList.length === 0) setShowPlaceHolder(true);
    } catch (e) {
      setShowPlaceHolder(true);
      setLoader(false);
    }
  };

  const [input, setInput] = useState("");
  const search = (event) => {
    setInput(event.target.value);
    searchTransaction(event.target.value, ["hash"]);
  };
  useEffect(() => {
    getContractNames();
    getTransaction();
  }, []);

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
  const redirectToTransactionDetails = () => {
    history.push("/dashboard/transaction-details");
  };
  const changePage = (value) => {
    setValueCheck(value.selected);
    getTransaction(Math.ceil(value.selected * 10), 10);
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
  console.log(select, "select");
  const [fromInput, setFromInput] = React.useState([]);

  const [toInput, setToInput] = React.useState([]);
  const [filterResponse, setFilterResponse] = React.useState({});

  const filterSearch = async () => {
    try {
      if (select === 2 || select === 3) {
        setFilterResponse({
          skip: 0,
          limit: 10,
          // from: fromInput,
          // to: toInput,
          status: select === 2 ? true : select === 3 ? false : "",
        });
      } else {
        setFilterResponse({
          skip: 0,
          limit: 10,
        });
      }

      const response = await ContractsService.getTransactionsList(filterResponse);

      setAddress(response.transactionList);
      console.log("response", response.transactionList);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <MainContainer>
        <ShowLoader state={loader} top={"33%"} />

        <TransactionMedia>Transactions</TransactionMedia>
        <TransactionBox>
          <NewDiv>
            <Transactions>Transactions</Transactions>
            <SearchBar placeholder="Search by status or name" onChange={search} value={input} />
          </NewDiv>

          <IconContainer>
            {open && <Settings click={handleClose} setToggle={setToggle} toggle={toggle} />}
            <Tooltip disableFocusListener title="Settings">
              <Icons src="/images/settings.svg" onClick={handleClickOpen} />
            </Tooltip>
            <Tooltip disableFocusListener title="Refresh">
              <Icons onClick={() => getTransaction()} src="/images/refresh.svg" />
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
            <InstructionText>You can view transactions per contract by using the contract picker below</InstructionText>

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
                  App_Transactions_Validator <img style={{ marginLeft: "0.5rem" }} alt="" src="/images/XDCmainnet.svg" />
                  <br />
                  <TransactionHash>{selected.address}</TransactionHash>
                  <Image src="/images/Arrrow.svg" />
                </DropDown>

                {isSetOpen ? (
                  <Box sx={styles}>
                    {contracts.length &&
                      contracts.map((item) => (
                        <div onClick={() => setSelected(item)}>
                          <Label>Contract</Label>
                          App_Transactions_Validator
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

        <TableContainer>
          <Div>
            <Row>
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
                    <ToolTipIcon onClick={() => setTxHashToolTip(!TxHashToolTip)} src="/images/tool-tip.svg" />
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
                    <ToolTipIcon onClick={() => setstatusToolTip(!statusToolTip)} src="/images/tool-tip.svg" />
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
                    <ToolTipIcon onClick={() => setfunctionToolTip(!functionToolTip)} src="/images/tool-tip.svg" />
                  </Tooltip>
                </ColumnOne>
              )}
              {toggle.contracts && (
                <ColumnOne>
                  Contracts
                  <Tooltip disableFocusListener title="Name of the smart contract">
                    <ToolTipIcon onClick={() => setstatusToolTip(!statusToolTip)} src="/images/tool-tip.svg" />
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
                  <Tooltip disableFocusListener title="Date and time of transaction execution">
                    <ToolTipIcon src="/images/tool-tip.svg" />
                  </Tooltip>
                </ColumnOne>
              )}
            </Row>
          </Div>
          <div>
            {(input === "" ? address : searchRow).map((data, index) => {
              return (
                <Div>
                  <Row>
                    <BackgroundChangerTxhash>
                      {toggle.transactionHash && (
                        <ColumnSecond onClick={redirectToTransactionDetails}>{utility.truncateTxnAddress(data.hash)}</ColumnSecond>
                      )}
                    </BackgroundChangerTxhash>
                    {toggle.status && <ColumnSecond>{data.status}</ColumnSecond>}

                    {toggle.function && <ColumnSecond>{data.function}</ColumnSecond>}
                    {toggle.contracts && <ColumnSecond>{data.contracts}</ColumnSecond>}
                    <BackgroundChangerTxhash>
                      {toggle.from && <ColumnSecond>{utility.truncateTxnAddress(data.from)}</ColumnSecond>}
                    </BackgroundChangerTxhash>
                    <BackgroundChangerTo>
                      {toggle.to && <ColumnSecond>{utility.truncateTxnAddress(data.to)}</ColumnSecond>}
                    </BackgroundChangerTo>
                    {toggle.when && (
                      <ColumnSecond>
                        {" "}
                        <Moment toNow>{data.createdOn}</Moment>
                      </ColumnSecond>
                    )}
                  </Row>
                </Div>
              );
            })}
          </div>
          {showPlaceHolder && (
            <PlaceHolderContainer>
              <PlaceHolderImage src="/images/contracts.svg" />
              No Contracts Found
            </PlaceHolderContainer>
          )}
        </TableContainer>
        <PaginationDiv>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={page}
            breakLabel={"..."}
            initialPage={0}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </PaginationDiv>
      </MainContainer>
      <div>{false && <LetsGetStarted click={() => setState(false)} state={state} />}</div>
    </>
  );
}

const Div = styled.div`
  padding: 0.75rem;
  border-bottom: 1px solid #e3e7eb;
  white-space: nowrap;
  column-gap: 20px;
`;

const TableContainer = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  width: 100%;
  height: 35rem;
  padding: 0.625rem;
  margin-top: 1.563rem;
  overflow-y: hidden;
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

  @media (min-width: 300px) and (max-width: 767px) {
    overflow-y: hidden;
    width: 100%;
    height: 581px;

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
  justify-content: flex-end;
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
  opacity: 1;
  width: 100%;
  padding: 3.125rem;
  height: 120vh;
  @media (min-width: 340px) and (max-width: 768px) {
    padding: 3.125rem 1.5rem 1.5rem 1.5rem;
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
  height: 2.188rem;
  border: none;
  margin-left: 0.938rem;
  border-radius: 0.25rem;
  background-image: url("/images/search-icon.svg");
  background-repeat: no-repeat;
  background-position: 0.5rem;
  padding-left: 1.875rem;
  background-size: 0.75rem;
  outline: none;
  width: 100%;
  max-width: 261px;
  font-size: 0.775rem;
  *:focus {
    outline: none;
  }
  @media (min-width: 300px) and (max-width: 767px) {
    display: flex;
    margin-left: -1px;
    margin-right: 8px;
    // padding: 5px;
    font-size: 13px;
    // background-image: none;
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
  @media (min-width: 300px) and (max-width: 768px) {
    width: 100%;
    max-width: 123px;
    height: 35px;
  }
`;
const Heading = styled.span`
  margin-top: 0.625rem;
  color: #102c78;
  font-size: 0.975rem;
  font-weight: 600;
`;
const InstructionText = styled.span`
  margin-top: 0.625rem;
  color: #191919;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.825rem;
`;
const Card = styled.div`
  margin-top: 1.25rem;
  background-color: #ffffff;
  border-radius: 0.25rem;
  padding: 1rem 0rem 2rem 1rem;
`;
const ColumnOne = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  color: #102c78;
  column-gap: 20px;
  width: 100%;
  min-width: 200px;
  white-space: nowrap;
  @media (min-width: 300px) and (max-width: 767px) {
    width: 100%;
  }
`;
const ColumnSecond = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #191919;
  width: 100%;
  // background-repeat: no-repeat;
  // background: #eaefff 0% 0% no-repeat padding-box;
  // max-width: 300px;
  min-width: 200px;
`;

const BackgroundChangerTxhash = styled.div`
  width: 59%;
  height: auto;
  background-repeat: no-repeat;
  background: #eaefff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;

  @media (min-width: 300px) and (max-width: 1371px) {
    margin-left: 0px;
    background-repeat: no-repeat;
    background: #eaefff 0% 0% no-repeat padding-box;
    border-radius: 6px;
    opacity: 1;
  }
`;
const BackgroundChangerTo = styled.div`
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background: #eaefff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;

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
  width: 100%;
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 0.575rem;
  }
  @media (max-width: 375px) {
    font-size: 0.55rem;
    padding-top: 5px;
  }
`;
const Image = styled.img`
  width: 0.95rem;
  position: absolute;
  top: 29px;
  right: 39px;
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
