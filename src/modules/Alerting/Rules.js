import React from "react";
import { Row } from "simple-flexbox";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import Historys from "./Historys";
import Destination from "./Destination";
import { history } from "../../managers/history";

export default function Rules() {
  const [activeButton, setActiveButton] = React.useState("Rules");
  const handleViewClick = (e) => {
    console.log("clicked");
    setActiveButton(e.target.id);
  };
  const redirectToAlertDetails = () => {
    history.push("/alert-details");
  };

  return (
    <>
      {/* <Header /> */}
      <Row
      // style={{ height: "250vh" }}
      >
        {/* <Sidebar /> */}
        <MainContainer>
          <Row>
            <RowCorrecter>
              <Title style={{ color: "#191919" }}>Alerting</Title>
              <Button onClick={() => history.push("/add-alert")}>
                Add Alert
              </Button>
            </RowCorrecter>
          </Row>
          <Container>
            <NewDivOne>
              <Row>
                <TabLister>
                  <TabView
                    id="Rules"
                    onClick={handleViewClick}
                    style={{
                      color: activeButton === "Rules" ? "#3163F0" : "#AEB7D0",
                      display: "flex",
                      paddingBottom: "0.875rem",
                      borderBottom:
                        activeButton === "Rules" ? "2px solid #3163F0" : "",
                    }}
                  >
                    <img
                      alt=""
                      style={{ marginRight: "0.375rem" }}
                      src={
                        activeButton === "Rules"
                          ? "/images/rules.svg"
                          : "/images/rules1.svg"
                      }
                    />
                    Rules
                  </TabView>
                  <TabView
                    id="History"
                    onClick={handleViewClick}
                    style={{
                      color: activeButton === "History" ? "#3163F0" : "#AEB7D0",
                      display: "flex",
                      paddingBottom: "0.875rem",
                      borderBottom:
                        activeButton === "History"
                          ? "0.125rem solid #3163F0"
                          : "",
                    }}
                  >
                    <img
                      alt=""
                      style={{ marginRight: "0.375rem" }}
                      src={
                        activeButton === "History"
                          ? "/images/history_blue.svg"
                          : "/images/history.svg"
                      }
                    />
                    History
                  </TabView>
                  <TabView
                    id="Destination"
                    onClick={handleViewClick}
                    style={{
                      color:
                        activeButton === "Destination" ? "#3163F0" : "#AEB7D0",
                      display: "flex",
                      paddingBottom: "0.875rem",
                      borderBottom:
                        activeButton === "Destination"
                          ? "0.125rem solid #3163F0"
                          : "",
                    }}
                  >
                    <img
                      alt=""
                      style={{ marginRight: "5px" }}
                      src={
                        activeButton === "Destination"
                          ? "/images/destination_blue.svg"
                          : "/images/destination.svg"
                      }
                    />
                    Destination
                  </TabView>
                </TabLister>
              </Row>
            </NewDivOne>
            {activeButton === "Rules" && (
              <div>
                <NewDiv>
                  <Row onClick={redirectToAlertDetails}>
                    <ColumnOne>Contract Name</ColumnOne>
                    <ColumnOne>Address</ColumnOne>
                    <ColumnOne>Network</ColumnOne>
                    <ColumnOne>Alert Type</ColumnOne>
                    <ColumnOne></ColumnOne>
                    <ColumnOne></ColumnOne>
                  </Row>
                </NewDiv>
                <NewDiv>
                  <Row onClick={redirectToAlertDetails}>
                    <ColumnTwo>App_Transactions</ColumnTwo>
                    <ColumnTwo>xdcabfe…8b3c</ColumnTwo>
                    <ColumnTwo>XDC Mainnet</ColumnTwo>
                    <ColumnTwo>Sucessfull</ColumnTwo>
                    <ColumnTwo style={{ fontSize: "14px", color: "#00A58C" }}>
                      Enabled
                    </ColumnTwo>
                    <ColumnTwo>
                      <img
                        alt=""
                        src="/images/delete_blue.svg"
                        style={{ width: "1rem" }}
                      />
                    </ColumnTwo>
                  </Row>
                </NewDiv>
                <NewDiv>
                  <Row onClick={redirectToAlertDetails}>
                    <ColumnTwo>App_Transactions</ColumnTwo>
                    <ColumnTwo>xdcabfe…8b3c</ColumnTwo>
                    <ColumnTwo>XDC Mainnet</ColumnTwo>
                    <ColumnTwo>Failed </ColumnTwo>
                    <ColumnTwo
                      style={{ fontSize: "0.875rem", color: "#00A58C" }}
                    >
                      Enabled
                    </ColumnTwo>
                    <ColumnTwo>
                      <img
                        alt=""
                        src="/images/delete_blue.svg"
                        style={{ width: "1rem" }}
                      />
                    </ColumnTwo>
                  </Row>
                </NewDiv>
              </div>
            )}
            {activeButton === "History" && <Historys />}
            {activeButton === "Destination" && <Destination />}
          </Container>
        </MainContainer>
      </Row>
    </>
  );
}

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;
const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  width: 100%;
  background-color: #ffffff;
  height: 22.25rem;
  padding: 0.5rem;
`;

const ColumnOne = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.875rem;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  max-width: 18.75rem;
`;
const ColumnTwo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.875rem;
  color: #191919;
  width: 100%;
  max-width: 18.75rem;
`;
const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
  padding: 2.5rem;
  display: 100vh;
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
  width: 6.25rem;
  height: 1.875rem;
  font-size: 0.75rem;
`;

const NewDiv = styled.div`
  padding: 0.938rem;
  border-bottom: 0.063rem solid #e3e7eb;
`;
const NewDivOne = styled.div`
  // padding: 0.938rem;
  border-bottom: 0.063rem solid #e3e7eb;
`;
const RowCorrecter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  // max-width: 75rem;
  margin-bottom: 1.25rem;
`;

const TabLister = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 21.875rem;
  cursor: pointer;
  // margin: 25px 0px 10px 17px;
`;
const TabView = styled.div`
  padding: 0.313rem 0.5rem 0.313rem 0.5rem;
`;
