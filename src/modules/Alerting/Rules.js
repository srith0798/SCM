import React from "react";
import { Row } from "simple-flexbox";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
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
        <MainContainer style={{ padding: "3rem" }}>
          <Row>
            <RowCorrecter>
              <Title>Alerting</Title>
              <Button>Add alert</Button>
            </RowCorrecter>
          </Row>
          <TabLister>
              <TabView
                id="Overview"
                onClick={handleViewClick}
                style={{
                  color: activeButton === "Rules" ? "blue" : "",
                  borderBottom:
                    activeButton === "Rules" ? "2px solid blue" : "",
                }}
              >
                <img src="/images/rules.svg" />
                Rules
              </TabView>
              <TabView
                id="History"
                onClick={handleViewClick}
                style={{
                  color: activeButton === "History" ? "blue" : "",
                  borderBottom:
                    activeButton === "History" ? "2px solid blue" : "",
                }}
              >
                <img src="/images/rules.svg" />
                History
              </TabView>
              <TabView
                id="Destination"
                onClick={handleViewClick}
                style={{
                  color: activeButton === "Destination" ? "blue" : "",
                  borderBottom:
                    activeButton === "Destination" ? "2px solid blue" : "",
                }}
              >
                <img src="/images/rules.svg" />
                Destination
              </TabView>

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
const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
  padding: 50px;
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
  width: 120px;
  height: 34px;
  font-size: 14px;
`;

const Div = styled.div`
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
