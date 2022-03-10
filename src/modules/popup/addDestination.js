import React, { useState , useEffect } from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";
import { genericConstants } from "../../constants";
const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
    height: "390px",
    position:"absolute",
    top:"5rem"
  },
}));
export default function DestinationTags(props) {
  const [label, setLabel] = useState("");
  const [url, setUrl] = useState("");
  const [channelName, setChannelName] = useState("");

 const classes = useStyles();

console.log("propsss");
  return (
    <div>
      <Dialog classes={{ paper: classes.dialogBox }} open={true}>
        <MainContainer>
          <Container>
            <SubContainer>
              <Add>Add Destination</Add>
              <img alt="" src="/images/close.svg" onClick={props.close} />
            </SubContainer>
            <Content>
              Add an URL that can receive alert notifications from Xmartly.
            </Content>
            <Input
              type="text"
              placeholder="label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />

            <Input
              type="text"
              placeholder="URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <Input
              type="text"
              placeholder="channelName"
              value={channelName}
              onChange={(e) => setChannelName(e.target.value)}
            />
            <SubContainer>
              <ConfirmButton onClick={()=>props.click(label, url, channelName)}>{`Add ${genericConstants.DESTINATION_TYPE[props.type]}`}</ConfirmButton> 
            </SubContainer>
          </Container>
        </MainContainer>
      </Dialog>
    </div>
  );
}
const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  width: 100%;
  background-color: #ffffff;
  max-width: 700px;
  padding: 20px;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Add = styled.div`
  font: normal normal 600 24px/29px Inter;
  color: #303134;
`;
const Input = styled.input`
  background: #f0f2fc 0% 0% no-repeat padding-box;
  padding: 7px;
  border: 0px;
  width: 100%;
  max-width: 636px;
  margin-top: 30px;
  background-image: url("/images/Tag.svg");
  background-repeat: no-repeat;
  background-position: 8px;
  padding-left: 35px;
  background-size: 13px;
  color: #436ce0;
`;

const Content = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  font-family: Inter;
  color: #303134;
  margin-top: 20px;
`;
const ConfirmButton = styled.button`
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  background: #3163f0 0% 0% no-repeat padding-box;
  border: 0px;
  border-radius: 4px;
  text-align: center;
  white-space: nowrap;
  padding: 7px 9px;
  margin-right: 10px;
  margin-top:1rem;
`;