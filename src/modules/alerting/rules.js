import React, { useEffect } from "react";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import Historys from "./historys";
import Destination from "./destination";
import { history } from "../../managers/history";
import Tooltip from "@mui/material/Tooltip";
import utility from "../../utility";
import AlertService from "../../services/alert";
import { genericConstants } from "../../constants";
import { sessionManager } from "../../managers/sessionManager";
import ShowLoader from "../../common/components/showLoader";

export default function Rules() {
  const [activeButton, setActiveButton] = React.useState("Rules");

  const handleViewClick = (e) => {
    setActiveButton(e.target.id);
  };
  const redirectToAlertDetails = (alertId) => {
    history.push(`/alert-detail/${alertId}`);
  };

  const [networkToolTip, setnetworkToolTip] = React.useState(false);
  const [addressToolTip, setaddressToolTip] = React.useState(false);
  const [contractNameToolTip, setcontractNameToolTip] = React.useState(false);
  const [alertTypeToolTip, setalertTypeToolTip] = React.useState(false);
  const [alerts, setAlerts] = React.useState([]);
  const [loader, setLoader] = React.useState(false);

  const getAlertList = async () => {
    let request = {
      userId: sessionManager.getDataFromCookies("userId"),
      isDeleted: false,
    };
    setLoader(true);
    const [error, response] = await utility.parseResponse(
      AlertService.getAlertList(request)
    );
    setLoader(false);
    if (error) return;
    setAlerts(response);
  };
  const deleteAlert = async (alertId) => {
    setLoader(true);
    const [error] = await utility.parseResponse(
      AlertService.deleteAlert(alertId)
    );
    setLoader(false);
    if (error) return;
    utility.apiSuccessToast("Alert Deleted Successfully");
    await getAlertList();

    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  useEffect(() => {
    getAlertList();
    let check = history?.location?.state?.id;
    if (check === "add") {
      setActiveButton("Destination");
    }
  }, []);

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
  const PlaceholderSpan = styled.span`
    display: contents;
  `;
  const Link = styled.a`
    display: contents;
  `;

  const ImgDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
  `;
  const PlaceHolderImage = styled.img`
    width: 60px;
    -webkit-filter: grayscale(60%); /* Safari 6.0 - 9.   */
    filter: grayscale(50%);
    /* margin-bottom: 20px; */
  `;
  const TableContainer = styled.div`
    background-color: #ffffff;
    border-radius: 0.375rem;
    width: 100%;
    height: 20rem;
    padding: 1rem;
    overflow-y: hidden;
    @media (min-width: 300px) and (max-width: 700px) {
      width: 100%;
      ::-webkit-scrollbar {
        border: 0.5px solid rgb(204, 229, 243);
        outline: none;
        border-radius: 15px;
      }
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 1px grey;
        border-radius: 15px;
      }
      ::-webkit-scrollbar-thumb {
        /* background: #3163f0; */
        background-color: #d6dee1;
        border-radius: 15px;
        border: 4px solid transparent;
        background-clip: content-box;
      }
    }
  `;
  const PlaceHolderContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    opacity: 50%;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
  `;
  const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    @media (min-width: 300px) and (max-width: 768px) {
      font-size: 1.2rem;
      font-weight: 600;
    }
  `;
  const Container = styled.div`
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 0.375rem;
    width: 100%;
    background-color: #ffffff;
    padding: 0.5rem;
    white-space: nowrap;
  `;
  const RowData = styled.div`
    display: flex;
  `;

  const RowData1 = styled.div`
    display: flex;
  `;
  const ToolTipIcon = styled.img`
    width: 0.75rem;
    cursor: pointer;
    margin-left: 0.313rem;
    white-space: nowrap;
  `;

  const ColumnOne = styled.div`
    display: flex;
    font-size: 0.875rem;
    font-weight: 600;
    color: #102c78;
    width: 100%;
    min-width: 130px;
    cursor: pointer;
    @media (min-width: 300px) and (max-width: 1024px) {
      width: 100%;
      min-width: 160px;
    }
  `;
  const BackgroundChanger = styled.div`
    width: fit-content;
    height: auto;
    background-repeat: no-repeat;
    background: #eaefff 0% 0% no-repeat padding-box;
    border-radius: 6px;
    opacity: 1;
    padding: 1px 6px 1px 4px;
    cursor: pointer;
  `;
  const ColumnTwo = styled.div`
    display: flex;
    flex-flow: column nowrap;
    font-size: 0.875rem;
    color: #191919;
    width: 100%;
    min-width: 130px;
    @media (min-width: 300px) and (max-width: 1024px) {
      width: 100%;
      min-width: 160px;
    }
  `;

  const MainContainer = styled.div`
    background: #ecf0f7 0% 0% no-repeat padding-box;
    opacity: 1;
    width: 100%;
    padding: 3.5rem;
    height: max-content;
    min-height: 100%;
    /* max-height: 200vh; */
    @media (min-width: 340px) and (max-width: 768px) {
      padding: 38px 20px 20px 20px;
    }
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
    padding-left: 0;
    @media (min-width: 300px) and (max-width: 1024px) {
      width: fit-content;
      min-width: 1025px;
    }
  `;
  const NewDivOne = styled.div`
    border-bottom: 0.063rem solid #e3e7eb;
  `;

  const TitleContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1.25rem;
  `;

  const TabLister = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 21.875rem;
    cursor: pointer;
  `;
  const TabView = styled.div`
    padding: 0.313rem 0.5rem 0.313rem 0.5rem;
    @media (min-width: 340px) and (max-width: 768px) {
      padding: 0rem 0rem 0rem 0rem;
    }
  `;
  return (
    <>
      {user === "" ? redirectToLogout() : ""}
      <ShowLoader state={loader} top={"33%"}></ShowLoader>
      <MainContainer>
        <TitleContainer>
          <Title style={{ color: "#191919" }}>Alerting</Title>
          <Button onClick={() => history.push("/add-alert")}>Add Alert</Button>
        </TitleContainer>
        <Container>
          <NewDivOne>
            <TabLister>
              <TabView
                id="Rules"
                onClick={handleViewClick}
                style={{
                  color: activeButton === "Rules" ? "#3163F0" : "#AEB7D0",
                  display: "flex",
                  paddingBottom: "0.875rem",
                  paddingTop: " 9px",
                  fontSize: "14px",
                  borderBottom:
                    activeButton === "Rules" ? "0.2rem solid #3163F0" : "",
                }}
              >
                <img
                  alt=""
                  id="Rules"
                  onClick={handleViewClick}
                  style={{ marginRight: "0.375rem" }}
                  src={
                    activeButton === "Rules"
                      ? "/images/rules.svg"
                      : "/images/ruless.svg"
                  }
                ></img>
                Rules
              </TabView>
              <TabView
                id="History"
                onClick={handleViewClick}
                style={{
                  color: activeButton === "History" ? "#3163F0" : "#AEB7D0",
                  display: "flex",
                  paddingBottom: "0.875rem",
                  paddingTop: " 9px",
                  fontSize: "14px",
                  borderBottom:
                    activeButton === "History" ? "0.2rem solid #3163F0" : "",
                }}
              >
                <img
                  alt=""
                  id="History"
                  onClick={handleViewClick}
                  style={{ marginRight: "0.375rem" }}
                  src={
                    activeButton === "History"
                      ? "/images/history-blue.svg"
                      : "/images/history.svg"
                  }
                />
                History
              </TabView>

              <TabView
                id="Destination"
                onClick={handleViewClick}
                style={{
                  color: activeButton === "Destination" ? "#3163F0" : "#AEB7D0",
                  display: "flex",
                  fontSize: "1rem",
                  paddingBottom: "0.875rem",
                  paddingTop: " 9px",
                  borderBottom:
                    activeButton === "Destination"
                      ? "0.2rem solid #3163F0"
                      : "",
                }}
              >
                <img
                  alt=""
                  id="Destination"
                  onClick={handleViewClick}
                  style={{ marginRight: "5px" }}
                  src={
                    activeButton === "Destination"
                      ? "/images/destination-blue.svg"
                      : "/images/destination.svg"
                  }
                />
                Destination
              </TabView>
            </TabLister>
          </NewDivOne>
          {activeButton === "Rules" && (
            <TableContainer>
              <NewDiv>
                <RowData>
                  <ColumnOne>
                    Name
                    <Tooltip
                      open={contractNameToolTip}
                      onOpen={() => setcontractNameToolTip(true)}
                      onClose={() => setcontractNameToolTip(false)}
                      disableFocusListener
                      title="Name of the smart contract/tag"
                    >
                      <ToolTipIcon
                        onClick={() =>
                          setcontractNameToolTip(!contractNameToolTip)
                        }
                        src="/images/tool-tip.svg"
                      />
                    </Tooltip>
                  </ColumnOne>
                  <ColumnOne>
                    Address/Tag
                    <Tooltip
                      open={addressToolTip}
                      onOpen={() => setaddressToolTip(true)}
                      onClose={() => setaddressToolTip(false)}
                      disableFocusListener
                      title="Wallet address/Tag"
                    >
                      <ToolTipIcon
                        onClick={() => setaddressToolTip(!addressToolTip)}
                        src="/images/tool-tip.svg"
                      />
                    </Tooltip>
                  </ColumnOne>
                  <ColumnOne>
                    Network
                    <Tooltip
                      open={networkToolTip}
                      onOpen={() => setnetworkToolTip(true)}
                      onClose={() => setnetworkToolTip(false)}
                      disableFocusListener
                      title="The executing blockchain network"
                    >
                      <ToolTipIcon
                        onClick={() => setnetworkToolTip(!networkToolTip)}
                        src="/images/tool-tip.svg"
                      />
                    </Tooltip>
                  </ColumnOne>
                  <ColumnOne>
                    Alert Type
                    <Tooltip
                      open={alertTypeToolTip}
                      onOpen={() => setalertTypeToolTip(true)}
                      onClose={() => setalertTypeToolTip(false)}
                      disableFocusListener
                      title="Transaction status"
                    >
                      <ToolTipIcon
                        onClick={() => setalertTypeToolTip(!alertTypeToolTip)}
                        src="/images/tool-tip.svg"
                      />
                    </Tooltip>
                  </ColumnOne>
                  <ColumnOne></ColumnOne>
                  <ColumnOne></ColumnOne>
                </RowData>
              </NewDiv>

              {alerts && alerts.length ? (
                alerts.map((alert) => (
                  <NewDiv>
                    <RowData1>
                      <ColumnTwo
                        onClick={() => redirectToAlertDetails(alert.alertId)}
                      >
                        {alert?.target?.name}
                      </ColumnTwo>{" "}
                      <ColumnTwo
                        onClick={() => redirectToAlertDetails(alert.alertId)}
                      >
                        <BackgroundChanger>
                          {utility.minimizeAddress(alert?.target?.value)}
                        </BackgroundChanger>
                      </ColumnTwo>
                      <ColumnTwo
                        onClick={() => redirectToAlertDetails(alert.alertId)}
                      >
                        {alert?.target?.network}
                      </ColumnTwo>
                      <ColumnTwo
                        onClick={() => redirectToAlertDetails(alert.alertId)}
                      >
                        {genericConstants.ALERT_TYPE_NAMES[alert?.type]}
                      </ColumnTwo>
                      <ColumnTwo
                        style={{
                          fontSize: "14px",
                          color: "#00A58C",
                          marginLeft: "50px",
                        }}
                        onClick={() => redirectToAlertDetails(alert.alertId)}
                      >
                        {alert.status ? "Enabled" : "Disabled"}
                      </ColumnTwo>
                      <ColumnTwo>
                        <Tooltip disableFocusListener title="Delete">
                          <img
                            alt=""
                            src="/images/delete-blue.svg"
                            style={{ width: "1rem", cursor: "pointer" }}
                            onClick={() => deleteAlert(alert.alertId)}
                          />
                        </Tooltip>
                      </ColumnTwo>
                    </RowData1>
                  </NewDiv>
                ))
              ) : (
                //  <CheckDiv show={alerts.length}>
                <div>
                  <ImgDiv>
                    <PlaceHolderImage src="images/set alerts.svg" alt="" />
                  </ImgDiv>
                  <PlaceHolderContainer>
                    No alerts found <br />
                    You can start monitoring by adding contracts <br />
                    <PlaceholderSpan>
                      Click <Link href="/contracts">here </Link> to add
                      contracts
                    </PlaceholderSpan>
                  </PlaceHolderContainer>
                </div>
                // </CheckDiv>
              )}
            </TableContainer>
          )}
        </Container>
        {activeButton === "History" && <Historys />}
        {activeButton === "Destination" && <Destination />}
      </MainContainer>
    </>
  );
}

// const DetailBox = styled.div``;
