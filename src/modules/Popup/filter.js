import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
import { Column, Row } from "simple-flexbox";

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
  },
}));

export default function Filter() {
  const classes = useStyles();
  return (
    <div>
      <Dialog classes={{ paper: classes.dialogBox }} open={true}>
        <MainContainer>
          <Container style={{ paddingBottom: "20px" }}>
            <RowContainer>
              <Add>Filter Transaction</Add>
            </RowContainer>
            <NewContainer style={{ paddingBottom: "20px" }}>
              <Content>Status</Content>
              <RowBoxOne>
                <ButtonA>All</ButtonA>
                <ButtonB>Success</ButtonB>
                <ButtonC>fail</ButtonC>
              </RowBoxOne>
            </NewContainer>
            <NewContainerOne style={{ paddingBottom: "20px" }}>
              <Content>Network</Content>
              <DropDown>Select Network</DropDown>
            </NewContainerOne>
            <NewContainer style={{ paddingBottom: "20px" }}>
              <Content>Date Range</Content>
              <LastRowBox>
                <DropDownTwo>From</DropDownTwo>
                <DropDownTwo>To</DropDownTwo>
              </LastRowBox>
            </NewContainer>
            <LastContainer>
              <ApplyButton>Apply</ApplyButton>
              <CancelButton>Cancel</CancelButton>
            </LastContainer>
          </Container>
        </MainContainer>
      </Dialog>
    </div>
  );
}

const ApplyButton = styled.div`
  top: 432px;
  left: 1094px;
  width: 68px;
  height: 34px;
  background: #3163f0 0% 0% no-repeat padding-box;
  opacity: 1;
  color: #ffffff;
  padding-top: 3px;
  font-size: 14px;
  text-align: center;
`;
const CancelButton = styled.div`
  top: 432px;
  left: 1179px;
  width: 72px;
  height: 34px;
  border: 1px solid #3163f0;
  opacity: 1;
  padding-top: 3px;
  font-size: 14px;
  text-align: center;
`;
const ButtonA = styled.div`
  top: 254px;
  left: 899px;
  width: 38px;
  height: 34px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #3163f0;
  border-radius: 6px;
  opacity: 1;
  padding-top: 4px;
  text-align: center;
  color: #3062ef;
`;
const ButtonB = styled.div`
  top: 254px;
  left: 959px;
  width: 78px;
  height: 34px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  opacity: 1;
  padding-top: 4px;
  text-align: center;
`;
const ButtonC = styled.div`
  top: 254px;
  left: 1059px;
  width: 78px;
  height: 34px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  opacity: 1;
  padding-top: 4px;
  text-align: center;
`;
const DropDown = styled.div`
  background: #f5f6fd 0% 0% no-repeat padding-box;
  border: 1px solid #d5e0ff;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  color: grey;
  height: 40px;
  padding: 10px;
  width: 352px;
  height: 34px;
  padding-top: 4px;
  position: relative;
`;
const DropDownTwo = styled.div`
  background: #f5f6fd 0% 0% no-repeat padding-box;
  border: 1px solid #d5e0ff;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  color: grey;
  height: 34px;
  padding-bottom: 20px;
  padding: 8px;
  width: 160px;
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
  max-width: 563px;
  height: 359px;
`;
const Add = styled.div`
  // font: normal normal 600 24px/29px Inter;
  font-size: 1.5rem;
  font-weight: 600;
  color: #303134;
`;

const Content = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #303134;
  margin-top: 0.625rem;
  //   padding: 15px 12px 8px 10px;
  // padding: 0.938rem 0.75rem 0.5rem 0.625rem;
`;
const LastRowBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  padding-bottom: 10px;
`;
const RowBoxOne = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  max-width: 400px;
`;
const RowContainer = styled.div`
  padding: 18px 14px 12px 12px;
`;
const NewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 3 00px;
`;
const LastContainer = styled.div`
  display: flex;
  justify-content: end;
  /* width: 100%; */
  max-width: 503px;
`;
const NewContainerOne = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 515px;
`;
