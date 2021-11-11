import React, { useState } from "react";
import styled from "styled-components";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import { Row, Column } from "simple-flexbox";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContractAbi from "../Popup/contractAbi";
import RenameContract from "../Popup/renameContract";

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
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Column>
        <Header />
        <Row>
          <Sidebar />
          <MainContainer>
            <SubContainer>
              <div>
                <img src="/images/back.svg" style={{ marginRight: "10px" }} />
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
              <Row>
                <img src="/images/genrl.svg" />
                &emsp;
                <div>General</div>&emsp;&emsp;
                <img src="/images/coding.svg" />
                &emsp;
                <div>Source Code</div>
              </Row>
            </Container>

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
                    <img src="/images/cube.svg" />
                  </RowProperty>
                  <RowProperty>View transactions</RowProperty>
                </PopUpBlock>

                <PopUpBlock>
                  {open && <ContractAbi click={handleClose} />}
                  <RowProperty onClick={handleClickOpen}>
                    <img src="/images/code.svg" />
                  </RowProperty>
                  <RowProperty>Contract ABI</RowProperty>
                </PopUpBlock>
                <PopUpBlock>
                  {open && <RenameContract click={handleClose} />}
                  <RowProperty onClick={handleClickOpen}>
                    <img src="/images/edit.svg" />
                  </RowProperty>
                  <RowProperty>Rename Contract</RowProperty>
                </PopUpBlock>
                <PopUpBlock>
                  <RowProperty>
                    <img src="/images/hide.svg" />
                  </RowProperty>
                  <RowProperty>Hide Contract</RowProperty>
                </PopUpBlock>
                <PopUpBlock>
                  <RowProperty>
                    <img src="/images/delete.svg" />
                  </RowProperty>
                  <RowProperty>Remove Contract</RowProperty>
                </PopUpBlock>
              </PopUp>
            </DetailsSection>
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
const SubHeading = styled.div`
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;
  color: #102c78;
`;
const Button = styled.button`
  background-image: url("/images/globe.svg");
  background-repeat: no-repeat;
  background-position: 8px;
  padding-left: 21px;
  background-size: 14px;
  position: relative;
  background-color: #ffffff;
  color: #3163f0;
  border: none;
  border-radius: 4px;
  width: 130px;
  height: 34px;
  font-size: 14px;
`;
const Container = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  width: 100%;
  height: 120px;
  margin-top: 20px;
  padding: 20px;
`;
const Hash = styled.input`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 10px;
  font-weight: 600;
  border: none;
  width: 100%;
  max-width: 385px;
`;
const DetailsSection = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  width: 100%;
  height: auto;
  margin-top: 20px;
  padding: 10px;
`;
const Div = styled.div`
  display: flex;
  flex-flow: row nowrap;
  border-bottom: 1px solid #e3e7eb;
  padding: 20px;
`;
const TableData = styled.div`
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;
  color: #191919;
  width: 100%;
  max-width: 150px;
  font-size: 17px;
  font-weight: 600;
`;
const CopyImg = styled.img`
  margin-left: 9%;
  cursor: pointer;
`;
const TableHeading = styled.div`
  font: normal normal medium 14px/17px Inter;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0px;
  color: #102c78;
  max-width: 300px;
  width: 100%;
`;
const PopUp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 70px;
  width: 100%;

  max-width: 950px;
  font-size: 14px;
`;

const PopUpBlock = styled.div`
  background: #f5f6fd 0% 0% no-repeat padding-box;
  border: 1px solid #d5e0ff;
  border-radius: 6px;
  width: 100%;
  max-width: 166px;
  padding: 10px;
  height: 63px;
  color: #1d3c93;
  font-weight: 600;
  cursor: pointer;
`;
const RowProperty = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;
