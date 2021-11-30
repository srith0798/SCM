import React from "react";
import MainComponent from "./mainComponent";
import FullScreen from "./fullScreen";

export default function Analytics(props) {
  const [Expand, setExpand] = React.useState(0);
  const changeExpand = (value) => {
    console.log("value", value);
    setExpand(value);
  };
  return (
    <>
      {Expand === 1 ? (
        <FullScreen changeExpand={changeExpand} />
      ) : (
        <MainComponent changeExpand={changeExpand} />
      )}
    </>
  );
}
