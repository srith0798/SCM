import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import AddContract from "../Popup/addContract";
import { history } from "../../managers/history";
import Tooltip from "@mui/material/Tooltip";

export default function Contract(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const redirectTODetails = () => {
    history.push("/contract-details");
  };
  React.useEffect(() => {
    let address = [
      {
        contractName: "App_Transactions",
        address: "xdcabf8b3c",
        network: "XDC Mainnet",
        tag: "Add Tag",
        visibility: "Visible",
      },
      {
        contractName: "App_Transactions",
        address: "xdcabf8b3c",
        network: "XDC Mainnet",
        tag: "Add Tag",
        visibility: "Visible",
      },
      {
        contractName: "App_Transactions",
        address: "xdcabf8b3c",
        network: "XDC Mainnet",
        tag: "Add Tag",
        visibility: "Visible",
      },
      {
        contractName: "App_Transactions",
        address: "xdcabf8b3c",
        network: "XDC Mainnet",
        tag: "Add Tag",
        visibility: "Visible",
      },
      {
        contractName: "App_Transactions",
        address: "xdcabf8b3c",
        network: "XDC Mainnet",
        tag: "Add Tag",
        visibility: "Visible",
      },
      {
        contractName: "App_Transactions",
        address: "xdcabf8b3c",
        network: "XDC Mainnet",
        tag: "Add Tag",
        visibility: "Visible",
      },
      {
        contractName: "App_Transactions",
        address: "xdcabf8b3c",
        network: "XDC Mainnet",
        tag: "Add Tag",
        visibility: "Visible",
      },
      {
        contractName: "App_Transactions",
        address: "xdcabf8b3c",
        network: "XDC Mainnet",
        tag: "Add Tag",
        visibility: "Visible",
      },
      {
        contractName: "App_Transactions",
        address: "xdcabf8b3c",
        network: "XDC Mainnet",
        tag: "Add Tag",
        visibility: "Visible",
      },
      {
        contractName: "App_Transactions",
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
        <Row
        // style={{ height: "180vh" }}
        >
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
              <div onClick={redirectTODetails}>
                {address.map((data, index) => {
                  return (
                    <Div>
                      <Row>
                        <ColumnSecond>{data.contractName}</ColumnSecond>
                        <ColumnSecond>{data.address}</ColumnSecond>
                        <ColumnSecond>{data.network}</ColumnSecond>
                        <ColumnSecond>{data.tag}</ColumnSecond>
                        <ColumnSecond>{data.visibility}</ColumnSecond>
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
`;
const Div = styled.div`
  padding: 0.75rem;
  border-bottom: 0.063rem solid #e3e7eb;
`;
const ColumnOne = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  max-width: 18.75rem;
`;
const ColumnSecond = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #191919;
  width: 100%;
  max-width: 300px;
`;
const ToolTipIcon = styled.img`
  width: 12px;
  cursor: pointer;
  margin-left: 5px;
`;
