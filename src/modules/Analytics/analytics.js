import React from "react";
import MainComponent from "./mainComponent";
import FullScreen from "./fullScreen";
import TopCalls from "./topCalls";

export default function Analytics(props) {
  const [Expand, setExpand] = React.useState(0);
  const [graphName, setGraphName] = React.useState(0);

  const changeExpand = (value) => {
    console.log("value", value);
    if (value === 1) setGraphName("Transaction over time");
    if (value === 2) setGraphName("Gas used overtime");
    if (value === 3) setGraphName("Active users");
    if (value === 4) setGraphName("Top Callers");
    if (value === 5) setGraphName("Top Functions Calls");

    setExpand(value);
  };

  return (
    <>
      {Expand === 0 ? <MainComponent changeExpand={changeExpand} /> : ""}
      {Expand > 0 && Expand < 4 && (
        <FullScreen changeExpand={changeExpand} graphName={graphName} />
      )}
      {Expand > 3 && (
        <TopCalls graphName={graphName} changeExpand={changeExpand} />
      )}
    </>
  );
}
