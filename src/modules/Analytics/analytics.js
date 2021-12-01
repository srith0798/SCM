import React from "react";
import MainComponent from "./mainComponent";
import FullScreen from "./fullScreen";

export default function Analytics(props) {
  const [Expand, setExpand] = React.useState(0);
  const [graphName, setGraphName] = React.useState(0);

  const [topCallers, setTopCallers] = React.useState(0);
  const changeExpand = (value) => {
    console.log("value", value);
    if (value === 1) setGraphName("Transaction over time");
    if (value === 2) setGraphName("Gas used overtime");
    if (value === 3) setGraphName("Active users");
    if (value === 4) setGraphName("Top Callers");
    if (value === 5) setGraphName("Top Functions Calls");
    setExpand(value);
    setTopCallers(value);
  };
  const changeTopCalls = (value) => {
    console.log("value", value);
  };
  return (
    <>
      {Expand === 0 ? (
        <MainComponent changeExpand={changeExpand} />
      ) : (
        <FullScreen changeExpand={changeExpand} graphName={graphName} />
      )}
    </>
  );
}
