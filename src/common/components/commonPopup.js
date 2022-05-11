import React from "react";
import { Dialog } from "@material-ui/core";
import { Column, Row } from "simple-flexbox";
import styled from "styled-components";
const Title = styled.div`
  text-align: left;
  font-size: 17px;
  color: #5c4b75;
`;

export default function CommonDialog(props) {
  const { open, title, handleClose, children } = props;
  return (
    <Dialog open={open} className="common-dialog">
      <Row className="justify-content-between">
        <Title>{title}</Title>
        <img
          className="cursor-pointer"
          src="/images/close.svg"
          alt="close"
          onClick={() => handleClose()}
        />
                 
      </Row>
               
      <Column className="justify-content-center margin-top-25">
        {children}       
      </Column>
         
    </Dialog>
  );
}
