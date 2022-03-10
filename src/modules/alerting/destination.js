import React, { useEffect } from "react";
import { Row } from "simple-flexbox";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";
import utility from "../../utility";
import DestinationService from "../../services/destination";
import { sessionManager } from "../../managers/sessionManager";
import AddDestination from "../popup/addDestination";

export default function Destination() {
  const [destinations, setDestinations] = React.useState([]);
  const [addDestinationPopup, setAddDestinationPopup] = React.useState(false);
  const [destinationType, setDestinationType] = React.useState("");


  const getDestinations = async () => {
    let requestData = {
      userId: sessionManager.getDataFromCookies("userId"),
      isDeleted:false
    }
    const [error, response] = await utility.parseResponse(DestinationService.getDestinations(requestData));
    if (error)
      return;
    setDestinations(response);
  }
  const openDestinationPopup = (value) => {
    setAddDestinationPopup(true);
    setDestinationType(value)
  }
  const addDestination = async (label, url, channelName) => {
    let requestData = {
      userId: sessionManager.getDataFromCookies("userId"),
      type: destinationType,
      label: label,
      url: url,
      channelName: channelName,
    }
    const [error, response] = await utility.parseResponse(DestinationService.addDestination(requestData));
    if (error) {
      utility.apiFailureToast(error || "Cannot Add Destination")
      setAddDestinationPopup(false);
      return;
    }
    setDestinations(response);
    setAddDestinationPopup(false);
    getDestinations()
  }
  const deleteDestination = async (destinationId) => {
    const [error , response] = await utility.parseResponse(DestinationService.deleteDestination(destinationId));
     if(error)
      return;
    utility.apiSuccessToast("Destination Deleted Successfully");
    await getDestinations();
    setTimeout(()=>{
      window.location.reload();
    },100);
  }
  useEffect(() => {
    getDestinations();
  }, []);
  return (
    <>
      <MainContainer>
        <Div>
          <Row>
            <ColumnOne style={{ borderBottom: "none" }}>
              Destinations
              <Tooltip disableFocusListener title="Notifications destination">
                <ToolTipIcon src="/images/tool-tip.svg" />
              </Tooltip>
            </ColumnOne>
          </Row>
          {addDestinationPopup && (
            <AddDestination
              click={addDestination}
              type = {destinationType}
              close = {()=>setAddDestinationPopup(false)}
            />
          )}
          <RowContainer>
            <Button onClick={() => openDestinationPopup("SLACK")} >
              <ButtonIcon alt="" src="/images/slack.svg" />
              Slack
            </Button>
            <Button onClick={() => openDestinationPopup("WEBHOOK")} >
              <ButtonIcon alt="" src="/images/webhook.svg" />
              Webhook
            </Button>
            <Button onClick={() => openDestinationPopup("EMAIL")} >
              <ButtonIcon alt="" src="/images/email.svg" />
              Email
            </Button>
          </RowContainer>
        </Div>

        <ColumnOne>
          Active Destination
          <Tooltip
            disableFocusListener
            title="Users' active notifications destination "
          >
            <ToolTipIcon src="/images/tool-tip.svg" />
          </Tooltip>
        </ColumnOne>
        <LastDiv>
          {destinations && destinations.length > 0 && destinations.map((destination) => (
            <Div>
              <RowData>
                <Img alt="" src="/images/email.svg" />
                <ColumnTwo style={{ color: "#191919" }}>{destination.type}</ColumnTwo>
                <ColumnTwo style={{ fontWeight: "normal" }}>
                  {destination.url}
                </ColumnTwo>
                <ColumnTwo>
                  <ColorChanging style={{ fontWeight: "normal" }}>
                    {destination.status}
                  </ColorChanging>
                </ColumnTwo>
                <ColumnTwo>
                  <Tooltip disableFocusListener title="Delete">
                    <img
                      alt=""
                      src="/images/deletes.svg"
                      style={{ width: "1.1rem", cursor: "pointer" }}
                      onClick = {()=>deleteDestination(destination.destinationId)}
                    />
                  </Tooltip>
                </ColumnTwo>
              </RowData>
            </Div>
          ))}
        </LastDiv>
      </MainContainer>
    </>
  );
}
const MainContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  margin-top: 1.25rem;
  height: auto;
`;
const Div = styled.div`
  padding-bottom: 0.5rem;
  padding-left: 10px;
  @media (min-width: 300px) and (max-width: 768px) {
    padding-left: 0px;
  }
`;
const ButtonIcon = styled.img`
  margin-right: 0.25rem;
  margin-bottom: 3px;
  width: 1.4rem;
`;
const LastDiv = styled.div`
  overflow-y: hidden;
  height: 109px;
  @media (min-width: 300px) and (max-width: 767px) {
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
  margin-bottom: 1.25rem;
  border-bottom: 0.125rem solid #e3e7eb;
  padding-bottom: 10px;
  padding-left: 15px;
`;
const Button = styled.div`
  width: 6.3rem;
  height: 2.6rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #416be0;
  border-radius: 0.375rem;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #1d3c93;
  font-size: 0.875rem;
  cursor: pointer;
  padding-top: 4px;
`;
const ColumnTwo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.875rem;
  font-weight: 600;
  min-width: 200px;
  color: #102c78;
  width: 100%;
  max-width: 11.25rem;
  margin: 0.25rem;
`;
const RowData = styled.div`
  display: flex;
  @media (min-width: 300px) and (max-width: 768px) {
    column-gap: 55px;
  }
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
`;
const ColorChanging = styled.text`
  color: #00a58c;
  font-size: 0.875rem;
`;

const Icon = styled.img`
  width: 1rem;
`;
const Img = styled.img`
  width: 1rem;
  margin-left: 10px;
  @media (min-width: 300px) and (max-width: 768px) {
    margin-right: -49px;
    width: 1rem;
  }
`;
