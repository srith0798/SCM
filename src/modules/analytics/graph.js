import React, { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";
import { linearGradientDef } from "@nivo/core";
import "../../assets/styles/custom.css";
import moment from "moment";
import styled from "styled-components";
import utility from "../../utility";
import commaNumber from "comma-number";

export default function Graph(props) {
  const [points, setPoints] = useState({ x: 0, y: 0 });
  const [data, setData] = useState([]);
  // const [type, setType] = useState("");
  // const [expandCheck, setExpandedCheck] = useState(0);

  // const [graphAccounts] = useState([]);
  // let length = graphAccounts.length;
  // const firstDate =
  //   graphAccounts.length === 0
  //     ? ""
  //     : moment(graphAccounts[length - 1].day).format("D MMM");
  // const lastDate =
  //   graphAccounts.length === 0
  //     ? ""
  //     : moment(graphAccounts[0].day).format("D MMM");
  const FlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const LeftLabel = styled.div`
    margin-left: ${(props) => (props.expand > 0 ? "2.65%" : "4.5%")};
    color: #7c828a;
    font-size: 11px;
    @media (min-width: 300px) and (max-width: 767px) {
      margin-left: 9.5%;
    }
  `;
  const RightLabel = styled.div`
    margin-right: ${(props) => (props.expand > 0 ? "1.65%" : "3.5%")};
    color: #7c828a;
    font-size: 11px;
    @media (min-width: 300px) and (max-width: 767px) {
      margin-right: 5.5%;
    }
  `;
  const MouseMovePoint = (event) => {
    const x = event.x;
    const y = event.y;
    setPoints({ ...points, x, y });
  };

  useEffect(() => {
    setData(props?.data);
    // setType(props?.type);
    // setExpandedCheck(props?.expanded)
  }, [props.data]);
  let fisrtValue = data[0]?.data[0]?.x,
    lastValue = data[0]?.data[data[0].data.length - 1]?.x;
  const CustomPoint = () => {
    return (
      <g>
        <circle
          fill="#3763dd"
          r={5}
          strokeWidth={1}
          stroke={2}
          cx={points.x}
          cy={points.y}
        />
      </g>
    );
  };
  return (
    <>
      {data && data.length ? (
        <>
          <MyResponsiveLine
            MouseMovePoint={MouseMovePoint}
            // type="spline"
            data={data}
            CustomPoint={CustomPoint}

            // axisBottom={{
            //   orient: "bottom",
            //   tickSize: 5,
            //   tickPadding: 5,
            //   tickRotation: 0,
            //   legend: "transportation",
            //   legendOffset: 36,
            //   legendPosition: "center",
            // }}
            // axisLeft={{
            //   orient: "left",
            //   tickSize: 5,
            //   tickPadding: 5,
            //   tickRotation: 0,
            //   legend: "count",
            //   legendOffset: 40,
            //   legendPosition: "center",
            // }}
          />
          <FlexDiv>
            <LeftLabel expand={props.expanded}>
              {moment(fisrtValue).format("DD MMM")}
            </LeftLabel>
            <RightLabel expand={props.expanded}>
              {moment(lastValue).format("DD MMM")}
            </RightLabel>
          </FlexDiv>
          {data[0]?.id.includes("Transactions") ? <Legend></Legend> : ""}
        </>
      ) : (
        <>{props.error}</>
      )}
    </>
  );
}
const ToolTipElement = (props) => {
  return (
    <div style={{ height: "80px" }}>
      <TooltipGraph>
        <TooltipHead>
          <TooltipDate>
            {moment(props.point.data.x).format("DD MMM")}
          </TooltipDate>
          <Count>{commaNumber(props.point.data.y)}</Count>
        </TooltipHead>
        <TooltipData>
          {props.point.serieId !== "ActiveUsers" ? (
            <TooltipDataHeader>
              <div>Account: </div> <TooltipDataValues>XDC</TooltipDataValues>
            </TooltipDataHeader>
          ) : (
            ""
          )}
          <TooltipDataHeader>
            <div>Network: </div> <TooltipDataValues>Mainnet</TooltipDataValues>
          </TooltipDataHeader>
          {/* {props.point.serieId !== "ActiveUsers" ?<TooltipDataHeader><div>Deployment Status: </div> <TooltipDataValues>Success</TooltipDataValues></TooltipDataHeader>  : ""} */}
        </TooltipData>
      </TooltipGraph>
      <DivOval class="outer-oval-trans">
        <Oval></Oval>
      </DivOval>
    </div>
  );
};

const MyResponsiveLine = ({ data, MouseMovePoint, CustomPoint }) => (
  <ResponsiveLine
    margin={{ bottom: 25, left: 38, top: 25, right: 20 }}
    data={data}
    tooltip={ToolTipElement}
    yScale={{
      type: "linear",
      stacked: true,
      reverse: false,
      min: 0,
      max: "auto",
    }}
    yFormat=" >-.2f"
    curve="natural"
    axisTop={null}
    axisRight={null}
    axisBottom={null}
    axisLeft={{
      orient: "left",
      tickSize: 0,
      tickPadding: 10,
      tickValues: 3,
      format: function (value) {
        return utility.convertToInternationalCurrencySystem(value);
      },
    }}
    defs={[
      linearGradientDef("gradientA", [
        { offset: 0, color: "inherit" },
        { offset: 100, color: "inherit", opacity: 0 },
      ]),
    ]}
    fill={[{ match: "*", id: "gradientA" }]}
    enableGridX={true}
    enableGridY={true}
    enablePoints={false}
    pointSize={10}
    pointColor={{ from: "color", modifiers: [] }}
    colors={
      (data[0]?.id).includes("Transactions")
        ? ["#BBCBF7", "#3163F0"]
        : ["#3163F0"]
    }
    colorBy="index"
    pointBorderWidth={2}
    pointLabelYOffset={-12}
    enableArea={true}
    areaBaselineValue={1}
    enableCrosshair={false}
    useMesh={true}
    legends={[]}
    theme={{ fontSize: 11, fontFamily: "Inter", textColor: "#7C828A" }}
  />
);

const Legend = () => {
  return (
    <LegendDiv>
      <LegendSpan>
        <LegendImg src="/images/indicator.svg"></LegendImg>Successful
        Transactions
      </LegendSpan>
      <LegendSpan>
        <LegendImg src="/images/Failed transaction white.svg"></LegendImg>{" "}
        Failed Transactions
      </LegendSpan>
    </LegendDiv>
  );
};
const LegendDiv = styled.div`
  font-size: 12px;
  text-align: center;
  color: rgb(124, 130, 138);
`;
const LegendImg = styled.img`
  width: 12px;
`;
const LegendSpan = styled.span`
  font-weight: 400;
  margin-right: 5px;
`;
const Oval = styled.div`
  width: 10px;
  height: 10px;
  background-color: #3763dd;
  border-radius: 10px;

  text-align: center;
  margin-left: 60px;
  margin-top: 10px;
`;
const DivOval = styled.div`
  margin-top: 0px;
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
const TooltipGraph = styled.div`
  width: 100%;
  padding: 4px 8px 7px;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px #e3e7eb;
  background-color: #fff;
  font-size: 13px;
  margin-bottom: 0px;
  padding-bottom: 10px;
  min-height: 80px;
  height: fit-content;
`;
const TooltipHead = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;
const TooltipDate = styled.div`
  color: #303134;
  padding-right: 5px;
`;
const Count = styled.div`
  color: #3163f0;
`;

const TooltipData = styled.div`
  padding-top: 0.3rem;
  color: #3163f0;
`;
const TooltipDataHeader = styled.div`
  display: flex;
`;
const TooltipDataValues = styled.div`
  color: #303134;
`;
