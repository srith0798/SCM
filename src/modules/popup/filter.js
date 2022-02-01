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

  const Close = () => {
    props.click();
    props.filterSearch();
  };

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
                <ButtonA tag={props.select} onClick={() => props.setSelect(1)}>
                  All
                </ButtonA>
                <ButtonB tag={props.select} onClick={() => props.setSelect(2)}>
                  Success
                </ButtonB>
                <ButtonC tag={props.select} onClick={() => props.setSelect(3)}>
                  Fail
                </ButtonC>
              </RowBoxOne>
            </NewContainer>
            <NewContainerOne>
              <Content>Network</Content>

              <select className="select-filter" onChange={(e) => props.setSelectDrop([e.target.value])} value={props.selectDrop}>
                <option className="options-select">https://rpc.xinfin.network</option>
                <option className="options-select">https://rpc.apothem.network</option>
              </select>
            </NewContainerOne>

            <NewContainer style={{ paddingBottom: "20px" }}>
              <Content>Date Range</Content>

              <InputDiv>
                <Input placeholder="From" type="date" onChange={(e) => props.setFromInput([e.target.value])} value={props.fromInput} />
                <Input placeholder="To" type="date" onChange={(e) => props.setToInput([e.target.value])} value={props.toInput} />
              </InputDiv>
            </NewContainer>
            <LastContainer>
              <ApplyButton onClick={() => props.filterSearch()}>Apply</ApplyButton>
              <CancelButton onClick={() => Close()}>Cancel</CancelButton>
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
  border: ${(props) => (props.tag === 1 ? "1px solid #3163f0" : "1px solid #d9d9d9")};
  border-radius: 6px;
  padding-top: 4px;
  margin-right: 20px;
  text-align: center;
  color: ${(props) => (props.tag === 1 ? "#3062ef" : "#303134")};
  text-size: 14px;
  cursor: pointer;
`;
const ButtonB = styled.div`
  width: 78px;
  text-size: 14px;
  height: 34px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: ${(props) => (props.tag === 2 ? "1px solid #3163f0" : "1px solid #d9d9d9")};
  border-radius: 6px;
  opacity: 1;
  padding-top: 4px;
  margin-right: 20px;
  text-align: center;
  cursor: pointer;
  color: ${(props) => (props.tag === 2 ? "#3062ef" : "#303134")};
`;
const ButtonC = styled.div`
  width: 78px;
  height: 34px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: ${(props) => (props.tag === 3 ? "1px solid #3163f0" : "1px solid #d9d9d9")};

  border-radius: 6px;
  opacity: 1;
  padding-top: 4px;
  text-align: center;
  text-size: 14px;
  cursor: pointer;
  color: ${(props) => (props.tag === 3 ? "#3062ef" : "#303134")};
`;

const Input = styled.input`
  background: #f5f6fd 0% 0% no-repeat padding-box;
  border: 1px solid #d5e0ff;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #b7b7b7;
  height: 34px;
  padding-left: 9px;
  margin-left: 17px;
  width: 40%;
`;
const InputDiv = styled.div`
  margin-left: 58px;
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
  white-space: nowrap;
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
