import React from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";

import AddContract from "../Popup/addContract";
import { history } from "../../managers/history";
import Tooltip from "@mui/material/Tooltip";
import ContractsService from "../../services/contractsService";

import utility from "../../utility";

export default function Contract(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const redirectTODetails = (id) => {
    history.push("/dashboard/contract-details/" + id);
  };

  const getContractList = async () => {
    try {
      const requestData = {
        skip: 0,
        limit: 10,
      };
      const response = await ContractsService.getContractsList(requestData);
      setAddress(response.contractList);
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    getContractList();
  }, []);

  const [address, setAddress] = React.useState([]);

  return (
    <MainContainer>
      <SubContainer>
        <MainHeading>
          <Heading>Contracts</Heading>
          <Input placeholder="Search by address or name" />
        </MainHeading>
        <div style={{ display: "flex" }}>
          <img
            alt=""
            src="/images/refresh.svg"
            style={{ marginRight: "0.625rem" }}
          />
          {open && <AddContract click={handleClose} />}
          <Button onClick={handleClickOpen}>Add Contract</Button>
        </div>
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
            <div onClick={() => redirectTODetails(data._id)}>
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
      </TableContainer>
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

const Tag = styled.div`
  background-color: #eaefff;
  border-radius: 3px;

  color: #436ce0;
  padding: 2px 5px 2px 25px;
  position: relative;
  cursor: pointer;
  width: 100%;
  max-width: 100px;
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
display:flex;
width:100%;
@media (min-width: 340px) and (max-width: 768px) {
   display:flex;
   flex-direction:column;
   
   padding-bottom:60px;
`;
const SubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 3.125rem;
  align-items: center;
   @media (min-width: 300px) and (max-width: 767px) {
    padding-top:28px;
    // overflow: scroll;

  
`;
const Heading = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: #191919;
  margin-right: 0.625rem;
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
 font-size:0.1px;
  
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
`;
const TableContainer = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  width: 100%;
  height: 25rem;
  padding: 0.625rem;
   @media (min-width: 300px) and (max-width: 767px) {
    
    overflow: scroll;
    
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
`;
const ColumnSecond = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  color: #191919;
  width: 100%;
  max-width: 18.75rem;
`;
const ToolTipIcon = styled.img`
  width: 0.75rem;
  cursor: pointer;
  margin-left: 0.313rem;
`;
