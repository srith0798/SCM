import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
  },
}));

export default function Filter(props) {
  const classes = useStyles();

  return (
    <div>
      <Dialog classes={{ paper: classes.dialogBox }} open={true}>
        <MainContainer>
          <Container>
            <RowContainer>
              <Add>Filter Transactions</Add>
            </RowContainer>
            <NewContainer>
              <Content>Status</Content>
              <RowBoxOne>
                <ButtonA>All</ButtonA>
                <ButtonB>Success</ButtonB>
                <ButtonC>Fail</ButtonC>
              </RowBoxOne>
            </NewContainer>
            <NewContainerOne>
              <Content>Network</Content>
              <DropDown>
                Select Network
                <img
                  style={{ marginLeft: "208px", cursor: "pointer" }}
                  alt=""
                  src="/images/drop down.svg"
                />
              </DropDown>
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
              <CancelButton onClick={props.click}>Cancel</CancelButton>
            </LastContainer>
          </Container>
        </MainContainer>
      </Dialog>
    </div>
  );
}

const ApplyButton = styled.div`
  width: 68px;
  height: 34px;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 3px;
  color: #ffffff;
  padding-top: 6px;
  font-size: 14px;
  margin-right: 15px;
  text-align: center;
  cursor: pointer;
`;
const CancelButton = styled.div`
  top: 432px;
  left: 1179px;
  width: 72px;
  height: 34px;
  border: 1px solid #3163f0;
  opacity: 1;
  padding-top: 6px;
  border-radius: 3px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  margin-left: -5px;
  margin-right: -11px;
  color: #3163f0;
`;
const ButtonA = styled.div`
  width: 38px;
  height: 34px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #3163f0;
  border-radius: 6px;
  padding-top: 4px;
  margin-right: 20px;
  text-align: center;
  color: #3062ef;
  text-size: 14px;
  cursor: pointer;
`;
const ButtonB = styled.div`
  width: 78px;
  text-size: 14px;
  height: 34px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  opacity: 1;
  padding-top: 4px;
  margin-right: 20px;
  text-align: center;
  cursor: pointer;
`;
const ButtonC = styled.div`
  width: 78px;
  height: 34px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  opacity: 1;
  padding-top: 4px;
  text-align: center;
  text-size: 14px;
  cursor: pointer;
`;
const DropDown = styled.div`
  background: #f5f6fd 0% 0% no-repeat padding-box;
  border: 1px solid #d5e0ff;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #b7b7b7;
  height: 40px;
  padding: 10px;
  width: 352px;
  height: 34px;
  padding-top: 5px;
  position: relative;
`;
const DropDownTwo = styled.div`
  background: #f5f6fd 0% 0% no-repeat padding-box;
  border: 1px solid #d5e0ff;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #b7b7b7;
  height: 34px;
  padding-left: 9px;
  padding-top: 6px;
  width: 160px;
  margin-right: 50px;
`;
const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
`;
const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  padding-bottom: 20px;
  border-radius: 0.375rem;
  width: 100%;
  background-color: #ffffff;
  max-width: 563px;
  height: 359px;
`;
const Add = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #303134;
  padding-top: 15px;
  padding-bottom: 40px;
  margin-left: -12px;
`;

const Content = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #303134;
  margin-top: 0.625rem;
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
  justify-content: start;
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
  padding-bottom: 20px;
`;
const LastContainer = styled.div`
  display: flex;
  justify-content: end;
  max-width: 503px;
`;
const NewContainerOne = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 515px;
  padding-bottom: 20px;
`;
