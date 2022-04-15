import React, { useEffect } from "react";
import { Row } from "simple-flexbox";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";
import utility from "../../utility";
import DestinationService from "../../services/destination";
import { sessionManager } from "../../managers/sessionManager";
import AddDestination from "../popup/addDestination";
import { cookiesConstants, genericConstants } from "../../constants";

export default function Destination() {
  const [destinations, setDestinations] = React.useState([]);
  const [addDestinationPopup, setAddDestinationPopup] = React.useState(false);
  const [destinationType, setDestinationType] = React.useState("");

  const getDestinations = async () => {
    let requestData = {
      userId: sessionManager.getDataFromCookies(cookiesConstants.USER_ID),
      isDeleted: false,
    };
    const [error, response] = await utility.parseResponse(
      DestinationService.getDestinations(requestData)
    );
    if (error) return;
    setDestinations(response);
  };
  const openDestinationPopup = (value) => {
    setAddDestinationPopup(true);
    setDestinationType(value);
  };
  const addDestination = async (label, url, channelName) => {
    let requestData = {
      userId: sessionManager.getDataFromCookies(cookiesConstants.USER_ID),
      type: destinationType,
      label: label,
      url: url,
      channelName: channelName,
      status:
        destinationType === "EMAIL"
          ? genericConstants.DESTINATION_STATUS.UNVERIFIED.type
          : genericConstants.DESTINATION_STATUS.NOT_CONNECTED.type,
    };
    const [error, response] = await utility.parseResponse(
      DestinationService.addDestination(requestData)
    );
    if (error) {
      utility.apiFailureToast(error || "Cannot Add Destination");
      setAddDestinationPopup(false);
      return;
    }
    setDestinations(response);
    setAddDestinationPopup(false);
    getDestinations();
  };
  const deleteDestination = async (destinationId) => {
    const [error] = await utility.parseResponse(
      DestinationService.deleteDestination(destinationId)
    );
    if (error) return;
    // utility.apiSuccessToast("Destination Deleted Successfully");
    await getDestinations();
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };
  const resendEmail = async (destination) => {
    let req = {
      destinationId: destination.destinationId,
      sessionToken: destination.sessionToken,
      url: destination.url,
    };
    const [error] = await utility.parseResponse(
      DestinationService.resendEmail(req)
    );
    if (error) {
      utility.apiFailureToast(error ? error : "Cannot Resend Email");
      return;
    }
    // utility.apiSuccessToast("Email Sent");
  };
  useEffect(() => {
    getDestinations();
  }, []);

  const MainContainer = styled.div`
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 0.375rem;
    height: auto;
    min-height: 610px;
  `;
  const Div = styled.div`
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    padding-left: 10px;
    height: fit-content;
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
    height: fit-content;
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
    font-weight: 500;
    color: #102c78;
    width: 100%;
    border-bottom: 0.125rem solid #e3e7eb;
    padding-bottom: 10px;
    padding-left: 7px;
    margin-top: 1.5rem;
    @media (min-width: 300px) and (max-width: 767px) {
      margin-top: 1.5rem;
      margin-bottom: 0px;
    }
  `;
  const ColumnActive = styled.div`
    display: flex;
    font-size: 0.875rem;
    font-weight: 500;
    color: #102c78;
    width: 100%;
    border-bottom: 0.125rem solid #e3e7eb;
    padding-bottom: 10px;
    padding-left: 9px;
    margin-top: 1.5rem;
    margin-left: 1%;
    @media (min-width: 300px) and (max-width: 767px) {
      margin-top: 1.5rem;
      margin-bottom: 0px;
    }
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
    @media (min-width: 300px) and (max-width: 400px) {
      width: 90px;
      font-size: 11px;
    }
  `;
  const ColumnTwo = styled.div`
    display: flex;
    flex-flow: column nowrap;
    font-size: 0.875rem;
    font-weight: 400;
    max-width: 250px;
    color: #102c78;
    width: 100%;
    margin: 0.25rem;
    word-break: break-all;
  `;
  const EmailDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.875rem;
  font-weight: 400;
  max-width: 100px;
  color: #102c78;
  width: 100%;
  margin: 0.25rem;
  word-break: break-all;
`;
  const DeleteDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    font-size: 0.875rem;
    font-weight: 600;
    max-width: 250px;
    color: #102c78;
    width: fit-content;
    margin: 0.25rem;
    word-break: break-all;
    justify-content: center;
    align-items: center;
  `;

  const ResendEmail = styled.div`
    display: flex;
    flex-flow: column nowrap;
    font-size: 0.875rem;
    font-weight: 400;
    max-width: 250px;
    color: rgb(49, 99, 240);
    width: 100%;
    margin: 0.25rem;
    word-break: break-all;
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
    max-width: 13.25rem;
    margin-bottom: 1.25rem;
    margin-left: 8px;
    @media (min-width: 300px) and (max-width: 767px) {
      margin: 0rem;
      padding: 20px;
      max-width: initial;
    }
  `;
  const ColorChanging = styled.text`
    color: #00a58c;
    font-size: 0.875rem;
  `;
  const Img = styled.img`
    width: 1rem;
    margin-left: 8px;
    height: 30px;
    @media (min-width: 300px) and (max-width: 768px) {
      margin-right: -49px;
      width: 1rem;
    }
  `;

  return (
    <>
      <MainContainer>
        <Div>
          <Row>
            <ColumnOne style={{ borderBottom: "none" }}>Destinations</ColumnOne>
          </Row>
          {addDestinationPopup && (
            <AddDestination
              click={addDestination}
              type={destinationType}
              close={() => setAddDestinationPopup(false)}
            />
          )}
          <RowContainer>
            <Button onClick={() => openDestinationPopup("SLACK")}>
              <ButtonIcon alt="" src="/images/slack.svg" />
              Slack
            </Button>
            {/* <Button onClick={() => openDestinationPopup("WEBHOOK")} >
              <ButtonIcon alt="" src="/images/webhook.svg" />
              Webhook
            </Button> */}
            <Button onClick={() => openDestinationPopup("EMAIL")}>
              <ButtonIcon alt="" src="/images/email.svg" />
              Email
            </Button>
          </RowContainer>
        </Div>

        <ColumnActive>
          Active Destination
          <Tooltip
            disableFocusListener
            title="Users' active notifications destination "
          >
            <ToolTipIcon src="/images/tool-tip.svg" />
          </Tooltip>
        </ColumnActive>
        <LastDiv>
          {destinations &&
            destinations.length > 0 &&
            destinations.map((destination) => (
              <Div>
                <RowData>
                  <Img alt="" src="/images/email.svg" />
                  <EmailDiv style={{ color: "#191919" }}>
                    {destination.type}
                  </EmailDiv>
                  <ColumnTwo style={{ fontWeight: "normal" }}>
                    {destination.url}
                  </ColumnTwo>
                  {destination?.status ? (
                    <ColumnTwo>
                      <ColorChanging style={{ fontWeight: "normal" }}>
                        {destination?.status
                          ? genericConstants.DESTINATION_STATUS[
                              destination?.status
                            ].name
                          : ""}
                      </ColorChanging>
                    </ColumnTwo>
                  ) : (
                    ""
                  )}
                  {destination.type === "EMAIL" &&
                  destination.status !==
                    genericConstants.DESTINATION_STATUS.VERIFIED.type ? (
                    <ResendEmail onClick={() => resendEmail(destination)}>
                      Resend Email
                    </ResendEmail>
                  ) : (
                    <ColumnTwo></ColumnTwo>
                  )}
                  <DeleteDiv>
                    <Tooltip disableFocusListener title="Delete">
                      <img
                        alt=""
                        src="/images/deletes.svg"
                        style={{ width: "1.1rem", cursor: "pointer" }}
                        onClick={() =>
                          deleteDestination(destination.destinationId)
                        }
                      />
                    </Tooltip>
                  </DeleteDiv>
                </RowData>
              </Div>
            ))}
        </LastDiv>
      </MainContainer>
    </>
  );
}
