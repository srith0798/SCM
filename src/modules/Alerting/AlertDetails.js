import React from "react";
import { Row } from "simple-flexbox";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import { history } from "../../managers/history";

export default function AlertDetails() {
  return (
    <div>
      <Header />
      <Row>
        <Sidebar />

        <MainContainer>
          <Row style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <img
                src="/images/back.svg"
                style={{ marginRight: "10px" }}
                onClick={backButton}
              />
              <b>Alert Details</b>
            </div>
            <Button>Add alert</Button>
          </Row>
          <Container></Container>
        </MainContainer>
      </Row>
    </div>
  );
}

const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
  padding: 3rem;
  display: 100vh;
`;

const backButton = () => {
  history.push(AlertDetails);
};
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

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  width: 100%;
  height: 120px;
  margin-top: 20px;
  padding: 20px;
`;
