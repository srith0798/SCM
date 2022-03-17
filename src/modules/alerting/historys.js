import React , {useEffect} from "react";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";
import AlertService from "../../services/alert";
import utility from "../../utility";
import { sessionManager } from "../../managers/sessionManager";
import moment from "moment"
import ReactPaginate from "react-paginate";

export default function Historys() {
  const [notifications, setNotifications] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [countToggle, setCountToggle] = React.useState(10);

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

  const changePage = (value) => {
    // setValueCheck(value.selected);
    // if(setFrom>0 || select === 2 || select === 3){
    //   filterSearch(Math.ceil(value.selected * countToggle),
    //   countToggle);
    // }
    // else if(selected.length > 0) {
    //   getTransaction(
    //         selected,
    //         Math.ceil(value.selected * countToggle),
    //         countToggle
    //       );
    // }
  };

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <div>
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
              <ColumnTwo>{moment.utc(notification.payload.timestamp * 1000).format("DD.M.YYYY HH:mm")}</ColumnTwo>
            </RowData>
            </Div>
        ))}
       
      </DetailBox>
    </MainContainer>
    <PageVerifyCheck>
        <PaginationDiv>
          <BottomLabel>
            Per Page
            <SelectionDivStyle
              buttonToggle={countToggle}
              onClick={() => setCountToggle(10)}
            >
              10
            </SelectionDivStyle>
            <SelectionDivStyleTwo
              buttonToggle={countToggle}
              onClick={() => setCountToggle(20)}
            >
              20
            </SelectionDivStyleTwo>
            <SelectionDivStyleThree
              buttonToggle={countToggle}
              onClick={() => setCountToggle(50)}
            >
              50
            </SelectionDivStyleThree>
          </BottomLabel>
          <ReactPaginate
            previousLabel={"<-"}
            nextLabel={"->"}
            pageCount={page === 0 ? 1 : page}
            breakLabel={"..."}
            initialPage={0}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            pageRangeDisplayed={0}
            marginPagesDisplayed={0}
          />
        </PaginationDiv>
        </PageVerifyCheck>
    </div>
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

const PageVerifyCheck = styled.div`
  display: ${(props) => (props.check === 1? "none" : "block")};
  height: auto;
`;

const PaginationDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-right: 0;
  & .paginationBttns {
    list-style: none;
    display: flex;
    justify-content: center;
  }
  & .paginationBttns a {
    padding: 7px;
    font-size: 10px;
    border-radius: 5px;
    border: 1px solid lightgrey;
    color: skyblue;
    cursor: pointer;
  }
  & .paginationActive a {
    color: white !important;
    background: #3163f0;
  }
  & .next a {
    border: none;
  }
  & .previous a {
    border: none;
  }
`;


const BottomLabel = styled.div`
  display: flex;
  white-space: nowrap;
  font-size: 12px;
  color: #797979;
  margin-right: 5px;
  font-weight: 500;
  font-family: "Inter", Medium;
`;

const SelectionDivStyle = styled.div`
  font-size: 12px;
  font-weight: 600;
  font-family: Inter;
  margin-right: 10px;
  border-radius: 4px 4px 4px 4px;
  height: 20px;
  width: 20px;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.buttonToggle === 10 ? "#ffffff" : "#191919")};

  background-color: ${(props) =>
    props.buttonToggle === 10 ? "#3163F0" : "#FFFFFF"};
`;
const SelectionDivStyleTwo = styled.div`
  font-size: 12px;
  font-weight: 600;
  font-family: Inter;
  margin-right: 10px;
  border-radius: 4px 4px 4px 4px;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.buttonToggle === 20 ? "#ffffff" : "#191919")};

  background-color: ${(props) =>
    props.buttonToggle === 20 ? "#3163F0" : "#FFFFFF"};
`;
const SelectionDivStyleThree = styled.div`
  font-size: 12px;
  font-weight: 600;
  font-family: Inter;
  margin-right: 10px;
  border-radius: 4px 4px 4px 4px;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.buttonToggle === 50 ? "#ffffff" : "#191919")};

  background-color: ${(props) =>
    props.buttonToggle === 50 ? "#3163F0" : "#FFFFFF"};
`;

