import React , {useEffect} from "react";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";
import AlertService from "../../services/alert";
import utility from "../../utility";
import { sessionManager } from "../../managers/sessionManager";
import moment from "moment"

export default function Historys() {
  const [notifications, setNotifications] = React.useState([]);

  const getNotifications = async () => {
    let request = {
        userId: sessionManager.getDataFromCookies("userId")
    };
    const [error , response] = await utility.parseResponse(
      AlertService.getHistoryList(request)
    );
    if (!response || error) return;
    setNotifications(response?.historyList);
  };

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <MainContainer>
      <DetailBox>
        <NewDiv>
          <RowContainer>
            <ColumnOne style={{ paddingLeft: "2px" }}>
              Alert Type
              <Tooltip disableFocusListener title="Transaction status">
                <ToolTipIcon src="/images/tool-tip.svg" />
              </Tooltip>
            </ColumnOne>
            <ColumnOne>
              Contract
              <Tooltip disableFocusListener title="Name of the smart contract">
                <ToolTipIcon src="/images/tool-tip.svg" />
              </Tooltip>
            </ColumnOne>
            <ColumnOne>
              Tx Hash
              <Tooltip
                disableFocusListener
                title="Unique transaction identifier, also known as the Transaction ID"
              >
                <ToolTipIcon src="/images/tool-tip.svg" />
              </Tooltip>
            </ColumnOne>
            <ColumnOne>
              Network
              <Tooltip
                disableFocusListener
                title="The executing blockchain network"
              >
                <ToolTipIcon src="/images/tool-tip.svg" />
              </Tooltip>
            </ColumnOne>
            <ColumnOne>
              When
              <Tooltip
                disableFocusListener
                title="Date and time of transaction execution"
              >
                <ToolTipIcon src="/images/tool-tip.svg" />
              </Tooltip>
            </ColumnOne>
          </RowContainer>
        </NewDiv>
        {notifications && notifications.length>0 && notifications.map((notification)=>(
            <Div>
            <RowData>
              <ColumnTwo>{notification.title}</ColumnTwo>
              <ColumnTwo>{notification.payload.typeName}</ColumnTwo>
              <ColumnTwo>{utility.minimizeAddress(notification.payload.txHash)}</ColumnTwo>
              <ColumnTwo>{notification.payload.network}</ColumnTwo>
              <ColumnTwo>{moment().utc(notification.payload.timestamp).format("DD.M.YYYY HH:mm")}</ColumnTwo>
            </RowData>
            </Div>
        ))}
       
      </DetailBox>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  opacity: 1;
  margin-top: 1.25rem;
  height: 15.625rem;
  overflow-y: hidden;
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

const NewDiv = styled.div`
  padding: 0.738rem;
  border-bottom: 0.063rem solid #e3e7eb;
`;
const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Div = styled.div`
  padding: 0.938rem;
  border-bottom: 0.063rem solid #e3e7eb;
  @media (min-width: 300px) and (max-width: 1024px) {
    width: fit-content;
  }
`;
const RowData = styled.div`
  display: flex;
`;
const RowContainer = styled.div`
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
  min-width: 160px;

  @media (min-width: 300px) and (max-width: 767px) {
    width: 100%;
    min-width: 181px;
  }
`;

const ColumnTwo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.875rem;
  color: #191919;
  font-size: 0.875rem;
  width: 100%;
  min-width: 160px;
  @media (min-width: 300px) and (max-width: 767px) {
    width: 100%;
    min-width: 180px;
  }
`;
