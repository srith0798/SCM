import React from "react";
import { Row } from "simple-flexbox";
import { history } from "../../managers/history";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import Destination from "./destination";
// import Destination from "../Alerting/Destination";
import Historys from "./historys";
import { genericConstants } from "../../constants";
import { sessionManager } from "../../managers/sessionManager";
import utility from "../../utility";
import contractsService from "../../services/contractsService";

export default function AddAlert() {
  const [activeButton, setActiveButton] = React.useState("Rules");
  const [alertType, setAlertType] = React.useState("");
  const [alertTarget, setAlertTarget] = React.useState("");
  const [loader, setLoader] = React.useState(false);
  const [parametersData, setParametersData] = React.useState(false);


  const [icon, setIcon] = React.useState({
    successfulTransaction: genericConstants.ALERT_TYPE_IMAGES.SUCCESSFULL_TRANSACTIONS.IMAGE,
    failedTransaction:  genericConstants.ALERT_TYPE_IMAGES.FAILED_TRANSACTIONS.IMAGE,
    tokenTransfer: genericConstants.ALERT_TYPE_IMAGES.TOKEN_TRANSFER.IMAGE,
    transactionValue:  genericConstants.ALERT_TYPE_IMAGES.TRANSACTION_VALUE.IMAGE,
    balanceToken:  genericConstants.ALERT_TYPE_IMAGES.XDC_BALANCE.IMAGE,
    stateChange: genericConstants.ALERT_TYPE_IMAGES.STATE_CHANGE.IMAGE,
    functionCall: genericConstants.ALERT_TYPE_IMAGES.FUNCTION_CALL.IMAGE,
    address:genericConstants.ALERT_TYPE_IMAGES.ADDRESS.IMAGE,
    network:genericConstants.ALERT_TYPE_IMAGES.NETWORK.IMAGE,
    tag:genericConstants.ALERT_TYPE_IMAGES.TAG.IMAGE,
  });
  const handleViewClick = (e) => {
    setActiveButton(e.target.id);
    history.push("/alerting");
  };

  // alert target
  const [addressToken, setaddressToken] = React.useState(
    "/images/address-logo-blue.svg"
  );
  const [networkAddress, setnetworkAddress] = React.useState(
    "/images/network-logo-blue.svg"
  );
  const [tagAddress, settagAddress] = React.useState(
    "/images/tag-logo-blue.svg"
  );
  const [progress, setProgress] = React.useState("ALERT_TYPE");
  const changeProgress = (value) => {
    setProgress(value);
  };
  const backButton = () => {
    history.push("/alerting");
  };

  const changeSourceForIcons = (value,type) => {
    setIcon({ ...icon , [type] :genericConstants.ALERT_TYPE_IMAGES_WHITE[value].IMAGE});
  };

  const changeOriginalSourceForIcons = (value,type) => {
    setIcon({ ...icon , [type] :genericConstants.ALERT_TYPE_IMAGES[value].IMAGE});
  };

  const selectAlertType = (type) =>{
    setAlertType(type);
    changeProgress("ALERT_TARGET")
  }
  const selectAlertTarget = (type) =>{
    setAlertTarget(type);
    changeProgress("PARAMETERS")
    if(type === genericConstants.ALERT_TYPE.ADDRESS)
       getContracts();
    else if(type === genericConstants.ALERT_TYPE.NETWORK)   
      getTags();
  }

  const getContracts = async () => {
    let userId = sessionManager.getDataFromCookies("userId");
    const requestData = {
      userId: userId
    };
    setLoader(true);
    const [error, response] = await utility.parseResponse(
      contractsService.getContractsList(requestData)
    );
    if (error) {
      setLoader(false);
      return;
    }
    if (response.contractList.length === 0) {
      return;
    }
    setLoader(false);
    setParametersData(response.contractList);
  };
  
  const getTags = async () => {
    let userId = sessionManager.getDataFromCookies("userId");
    const requestData = {
      userId: userId
    };
    setLoader(true);
    const [error, response] = await utility.parseResponse(
      contractsService.getTags(requestData)
    );
    if (error) {
      setLoader(false);
      return;
    }
    if (response.contractList.length === 0) {
      return;
    }
    setLoader(false);
    setParametersData(response.contractList);
  };
  return (
    <>
      <MainContainer>
        <Row>
          <RowCorrecter>
            <TitleHead>
              <img
                alt=""
                style={{ marginRight: "0.625rem" }}
                src="/images/back.svg"
                onClick={backButton}
              />
              Create Alert
            </TitleHead>
          </RowCorrecter>
        </Row>
        <Container>
          <TabLister>
            <TabView
              id="Rules"
              onClick={handleViewClick}
              style={{
                color: activeButton === "Rules" ? "#3163F0" : "#AEB7D0",
                display: "flex",
                paddingBottom: "0.875rem",
                paddingTop: "0.5rem",
                fontSize: "14px",
                borderBottom: activeButton === "Rules" ? "2px solid blue" : "",
              }}
            >
              <img
                alt=""
                style={{ marginRight: "0.375rem" }}
                src={
                  activeButton === "Rules"
                    ? "/images/rules.svg"
                    : "/images/rules.svg"
                }
              />
              Rules
            </TabView>
            <TabView
              id="History"
              onClick={handleViewClick}
              style={{
                color: activeButton === "History" ? "#3163F0" : "#AEB7D0",
                display: "flex",
                paddingBottom: "0.875rem",
                paddingTop: "0.5rem",
                fontSize: "14px",
                borderBottom:
                  activeButton === "History" ? "0.125rem solid blue" : "",
              }}
            >
              <img
                alt=""
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
                paddingBottom: "0.875rem",
                paddingTop: "0.5rem",
                fontSize: "14px",
                borderBottom:
                  activeButton === "Destination" ? "0.125rem solid blue" : "",
              }}
            >
              <img
                alt=""
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
          {activeButton === "Rules" && (
            <div style={{ padding: "20px 0px 0px 10px" }}>
              <AlertContainer>
                {progress === "ALERT_TYPE" ? (
                  <NumberShowUP>1</NumberShowUP>
                ) : (
                  <TickIcon src="/images/tick-icon.svg" />
                )}

                <ProgressHeader>
                  <TypeRow> Alert type</TypeRow>
                  <SelectType>Select a alert triger type</SelectType>
                </ProgressHeader>
              </AlertContainer>
              <SideLineProvider>
                <Line></Line>
                {progress === "ALERT_TYPE" && (
                          <AlertTypeContainer
                          selectAlertType={selectAlertType}
                          changeOriginalSourceForIcons={changeOriginalSourceForIcons}
                          changeSourceForIcons={changeSourceForIcons}
                          icon={icon}
                          ></AlertTypeContainer>       )}
              </SideLineProvider>
              <AlertContainer>
                {progress === "ALERT_TYPE" || progress === "ALERT_TARGET" ? (
                  <NumberShowUP>2</NumberShowUP>
                ) : (
                  <TickIcon src="/images/tick-icon.svg" />
                )}

                <ProgressHeader>
                  <TypeRow> Alert target</TypeRow>
                  <SelectType>
                    Select a address which alert will be trigger
                  </SelectType>
                </ProgressHeader>
              </AlertContainer>
              <SideLineProvider>
                <Line></Line>
                {progress === "ALERT_TARGET" && (
                 <AlertTarget
                 selectAlertTarget={selectAlertTarget}
                 changeOriginalSourceForIcons={changeOriginalSourceForIcons}
                 changeSourceForIcons={changeSourceForIcons}
                 addressToken={addressToken}
                 networkAddress={networkAddress}
                 tagAddress={tagAddress}
                 icon={icon}
                 ></AlertTarget>
                )}
              </SideLineProvider>

              <AlertContainer>
                {progress === "PARAMETERS" ||
                progress === "ALERT_TARGET" ||
                progress === "ALERT_TYPE" ? (
                  <NumberShowUP>3</NumberShowUP>
                ) : (
                  <TickIcon src="/images/tick-icon.svg" />
                )}
                <ProgressHeader>
                  <TypeRow>Parameters</TypeRow>
                  <SelectType>Set alert trigger Parameters</SelectType>
                </ProgressHeader>
              </AlertContainer>
              <SideLineProvider>
                <Line></Line>
                {progress === "PARAMETERS" && (
                  <AlertTargetContainer style={{ flexDirection: "column" }}>
                    <ParameterContainer>
                      <FilterSelect>
                         <option value="">Filter by event </option>
                        {parametersData && parametersData.length && parametersData.map((option)=>(
                          <option value={option.address}>{option.address}</option>
                        ))}
                      </FilterSelect>
                    </ParameterContainer>
                    <ApplyButton onClick={() => changeProgress("DESTINATION")}>
                      Next
                    </ApplyButton>
                  </AlertTargetContainer>
                )}
              </SideLineProvider>

              <AlertContainer>
                <NumberShowUP>4</NumberShowUP>
                <ProgressHeader>
                  <TypeRow>Destination</TypeRow>
                  <SelectType style={{}}>
                    Select the destination in which alert notification will be
                    sent to.
                  </SelectType>
                  {progress === "DESTINATION" && (
                    <DestinationDetail>
                      <EmailBox>
                        <EmailDetail>
                          <Img alt="" src="/images/email.svg" />
                          Email
                          <EmailShow>it@supportteam.com</EmailShow>
                        </EmailDetail>

                        <SliderDiv>
                          <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                          </label>
                        </SliderDiv>
                      </EmailBox>
                      <EmailBox>
                        <EmailDetail>
                          <Img alt="" src="/images/webhook.svg" />
                          Finance
                          <EmailShow>https://webhook.site/a0e</EmailShow>
                        </EmailDetail>
                        <SliderDiv>
                          <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                          </label>
                        </SliderDiv>
                      </EmailBox>

                      <RowContainer>
                        <Buttonn>
                          <img
                            alt=""
                            src="/images/slack.svg"
                            style={{
                              marginRight: "0.25rem",
                              width: "1.3rem",
                            }}
                          />{" "}
                          Slack
                        </Buttonn>
                        <Buttonn>
                          <img
                            alt=""
                            src="/images/webhook.svg"
                            style={{
                              marginRight: "0.25rem",
                              width: "1.3rem",
                            }}
                          />
                          Webhook
                        </Buttonn>
                        <Buttonn>
                          <img
                            alt=""
                            src="/images/email.svg"
                            style={{
                              marginRight: "0.25rem",
                              width: "1.3rem",
                            }}
                          />
                          Email
                        </Buttonn>
                      </RowContainer>
                    </DestinationDetail>
                  )}
                </ProgressHeader>
              </AlertContainer>
              <Line></Line>
              <AlertContainer>
                <LastContainer>
                  <ApplyButton
                    onClick={() => changeProgress("Rules")}
                    style={{ marginLeft: "0px" }}
                  >
                    Done
                  </ApplyButton>
                  <CancelButton onClick={() => changeProgress("ALERT_TYPE")}>
                    Cancel
                  </CancelButton>
                </LastContainer>
              </AlertContainer>
            </div>
          )}

          {activeButton === "History" && <Historys />}
          {activeButton === "Destination" && <Destination />}
        </Container>
      </MainContainer>
    </>
  );
}

const AlertTypeContainer = (props) => {
  return(
    <MainBoxContainer>
    <BoxContainer
      onClick={() => props.selectAlertType(genericConstants.ALERT_TYPE.SUCCESSFULL_TRANSACTIONS)}
      onMouseOver={() =>
        props.changeSourceForIcons(genericConstants.ALERT_TYPE.SUCCESSFULL_TRANSACTIONS,"successfulTransaction")
      }
      onMouseOut={() =>
        props.changeOriginalSourceForIcons(genericConstants.ALERT_TYPE.SUCCESSFULL_TRANSACTIONS,"successfulTransaction")
      }
    >
      <img alt="" src={props.icon.successfulTransaction} />
      <Title>Successful transaction</Title>
      <SubTitle>
        Triggers when successful transaction happen
      </SubTitle>
    </BoxContainer>
    <BoxContainer
      onClick={() => props.selectAlertType(genericConstants.ALERT_TYPE.FAILED_TRANSACTIONS)}
      onMouseOver={() =>
        props.changeSourceForIcons(genericConstants.ALERT_TYPE.FAILED_TRANSACTIONS,"failedTransaction")
      }
      onMouseOut={() =>
        props.changeOriginalSourceForIcons(genericConstants.ALERT_TYPE.FAILED_TRANSACTIONS,"failedTransaction")
      }
    >
      <img alt="" src={props.icon.failedTransaction} />
      <Title>Failed transaction</Title>
      <SubTitle>Triggers when transactions fails</SubTitle>
    </BoxContainer>
    <BoxContainer
      onClick={() => props.selectAlertType(genericConstants.ALERT_TYPE.TOKEN_TRANSFER)}
      onMouseOver={() => props.changeSourceForIcons(genericConstants.ALERT_TYPE.TOKEN_TRANSFER,"tokenTransfer")}
      onMouseOut={() =>
        props.changeOriginalSourceForIcons(genericConstants.ALERT_TYPE.TOKEN_TRANSFER,"tokenTransfer")
      }
    >
      <img alt="" src={props.icon.tokenTransfer} />
      <Title>XRC-20 Token Transfer </Title>
      <SubTitle>
        Triggers whenever an XRC-20 token transfer happen
      </SubTitle>
    </BoxContainer>
    <BoxContainer
      onClick={() => props.selectAlertType(genericConstants.ALERT_TYPE.TRANSACTION_VALUE)}
      onMouseOver={() =>
        props.changeSourceForIcons(genericConstants.ALERT_TYPE.TRANSACTION_VALUE,"transactionValue")
      }
      onMouseOut={() =>
        props.changeOriginalSourceForIcons(genericConstants.ALERT_TYPE.TRANSACTION_VALUE,"transactionValue")
      }
    >
      <img alt="" src={props.icon.transactionValue} />
      <Title>Transaction Value</Title>
      <SubTitle>
        Triggers whenever transaction value matches
      </SubTitle>
    </BoxContainer>
    <BoxContainer
      onClick={() => props.selectAlertType(genericConstants.ALERT_TYPE.XDC_BALANCE)}
      onMouseOver={() => props.changeSourceForIcons(genericConstants.ALERT_TYPE.XDC_BALANCE,"balanceToken")}
      onMouseOut={() =>
        props.changeOriginalSourceForIcons(genericConstants.ALERT_TYPE.XDC_BALANCE,"balanceToken")
      }
    >
      <img alt="" src={props.icon.balanceToken} />
      <Title>XDC Balance</Title>
      <SubTitle>
        Triggers when XDC balance falls below certain threshold
      </SubTitle>
    </BoxContainer>

    <BoxContainer
      onClick={() => props.selectAlertType(genericConstants.ALERT_TYPE.STATE_CHANGE)}
      onMouseOver={() => props.changeSourceForIcons(genericConstants.ALERT_TYPE.STATE_CHANGE,"stateChange")}
      onMouseOut={() =>
        props.changeOriginalSourceForIcons(genericConstants.ALERT_TYPE.STATE_CHANGE,"stateChange")
      }
    >
      <img alt="" src={props.icon.stateChange} />
      <Title>State Change</Title>
      <SubTitle>
        Triggers whenever stable variable changes
      </SubTitle>
    </BoxContainer>
    <BoxContainer
      onClick={() => props.selectAlertType(genericConstants.ALERT_TYPE.FUNCTION_CALL)}
      onMouseOver={() => props.changeSourceForIcons(genericConstants.ALERT_TYPE.FUNCTION_CALL,"functionCall")}
      onMouseOut={() =>
        props.changeOriginalSourceForIcons(genericConstants.ALERT_TYPE.FUNCTION_CALL,"functionCall")
      }
    >
      <img alt="" src={props.icon.functionCall} />
      <Title>Function Call</Title>
      <SubTitle style={{ fontSize: "22px", fontWeight: 600 }}>
        Coming soon
      </SubTitle>
    </BoxContainer>
  </MainBoxContainer>

  )
}

const AlertTarget = (props) =>{
  return(
   <AlertTargetContainer>
                    <BoxContainer
                      onClick={() => props.selectAlertTarget(genericConstants.ALERT_TYPE.ADDRESS)}
                      onMouseOver={() => props.changeSourceForIcons(genericConstants.ALERT_TYPE.ADDRESS,"address")}
                      onMouseOut={() =>
                        props.changeOriginalSourceForIcons(genericConstants.ALERT_TYPE.ADDRESS,"address")
                      }
                    >
                      <img alt="" src={props.icon.address} />
                      <Title>Address</Title>
                      <SubTitle>recieve alert for only one address</SubTitle>
                    </BoxContainer>
                    <BoxContainer
                      onClick={() => props.selectAlertTarget(genericConstants.ALERT_TYPE.NETWORK)}
                      onMouseOver={() => props.changeSourceForIcons(genericConstants.ALERT_TYPE.NETWORK,"network")}
                      onMouseOut={() =>
                        props.changeOriginalSourceForIcons(genericConstants.ALERT_TYPE.NETWORK,"network")
                      }
                    >
                      <img alt="" src={props.icon.network} />
                      <Title>Network</Title>
                      <SubTitle>
                        recieve alert for deployment on a network
                      </SubTitle>
                    </BoxContainer>
                    <BoxContainer
                      onClick={() => props.selectAlertTarget(genericConstants.ALERT_TYPE.TAG)}
                      onMouseOver={() => props.changeSourceForIcons(genericConstants.ALERT_TYPE.TAG,"tag")}
                      onMouseOut={() =>
                        props.changeOriginalSourceForIcons(genericConstants.ALERT_TYPE.TAG,"tag")
                      }
                    >
                      <img alt="" src={props.icon.tag} />
                      <Title>Tag</Title>
                      <SubTitle>Recieve alert for every address</SubTitle>
                    </BoxContainer>
                  </AlertTargetContainer>
  )
}
const DestinationDetail = styled.div`
  margin-bottom: 10px;
  padding: 20px 0 0 0;
`;
const EmailBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  background: #f5f6fd 0% 0% no-repeat padding-box;
  border: 1px solid #d5e0ff;
  border-radius: 6px;
  display: flex;
  height: 66px;
  padding: 14px;
  width: 100%;
`;
const Buttonn = styled.div`
  width: 6rem;
  height: 2.5rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #416be0;
  border-radius: 0.375rem;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #1d3c93;
  font-size: 0.875rem;
  cursor: pointer;
`;
const RowContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 21.25rem;
  margin-bottom: 1.25rem;
  padding-top: 1rem;
  @media (min-width: 300px) and (max-width: 768px) {
    max-width: 19.25rem;
  }
`;
const EmailDetail = styled.div`
  font-weight: 600;
  font-size: 1rem;
`;
const EmailShow = styled.div`
  font-size: 0.9rem;
`;
const LastContainer = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  padding: 20px 0 10px 0;
  max-width: 503px;
`;
const CancelButton = styled.div`
  top: 432px;
  left: 1179px;
  width: 72px;
  height: 34px;
  border: 1px solid #3163f0;
  opacity: 1;
  padding-top: 6px;
  border-radius: 3px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  margin-left: -5px;
  margin-right: -11px;
  color: #3163f0;
`;
const ApplyButton = styled.button`
  width: 68px;
  height: 34px;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 3px;
  color: #ffffff;
  border: 0px;
  text-align: center;
  white-space: nowrap;
  padding-top: 6px;
  padding-bottom: 12px;
  font-size: 14px;
  margin-right: 15px;
  margin-left: 16px;
  cursor: pointer;
`;
const Title = styled.div`
  font-size: 0.775rem;
  font-weight: 600;
  width: 100%;

  max-width: 16.25rem;
  padding-top: 10px;
  // color: #1d3c93;
  &:hover {
    color: white;
  }
  padding-bottom: 2px;
`;
const SubTitle = styled.div`
  font-size: 0.775rem;
  width: 100%;
  max-width: 16.25rem;
  padding-top: 5px;
`;

const Title1 = styled.div`
  width: 157px;
  height: 26px;
  text-align: center;
  color: #1d3c93;

  font-size: 22px;
  font-weight: 600;
  &:hover {
    color: white;
  }
`;

const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  width: 100%;
  background-color: #ffffff;
  height: auto;
  padding: 0.5rem;
  overflow: auto;
`;

const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
  padding: 2.5rem;
  height: 120vh;
  @media (min-width: 300px) and (max-width: 768px) {
    padding: 2.5rem 1.5rem 1.5rem 1.5rem;
    height: 220vh;
  }
`;
const TitleHead = styled.div`
  font-size: 24px;
  font-weight: 600;
  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 16px;
  }
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
`;
const TabView = styled.div`
  @media (min-width: 340px) and (max-width: 768px) {
    padding: 1px;
  }
`;
const SliderDiv = styled.div``;

const AlertContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 10px 0px 0px;
  overflow-x: auto;
`;
const TypeRow = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  text-align: left;
`;
const SelectType = styled.div`
  font-size: 0.875rem;
  color: #7c828a;
  @media (min-width: 300px) and (max-width: 768px) {
    overflow: auto;
  }
`;

const BoxContainer = styled.div`
  padding: 0.625rem;
  height: 150px;
  margin: 0px 10px 20px 10px;
  width: 215px;
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
  cursor: pointer;
  color: #1d3c93;
  &:hover {
    background-color: #3163f0;
    color: white;
  }
  @media (min-width: 340px) and (max-width: 768px) {
    margin: 0px 10px 20px 2px;
  }
`;

const MainBoxContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-left: 16px;
  padding: 15px 0px 15px 0px;
  @media (min-width: 340px) and (max-width: 768px) {
    padding-left: 20px;
  }
`;

const AlertTargetContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  padding-top: 28px;
  margin-left: 16px;
`;

const ProgressHeader = styled.div`
  flex-flow: row;
  margin-left: 16px;
`;

const TickIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const SideLineProvider = styled.div`
  display: flex;
  min-height: 25px;
`;
const Line = styled.div`
  width: 2px;
  background-color: #3163f0;
  margin-left: 15px;
`;
const NumberShowUP = styled.div`
  margin-top: 5px;
  width: 30px;
  min-width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #3163f0;
  padding: 0px 0px 0px 8px;
  background-color: #edf2ff;
`;

const ParameterContainer = styled.div`
  margin: 0px 0px 5px 20px;
  width: 100%;
  padding: 10px 50px 10px 0;
`;
const Img = styled.img`
  width: 1.3rem;
  margin-right: 4px;
`;
const FilterSelect = styled.select`
  outline: none;
  border: none;
  background-color: #f5f6fd;
  border-radius: 3px;
  width: 100%;
  padding: 0px 10px 0px 10px;
  font-size: 12px;
  height: 40px;
  color: #a6aabf;
`;
