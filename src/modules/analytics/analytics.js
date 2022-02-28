import React from "react";
import MainComponent from "./mainComponent";


export default function Analytics(props) {
  // const [Expand, setExpand] = React.useState(0);
  // const [graphName, setGraphName] = React.useState(0);
  // const [data , setData] = React.useState([]);
  // const changeExpand = (value , data) => {
  //   if (value === 1) {setGraphName("Transactions over time"); setData(data)}
  //   if (value === 2) setGraphName("Gas used overtime");
  //   if (value === 3) setGraphName("Active users");
  //   if (value === 4) setGraphName("Top Callers");
  //   if (value === 5) setGraphName("Top Function Calls");

  //   setExpand(value);
  // };
  return (
    <>
      {/* {Expand === 0 ? <MainComponent changeExpand={changeExpand} /> : ""}
      {Expand > 0 && Expand < 4 && (
        <FullScreen changeExpand={changeExpand} graphName={graphName} data={data}/>
      )}
      {Expand > 3 && (
        <TopCalls graphName={graphName} changeExpand={changeExpand} />
      )} */}
      <MainComponent></MainComponent>
    </>
  );
}
