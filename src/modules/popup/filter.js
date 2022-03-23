import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/styles";
import contractsService from "../../services/contractsService";

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "100% !important",
    bottom: "100px",
    maxWidth: "563px",
    height: "325px",
    overflow: "hidden",
    // top: "50px !important",
    ['@media screen and (min-width: 300px) and (max-width: 768px)']: { 
      width: '90% !important',
      bottom: "85px !important",

    
  }}
}));

export default function Filter(props) {
  const classes = useStyles();

  React.useEffect(() => {
    getNetworkList();
  }, []);

  const Close = () => {
    props.click();
  };
  const Apply = () => {
    props.filterSearch();
    props.reset();
    setTimeout(()=> {
      props.click();
    },500)
  };
  const getNetworkList = async (skip = 0, limit = 20) => {
    try {
      const requestData = {
        skip: skip,
        limit: limit,
      };

       await contractsService.getNetworksLists(requestData);
    } catch (e) {
    }
  };

  const ApplyButton = styled.div`
  width: 68px;
  height: 34px;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 3px;
  color: #ffffff;
  padding-top: 6px;
  font-size: 14px;
  margin-right: 25px;
  text-align: center;
  cursor: pointer;

  @media (min-width: 300px) and (max-width: 414px) {
    margin-left: 13px;
    height: 27px;
    width: 70px;
    padding-top: 2px;
  }
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
  @media (min-width: 300px) and (max-width: 414px) {
    height: 27px;
    width: 70px;
    padding-top: 2px;
  }
`;
const ButtonA = styled.div`
  width: 38px;
  height: 34px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: ${(props) =>
    props.tag === 1 ? "1px solid #3163f0" : "1px solid #d9d9d9"};
  border-radius: 6px;
  padding-top: 4px;
  margin-right: 20px;
  text-align: center;
  color: ${(props) => (props.tag === 1 ? "#3062ef" : "#303134")};
  text-size: 14px;
  cursor: pointer;
  @media (min-width: 300px) and (max-width: 414px) {
    width: 44px;
    height: 24px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: ${(props) =>
      props.tag === 1 ? "1px solid #3163f0" : "1px solid #d9d9d9"};
    border-radius: 6px;
    padding: 0px;
    margin-right: 15px;
    text-align: center;
    color: ${(props) => (props.tag === 1 ? "#3062ef" : "#303134")};
    text-size: 14px;
    cursor: pointer;
  }
`;
const ButtonB = styled.div`
  width: 78px;
  text-size: 14px;
  height: 34px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: ${(props) =>
    props.tag === 2 ? "1px solid #3163f0" : "1px solid #d9d9d9"};
  border-radius: 6px;
  opacity: 1;
  padding-top: 4px;
  margin-right: 20px;
  text-align: center;
  cursor: pointer;
  color: ${(props) => (props.tag === 2 ? "#3062ef" : "#303134")};
  @media (min-width: 300px) and (max-width: 414px) {
    width: 78px;
    text-size: 14px;
    height: 24px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: ${(props) =>
      props.tag === 2 ? "1px solid #3163f0" : "1px solid #d9d9d9"};
    border-radius: 6px;
    opacity: 1;
    padding: 0px;
    margin-right: 15px;
    text-align: center;
    cursor: pointer;
  }
`;
const ButtonC = styled.div`
  width: 78px;
  height: 34px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: ${(props) =>
    props.tag === 3 ? "1px solid #3163f0" : "1px solid #d9d9d9"};

  border-radius: 6px;
  opacity: 1;
  padding-top: 4px;
  text-align: center;
  text-size: 14px;
  cursor: pointer;
  color: ${(props) => (props.tag === 3 ? "#3062ef" : "#303134")};
  @media (min-width: 300px) and (max-width: 414px) {
    width: 68px;
    height: 24px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: ${(props) =>
      props.tag === 3 ? "1px solid #3163f0" : "1px solid #d9d9d9"};

    border-radius: 6px;
    opacity: 1;
    padding: 0px;
    text-align: center;
    text-size: 14px;
    cursor: pointer;
    color: ${(props) => (props.tag === 3 ? "#3062ef" : "#303134")};
  }
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
  margin-left: 18px;
  width: 160px;
  @media (min-width: 300px) and (max-width: 767px) {
    margin-left: 5px;
    margin-right: 20px;
    width: 35%;
  }
`;
const InputDiv = styled.div`
  margin-right: 42px;
  padding-bottom: 15px;
  @media (min-width: 300px) and (max-width: 360px) {
    display: flex;
    padding-bottom: 30px;
    margin-right: 0px;
    width: 290px;
  }
  @media (min-width: 361px) and (max-width: 376px) {
    display: flex;
    padding-bottom: 30px;
    margin-right: 0px;
    width: 310px;
  }
  @media (min-width: 377px) and (max-width: 391px) {
    display: flex;
    padding-bottom: 30px;
    margin-right: 0px;
    width: 335px;
  }
  @media (min-width: 392px) and (max-width: 394px) {
    display: flex;
    padding-bottom: 30px;
    margin-right: 0px;
    width: 340px;
  }
  @media (min-width: 395px) and (max-width: 413px) {
    display: flex;
    padding-bottom: 30px;
    margin-right: 0px;
    width: 356px;
  }
  @media (min-width: 414px) and (max-width: 767px) {
    display: flex;
    padding-bottom: 30px;
    margin-right: 0px;
    width: 256px;
  }
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
  @media (min-width: 300px) and (max-width: 414px) {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;

const Content = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #303134;
  white-space: nowrap;
  @media (min-width: 300px) and (max-width: 767px) {
    padding-bottom: 10px;
    font-size: 14px;
    font-weight: 500;
  }
`;

const RowBoxOne = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  max-width: 403px;
  /* @media (min-width: 300px) and (max-width: 414px) {
    max-width: 240px;
    margin-right: 10px;
  } */
  @media (min-width: 300px) and (max-width: 360px) {
    
    max-width: 185px;
    margin-right: 20px;
  }
  @media (min-width: 361px) and (max-width: 376px) {
    
    max-width: 200px;
    margin-right: 20px;
  }
  @media (min-width: 377px) and (max-width: 394px) {
    max-width: 240px;
    margin-right: 10px;
    
  }

  @media (min-width: 395px) and (max-width: 767px) {
    max-width: 240px;
    margin-right: 10px;
  }
`;
const RowContainer = styled.div`
  padding: 18px 14px 12px 12px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 536px;
  @media (min-width: 300px) and (max-width: 414px) {
    padding: 25px 9px 28px 12px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 306px;
  }
`;
const NewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 3 00px;
  padding-bottom: 20px;
  @media (min-width: 300px) and (max-width: 414px) {
    flex-direction: column;
    display: flex;
  }
`;
const NewContainerStatus = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  column-gap: 103px;
  padding-bottom: 20px;
  @media (min-width: 300px) and (max-width: 767px) {
    // flex-direction: column;
    column-gap: 10px;
  }
`;
const LastContainer = styled.div`
  display: flex;
  justify-content: end;
  max-width: 479px;
  @media (min-width: 300px) and (max-width: 360px) {
    
    justify-content: start;
    margin-top: -18px;
    margin-left: 60px;
  }
  @media (min-width: 361px) and (max-width: 376px) {
    
    justify-content: start;
    margin-top: -18px;
    margin-left: 75px;
  }
  @media (min-width: 377px) and (max-width: 394px) {
   
    justify-content: start;
    margin-top: -18px;
    margin-left: 95px;
  }

  @media (min-width: 395px) and (max-width: 767px) {
    display: flex;
    justify-content: start;
    margin-top: -18px;
    margin-left: 115px;
  }
`;
  return (
    <div>
      <Dialog classes={{ paper: classes.dialogBox }} open={true}>
        <MainContainer>
          <Container>
            <RowContainer>
              <Add>Filter Transactions</Add>
            </RowContainer>
            <NewContainerStatus>
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
            </NewContainerStatus>
            <NewContainer style={{ paddingBottom: "20px" }}>
              <Content>Date Range</Content>

              <InputDiv>
                <Input
                  data-placeholder="From"
                  type="date"
                  onChange={(e) => props.setFromInput([e.target.value])}
                  value={props.fromInput}
                  required
                  aria-required="true"
                />
                <Input
                  data-placeholder="To"
                  type="date"
                  onChange={(e) => props.setToInput([e.target.value])}
                  value={props.toInput}
                  required
                  aria-required="true"
                />
              </InputDiv>
            </NewContainer>
            <LastContainer>
              <ApplyButton onClick={() => Apply()}>
                Apply
              </ApplyButton>
              <CancelButton onClick={() => Close()}>Cancel</CancelButton>
            </LastContainer>
          </Container>
        </MainContainer>
      </Dialog>
    </div>
  );
}
