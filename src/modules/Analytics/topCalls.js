import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import Header from "../header/header";

export default function TopCalls(props) {
  const ClickMe = () => {
    props.changeExpand(0);
  };
  return (
          <MainContainer>
            <SubContainer>
              <AlignmentContainer>
                <img alt="" src="/images/back.svg" onClick={ClickMe} />
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
            </Row>
          </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  padding: 50px;
  background-color: #ecf0f7;
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

const Icon = styled.img`
  margin-left: 10px;
  cursor: pointer;
`;
const ContractFrom = styled.div`
  width: 100%;
  max-width: 150px;
`;
const Network = styled.div`
  width: 100%;
  max-width: 150px;
`;
const Div = styled.div`
  display: flex;
  flex-flow: row nowrap;
  border-top: 1px solid rgb(227, 231, 235);
  padding: 10px;
`;
