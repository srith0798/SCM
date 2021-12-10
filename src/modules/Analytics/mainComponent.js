import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import Line from "./graph";

import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";

export default function MainComponent(props) {
  const [isSetOpen, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  // const FullScreen = () => {
  //   props.changeExpand(1);
  // };
  const styles = {
    position: "absolute",
    top: 77,
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
    height: "5rem",
    marginTop: "4px",
    fontSize: "0.875rem",
    fontWeight: "600",
    color: "#191919",
  };

  return (
    <div>
      <Column>
        <Header />

        <Row
        // style={{ height: "300vh" }}
        >
          <Sidebar />
          <MainContainer>
            <SubContainer>
              <MainHeading>Analytics</MainHeading>
              <BackImage src="/images/refresh.svg" />
            </SubContainer>
            <Container>
              <View>View analytics for contract</View>
              <Content>
                You can view analytics data per contract by using the contract
                picker below.
              </Content>
              <ClickAwayListener onClickAway={handleClickAway}>
                <Box sx={{ position: "relative" }}>
                  <DropDown onClick={handleClick}>
                    App_Transactions_Validator{" "}
                    <img
                      style={{ marginLeft: "0.5rem" }}
                      alt=""
                      src="/images/XDCmainnet.svg"
                    />
                    <br />
                    <TransactionHash>
                      xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c
                    </TransactionHash>
                    <Image src="/images/Arrrow.svg" />
                  </DropDown>
                  {isSetOpen ? (
                    <Box sx={styles}>
                      <Label>Contract</Label>
                      App_Transactions_Validator
                      <br />
                      <TransactionHash>
                        xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c
                      </TransactionHash>
                    </Box>
                  ) : null}
                </Box>
              </ClickAwayListener>
            </Container>
            <Row
              style={{
                width: "100%",

                justifyContent: "space-between",
              }}
            >
              <GraphContainer>
                <SubContainer>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Head>Transactions over time</Head>
                    <BackImage
                      src="/images/expand.svg"
                      onClick={() => props.changeExpand(1)}
                    />
                  </div>
                  <select id="cars" className="select">
                    <option value="volvo" className="select-dropdown">
                      Last 5 days
                    </option>
                    <option value="saab" className="select-dropdown">
                      Last 7 days
                    </option>
                    <option value="mercedes" className="select-dropdown">
                      Last 15 days
                    </option>
                    <option value="audi" className="select-dropdown">
                      Last 25 days
                    </option>
                  </select>
                </SubContainer>
                <Line />
              </GraphContainer>
              <GraphContainer style={{ marginRight: "0" }}>
                <SubContainer>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Head>Gas used overtime</Head>
                    <BackImage
                      src="/images/expand.svg"
                      onClick={() => props.changeExpand(2)}
                    />
                  </div>

                  <select id="cars" className="select">
                    <option value="volvo" className="select-dropdown">
                      Last 5 days
                    </option>
                    <option value="saab" className="select-dropdown">
                      Last 7 days
                    </option>
                    <option value="mercedes" className="select-dropdown">
                      Last 15 days
                    </option>
                    <option value="audi" className="select-dropdown">
                      Last 25 days
                    </option>
                  </select>
                </SubContainer>
                <Line />
              </GraphContainer>
            </Row>
            <Row
              style={{
                width: "100%",

                justifyContent: "space-between",
              }}
            >
              <GraphContainer>
                <SubContainer>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Head>Top Callers</Head>
                    <BackImage
                      src="/images/expand.svg"
                      onClick={() => props.changeExpand(4)}
                    />
                  </div>
                  <select id="cars" className="select">
                    <option value="volvo" className="select-dropdown">
                      Last 5 days
                    </option>
                    <option value="saab" className="select-dropdown">
                      Last 7 days
                    </option>
                    <option value="mercedes" className="select-dropdown">
                      Last 15 days
                    </option>
                    <option value="audi" className="select-dropdown">
                      Last 25 days
                    </option>
                  </select>
                </SubContainer>
                <Div>
                  <ContractFrom>Contract from</ContractFrom>
                  <Network>xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c</Network>
                </Div>
                <Div>
                  <ContractFrom>Network</ContractFrom>
                  <Network>Mainnet</Network>
                </Div>
                <Div>
                  <ContractFrom>Contract from</ContractFrom>
                  <Network>xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c</Network>
                </Div>
                <Div>
                  <ContractFrom>Network</ContractFrom>
                  <Network>Mainnet</Network>
                </Div>
                <Div>
                  <ContractFrom>Network</ContractFrom>
                  <Network>Mainnet</Network>
                </Div>
              </GraphContainer>
              <GraphContainer style={{ marginRight: "0" }}>
                <SubContainer>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Head>Active users</Head>
                    <BackImage
                      src="/images/expand.svg"
                      onClick={() => props.changeExpand(3)}
                    />
                  </div>
                  <select id="cars" className="select">
                    <option value="volvo" className="select-dropdown">
                      Last 5 days
                    </option>
                    <option value="saab" className="select-dropdown">
                      Last 7 days
                    </option>
                    <option value="mercedes" className="select-dropdown">
                      Last 15 days
                    </option>
                    <option value="audi" className="select-dropdown">
                      Last 25 days
                    </option>
                  </select>
                </SubContainer>
                <Line />
              </GraphContainer>
            </Row>
            <GraphContainer>
              <SubContainer>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Head>Top Functions calls</Head>
                  <BackImage
                    src="/images/expand.svg"
                    onClick={() => props.changeExpand(5)}
                  />
                </div>
                <select id="cars" className="select">
                  <option value="volvo" className="select-dropdown">
                    Last 5 days
                  </option>
                  <option value="saab" className="select-dropdown">
                    Last 7 days
                  </option>
                  <option value="mercedes" className="select-dropdown">
                    Last 15 days
                  </option>
                  <option value="audi" className="select-dropdown">
                    Last 25 days
                  </option>
                </select>
              </SubContainer>
              <Div>
                <ContractFrom>Contract from</ContractFrom>
                <Network>xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c</Network>
              </Div>
              <Div>
                <ContractFrom>Network</ContractFrom>
                <Network>Mainnet</Network>
              </Div>
              <Div>
                <ContractFrom>Contract from</ContractFrom>
                <Network>xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c</Network>
              </Div>
              <Div>
                <ContractFrom>Network</ContractFrom>
                <Network>Mainnet</Network>
              </Div>
              <Div>
                <ContractFrom>Network</ContractFrom>
                <Network>Mainnet</Network>
              </Div>
            </GraphContainer>
          </MainContainer>
        </Row>
      </Column>
    </div>
  );
}
const MainContainer = styled.div`
  width: 100%;
  padding-left: 3.125rem;
  padding-top: 1.563rem;
  padding-right: 1.563rem;
  padding-bottom: 1.563rem;
  background-color: #ecf0f7;
`;
const MainHeading = styled.div`
  text-align: left;
  font-size: 1.5rem;
  font-weight: 600;
  color: #191919;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;
`;
const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  width: 100%;
  height: auto;
  margin-top: 0.625rem;
  padding: 1.25rem;
`;
const View = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #102c78;
`;
const Content = styled.div`
  font-weight: 600;
  font-size: 0.875rem;
  color: #191919;
  margin-top: 0.625rem;
  padding-bottom: 1.25rem;
`;

const GraphContainer = styled.div`
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  height: auto;

  padding: 1.25rem;

  margin: 1.25rem 1.875rem 1.875rem 0px;
`;
const Head = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #102c78;
  margin-right: 0.625rem;
`;
const ContractFrom = styled.div`
  width: 100%;
  max-width: 9.375rem;
  color: #102c78;
`;
const Network = styled.div`
  width: 100%;
  max-width: 9.375rem;
`;
const Div = styled.div`
  display: flex;
  flex-flow: row nowrap;
  border-top: 1px solid rgb(227, 231, 235);
  margin-top: 1.25rem;
`;
const DropDown = styled.div`
  background: #f5f6fd 0% 0% no-repeat padding-box;
  border: 1px solid #d5e0ff;
  border-radius: 0.375rem;
  font: normal normal medium 14px/17px Inter;
  font-size: 0.875rem;
  font-weight: 600;
  color: #191919;
  height: 4.688rem;
  padding: 0.625rem;
  width: 100%;
  max-width: 453px;
  position: relative;
`;
const TransactionHash = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #416be0;
  margin-top: 4px;
`;
const Image = styled.img`
  width: 0.75rem;
  position: absolute;
  cursor: pointer;
  top: 1.813rem;
  right: 0.5rem;
`;
const Label = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: #767c93;
`;
const BackImage = styled.img`
  cursor: pointer;
`;
