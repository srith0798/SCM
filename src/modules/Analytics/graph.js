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
          r={2}
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
        data={data}
        CustomPoint={CustomPoint}
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
    color: "hsl(194, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 165,
      },
      {
        x: "helicopter",
        y: 76,
      },
      {
        x: "boat",
        y: 184,
      },
      {
        x: "train",
        y: 99,
      },
      {
        x: "subway",
        y: 195,
      },
      {
        x: "bus",
        y: 140,
      },
      {
        x: "car",
        y: 31,
      },
      {
        x: "moto",
        y: 43,
      },
      {
        x: "bicycle",
        y: 198,
      },
      {
        x: "horse",
        y: 293,
      },
      {
        x: "skateboard",
        y: 8,
      },
      {
        x: "others",
        y: 279,
      },
    ],
  },
];

const ToolTipElement = (props) => {
  return (
    <div>
      <div className="Tooltip-graph">
        <p className="Tooltip-graph-date">{props.point.data.x}</p>
        <p className="Tooltip-graph-tx">Accounts: {props.point.data.y}</p>
      </div>
    </div>
  );
};

const graphProperties = {
  margin: { top: 5, right: 0, bottom: 0, left: 0 },
  curve: "monotoneX",
  axisTop: null,
  axisRight: null,
  axisBottom: null,
  axisLeft: null,
  enableGridX: false,
  enableGridY: true,
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
        { offset: 100, color: "inherit", opacity: 0 },
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
  height: 8.75rem;
  width: auto;
  margin-top: 3.19rem;
  @media (max-width: 767px) {
    height: 80px;
  }
`;
