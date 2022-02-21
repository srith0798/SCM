import React , {useEffect} from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import Line from "./graph";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import ContractsService from "../../services/contractsService";
import AnalyticsService from "../../services/analytics";
import { sessionManager } from "../../managers/sessionManager";
import FullScreen from "./fullScreen";
import TopCalls from "./topCalls";
import utility from "../../utility";
import moment from "moment";
export default function MainComponent(props) {
  const [isSetOpen, setOpen] = React.useState(false);
  const [contracts, setContracts] = React.useState([]);
  const [selected, setSelected] = React.useState({});
  const [noOfTransactions , setNoOfTransactions] = React.useState([]);
  const [gasPriceData , setGasPriceData] = React.useState([]);
  const[activeUserData, setActiveUserData]=React.useState([]);
  const[transactionCount , setTransactionCount] = React.useState([]);
  const[expandGraph , setExpandGraph] = React.useState(0);
  const[graphName , setGraphName] =React.useState("");
  const[data , setData] =React.useState([]);
  const[transactionOverTimeSelect, setTransactionOverTimeSelect]=React.useState("5");
  const[gasUsedSelect, setGasUsedSelect]=React.useState("5");
  const[activeUserSelect, setActiveUserSelect]=React.useState("5");
  const[dropDownValue, setDropDownValue]=React.useState("5");


  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: "absolute",
    top: 90,
    right: 0,
    left: 0,
    zIndex: 1,
    p: 1,
    bgcolor: "background.paper",
    width: "100%",
    maxWidth: "453px",
    background: "#f5f6fd 0% 0% no-repeat padding-box",
    border: "1px solid #d5e0ff",
    borderRadius: "6px",
    overflowY: "auto",
    marginTop: "4px",
    fontSize: "0.875rem",
    fontWeight: "600",
    color: "#191919",
  };

  const getContractNames = async (skip = 0, limit = 10) => {
    let userId = sessionManager.getDataFromCookies("userId");
    try {
      const requestData = {
        skip: skip,
        limit: limit,
        userId: userId,
      };
     
      const response = await ContractsService.getContractsList(requestData);
      await getTransactionAnalytics(response.contractList[0].address)
      await getGasUsedAnalytics(response.contractList[0].address)
      await getActiveUsersAnalytics(response.contractList[0].address)
      setContracts(response.contractList);
      setSelected(response.contractList[0])
      if (response.contractList.length === 0) {return}
    } catch (e) {
      
    }
  };
  const getTransactionAnalytics = async(address, event) =>{
    // console.log("eee", event.target.value);
    if(event?.target?.value){
    setTransactionOverTimeSelect(event.target.value)
    setDropDownValue(event.target.value)
    }
    const req = {
      address :"xdc8a3cc832bb6b255622e92dc9d4611f2a94d200da",
      numberOfDays: event?.target?.value || 5
    }
    const [error , response ] = await utility.parseResponse(AnalyticsService.getTransactionsAnalytics(req));
    if(error) return;
    var arr = [{
      id: "Transactions",
      color: "hsl(248, 70%, 50%)",
      data: []
  }];

  var resultData = []
  response.map(items => {
      resultData.push({
          x: items.dateString,
          y: items.count
      })
      return true;

      // moment(items.timestamp * 1000).format("MMMM Do YYYY"),moment(items.timestamp * 1000).format("MMMM Do YYYY"),

  })

  arr[0].data = resultData;
  setNoOfTransactions(arr);
  setData(arr)
  // setTransactionCount(response)
  
  
  }

  const getGasUsedAnalytics = async(address, event) =>{
    // console.log("eee", event.target.value);
    if(event?.target?.value){
    setGasUsedSelect(event.target.value)
    setDropDownValue(event.target.value)
    }
    const req = {
      address :"xdc8a3cc832bb6b255622e92dc9d4611f2a94d200da",
      numberOfDays: event?.target?.value || 5
    }
    const [error , response ] = await utility.parseResponse(AnalyticsService.getGasUsedAnalytics(req));
    if(error) return;
    var arr = [{
      id: "GasPrice",
      color: "hsl(248, 70%, 50%)",
      data: []
  }];

  var resultData = []
  response.map(items => {
      resultData.push({
          x: items.dateString,
          y: items.gasUsedOverTime
      })
      return true;

      // moment(items.timestamp * 1000).format("MMMM Do YYYY"),moment(items.timestamp * 1000).format("MMMM Do YYYY"),

  })

  arr[0].data = resultData;
  setGasPriceData(arr);
  setData(arr);
  // setTransactionCount(response)
  
  
  }

  const getActiveUsersAnalytics = async(address, event) =>{
    // console.log("eee", event.target.value);
    if(event?.target?.value){
    setActiveUserSelect(event.target.value)
    setDropDownValue(event.target.value)
    }
    const req = {
      address :"xdc8a3cc832bb6b255622e92dc9d4611f2a94d200da",
      numberOfDays: event?.target?.value || 5
    }
    const [error , response ] = await utility.parseResponse(AnalyticsService.getActiveUsersAnalytics(req));
    if(error) return;
    var arr = [{
      id: "ActiveUsers",
      color: "hsl(248, 70%, 50%)",
      data: []
  }];

  var resultData = []
  response.map(items => {
      resultData.push({
          x: items.dateString,
          y: items.activeUsers
      })
      return true;

      // moment(items.timestamp * 1000).format("MMMM Do YYYY"),moment(items.timestamp * 1000).format("MMMM Do YYYY"),

  })

  arr[0].data = resultData;
  setActiveUserData(arr);
  setData(arr);
  // setTransactionCount(response)
  
  
  }
  const callAnalyticsFunctions = async(address, event) =>{
    if(expandGraph === 1)
      await getTransactionAnalytics(address , event);
    if(expandGraph=== 2)
      await getGasUsedAnalytics(address , event)  
  }

  let length = transactionCount ? transactionCount?.data?.length : "";
  const firstDate =
  transactionCount && transactionCount?.length == 0
      ? ""
      : moment(transactionCount[0]?.date).format("D MMM");
  const lastDate =
  transactionCount && transactionCount?.length == 0
      ? ""
      : moment(transactionCount[length]?.date).format("D MMM");

  const selectContract = (item) =>{
    setSelected(item);
  }
  useEffect(() => {
    getContractNames();

  }, []);

 const expandGraphs =  (value,data, dropDownValue) =>{
  if (value === 1) {setGraphName("Transactions over time"); setData(data)}
  if (value === 2) {setGraphName("Gas used overtime"); setData(data)}
  if (value === 3) setGraphName("Active users");
  if (value === 4) setGraphName("Top Callers");
  if (value === 5) setGraphName("Top Function Calls");
  
  setExpandGraph(value);
  setDropDownValue(dropDownValue);
  }

  return (
    <>
    {expandGraph === 0 ? 
       <div style={{ overflow: "auto" }}>
       <Column>
         <Row>
           <MainContainer>
             <SubContainer>
               <MainHeading>Analytics</MainHeading>
               <Tooltip disableFocusListener title="Refresh">
                 <BackImage src="/images/refresh.svg" />
               </Tooltip>
             </SubContainer>
             <Container>
               <View>View analytics for contract</View>
               <Content>
                 You can view analytics data per contract by using the contract
                 picker below.
               </Content>
               <ClickAwayListener onClickAway={handleClickAway}>
                 <Box sx={{ position: "relative" }}
                  selected={selected?.address}
                 >
                   <DropDown onClick={handleClick}>
                     {selected?.contractName ? selected.contractName : "Contract"}
                     <img
                       style={{ marginLeft: "0.5rem" }}
                       alt=""
                       src="/images/XDCmainnet.svg"
                     />
                     <br />
                     <TransactionHash>{selected?.address}</TransactionHash>
                     <Image src="/images/Arrrow.svg" />
                   </DropDown>
                   {isSetOpen ? (
                   <Box sx={styles}>
                     {contracts.length &&
                       contracts.map((item) => (
                         <div onClick={()=>selectContract(item)}>
                           <Label>Contract</Label>
                           {item?.contractName ? item.contractName : "Contract"}
                           <br />
                           <TransactionHash>{item.address}</TransactionHash>
                         </div>
                       ))}
                   </Box>
                 ) : null}
               </Box>
               </ClickAwayListener>
             </Container>
             {/* <ScrollableDiv> */}
               <ResponsiveRow>
                 
          <LineGraphContainer
           heading="Transactions over time" 
           expandGraphs={expandGraphs} 
           getAnalyticsData = {getTransactionAnalytics} 
           selectValue={transactionOverTimeSelect}
           data={noOfTransactions}
           firstDate={firstDate}
           lastDate={lastDate}
           graphNo={1}
          ></LineGraphContainer>
        <LineGraphContainer 
          heading="Gas used over time" 
          expandGraphs={expandGraphs} 
          getAnalyticsData = {getGasUsedAnalytics} 
          selectValue={gasUsedSelect}
          data={gasPriceData}
          firstDate={firstDate}
          lastDate={lastDate}
          graphNo={2}

          ></LineGraphContainer>
          </ResponsiveRow>
               <ResponsiveRow>
                 <GraphContainer>
                   <SubContainer>
                     <div style={{ display: "flex", alignItems: "center" }}>
                       <Head>
                         Top Callers
                         <Tooltip
                           disableFocusListener
                           title="List of top callers in past days"
                         >
                           <ToolTipIcon src="/images/tool-tip.svg" />
                         </Tooltip>
                       </Head>
                       <BackImage
                         src="/images/expand.svg"
                         onClick={() => props.changeExpand(4)}
                       />
                     </div>
                     <select id="cars" className="select">
                       <option value="volvo" className="select-dropdown">
                         Last 5 days
                       </option>
                       <option value="saab" className="select-dropdown">
                         Last 7 days
                       </option>
                       <option value="mercedes" className="select-dropdown">
                         Last 15 days
                       </option>
                       <option value="audi" className="select-dropdown">
                         Last 25 days
                       </option>
                     </select>
                   </SubContainer>
                   <Div>
                     <ContractFrom>Contract from</ContractFrom>
                     <Network>
                       xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c
                     </Network>
                   </Div>
                   <Div>
                     <ContractFrom>Network</ContractFrom>
                     <Network>Mainnet</Network>
                   </Div>
                   <Div>
                     <ContractFrom>Contract from</ContractFrom>
                     <Network>
                       xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c
                     </Network>
                   </Div>
                   <Div>
                     <ContractFrom>Network</ContractFrom>
                     <Network>Mainnet</Network>
                   </Div>
                   <Div>
                     <ContractFrom>Network</ContractFrom>
                     <Network>Mainnet</Network>
                   </Div>
                 </GraphContainer>
                 <LineGraphContainer 
                    heading="Active Users" 
                    expandGraphs={expandGraphs} 
                    getAnalyticsData = {getActiveUsersAnalytics} 
                    selectValue={activeUserSelect}
                    data={activeUserData}
                    firstDate={firstDate}
                    lastDate={lastDate}
                    graphNo={3}

                  ></LineGraphContainer>
                 {/* <GraphContainer>
                   <SubContainer>
                     <div style={{ display: "flex", alignItems: "center" }}>
                       <Head>
                         Active users
                         <Tooltip
                           disableFocusListener
                           title="Number of active users in the given time range"
                         >
                           <ToolTipIcon src="/images/tool-tip.svg" />
                         </Tooltip>
                       </Head>
                       <BackImage
                         src="/images/expand.svg"
                         onClick={() => props.changeExpand(3)}
                       />
                     </div>
                     <select id="cars" className="select">
                       <option value="volvo" className="select-dropdown">
                         Last 5 days
                       </option>
                       <option value="saab" className="select-dropdown">
                         Last 7 days
                       </option>
                       <option value="mercedes" className="select-dropdown">
                         Last 15 days
                       </option>
                       <option value="audi" className="select-dropdown">
                         Last 25 days
                       </option>
                     </select>
                   </SubContainer>
                   <Line />
                 </GraphContainer> */}
               </ResponsiveRow>
               <GraphContainer>
                 <SubContainer>
                   <div style={{ display: "flex", alignItems: "center" }}>
                     <Head>
                       Top Function calls
                       <Tooltip disableFocusListener title="URL of the network">
                         <ToolTipIcon src="/images/tool-tip.svg" />
                       </Tooltip>
                     </Head>
                     <BackImage
                       src="/images/expand.svg"
                       onClick={() => props.changeExpand(5)}
                     />
                   </div>
                   <select id="cars" className="select">
                     <option value="volvo" className="select-dropdown">
                       Last 5 days
                     </option>
                     <option value="saab" className="select-dropdown">
                       Last 7 days
                     </option>
                     <option value="mercedes" className="select-dropdown">
                       Last 15 days
                     </option>
                     <option value="audi" className="select-dropdown">
                       Last 25 days
                     </option>
                   </select>
                 </SubContainer>
                 <Div>
                   <ContractFrom>Contract from</ContractFrom>
                   <Network>xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c</Network>
                 </Div>
                 <Div>
                   <ContractFrom>Network</ContractFrom>
                   <Network>Mainnet</Network>
                 </Div>
                 <Div>
                   <ContractFrom>Contract from</ContractFrom>
                   <Network>xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c</Network>
                 </Div>
                 <Div>
                   <ContractFrom>Network</ContractFrom>
                   <Network>Mainnet</Network>
                 </Div>
                 <Div>
                   <ContractFrom>Network</ContractFrom>
                   <Network>Mainnet</Network>
                 </Div>
               </GraphContainer>
             {/* </ScrollableDiv> */}
           </MainContainer>
         </Row>
       </Column>
     </div>   
    : ""}
    {expandGraph > 0 && expandGraph < 4 && (
      <FullScreen graphName={graphName} data={data}
     
        getAnalytics={callAnalyticsFunctions} 
      
        dropDownValue={dropDownValue}/>
    )}
    {expandGraph > 3 && (
      <TopCalls graphName={graphName} changeExpand={expandGraphs} />
    )}
  </>
   
  );
}

const LineGraphContainer = (props) =>{
  return(
  // <ResponsiveRow>
  <GraphContainer>
    <SubContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Head>
          {props.heading}
          <Tooltip
            disableFocusListener
            title="Transaction executed in due course"
          >
            <ToolTipIcon src="/images/tool-tip.svg" />
          </Tooltip>
        </Head>
        <BackImage
          src="/images/expand.svg"
          onClick={() => props.expandGraphs(props.graphNo, props.data ,props.selectValue)}
        />
      </div>
      <select id="noOfDays" className="select" value={props.selectValue}  onChange={(event)=>{props.getAnalyticsData("" , event)}}>
        <option value="5" className="select-dropdown">
          Last 5 days
        </option>
        <option value="7" className="select-dropdown">
          Last 7 days
        </option>
        <option value="15" className="select-dropdown">
          Last 15 days
        </option>
        <option value="25" className="select-dropdown">
          Last 25 days
        </option>
      </select>
    </SubContainer>
   <GraphSize> <Line data={props.data} firstDate={props.firstDate} lastDate ={props.lastDate}/></GraphSize>
  </GraphContainer>
 
// </ResponsiveRow>
  )
}
const ResponsiveRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  justify-content: space-between;
  @media (min-width: 300px) and (max-width: 1024px) {
    display: block;
  }
`;
const MainContainer = styled.div`
  width: 100%;
  padding-left: 71px;
  padding-right: 53px;
  padding-top: 32px;
  padding-bottom: 0px;
  background-color: #ecf0f7;
  @media (min-width: 300px) and (max-width: 1024px) {
    padding: 12px 15px 0px 15px;
  }
`;
const MainHeading = styled.div`
  text-align: left;
  font-size: 1.5rem;
  font-weight: 600;
  color: #191919;
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 1.2rem;
  }
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;
  // padding-left: 5px;
  padding-bottom: 12px;
`;
const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  width: 100%;
  height: auto;
  margin-top: 0.625rem;
  padding: 1.25rem;
  @media (min-width: 300px) and (max-width: 1024px) {
    width: 100%;
    padding: 9px 12px 9px 12px;
  }
`;
const GraphSize = styled.div`
  height: 9.75rem;
  width: auto;
  margin-top: 1.29rem;
  margin-bottom: 1.2rem;
  background: transparent;
  @media (max-width: 767px) {
    height: 80px;
  }
`;
const View = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #102c78;
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 0.85rem;
  }
`;
const Content = styled.div`
  font-weight: 600;
  font-size: 0.875rem;
  color: #191919;
  margin-top: 0.625rem;
  padding-bottom: 1.25rem;
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 0.85rem;
  }
`;

const GraphContainer = styled.div`
  width: 740px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  height: 356px;
  padding: 1.25rem;
  margin-top: 2.58rem;
  @media (min-width: 300px) and (max-width: 1024px) {
    width: 100%;
  }
`;
const ScrollableDiv = styled.div`
  // overflow: auto;
  // height: 739px;
`;
const Head = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #102c78;
  margin-right: 0.625rem;
  white-space: nowrap;
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 0.85rem;
  }
`;
const ToolTipIcon = styled.img`
  width: 0.75rem;
  cursor: pointer;
  margin-left: 0.5rem;
`;
const ContractFrom = styled.div`
  width: 100%;
  max-width: 9.375rem;
  color: #102c78;
  font-weight: 600;

  @media (min-width: 300px) and (max-width: 767px) {
    word-break: break-all;
  }
`;
const Network = styled.div`
  width: 100%;
  max-width: 9.375rem;
  @media (min-width: 300px) and (max-width: 767px) {
    word-break: break-all;
  }
`;
// const BorderDiv = styled.div`
//   border-bottom: 1px solid #e2e8fa;
// `;
const Div = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 1rem;
`;
const ContractDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  border-top: 1px solid #e2e8fa;

  padding-top: 10px;
  padding-bottom: 4px;
`;
const DropDown = styled.div`
  background: #f5f6fd 0% 0% no-repeat padding-box;
  border: 1px solid #d5e0ff;
  border-radius: 0.375rem;
  font: normal normal medium 14px/17px Inter;
  font-size: 0.875rem;
  font-weight: 600;
  color: #191919;
  padding: 0.625rem;
  width: 100%;
  max-width: 453px;
  position: relative;
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 0.85rem;
  }
`;
const TransactionHash = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #416be0;
  margin-top: 4px;
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 0.7rem;
    word-break: break-all;
  }
`;
const Image = styled.img`
  width: 0.75rem;
  position: absolute;
  cursor: pointer;
  top: 1.813rem;
  right: 0.5rem;
`;
const Label = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: #767c93;
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 0.85rem;
  }
`;
const BackImage = styled.img`
  cursor: pointer;
  margin-left: 4px;
  @media (min-width: 300px) and (max-width: 1024px) {
    display: none;
  }
`;
