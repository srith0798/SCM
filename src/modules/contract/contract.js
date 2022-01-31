import React, { useState } from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import ShowLoader from "../../common/components/showLoader";
import AddContract from "../popup/addContract";
import { history } from "../../managers/history";
import Tooltip from "@mui/material/Tooltip";
import ContractsService from "../../services/contractsService";
import ReactPaginate from "react-paginate";
import utility from "../../utility";
import { sessionManager } from "../../managers/sessionManager";
import AddTags from "../popup/addTag";

export default function Contract(props) {
  const [open, setOpen] = React.useState(false);
  const [showPlaceHolder, setShowPlaceHolder] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const [contractNameToolTip, setcontractNameToolTip] = React.useState(false);
  const [addressToolTip, setaddressToolTip] = React.useState(false);
  const [networkToolTip, setnetworkToolTip] = React.useState(false);
  const [tagToolTip, settagToolTip] = React.useState(false);
  const [visibilityToolTip, setvisibilityToolTip] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const redirectTODetails = (id) => {
    history.push("/dashboard/contract-details/" + id);
  };

  const getContractList = async (skip = 0, limit = 10) => {
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

      setAddress(response.contractList);
      if (response.contractList.length === 0) setShowPlaceHolder(true);
      else setShowPlaceHolder(false);
    } catch (e) {
      setShowPlaceHolder(true);
      setLoader(false);
    }
  };

  const searching = async (searchValues, searchKeys) => {
    try {
      const requestData = {
        searchValue: searchValues,
        searchKeys: searchKeys,
        skip: 0,
        limit: 10,
      };
      setLoader(true);
      const response = await ContractsService.getContractsList(requestData);
      setLoader(false);
      setAddress(response.contractList);
      if (response.contractList.length === 0) setShowPlaceHolder(true);
    } catch (e) {
      setShowPlaceHolder(true);
      setLoader(false);
    }
  };
  const [input, setInput] = useState();
  const search = (e) => {
    setInput(e.target.value);
    searching(e.target.value, ["address", "status", ""]);
  };

  const changePage = (value) => {
    getContractList(Math.ceil(value.selected * 5), 5);
  };

  React.useEffect(() => {
    getContractList();
  }, []);

  const [address, setAddress] = React.useState([]);

  const [addTag, setAddTag] = useState(false);
  const Open = () => {
    setAddTag(true);
  };
  const Close = () => {
    setAddTag(false);
    getContractList();
  };

  return (
    <MainContainer>
      <ShowLoader state={loader} top={"33%"} />
      <SubContainer>
        <MainHeading>
          <Heading>Contracts</Heading>
          <Input placeholder="Search by address or name" value={input} onChange={search} />
        </MainHeading>
        <IconDiv>
          <Tooltip disableFocusListener title="Refresh">
            <RefreshImage onClick={() => getContractList()} alt="" src="/images/refresh.svg" style={{ marginRight: "0.625rem" }} />
          </Tooltip>
          {open && <AddContract click={handleClose} getContractList = {getContractList}/>}
          <Button onClick={handleClickOpen}>Add Contract</Button>
        </IconDiv>
      </SubContainer>

      <TableContainer>
        <Div>
          <Row>
            <ColumnOne>
              Contract Name
              <Tooltip
                open={contractNameToolTip}
                onOpen={() => setcontractNameToolTip(true)}
                onClose={() => setcontractNameToolTip(false)}
                disableFocusListener
                title="Name of the smart contract"
              >
                <ToolTipIcon onClick={() => setcontractNameToolTip(!contractNameToolTip)} src="/images/tool-tip.svg" />
              </Tooltip>
            </ColumnOne>
            <ColumnOne>
              Address
              <Tooltip
                open={addressToolTip}
                onOpen={() => setaddressToolTip(true)}
                onClose={() => setaddressToolTip(false)}
                disableFocusListener
                title="Wallet address"
              >
                <ToolTipIcon onClick={() => setaddressToolTip(!addressToolTip)} src="/images/tool-tip.svg" />
              </Tooltip>
            </ColumnOne>
            <ColumnOne>
              Network
              <Tooltip
                open={networkToolTip}
                onOpen={() => setnetworkToolTip(true)}
                onClose={() => setnetworkToolTip(false)}
                disableFocusListener
                title="Network on which the contract is executed"
              >
                <ToolTipIcon onClick={() => setnetworkToolTip(!networkToolTip)} src="/images/tool-tip.svg" />
              </Tooltip>
            </ColumnOne>
            <ColumnOne>
              Tag
              <Tooltip
                open={tagToolTip}
                onOpen={() => settagToolTip(true)}
                onClose={() => settagToolTip(false)}
                disableFocusListener
                title="Tag name associated with the contract"
              >
                <ToolTipIcon onClick={() => settagToolTip(!tagToolTip)} src="/images/tool-tip.svg" />
              </Tooltip>
            </ColumnOne>
            <ColumnOne>
              Visibility
              <Tooltip
                open={visibilityToolTip}
                onOpen={() => setvisibilityToolTip(true)}
                onClose={() => setvisibilityToolTip(false)}
                disableFocusListener
                title="Is the contract visible to the users or not"
              >
                <ToolTipIcon onClick={() => setvisibilityToolTip(!visibilityToolTip)} src="/images/tool-tip.svg" />
              </Tooltip>
            </ColumnOne>
          </Row>
        </Div>
        {address.map((data, index) => {
          return (
            <div style={{ cursor: "pointer" }}>
              <Div>
                <Row onClick={() => redirectTODetails(data._id)}>
                  <ColumnSecond>{data.contractName}</ColumnSecond>
                  <ColumnSecond>{utility.truncateTxnAddress(data.address)}</ColumnSecond>
                  <ColumnSecond>{data?.network}</ColumnSecond>
                  <ColumnSecond style={{ display: "flex" }}>
                    {address[0].tags && address[0].tags.map((tag, index) => index <= 1 && <FinanceTag>{tag}</FinanceTag>)}

                    {addTag && <AddTags click={Close} address={address} contract={true} />}
                    {data.tags && data.tags.length === 0 && <AddTag onClick={() => Open()}>Add Tag</AddTag>}
                  </ColumnSecond>
                  <ColumnSecond>{data.isHidden  ? "Hidden": "Visible"}</ColumnSecond>
                </Row>
              </Div>
            </div>
          );
        })}
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
          pageCount={2}
          breakLabel={"..."}
          initialPage={0}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </PaginationDiv>
    </MainContainer>
  );
}

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
  width: 100px;
  white-space: nowrap;
  height: 2.125rem;
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

const IconDiv = styled.div`
  display: flex;
  @media (min-width: 375px) and (max-width: 812px) {
    margin-bottom: 22px;
  }
  @media (max-width: 375px) {
    margin-bottom: 0px;
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
  @media (min-width: 375px) and (max-width: 768px) {
    margin-right: 0.325rem;
    margin-top: 28px;
    margin-left: 3px;
  }
  @media (max-width: 375px) {
    margin-right: 0.325rem;
    margin-top: 51px;
    margin-left: 3px;
  }
  @media (min-width: 376px) and (max-width: 432px) {
    display: none;
  }
`;

const MainContainer = styled.div`
  background-color: #ecf0f7;
  width: 100%;
  height: 100vh;
  padding: 2.125rem;
  height: 100vh;
  @media (max-width: 375px) {
    padding: 1.2rem;
  }
`;

const MainHeading = styled.div`
  display: flex;
  width: 100%;
  @media (min-width: 570px) and (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    padding-top: 18px;
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
    // padding-bottom: 42px;
  }
  @media (min-width: 375px) {
    padding-top: 47px;
    padding-bottom: 33px;
  }
`;
const Heading = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #191919;
  margin-right: 0.625rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    // padding-top: 40px;
    margin-top: 3px;
  }
  @media (min-width: 375px) {
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
  @media (max-width: 768px) {
    margin-top: 28px;
  }
  @media (max-width: 375px) {
    margin-top: 51px;
    width: 35px;
    font-size: 0rem;
    height: 33px;
    background-position: 0.6rem;
  }
  @media (min-width: 376px) and (max-width: 584px) {
    display: none;
  }
`;
const Input = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.438rem;
  color: #888888;
  border: 0rem;
  padding-left: 1.875rem;
  background-image: url("/images/search-icon.svg");
  background-repeat: no-repeat;
  background-position: 0.5rem;
  background-size: 0.75rem;
  position: relative;
  border: none;
  outline: none;
  display: flex;
  @media (max-width: 768px) {
    width: min-content;
    height: 40px;
  }
  @media (min-width: 375px) {
    width: 223px;
  }
`;
const TableContainer = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  width: 100%;
  min-height: 20rem;
  overflow: auto;
  padding: 0.625rem 0.625rem 1px 0.625rem;
  @media (min-width: 300px) and (max-width: 767px) {
    overflow-y: hidden;
    overflow-x: auto;
    height: 420px;
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
`;
const ColumnOne = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  max-width: 18.75rem;
  min-width: 180px;
`;
const ColumnSecond = styled.div`
  font-size: 0.875rem;
  min-width: 180px;
  font-weight: 400;
  color: #191919;
  width: 100%;
  white-space: nowrap;
  max-width: 18.75rem;
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
