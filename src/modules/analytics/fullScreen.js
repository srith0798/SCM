import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import Line from "./graph";
import Tooltip from "@mui/material/Tooltip";

export default function FullScreen(props) {
  const ClickMe = () => {
    props.expandGraphs(0);
  };
  return (
    <div>
      <Column>
        <Row>
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
                <Tooltip disableFocusListener title="Refresh">
                  <Icon src="/images/refresh.svg" />
                </Tooltip>
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
                  <select id="transactions" className="select" value={props.dropDownValue} onChange={(event)=>{props.getAnalytics("", event)}}>
                    <option value="7" className="select-dropdown">
                      Last 7 days
                    </option>
                    <option value="15" className="select-dropdown">
                      Last 15 days
                    </option>
                    <option value="25" className="select-dropdown">
                      Last 25 days
                    </option>
                    <option value="30" className="select-dropdown">
                      Last 1 month
                    </option>
                  </select>
                </FlexEnd>
              <GraphSize>  <Line data={props.data} type= "fullScreen" error={props.error}/> </GraphSize>
              </GraphContainer>
            </Row>
          </MainContainer>
        </Row>
      </Column>
    </div>
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
const GraphSize = styled.div`
  height: 15.75rem;
  width: auto;
  margin-top: 1.29rem;
  margin-bottom: 1.2rem;
  background: transparent;
  @media (max-width: 767px) {
    height: 80px;
  }
`;
const ExpandButton = styled.button`
  background-image: url("/images/Export.svg");
  background-repeat: no-repeat;
  background-position: 8px;
  padding-left: 26px;
  background-size: 19px;
  position: relative;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  width: 132px;
  color: #3163f0;
  height: 34px;
  font-size: 1rem;
  font-weight: 600;
`;
const AlignmentContainer = styled.div`
  display: flex;
  align-items: center;
`;
const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 92px;
  width: 100%;
`;

const Icon = styled.img`
  margin-left: 10px;
  cursor: pointer;
`;
