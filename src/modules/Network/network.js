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
        <Row
        // style={{ height: "180vh" }}
        >
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
                      <Row style={{ alignItems: "center" }}>
                        <Icon src="/images/mainnet.svg" />
                        <Head>Mainnet</Head>
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
  font: normal normal 600 24px/29px Inter;
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
  height: 2.188rem;
  font-size: 0.875rem;
`;
const Div = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  width: 100%;
  height: 25rem;
  margin-top: 1.25rem;
  padding: 0.625rem;
`;
const Container = styled.div`
  padding: 0.938rem;
  border-bottom: 0.063rem solid #e3e7eb;
`;
const ColumnOne = styled.div`
  // display: flex;
  // flex-flow: column nowrap;
  font-size: 0.875rem;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  max-width: 15.625rem;
  white-space: nowrap;
`;
const Icon = styled.img`
  width: 1.75rem;
  margin-right: 0.625rem;
`;
const Url = styled.div`
  font-size: 0.875rem;
  color: #416be0;
  width: 100%;
  max-width: 15.625rem;
`;
const Head = styled.div`
  color: #191919;
  font-size: 0.875rem;
  font-weight: 600;
  width: 100%;
  max-width: 13.438rem;
  white-space: nowrap;
`;
