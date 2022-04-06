import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";
import ButtonConfirm from "../../../common/components/buttonConfirm";

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
  },
}));

export default function HideContract(props) {
  console.log(props);
  const classes = useStyles();

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

  const CancelButton = styled.button`
    font: normal normal medium 14px/17px Inter;
    color: #3163f0;
    border-radius: 4px;
    background-color: #ffffff;
    border: 1px solid #3163f0;
    text-align: center;
    padding: 8px;
  `;
  const Content = styled.div`
    font: normal normal medium 16px/20px Inter;
    letter-spacing: 0px;
    color: #303134;
    margin-top: 20px;
  `;

  const handleClick = ()=>{
    props.showContract();
    // setTimeout(()=>{
      props.click();
    // },100);
  }

  return (
    <div>
      <Dialog classes={{ paper: classes.dialogBox }} open={true}>
        <MainContainer>
          <Container>
            <SubContainer>
              <Add>Show Contract</Add>
              <img
                alt=""
                src="/images/xdc-cut.svg"
                onClick={props.click}
                style={{ cursor: "pointer" }}
              />
            </SubContainer>
            <Content>
              Are you sure you wish to show this contract in the transaction
              listing?
            </Content>
            <SubContainer
              style={{ width: "100%", maxWidth: "200px", marginTop: "30px" }}
            >
              <ButtonConfirm
                click={handleClick}
                text={"Show Contract"}
              />
              <CancelButton onClick={props.click}>Cancel</CancelButton>
            </SubContainer>
          </Container>
        </MainContainer>
      </Dialog>
    </div>
  );
}
