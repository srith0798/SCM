// import React from "react";
// import MainComponent from "./mainComponent";
// import FullScreen from "./fullScreen";
// import TopCalls from "./topCalls";

// export default function TopCallsFullScreen(props) {
//   const [topCallers, setTopCallers] = React.useState(0);
//   const [graphName, setGraphName] = React.useState(0);

//   const changeTopCallExpand = (value) => {
//     console.log("value", value);

//     if (value === 4) setGraphName("Top Callers");
//     if (value === 5) setGraphName("Top Functions Calls");

//     setTopCallers(value);
//   };
//   return (
//     <>
//       {topCallers === 0 ? (
//         <MainComponent changeTopCallExpand={changeTopCallExpand} />
//       ) : (
//         <FullScreen
//           changeTopCallExpand={changeTopCallExpand}
//           graphName={graphName}
//         />
//       )}
//     </>
//   );
// }
