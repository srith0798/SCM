import React from "react";
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

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
    height: "auto",
    maxHeight: "fitContent",
    maxWidth: 440,
    top: "150px !important",
  },
}));

export default function AddAlerts(props) {
  const classes = useStyles();
  // const [hideStep, setHideStep] = useState(true);
  // const [checkBox, setCheckBox] = useState(false);
  // const [address, setAddress] = React.useState("");
  // const [verifyAddress, setVerifyAddress] = React.useState("");
  const [loader, setLoader] = React.useState(false);
  // const [error, setError] = useState("");
  const [destinations, setDestinations] = React.useState([]);
  const [selectedDestinations, setSelectedDestinations] = React.useState([]);
  

  // const checkAddress = async () => {
  //   setLoader(true);
  //   const [error] = await utility.parseResponse(
  //     ContractsService.checkAddress(address)
  //   );
  //   setLoader(false);
  //   if (error) {
  //     utility.apiFailureToast(error);
  //     return;
  //   }
  //   setVerifyAddress(address);
  // };

  // const addContract = async () => {
  //   let userId = sessionManager.getDataFromCookies("userId");
  //   let requestData = {
  //     contractAddress: address,
  //     userId: userId,
  //   };
  //   setLoader(true);
  //   const [error, response] = await utility.parseResponse(
  //     ContractsService.addContract(requestData)
  //   );
  //   setLoader(false);
  //   if (error) {
  //     setError(error);
  //     return;
  //   }
  //   if (response) {
  //     props.click();
  //     props.getContractList();
  //   }
  // };

  // const handleEnterKey = (e) => {
  //   if (e.key === "Enter") {
  //     checkAddress();
  //   }
  // };
  // console.log("check", checkBox);

  React.useEffect(() => {
    getDestinations();
  }, []);

  const getDestinations = async () => {
    let requestData = {
      userId: sessionManager.getDataFromCookies("userId"),
      isDeleted: false,
    };
    const [error, response] = await utility.parseResponse(
      DestinationService.getDestinations(requestData)
    );
    if (error) return;
    setDestinations(response);
  };

  const selectDestinations = async (event) => {
    let id = event.target.value;
    if (event.target.checked)
      setSelectedDestinations((prevArray) => [...prevArray, id]);
    else
      setSelectedDestinations(
        selectedDestinations.filter((item) => item !== id)
      );
  };

  const addAlert = async () => {
    let requestData = {
      userId: sessionManager.getDataFromCookies("userId"),
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
    const [error] = await utility.parseResponse(
      AlertService.addAlert(requestData)
    );
    if (error) {
      utility.apiFailureToast(error || "Cannot add Alert");
      return;
    }
    utility.apiSuccessToast("Alert added successfully!");

    setTimeout(()=>{
      props.click();
    },100);
  };



  return (
    <div>
      <ShowLoader state={loader} top={"33%"} />
      <Dialog classes={{ paper: classes.dialogBox }} open>
        <MainContainer>
          <Container>
            <SubContainer>
              <Add>
                Alert for{" "}
                {props.status === "Success" ? "successfull" : "failed"}{" "}
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
              {destinations.length > 0
                ? destinations.length > 0 &&
                  destinations.map((destination) => (
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

// const CheckBox = styled.input`
//   outline: none;
// `;
// const XDCLogo = styled.img`
//   margin-bottom: 5px;
// `;
// const BlueLine = styled.div`
//   width: 115px;
//   border-bottom: 2px solid blue;
//   margin-left: -8px;
// `;
// const AddressImport = styled.div`
//   color: #436ce0;
//   margin-left: 5px;
//   font-size: 0.8rem;
//   font-weight: 600;
// `;
// const ImportBox = styled.div`
//   background-color: #f0f2fc;
//   width: 100%;
// `;
// const ErrorTag = styled.div`
//   color: red;
//   font-size: 16px;
//   padding: 0px 0px 8px 28px;
//   margin-bottom: 0px;
// `;
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

// const IconImport = styled.div`
//   padding: 8px 8px 0px 8px;
//   border-bottom: 1px solid #c3c3c3;
// `;
// const SelectImport = styled.div`
//   display: flex;
//   padding: 5px;
//   align-items: center;
//   margin-top: 18px;
// `;

// const Text = styled.div`
//   font-size: 0.8rem;
//   font-weight: 600;
//   margin-bottom: 15px;
//   color: #303134;
// `;
const MainContainer = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: center;
  align-items: center; */
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
// const Content = styled.div`
//   color: #303134;
//   margin-top: 15px;
//   font-size: 0.8rem;
//   font-weight: 600;
//   white-space: nowrap;
//   @media (min-width: 300px) and (max-width: 767px) {
//     white-space: unset;
//   }
// `;
// const Input = styled.input`
//   background-image: url("/images/search-icon.svg");
//   background-repeat: no-repeat;
//   background-position: 8px;
//   padding-left: 34px;
//   background-size: 14px;
//   position: relative;
//   background-color: #ffffff;
//   border: none;
//   border-radius: 4px;
//   width: 100%;
//   background-color: #f0f2fc;
//   height: 30px;
//   margin-bottom: 5px;
//   margin-top: 15px;
//   font-size: 0.8rem;
//   font-weight: 600;
//   outline: none;
//   color: #436ce0;
// `;
// const Button = styled.button`
//   background: #3163f0 0% 0% no-repeat padding-box;
//   border-radius: 4px;
//   border: 0px;
//   color: #ffffff;
//   max-width: 172px;
//   width: 100%;
//   font-size: 0.9rem;
//   font-weight: 600;
//   padding: 6px;
//   margin-top: 20px;
//   margin-bottom: 20px;
//   cursor: pointer;
// `;
// const HideSteps = styled.button`
//   border: none;
//   border-radius: 4px;
//   font-size: 0.7rem;
//   font-weight: 600;
//   background-color: #ffffff;
//   color: #3163f0;
//   cursor: pointer;
//   background-image: url("/images/arrrow.svg");
//   background-repeat: no-repeat;
//   width: 100%;
//   max-width: 114px;
//   padding-left: 26px;
//   background-position: right;
//   position: relative;
//   margin-top: 12px;
// `;

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
  max-width: 11.25rem;
  margin-left: 20px;
`;
const RowData = styled.div`
  display: flex;
  @media (min-width: 300px) and (max-width: 768px) {
    column-gap: 55px;
  }
`;

// const ColorChanging = styled.text`
//   color: #00a58c;
//   font-size: 0.875rem;
// `;

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
