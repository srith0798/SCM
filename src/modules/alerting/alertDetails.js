import React, { useEffect } from "react";
import { Row } from "simple-flexbox";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import { history } from "../../managers/history";
import AlertService from "../../services/alert";
import utility from "../../utility";
// import { alertClasses } from "@mui/material";
import { cookiesConstants, genericConstants } from "../../constants";
import { sessionManager } from "../../managers/sessionManager";
import DestinationService from "../../services/destination";
import ShowLoader from "../../common/components/showLoader";


export default function AlertDetails() {
  const [alertId, setAlertId] = React.useState("");
  const [alert, setAlert] = React.useState(false);
  const [onEdit, setOnEdit] = React.useState(false);
  const [isSelect, setIsSelect] = React.useState(false);
  const [destinations, setDestinations] = React.useState([]);
  const [selectedDestinations, setSelectedDestinations] = React.useState([]);
  const [alertDestinations, setAlertDestinations] = React.useState([]);
  const [loader, setLoader] = React.useState(false);




  const getAlert = async (request) => {
    let requestData = {
      alertId: request ? request : alertId
    }
    setLoader(true);
    const [error, response] = await utility.parseResponse(AlertService.getAlertDetails(requestData));
    if (error)
      return;
    setLoader(false);
    setAlert(response);
    setAlertDestinations(response?.destinations || []);
    // let destinationIds=[];
    // response && response.destinations && response.destinations.map((dest)=>{
    //   destinationIds.push(dest.destinationIds)
    //   return true;
    // })
    // setSelectedDestinations(destinationIds);
  }
  const updateAlert = async (request ) => {
    if(!isSelect)
      return;
    let requestData = {
      alertId: request ? request : alertId,
      destinations :selectedDestinations
    }
    // if(requestData.destinations && requestData.destinations.length === 0)
    //   requestData["status"] = false;
    const [error, response] = await utility.parseResponse(AlertService.updateAlert(requestData));
    if (error)
      return;
    // utility.apiSuccessToast("Alert Updated Succesfully");
    setOnEdit(false);  
    setAlert(response);
    setAlertDestinations(response?.destinations || []);
    setIsSelect(false);
    getDestinations();
  }
  const disableAlert = async (request , status ) => {
    let requestData = {
      alertId: request ? request : alertId,
      status: status
    }
    const [error] = await utility.parseResponse(AlertService.updateAlert(requestData));
    if (error)
      return;
    // utility.apiSuccessToast("Alert Updated Succesfully");
    setOnEdit(false);  
    getAlert();
  }
  const getDestinations = async () => {
    let requestData = {
      userId: sessionManager.getDataFromCookies(cookiesConstants.USER_ID),
      isDeleted: false,
    };
    setLoader(true)
    const [error, response] = await utility.parseResponse(
      DestinationService.getDestinations(requestData)
    );
    setLoader(false)
    if (error) return;
    let destinationIds=[];
    alertDestinations.map((dest)=>{
      destinationIds.push(dest.destinationId);
      return true;
    })
    response.map((dest)=>{
      if(destinationIds.includes(dest.destinationId)) 
      dest["checked"] = true
       else
      dest["checked"] = false
      return true;

    })
    setDestinations(response);
    
  };
  const selectDestinations = async (event) => {
    let id = event.target.value;
    setIsSelect(true);
    let destination =  destinations.map((dest)=>{
      if(dest.destinationId === event.target.value)
       dest["checked"] = event.target.checked;
      return dest; 
      })
    if (event.target.checked)
     { 
       setSelectedDestinations((prevArray) => [...prevArray, id]);
     }
    else
    { 
       setSelectedDestinations(
        selectedDestinations.filter((item) => item !== id)
      );}
      setDestinations(destination)
  };
  const editDestinations = () => {
    setOnEdit(true);
    getDestinations();
  }

  useEffect(() => {
    let alertId = window.location.href;
    alertId = alertId.split('/');
    alertId = alertId[alertId.length - 1];
    setAlertId(alertId);
    getAlert(alertId);
  }, [alertId]);
  const backButton = () => {
    history.push("/alerting");
  };

  const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
  padding: 3rem;
  height: 100vh;
  @media (min-width: 340px) and (max-width: 768px) {
    padding: 43px 23px 23px 23px;
  }
`;
const RowData = styled.div`
  display: flex;
  width: 100%;
  min-width: 200px;
`;
const NewContainer = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  width: 100%;
  padding: 0.625rem 0.625rem 1.5rem 0.625rem;
  margin-top: 1rem;
  @media (min-width: 300px) and (max-width: 768px) {
    height: auto;
    overflow: scroll;
    overflow-y: hidden;
    width: 100%;
    ::-webkit-scrollbar {
      border: 0.5px solid rgb(204, 229, 243);
      outline: none;
      border-radius: 15px;
      /* background: #00A58C; */
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 1px grey;
      border-radius: 15px;
    }
    ::-webkit-scrollbar-thumb {
      background: #3163f0;
      border-radius: 15px;
      border: 4px solid transparent;
      background-clip: content-box;
    }
  }
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
  width: 100px;
  height: 30px;
  font-size: 12px;
`;

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  width: 100%;
  padding: 0.625rem 0.625rem 1.5rem 0.625rem;
  margin-top: 1rem;
  @media (min-width: 300px) and (max-width: 768px) {
    height: auto;
    overflow: scroll;
    overflow-y: hidden;
    width: 100%;
    ::-webkit-scrollbar {
      border: 0.5px solid rgb(204, 229, 243);
      outline: none;
      border-radius: 15px;
      /* background: #00A58C; */
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 1px grey;
      border-radius: 15px;
    }
    ::-webkit-scrollbar-thumb {
      background: #3163f0;
      border-radius: 15px;
      border: 4px solid transparent;
      background-clip: content-box;
    }
  }
`;

const CommonDiv = styled.div`
  border-bottom: 0.5px #efefef solid;
  padding: 8px;
`;
const LastContainer = styled.div`
  border-bottom: 0.5px #efefef solid;
  padding: 8px;
`;
const Heading = styled.div`
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  min-width: 200px;
  max-width: 200px;
`;
const Heads = styled.div`
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  min-width: 250px;
  max-width: 250px;
`;
const SubHeading = styled.div`
  font-size: 0.875rem;
  color: #191919;
`;

const RowContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 160px;
  padding-top: 25px;
  padding-left: 6px;
`;
const EditButton = styled.div`
  top: 548px;
  left: 341px;
  width: 79px;
  height: 34px;
  align-items: center;
  display: flex;
  justify-content: center;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  text-align: left;
  font: normal normal medium 16px/20px Inter;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
`;
const DisableButton = styled.div`
  top: 548px;
  left: 341px;
  width: 79px;
  height: 34px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #416be0;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  text-align: left;
  color: #3163f0;
  font-size: 14px;
  cursor: pointer;
`;
const TextColor = styled.div`
  text-align: left;
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;
  color: #416be0;
`;
const DestinationDetail = styled.div`
  margin-bottom: 10px;
  padding: 20px 0 0 0;
  width:100%;
`;
const EmailBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  background: #f5f6fd 0% 0% no-repeat padding-box;
  border: 1px solid #d5e0ff;
  border-radius: 6px;
  display: flex;
  height: fit-content;
  padding: 14px;
  width: 100%;
  max-width: 270px;
  word-break: break-all;
`;
const EmailDetail = styled.div`
  font-weight: 600;
  font-size: 1rem;
`;
const EmailShow = styled.div`
  font-size: 0.9rem;
`;
const Img = styled.img`
  width: 1.3rem;
  margin-right: 4px;
`;

  return (
    <>
          <ShowLoader state={loader} top={"33%"}></ShowLoader>

    <MainContainer>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div>
          <img
            alt=""
            src="/images/back.svg"
            style={{ marginRight: "10px", marginBottom: "10px" }}
            onClick={() => backButton()}
          />
          <b style={{ fontSize: "24px", fontWeight: 600 }}>Alert Details</b>
        </div>
        <Button onClick={() => history.push("/add-alert")}>Add Alert</Button>
      </Row>
      <Container>
        <CommonDiv>
          <RowData>
            <Heading>ID</Heading>
            <SubHeading>{loader === false ? alert.alertId : ""}</SubHeading>
          </RowData>
        </CommonDiv>
        <CommonDiv>
          <RowData>
            <Heading>Name</Heading>
            <SubHeading>
            {loader === false ? `${genericConstants.ALERT_TYPE_NAMES[alert.type]} in ${alert?.target?.name}` : ""}
            </SubHeading>
          </RowData>
        </CommonDiv>
        <CommonDiv>
          <RowData>
            <Heading>Alert Type</Heading>
            <SubHeading>
              <TextColor>{loader === false ? genericConstants.ALERT_TYPE_NAMES[alert.type]: ""}</TextColor>
            </SubHeading>
          </RowData>
        </CommonDiv>
        <CommonDiv>
          <RowData>
            <Heading>Target</Heading>
            <SubHeading>{loader === false ?
            alert?.target?.type
            .toLowerCase()
            .replace("_", " ")
            .substring(0, 1)
            .toUpperCase() +
          alert?.target?.type.toLowerCase().replace("_", " ").substring(1)
            : ""}</SubHeading>
          </RowData>
        </CommonDiv>
      </Container>
      <br />
      <b>Alert will be sent to this destination</b>
      {onEdit === false ? 
      <NewContainer>
        {alert && alert.destinations && alert.destinations.length>0 && alert.destinations.map((destination)=>(
           <LastContainer>
           <Row>
             <img
               alt=""
               src="/images/email.svg"
               style={{ marginRight: "4px", width: "1rem" }}
             />
             <Heads>{destination.type}</Heads>
             <SubHeading>{destination.url}</SubHeading>
           </Row>
         </LastContainer>
        ))}
        {alert?.destinations?.length === 0 && (
               <Heading>No alert destination is enabled</Heading> 
             )}
        <RowContainer>
          <EditButton style={{ marginRight: "4px" }} onClick = {editDestinations}>Edit</EditButton>
          {alert.status === true ?
          <DisableButton style={{ marginLeft: "4px" }} onClick = {()=>disableAlert(alert.alertId, false)}>Disable</DisableButton> : "" }
          {alert.status === false ?
          <DisableButton style={{ marginLeft: "4px" }} onClick = {()=>disableAlert(alert.alertId, true)}>Enable</DisableButton> : "" }
        </RowContainer>
      </NewContainer> :
          <DestinationDetail>
            {destinations &&
              destinations.length &&
              destinations.map((destination) => (
                <EmailBox>
                  <EmailDetail>
                    <Img alt="" src="/images/email.svg" />
                    {destination.type}
                    <EmailShow>{destination.url}</EmailShow>
                  </EmailDetail>
                  <div>
                    <label class="switch">
                      <input
                        checked = {destination.checked}
                        type="checkbox"
                        value={destination.destinationId}
                        onChange={(event) => selectDestinations(event)}
                      />
                      <span class="slider round"></span>
                    </label>
                  </div>
                </EmailBox>
              ))}
            <EditButton style={{ marginRight: "4px" }} onClick={()=>updateAlert(alert.alertId)}>Update</EditButton>

          </DestinationDetail>
        
       
       }
    </MainContainer>
    </>
  );
}

