import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoaderHolder = styled.div`
  position: absolute;
  left: 55%;
  z-index: 10000;
`;

const LoaderComponent = (props) => {
  let Top = "50%";
  if(props.top)
    Top = props.top;
  return (
      <LoaderHolder style={{top: Top}} >
       <CircularProgress/>
      </LoaderHolder>
  );
};
export default LoaderComponent;
