import React, { useEffect } from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "react-tabs/style/react-tabs.css";
import { history } from "../../managers/history";
import utility from "../../utility";
import Tooltip from "@mui/material/Tooltip";
import ContractsService from "../../services/contractsService";

export default function TransactionDetails() {
  const [eventToolTip, seteventToolTip] = React.useState(false);
  const [statusToolTip, setstatusToolTip] = React.useState(false);
  const [copyToolTip, setcopyToolTip] = React.useState(false);
  const [row, setRow] = React.useState([]);

  const [activeButton, setActiveButton] = React.useState("");
  const handleViewClick = (e) => {
    setActiveButton(e.target.id);
  };

  let url = history.location.state.id;
  let status = history.location.state.status;
  const searchTransaction = async (searchValues, searchKeys) => {
    try {
      const requestData = {
        searchValue: searchValues,
        searchKeys: searchKeys,
        skip: 0,
        limit: 1,
      };
      const response = await ContractsService.getTransactionsList(requestData);
      setRow(response.transactionList[0]);
    } catch (e) {}
  };
  useEffect(() => {
    searchTransaction(url, ["hash"]);
  }, [url]);
  const backButton = () => {
    history.push({
      pathname: "/transactions/transaction-details?" + url,
      state: { id: url, status: status },
    });
  };
  return (
    <>
      <MainContainer>
        <SubContainer>
          <TitleDiv>
            <Title>
              <img
                alt=""
                src="/images/back.svg"
                style={{ marginRight: "8px" }}
                onClick={() => backButton()}
              />
              Transaction Details
            </Title>
          </TitleDiv>
          <Button
            onClick={() =>
              window.open(
                `https://observer.xdc.org/transaction-details/${row.hash}`
              )
            }
          >
            View in Observatory
          </Button>
        </SubContainer>

        <Container>
          <SubHeading
            style={{ paddingTop: "0.625rem", paddingLeft: "1.25rem" }}
          >
            Txn hash
          </SubHeading>
          <TopContainer>
            <HashMobile>{utility.truncateTxnAddress(`${row.hash}`)}</HashMobile>
            <HashDesktop>{row.hash}</HashDesktop>
            <CopyToClipboard
              text={row.hash}
              onCopy={() => setcopyToolTip(true)}
            >
              <Tooltip title={copyToolTip ? "copied" : "copy to clipboard"}>
                <CopyToClipboardImage src="/images/copy.svg" />
              </Tooltip>
            </CopyToClipboard>
            {/* <SuccessButton check={status}>Success</SuccessButton> */}
          </TopContainer>

          <TabLister>
            <TabView
              id="Overview"
              onClick={handleViewClick}
              style={{
                color: activeButton === "Overview" ? "#3163F0" : "#AEB7D0",
                display: "flex",
                paddingBottom: "1rem",
                paddingLeft: "10px",
                borderBottom:
                  activeButton === "Overview"
                    ? "0.3rem solid #3163F0"
                    : "#AEB7D0",
              }}
            >
              <TabImage
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
                paddingBottom: "1rem",
                borderBottom:
                  activeButton === "Contracts" ? "0.3rem solid #3163F0" : "",
              }}
            >
              <TabImage
                alt=""
                style={{ marginRight: "0.375rem" }}
                src={
                  activeButton === "Contracts"
                    ? "/images/contract_blue.svg"
                    : "/images/contract_grey.svg"
                }
              />
              Contracts
            </TabView>
            <TabView
              id="EventsDetails"
              onClick={handleViewClick}
              style={{
                color: activeButton === "EventsDetails" ? "#3163F0" : "#AEB7D0",
                display: "flex",
                paddingBottom: "1rem",
                borderBottom:
                  activeButton === "EventsDetails"
                    ? "0.3rem solid #3163F0"
                    : "",
              }}
            >
              <TabImage
                alt=""
                style={{ marginRight: "0.375rem" }}
                src={
                  activeButton === "EventsDetails"
                    ? "/images/event_blue.svg"
                    : "/images/event_grey.svg"
                }
              />
              Events
              <Tooltip
                open={eventToolTip}
                onOpen={() => seteventToolTip(true)}
                onClose={() => seteventToolTip(false)}
                disableFocusListener
                title="events details"
              >
                <ToolTipIcon
                  onClick={() => seteventToolTip(!eventToolTip)}
                  src="/images/tool-tip.svg"
                />
              </Tooltip>
            </TabView>
            <TabView
              id="StateChange"
              onClick={handleViewClick}
              style={{
                color: activeButton === "StateChange" ? "#3163F0" : "#AEB7D0",
                display: "flex",
                paddingBottom: "1rem",
                whiteSpace: "nowrap",
                borderBottom:
                  activeButton === "StateChange" ? "0.3rem solid #3163F0" : "",
              }}
            >
              <TabImage
                alt=""
                style={{
                  marginRight: "0.375rem",
                }}
                src={
                  activeButton === "StateChange"
                    ? "/images/statechange_blue.svg"
                    : "/images/statechange_grey.svg"
                }
              />
              State changes
              <Tooltip
                open={statusToolTip}
                onOpen={() => setstatusToolTip(true)}
                onClose={() => setstatusToolTip(false)}
                disableFocusListener
                title="state Change details"
              >
                <ToolTipIcon
                  onClick={() => setstatusToolTip(!statusToolTip)}
                  src="/images/tool-tip.svg"
                />
              </Tooltip>
            </TabView>
          </TabLister>
        </Container>
        <BoxContainer>
          <DetailContainer>
            <Row>
              <Heading>Contracts </Heading>
              <SubHead>App_Transactions_Validator</SubHead>
            </Row>
          </DetailContainer>
          <CommonDiv>
            <RowData>
              <Heads>
                <Icon alt="" src="/images/contracts.svg" />
                <TextLi>Subcontracts name</TextLi>
              </Heads>
            </RowData>
          </CommonDiv>
          <CommonDiv>
            <RowData>
              <Heads>
                <Icon alt="" src="/images/contracts.svg" />
                Subcontracts name
              </Heads>
            </RowData>
          </CommonDiv>
          <CommonDiv>
            <RowData>
              <Heads>
                <Icon alt="" src="/images/contracts.svg" />
                Subcontracts name
              </Heads>
            </RowData>
          </CommonDiv>
          <CommonDiv>
            <RowData>
              <Heads>
                <Icon alt="" src="/images/contracts.svg" />
                Subcontracts name
              </Heads>
            </RowData>
          </CommonDiv>
          <CommonDiv>
            <RowData>
              <Heads>
                <Icon alt="" src="/images/contracts.svg" />
                Subcontracts name
              </Heads>
            </RowData>
          </CommonDiv>
          <CommonDiv>
            <RowData>
              <Heads>
                <Icon alt="" src="/images/contracts.svg" />
                Subcontracts name
              </Heads>
            </RowData>
          </CommonDiv>
          <CommonDiv>
            <RowData>
              <Heads>
                <Icon alt="" src="/images/contracts.svg" />
                Subcontracts name
              </Heads>
            </RowData>
          </CommonDiv>
          <CommonDiv>
            <RowData>
              <Heads>
                <Icon alt="" src="/images/contracts.svg" />
                Subcontracts name
              </Heads>
            </RowData>
          </CommonDiv>
        </BoxContainer>
      </MainContainer>
    </>
  );
}

const SubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 3.125rem;
  align-items: center;
  padding-bottom: 15px;

  @media (min-width: 300px) and (max-width: 485px) {
    flex-direction: column;
  }
`;

const RowData = styled.div`
  display: flex;
  padding-left: 16px;
  width: 250px;
  height: 50px;
  &:hover {
    background-color: #3163f0;
    color: #ffffff;
  }
`;
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
const TopContainer = styled.div`
  padding-left: 1.25rem;
  display: flex;
  align-items: center;
`;
const ToolTipIcon = styled.img`
  width: 0.75rem;
  cursor: pointer;
  margin-left: 0.513rem;
  margin-bottom: 1px;
  @media (min-width: 300px) and (max-width: 767px) {
    margin-bottom: 6px;
  }
`;

const CommonDiv = styled.div`
  width: 100%;
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
  background-position: 0.5rem;
  padding-left: 1.75rem;
  background-size: 1rem;
  position: relative;
  background-color: #ffffff;
  color: #3163f0;
  border: none;
  border-radius: 0.25rem;
  width: 170px;
  white-space: nowrap;
  height: 2.125rem;
  font-size: 0.875rem;
  @media (min-width: 300px) and (max-width: 485px) {
    display: none;
  }
`;
const Container = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  width: 100%;
  height: 9.6rem;
  margin-top: 0.5rem;
  width: 100%;
  overflow: hidden;
  @media (min-width: 300px) and (max-width: 768px) {
    background-color: #ffffff;
    border-radius: 0.375rem;
    width: 100%;
    height: 8rem;
    margin-top: 1.25rem;
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: 375px) {
    height: 7.4rem;
  }
`;
const BoxContainer = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  width: 100%;
  height: auto;
  margin-top: 20px;
`;
const SubHeading = styled.div`
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;
  color: #102c78;
`;

const Icon = styled.img`
  width: 1rem;
  cursor: pointer;
  margin-right: 2px;
`;

const Heading = styled.div`
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  color: #3163f0;
  opacity: 1;
  width: 100%;
  max-width: 110px;
`;

const Heads = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  white-space: nowrap;
  align-items: center;
  font: normal normal 600 14px/17px Inter;
  height: 3.125rem;
  &:hover {
    background-color: #3163f0;
    color: #ffffff;
  }
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
const HashDesktop = styled.div`
  display: flex;
  font-size: 14px;
  flex-flow: row nowrap;
  margin-top: 0.625rem;
  margin-bottom: 10px;
  border: none;
  color: #191919;
  font-weight: 500;
  width: 100%;
  max-width: 30.063rem;
  @media (max-width: 767px) {
    display: none;
  }
`;
const HashMobile = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 0.625rem;
  margin-bottom: 10px;
  border: none;
  width: 60%;
  max-width: 30.063rem;
  @media (min-width: 767px) {
    display: none;
  }
`;

const CopyToClipboardImage = styled.img`
  margin-left: 110px;
  cursor: pointer;
  @media (min-width: 340px) and (max-width: 767px) {
    margin-left: 10px;
  }
  @media (min-width: 1024px) and (max-width: 1075px) {
    margin-left: 84px;
  }
`;

const TabLister = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 37.125rem;
  margin: 1.563rem 0rem 0.625rem 1.063rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    min-height: 45px;
    font-size: 13px;
    overflow-y: hidden;
    margin: 0rem 0rem 0rem 0rem;
    white-space: nowrap;
    padding-left: 10px;
    max-width: 34.125rem;
  }
  @media (max-width: 414px) {
    display: flex;
    justify-content: space-between;
    min-height: 45px;
    font-size: 0.6rem;
    overflow-y: hidden;
    margin: 0rem 0rem 0rem 0rem;
    white-space: nowrap;
    padding-left: 0px;
  }
`;
const TabImage = styled.img`
  width: 22px;
  @media (min-width: 300px) and (max-width: 414px) {
    width: 13px;
    margin-bottom: 5px;
  }
`;
