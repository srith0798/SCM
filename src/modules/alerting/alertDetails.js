import React, { useEffect } from "react";
import { Row } from "simple-flexbox";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import { history } from "../../managers/history";
import AlertService from "../../services/alert";
import utility from "../../utility";
// import { alertClasses } from "@mui/material";
import { genericConstants } from "../../constants";

export default function AlertDetails() {
  const [alertId, setAlertId] = React.useState("");
  const [alert, setAlert] = React.useState(false);


  const getAlert = async (request) => {
    let requestData = {
      alertId: request ? request : alertId
    }
    const [error, response] = await utility.parseResponse(AlertService.getAlertDetails(requestData));
    if (error)
      return;
    setAlert(response);
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
  return (
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
        <Button>Add Alert</Button>
      </Row>
      <Container>
        <CommonDiv>
          <RowData>
            <Heading>ID</Heading>
            <SubHeading>{alert.alertId}</SubHeading>
          </RowData>
        </CommonDiv>
        <CommonDiv>
          <RowData>
            <Heading>Name</Heading>
            <SubHeading>
            {`${genericConstants.ALERT_TYPE_NAMES[alert.type]} in ${alert?.target?.name}`}
            </SubHeading>
          </RowData>
        </CommonDiv>
        <CommonDiv>
          <RowData>
            <Heading>Alert Type</Heading>
            <SubHeading>
              <TextColor>{genericConstants.ALERT_TYPE_NAMES[alert.type]}</TextColor>
            </SubHeading>
          </RowData>
        </CommonDiv>
        <CommonDiv>
          <RowData>
            <Heading>Target</Heading>
            <SubHeading>{alert?.target?.type}</SubHeading>
          </RowData>
        </CommonDiv>
      </Container>
      <br />
      <b>Alert will be sent to this destination</b>
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
       
        {/* <CommonDiv>
          <Row>
            <img
              alt=""
              src="/images/webhook.svg"
              style={{ marginRight: "4px", width: "1rem" }}
            />
            <Heads>Finance</Heads>
            <SubHeading>https:webhook.site/aOe</SubHeading>
          </Row>
        </CommonDiv> */}
        <RowContainer>
          <EditButton style={{ marginRight: "4px" }}>Edit</EditButton>
          <DisableButton style={{ marginLeft: "4px" }}>Disable</DisableButton>
        </RowContainer>
      </NewContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
  padding: 3rem;
  height: 100vh;
  white-space: nowrap;
  @media (min-width: 340px) and (max-width: 768px) {
    padding: 43px 23px 23px 23px;
  }
`;
const RowData = styled.div`
  display: flex;
  width: 100%;
  min-width: 200px;
  // overflow-x: auto;
  // @media (min-width: 300px) and (max-width: 768px) {
  //   column-gap: 80px;
  //   text-align: left;
  // }
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
  font-size: 13px;
  //   @media (min-width: 300px) and (max-width: 768px) {
  //     margin-left:5px;
  //
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
