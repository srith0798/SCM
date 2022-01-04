import React, { useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import { linearGradientDef } from "@nivo/core";
import "../../assets/styles/custom.css";
import moment from "moment";
import styled from "styled-components";

export default function Graph() {
  const [points, setPoints] = useState({ x: 0, y: 0 });
  const [data] = useState([]);

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
    <GraphSize>
      <MyResponsiveLine
        MouseMovePoint={MouseMovePoint}
        type="spline"
        data={data}
        CustomPoint={CustomPoint}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "center",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: 40,
          legendPosition: "center",
        }}
      />
      <div className="dates">
        <p>{firstDate}</p>
        <p>{lastDate}</p>
      </div>
    </GraphSize>
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
    <div>
      <TooltipGraph>
        <p className="Tooltip-graph-date">{props.point.data.x}</p>
        <p className="Tooltip-graph-tx">Accounts: {props.point.data.y}</p>
      </TooltipGraph>
    </div>
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
    data={dataEntry}
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
    xScale={{ type: "point" }}
    defs={[
      linearGradientDef("gradientA", [
        { offset: 0, color: "inherit" },
        { offset: 20, color: "inherit", opacity: 0 },
      ]),
    ]}
    fill={[{ match: "*", id: "gradientA" }]}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    colors={[["#3163F0"]]}
    pointSize={10}
    legends={[]}
    onMouseMove={MouseMovePoint}
  />
);

const GraphSize = styled.div`
  height: 9.75rem;
  width: auto;
  margin-top: 3.19rem;
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
  height: 80px;
`;
