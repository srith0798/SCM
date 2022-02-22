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
  },
}));

export default function Filter(props) {
  const classes = useStyles();
  const [loader, setLoader] = React.useState(false);
  const [address, setAddress] = React.useState([]);
  const [showPlaceHolder, setShowPlaceHolder] = React.useState(false);

  React.useEffect(() => {
    getNetworkList();
  }, []);

  const Close = () => {
    props.click();
    props.filterSearch();
  };
  const getNetworkList = async (skip = 0, limit = 20) => {
    try {
      const requestData = {
        skip: skip,
        limit: limit,
      };

      setLoader(true);
      const response = await contractsService.getNetworksLists(requestData);
      setLoader(false);
      setAddress(response.networkList);
      if (response.networkList.length === 0) setShowPlaceHolder(true);
      else setShowPlaceHolder(false);
    } catch (e) {
      setShowPlaceHolder(true);
      setLoader(false);
    }
  };
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
            {/* <NewContainerOne>
              <Content>Network</Content>

              <select
                className="select-filter"
                placeholder="select network"
                onChange={(e) => props.setSelectDrop([e.target.value])}
                value={props.selectDrop}
              >
                {/* <option className="options-select">
                  https://rpc.xinfin.network
                </option>
                <option className="options-select">
                  https://rpc.apothem.network
                </option> */}
            {/* {address &&
                  address.map((items) => <option>{items.newRpcUrl}</option>)}
              </select> */}
            {/* </NewContainerOne> */}
            <NewContainer style={{ paddingBottom: "20px" }}>
              <Content>Date Range</Content>

              <InputDiv>
                <Input
                  data-placeholder="From"
                  type="date"
                  onChange={(e) => props.setFromInput([e.target.value])}
                  value={props.fromInput}
                  required aria-required="true"
                />
                <Input
                  data-placeholder="To"
                  type="date"
                  onChange={(e) => props.setToInput([e.target.value])}
                  value={props.toInput}
                  required aria-required="true"
                />
              </InputDiv>
            </NewContainer>
            <LastContainer>
              <ApplyButton onClick={() => props.filterSearch()}>
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

const ApplyButton = styled.div`
  width: 68px;
  height: 34px;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 3px;
  color: #ffffff;
  padding-top: 6px;
  font-size: 14px;
  margin-right: 28px;
  text-align: center;
  cursor: pointer;

  @media (min-width: 300px) and (max-width: 414px) {
    margin-left: 13px;
    height: 27px;
    width: 116px;
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
    width: 116px;
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
  width: 44%;
  @media (min-width: 300px) and (max-width: 414px) {
    margin-left: 0px;
    margin-right: 20px;
    width: 50%;
  }
`;
const InputDiv = styled.div`
  margin-right: 42px;
  padding-bottom: 15px;
  @media (min-width: 300px) and (max-width: 414px) {
    display: flex;
    padding-bottom: 30px;
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
  @media (min-width: 300px) and (max-width: 414px) {
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
  @media (min-width: 300px) and (max-width: 414px) {
    max-width: 240px;
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
  max-width: 3 00px;
  padding-bottom: 20px;
  @media (min-width: 300px) and (max-width: 414px) {
    // flex-direction: column;
    // display: flex;
  }
`;
const LastContainer = styled.div`
  display: flex;
  justify-content: end;
  max-width: 466px;
  @media (min-width: 300px) and (max-width: 414px) {
    justify-content: start;
    margin-top: -18px;
    margin-left: -13px;
  }
`;
const NewContainerOne = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 512px;
  padding-bottom: 20px;
  @media (min-width: 300px) and (max-width: 414px) {
    flex-direction: column;
    max-width: 460px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
