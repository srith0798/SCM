import React from "react";
import { Row } from "simple-flexbox";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import Historys from "./Historys";
import Destination from "./Destination";
import { history } from "../../managers/history";

export default function AddAlert() {
  const [activeButton, setActiveButton] = React.useState("AddAlert");
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
              <Title>
                <img
                  alt=""
                  style={{ marginRight: "0.625rem" }}
                  src="/images/back.svg"
                  onClick={backButton}
                />
                Create Alert
              </Title>
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
                  paddingBottom: "0.875rem",
                  borderBottom:
                    activeButton === "Rules" ? "2px solid blue" : "",
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
                  color: activeButton === "History" ? "blue" : "",
                  display: "flex",
                  paddingBottom: "0.875rem",
                  borderBottom:
                    activeButton === "History" ? "0.125rem solid blue" : "",
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
                  color: activeButton === "Destination" ? "blue" : "",
                  display: "flex",
                  paddingBottom: "0.875rem",
                  borderBottom:
                    activeButton === "Destination" ? "0.125rem solid blue" : "",
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
            {activeButton === "Rules" && (
              <div>
                <AlertContainer>
                  <TypeRow> Alert type</TypeRow>
                  <SelectType>Select a alert triger type</SelectType>
                </AlertContainer>
                <MainBoxContainer>
                  <BoxContainerOne>
                    <img alt="" src="/images/Successful transaction.svg" />
                    <TitleOne>Successful Transaction</TitleOne>
                    <SubTitleOne>
                      trigger when Successful Transaction happen
                    </SubTitleOne>
                  </BoxContainerOne>
                  <BoxContainer>
                    <img alt="" src="/images/Failed transactionToken.svg" />
                    <Title>Failed Transaction</Title>
                    <SubTitle>trigger when Transactions fails</SubTitle>
                  </BoxContainer>
                  <BoxContainer>
                    <img alt="" src="/images/XRC token.svg" />
                    <Title>XRC-20 Token Transfer </Title>
                    <SubTitle>
                      trigger whenever an XRC-20 Token Transfer happen
                    </SubTitle>
                  </BoxContainer>
                  <BoxContainer>
                    <img alt="" src="/images/XDC logo.svg" />
                    <Title>Transaction Value</Title>
                    <SubTitle>
                      trigger whenever transaction value matches
                    </SubTitle>
                  </BoxContainer>
                  <BoxContainer>
                    <img alt="" src="/images/XDC logo.svg" />
                    <Title>XDC Balance</Title>
                    <SubTitle>
                      trigger when XDC balance falls below certain threshold
                    </SubTitle>
                  </BoxContainer>
                </MainBoxContainer>
                <BoxRow>
                  <BoxContainer>
                    <img alt="" src="/images/state change_.svg" />
                    <Title>State Change</Title>
                    <SubTitle>
                      trigger whenever stable variable changes
                    </SubTitle>
                  </BoxContainer>
                  <BoxContainer>
                    <img alt="" src="/images/functioncall.svg" />
                    <TitleLast>Function call</TitleLast>
                    <SubTitleLast>COMMING SOON</SubTitleLast>
                  </BoxContainer>
                </BoxRow>

                <AlertContainer>
                  <TypeRow> Alert target</TypeRow>
                  <SelectType>
                    Select a address which alert will be trigger
                  </SelectType>
                </AlertContainer>
                <AlertTargetContainer>
                  <BoxContainerOne>
                    <img alt="" src="/images/Address_logo.svg" />
                    <TitleOne>Address</TitleOne>
                    <SubTitleOne>
                      recieve alert for only one address
                    </SubTitleOne>
                  </BoxContainerOne>
                  <BoxContainer>
                    <img alt="" src="/images/network_logo.svg" />
                    <Title>Network</Title>
                    <SubTitle>
                      recieve alert for deployment on a network
                    </SubTitle>
                  </BoxContainer>
                  <BoxContainer>
                    <img alt="" src="/images/Tag_logo.svg" />
                    <Title>Tag</Title>
                    <SubTitle>
                      Recieve alert for every address that selected tag
                    </SubTitle>
                  </BoxContainer>
                </AlertTargetContainer>
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
  font-size: 0.775rem;
  font-weight: 600;
  color: #1d3c93;
  width: 100%;
  max-width: 16.25rem;
  padding-top: 10px;
`;
const TitleOne = styled.div`
  font-size: 0.775rem;
  font-weight: 600;
  width: 100%;
  color: #ffffff;
  max-width: 16.25rem;
  padding-top: 10px;
`;

const SubTitle = styled.div`
  font-size: 0.775rem;
  color: #1d3c93;
  width: 100%;
  max-width: 16.25rem;
  padding-top: 5px;
`;
const SubTitleOne = styled.div`
  font-size: 0.775rem;
  color: #ffffff;
  width: 100%;
  max-width: 16.25rem;
  padding-top: 5px;
`;
const SubTitleLast = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #1d3c93;
  width: 100%;
  max-width: 16.25rem;
  padding-top: 13px;
`;
const TitleLast = styled.div`
  font-size: 0.7rem;
  font-weight: 600;
  color: #1d3c93;
  width: 100%;
  max-width: 16.25rem;
  padding-top: 10px;
`;

const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  width: 100%;
  background-color: #ffffff;
  height: 55.25rem;
  padding: 0.5rem;
`;

const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
  padding: 2.5rem;
  display: 100vh;
`;

const RowCorrecter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  max-width: 75rem;
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

const backButton = () => {
  history.push("/");
};

const AlertContainer = styled.div``;
const TypeRow = styled.div`
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 10px;
  font-size: 0.875rem;
  font-weight: 600;
`;
const SelectType = styled.div`
  font-size: 0.875rem;
  color: #7c828a;
  padding-left: 20px;
  padding-bottom: 10px;
`;
const BoxContainer = styled.div`
  padding: 0.625rem;
  width: 450px;
  height: 150px;
  max-width: 215px;
  background: #f5f6fd;
  border: solid #d5e0ff;
  outline: none;
  background: #f5f6fd 0% 0% no-repeat padding-box;
  border: 1px solid #d5e0ff;
  border-radius: 6px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const BoxContainerOne = styled.div`
  padding: 0.625rem;
  width: 450px;
  height: 150px;
  max-width: 215px;
  border: solid #d5e0ff;
  outline: none;
  background: #3163f0 0% 0% no-repeat padding-box;
  border: 1px solid #d5e0ff;
  border-radius: 6px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const MainBoxContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
const BoxRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: space-between;
  width: 100%;
  max-width: 458px;
  padding-top: 28px;
`;
const AlertTargetContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  max-width: 695px;
  padding-top: 28px;
`;
