import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";

export default function Contract() {
  React.useEffect(() => {
    let address = [
      {
        contractName: "App_Transactions_Validator",
        address: "xdcabf8b3c",
        network: "XDC Mainnet",
        tag: "Add Tag",
        visibility: "Visible",
      },
      {
        contractName: "App_Transactions_Validator",
        address: "xdcabf8b3c",
        network: "XDC Mainnet",
        tag: "Add Tag",
        visibility: "Visible",
      },
      {
        contractName: "App_Transactions_Validator",
        address: "xdcabf8b3c",
        network: "XDC Mainnet",
        tag: "Add Tag",
        visibility: "Visible",
      },
      {
        contractName: "App_Transactions_Validator",
        address: "xdcabf8b3c",
        network: "XDC Mainnet",
        tag: "Add Tag",
        visibility: "Visible",
      },
      {
        contractName: "App_Transactions_Validator",
        address: "xdcabf8b3c",
        network: "XDC Mainnet",
        tag: "Add Tag",
        visibility: "Visible",
      },
    ];

    setAddress(
      address.map((object) => {
        return {
          contractName: object.contractName,
          address: object.address,
          network: object.network,
          tag: object.tag,
          visibility: object.visibility,
        };
      })
    );
  }, []);

  const [address, setAddress] = React.useState([]);

  return (
    <div>
      <Column>
        <Header />
        <Row>
          <Sidebar />
          <MainContainer>
            <SubContainer>
              <div>
                <Heading>Contracts</Heading>
                <Input placeholder="Search by address or name" />
              </div>
              <div style={{ display: "flex" }}>
                <img
                  src="/images/refresh.svg"
                  style={{ marginRight: "10px" }}
                />
                <Button>Add Contract</Button>
              </div>
            </SubContainer>

            <TableContainer>
              <Div>
                <Row>
                  <ColumnOne>Contract Name</ColumnOne>
                  <ColumnOne>Address</ColumnOne>
                  <ColumnOne>Network</ColumnOne>
                  <ColumnOne>Tag</ColumnOne>
                  <ColumnOne>Visibility</ColumnOne>
                </Row>
              </Div>
              <div>
                {address.map((data, index) => {
                  return (
                    <Div>
                      <Row>
                        <ColumnOne>{data.contractName}</ColumnOne>
                        <ColumnOne>{data.address}</ColumnOne>
                        <ColumnOne>{data.network}</ColumnOne>
                        <ColumnOne>{data.tag}</ColumnOne>
                        <ColumnOne>{data.visibility}</ColumnOne>
                      </Row>
                    </Div>
                  );
                })}
              </div>
            </TableContainer>
          </MainContainer>
        </Row>
      </Column>
    </div>
  );
}

const MainContainer = styled.div`
  background-color: #ecf0f7;
  width: 100%;
  padding: 50px;
`;
const SubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
`;
const Heading = styled.span`
  font: normal normal 600 24px/29px Inter;
  color: #191919;
  margin-right: 10px;
`;
const Button = styled.button`
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  border: 0px;
  color: #ffffff;
  max-width: 136px;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  background-image: url("/images/Add.svg");
  background-position: left;
`;
const Input = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
  font: normal normal normal 14px/17px Inter;
  padding: 7px;
  color: #888888;
  border: 0px;
  padding-left: 30px;
  background-image: url("/images/search-icon.svg");
  background-repeat: no-repeat;
  background-position: 8px;
  background-size: 12px;
  position: relative;
`;
const TableContainer = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  width: 100%;
  height: 400px;
`;
const Div = styled.div`
  // padding: 20px 20px 15px 30px;
  padding: 15px;
  border-bottom: 1px solid #e3e7eb;
`;
const ColumnOne = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size:14px;
  font-weight:600
  color: #102c78;
  width: 100%;
  max-width: 300px;

`;
