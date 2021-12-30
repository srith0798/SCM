import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
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
    <div style={{ overflow: "auto" }}>
      <Column>
        <Row>
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

            <ResponsiveRow>
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
              <GraphContainer>
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
            </ResponsiveRow>
            <ResponsiveRow>
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
              <GraphContainer>
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
            </ResponsiveRow>
            <GraphContainer>
              <SubContainer>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Head>Top Function calls</Head>
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
const ResponsiveRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  justify-content: space-between;
  @media (min-width: 300px) and (max-width: 1024px) {
    display: block;
  }
`;
const MainContainer = styled.div`
  width: 100%;
  padding: 25px 20px 0px 25px;
  background-color: #ecf0f7;
  @media (min-width: 300px) and (max-width: 1024px) {
    padding: 12px 15px 0px 15px;
  }
`;
const MainHeading = styled.div`
  text-align: left;
  font-size: 1.5rem;
  font-weight: 600;
  color: #191919;
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 1.2rem;
  }
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;
  padding-left: 5px;
`;
const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  width: 100%;
  height: auto;
  margin-top: 0.625rem;
  padding: 1.25rem;
  @media (min-width: 300px) and (max-width: 1024px) {
    width: 100%;
    padding: 9px 12px 9px 12px;
  }
`;
const View = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #102c78;
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 0.85rem;
  }
`;
const Content = styled.div`
  font-weight: 600;
  font-size: 0.875rem;
  color: #191919;
  margin-top: 0.625rem;
  padding-bottom: 1.25rem;
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 0.85rem;
  }
`;

const GraphContainer = styled.div`
  width: 49%;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  height: auto;
  padding: 1.25rem;
  margin-top: 2.32rem;
  @media (min-width: 300px) and (max-width: 1024px) {
    width: 100%;
  }
`;
const Head = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #102c78;
  margin-right: 0.625rem;
  white-space: nowrap;
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 0.85rem;
  }
`;
const ContractFrom = styled.div`
  width: 100%;
  max-width: 9.375rem;
  color: #102c78;
  font-weight: 600;

  @media (min-width: 300px) and (max-width: 767px) {
    word-break: break-all;
  }
`;
const Network = styled.div`
  width: 100%;
  max-width: 9.375rem;
  @media (min-width: 300px) and (max-width: 767px) {
    word-break: break-all;
  }
`;
const Div = styled.div`
  display: flex;
  flex-flow: row nowrap;
  border-bottom: 1px solid rgb(227, 231, 235);
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
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 0.85rem;
  }
`;
const TransactionHash = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #416be0;
  margin-top: 4px;
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 0.85rem;
    word-break: break-all;
  }
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
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 0.85rem;
  }
`;
const BackImage = styled.img`
  cursor: pointer;
  margin-left: 4px;
  @media (min-width: 300px) and (max-width: 1024px) {
    display: none;
  }
`;
