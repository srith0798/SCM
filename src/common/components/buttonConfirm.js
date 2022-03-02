import React from "react";
import styled from "styled-components";

export default function ButtonConfirm(props) {
  return <RemoveButton disabled={props.input==""} onClick={props.click}>{props.text}{console.log(props.text,"text")}</RemoveButton>;
}

const RemoveButton = styled.button`
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  background: #3163f0 0% 0% no-repeat padding-box;
  border: 0px;
  border-radius: 4px;
  text-align: center;
  white-space: nowrap;
  padding: 10px 12px;
  margin-right: 10px;
`;
