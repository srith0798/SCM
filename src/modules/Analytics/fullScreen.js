import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import Line from "./graph";
// import { history } from "../../managers/history";

export default function FullScreen(props) {
  const ClickMe = () => {
    props.changeExpand(0);
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
                <ExpandButton>Expand</ExpandButton>
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
                </FlexEnd>
                <Line />
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

const ExpandButton = styled.button`
  background-image: url("/images/Export.svg");
  background-repeat: no-repeat;
  background-position: 8px;
  padding-left: 26px;
  background-size: 14px;
  position: relative;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  width: 100%;
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
`;
// const Img = styled.img`
//   margin-right: 10px;
//   cursor: pointer;
// `;
const Icon = styled.img`
  margin-left: 10px;
  cursor: pointer;
`;
