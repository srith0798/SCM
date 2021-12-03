import React from "react";
import { Row } from "simple-flexbox";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import Historys from "./Historys";
import Destination from "./Destination";

export default function AddAlert() {
  //   const [activeButton, setActiveButton] = React.useState("AddAlert");
  //   const handleViewClick = (e) => {
  //     setActiveButton(e.target.id);
  //   };
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
        </MainContainer>
      </Row>
    </>
  );
}
