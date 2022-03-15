import React, { useEffect } from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import Line from "./graph";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import ContractsService from "../../services/contractsService";
import AnalyticsService from "../../services/analytics";
import { sessionManager } from "../../managers/sessionManager";
import FullScreen from "./fullScreen";
import TopCalls from "./topCalls";
import utility from "../../utility";
import ShowLoader from "../../common/components/showLoader";
import { analytics } from "../../constants";
import Grid from "@mui/material/Grid";
import { history } from "../../managers/history";

export default function MainComponent(props) {
  const [isSetOpen, setOpen] = React.useState(false);
  const [contracts, setContracts] = React.useState([]);
  const [selected, setSelected] = React.useState({});
  const [noOfTransactions, setNoOfTransactions] = React.useState([]);
  const [gasPriceData, setGasPriceData] = React.useState([]);
  const [activeUserData, setActiveUserData] = React.useState([]);
  const [topCallersData, setTopCallersData] = React.useState([]);
  const [topFunctionCallsData, setTopFunctionCallsData] = React.useState([]);
  // const [transactionCount, setTransactionCount] = React.useState([]);
  const [expandGraph, setExpandGraph] = React.useState(0);
  const [graphName, setGraphName] = React.useState("");
  const [data, setData] = React.useState([]);
  const [transactionOverTimeSelect, setTransactionOverTimeSelect] =
    React.useState("30");
  const [gasUsedSelect, setGasUsedSelect] = React.useState("30");
  const [activeUserSelect, setActiveUserSelect] = React.useState("30");
  const [topCallersSelct, setTopCallersSelect] = React.useState("30");
  const [topFunctionCallsSelect, setTopFunctionCallsSelect] =
    React.useState("30");
  const [dropDownValue, setDropDownValue] = React.useState("30");
  const [loader, setLoader] = React.useState("30");
  const [expanded, setExpanded] = React.useState(0);
  const [tableData, setTableData] = React.useState([]);
  const [
    transactionOverTimeError,
    setTransactionOverTimeError,
  ] = React.useState("");
  const [
    activeUSerGraphError,
    setActiveUserGraphError,
  ] = React.useState("");
  const [gasUsedOverTimeError, setGasUsedOverTimeError] = React.useState("");
  const [activeUsersError, setActiveUsersError] = React.useState("");
  const [topCallersError, setTopCallersError] = React.useState("");
  const [topFunctionCallsError, setTopFunctionCallsError] = React.useState("");
  const [error, setError] = React.useState("");

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: "absolute",
    top: 90,
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
    overflowY: "auto",
    marginTop: "4px",
    fontSize: "0.875rem",
    fontWeight: "600",
    color: "#191919",
  };

  const getContractNames = async (skip = 0, limit = 10) => {
    let userId = sessionManager.getDataFromCookies("userId");
    const requestData = {
      skip: skip,
      limit: limit,
      userId: userId,
    };
    setLoader(true);
    const [error, response] = await utility.parseResponse(
      ContractsService.getContractsList(requestData)
    );
    if (error) {
      setLoader(false);
      return;
    }
    if (response.contractList.length === 0) {
      setLoader(false);
      setTransactionOverTimeError("No Transactions Available");
      setActiveUserGraphError("No Active users available");
      setTopCallersError("No Top Callers Available");
      setTopFunctionCallsError("No Top Function Calls Available");
      return;
    }
    getTransactionAnalytics(response.contractList[0].address);
    getGasUsedAnalytics(response.contractList[0].address);
    getActiveUsersAnalytics(response.contractList[0].address);
    getTopCallers(response.contractList[0].address);
    getTopFunctionCalls(response.contractList[0].address);
    setLoader(false);
    setContracts(response.contractList);
    setSelected(response.contractList[0]);
  };
  const getTransactionAnalytics = async (address, event) => {
    if (event?.target?.value) {
      setTransactionOverTimeSelect(event.target.value);
      setDropDownValue(event.target.value);
    }

    const req = {
      address: address ? address : selected.address,
      numberOfDays: event?.target?.value || 30,
    };
    setLoader(true);
    const [error, response] = await utility.parseResponse(
      AnalyticsService.getTransactionsAnalytics(req)
    );
    if (error || !response || response.length === 0) {
      setTransactionOverTimeError("No Transactions Available");
      setActiveUserGraphError("No Active users available")
      setNoOfTransactions([]);
      setData([]);
      setLoader(false);
      return;
    }
    setLoader(false);
    let resultData = [];
    const failed = getGraphDataForTransactions(
      "TransactionsFailed",
      response,
      "dateString",
      "failedTransactions"
    );
    resultData.push(failed);
    const success = getGraphDataForTransactions(
      "TransactionSuccess",
      response,
      "dateString",
      "successfullTransactions"
    );
    resultData.push(success);
    console.log(resultData);
    setNoOfTransactions(resultData);
    setData(resultData);
  };

  const getGasUsedAnalytics = async (address, event) => {
    if (event?.target?.value) {
      setGasUsedSelect(event.target.value);
      setDropDownValue(event.target.value);
    }
    const req = {
      address: address ? address : selected.address,
      numberOfDays: event?.target?.value || 30,
    };
    setLoader(true);
    const [error, response] = await utility.parseResponse(
      AnalyticsService.getGasUsedAnalytics(req)
    );
    if (error || !response || response.length === 0) {
      setGasUsedOverTimeError("No Data Available");
      setGasPriceData([]);
      setData([]);
      setLoader(false);
      return;
    }
    setLoader(false);
    const resultData = getGraphData(
      "GasPrice",
      response,
      "dateString",
      "gasUsedOverTime"
    );
    setGasPriceData(resultData);
    setData(resultData);
  };

  const getActiveUsersAnalytics = async (address, event) => {
    if (event?.target?.value) {
      setActiveUserSelect(event.target.value);
      setDropDownValue(event.target.value);
    }
    const req = {
      address: address ? address : selected.address,
      numberOfDays: event?.target?.value || 30,
    };
    setLoader(true);
    const [error, response] = await utility.parseResponse(
      AnalyticsService.getActiveUsersAnalytics(req)
    );
    if (error || !response || response.length === 0) {
      setActiveUsersError("No Active Users Available");
      setActiveUserData([]);
      setData([]);
      setLoader(false);
      return;
    }
    setLoader(false);
    const resultData = getGraphData(
      "ActiveUsers",
      response,
      "dateString",
      "activeUsers"
    );
    setActiveUserData(resultData);
    setData(resultData);
  };

  const getTopCallers = async (address, event) => {
    if (event?.target?.value) {
      setTopCallersSelect(event.target.value);
      setDropDownValue(event.target.value);
    }
    const req = {
      address: address ? address : selected.address,
      numberOfDays: event?.target?.value || 30,
    };
    setLoader(true);
    const [error, response] = await utility.parseResponse(
      AnalyticsService.getTopCallers(req)
    );
    if (error || !response || response.length === 0) {
      setTopCallersError("No Top Callers Available");
      setTopCallersData([]);
      setTableData([]);
      setLoader(false);
      return;
    }
    setLoader(false);
    setTopCallersData(response);
    setTableData(response);
  };

  const getTopFunctionCalls = async (address, event) => {
    if (event?.target?.value) {
      setTopFunctionCallsSelect(event.target.value);
      setDropDownValue(event.target.value);
    }
    const req = {
      address: address ? address : selected.address,
      numberOfDays: event?.target?.value || 30,
    };
    setLoader(true);
    const [error, response] = await utility.parseResponse(
      AnalyticsService.getTopFunctionCalls(req)
    );
    if (error || !response || response.length === 0) {
      setTopFunctionCallsError("No Top Function Calls Available");
      setTopFunctionCallsData([]);
      setTableData([]);
      setLoader(false);
      return;
    }
    setLoader(false);
    setTopFunctionCallsData(response);
    setTableData(response);
  };
  const callAnalyticsFunctions = async (address, event) => {
    if (expandGraph === 1) await getTransactionAnalytics(address, event);
    if (expandGraph === 2) await getGasUsedAnalytics(address, event);
    if (expandGraph === 3) await getActiveUsersAnalytics(address, event);
    if (expandGraph === 4) await getTopCallers(address, event);
    if (expandGraph === 5) await getTopFunctionCalls(address, event);
  };

  const getGraphData = (id, response, xComponent, yComponent) => {
    let arr = [
      {
        id: id,
        color: "hsl(221, 70%, 50%)",
        data: [],
      },
    ];

    let resultData = [];
    response.map((items) => {
      resultData.push({
        x: items[xComponent],
        y: items[yComponent],
      });
      return true;
    });
    arr[0].data = resultData;
    return arr;
  };

  const getGraphDataForTransactions = (
    id,
    response,
    xComponent,
    yComponent
  ) => {
    let dataObject = {
      id: id,
      color: "hsl(221, 70%, 50%)",
      data: [],
    };
    let resultData = [];
    response.map((items) => {
      resultData.push({
        x: items[xComponent],
        y: items[yComponent],
      });
      return true;
    });
    dataObject.data = resultData;
    return dataObject;
  };

  const selectContract = (item) => {
    setSelected(item);
  };
  useEffect(() => {
    getContractNames();
  }, []);

  const expandGraphs = (value, data, dropDownValue) => {
    setExpanded(value);
    if (value === 1) {
      setGraphName("Transactions over time");
      setData(data);
      setError(transactionOverTimeError);
    }
    if (value === 2) {
      setGraphName("Gas used overtime");
      setData(data);
      setError(gasUsedOverTimeError);
    }
    if (value === 3) {
      setGraphName("Active users");
      setData(data);
      setError(activeUsersError);
    }
    if (value === 4) {
      setGraphName("Top Callers");
      setData(data);
      setError(topCallersError);
    }
    if (value === 5) {
      setGraphName("Top Function Calls");
      setData(data);
      setError(topFunctionCallsError);
    }
    setExpandGraph(value);
    setDropDownValue(dropDownValue);
  };
  const changeContract = (item) => {
    selectContract(item);
    getTransactionAnalytics(item.address);
    getGasUsedAnalytics(item.address);
    getActiveUsersAnalytics(item.address);
    getTopCallers(item.address);
    getTopFunctionCalls(item.address);
    setOpen((prev) => !prev);
  };

  let user = "";

    try {
      user = window.web3.eth.accounts;
    } catch (e) {}

    const redirectToLogout = () => {
      sessionManager.removeDataFromCookies("isLoggedIn");
      sessionManager.removeDataFromCookies("accountAddress");
      sessionManager.removeDataFromCookies("userId");
      sessionManager.removeDataFromCookies("username");
      sessionManager.removeDataFromCookies("profilePicture");
      history.replace("/");
    };

  return (
    <>
    {(user=="")?
    (
      redirectToLogout()
  ):""}
      <ShowLoader state={loader} top={"33%"}></ShowLoader>
      {expandGraph === 0 ? (
        <div style={{ overflow: "auto" }}>
          <Column>
            <Row>
              <MainContainer>
                <SubContainer>
                  <MainHeading>Analytics</MainHeading>
                  <Tooltip disableFocusListener title="Refresh">
                    <BackImage
                      onClick={() => {
                        getContractNames();
                      }}
                      src="/images/refresh.svg"
                    />
                  </Tooltip>
                </SubContainer>
                <Container>
                  <View>View analytics for contract</View>
                  <Content>
                    You can view analytics data per contract by using the
                    contract picker below.
                  </Content>
                  <ClickAwayListener onClickAway={handleClickAway}>
                    <Box
                      sx={{ position: "relative" }}
                      selected={selected?.address}
                    >
                      <DropDown onClick={handleClick}>
                        {selected?.contractName
                          ? selected.contractName
                          : "Contract"}
                        <img
                          style={{ marginLeft: "0.5rem" }}
                          alt=""
                          src="/images/XDCmainnet.svg"
                        />
                        <br />
                        <TransactionHash>{selected?.address}</TransactionHash>
                        <Image src="/images/arrrow.svg" />
                      </DropDown>
                      {isSetOpen ? (
                        <Box sx={styles}>
                          {contracts.length &&
                            contracts.map((item) => (
                              <div onClick={() => changeContract(item)}>
                                <Label>Contract</Label>
                                {item?.contractName
                                  ? item.contractName
                                  : "Contract"}
                                <br />
                                <TransactionHash>
                                  {item.address}
                                </TransactionHash>
                              </div>
                            ))}
                        </Box>
                      ) : null}
                    </Box>
                  </ClickAwayListener>
                </Container>
                {/* <ScrollableDiv> */}
                {/* <ResponsiveRow> */}
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 12, sm: 2, md: 3 }}
                >
                  <Grid item xs={12} sm={12} md={6}>
                    <GraphContainer>
                      <SubContainer>
                        <SelectComponent
                          heading="Transactions over time"
                          expandGraphs={expandGraphs}
                          getAnalyticsData={getTransactionAnalytics}
                          selectValue={transactionOverTimeSelect}
                          data={noOfTransactions}
                          graphNo={1}
                          error1={transactionOverTimeError}
                        ></SelectComponent>
                      </SubContainer>
                      {noOfTransactions.length == 0 ? (
                        <GraphSizeError>
                          {" "}
                          <Line
                            data={noOfTransactions}
                            error={transactionOverTimeError}
                          />
                        </GraphSizeError>
                      ) : (
                        <GraphSize>
                          {" "}
                          <Line
                            data={noOfTransactions}
                            error={transactionOverTimeError}
                          />
                        </GraphSize>
                      )}
                    </GraphContainer>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <GraphContainer>
                      <SubContainer>
                        <SelectComponent
                          heading="Gas used over time"
                          expandGraphs={expandGraphs}
                          getAnalyticsData={getGasUsedAnalytics}
                          selectValue={gasUsedSelect}
                          data={gasPriceData}
                          graphNo={2}
                          error1={transactionOverTimeError}
                        ></SelectComponent>
                      </SubContainer>
                      {noOfTransactions.length == 0 ? (
                        <GraphSizeError>
                          {" "}
                          <Line
                            data={noOfTransactions}
                            error={transactionOverTimeError}
                          />
                        </GraphSizeError>
                      ) : (
                        <GraphSize>
                          {" "}
                          <Line
                            data={gasPriceData}
                            error={gasUsedOverTimeError}
                          />
                        </GraphSize>
                      )}
                    </GraphContainer>
                  </Grid>
                  {/* </ResponsiveRow> */}
                </Grid>
                {/* <ResponsiveRow> */}
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 12, sm: 2, md: 3 }}
                >
                  <Grid item xs={12} sm={12} md={6}>
                    <GraphContainer>
                      {topCallersError.length == 0 ? (
                        <TableData
                          style={{ margin: "93px" }}
                          heading="Top Callers"
                          expandGraphs={expandGraphs}
                          getAnalyticsData={getTopCallers}
                          selectValue={topCallersSelct}
                          data={topCallersData}
                          graphNo={4}
                          error={topCallersError}
                        ></TableData>
                      ) : (
                        <TableData
                          heading="Top Callers"
                          expandGraphs={expandGraphs}
                          getAnalyticsData={getTopCallers}
                          selectValue={topCallersSelct}
                          data={topCallersData}
                          graphNo={4}
                          error={topCallersError}
                        ></TableData>
                      )}
                      {/* <TableData
                        heading="Top Callers"
                        expandGraphs={expandGraphs}
                        getAnalyticsData={getTopCallers}
                        selectValue={topCallersSelct}
                        data={topCallersData}
                        graphNo={4}
                        error={topCallersError}
                        
                      ></TableData> */}
                    </GraphContainer>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <GraphContainer>
                      <SubContainer>
                        <SelectComponent
                          heading="Active Users"
                          expandGraphs={expandGraphs}
                          getAnalyticsData={getActiveUsersAnalytics}
                          selectValue={activeUserSelect}
                          data={activeUserData}
                          graphNo={3}
                          error1={transactionOverTimeError}
                        ></SelectComponent>
                      </SubContainer>
                      {(noOfTransactions.length==0)?
                      ( <GraphSizeError>
                        {" "}
                        <Line
                          data={noOfTransactions}
                          error={activeUSerGraphError}
                        />
                      </GraphSizeError>)
                      :
                      <GraphSize>
                        {" "}
                        <Line data={activeUserData} error={activeUsersError} />
                      </GraphSize>}
                      
                    </GraphContainer>
                  </Grid>
                </Grid>
                {/* </ResponsiveRow> */}
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 12, sm: 2, md: 3 }}
                >
                  <Grid item xs={12} sm={12} md={6}>
                    <GraphContainer>
                      <TableData
                        heading="Top Function Calls"
                        expandGraphs={expandGraphs}
                        getAnalyticsData={getTopFunctionCalls}
                        selectValue={topFunctionCallsSelect}
                        data={topFunctionCallsData}
                        graphNo={5}
                        error={topFunctionCallsError}
                      ></TableData>
                    </GraphContainer>
                  </Grid>
                </Grid>
                {/* </ScrollableDiv> */}
              </MainContainer>
            </Row>
          </Column>
        </div>
      ) : (
        ""
      )}
      {expandGraph > 0 && expandGraph < 4 && (
        <FullScreen
          graphName={graphName}
          data={data}
          getAnalytics={callAnalyticsFunctions}
          expandGraphs={expandGraphs}
          dropDownValue={dropDownValue}
          error={error}
          selected={selected}
          expand={expanded}
        />
      )}
      {expandGraph > 3 && (
        <TopCalls
          graphName={graphName}
          data={tableData}
          graphNo={expandGraph}
          changeExpand={expandGraphs}
          getAnalytics={callAnalyticsFunctions}
          expandGraphs={expandGraphs}
          dropDownValue={dropDownValue}
          error={error}
        />
      )}
    </>
  );
}

const TableData = (props) => {
  return (
    <>
      <SubContainer>
        <SelectComponent
          graphNo={props.graphNo}
          data={props.data}
          heading={props.heading}
          expandGraphs={props.expandGraphs}
          selectValue={props.selectValue}
          getAnalyticsData={props.getAnalyticsData}
          error={props.error}
          error1={props.error}
        ></SelectComponent>
      </SubContainer>
      <Table>
        {props?.data && props.data.length && props.data.length > 0 ? (
          props.data.map((item) => (            
            <TableRow>
              <DataColumn>
                <Div>
                  {props.graphNo === 4 ? (
                    <ContractFrom>Contract from:</ContractFrom>
                  ) : (
                    <FunctionFrom>Function:</FunctionFrom>
                  )}
                  {props.graphNo === 4 ? (
                    <Network>{item.address}</Network>
                  ) : (
                    <FunctionAddress>{item.function}</FunctionAddress>
                  )}
                </Div>
                <Div>
                  <NetworkHead>Network:</NetworkHead>
                  <SubNetwork>
                    <Network>{item.network}</Network>
                  </SubNetwork>
                  <MobileNetwork>{item.network}</MobileNetwork>
                </Div>
              </DataColumn>
              <Count>{item.count}</Count>
            </TableRow>
          ))
        ) : (
          <>
            <TableError>{props.error}</TableError>
          </>
        )}
      </Table>
    </>
  );
};

const SelectComponent = (props) => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Head>
          {props.heading}
          <Tooltip
            disableFocusListener
            title="Transaction executed in due course"
          >
            <ToolTipIcon src="/images/tool-tip.svg" />
          </Tooltip>
        </Head>
        <BackImage
          src="/images/expand.svg"
          onClick={() =>
            props.expandGraphs(props.graphNo, props.data, props.selectValue)
          }
        />
      </div>
      <select
        id="dates"
        style={{ display: props.data.length == 0 ? "none" : "" }}
        className="select"
        value={props.selectValue}
        onChange={(event) => {
          props.getAnalyticsData("", event);
        }}
      >
        {analytics &&
          analytics.ANALYTICS_DROPDOWN &&
          analytics.ANALYTICS_DROPDOWN.map((option) => (
            <option value={option.VALUE} className="select-dropdown">
              {option.TEXT}
            </option>
          ))}
      </select>
    </>
  );
};

const ResponsiveRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 300px) and (max-width: 1024px) {
    display: block;
  }
`;
const MainContainer = styled.div`
  width: 100%;
  padding-left: 71px;
  padding-right: 53px;
  padding-top: 32px;
  padding-bottom: 20px;
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
  // padding-left: 5px;
  padding-bottom: 12px;
  @media (min-width: 300px) and (max-width: 768px) {
    margin-top: 2px;
    padding-bottom: 2px;
  }
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
const GraphSize = styled.div`
  height: 13.75rem;
  width: auto;
  margin-bottom: 1.2rem;
  background: transparent;
  text-align: center;
  @media (max-width: 767px) {
    height: 250px;
  }
`;
const Table = styled.div`
  height: 15rem;
  overflow-y: hidden;
  margin-top: 1rem;
  text-align: center;
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

const GraphSizeError = styled.div`
  height: 13.75rem;
  width: auto;
  margin-bottom: 1.2rem;
  background: transparent;
  text-align: center;
  margin-top: 113px;
  @media (max-width: 767px) {
    height: 250px;
  }
`;
const TableError = styled.div`
  margin-top: 96px;
`;
const TableRow = styled.div`
  display: flex;
  flex-flow: column-nowrap;
  margin-bottom: 6px;
  border-top: 1px solid rgb(227, 231, 235);
  @media (min-width: 300px) and (max-width: 768px) {
    width: 653px;
  }
`;
const DataColumn = styled.div`
  width: 100%;
  padding-top: 9px;
`;
const Count = styled.div`
  color: #3163f0;
  padding-top: 15px;
  @media (min-width: 300px) and (max-width: 768px) {
    margin-left: 162px;
    padding-right: 17px;
  }
`;
const GraphContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  height: 356px;
  padding: 1.25rem;
  margin-top: 2.58rem;
  /* overflow-x: hidden !important; */
  margin-bottom: 10px;
  @media (min-width: 300px) and (max-width: 1024px) {
    width: 100%;
    padding: 1.25rem 12px 1.25rem 12px;
  }
`;
const ScrollableDiv = styled.div`
  // overflow: auto;
  // height: 739px;
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
const ToolTipIcon = styled.img`
  width: 0.75rem;
  cursor: pointer;
  margin-left: 0.5rem;
`;
const ContractFrom = styled.div`
  width: 26%;
  color: #102c78;
  font-size: 14px;
  font-weight: 600;
  display: flex ;
  white-space: nowrap;
  @media (min-width: 300px) and (max-width: 767px) {
    word-break: break-all;
    margin-left: 2%;
    white-space: nowrap;
  }
`;

const FunctionFrom = styled.div`
  width: 26%;
  color: #102c78;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  @media (min-width: 300px) and (max-width: 767px) {
    word-break: break-all;
    margin-left: 2%;
    white-space: nowrap;
    display: flex;
  }
`;

const NetworkHead = styled.div`
  width: 20.5%;
  color: #102c78;
  font-size: 14px;
  font-weight: 600;
  display: flex ;
  @media (min-width: 300px) and (max-width: 767px) {
    word-break: break-all;
    white-space: nowrap;
    margin-left: 2.1%;
  }
`;
const Network = styled.div`
  color: #303134;
  font-size: 14px;
  width: 100%;
  display: flex ;
  @media (min-width: 300px) and (max-width: 767px) {
    word-break: break-all;
    white-space: nowrap;
    margin-left: 3%;
  }
`;

const FunctionAddress = styled.div`
  color: #303134;
  font-size: 14px;
  width: 100%;
  display: flex ;
  @media (min-width: 300px) and (max-width: 767px) {
    word-break: break-all;
    white-space: nowrap;
    margin-left: 3%;
    display: flex;
  }
`;

const MobileNetwork = styled.div`
  color: #303134;
  font-size: 14px;
  width: 100%;
  @media (min-width: 300px) and (max-width: 767px) {
    word-break: break-all;
    white-space: nowrap;
    margin-left: 10%;
    display: flex;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    display: none !important;
  }
  @media (min-width: 820px)  {
    display: none !important;
  }
  @media (min-width: 1200px) and (max-width: 2300px) {
    display: none;
  }
`;
const SubNetwork = styled.div`
  @media (min-width: 300px) and (max-width: 768px) {
    margin-left: 0px;
    display: none;
  }
`;
// const BorderDiv = styled.div`
//   border-bottom: 1px solid #e2e8fa;
// `;
const Div = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 0.125rem;
`;
const ContractDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  border-top: 1px solid #e2e8fa;

  padding-top: 10px;
  padding-bottom: 4px;
`;
const DropDown = styled.div`
  background: #f5f6fd 0% 0% no-repeat padding-box;
  border: 1px solid #d5e0ff;
  border-radius: 0.375rem;
  font: normal normal medium 14px/17px Inter;
  font-size: 0.875rem;
  font-weight: 600;
  color: #191919;
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
    font-size: 0.7rem;
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
  @media (min-width: 300px) and (max-width: 768px) {
    display: none;
  }
`;
