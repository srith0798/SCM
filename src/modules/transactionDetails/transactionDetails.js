import React, { useEffect } from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "react-tabs/style/react-tabs.css";
import EventsDetails from "./eventsDetails";
import StateChange from "./stateChange";
import SubContracts from "./subContracts";
import { history } from "../../managers/history";
import utility from "../../utility";
import Tooltip from "@mui/material/Tooltip";
import ContractsService from "../../services/contractsService";
import moment from "moment";
import AddAlerts from "../popup/addAlerts";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import ShowLoader from "../../common/components/showLoader";
import { base16AteliersulphurpoolLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { sessionManager } from "../../managers/sessionManager";
import { cookiesConstants } from "../../constants";
SyntaxHighlighter.registerLanguage("javascript", js);

export default function TransactionDetails() {
  const [eventToolTip, seteventToolTip] = React.useState(false);
  const [statusToolTip, setstatusToolTip] = React.useState(false);
  const [copyToolTip, setcopyToolTip] = React.useState(false);
  const [row, setRow] = React.useState([]);
  const [activeButton, setActiveButton] = React.useState("Overview");
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  // const [input, setInput] = React.useState("");
  const [functionOccured, setFunctionOccured] = React.useState("");
  const [inputDesktop, setInputDesktop] = React.useState("");
  const [inputCopy, setInputCopy] = React.useState("");
  const [showInputData, setShowInputData] = React.useState(false);
  // const [showOutputData, setShowOutputData] = React.useState(false);
  const [contractName, setContractName] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const [url, setUrl] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [selected, setSelected] = React.useState("");
  const [gasPriceUSD, setGasPriceUSD] = React.useState(0);
  const [functionName, setfunctionName] = React.useState("");

  const wei = 1000000000;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleViewClick = (e) => {
    setActiveButton(e.target.id);
  };
  const backButton = () => {
    history.push("/transactions");
  };

  const getTransaction = async (hash) => {
    try {
      const requestData = {
        hash: hash,
      };
      const response = await ContractsService.getTransactionByHash(requestData);
      setRow(response);
      setSelected(response.contractAddress); //validation
      // setInput(utility.truncateTxnAddress(response.input));
      setInputDesktop(utility.truncateTxnAddressDesktop(response.input));
      setInputCopy(response.input);
      setFrom(utility.truncateTxnAddress(response.from));
      setTo(utility.truncateTxnAddress(response.to));
      setStatus(response.status ? "Success" : "Fail");
      let check = getfunction(response.function);
      setfunctionName(check);
      getContractByAddress(response.contractAddress, check);
      getGasPriceInUSD(response.gasPrice);
    } catch (e) {}
  };

  function getfunction(val) {
    return val?.substring(0, 10);
  }
  const getContractByAddress = async (address, func) => {
    let userId = sessionManager.getDataFromCookies(cookiesConstants.USER_ID);
    try {
      let requestData = {
        userId: userId,
      };
      setLoader(true);
      let add = selected ? selected : address;
      const response = await ContractsService.getContractByAddress(
        requestData,
        add
      );
      setContractName(response.contractName);
      let arr = response.sourceCode.split("}");
      let final = arr.filter((row) => {
        return row.includes(`${func}`);
      });

      setFunctionOccured(final[final.length - 1]);
      setLoader(false);
    } catch (e) {}
  };

  const getGasPriceInUSD = async (value) => {
    let requestData = {
      gasPrice: value,
    };
    setLoader(true);
    const [error, response] = await utility.parseResponse(
      ContractsService.getGasPriceInUSD(requestData)
    );
    if (error || !response || response.length === 0) {
      setLoader(false);
      setGasPriceUSD("");
      return;
    }
    setLoader(false);
    setGasPriceUSD(response);
  };

  useEffect(() => {
    let id =
      history?.location?.state?.id ||
      history?.location?.search?.replace("?", "");
    setUrl(id);
    let status = history?.location?.state?.status;
    setStatus(status);
    let selected = history?.location?.state?.selected;
    setSelected(selected);
    getTransaction(id);
    setLoader(true);
  }, [url]);

  const MainContainer = styled.div`
    background: #ecf0f7 0% 0% no-repeat padding-box;
    width: 100%;
    padding: 2.125rem;
    display: 100%;
    height: 123vh;
    @media (min-width: 340px) and (max-width: 768px) {
      padding: 1.2rem;
    }
  `;
  const Input = styled.div`
    margin-right: 20px;
  `;
  const TopContainer = styled.div`
    padding-left: 1.25rem;
    display: flex;
    align-items: center;
    @media (min-width: 300px) and (max-width: 768px) {
      margin-left: 2px !important;
    }
  `;

  const TabImage = styled.img`
    width: 22px;
    @media (min-width: 300px) and (max-width: 500px) {
      width: 13px;
      margin-bottom: 2px;
    }
  `;

  const TitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 267px;
    font-size: 24px;
    font-weight: 500;
    @media (min-width: 300px) and (max-width: 767px) {
      font-size: 15px;
      margin-left: 10px;
    }
  `;
  const Title = styled.div`
    white-space: nowrap;
    font-family: "Inter", Medium,;
    font-weight: 600;
    @media (min-width: 340px) and (max-width: 767px) {
      align-items: left;
    }
  `;
  const FunctionContainer = styled.div`
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 0.375rem;
    opacity: 1;
    margin-top: 1.25rem;
    height: auto;
    white-space: nowrap;
    margin-bottom: 20px;
    @media (min-width: 300px) and (max-width: 485px) {
      flex-direction: column;
      display: flex;
      overflow-y: hidden;
    }
  `;
  const TokenTransferDiv = styled.div`
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 0.375rem;
    opacity: 1;
    margin-top: 1.25rem;
    height: auto;
    white-space: nowrap;
    margin-bottom: 20px;
    display: none;
  `;

  const SubHead = styled.div`
    font-size: 14px;
    display: flex;
    font-weight: 500;
    justify-content: start;
    width: 100%;
    // overflow: hidden;
    white-space: nowrap;
  `;

  const SubHeadBlue = styled.div`
    font-size: 0.85rem;
    display: flex;
    color: #416be0;
    cursor: pointer;
    white-space: pre;
    margin-left: 15px;
  `;
  const SubHeadBlueFunc = styled.div`
    font-size: 0.85rem;
    display: flex;
    color: #416be0;
    cursor: pointer;
    white-space: pre;
    font-weight: 500;
    @media (min-width: 300px) and (max-width: 767px) {
      margin-left: 5px;
    }
  `;
  const SubHeadBlueMob = styled.div`
    font-size: 0.85rem;
    display: flex;
    color: #416be0;
    cursor: pointer;
    white-space: pre;
    @media (min-width: 300px) and (max-width: 767px) {
      /* margin-left: 125px; */
      margin-right: 25%;
    }
  `;
  const CommonDiv = styled.div`
    border-bottom: 0.031rem #eaf1ec solid;
    padding: 0.813rem;
    @media (min-width: 300px) and (max-width: 394px) {
      width: 100%;
      min-width: 200px;
      max-width: 600px;
      margin-right: 10%;
    }
    @media (min-width: 395px) and (max-width: 767px) {
      width: 100%;
      min-width: 200px;
      max-width: 600px;
    }
  `;
  const CommonInputDiv = styled.div`
    border-bottom: 0.031rem #eaf1ec solid;
    padding: 0.813rem;
    display: flex;
    max-width: fit-content;
    justify-content: space-between;
    @media (min-width: 300px) and (max-width: 1023px) {
      flex-direction: column;
      row-gap: 20px;
    }
  `;
  const MidContainer = styled.div`
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 0.375rem;
    margin-top: 1.25rem;
    height: auto;
    overflow: auto;
  `;
  const StackContainer = styled.div`
    background: #ffffff 0% 0% no-repeat padding-box;
    background-repeat: no-repeat;
    // background-color: #f5f6fd;
    border-radius: 0.375rem;
    padding: 1.875rem;
    margin-top: 1.25rem;
    height: fit-content;
  `;

  const DataDivContainer = styled.div`
    background: #ffffff 0% 0% no-repeat padding-box;
    background-repeat: no-repeat;
    border-radius: 0.375rem;
    padding: 1rem;
    height: fit-content;
  `;

  const BackgroundChanger = styled.div`
    width: 50%;
    height: 106px;
    background-repeat: no-repeat;
    background: #f7f8fd 0% 0% no-repeat padding-box;
    border-radius: 6px;
    opacity: 1;
    padding: 10px;
    @media (min-width: 300px) and (max-width: 1371px) {
      width: 100%;
      padding: 1.5rem;
    }
  `;

  const FlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 350px;
  `;

  const FlexDivMob = styled.div`
    display: flex;
    @media (min-width: 300px) and (max-width: 767px) {
      margin-left: 10px;
    }
  `;

  const InputDataDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    overflow-y: scroll;
  `;

  const LastContainer = styled.div`
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 0.375rem;
    margin-top: 1.25rem;
    height: fit-content;
    max-height: 70rem;
    /* height: 18.75rem; */
    padding: 2rem;
    font-weight: 500;
  `;

  const Heading = styled.div`
    text-align: left;
    font-size: 0.875rem;
    font-weight: 500;
    color: #102c78;
    width: 100%;
    max-width: 16.25rem;
    @media (min-width: 0px) and (max-width: 767px) {
      min-width: 180px;
      /* max-width: max-content; */
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      max-width: 11.25rem;
    }
  `;

  const TransactionNumber = styled.div`
    color: #416be0;
    font-weight: 500;
  `;

  const From = styled.div`
    text-align: left;
    font-size: 0.875rem;
    font-weight: 500;
    color: #102c78;
    width: 100%;
    max-width: 16.25rem;
    @media (min-width: 0px) and (max-width: 767px) {
      /* min-width: 170px; */
      max-width: max-content;
    }
  `;

  const InputHeading = styled.div`
    text-align: left;
    font-size: 0.875rem;
    font-weight: 500;
    color: #102c78;
    width: 100%;
    max-width: 16.25rem;
    @media (min-width: 768px) and (max-width: 1024px) {
      max-width: 11.25rem;
    }
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
      font-size: 11px;
      width: 140px;
    }
  `;
  const SubContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 3.125rem;
    align-items: center;
    padding-bottom: 15px;

    @media (min-width: 300px) and (max-width: 485px) {
    }
  `;
  const ScrollableDiv = styled.div`
    overflow: auto;
    height: 760px;
  `;

  const Container = styled.div`
    background-color: #ffffff;
    border-radius: 0.375rem;
    width: 100%;
    height: 9.2rem;
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
    width: 40%;
    max-width: 30.063rem;
    @media (min-width: 767px) {
      display: none;
    }
  `;
  const SubHeading = styled.div`
    font-size: 0.8rem;
    font-weight: 500;
    color: #102c78;
    display: flex;
  `;

  const CopyToClipboardImg = styled.img`
    margin-left: 150px;
    cursor: pointer;
    @media (min-width: 340px) and (max-width: 767px) {
      margin-left: 10px;
    }
    @media (min-width: 767px) and (max-width: 1024px) {
      margin-left: 70px;
    }
  `;
  const CopyToClipboardImage = styled.img`
    margin-left: 100px;
    cursor: pointer;
    @media (min-width: 340px) and (max-width: 767px) {
      margin-left: 2px;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      margin-left: 83px;
    }
    @media (min-width: 1024px) and (max-width: 1075px) {
      margin-left: 84px;
    }
  `;

  const StackTraceCheckDiv = styled.div`
    display: ${(props) => (props.check === "Fail" ? "block" : "none")};
  `;

  const TokenTransferCheckDiv = styled.div`
    display: ${(props) => (props.check === "Success" ? "block" : "none")};
  `;

  const SearchBar = styled.input`
    height: 2.188rem;
    width: 12.5rem;
    border: none;
    margin-bottom: 1.5rem;
    border-radius: 0.25rem;
    background-image: url("/images/search-icon.svg");
    background-repeat: no-repeat;
    background-color: #f5f6fd;
    background-position: 0.5rem;
    padding-left: 1.875rem;
    background-size: 0.75rem;
    position: relative;
    font-weight: 400;
    /* &:focus: {
    outline: none;
    border: none;
  } */
  `;
  const TabLister = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 37.125rem;
    margin: 1.563rem 0rem 0.625rem 1.063rem;
    cursor: pointer;
    @media (min-width: 300px) and (max-width: 767px) {
      display: flex;
      justify-content: space-between;
      min-height: 45px;
      font-size: 0.6rem;
      overflow-y: hidden;
      margin: 0rem 0rem 0rem 0.75rem;
      white-space: nowrap;
      padding-left: 0px;
      max-width: 20.125rem;
    }
  `;
  const TabView = styled.div`
    padding: 0.313rem 0.5rem 0.313rem 0.5rem;
    display: flex;
    padding-bottom: 1.2rem;
    font-weight: 500;
    @media (min-width: 320px) and (max-width: 425px) {
      padding: 1rem 0.5rem 0.313rem 0.5rem;
      padding-bottom: 1.2rem;
    }
  `;
  const ToolTipIcon = styled.img`
    width: 0.75rem;
    cursor: pointer;
    margin-left: 0.513rem;
    @media (min-width: 300px) and (max-width: 767px) {
      margin-bottom: 6px;
      display: none;
    }
  `;
  const FailButton = styled.div`
    color: #ce1a1a;
    padding: 0px 0px 0px 18px;
    width: 100%;
    margin-left: 1rem;
    display: ${(props) => (props.check === "Fail" ? "flex" : "none")};
    align-items: center;
    width: 69px;
    height: 25px;
    background: #fde7e7 0% 0% no-repeat padding-box;
    font-weight: 500;
    border: 1px solid #fda6a6;
    border-radius: 4px;
    opacity: 1;
    margin-right: 12px;
    @media (min-width: 300px) and (max-width: 767px) {
      width: 87px;
    }
    @media (min-width: 300px) and (max-width: 650px) {
      margin-left: auto;
      margin-right: 9px;
    }
  `;

  const SuccessButton = styled.div`
    color: #00a58c;
    padding: 0px 18px 0px 18px;
    width: 100%;
    margin-left: 1rem;
    font-weight: 500;
    display: ${(props) => (props.check === "Success" ? "flex" : "none")};
    align-items: center;
    width: 99px;
    height: 25px;
    background: #e0fffa 0% 0% no-repeat padding-box;
    border: 1px solid #99c7c0;
    border-radius: 4px;
    opacity: 1;
    margin-right: 12px;
    /* justify-content: center; */
    @media (min-width: 300px) and (max-width: 650px) {
      margin-left: auto;
      margin-right: 9px;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      padding: 0px 9px 0px 13px;
      margin-left: 1.7rem;
      width: 92px;
    }
    @media (max-width: 820px) {
      padding: 0px 9px 0px 13px;
      // margin-left: 1rem;
    }
  `;

  const AlertButton = styled.div`
    top: 202px;
    left: 1016px;
    width: 100px;
    height: 27px;
    font-size: 14px;
    font-weight: 500;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #3163f0;
    border-radius: 4px;
    color: #3163f0;
    margin-left: 2px;
    padding-top: 2px;
    padding-left: 8px;
    white-space: nowrap;
    cursor: pointer;
    @media (min-width: 1024px) and (max-width: 1110px) {
      display: none;
    }
    @media (max-width: 1024px) {
      display: none;
    }
  `;

  const CodeMainContainer = styled.div`
    width: 100%;
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: #ffffff;
    padding-top: 0px;
    @media (min-width: 300px) and (max-width: 414px) {
      max-width: 90vw;
      margin-top: 10px;
    }
  `;
  const CodeContainer = styled.div`
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 6px;
    width: 100%;
    max-width: 100vw;
    background-color: #ffffff;
    height: 100%;
    max-height: 430px;
    overflow-y: scroll;
  `;

  const CodeDiv = styled.div`
    width: 100%;
    @media (min-width: 300px) and (max-width: 414px) {
      width: 100%;
    }
  `;

  return (
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
        <SubHeading style={{ paddingTop: "8px", paddingLeft: "1.25rem" }}>
          Txn hash
        </SubHeading>
        <TopContainer>
          <HashMobile>{utility.truncateTxnAddress(`${row.hash}`)}</HashMobile>
          <HashDesktop>{row.hash}</HashDesktop>
          <CopyToClipboard text={row.hash} onCopy={() => setcopyToolTip(true)}>
            <Tooltip title={copyToolTip ? "copied" : "copy to clipboard"}>
              <CopyToClipboardImage src="/images/copy.svg" />
            </Tooltip>
          </CopyToClipboard>
          <FailButton check={status}>Fail</FailButton>
          <SuccessButton check={status}>Success</SuccessButton>
          <AlertButton onClick={handleClickOpen}>
            <img
              onClick={handleClickOpen}
              alt=""
              style={{
                width: "15px",
                marginRight: "6px",
                marginBottom: "3px",
                cursor: "pointer",
              }}
              src="/images/addalert.svg"
            />
            Add alert
          </AlertButton>
          {open && (
            <AddAlerts
              click={handleClose}
              status={status}
              name={contractName}
              address={row.to ? row.to : row.contractAddress}
              network={row.network}
            />
          )}
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
              id="Overview"
              onClick={handleViewClick}
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
              id="Contracts"
              onClick={handleViewClick}
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
                activeButton === "EventsDetails" ? "0.3rem solid #3163F0" : "",
            }}
          >
            <TabImage
              alt=""
              id="EventsDetails"
              onClick={handleViewClick}
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
          {/* <TabView
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
              id="StateChange"
              onClick={handleViewClick}
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
          </TabView> */}
        </TabLister>
      </Container>
      {activeButton === "Overview" && (
        <ScrollableDiv>
          <MidContainer>
            <CommonDiv>
              <Row>
                <Heading>Network</Heading>
                <SubHead>{row.network}</SubHead>
              </Row>
            </CommonDiv>
            {/* <CommonDiv
              style={{ display: status === "Success" ? "none" : "" }}
              check={status}
            >
              <Row>
                <Heading>Error</Heading>
                <SubHead>Out of Gas</SubHead>
              </Row>
            </CommonDiv> */}
            <CommonDiv>
              <Row>
                <Heading>Block</Heading>
                <SubHead style={{ color: "#416BE0" }}>
                  {row.blockNumber}
                </SubHead>
              </Row>
            </CommonDiv>
            <CommonDiv>
              <Row>
                <Heading>Transactions index</Heading>
                <SubHead>{row.transactionIndex}</SubHead>
              </Row>
            </CommonDiv>
            <CommonDiv>
              <Row>
                <Heading>From</Heading>
                <SubHead>
                  <TransactionNumber>{row.from}</TransactionNumber>
                  <CopyToClipboard
                    text={row.from}
                    onCopy={() => setcopyToolTip(true)}
                  >
                    <Tooltip
                      title={copyToolTip ? "copied" : "copy to clipboard"}
                    >
                      <CopyToClipboardImg
                        // onClick={() => setcopyToolTip(true)}
                        src="/images/copy.svg"
                      />
                    </Tooltip>
                  </CopyToClipboard>
                </SubHead>
              </Row>
            </CommonDiv>
            <CommonDiv>
              <Row>
                <Heading>To</Heading>
                <SubHead>
                  <TransactionNumber>{row.to}</TransactionNumber>
                  <CopyToClipboard
                    text={row.to}
                    onCopy={() => setcopyToolTip(true)}
                  >
                    <Tooltip
                      title={copyToolTip ? "copied" : "copy to clipboard"}
                    >
                      <CopyToClipboardImg src="/images/copy.svg" />
                    </Tooltip>
                  </CopyToClipboard>
                </SubHead>
              </Row>
            </CommonDiv>
            <CommonDiv>
              <Row>
                {" "}
                <Heading>Timestamp</Heading>
                <SubHead>
                  {/* {`${
                    (row?.createdOn &&
                      moment(row.createdOn)
                        .tz("Asia/Calcutta")

                        .format("MMM DD, YYYY, hh:mm A")) ||
                    ""
                  } ${("Asia/Calcutta" && utility.getUtcOffset("Asia/Calcutta")) || ""}`} */}
                  {row.timestamp ? (
                    <div>
                      {moment(row.timestamp * 1000)
                        .utc()
                        .format("lll")}
                      {" " + "UTC"}
                    </div>
                  ) : (
                    ""
                  )}

                  {/* {moment(row.createdOn).fromNow() +
                  " " +
                  "(" +
                  new Date(row.createdOn).toLocaleString("en-US") +
                  ")"} */}
                </SubHead>
              </Row>
            </CommonDiv>
            <CommonDiv>
              <Row>
                <Heading>Value</Heading>
                <SubHead>{row.value ? <div>{row.value} XDC</div> : ""}</SubHead>
              </Row>
            </CommonDiv>
            <CommonDiv>
              <Row>
                <Heading>Nonce</Heading>
                <SubHead>{row.nonce}</SubHead>
              </Row>
            </CommonDiv>
            <CommonDiv>
              <Row>
                <Heading>Gas Used</Heading>
                <SubHead>
                  {row.gasUsed ? (
                    <div>{new Intl.NumberFormat().format(row.gasUsed)}</div>
                  ) : (
                    ""
                  )}
                </SubHead>
              </Row>
            </CommonDiv>
            <CommonDiv>
              <Row>
                <Heading>Gas Price</Heading>
                <SubHead>
                  {row.gasPrice ? (
                    <div>
                      {(row.gasPrice / 1000000000000000000)
                        .toFixed(12)
                        .toLocaleString("fullwide", { useGrouping: false })
                        .replace(/\.?0+$/, "") || 0}{" "}
                      XDC ($
                      {gasPriceUSD.toFixed(12) || 0} )
                    </div>
                  ) : (
                    ""
                  )}
                </SubHead>
              </Row>
            </CommonDiv>
            <CommonDiv>
              <Row>
                <Heading>Transaction Fee</Heading>
                <SubHead>
                  {row.gasUsed ? (
                    <div>
                      {((row.gasPrice * row.gasUsed) / 1000000000000000000)
                        .toFixed(12)
                        .replace(/\.?0+$/, "") || 0}{" "}
                      XDC
                    </div>
                  ) : (
                    ""
                  )}
                </SubHead>
              </Row>
            </CommonDiv>
            <CommonDiv>
              <Row>
                <Heading>Raw input</Heading>
                <SubHead>
                  <Input>
                    {/* directly set utility function */}
                    <TransactionNumber>{inputDesktop}</TransactionNumber>
                  </Input>
                  <CopyToClipboard
                    text={inputCopy}
                    onCopy={() => setcopyToolTip(true)}
                  >
                    <Tooltip
                      title={copyToolTip ? "copied" : "copy to clipboard"}
                    >
                      <CopyToClipboardImg src="/images/copy.svg" />
                    </Tooltip>
                  </CopyToClipboard>{" "}
                </SubHead>
              </Row>
            </CommonDiv>
          </MidContainer>
          <FunctionContainer>
            <CommonDiv>
              <Row>
                <Heading>Function: </Heading>
                <SubHeadBlueFunc>{row.function}</SubHeadBlueFunc>
              </Row>
            </CommonDiv>
            <CommonDiv>
              <Row>
                <InputHeading>Input:</InputHeading>
                <SubHeadBlueMob
                  onClick={() => setShowInputData(!showInputData)}
                >
                  view data
                  {showInputData === false ? (
                    <img
                      style={{ marginLeft: "2px" }}
                      alt=""
                      src="/images/arrrow.svg"
                    />
                  ) : (
                    <img
                      style={{ marginLeft: "2px" }}
                      alt=""
                      src="/images/input-up.svg"
                    />
                  )}
                </SubHeadBlueMob>
              </Row>

              {showInputData === true ? (
                <DataDivContainer>
                  <BackgroundChanger>
                    <InputDataDiv>
                      <SubHeadBlue>
                        {"{" +
                          "\n" +
                          '"_to"' +
                          ":" +
                          '"' +
                          row.to +
                          '"' +
                          "\n" +
                          '"_value"' +
                          ":" +
                          '"' +
                          row.value +
                          '"' +
                          "\n" +
                          "}"}
                      </SubHeadBlue>
                    </InputDataDiv>
                  </BackgroundChanger>
                </DataDivContainer>
              ) : (
                ""
              )}
            </CommonDiv>
            <CommonDiv>
              <Row>
                <InputHeading>Output </InputHeading>
                <SubHeadBlueMob>
                  veiw data
                  <img
                    style={{ marginLeft: "2px" }}
                    alt=""
                    src="/images/arrrow.svg"
                  />
                </SubHeadBlueMob>
              </Row>
            </CommonDiv>
            <CommonInputDiv>
              <div>
                <Row>
                  <Heading>Caller Address </Heading>
                </Row>
                <Row>
                  <SubHeading
                    style={{ fontWeight: "400", marginRight: "40px" }}
                  >
                    {row.from}
                  </SubHeading>
                </Row>
              </div>
              <div>
                <Row>
                  <Heading>Contract Address </Heading>
                </Row>
                <Row>
                  <SubHeading
                    style={{ fontWeight: "400", marginRight: "40px" }}
                  >
                    {row.contractAddress}
                  </SubHeading>
                </Row>
              </div>
            </CommonInputDiv>
          </FunctionContainer>
          <TokenTransferDiv>
            <CommonDiv>
              <Row>
                <Heading>From:</Heading>
                <SubHeadBlue>xdcabfe4184e5f9.....fsfbsgsgsa768b3</SubHeadBlue>
              </Row>
            </CommonDiv>
            <CommonDiv>
              <Row>
                <Heading>To:</Heading>
                <SubHeadBlue>xdcabfe4184e5f9......2fsfbsgsgsa768b3</SubHeadBlue>
              </Row>
            </CommonDiv>
          </TokenTransferDiv>
          {/* <StackTraceCheckDiv check={status}>
            <b>Stack Trace</b> <ToolTipIcon src="/images/tool-tip.svg" />
            <StackContainer>
              <BackgroundChanger>
              </BackgroundChanger>
            </StackContainer>
          </StackTraceCheckDiv> */}
          <TokenTransferCheckDiv check={status}>
            <b>Token Transfer</b>
            <StackContainer>
              {/* <BackgroundChanger> */}
              <FlexDiv>
                <div style={{ display: "flex" }}>
                  <From>From</From>
                  <SubHeadBlue>{from}</SubHeadBlue>
                </div>
                <FlexDivMob>
                  <From>To</From>
                  <SubHeadBlue>{to}</SubHeadBlue>
                </FlexDivMob>
              </FlexDiv>
              {/* </BackgroundChanger> */}
            </StackContainer>
          </TokenTransferCheckDiv>
          <LastContainer>
            <SearchBar placeholder="Execution trace" />
            <br />
            <img
              alt=""
              src="/images/contracts.svg"
              style={{ width: "1rem", marginRight: "3px" }}
            />
            {row.function?.split("(")[0]} in {contractName}
            <DataDivContainer>
              {/* <BackgroundChangerTransfer> */}
              <InputDataDiv>
                <SubHeadBlue>
                  <ShowLoader state={loader} top={"50%"} />
                  <CodeDiv>
                    <CodeMainContainer>
                      <CodeContainer>
                        <SyntaxHighlighter
                          language="javascript"
                          showLineNumbers={true}
                          style={base16AteliersulphurpoolLight}
                          wrapLongLines={true}
                          customStyle={{
                            backgroundColor: "#f0f2fc",
                            margin: 0,
                            fontWeight: 400,
                          }}
                        >
                          {functionOccured !== undefined
                            ? functionOccured + "}"
                            : "No function available"}
                        </SyntaxHighlighter>
                      </CodeContainer>
                    </CodeMainContainer>
                  </CodeDiv>
                </SubHeadBlue>
              </InputDataDiv>
              {/* </BackgroundChangerTransfer> */}
            </DataDivContainer>
          </LastContainer>
        </ScrollableDiv>
      )}
      {activeButton === "Contracts" && (
        <SubContracts address={row.contractAddress} url={url} status={status} />
      )}
      {activeButton === "EventsDetails" && (
        <EventsDetails
          address={row.contractAddress}
          from={row.from}
          to={row.to ? row.to : row.contractAddress}
          value={row.value}
          logs={row.logs}
          func={functionName}
        />
      )}
      {/* {activeButton === "StateChange" && <StateChange />} */}
    </MainContainer>
  );
}
