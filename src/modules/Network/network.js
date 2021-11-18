import React, { useState } from "react";
import styled from "styled-components";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import { Row, Column } from "simple-flexbox";
import AddNetwork from "../Popup/addNetwork";

export default function Network(props) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    let address = [
      {
        network: "App_Transactions_Validator",
        url: "https://explorer.xinfin.network/",
      },

      //   {
      //     network: "App_Transactions_Validator",
      //     url: "https://explorer.xinfin.network/",
      //   },
    ];

    setAddress(
      address.map((object) => {
        return {
          network: object.network,
          url: object.url,
        };
      })
    );
  }, []);

  const [address, setAddress] = React.useState([]);
  return (
    <div>
      <Column>
        <Header />
        <Row style={{ height: "100vh" }}>
          <Sidebar />
          <MainContainer>
            <SubContainer>
              <div>
                <Heading>Networks</Heading>
              </div>
              <div style={{ display: "flex" }}>
                {open && <AddNetwork click={handleClose} />}

                <Button onClick={handleClickOpen}>Add Network</Button>
              </div>
            </SubContainer>
            <Div>
              <Container>
                <Row>
                  <ColumnOne>Network</ColumnOne>
                  <ColumnOne>URL</ColumnOne>
                </Row>
              </Container>
              <div>
                {address.map((data, index) => {
                  return (
                    <Container>
                      <Row>
                        <ColumnOne>
                          <Icon src="/images/mainnet.svg" />
                          Mainnet
                        </ColumnOne>
                        <Url>https://explorer.xinfin.network/</Url>
                      </Row>
                    </Container>
                  );
                })}
              </div>
            </Div>
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
  background-image: url("/images/Add.svg");
  background-repeat: no-repeat;
  background-position: 8px;
  padding-left: 21px;
  background-size: 14px;
  position: relative;
  background-color: #3163f0;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  width: 130px;
  height: 34px;
  font-size: 14px;
`;
const Div = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  width: 100%;
  height: 400px;
  margin-top: 20px;
`;
const Container = styled.div`
  padding: 15px;
  border-bottom: 1px solid #e3e7eb;
`;
const ColumnOne = styled.div`
  //   display: flex;
  flex-flow: column nowrap;
  font-size: 14px;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  max-width: 250px;
  white-space: nowrap;
`;
const Icon = styled.img`
  width: 28px;
  margin-right: 10px;
`;
const Url = styled.div`
  font-size: 14px;
  letter-spacing: 0px;
  color: #416be0;
`;
