import React, { useState } from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";
import ButtonConfirm from "../../common/components/buttonConfirm";
import contractsService from "../../services/contractsService";
const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
    height: "311px",
  },
}));
export default function DestinationTags(props) {
  const [input, setInput] = useState([]);

  const classes = useStyles();

  return (
    <div>
      <Dialog classes={{ paper: classes.dialogBox }} open={true}>
        <MainContainer>
          <Container>
            <SubContainer>
              <Add>Add Destination</Add>
            </SubContainer>
            <Content>
              Add an URL that can receive alert notifications from Xmartly.
            </Content>
            <Input
              type="text"
              placeholder="label"
              value={input}
              onChange={(e) => setInput([e.target.value])}
            />

            <Input
              type="text"
              placeholder="URL"
              value={input}
              onChange={(e) => setInput([e.target.value])}
            />
            <SubContainer>
              <ButtonConfirm onClick={props.click} text={"Add Email"} />
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
