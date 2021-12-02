import React from "react";
import { Row } from "simple-flexbox";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import Historys from "./Historys";
import Destination from "./Destination";

export default function Rules() {
  const [activeButton, setActiveButton] = React.useState("Rules");
  const handleViewClick = (e) => {
    setActiveButton(e.target.id);
  };
  return (
    <>
      <Header />
      <Row style={{ height: "250vh" }}>
        <Sidebar />
        <MainContainer>
          <Row>
            <RowCorrecter>
              <Title>Alerting</Title>
              <Button>Add alert</Button>
            </RowCorrecter>
          </Row>
          <Container>
            <TabLister>
              <TabView
                id="Rules"
                onClick={handleViewClick}
                style={{
                  color: activeButton === "Rules" ? "blue" : "",
                  display: "flex",
                  paddingBottom: "14px",
                  borderBottom:
                    activeButton === "Rules" ? "2px solid blue" : "",
                }}
              >
                <img
                  style={{ marginRight: "6px" }}
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
                  color: activeButton === "History" ? "blue" : "",
                  display: "flex",
                  paddingBottom: "14px",
                  borderBottom:
                    activeButton === "History" ? "2px solid blue" : "",
                }}
              >
                <img
                  style={{ marginRight: "6px" }}
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
                  color: activeButton === "Destination" ? "blue" : "",
                  display: "flex",
                  paddingBottom: "14px",
                  borderBottom:
                    activeButton === "Destination" ? "2px solid blue" : "",
                }}
              >
                <img
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
            {activeButton === "Rules" && (
              <div>
                <NewDiv>
                  <Row>
                    <ColumnOne>Contract Name</ColumnOne>
                    <ColumnOne>Address</ColumnOne>
                    <ColumnOne>Network</ColumnOne>
                    <ColumnOne>Alert Type</ColumnOne>
                    <ColumnOne></ColumnOne>
                    <ColumnOne></ColumnOne>
                  </Row>
                </NewDiv>
                <NewDiv>
                  <Row>
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
                        style={{ width: "16px" }}
                      />
                    </ColumnTwo>
                  </Row>
                </NewDiv>
                <NewDiv>
                  <Row>
                    <ColumnTwo>App_Transactions</ColumnTwo>
                    <ColumnTwo>xdcabfe…8b3c</ColumnTwo>
                    <ColumnTwo>XDC Mainnet</ColumnTwo>
                    <ColumnTwo>Failed </ColumnTwo>
                    <ColumnTwo style={{ fontSize: "14px", color: "#00A58C" }}>
                      Enabled
                    </ColumnTwo>
                    <ColumnTwo>
                      <img
                        alt=""
                        src="/images/delete_blue.svg"
                        style={{ width: "16px" }}
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
  border-radius: 6px;
  width: 100%;
  background-color: #ffffff;
  height: 20rem;
  padding: 8px;
`;

const ColumnOne = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 14px;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  max-width: 300px;
`;
const ColumnTwo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 14px;
  color: #191919;
  width: 100%;
  max-width: 300px;
`;
const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
  padding: 40px;
  display: 100vh;
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
  width: 100px;
  height: 30px;
  font-size: 12px;
`;

const NewDiv = styled.div`
  padding: 15px;
  border-bottom: 1px solid #e3e7eb;
`;
const RowCorrecter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 20px;
`;

const TabLister = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 350px;
  cursor: pointer;
  // margin: 25px 0px 10px 17px;
`;
const TabView = styled.div`
  padding: 5px 8px 5px 8px;
`;
