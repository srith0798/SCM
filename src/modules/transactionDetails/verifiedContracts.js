import React from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "react-tabs/style/react-tabs.css";
import { history } from "../../managers/history";

export default function TransactionDetails() {
  const [activeButton, setActiveButton] = React.useState("Overview");
  const handleViewClick = (e) => {
    setActiveButton(e.target.id);
  };
  
  let url = history.location.state.url;
  let status = history.location.state.status;
  const backButton = () => {
    history.push({
      pathname: "/transactions/transaction-details?" + url,
      state:{id: url,
             status: status,
      }
    })
  };
  return (
    <>
      <MainContainer>
        <Row style={{ display: "flex", justifyContent: "space-between" }}>
          <TitleDiv>
            <img
              alt=""
              style={{ marginRight: "0.425rem", cursor: "pointer" }}
              src="/images/back.svg"
              onClick={backButton}
            />
            <Title>Transactions Details</Title>
          </TitleDiv>
          <Button>View in Explorer</Button>
        </Row>

        <Container>
          <SubHeading
            style={{ paddingTop: "0.625rem", paddingLeft: "1.25rem" }}
          >
            Txn hash
          </SubHeading>
          <div
            style={{
              paddingLeft: "1.25rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Hash>xdcabfe4184e5f9f600fe86d20ffdse2fsfbsgsgsa768b3c</Hash>
            <CopyToClipboard>
              <CopyImg src="/images/copy.svg" />
            </CopyToClipboard>
          </div>
          <TabLister>
            <TabView
              id="Overview"
              onClick={handleViewClick}
              style={{
                color: activeButton === "Overview" ? "#3163F0" : "#AEB7D0",
                display: "flex",
                paddingBottom: "0.875rem",
                borderBottom:
                  activeButton === "Overview"
                    ? "0.125rem solid #3163F0"
                    : "#AEB7D0",
              }}
            >
              <img
                alt=""
                style={{ marginRight: "0.375rem" }}
                src={
                  activeButton === "Overview"
                    ? "/images/overview.svg"
                    : "/images/overview_grey.svg"
                }
              />
              Overview
            </TabView>
            <TabView
              id="Contracts"
              onClick={handleViewClick}
              style={{
                color: activeButton === "Contracts" ? "#3163F0" : "#AEB7D0",
                display: "flex",
                paddingBottom: "0.875rem",
                borderBottom:
                  activeButton === "Contracts" ? "0.125rem solid blue" : "",
              }}
            >
              <img
                alt=""
                style={{ marginRight: "0.375rem" }}
                src={
                  activeButton === "Contracts"
                    ? "/images/contracts.svg"
                    : "/images/contract_grey.svg"
                }
              />
              Contracts
            </TabView>
            <TabView
              id="Events"
              onClick={handleViewClick}
              style={{
                color: activeButton === "Events" ? "#3163F0" : "#AEB7D0",
                display: "flex",
                paddingBottom: "0.875rem",
                borderBottom:
                  activeButton === "Events" ? "0.125rem solid #3163F0" : "",
              }}
            >
              <img
                alt=""
                style={{ marginRight: "0.375rem" }}
                src={
                  activeButton === "Events"
                    ? "/images/event_blue.svg"
                    : "/images/event_grey.svg"
                }
              />{" "}
              EventsDetails
            </TabView>
            <TabView
              id="StateChange"
              onClick={handleViewClick}
              style={{
                color: activeButton === "StateChange" ? "#3163F0" : "#AEB7D0",
                borderBottom:
                  activeButton === "StateChange"
                    ? "0.125rem solid #3163F0"
                    : "",
              }}
            >
              <img
                alt=""
                style={{ marginRight: "0.375rem", marginBottom: "4px" }}
                src={
                  activeButton === "Events"
                    ? "/images/statechange_grey.svg"
                    : "/images/statechange_grey.svg"
                }
              />
              State Change
            </TabView>
          </TabLister>{" "}
        </Container>
        <BoxContainer>
          <DetailContainer>
            <Row>
              <Heading>Contracts </Heading>
              <SubHead>App_Transactions_Validator</SubHead>
            </Row>
          </DetailContainer>
          <CommonDiv>
            <Row>
              <Heads>
                <img
                  alt=""
                  src="/images/contracts.svg"
                  style={{ width: "1rem" }}
                />
                <TextLi>Subcontracts name</TextLi>
              </Heads>
            </Row>
          </CommonDiv>
          <CommonDiv>
            <Row>
              <Head>
                <img
                  alt=""
                  src="/images/contracts.svg"
                  style={{ width: "1rem" }}
                />
                Subcontracts name
              </Head>
            </Row>
          </CommonDiv>
          <CommonDiv>
            <Row>
              <Head>
                <img
                  alt=""
                  src="/images/contracts.svg"
                  style={{ width: "1rem" }}
                />
                Subcontracts name
              </Head>
            </Row>
          </CommonDiv>
          <CommonDiv>
            <Row>
              <Head>
                <img
                  alt=""
                  src="/images/contracts.svg"
                  style={{ width: "1rem" }}
                />
                Subcontracts name
              </Head>
            </Row>
          </CommonDiv>
          <CommonDiv>
            <Row>
              <Head>
                <img
                  alt=""
                  src="/images/contracts.svg"
                  style={{ width: "1rem" }}
                />
                Subcontracts name
              </Head>
            </Row>
          </CommonDiv>
          <CommonDiv>
            <Row>
              <Head>
                <img
                  alt=""
                  src="/images/contracts.svg"
                  style={{ width: "1rem" }}
                />
                Subcontracts name
              </Head>
            </Row>
          </CommonDiv>
          <CommonDiv>
            <Row>
              <Head>
                <img
                  alt=""
                  src="/images/contracts.svg"
                  style={{ width: "1rem" }}
                />
                Subcontracts name
              </Head>
            </Row>
          </CommonDiv>
          <CommonDiv>
            <Row>
              <Head>
                <img
                  alt=""
                  src="/images/contracts.svg"
                  style={{ width: "1rem" }}
                />
                Subcontracts name
              </Head>
            </Row>
          </CommonDiv>
        </BoxContainer>
      </MainContainer>
    </>
  );
}
const SubHead = styled.div`
  font-size: 20px;
  font-weight: 600px;
  letter-spacing: 0px;
  color: #102c78;
  font-size: 15px;
`;
const DetailContainer = styled.div`
  padding: 15px;
`;

const CommonDiv = styled.div`
  width: 100%;
  padding-left: 10px;
`;

const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
  padding: 50px;
  height: 100vh;
`;

const Button = styled.button`
  background-image: url("/images/globe.svg");
  background-repeat: no-repeat;
  background-position: 8px;
  padding-left: 21px;
  background-size: 14px;
  position: relative;
  background-color: #ffffff;
  color: #3163f0;
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
  height: 167px;
  margin-top: 20px;
  padding: 20px;
`;
const BoxContainer = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  width: 100%;
  height: auto;
  margin-top: 20px;
  padding: 10px;
`;
const Hash = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 10px;
  font-weight: 600;
  border: none;
  width: 100%;
  max-width: 385px;
`;
const SubHeading = styled.div`
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;
  color: #102c78;
`;

const CopyImg = styled.img`
  margin-left: 9%;
  cursor: pointer;
`;

const Heading = styled.div`
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  color: #102c78;
  opacity: 1;
  width: 100%;
  max-width: 110px;
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  font: normal normal 600 14px/17px Inter;
  opacity: 1;
  width 150px;
  height: 50px;
  &:hover{
    background-color: #3163F0;
    color: #ffffff;
  }
  
`;
const Heads = styled.div`
 display: flex;
  align-items: center;
  font: normal normal 600 14px/17px Inter;
  opacity: 1;
  width 9.375rem;
  height: 3.125rem;
  &:hover{
    background-color: #3163F0;
    color: #ffffff;
  }
`;
const TabLister = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 33.125rem;
  margin: 1.563rem 0rem 0.625rem 1.063rem;
  cursor: pointer;
`;
const TabView = styled.div`
  padding: 0.313rem 0.5rem 0.313rem 0.5rem;
`;
const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 267px;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
`;
const Title = styled.div``;

const TextLi = styled.div`
  text-align: left;
  font-size: 0.875rem;
  font-weight: 600;
  font-size: 0.875rem;
`;
