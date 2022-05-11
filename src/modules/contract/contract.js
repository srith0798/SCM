import React, { useState } from "react";
import styled from "styled-components";
// import { Row } from "simple-flexbox";
import ShowLoader from "../../common/components/showLoader";
import AddContract from "../popup/addContract";
import { history } from "../../managers/history";
import Tooltip from "@mui/material/Tooltip";
import ContractsService from "../../services/contractsService";
import ReactPaginate from "react-paginate";
import utility from "../../utility";
import { sessionManager } from "../../managers/sessionManager";
import AddTags from "../popup/addTag";
import { useLocation } from "react-router";
import { cookiesConstants } from "../../constants";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Contract(props) {
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const [contractNameToolTip, setcontractNameToolTip] = useState(false);
  const [addressToolTip, setaddressToolTip] = useState(false);
  const [networkToolTip, setnetworkToolTip] = useState(false);
  const [tagToolTip, settagToolTip] = useState(false);
  const [visibilityToolTip, setvisibilityToolTip] = useState(false);
  const [page, setPage] = useState(1);
  const [address, setAddress] = useState([]);
  const [searchRow, setSearchRow] = useState([]);
  // const [showplaceholder, setShowPlaceHolder] = useState([]);
  const [addTagPopUp, setAddTagPopUp] = useState(false);
  const [copyToolTip, setcopyToolTip] = React.useState(false);
  let redirectDetails = false;

  const location = useLocation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const redirectTODetails = (e, id) => {
    redirectDetails = true;
    setAddTagPopUp(false);
    if (addTagPopUp && redirectDetails) return;
    history.push({
      pathname: "/contracts/contract-details?" + id,
      state: { id: id },
    });
  };

  const getContractList = async (skip = 0, limit = 10) => {
    let userId = sessionManager.getDataFromCookies(cookiesConstants.USER_ID);
    console.log("userIdd", userId);
    try {
      const requestData = {
        skip: skip,
        limit: limit,
        userId: userId,
        sortingKey: { addedOn: -1 },
      };

      setLoader(true);

      const response = await ContractsService.getContractsList(requestData);
      setLoader(false);
      setAddress(response.contractList);
      let pageCount = response.contractList.length;
      if (pageCount % 10 === 0) {
        setPage(parseInt(pageCount / 10));
      } else {
        setPage(parseInt(pageCount / 10) + 1);
      }
    } catch (e) {
      setLoader(false);
    }
  };

  const searching = async (searchValues, searchKeys) => {
    let userId = sessionManager.getDataFromCookies(cookiesConstants.USER_ID);
    try {
      const requestData = {
        searchValue: searchValues,
        searchKeys: searchKeys,
        skip: 0,
        limit: 10,
        userId: userId,
      };
      setLoader(true);
      const response = await ContractsService.getContractsList(requestData);
      setLoader(false);
      setSearchRow(response.contractList);
    } catch (e) {
      setLoader(false);
    }
  };
  const [input, setInput] = useState("");
  const search = (e) => {
    setInput(e.target.value);
    if (
      !e.target.value.slice(0, e.target.value.length).includes(" ") &&
      e.target.value.length % 3 === 0
    ) {
      searching(e.target.value, ["address", "contractName"]);
    }
  };

  const changePage = (value) => {
    getContractList(Math.ceil(value.selected * 10), 10);
  };

  React.useEffect(() => {
    getContractList();
  }, []);

  const [addTag, setAddTag] = useState(false);
  const [contractId, getContractId] = useState("");
  const Open = (e, id) => {
    e.stopPropagation();
    setAddTagPopUp(true);
    setAddTag(true);
    getContractId(id);
  };
  const Close = () => {
    setAddTag(false);
  };

  const Click = () => {
    setAddTag(false);
    getContractList();
  };

  if (location.state && location.state.homepageHistory) {
    setOpen(true);
    location.state.homepageHistory = null;
  }
  let user = "";

  try {
    user = window.web3.eth.accounts;
  } catch (e) {}

  const redirectToLogout = () => {
    sessionManager.removeDataFromCookies(cookiesConstants.IS_LOGGED_IN);
    sessionManager.removeDataFromCookies(cookiesConstants.ACCOUNT_ADDRESS);
    sessionManager.removeDataFromCookies(cookiesConstants.USER_ID);
    sessionManager.removeDataFromCookies("username");
    sessionManager.removeDataFromCookies("profilePicture");
    history.replace("/");
  };

  return (
    <>
      {user === "" ? redirectToLogout() : ""}
      <MainContainer>
        <ShowLoader state={loader} top={"33%"} />
        <SubContainer>
          <MainHeading>
            <Heading>Contracts</Heading>
            <Input
              placeholder="Search by address or name"
              value={input}
              onChange={search}
            />
          </MainHeading>
          <IconDiv>
            <Tooltip disableFocusListener title="Refresh">
              <RefreshImage
                onClick={() => getContractList()}
                alt=""
                src="/images/refresh.svg"
                style={{ marginRight: "0.625rem" }}
              />
            </Tooltip>
            {open && (
              <AddContract
                click={handleClose}
                getContractList={getContractList}
              />
            )}
            {address.length === 0 ? (
              <Button title="Add your First Contract" onClick={handleClickOpen}>
                Add Contract
              </Button>
            ) : (
              <Button onClick={handleClickOpen}>Add Contract</Button>
            )}
          </IconDiv>
        </SubContainer>

        <TableContainer>
          <Div>
            <RowContainer style={{ alignItems: "center" }}>
              <ColumnOne>
                Contract Name
                <Tooltip
                  open={contractNameToolTip}
                  onOpen={() => setcontractNameToolTip(true)}
                  onClose={() => setcontractNameToolTip(false)}
                  disableFocusListener
                  title="Name of the smart contract"
                >
                  <ToolTipIcon
                    onClick={() => setcontractNameToolTip(!contractNameToolTip)}
                    src="/images/tool-tip.svg"
                  />
                </Tooltip>
              </ColumnOne>
              <ColumnOne>
                <ColOne>
                  Address
                  <Tooltip
                    open={addressToolTip}
                    onOpen={() => setaddressToolTip(true)}
                    onClose={() => setaddressToolTip(false)}
                    disableFocusListener
                    title="Wallet address"
                  >
                    <ToolTipIcon
                      onClick={() => setaddressToolTip(!addressToolTip)}
                      src="/images/tool-tip.svg"
                    />
                  </Tooltip>
                </ColOne>
              </ColumnOne>
              <ColumnOne>
                <ColOne>
                  Network
                  <Tooltip
                    open={networkToolTip}
                    onOpen={() => setnetworkToolTip(true)}
                    onClose={() => setnetworkToolTip(false)}
                    disableFocusListener
                    title="Network on which the contract is executed"
                  >
                    <ToolTipIcon
                      onClick={() => setnetworkToolTip(!networkToolTip)}
                      src="/images/tool-tip.svg"
                    />
                  </Tooltip>
                </ColOne>
              </ColumnOne>
              <ColumnOne>
                <ColOne>
                  Tag
                  <Tooltip
                    open={tagToolTip}
                    onOpen={() => settagToolTip(true)}
                    onClose={() => settagToolTip(false)}
                    disableFocusListener
                    title="Tag name associated with the contract"
                  >
                    <ToolTipIcon
                      onClick={() => settagToolTip(!tagToolTip)}
                      src="/images/tool-tip.svg"
                    />
                  </Tooltip>
                </ColOne>
              </ColumnOne>
              <ColumnOne>
                <ColOneVisibility>
                  Visibility
                  <Tooltip
                    open={visibilityToolTip}
                    onOpen={() => setvisibilityToolTip(true)}
                    onClose={() => setvisibilityToolTip(false)}
                    disableFocusListener
                    title="Is the contract visible to the users or not"
                  >
                    <ToolTipIcon
                      onClick={() => setvisibilityToolTip(!visibilityToolTip)}
                      src="/images/tool-tip.svg"
                    />
                  </Tooltip>
                </ColOneVisibility>
              </ColumnOne>
            </RowContainer>
          </Div>
          {(searchRow.length === 0 ? address : searchRow).map((data, index) => {
            return (
              <div style={{ cursor: "pointer" }}>
                <Div>
                  <RowTag>
                    <ColumnSecond
                      onClick={(e) => redirectTODetails(e, data._id)}
                    >
                      {data?.tokenImage ? (
                        <img
                          style={{
                            height: "20px",
                            width: "20px",
                            marginRight: "10px",
                          }}
                          src={data.tokenImage}
                        ></img>
                      ) : (
                        ""
                      )}
                      {data.contractName || "Contract"}
                    </ColumnSecond>
                    <ColumnSecond>
                      <BackgroundChanger>
                        {utility.truncateTxnAddress(data.address)}
                        <CopyToClipboard
                          text={data.address}
                          onCopy={() => setcopyToolTip(true)}
                        >
                          <Tooltip
                            title={copyToolTip ? "Copied" : "Copy to clipboard"}
                          >
                            <CopyToClipboardImage src="/images/copy.svg" />
                          </Tooltip>
                        </CopyToClipboard>
                      </BackgroundChanger>
                    </ColumnSecond>

                    <ColumnSecond
                      onClick={(e) => redirectTODetails(e, data._id)}
                    >
                      {data.network}
                    </ColumnSecond>
                    <ColumnSecond style={{ display: "flex" }}>
                      <TagCol>
                        {data.tags.length === 0 ? (
                          <AddTag onClick={(e) => Open(e, data._id)}>
                            Add Tag
                          </AddTag>
                        ) : (
                          address[index].tags &&
                          address[index].tags.map((tag, index) =>
                            index <= 0 && data.tags[index].name.length > 16 ? (
                              <FinanceTag>
                                {utility.truncateTag(tag.name)}
                              </FinanceTag>
                            ) : (
                              <FinanceTag>{tag.name}</FinanceTag>
                            )
                          )
                        )}
                        {addTag && (
                          <AddTags
                            click={Click}
                            address={address}
                            contract={true}
                            contractId={contractId}
                            close={Close}
                          />
                        )}
                        {/* {data.tags && data.tags.length === 0 && (
                        <AddTag onClick={(e) => Open(e)}>Add Tag</AddTag>
                      )} */}
                      </TagCol>
                    </ColumnSecond>
                    <ColumnVisible
                      check={data.isHidden}
                      onClick={(e) => redirectTODetails(e, data._id)}
                    >
                      {data.isHidden ? (
                        ""
                      ) : (
                        <img
                          style={{ marginRight: "5px" }}
                          src="/images/check.svg"
                          alt=""
                        />
                      )}
                      {data.isHidden ? "Hidden" : "Visible"}
                    </ColumnVisible>
                  </RowTag>
                </Div>
              </div>
            );
          })}
          {loader === false
            ? ((input === "" && address.length === 0) ||
                (input === "" &&
                  searchRow.length === 0 &&
                  input.substring(0, input.length).includes(" "))) && (
                <PlaceHolderContainer>
                  <PlaceHolderImage src="/images/contracts.svg" />
                  No Contracts Available
                </PlaceHolderContainer>
              )
            : ""}
        </TableContainer>
        <PageVerifyCheck check={page}>
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
              pageRangeDisplayed={0}
              marginPagesDisplayed={0}
            />
          </PaginationDiv>
        </PageVerifyCheck>
      </MainContainer>
    </>
  );
}

const PageVerifyCheck = styled.div`
  display: ${(props) => (props.check === 1 ? "none" : "block")};
`;

const FinanceTag = styled.div`
  background-image: url("/images/Tag.svg");
  background-repeat: no-repeat;
  background-position: 0.5rem;
  padding-left: 1.75rem;
  padding-right: 8px;
  background-size: 0.875rem;
  position: relative;
  background-color: #eaefff;
  border: 1px solid #eaefff;
  border-radius: 0.25rem;
  cursor: pointer;
  max-width: 17.75rem;
  white-space: nowrap;
  height: 2.125rem;
  align-items: center;
  color: #436ce0;
  text-align: center;
  display: flex;
  font-size: 1rem;
  font-weight: 400;
  margin-right: 13px;
`;

const CopyToClipboardImage = styled.img`
    margin-left: 1%
    cursor: pointer;
    @media (min-width: 340px) and (max-width: 767px) {
      margin-left: 2px;
    }
    @media (min-width: 1024px) and (max-width: 1075px) {
      margin-left: 84px;
    }
  `;

const AddTag = styled.button`
  color: #416be0;
  z-index: 99;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  outline: none;
  cursor: pointer;
  white-space: nowrap;
  background-image: url("/images/add-icon.svg");
  background-repeat: no-repeat;
  background-position: 0rem;
  padding-left: 0.3rem;
  background-size: 0.875rem;
  position: relative;
  background-color: transparent;
  border: none;
  border-radius: 0.25rem;
  width: 100px;
  white-space: nowrap;
  height: 2.125rem;
  :hover {
    background-color: #f5f6fd;
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

const IconDiv = styled.div`
  display: flex;
  @media (min-width: 424px) and (max-width: 767px) {
    margin-top: 51px;
  }
  @media (max-width: 424px) {
    margin-top: 50px;
  }
`;
const RefreshImage = styled.img`
  cursor: pointer;
  &:hover {
    box-shadow: 3px 10px 21px -8px rgb(0 0 0 / 75%);
    -webkit-box-shadow: 3px 10px 21px -8px rgb(0 0 0 / 75%);
    -moz-box-shadow: 3px 10px 21px -8px rgb(0 0 0 / 75%);
    transition: box-shadow 0.3s ease-in-out 0s;
  }
  @media (min-width: 375px) and (max-width: 767px) {
    margin-right: 0.325rem;

    margin-left: 3px;
  }
  @media (max-width: 425px) {
    margin-right: 0.325rem;
    margin-left: 3px;
  }
`;

const MainContainer = styled.div`
  background-color: #ecf0f7;
  width: 100%;
  height: 100vh;
  padding: 3.125rem;

  @media (max-width: 767px) {
    padding: 1.2rem;
  }
  @media (min-width: 767px) and (max-width: 1023px) {
    padding: 2rem;
  }
`;

const RowContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const BackgroundChanger = styled.div`
  width: fit-content;
  height: auto;
  background-repeat: no-repeat;
  background: #eaefff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  padding: 1px 6px 1px 4px;
  cursor: pointer;
`;
const RowTag = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const MainHeading = styled.div`
  display: flex;

  @media (min-width: 570px) and (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding-top: 7px;
  }
`;
const SubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 3.125rem;
  align-items: center;
  padding-bottom: 15px;
  @media (max-width: 767px) {
    padding-top: 47px;
  }
  @media (min-width: 300px) {
    padding-top: 47px;
    padding-bottom: 33px;
  }
`;
const Heading = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #191919;
  margin-right: 0.625rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    // padding-top: 40px;
    margin-top: 3px;
  }
  @media (min-width: 360px) {
    font-size: 1.4rem;
    flex-direction: column;
    margin-bottom: 10px;
  }
`;
const Button = styled.button`
  background-image: url("/images/Add.svg");
  background-repeat: no-repeat;
  background-position: 0.5rem;
  padding-left: 1.313rem;
  background-size: 0.875rem;
  position: relative;
  background-color: #3163f0;
  color: #ffffff;
  border: none;
  border-radius: 0.25rem;
  width: 8.125rem;
  height: 2.125rem;
  font-size: 0.875rem;

  @media (max-width: 767px) {
    width: 35px;
    font-size: 0rem;
    height: 33px;
    background-position: 0.6rem;
  }
`;
const Input = styled.input`
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
  @media (max-width: 767px) {
    width: min-content;
    height: 37px;
  }
`;
const TableContainer = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  width: 100%;
  min-height: 20rem;
  overflow: auto;
  margin-top: 2px;
  padding: 0.625rem 0.625rem 1px 0.625rem;
  @media (min-width: 300px) and (max-width: 767px) {
    overflow-y: hidden;
    overflow-x: auto;
    height: 420px;
    margin-top: 30px;

    position: relative;
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
  @media (max-width: 375px) {
    margin-top: 30px;
  }
`;
const Div = styled.div`
  padding: 0.75rem;
  border-bottom: 0.063rem solid #e3e7eb;
  width: 100%;
  min-width: 130px;
  white-space: nowrap;
  @media (min-width: 300px) and (max-width: 750px) {
    width: fit-content;
    min-width: 180px;
  }
  :hover {
    background-color: #f5f6fd;
  }
`;
const ColumnOne = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #102c78;
  width: 100%;
  min-width: 130px;
  @media (min-width: 300px) and (max-width: 750px) {
    width: fit-content;
    min-width: 180px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    min-width: 210px;
  }
`;

const ColOneVisibility = styled.div`
  @media (min-width: 768px) and (max-width: 1128px) {
  }
`;

const ColOne = styled.div`
  @media (min-width: 768px) and (max-width: 1128px) {
  }
`;

const ColumnSecond = styled.div`
  font-size: 0.875rem;
  min-width: 130px;
  font-weight: 400;
  color: #191919;
  width: 100%;
  white-space: nowrap;
  @media (min-width: 300px) and (max-width: 750px) {
    width: 100%;
    min-width: 180px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    min-width: 210px;
  }
`;
const ColumnVisible = styled.div`
  font-size: 0.875rem;
  min-width: 130px;
  font-weight: 400;
  color: ${(props) => (props.check ? "#CE1A1A" : "#00A58C")};
  width: 100%;
  white-space: nowrap;
  @media (min-width: 300px) and (max-width: 750px) {
    width: 100%;
    min-width: 180px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    min-width: 210px;
  }
`;
const TagCol = styled.div`
  display: flex;
  :hover {
    background-color: #f5f6fd;
  }
  @media (min-width: 300px) and (max-width: 767px) {
  }
  @media (min-width: 768px) and (max-width: 1128px) {
  }
`;
const ToolTipIcon = styled.img`
  width: 0.75rem;
  cursor: pointer;
  margin-left: 0.313rem;
`;

const PlaceHolderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 16rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 50%;
  font-weight: 600;
  font-size: 13px;
`;
const PlaceHolderImage = styled.img`
  width: 50px;
  -webkit-filter: grayscale(60%); /* Safari 6.0 - 9.0 */
  filter: grayscale(60%);
  margin-bottom: 20px;
`;
