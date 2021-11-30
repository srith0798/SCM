import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import { Defs, linearGradientDef } from "@nivo/core";
import "../../assets/styles/custom.css";
import moment from "moment";
import { AccountService } from "../../services";
import Utils from "../../utility";
import styled from "styled-components";

const ToolTipElement = (props) => {
  return (
    <div>
      <div className="Tooltip-graph">
        <p className="Tooltip-graph-date">{props.point.data.x}</p>
        <p className="Tooltip-graph-tx">Accounts: {props.point.data.y}</p>
      </div>
      {/* <TriangleArrowDown /> */}
    </div>
  );
};
// const CustomPoint = (pointX,pointY) => {
//
//     // const {currentPoint, borderWidth, borderColor} = props;
//     // it will show the current point
//     // if (pointX && pointY) {
//     console.log("hdhdhhd====",pointX,pointY)
//     return (
//         <g>
//             <circle
//                 fill="black"
//                 r={12}
//                 strokeWidth={1}
//                 stroke={2}
//                 fillOpacity={0.35}
//                  // cx={pointX}
//                  // cy={pointY}
//                 x={x}
//                 y={121}
//
//             />
//         </g>
//     );
//     // }
// };

// const MouseMovePoint = (event) => {
//     console.log("event======", event.x,event.y)
//    setPoints(event.x)
//      setPoint(event.y)
//     console.log(x,"event======",y)
//
//
// }
const graphProperties = {
  //  height: 200,
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

export default function Graph() {
  const [points, setPoints] = useState({ x: 0, y: 0 });
  const [data, setData] = useState([]);

  const [graphAccounts, setGraphAccounts] = useState([]);

  useEffect(async () => {
    // let [error, AccountGraph] = await Utils.parseResponse(AccountService.getSomeDaysAccount())
    // if (error || !AccountGraph)
    //     return
    // setGraphAccounts(AccountGraph)
    // // alert(JSON.stringify(AccountGraph))
    // const interval = setInterval(async () => {
    //     let [error, AccountGraph] = await Utils.parseResponse(AccountService.getSomeDaysAccount())
    //     setGraphAccounts
    //     (AccountGraph);
    //     // alert(JSON.stringify(AccountGraph))
    // }, 90000)

    var arr = [
      {
        id: "Accounts",
        color: "hsl(248, 70%, 50%)",
        data: [],
      },
    ];

    var resultData = [];
    //         AccountGraph.map(items => {
    //             resultData.push({
    //                 x: items.day,
    //                 y: items.accountCount
    //             })
    // console.log("fjfjjuf",resultData)
    //             // moment(items.timestamp * 1000).format("MMMM Do YYYY"),moment(items.timestamp * 1000).format("MMMM Do YYYY"),
    //
    //         })

    // let graphdata = resultData
    // graphdata.reverse()
    arr[0].data = [
      { x: "1 Nov 2021", y: 10 },
      { x: "2 Nov 2021", y: 50 },
      { x: "3 Nov 2021", y: 40 },
      { x: "4 Nov 2021", y: 20 },
      { x: "5 Nov 2021", y: 50 },
      { x: "6 Nov 2021", y: 7 },
      { x: "7 Nov 2021", y: 60 },
      { x: "8 Nov 2021", y: 50 },
      { x: "9 Nov 2021", y: 30 },
      { x: "10 Nov 2021", y: 53 },
      { x: "11 Nov 2021", y: 52 },
      { x: "12 Nov 2021", y: 45 },
      { x: "13 Nov 2021", y: 40 },
      { x: "14 Nov 2021", y: 95 },
      { x: "15 Nov 2021", y: 55 },
      { x: "16 Nov 2021", y: 45 },
      { x: "17 Nov 2021", y: 35 },
      { x: "18 Nov 2021", y: 75 },
    ];
    await setData(arr);
  }, []);
  // var d = new Date();
  // var n = d.getFullYear();
  // let length = data[0]?.data.length;

  // let value1 = data[0]?.data[0]?.x
  // const colonIndex1 = value1?.indexOf(n);
  // const atIndex1 = value1?.indexOf("");
  // let firstDate = value1?.slice(atIndex1, colonIndex1);

  // let value2 = data[0]?.data[length - 1]?.x
  // const colonIndex2 = value2?.indexOf(n);
  // const atIndex2 = value2?.indexOf("");
  // let lastDate = value2?.slice(atIndex2, colonIndex2);
  let length = graphAccounts.length;
  const firstDate =
    graphAccounts.length == 0
      ? ""
      : moment(graphAccounts[length - 1].day).format("D MMM");
  const lastDate =
    graphAccounts.length == 0
      ? ""
      : moment(graphAccounts[0].day).format("D MMM");
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
