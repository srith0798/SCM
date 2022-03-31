import React, { useEffect } from "react";
import styled from "styled-components";
// import ContractsService from "../../services/contractsService";
import Dialog from "@mui/material/Dialog";
import utility from "../../utility";
import { makeStyles } from "@material-ui/styles";
import { sessionManager } from "../../managers/sessionManager";
import ShowLoader from "../../common/components/showLoader";
import DestinationService from "../../services/destination";
import { genericConstants } from "../../constants";
import AlertService from "../../services/alert";
import { history } from "../../managers/history";
import { cookiesConstants } from "../../constants";

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
    height: "auto",
    maxHeight: "fitContent",
    maxWidth: 440,
  },
}));

export default function AddAlerts(props) {
  const classes = useStyles();
  const [loader, setLoader] = React.useState(false);
  const [destinations, setDestinations] = React.useState([]);
  const [selectedDestinations, setSelectedDestinations] = React.useState([]);
  const [alertList, setAlertList] = React.useState([]);
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    getDestinations();
  }, []);

  const getAlertList = async () => {
    let request = {
      userId: sessionManager.getDataFromCookies(cookiesConstants.USER_ID),
      isDeleted: false,
    };
    setLoader(true);
    const [error, response] = await utility.parseResponse(
      AlertService.getAlertList(request)
    );
    setLoader(false);
    if (error) return;
    let filter = [];
    response.map((dest)=> {
    if(dest.target.value === props?.address && dest.type === (props.status === "Success" ? genericConstants.ALERT_TYPE.SUCCESSFULL_TRANSACTIONS : genericConstants.ALERT_TYPE.FAILED_TRANSACTIONS)){
      filter.push(dest.destinations);
    }
    return true;
    })
    setAlertList(filter);
  };
  const getDestinations = async () => {
    getAlertList();
    let requestData = {
      userId: sessionManager.getDataFromCookies(cookiesConstants.USER_ID),
      isDeleted: false,
    };
    setLoader(true);
    const [error, response] = await utility.parseResponse(
      DestinationService.getDestinations(requestData)
    );
    if (error) return;
    setDestinations(response);
    setLoader(false);
  };

  const selectDestinations = async (event) => {
    let id = event.target.value;
    if (event.target.checked)
      setSelectedDestinations((prevArray) => [...prevArray, id]);
    else
      setSelectedDestinations(
        selectedDestinations.filter((item) => item !== id)
      );

      console.log("select", event.target.checked);
  };

  const addAlert = async () => {
    let requestData = {
      userId: sessionManager.getDataFromCookies(cookiesConstants.USER_ID),
      type: props.status === "Success" ? genericConstants.ALERT_TYPE.SUCCESSFULL_TRANSACTIONS : genericConstants.ALERT_TYPE.FAILED_TRANSACTIONS, //successfull transaction (constant)
      target: {
        type: genericConstants.ALERT_TYPE.ADDRESS,
        value: props.address, 
        threshold: "",
        network: props.network,
        name: props.name,
      },
      destinations: selectedDestinations, 
    };
    setLoader(true);
    const [error] = await utility.parseResponse(
      AlertService.addAlert(requestData)
    );
    if (error) {
      utility.apiFailureToast(error || "Cannot add Alert");
      return;
    }
    utility.apiSuccessToast("Alert added successfully!");
    setLoader(false);

    setTimeout(()=>{
      props.click();
    },100);
  };


  useEffect(()=>{
  let ids = [];
  alertList.map((main)=>{
    main.map((dest)=>{
    ids.push(dest.destinationId);
    })
  })
  destinations.map((dest)=>{
    if(ids.includes(dest.destinationId)) 
      dest["checked"] = true
       else
      dest["checked"] = false
      return true;
    })
  setRows(destinations);
  },[destinations, alertList]);

  const ApplyButton = styled.button`
  width: 68px;
  height: 34px;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 3px;
  color: #ffffff;
  padding: 6px;
  font-size: 14px;
  margin-right: 25px;
  text-align: center;
  border: none ;
  cursor: pointer;
  margin: 7%;

  @media (min-width: 300px) and (max-width: 414px) {
    margin-left: 13px;
    height: 27px;
    width: 116px;
    padding-top: 2px;
  }
`;

const Link = styled.a`
  display: contents;
  cursor: pointer ;
`;


const Heading = styled.div`
  text-align: left;
  font-size: 0.875rem;
  font-weight: 600;
  color: black;
  width: 100%;
  max-width: 16.25rem;
  margin: 5px 10px 20px 0px;
`;
const ContentDiv = styled.div`
  margin: 30px 10px 10px 10px;
`;
const SubHeadBlue = styled.div`
  font-size: 16px;
  display: flex;
  color: #102c78;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  white-space: pre;
`;
const MainContainer = styled.div`
  width: 100%;
  display: flex;
`;
const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  width: 100%;
  background-color: #ffffff;
  max-width: 700px;
  padding: 20px;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Add = styled.div`
  color: #303134;
  font-size: 20px;
  font-weight: 600;
`;

const Div = styled.div`
  padding-bottom: 0.5rem;
  @media (min-width: 300px) and (max-width: 768px) {
    padding-left: 0px;
  }
`;

const ColumnTwo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.875rem;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  max-width: 11.25rem;
  margin: 0.25rem;
`;
const SubColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.875rem;
  font-weight: 600;
  color: #102c78;
  width: 100%;
  max-width: fit-content;
  margin-left: 20px;
`;
const RowData = styled.div`
  display: flex;
  @media (min-width: 300px) and (max-width: 768px) {
    column-gap: 55px;
  }
`;


const Img = styled.img`
  width: 1rem;
  @media (min-width: 300px) and (max-width: 768px) {
    margin-right: -49px;
    width: 1rem;
  }
`;

const BackgroundChanger = styled.div`
  width: 100%;
  height: 80px;
  background-repeat: no-repeat;
  background: #f7f8fd 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  padding: 10px;
  margin-top: 3%;
  @media (min-width: 300px) and (max-width: 1371px) {
    width: 100%;
    padding: 1rem;
  }
`;


  return (
    <div>
      <ShowLoader state={loader} top={"33%"} />
      <Dialog classes={{ paper: classes.dialogBox }} open>
        <MainContainer>
          <Container>
            <SubContainer>
              <Add>
                Alert for{" "}
                {props.status === "Success" ? "successful" : "failed"}{" "}
                transaction
              </Add>
              <img
                style={{ cursor: "pointer" }}
                alt=""
                src="/images/close.svg"
                onClick={props.click}
              />
            </SubContainer>
            <ContentDiv>
              <SubHeadBlue>Contract Name</SubHeadBlue>
              <Heading>{props?.name}</Heading>
              <SubHeadBlue>Address</SubHeadBlue>
              <Heading>{props?.address}</Heading>
              <SubHeadBlue>Choose Destination</SubHeadBlue>
              {rows.length > 0
                ? rows.length > 0 &&
                  rows.map((destination) => (
                    <BackgroundChanger>
                      <Div>
                        <RowData>
                          <Img alt="" src="/images/email.svg" />
                          <ColumnTwo style={{ color: "#191919" }}>
                            {destination.type}
                          </ColumnTwo>
                          <div>
                            <label class="switch">
                              <input
                                checked={destination.checked}
                                type="checkbox"
                                value={destination.destinationId}
                                onChange={(event) => selectDestinations(event)}
                              />
                              <span class="slider round"></span>
                            </label>
                          </div>
                        </RowData>
                        <SubColumn style={{ fontWeight: "normal" }}>
                          {destination.url}
                        </SubColumn>
                      </Div>
                    </BackgroundChanger>
                  ))
                : (
                  <Heading>
                    Add destination from <Link onClick={() =>
                  history.push({
                    pathname: "/alerting",
                    state: {
                      id: "add",
                    },
                  })
                }>here</Link>

                  </Heading>
                )}
            </ContentDiv>
          </Container>
        </MainContainer>
        <ApplyButton disabled={destinations.length === 0} onClick={addAlert}>Add</ApplyButton>
      </Dialog>
    </div>
  );
}

