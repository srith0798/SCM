import React, { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";
import { linearGradientDef } from "@nivo/core";
import "../../assets/styles/custom.css";
import moment from "moment";
import styled from "styled-components";

export default function Graph(props) {
  const [points, setPoints] = useState({ x: 0, y: 0 });
  const [data, setData] = useState([]);
  const [type, setType] = useState("");


  const [graphAccounts] = useState([]);

  let length = graphAccounts.length;
  const firstDate =
    graphAccounts.length === 0
      ? ""
      : moment(graphAccounts[length - 1].day).format("D MMM");
  const lastDate =
    graphAccounts.length === 0
      ? ""
      : moment(graphAccounts[0].day).format("D MMM");
  const MouseMovePoint = (event) => {
    const x = event.x;
    const y = event.y;
    setPoints({ ...points, x, y });
  };

  useEffect(()=>{
  setData(props?.data)
  setType(props?.type)
  }, [props.data]);
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
    {data && data.length?
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
        gridYValues={5}
      />
       <div className="dates">
         <p>{props.firstDate}</p>
         <p>{props.lastDate}</p>
       </div>
    </>
    : <>No Data Available</>}
    </>
  );
}
const dataEntry = [
  {
    id: "japan",
    color: "hsl(135, 70%, 50%)",
    data: [
      {
        x: "NETWORK1",
        y: 151,
      },
      {
        x: "NETWORK2",
        y: 106,
      },
      {
        x: "NETWORK3",
        y: 44,
      },
      {
        x: "NETWORK4",
        y: 264,
      },
      {
        x: "NETWORK5",
        y: 275,
      },
      {
        x: "NETWORK6",
        y: 34,
      },
      {
        x: "NETWORK7",
        y: 211,
      },
      {
        x: "NETWORK8",
        y: 288,
      },
      {
        x: "NETWORK9",
        y: 86,
      },
      {
        x: "others",
        y: 181,
      },
    ],
  },
];

const ToolTipElement = (props) => {
  return (
      <TooltipGraph>
        <TooltipHead>
        <TooltipDate>{moment(props.point.data.x).format("DD MMM")}
           
        </TooltipDate>
       <Count>{props.point.data.y}</Count> 
        </TooltipHead>
        <TooltipData>

       {props.point.serieId !== "ActiveUsers" ? <TooltipDataHeader><div>Account: </div> <TooltipDataValues>XDC</TooltipDataValues></TooltipDataHeader> : ""}
       <TooltipDataHeader><div>Network: </div> <TooltipDataValues>Mainnet</TooltipDataValues></TooltipDataHeader> 
       {props.point.serieId !== "ActiveUsers" ?<TooltipDataHeader><div>Deployment Status: </div> <TooltipDataValues>Success</TooltipDataValues></TooltipDataHeader>  : ""}
        </TooltipData>
      </TooltipGraph>
  );
};

const graphProperties = {
  margin: { top: 10, right: 0, bottom: 0, left: 0 },
  curve: "monotoneX",
  axisTop: null,
  axisRight: true,
  axisBottom: true,
  axisLeft: true,
  enableGridX: true,
  enableGridY: false,
  enableSlices: false,
  enablePoints: false,
  enableArea: true,
  areaOpacity: 0.9,
  useMesh: true,
  animate: true,
};

const MyResponsiveLine = ({ data, MouseMovePoint, CustomPoint }) => (
  <ResponsiveLine
    {...graphProperties}
    data={data}
    tooltip={ToolTipElement}
    layers={[
      "grid",
      "markers",
      "axes",
      "areas",
      "lines",
      "points",
      "slices",
      "mesh",
      "legends",
      CustomPoint,
    ]}
    margin={{bottom: 5, left: 40, top:10, right:5 }}
    enableGridX={true}
    enableGridY={true}
    axisBottom={false}
    axisRight={false}
    axisRight={{
      tickSize: 2,
      tickPadding: 5,
      tickRotation: 0,
      tickValues: [1 , 2 , 3, 4, 5],
    }}
    gridYValues={5}

    xScale={{ type: "point" }}
    defs={[
      linearGradientDef("gradientA", [
        { offset: 0, color: "inherit" },
        { offset: 20, color: "inherit", opacity: 0 },
      ]),
    ]}
    fill={[{ match: "*", id: "gradientA" }]}
    yScale={{
       type: 'linear',
        }}
    colors={[["#3163F0"]]}
    pointSize={5}
    legends={[]}
    onMouseMove={MouseMovePoint}
  />
);

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
`;
const TooltipHead = styled.div`
  display:flex;
  justify-content: space-between;
  font-weight:bold;
`;
const TooltipDate =styled.div`
  color: #303134;
  
`
const Count = styled.div`
  color: #3163F0;
`

const TooltipData  = styled.div`
 padding-top : 0.3rem;
 color: #3163F0;

`
const TooltipDataHeader  = styled.div`
display:flex;
`
const TooltipDataValues = styled.div`
color: #303134;
`