import React from "react";
import { ResponsiveLine } from "@nivo/line";
const data = [
  {
    id: "norway",
    color: "hsl(34, 100%, 50%)",
    data: [
      {
        x: "plane",
        y: 22,
      },
      {
        x: "helicopter",
        y: 8,
      },
      {
        x: "boat",
        y: 222,
      },
      {
        x: "train",
        y: 166,
      },
      {
        x: "subway",
        y: 25,
      },
      {
        x: "bus",
        y: 110,
      },
      {
        x: "car",
        y: 2,
      },
      {
        x: "moto",
        y: 16,
      },
      {
        x: "bicycle",
        y: 77,
      },
      {
        x: "others",
        y: 236,
      },
    ],
  },
];

const Line = () => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 30 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    curve="basis"
    axisTop={null}
    axisRight={null}
    axisBottom={null}
    axisLeft={null}
    enableGridX={false}
    enableGridY={false}
    enablePoints={false}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    enableArea={true}
    useMesh={true}
  />
);

export default function Graph() {
  return (
    <div style={{ height: 200, width: 400, margin: "0", marginTop: "5px" }}>
      <Line data={data} />
    </div>
  );
}
