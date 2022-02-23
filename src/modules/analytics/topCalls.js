import React from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import {analytics} from "../../constants"

export default function TopCalls(props) {
  const ClickMe = () => {
    props.changeExpand(0);
  };
  return (
    <MainContainer>
      <SubContainer>
        <AlignmentContainer>
          <img
            style={{ marginRight: "8px" }}
            alt=""
            src="/images/back.svg"
            onClick={ClickMe}
          />
          <MainHeading>{props.graphName}</MainHeading>
        </AlignmentContainer>
        <AlignmentContainer>
          <ExpandButton>Export Data</ExpandButton>
          <Icon src="/images/refresh.svg" />
        </AlignmentContainer>
      </SubContainer>

      <Row
        style={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <GraphContainer>
          <FlexEnd>
          <select id="dates" className="select" value={props.dropDownValue} onChange={(event)=>{props.getAnalytics("", event)}}>
        {analytics && analytics.ANALYTICS_DROPDOWN  && analytics.ANALYTICS_DROPDOWN.map((option)=>(
          <option value={option.VALUE} className="select-dropdown">
            {option.TEXT}
          </option>
        ))}
        </select>
          </FlexEnd>
          <Table>
          { props?.data && props.data.length && props.data.length>0 ? props.data.map((item)=>(
              <TableRow>     
              <DataColumn>          
             <Div>
                 {props.graphNo === 4 ? <ContractFrom>Contract from:</ContractFrom> : <ContractFrom>Function:</ContractFrom>}
                 {props.graphNo === 4 ? <Network>{item.address}</Network> : <Network>{item.function}</Network>}
               </Div>
               <Div>
                 <ContractFrom>Network:</ContractFrom>
                 <Network>{item.network}</Network>
               </Div>
               </DataColumn>
               <Count>{item.count}</Count>
               </TableRow>
                   )):<>{props.error}</>}
              </Table>
        </GraphContainer>
      </Row>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  padding: 50px;
  background-color: #ecf0f7;
  height: 100vh;
`;
const MainHeading = styled.div`
  text-align: left;
  font: normal normal 600 24px/29px Inter;
  letter-spacing: 0px;
  color: #191919;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const GraphContainer = styled.div`
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  height: auto;
  margin-top: 20px;
  padding: 20px;
`;

const ExpandButton = styled.button`
  background-image: url("/images/Export.svg");
  background-repeat: no-repeat;
  background-position: 8px;
  padding-left: 26px;
  background-size: 18px;
  position: relative;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  width: 100%;
  color: #3163f0;
  height: 34px;
  font-size: 1rem;
  font-weight: 500;
`;
const AlignmentContainer = styled.div`
  display: flex;
  align-items: center;
`;
const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 32px;
  margin-bottom: 10px;
`;

const Icon = styled.img`
  margin-left: 10px;
  cursor: pointer;
`;

const Table =styled.div`
  height:30rem;
  overflow-y:scroll;
  margin-top:1rem;
`
const ContractFrom = styled.div`
  width: 26%;
  color: #102C78;
  font-size: 14px;
  font-weight: 600;
  @media (min-width: 300px) and (max-width: 767px) {
    word-break: break-all;
  }
`;
const Network = styled.div`
  color: #303134;
  font-size: 14px;
  width: 100%;
  @media (min-width: 300px) and (max-width: 767px) {
    word-break: break-all;
  }
`;
const Div = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 0.125rem;
`;
const TableRow = styled.div`
  display:flex;
  flex-flow:column-nowrap;
  margin-bottom:1rem;
  border-top: 1px solid rgb(227, 231, 235);
`;
const DataColumn = styled.div`
  width:100%;
  padding-top:15px;
`;
const Count = styled.div`
 color: #3163F0;
 padding-top:15px;
`;

