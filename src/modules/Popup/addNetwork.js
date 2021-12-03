import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
  },
}));

export default function AddNetwork(props) {
  const classes = useStyles();
  return (
    <div>
      <Dialog classes={{ paper: classes.dialogBox }} open={true}>
        <MainContainer>
          <Container>
            <SubContainer>
              <Add>Add Network</Add>
              <img alt="" src="/images/XDC-Cross.svg" onClick={props.click} />
            </SubContainer>

            <Heading>Network name</Heading>
            <Input type="text" placeholder="Name" />
            <Heading>New RPC URL</Heading>
            <Input type="text" placeholder="URL" />

            <Heading>Chain ID</Heading>
            <Input type="text" placeholder="ID" />
            <Heading>Currency symbol (optional)</Heading>
            <Input type="text" placeholder="Symbol" />
            <Heading>Block explorer (optional)</Heading>
            <Input type="text" placeholder="Explorer" />
            <Button>Add network</Button>
          </Container>
        </MainContainer>
      </Dialog>
    </div>
  );
}
const Heading = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #303134;
  margin-top: 1.25rem;
`;
const Input = styled.input`
  background: #f0f2fc 0% 0% no-repeat padding-box;
  border-radius: 0.25rem;
  border: none;
  color: #767c93;
  padding: 0.313;
  width: 100%;
  margin-top: 1.25rem;
`;
const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0.375rem;
  width: 100%;
  background-color: #ffffff;
  max-width: 43.75rem;
  height: auto;
  padding: 1.25rem;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Add = styled.div`
  // font: normal normal 600 24px/29px Inter;
  font-size: 1.5rem;
  font-weight: 600;
  color: #303134;
`;
// const Img = styled.img`
//   cursor: pointer;
// `;

const Button = styled.button`
  text-align: left;
  // font: normal normal medium 16px/20px Inter;
  font-size: 1rem;
  font-weight: 600;
  background: #9db5f8 0% 0% no-repeat padding-box;
  border-radius: 0.25rem;
  color: #ffffff;
  margin-top: 1.25rem;
  border: 0;
`;
