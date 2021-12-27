import React from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import ShowLoader from "../../common/components/showLoader";
import AddContract from "../Popup/addContract";
import { history } from "../../managers/history";
import Tooltip from "@mui/material/Tooltip";
import ContractsService from "../../services/contractsService";
import ReactPaginate from "react-paginate";
import utility from "../../utility";
import { sessionManager } from "../../managers/sessionManager";

export default function Contract(props) {
  const [open, setOpen] = React.useState(false);
  const [showPlaceHolder, setShowPlaceHolder] = React.useState(false);
  const [loader, setLoader] = React.useState(false);

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
    } catch (e) {
      setShowPlaceHolder(true);
      setLoader(false);
    }
  };
  const changePage = (value) => {
    getContractList(Math.ceil(value.selected * 5), 5);
  };

  React.useEffect(() => {
    getContractList();
  }, []);

  const [address, setAddress] = React.useState([]);

  return (
    <MainContainer>
      <ShowLoader state={loader} top={"33%"} />
      <SubContainer>
        <MainHeading>
          <Heading>Contracts</Heading>
          <Input placeholder="Search by address or name" />
        </MainHeading>
        <IconDiv>
          <RefreshImage
            onClick={() => getContractList()}
            alt=""
            src="/images/refresh.svg"
            style={{ marginRight: "0.625rem" }}
          />
          {open && <AddContract click={handleClose} />}
          <Button onClick={handleClickOpen}>Add Contract</Button>
        </IconDiv>
      </SubContainer>

      <TableContainer>
        <Div>
          <Row>
            <ColumnOne>Contract Name</ColumnOne>
            <ColumnOne>Address</ColumnOne>
            <ColumnOne>Network</ColumnOne>
            <ColumnOne>
              Tag{" "}
              <Tooltip disableFocusListener title="Add">
                <ToolTipIcon src="/images/tool tip.svg" />
              </Tooltip>
            </ColumnOne>
            <ColumnOne>Visibility</ColumnOne>
          </Row>
        </Div>
        {address.map((data, index) => {
          return (
            <div onClick={() => redirectTODetails(data._id)} style={{cursor: "pointer"}}>
              <Div>
                <Row>
                  <ColumnSecond>{data.contractName}</ColumnSecond>
                  <ColumnSecond>
                    {utility.truncateTxnAddress(data.address)}
                  </ColumnSecond>
                  <ColumnSecond>{data.tokenName}</ColumnSecond>
                  <ColumnSecond>{tagDiv()} </ColumnSecond>
                  <ColumnSecond>{data.status}</ColumnSecond>
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
          pageCount={5}
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

function tagDiv() {
  return (
    <Tag>
      Finance
      <TagImage src="/images/Tag_logo.svg"></TagImage>
    </Tag>
  );
}

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
  @media (min-width: 340px) and (max-width: 768px) {
    margin-bottom: 22px;
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
`;
const Tag = styled.div`
  background-color: #eaefff;
  border-radius: 3px;

  color: #436ce0;
  padding: 2px 2px 2px 25px;
  position: relative;
  cursor: pointer;
  width: 100%;
  max-width: 100px;
  @media (min-width: 340px) and (max-width: 768px) {
    padding: 2px 14px 2px 25px;
    margin-right: 56px;
    margin-left: 36px;
  }
`;

const TagImage = styled.img`
  position: absolute;
  width: 12px;
  left: 5px;
  top: 7px;
`;

const MainContainer = styled.div`
  background-color: #ecf0f7;
  width: 100%;
  height: 100vh;
  padding: 3.125rem;
  height: 100vh;
`;
const MainHeading = styled.div`
  display: flex;
  width: 100%;
  @media (min-width: 340px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    padding-bottom: 58px;
  }
`;
const SubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 3.125rem;
  align-items: center;
  padding-bottom: 15px;
  @media (min-width: 300px) and (max-width: 767px) {
    padding-top: 47px;
    padding-bottom: 33px;
  }
`;
const Heading = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: #191919;
  margin-right: 0.625rem;
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 1rem;
    padding-bottom: 10px;
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
  @media (min-width: 340px) and (max-width: 768px) {
    width: 1.225rem;
    font-size: 0.1px;
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
  width: 100%;
  @media (min-width: 340px) and (max-width: 768px) {
    padding: 0px;
    margin-right: 10px;

    height: 33px;
    background-image: none;
  }
`;
const TableContainer = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  width: 100%;
  min-height: 25rem;
  /* height: 25rem; */
  padding: 0.625rem 0.625rem 1px 0.625rem;
  @media (min-width: 300px) and (max-width: 767px) {
    overflow: scroll;
    width: 100%;
    height: 281px;
    overflow-y: auto;
    position: relative;
    &::-webkit-scrollbar {
      width: 10px;
      border: 0.5px solid blue;
      outline: none;
    }
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
  @media (min-width: 300px) and (max-width: 767px) {
    /* margin-right: 91px; */
  }
`;
const ColumnSecond = styled.div`
  font-size: 0.875rem;
  min-width: 180px;
  font-weight: 400;
  color: #191919;
  width: 100%;
  white-space: nowrap;
  max-width: 18.75rem;
  @media (min-width: 300px) and (max-width: 767px) {
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
  -webkit-filter: grayscale(60%); /* Safari 6.0 - 9.0 */
  filter: grayscale(60%);
  margin-bottom: 20px;
`;
