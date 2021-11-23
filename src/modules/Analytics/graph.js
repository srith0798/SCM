import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import "../../assets/styles/custom.css";
import moment from "moment";
import { TransactionService } from "../../services";
import Utils from "../../utility";
import styled from "styled-components";
import { linearGradientDef } from "@nivo/core";

const data = [
  {
    id: "japan",
    color: "hsl(36, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 22,
      },
      {
        x: "helicopter",
        y: 79,
      },
      {
        x: "boat",
        y: 192,
      },
      {
        x: "train",
        y: 128,
      },
      {
        x: "subway",
        y: 126,
      },
      {
        x: "bus",
        y: 11,
      },
      {
        x: "car",
        y: 244,
      },
      {
        x: "moto",
        y: 179,
      },
      {
        x: "bicycle",
        y: 74,
      },
      {
        x: "horse",
        y: 165,
      },
      {
        x: "skateboard",
        y: 137,
      },
      {
        x: "others",
        y: 275,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(309, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 70,
      },
      {
        x: "helicopter",
        y: 190,
      },
      {
        x: "boat",
        y: 227,
      },
      {
        x: "train",
        y: 160,
      },
      {
        x: "subway",
        y: 107,
      },
      {
        x: "bus",
        y: 86,
      },
      {
        x: "car",
        y: 200,
      },
      {
        x: "moto",
        y: 176,
      },
      {
        x: "bicycle",
        y: 130,
      },
      {
        x: "horse",
        y: 115,
      },
      {
        x: "skateboard",
        y: 67,
      },
      {
        x: "others",
        y: 108,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(106, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 294,
      },
      {
        x: "helicopter",
        y: 21,
      },
      {
        x: "boat",
        y: 139,
      },
      {
        x: "train",
        y: 102,
      },
      {
        x: "subway",
        y: 95,
      },
      {
        x: "bus",
        y: 98,
      },
      {
        x: "car",
        y: 127,
      },
      {
        x: "moto",
        y: 271,
      },
      {
        x: "bicycle",
        y: 42,
      },
      {
        x: "horse",
        y: 163,
      },
      {
        x: "skateboard",
        y: 45,
      },
      {
        x: "others",
        y: 26,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(9, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 52,
      },
      {
        x: "helicopter",
        y: 58,
      },
      {
        x: "boat",
        y: 101,
      },
      {
        x: "train",
        y: 48,
      },
      {
        x: "subway",
        y: 22,
      },
      {
        x: "bus",
        y: 300,
      },
      {
        x: "car",
        y: 285,
      },
      {
        x: "moto",
        y: 122,
      },
      {
        x: "bicycle",
        y: 95,
      },
      {
        x: "horse",
        y: 3,
      },
      {
        x: "skateboard",
        y: 143,
      },
      {
        x: "others",
        y: 154,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(165, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 241,
      },
      {
        x: "helicopter",
        y: 85,
      },
      {
        x: "boat",
        y: 278,
      },
      {
        x: "train",
        y: 108,
      },
      {
        x: "subway",
        y: 174,
      },
      {
        x: "bus",
        y: 100,
      },
      {
        x: "car",
        y: 204,
      },
      {
        x: "moto",
        y: 215,
      },
      {
        x: "bicycle",
        y: 216,
      },
      {
        x: "horse",
        y: 292,
      },
      {
        x: "skateboard",
        y: 36,
      },
      {
        x: "others",
        y: 23,
      },
    ],
  },
];

const toolTipElement = (props) => {
  return (
    <div>
      <div className="Tooltip-graph">
        <p className="Tooltip-graph-date">{props.point?.data?.x}</p>
        <p className="Tooltip-graph-tx">Transactions: {props.point?.data?.y}</p>
      </div>
      {/* <TriangleArrowDown /> */}
    </div>
  );
};
const graphProperties = {
  //  height: 200,
  margin: { top: 5, right: 0, bottom: 0, left: 0 },
  curve: "monotoneX",
  axisTop: null,
  axisRight: null,
  axisBottom: null,
  axisLeft: null,
  enableGridX: false,
  enableGridY: false,
  enableSlices: false,
  enablePoints: false,
  enableArea: true,
  areaOpacity: 0.9,
  useMesh: true,
  animate: true,
};
const MyResponsiveLine = ({ MouseMovePoint, CustomPoint }) => (
  <ResponsiveLine
    {...graphProperties}
    data={data}
    tooltip={toolTipElement}
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
    colors={{ scheme: "blues" }}
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
export default function Graph() {
  const [points, setPoints] = useState({ x: 0, y: 0 });
  const [data, setData] = useState([]);
  // const [graphTransactions, setGraphTransactions] = useState([]);

  // useEffect(async () => {
  //   let [error, transactionGraph] = await Utils.parseResponse(
  //     TransactionService.getSomeDaysTransaction()
  //   );
  //   if (error || !transactionGraph) return;
  //   setGraphTransactions(transactionGraph);
  //   // alert(JSON.stringify(transactionGraph))
  //   const interval = setInterval(async () => {
  //     let [error, transactionGraph] = await Utils.parseResponse(
  //       TransactionService.getSomeDaysTransaction()
  //     );
  //     setGraphTransactions(transactionGraph);
  //     // alert(JSON.stringify(transactionGraph))
  //   }, 90000);

  //   var arr = [
  //     {
  //       id: "Transaction",
  //       color: "hsl(248, 70%, 50%)",
  //       data: [],
  //     },
  //   ];

  //   var resultData = [];
  //   transactionGraph.map((items) => {
  //     resultData.push({
  //       x: items.day,
  //       y: items.transactionCount,
  //     });
  //   });

  //   let graphdata = resultData;
  //   graphdata.reverse();
  //   arr[0].data = resultData;
  //   setData(arr);
  // }, []);
  const MouseMovePoint = (event) => {
    const x = event.x;
    const y = event.y;
    setPoints({ ...points, x, y });
  };
  const CustomPoint = () => {
    // const {currentPoint, borderWidth, borderColor} = props;
    // it will show the current point
    // if (pointX && pointY) {
    return (
      <g>
        <circle
          fill="#3763dd"
          r={2}
          strokeWidth={1}
          stroke={2}
          // fillOpacity={0.35}
          cx={points.x}
          cy={points.y}
          // x={x}
          // y={y}
        />
      </g>
    );
    // }
  };
  // let length = graphTransactions.length;
  // const firstDate =
  //   graphTransactions.length == 0
  //     ? ""
  //     : moment(graphTransactions[length - 1]?.day).format("D MMM");
  // const lastDate =
  //   graphTransactions.length == 0
  //     ? ""
  //     : moment(graphTransactions[0]?.day).format("D MMM");

  return (
    <GraphSize>
      <MyResponsiveLine
        MouseMovePoint={MouseMovePoint}
        data={data}
        CustomPoint={CustomPoint}
      />
      <div className="dates">
        {/* <p>fgfdg</p>
        <p>fdfgsdf</p> */}
      </div>
    </GraphSize>
  );
}
